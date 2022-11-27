
export default function Letras(
    {
        buttonIsDisabled,
        activeLetters,
        newWanted,
        clickedLetter,
        setClickedLetter,
        newShowing,
        setDisplayHiddenWord,
        testar,
        setNewShowing,
        errorCounter,
        setErrorCounter


    }) {

    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    const clickedLetters = [...clickedLetter]
    const finalWordShowing = newShowing
    const finalWordAnswer = [...newWanted]
    testar = [...finalWordShowing]

    let afterErrorCounter = errorCounter        

    function letterClicked(alphabet) {
        if (!clickedLetter.includes(alphabet)) {
            setClickedLetter([...clickedLetter, alphabet])
        }
        testar = [...finalWordShowing]
        if (finalWordAnswer.includes(alphabet)) {
            for (let i = 0; i < finalWordAnswer.length; i++) {
                if (finalWordAnswer[i] === alphabet) {
                    testar[i] = alphabet
                    setNewShowing(testar)

                }
            }
            setDisplayHiddenWord(testar)
        }
        else {
            if(afterErrorCounter <= 5){
                errorCounter++
                setErrorCounter(errorCounter)
                console.log(finalWordAnswer.length)
                console.log(afterErrorCounter)
        }
    }
    }


    return (
        <>
            <div className="keyboard">
                {alphabet.map((alphabet) =>
                    <button
                        onClick={() => letterClicked(alphabet)}
                        disabled={buttonIsDisabled}
                        className={`${activeLetters} ${clickedLetters.includes(alphabet) ? "selecionada" : "estatica"}`}
                        key={alphabet}>
                        {alphabet}
                    </button>)}
            </div>
        </>
    )
}