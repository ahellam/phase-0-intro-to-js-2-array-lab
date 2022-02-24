const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    cats.push(name);
}
// destructivelyAppendCat('Ralph');
// cats;

function destructivelyPrependCat(name){
    cats.unshift(name);
}
// destructivelyPrependCat('Bob')
// cats;

function destructivelyRemoveLastCat(){
    cats.splice(-1,1);
}

function destructivelyRemoveFirstCat(){
    cats.splice(0,1);
}

function appendCat(name){
    const newCats = [...cats, name];
    return newCats;
}

function prependCat(name){
    const newCats = [name, ...cats];
    return newCats;
}

function removeLastCat(){
    const lessCats = cats.slice(0, -1);
    return lessCats;
}

function removeFirstCat(){
    const catsCopy = cats.slice(1);
    return catsCopy;
}

