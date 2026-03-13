palavra = "kennedy"
letras_acertadas["_","_","_","_","_","_","_"]
acertou = False

def mostrar_letras_acertadas():
    for letra in letras_acertadas:
        print(letra, end=" ")

 print("tente adivinhar a palavra secreta: ")
while(not acertou):
    #mostrar as letras acertas
    mostrar_letras_acertadas()

    chute = input("digite uma letra ")
    indice = 0
    for letra in palavra:
        if chute.upper() == letra:
            letras_acertadas[indice] = letra
        indice = indice + 1 

    if letras_acertadas.count("_") == 0:
        print("parabens voce acertou a palvra secreta")
        acertou = True
        mostrar_letras_acertadas()