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
        },
    ]);

    const handleAboveHundred = () => {
        const newGroceryList = groceryList.filter(groceryItem => {
            return groceryItem.price > 100;
        });
        setGroceryList(newGroceryList);
    };

    const handleBelowHundred = () => {
        const newGroceryList = groceryList.filter(groceryItem => {
            return groceryItem.price < 100;
        });
        setGroceryList(newGroceryList);
    };

    const handleShowAscendingOrder = () => {
        const newGroceryList = [...groceryList]; // copy groceryList into a newGroceryList
        newGroceryList.sort((a, b) => {
            return a.price - b.price;
        }); // Sort newGroceryList
        setGroceryList(newGroceryList);
    };

    const handleShowDescendingOrder = () => {
        const newGroceryList = [...groceryList]; // copy groceryList into a newGroceryList
        newGroceryList.sort((a, b) => {
            return b.price - a.price;
        }); // Sort newGroceryList
        setGroceryList(newGroceryList);
    };

    const handleShowMostExpensive = () => {
        const newGroceryList = [...groceryList]; // copy groceryList into a newGroceryList
        newGroceryList.sort((a, b) => {
            return b.price - a.price;
        }); // Sort newGroceryList

        const mostExpensive = newGroceryList[0];

        alert(`the most expensive grocery is ${mostExpensive.name}`);
    };

    const handleShowCheapest = () => {
        const newGroceryList = [...groceryList]; // copy groceryList into a newGroceryList
        newGroceryList.sort((a, b) => {
            return a.price - b.price;
        }); // Sort newGroceryList

        const cheapest = newGroceryList[0];

        alert(`The cheapest grocery is ${cheapest.name}. Its price is ${cheapest.price}`);    
    }

    const handleShowTotalNumber = () => {
        const totalNumber = groceryList.length;
        
        alert(`The total number of groceries is ${totalNumber}`)
    };

    const handleTotalCost = () => {
        const prices = groceryList.map(groceryItem => {
            return groceryItem.price;
        }); // [100, 50, 200]
        const totalCost = prices.reduce((prevValue, currentValue) => {
            return prevValue + currentValue;
        }, 0);
        alert(`The total price is ${totalCost}`);
    }

    const handleAverageCost = () => {
        const prices = groceryList.map(groceryItem => {
            return groceryItem.price;
        }); // [100, 50, 200]
        const totalCost = prices.reduce((prevValue, currentValue) => {
            return prevValue + currentValue;
        }, 0);
        const totalNumber = groceryList.length;
        const averageCost = totalCost / totalNumber;
        alert(`the average price is ${averageCost}`);
    }

    return (
        <div>
            <h1>Grocery List</h1>
            <button onClick={handleAboveHundred}>display groceries above 100</button>
            <button onClick={handleBelowHundred}>display groceries below 100</button>
            <button onClick={handleShowAscendingOrder}>display groceries ascending</button>
            <button onClick={handleShowDescendingOrder}>display groceries descending</button>
            <button onClick={handleShowMostExpensive}>show most expensive</button>
            <button onClick={handleShowCheapest}>show cheapest</button>
            <button onClick={handleShowTotalNumber}>show total number</button>
            <button onClick={handleTotalCost}>show total cost</button>
            <button onClick={handleAverageCost}>show average cost</button>
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