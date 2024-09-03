
export default function AlertShow () {
    const handleClick = () => {
        alert("hello there")
    }
    return (
        <button onClick={handleClick}>
            click me
        </button>
    )
}