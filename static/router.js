function toPage(name){
   // console.log(name);
    fetch(name + ".html")
    .then(x=>{
        return x.text()
        console.log(name);
    })
    .then(y=>{
        console.log(y);
        document.getElementById("container").innerHTML = y})
    .catch(err=>{

    })
};