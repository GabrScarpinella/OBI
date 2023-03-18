function média(lista){
    let j;
    for (let i=0; i<lista.length; i++) {
        j+=lista[i];
    }
    return j/lista.length;
}

let lista=[1,3.14,2.718,1.414,1000];
console.log(média(lista));