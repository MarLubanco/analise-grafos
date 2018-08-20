var entrada = [0, 1, 2, 3, 4, 5, 6, 7, 6, 7]
var contador = entrada.length;
var grafos = [];
var finalizado = {};
for (var i = 0; i < entrada.length; i++) {
    debugger
    if (i % 2 === 0) {
        if (grafos[entrada[i]]) {
                if (grafos[entrada[i]] == entrada[i+1]) {
                    console.log("Valor com ciclo :" + grafos[entrada[i]] + ' ' + "contador " +  contador + " CICLO FORMADO");
                } else {
                    grafos[entrada[i]].push(entrada[i + 1]);
                    grafos[entrada[i + 1]].push(entrada[i]);
                }
        } else {
            grafos[entrada[i]] = [entrada[i + 1]];
            grafos[entrada[i + 1]] = [entrada[i]];
            contador = contador - 1
            console.log(contador)
        }
    }

}