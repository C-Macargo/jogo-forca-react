import Jogo from "./components/Jogo"
import Letras from "./components/Letras"
import Chute from "./components/Chute"
import React from 'react'
import palavras from "./components/palavras"
import {useState} from "react"





function App() {
    const [newWanted, setNewWanted] = useState([])
    const [newShowing, setNewShowing] = useState([])
    const [ramdomWordNumber,setRamdomWordNumber ] = useState(Math.floor(Math.random() * palavras.length))
    const [underlines, setUnderlines] = useState([])
    const [arrChosenWord, setArrChosenWord] = useState(ramdomWordNumber)
    const [activeLetters, setActiveLetters] = React.useState('button-key-inactive')
    const [displayHiddenWord, setDisplayHiddenWord] = React.useState('')
    const [clickedLetter, setClickedLetter] = React.useState([])
    const [correctLetter, setCorrectLetter] = React.useState([])
    const [buttonIsDisabled, setButtonIsDisable] = useState(true)
    const [wordList] = useState(palavras)    
    const [testar] = useState([])   
    const [errorCounter, setErrorCounter] = useState(0)
    const [image, setImage] = useState(errorCounter);

    return (
        <>

            <Jogo 
                image = {image}
                errorCounter = {errorCounter}
                setNewWanted = {setNewWanted}
                wordList = {wordList}
                newShowing = {newShowing}
                setNewShowing = {setNewShowing}
                newWanted = {newWanted}
                setUnderlines = {setUnderlines}
                setArrChosenWord = {setArrChosenWord}
                ramdomWordNumber = {ramdomWordNumber}
                setButtonIsDisable = {setButtonIsDisable}
                buttonIsDisabled = {buttonIsDisabled}
                arrChosenWord = {arrChosenWord}
                activeLetters ={activeLetters}
                setActiveLetters={setActiveLetters}
                underlines={underlines}
                displayHiddenWord={displayHiddenWord}
                setDisplayHiddenWord={setDisplayHiddenWord}>
            </Jogo>

            <Letras 
                setErrorCounter = {setErrorCounter}
                errorCounter = {errorCounter}
                setNewShowing={setNewShowing}
                testar = {testar}
                displayHiddenWord = {displayHiddenWord}
                setDisplayHiddenWord={setDisplayHiddenWord}
                underlines= {underlines}
                newWanted = {newWanted}
                newShowing = {newShowing}
                buttonIsDisabled = {buttonIsDisabled}
                setButtonIsDisable = {setButtonIsDisable}
                correctLetter = {correctLetter}
                setCorrectLetter = {setCorrectLetter}
                setClickedLetter = {setClickedLetter}
                clickedLetter = {clickedLetter}
                activeLetters ={activeLetters}
                setActiveLetters={setActiveLetters} >
            </Letras>

            <Chute></Chute>
        </>
    )
}

export default App 


