import random

# Configurações do jogo
tentativas = 1
errou = True
sorteio_max = 10
tentativas_max = 3
numero = random.randint(0, sorteio_max)

while True:
    print("1 - fácil")
    print("2 - médio")
    print("3 - difícil")
    opcao = int(input("Escolha a dificuldade de (1 a 3): "))

    if opcao == 1:
        print("Dificuldade Fácil")
        break
    elif opcao == 2:
        print("Dificuldade Médio")
        break
    elif opcao == 3:
        print("Dificuldade Difícil")
        break

while tentativas <= tentativas_max:
    print("Tentativa:", tentativas)
    chute = int(input("Digite o seu chute (0 a 10): "))

    if chute == numero:
        print("Parabéns, você é o bonzão mesmo")
        errou = False
        break
    else:
        print("Errou :c")
        # Dica adicionada aqui
        if chute < numero:
            print("Dica: o número é MAIOR que", chute)
        else:
            print("Dica: o número é MENOR que", chute)

    tentativas = tentativas + 1

if errou == True:
    print("O número sorteado era:", numero)  # mostra p quem errou
    print("### FIM DO JOGO ###")