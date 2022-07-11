//Creo un array
//scorro l'array
//stampo il risultato

const lista = [
    "Sale q.b",
    "Pepe q.b",
    "Sale q.b",
    "Uova 4",
    "Formaggio Grattuggiato 200g",
    "Cipolle 1",
    "Zucchine 3/4"
];

const listaDom = document.getElementById('listaSpesa');
let x = 0;

while(x < lista.length){
    listaDom.innerHTML += `<li>${lista[x]}</li>`;
    x++;
}
