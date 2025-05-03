// include vai retornar true se a string incluir a substring passada como argumento
// startsWith vai retornar true se a string começar com a substring passada como argumento
// endsWith vai retornar true se a string terminar com a substring passada como argumento

let nomes = ["Ana", "Joana", "Carlos", "Maria", "José", "Antônio", "João", "Pedro", "Paulo", "Lucas", "Luciana", "Luciano"]

if (nomes.includes("Ana")) {
    console.log("Ana está na lista")
} else {
    console.log("Ana não está na lista")
}

let nome = "Maria"
if (nome.startsWith("Mar")) {
    console.log("O nome começa com Mar")
} else {
    console.log("O nome não começa com Mar")
} 

if (nome.endsWith("ao")) {
    console.log("O nome termina com ao")
} else {
    console.log("O nome não termina com ao")
}

