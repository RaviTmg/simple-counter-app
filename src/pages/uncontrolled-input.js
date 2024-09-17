import { useRef } from "react"

export default function UncontrolledInput () {
    const inputRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(inputRef.current.value);
    }
 
    return (
        <div>
            <h1>
                Uncontrolled Input
            </h1>
            <form onSubmit={handleSubmit}>
                <input
                    ref={inputRef}
                    type="string"
                />
                <button type="submit">submit</button>
            </form>
        </div>
    )
}