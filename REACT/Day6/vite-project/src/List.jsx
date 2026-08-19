import {useState} from "react";
import Food from "./Food.jsx";


function List() {
    const[foodItems,setFoodItems]=useState(["Pizza","Burger","Pasta"]); 
    function handleChange(){
        setFoodItems(["Dosa",...foodItems]);
    }

    return(
        <>
        <button onClick={handleChange}>Increment</button>
        <Food foods={foodItems} a={10}></Food>
        </>
    )
}
export default List;