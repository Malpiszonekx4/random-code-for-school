import 'dart:io';

String getCategory(double bmi) => switch (bmi) {
  < 16 => "wygłodzenie",
  < 17 => "wychudzenie",
  < 18.5 => "niedowaga",
  < 25 => "pożądana masa ciała",
  < 30 => "nadwaga",
  < 35 => "otyłość I stopnia",
  < 40 => "otyłość II stopnia (duża)",
  >= 40 => "otyłość III stopnia (chorobliwa)",
  _ => ""
};

double readDouble(String msg) {
  stdout.write(msg);

  final line = stdin.readLineSync();
  if (line == null) throw Exception("cannot read stdin");

  var num = double.tryParse(line.replaceFirst(",", "."));
  if (num == null) {
    print('Nieprawidłowe dane!');
    num = readDouble(msg);
  }

  return num;
}
