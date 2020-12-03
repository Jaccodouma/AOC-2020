data = open('input.txt', 'r').read().split('\n')

for number1 in data:
  for number2 in data:
    if ((int(number1) + int(number2)) == 2020):
      print("%s * %s = %i" % (number1, number2, int(number1)*int(number2)))

for number1 in data:
  for number2 in data:
    for number3 in data:
      if ((int(number1) + int(number2) + int(number3)) == 2020):
        print("%s * %s * %s = %i" % (number1, number2, number3, int(number1)*int(number2)*int(number3)))