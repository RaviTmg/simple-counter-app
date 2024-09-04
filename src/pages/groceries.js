import { useState } from "react"

export default function Groceries () {
    const [groceryList, setGroceryList] = useState([
        {
            name: "Aloo",
            price: 100
        },
        {
            name: "Simi",
            price: 50
        },
        {
            name: "farsi",
            price: 200
        }
    ]);

    const handleAboveHundred = () => {
        const newGroceryList = groceryList.filter(groceryItem => {
            return groceryItem.price > 100;
        });
        setGroceryList(newGroceryList);
    };

    return (
        <div>
            <h1>Grocery List</h1>
            <button onClick={handleAboveHundred}>display groceries above 100</button>
            <ul>
                {
                    groceryList.map((groceryItem) => {
                        return (<li>{groceryItem.name} - {groceryItem.price}</li>)
                    })
                }
            </ul>
        </div>
    )
}