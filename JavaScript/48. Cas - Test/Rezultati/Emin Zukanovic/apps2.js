const prviArr = [5,6,7,8];
const drugiArr = [1,2,3,"string"];



function drugiZadatak(arr1, arr2) {
    const prviPomocni = arr1.concat(arr2);
    const drugiPomocni = prviPomocni.filter((element) => typeof(element) === "string" && element % 2 === 0 || typeof(element) && element.length % 2 !== 0);
    return drugiPomocni;
}

console.log(drugiZadatak(prviArr,drugiArr));