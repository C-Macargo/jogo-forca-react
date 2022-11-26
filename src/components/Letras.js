export default function Letras() {

const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
return (
    <>
    <div className="keyboard">

        {alphabet.map((alphabet) => <button className="button-key" key={alphabet}>{alphabet.toUpperCase()}</button>)}

    </div>
    </>
)
}