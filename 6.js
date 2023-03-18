function maior(lista){
    let n=lista[0];
    for (let i = 0; i < lista.length; i++) {
        if (lista[i]>n){
            n=lista[i];
        }
    }
    return n;
}

let lista=[1,3.14,2.718,1.414,1000];
console.log(maior(lista));