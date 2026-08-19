// const props={
//     foods:["Pizza","Burger","Pasta"],
//     a:10,
// }


function Food({foods}) {
    return(
        <>
        <ul>
            {foods.map(food=><li>{food}</li>)}
        </ul>
        </>
    )
   
}
export default Food;