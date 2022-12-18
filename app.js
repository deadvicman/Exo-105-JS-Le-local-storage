let myArray = function (nom, prenom){
    this.test = nom,
        this.test = prenom;
}

const storage = window.localStorage;
storage.setItem('key', "Material")
storage.setItem('Table', "myArray")
storage.setItem('number', 18)
storage.setItem('color', "yellow")

console.log(storage)

let myDiv = document.getElementById("result")

let myFunc = function (type, color, number){

    this.color = "red"
    this.type = "Materiel"
    this.number = 26

    myDiv.style.fontSize = "18px"
    myDiv.innerHTML = "Votre thème : " + this.color + " de type : " + this.type + " de taille " + this.number + " px" + "<br>";
    myDiv.innerHTML += "Votre thème : " + storage.getItem("color") + " de type : " + storage.getItem("key") + " de taille " + storage.getItem("number") + " px";
}

let myDiv2 = myFunc()