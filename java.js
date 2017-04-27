/**
 * Created by Ucenik on 27.4.2017..
 */

var x = document.getElementById("mijenjaza");
var y = 1;
document.getElementById("sir").innerHTML = document.getElementById("pekmez").innerHTML;

function ucitaj(){
    document.getElementById("slika").src = "v2-cute-cat-picture.jpg";
    x.style.display = "none";
}

function slikatron(){
    if(y === 1){
        document.getElementById("slika").src = "picture-015.jpg";
        y = 0;
    }else{
        document.getElementById("slika").src = "v2-cute-cat-picture.jpg";
        y = 1;
    }
}

function boja(){
    document.getElementById("pekmez").style.color = "blue";
}

function prikazi() {
    if(x.style.display === "none"){
        x.style.display = "block";
        document.getElementById("gumb").innerHTML = "sakrij";
    }else{
        x.style.display = "none";
        document.getElementById("gumb").innerHTML = "prikazi";
    }
}
