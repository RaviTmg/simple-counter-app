import { useRef } from "react"

export default function RefsDemo () {
    const inputRef = useRef();
    const numericRef = useRef(1);

    const handleClick = () => {
        //inputRef.current is the html input element
        inputRef.current.focus();

        numericRef.current = numericRef.current * 100;
        console.log(numericRef);
    };

    return (
        <div>
            <h1>Refs Demo</h1>
            <input
                ref={inputRef}
                type="string"
            />
            <button
                onClick={handleClick}
            >focus input</button>
        </div>
    )
}