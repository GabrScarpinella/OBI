function somaNúmerosPares(números) {
    let j;
    for(let i=0;i<números.length;i++){
        if (números[i]%2==0){
            j+=números[i];
        }
    }
    return j;
}

function somaNúmerosÍmpares(números) {
    let j;
    for(let i=0;i<números.length;i++){
        if (números[i]%2==0){
            j+=números[i];
        }
    }
    return j;
}

let lista=[6,17,85,65,12];
console.log(somaNúmerosPares(lista));
console.log(somaNúmerosÍmpares(lista));