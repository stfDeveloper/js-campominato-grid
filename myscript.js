let inizio = document.getElementById("inizia");

inizio.addEventListener ("click", function(){
    let difficolta = document.getElementById("userSelect").value;
    let quadrati = document.getElementById("quadrati");
    quadrati=this.innerHTML = "";

    if(difficolta == "facile"){
        for (let index = 0; index < 100; index++) {
            quadrati.innerHTML += `<div class="cento item-${index}">${index}</div>`;
        
    }
}else if(difficolta == "medio"){
    for (let index2 = 0; index2 < 81; index2++) {
        quadrati.innerHTML += `<div class="ottantuno item-${index2}">${index2}</div>`;
        
    }
}else if (difficolta == "difficile"){
    for (let index3 = 0; index3 < 49; index3++) {
        quadrati.innerHTML += `<div class="quarantanove item-${index3}">${index3}</div>`;
        
    }
}
})