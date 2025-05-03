const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let numero of numeros) {
  if (numero === 5 || numero === 2) {;
    console.log("Numero Pulado");
    continue; 
  }
  console.log(numero);
    if (numero === 8) {
        console.log("Numero 8 encontrado, saindo do loop.");
        break; // Sai do loop quando o número é 8
    }
}