import { useState } from "react";

const colors = ["white", "blue", "red", "green", "yellow"];

export const BackgroundChanger = ()  => {
    const [backgroundColor, setBackgroundColor] = useState("blue");

    const handleClick = () => {
        const randomNumber = Math.random();
        const randomIndex = Math.floor(randomNumber * colors.length);
        const randomColor = colors[randomIndex];
        setBackgroundColor(randomColor);
    };

    const handleSelectColor = (e) => {
        setBackgroundColor(e.target.value);
    }

    return (
        <div style={{
            backgroundColor: backgroundColor,
        }} >
            <h1>Background Changer</h1>
            <button onClick={handleClick} >change color</button>
            <div>
                <label>Select a color</label>
                <select 
                    value={backgroundColor} 
                    onChange={handleSelectColor}
                >
                    {
                        colors.map((color) => {
                            return (
                                <option value={color}>{color}</option>
                            )
                        })
                    }
                </select>
            </div>

            <div>
                
                <label>
                    Blue
                    <input 
                        type="radio"
                        value="blue"
                        checked={backgroundColor === "blue"}
                        onChange={handleSelectColor}
                    />
                </label>
                <label>
                    Green
                    <input 
                        type="radio"
                        value="green"
                        checked={backgroundColor === "green"}
                        onChange={handleSelectColor}
                    />
                </label>
            </div>
        </div>
    );
}