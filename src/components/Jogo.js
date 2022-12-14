
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
    image,
    statusColor,
    setImage,
    setErrorCounter,
    setStatusColor,
    setClickedLetter,
    setInputUnlocked,
    setChosedword,
    chosedword


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

        setStatusColor("")
        setErrorCounter(0);
        setImage(errorCounter);
        generateRandomWord()
        setButtonIsDisable(false)
        setDisplayHiddenWord(hiddenChosenWordArray)
        setActiveLetters("button-key-active")
        setNewWanted(chosenWordArray)
        setNewShowing(hiddenChosenWordArray)
        console.log(chosenWord)
        setClickedLetter([])
        setInputUnlocked(false)
        setChosedword(chosenWord)

    } 



    return(
        
        <div className="encompassing-container">
                <div className="top-container-left">
                    <img data-test="game-image" src={`./assets/forca${image ? errorCounter : errorCounter}.png`} alt="forca"></img>
                </div>
                <div className="top-container-right">
                    <div className="word-chose-button">
                        <button data-test="choose-word" onClick={activateWords}>Escolher Palavra</button>
                    </div>
                    <div  className="chosen-word-container">            
                        <h1 data-test="word" data-answer={`${chosedword}`} className={`${statusColor}`} > {displayHiddenWord} </h1>
                    </div>
                </div>
            </div>
    )


}

