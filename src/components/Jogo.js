
import React from 'react'


export default function Jogo({  
    wordList,
    displayHiddenWord,
    setDisplayHiddenWord,
    setButtonIsDisable,
    setActiveLetters,
    setNewWanted,
    setNewShowing,
    errorCounter,
    image
    
}){

    let chosenWord = ""
    let chosenWordArray = []
    let hiddenChosenWordArray = []
    
    function generateRandomWord(){
        const wordNumber = Math.floor(Math.random() * wordList.length)
        chosenWord = wordList[wordNumber]
        chosenWordArray = chosenWord.split("")
        chosenWordArray.forEach(() => {hiddenChosenWordArray.push(" _")})

    }

    function activateWords(){

        generateRandomWord()
        setButtonIsDisable(false)
        setDisplayHiddenWord(hiddenChosenWordArray)
        setActiveLetters("button-key-active")
        setNewWanted(chosenWordArray)
        setNewShowing(hiddenChosenWordArray)
        console.log(chosenWord)

    } 



    return(
        
        <div className="encompassing-container">
                <div className="top-container-left">
                    <img src={`./assets/forca${image ? errorCounter : errorCounter}.png`} alt="forca"></img>
                </div>
                <div className="top-container-right">
                    <div className="word-chose-button">
                        <button onClick={activateWords}>Escolher Palavra</button>
                    </div>
                    <div className="chosen-word-container">            
                        <h1 > {displayHiddenWord} </h1>
                    </div>
                </div>
            </div>
    )


}

