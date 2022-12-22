const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

// let genPas = document.getElementById("gen_pas")
// let pasLength = document.getElementById("pas_length_input")
let newPas = ""
let tempstr = ""
let pas1 = document.getElementById("p1")
let pas2 = document.getElementById("p2")

function btn_clicked(){
    pasLength = document.querySelector("#pas_length_input").value;
    // console.log(pasLength)
    pas1.textContent = genRandPas();
    pas2.textContent = genRandPas();
}

function genRandPas(){
    newPas= ""
    for (let i=0; i<pasLength; i++){
        newPas +=  characters[Math.floor(Math.random() * characters.length)]
    }
    return newPas
}

function toclip(a){
    if (a===1){
        navigator.clipboard.writeText(pas1.textContent);
        tempstr = pas1.textContent;
        pas1.textContent = "Copied!"
        setTimeout(pas1.textContent = tempstr,2000)
    }
    else if (a==2){
        navigator.clipboard.writeText(pas2.textContent);
        tempstr = pas2.textContent;
        pas2.textContent = "Copied!"
        setTimeout(pas2.textContent = tempstr,2000)
    }
    // alert("Copied to clipboard");
}