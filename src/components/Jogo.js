
import React from 'react'


export default function Jogo (props){

    const [displayUnderlines, setDisplayUnderlines] = React.useState('')
    


    function activateWords(){
        setDisplayUnderlines(props.underlines)
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
                        {displayUnderlines}
                    </div>
                </div>
            </div>
    )


}

