function retornaHora(data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError("O parâmetro deve ser uma instância de Date.");
    }

    if (!data) {
        data = new Date();
}

return data.toLocaleTimeString("pt-BR", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
    });
}

try {
    const data = new Date("2023-10-01T12:00:00Z");
    const hora = retornaHora(data);
    console.log(hora); // Saída: 09:00:00 (dependendo do fuso horário)
} catch (error) {
    if (error instanceof TypeError) {
        console.error("Erro de tipo:", error.message);
    } else {
        console.error("Erro inesperado:", error.message);
    }
} finally {
    console.log("Execução finalizada.");
}