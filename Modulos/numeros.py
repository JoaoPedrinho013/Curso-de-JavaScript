from uteis import numeros

numero = int(input('Digite um valor: '))
fat = numeros.fatorial(numero)
print(f'O fatorial de {numero} é {fat}')
print(f'O dobro de {numero} é {numeros.dobro(numero)}')
print(f'O triplo de {numero} é {numeros.triplo(numero)}')
