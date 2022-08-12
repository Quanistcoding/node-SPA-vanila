function toPage(name){
    fetch(name + ".html")
    .then(x=>{
        return x.text()
    })
    .then(y=>{
        document.getElementById("container").innerHTML = y})
    .catch(err=>{
        console.log(err);
    })
};

window.onhashchange = () =>{
    let hash = location.hash;
    if(hash == ""){
        toPage("/pages/home")}
    else{
        hash = hash.replace("#","");
        hash = "/pages/" + hash;
        console.log(hash);
        toPage(hash);
    }
};

//Server Home page at the start

window.onhashchange();

