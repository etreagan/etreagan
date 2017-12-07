import random
import sys

#Almost Mastermind

def doguess():
    global guess
    guess = input("Input guess:\n")
    if len(guess) != 4:
        print("Invalid amount of characters! ("+str(len(guess))+"/4)")
        doguess()

def playgame():
    global guess
    global code
    colors = ["r","g","b","y"]
    code = ""
    guess = ""
    guesses = 5
    n = 0
    
    while n<4:
        code = code+colors[random.randint(0,3)]
        n = n+1
    while guesses>0:
        print("Guesses left: "+str(guesses))
        guess = ""
        doguess()
        output = ""
        n = 0
        while n<4:
            if guess[n] == code[n]:
                output = output+"O"
            else:
                output = output+"X"
            n = n+1
        if output == "OOOO":
            print("You win! The code was: "+code+"! You guessed it with "+str(guesses)+" guesses left!")
            goagain = input("Play again? (y/n)\n")
            if goagain == "y":
                playgame()
            else:
                sys.exit()
        else:
            print(output)
        guesses = guesses-1
playgame()
print("Game over! The code was: "+code)
goagain = input("Play again? (y/n)\n")
if goagain == "y":
    playgame()
else:
    sys.exit()
