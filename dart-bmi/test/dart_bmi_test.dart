import 'package:dart_bmi/dart_bmi.dart';
import 'package:test/test.dart';

void main() {
  group('bmi category', () {
    test('test1', () {
      expect(getCategory(27.53), "nadwaga");
    });
    test('test2', () {
      expect(getCategory(19.04), "pożądana masa ciała");
    });
    test('test3', () {
      expect(getCategory(17), "niedowaga");
    });
    test('test4', () {
      expect(getCategory(29.99), "nadwaga");
    });
    test('test5', () {
      expect(getCategory(5), "wygłodzenie");
    });
    test('test6', () {
      expect(getCategory(45), "otyłość III stopnia (chorobliwa)");
    });
    test('test7', () {
      expect(getCategory(69), "otyłość III stopnia (chorobliwa)");
    });
    test('test8', () {
      expect(getCategory(32), "otyłość I stopnia");
    });
  });
}
