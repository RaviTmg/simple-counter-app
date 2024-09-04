import { useState } from "react";

export default function Greeting () {
    const [inputValue, setInputValue] = useState(null);
    const [text, setText] = useState(null)
    
    const handleInput = (e) => {
        setInputValue(e.target.value);
    };

    const handleClick = () => {
        setText(inputValue);
    };

    return (
        <div>
            <input onInput={handleInput}/>
            <button onClick={handleClick}>enter</button>
            <div>
                <div>
                    Greetings!!
                </div>
                <div>
                    {text}
                </div>
            </div>
        </div>
    )
}