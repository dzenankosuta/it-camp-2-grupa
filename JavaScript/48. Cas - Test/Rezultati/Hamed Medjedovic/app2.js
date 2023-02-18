niz1=[1,2,3,4,5,6,7,8,10,12]
niz2=["a","b","c",'d','e','f','g','h','i','j','k','l']
const drugi = (arr1, arr2) => {
    const pomocni = arr1.concat(arr2);
    const pomocni1 = pomocni.filter((element) => element % 2 === 0);
    pomocni1.unshift(10, 20);
    return `${pomocni}\n ${pomocni1}`;
  };
  console.log(drugi(niz1, niz2));