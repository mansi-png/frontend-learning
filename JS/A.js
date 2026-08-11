console.log("hello, world!");       
fetch("https://api.github.com/users")
.then((response) => {

    if(!response.ok){
        throw new Error("Data is not present in server");
    }
    return response.json();
})

.then((data) => {
   // console.log(data);
   const parent=document.getElementById("first");
   for(let i=0;i<data.length;i++){
   const image=document.createElement("img");
   image.src=data[i].avatar_url;
   image.style.height="100px";
   image.style.width="100px";
   parent.append(image);
  
   }
})

.catch((error)=>{
    const parent=document.getElementById("first");
    parent.textContent=error.message;
})







