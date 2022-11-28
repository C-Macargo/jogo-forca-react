export default function Chute({
    newWanted,
    setHypothesesInput,
    hypothesesInput,
    setDisplayHiddenWord,
    setStatusColor,
    setButtonIsDisable,
    setErrorCounter,
    inputUnlocked,
    setInputUnlocked
}) {


    const correctHypotheses = [...newWanted]
    const correctHypothesesString = correctHypotheses.join("")
    console.log(correctHypothesesString)

    function takeGuess(){
        if(hypothesesInput === correctHypothesesString){
            alert("GG")
            setButtonIsDisable(true)
            setDisplayHiddenWord(correctHypotheses)
            setStatusColor("win")
            setInputUnlocked(true)

            



        }else{
            alert("Otario")
            setErrorCounter(6)
            setDisplayHiddenWord(correctHypotheses)
            setStatusColor("lose")
            setButtonIsDisable(true)
            setInputUnlocked(true)
        }
    }


    return (
        <div className="chute">
            <p>Já sei a palavra!</p>
            <input
                data-test="guess-input"
                disabled = {inputUnlocked}
                type="text"
                name="name"
                value={hypothesesInput}
                onChange={exchange => setHypothesesInput(exchange.target.value)}
            />
            <button data-test="guess-button" disabled = {inputUnlocked} onClick={takeGuess}>Chutar!</button>
        </div>
    )

}