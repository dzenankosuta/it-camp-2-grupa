const prvi = () => {
    const recenica = "Pero ima devojku"
    let duzina = recenica.length;
    let novi = "";
    for (let i = 0; i < duzina; i++)
      if (duzina % 2 === 1 && i === duzina - 1) {
        novi += recenica[i];
      } else if (i % 2 === 0) {
        novi += recenica[i + 1];
      } else if (i % 2 === 1) novi += recenica[i - 1];
    return novi;
  };
  console.log(prvi());