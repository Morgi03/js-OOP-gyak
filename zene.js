class Zene {
    #cim;
    #hossz;
    constructor(cim,hossz){
        this.#cim = cim;
        this.#hossz = hossz;
    }
    get Cime(){
        return this.#cim;
    }
    get Hossza(){
        return this.#hossz;
    }
}

class Zenek {
    #zenek;
    constructor(){
        this.zenek = [];
    }
    addZene(zene) {
        this.zenek.push(zene);
    }
}



let zenelista = new Zenek();
let osszeshossz = 0;
/*
var zene1 = new Zene('GSG',341);
var zene2 = new Zene('GSsdfgsgG',3431);
zenelista.addZene(zene1);
zenelista.addZene(zene2);

console.log(zenelista[0].Hossza+", "+zenelista[1].Hossza);
*/

function kattintas() {
let cim = document.getElementById('nev').textContent;
let hossz = document.getElementById('szamhossz').textContent;
let zene = new Zene(cim,hossz);
zenelista.addZene(zene);
document.getElementById('osszesen').innerHTML = osszeshossz;
for (const z in zenelista) {
   osszeshossz = osszeshossz + z.Hossza;
}
document.getElementById('osszesen').innerHTML = osszeshossz;
for (let i = 0; i < zenelista.length; i++) {
    osszeshossz = osszeshossz + zenelistaĐ[i];
}
document.getElementById('osszesen').innerHTML = osszeshossz;
}



function init(){
    document.getElementById('gomb').addEventListener('click',kattintas)
}
document.addEventListener('DOMContentLoaded', init);