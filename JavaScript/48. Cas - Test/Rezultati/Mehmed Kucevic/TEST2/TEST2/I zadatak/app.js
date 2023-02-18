function zamenaRedosleda(string) {
  let arr = string.split("");
  for (var i = 0; i < arr.length - 1; i += 2) {
    let tm = arr[i];
    arr[i] = arr[i + 1];
    arr[i + 1] = tm;
  }
  return arr.join("");
}

console.log(zamenaRedosleda("Pera ima devojku"));
