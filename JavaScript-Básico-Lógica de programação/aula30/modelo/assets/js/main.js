// const h1 = document.querySelector('.container h1');
// const data = new Date();

// function getDiaSemanaTexto (diaSemana) {
//     let diaSemanaTexto;

//     switch (diaSemana) {
//     case 0:
//         diaSemanaTexto = 'Domingo';
//         return diaSemanaTexto;
//     case 1:
//         diaSemanaTexto = 'segunda-feria';
//         return diaSemanaTexto;
//     case 2:
//         diaSemanaTexto = 'terça-feria';
//         return diaSemanaTexto;
//     case 3:
//         diaSemanaTexto = 'quarta-feria';
//         return diaSemanaTexto;
//     case 4:
//         diaSemanaTexto = 'quinta-feria';
//         return diaSemanaTexto;
//     case 5:
//         diaSemanaTexto = 'sexta-feria';
//         return diaSemanaTexto;
//     case 6:
//         diaSemanaTexto = 'sábado-feria';
//         return diaSemanaTexto;
//     default:
//         diaSemanaTexto = '';
//         return diaSemanaTexto;
//     }
// }

// function getNomesMes(numeroMes) {
//     let nomeMes;

//     switch (numeroMes) {
//     case 0:
//         nomeMes = 'janeiro';
//         return nomeMes;
//     case 1:
//         nomeMes = 'fevereiro';
//         return nomeMes;
//     case 2:
//         nomeMes = 'março';
//         return nomeMes;
//     case 3:
//         nomeMes = 'abriu';
//         return nomeMes;
//     case 4:
//         nomeMes = 'maio';
//         return nomeMes;
//     case 5:
//         nomeMes = 'junho';
//         return nomeMes;
//     case 6:
//         nomeMes = 'julho';
//         return nomeMes;
//     case 7:
//         nomeMes = 'agosto';
//         return nomeMes;
//     case 8:
//         nomeMes = 'setembro';
//         return nomeMes;
//     case 9:
//         nomeMes = 'outubro';
//         return nomeMes;
//     case 10:
//         nomeMes = 'novembro';
//         return nomeMes;
//     case 11:
//         nomeMes = 'dezembro';
//         return nomeMes;
//     }
// }


// function criaData(data) {
//     const diaSemana = data.getDate();
//     const numeroMes = data.getMonth();

//     const nomeDia = getDiaSemanaTexto(diaSemana);
//     const nomeMes = getNomesMes(numeroMes);

//     return (
//     `${nomeDia}, ${data.getDate()} de ${nomeMes} ` + 
//     ` de ${data.getFullYear()}`+ 
//     `${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutos())} `
//     );
// }

// h1.innerHTML = criaData(data);

const h1 = document.querySelector('.container h1');
const data = new Date();
h1.innerHTML = data.toLocaleDateString('pt-BR', {dateStyle: 'full', timeStyle: 'short' });