function somaLista(números) {
    let j;
    for (let i=0; i<números.length; i++) {
        j+=números[i];
    }
    return j;
}

let lista=[1,3.14,2.718,1.414,1000];
console.log(somaLista(lista));