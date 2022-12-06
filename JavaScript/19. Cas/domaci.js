function limunada(par1, par2) {
  const ukupnoFlasa = Math.floor(par2 / par1);
  if (par1 > 5 || par1 <= 0 || isNaN(par1)) {
    return "Zapremina flase mora biti izmedju 0l i 5l.";
  } else if (par2 > 50 || par2 <= 0 || isNaN(par2)) {
    return "Zapremina limunade mora biti izmedju 0l i 50l.";
  } else {
    return (
      "Sa datim zapreminama mozemo napuniti " + ukupnoFlasa + " flasa limunade."
    );
  }
}

console.log(limunada(1.5, 10));
console.log(limunada(1.5, 60));
console.log(limunada(6, 40));
