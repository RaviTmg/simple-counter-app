import { useState } from "react";

export default function Shopping () {
    const [shoppingList, setShoppingList] = useState([
        {
            name: "Tshirt",
            size: ["S"],
            quantity: 50
        },
        {
            name: "Pant",
            size: ["M", "L"],
            quantity: 15
        },
        {
            name: "Jacket",
            size: ["S", "M", "L"],
            quantity: 20
        },
    ]);

    const handleShowSmall = () => {
        const filteredList = shoppingList.filter(shoppingItem => {
            const smallSizeItem = shoppingItem.size.find(size => {
                return size == "S"
            });
            return smallSizeItem !== undefined;
        });
        setShoppingList(filteredList);
    };

    const handleShowMedium = () => {
        const filteredList = shoppingList.filter(shoppingItem => {
            const smallSizeItem = shoppingItem.size.find(size => {
                return size == "M"
            });
            return smallSizeItem !== undefined;
        });
        const mediumOnlyMapped = filteredList.map(item => {
            return {
                ...item,
                size: ["M"]
            }
        })
        setShoppingList(mediumOnlyMapped);
    }

    const handleSmallOrMedium = () => {
        const filteredList = shoppingList.filter(shoppingItem => {
            const smallSizeItem = shoppingItem.size.find(size => {
                return size == "M" || size === "S"
            });
            return smallSizeItem !== undefined;
        });
        const mediumOnlyMapped = filteredList.map(item => {
            return {
                ...item,
                size: item.size.filter((size) => {
                    return size == "M" || size === "S"
                })
            }
        })
        setShoppingList(mediumOnlyMapped);
    };

    const handleSortAscending = () => {

        const newList = [...shoppingList];
        newList.sort(function(a, b) { // a = t, b = p
            let x = a.name.toUpperCase();
            let y = b.name.toUpperCase();
            if (x < y) {return -1;} // false
            if (x > y) {return 1;} // true --> b=p comes before a=t
            return 0;
        });
        setShoppingList(newList);
    };
    
    return (<div>
        <h1>Shopping List</h1>
        <button onClick={handleShowSmall}>show small</button>
        <button onClick={handleShowMedium}>show medium</button>
        <button onClick={handleSmallOrMedium}>show small or medium</button>
        <button onClick={handleSortAscending}>sort ascending</button>
        <ul>
            {
                shoppingList.map(shoppingItem => {
                    return (
                        <li>
                            <div>name: {shoppingItem.name}</div>
                            <ul>
                                sizes:
                                {
                                    shoppingItem.size.map(size => {
                                        return (<li>{size}</li>)
                                    })
                                }
                            </ul>
                            <div>quantity: {shoppingItem.quantity}</div>
                        </li>
                    )
                })
            }
        </ul>
    </div>)
}