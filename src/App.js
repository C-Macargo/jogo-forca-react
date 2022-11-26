import Jogo from "./components/Jogo"
import Letras from "./components/Letras"
import Chute from "./components/Chute"
import React from 'react'
import palavras from "./components/palavras"

/* Code to chose a random word and turn the word in to underlines */
const wordNumber = Math.floor(Math.random() * palavras.length)
const chosenWord = palavras[wordNumber]
const arrChosenWord = chosenWord.split("")
let underlines = [];
arrChosenWord.forEach(() => {underlines.push(" _")})
console.log(arrChosenWord)
console.log(underlines)


function App() {

    const [activeLetters, setActiveLetters] = React.useState('startLetter')


    return (
        <>
            <Jogo underlines={underlines}  ></Jogo>
            <Letras></Letras>
            <Chute></Chute>
        </>
    )
}

export default App 
