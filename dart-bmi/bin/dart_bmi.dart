import 'package:dart_bmi/dart_bmi.dart';
import 'package:intl/intl.dart';

void main(List<String> arguments) async {
  final numberFormat = NumberFormat("####.##", "pl_PL");

  final mass = readDouble('Podaj masę [kg]: ');
  final height = readDouble('Podaj wysokość [m]: ');

  final bmi = mass / (height * height);
  print('BMI = ${numberFormat.format(bmi)} [kg/m²]');

  final category = getCategory(bmi);
  print('Twoja kategoria to: $category');
}
