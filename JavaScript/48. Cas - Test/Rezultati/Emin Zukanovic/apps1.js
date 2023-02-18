const pera = "Pera ima devojku";

function menjajRedosled(string) {
    const newSring = "";
    for(let i = 0; i < string.length;i++){
        if(string.length % 2 === 0 && i === string.length - 1) {
            newSring += string[i];
        } else if(i % 2 === 0) {
            newSring += string[i + 1];
        } else if(i % 2 === 1) {
            newSring += string[i - 1];
        } 
    }
    return newSring;
}

console.log(menjajRedosled(pera));