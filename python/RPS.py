import random

def playgame():
    playerchoice = input("Choice? (/r/ock, /p/aper, /s/cissors)\n")
    if playerchoice == "r":
        print("Player chose rock!")
    else:
        if playerchoice == "p":
            print("Player chose Paper!")
        else:
            if playerchoice == "s":
                print("Player chose Scissors!")
            else:
                print("Incomaptible input!")
                playgame()
    possiblecpuchoices = ['r', 'p', 's']
    cpuchoice = random.SystemRandom().choice(possiblecpuchoices)
    if cpuchoice == "r":
        print("CPU chose rock!")
    if cpuchoice == "p":
        print("CPU chose Paper!")
    if cpuchoice == "s":
        print("CPU chose Scissors!")
    if playerchoice == "r":
        if cpuchoice == "r":
            print("It's a draw!")
        if cpuchoice == "p":
            print("CPU wins!")
        if cpuchoice == "s":
            print("Player wins!")
    if playerchoice == "p":
        if cpuchoice == "r":
            print("Player wins!")
        if cpuchoice == "p":
            print("It's a draw!")
        if cpuchoice == "s":
            print("CPU wins!")
    if playerchoice == "s":
        if cpuchoice == "r":
            print("CPU wins!")
        if cpuchoice == "p":
            print("Player wins!")
        if cpuchoice == "s":
            print("It's a draw!")
    goagain = input("Play again? (y/n)\n")
    if goagain == "y":
        playgame()
playgame()
