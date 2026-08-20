// const props={
//     foods:["Pizza","Burger","Pasta"],
//     a:10,
// }


function Food({foods}) {
    return(
        <>
        <ul>
            {foods.map(food=><li key={food}>{food}</li>)}
        </ul>
        </>
    )
   
}
export default Food;