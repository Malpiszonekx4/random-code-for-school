module Main where

import System.IO
import Text.Read

readFloat :: String -> IO Float
readFloat msg = do
    putStr msg
    hFlush stdout
    line <- getLine
    case readMaybe line of
        Just x -> return x
        _      -> putStrLn "Błędna wartość! Musisz podać liczbę." >> readFloat msg
        
readYesNo :: String -> IO Bool
readYesNo msg = do
    putStr msg
    hFlush stdout
    line <- getLine
    case line of
        "t" -> return True
        "n" -> return False
        _      -> putStrLn "Błędna wartość! Musisz podać \"t\" lub \"n\"." >> readYesNo msg

calc :: IO ()
calc = do
    a <- readFloat "Podaj a: "
    b <- readFloat "Podaj b: "
    c <- readFloat "Podaj c: "
    
    if a == 0 then do
        putStrLn "To nie trójmian kwadratowy!"
    else do
        let delta = (b**2) - (4 * a * c)
        putStr "delta="
        print delta
        if delta < 0 then do
            putStrLn "Nie ma pierwiastków!"
        else if delta == 0 then do
            let x = -b / (2 * a)
            putStr "x = "
            print x
        else do 
            let x1 = (-b - sqrt delta) / (2 * a)
            let x2 = (-b + sqrt delta) / (2 * a)
            putStr "x1 = "
            print x1
            putStr "x2 = "
            print x2

main :: IO ()
main = do
    calc
    kontynuuj <- readYesNo "Czy chcesz kontynuować? [t/n] "
    if kontynuuj then main else putStr ""