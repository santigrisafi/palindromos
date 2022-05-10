let getString = () => {
  return prompt("Ingrese la cadena");
};

let validatePalindromo = () => {
  let string = getString();
  let chars = [...string];
  let charsReverse = Array.from(string).reverse();
  let palindromos = false;
  for (let i = 0; i < chars.length; i++) {
    palindromos = chars[i] === charsReverse[i] ? true : false;
  }
  alert(
    palindromos
      ? `La palabra ${string} es Palindromo`
      : `La palabra ${string} no es palindromo`
  );
};
