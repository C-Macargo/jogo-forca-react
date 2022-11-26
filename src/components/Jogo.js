
import React from 'react'


export default function Jogo (props){



    function activateWords(){
        props.setDisplayUnderlines(props.underlines)
        props.setActiveLetters("button-key-active")
    } 


    return(
        <div className="encompassing-container">
                <div className="top-container-left">
                    <img src="./assets/forca0.png"></img>
                </div>
                <div className="top-container-right">
                    <div className="word-chose-button">
                        <button onClick={activateWords}>Escolher Palavra</button>
                    </div>
                    <div className="chosen-word-container">            
                        {props.displayUnderlines}
                    </div>
                </div>
            </div>
    )


}

