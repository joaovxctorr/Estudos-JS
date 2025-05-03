const data = new Date('2023-10-01');
let diaDaSemana = data.getDay();
let diaDaSemanaTexto = '';

switch (diaDaSemana) {
    case 0:
        diaDaSemanaTexto = 'Domingo';
        break;
    case 1:
        diaDaSemanaTexto = 'Segunda-feira';
        break;
    case 2:
        diaDaSemanaTexto = 'Terça-feira';
        break;
    case 3:
        diaDaSemanaTexto = 'Quarta-feira';
        break;
    case 4:
        diaDaSemanaTexto = 'Quinta-feira';
        break;
    case 5:
        diaDaSemanaTexto = 'Sexta-feira';
        break;
    case 6:
        diaDaSemanaTexto = 'Sábado';
        break;
    default:
        diaDaSemanaTexto = '';
    }

console.log(diaDaSemanaTexto); // Domingo
console.log(diaDaSemana); // 0