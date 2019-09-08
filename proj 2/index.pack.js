// Qual restaurante eu vou hoje?

const restaurantes = {
	"Ebisu":"Domingo",
	"Kanoa":"Segunda",
	"Higoi":"Terça",
	"Tug":"Quarta",
	"Fast":"Quinta",
	"Daasu":"Sexta",
	"Matsuri":"Sábado"
}

const trainingData = [];

for (let restauranteNome in restaurantes) {
	const dia = restaurantes[restauranteNome];
	trainingData.push({
		input: { [dia]:1 },
		output: { [restauranteNome]:1 }
	});
}

const net = new brain.NeuralNetwork({ hiddenLayers: [3] });
const stats = net.train(trainingData);

console.log(stats);

//console.log(net.run({'Quarta':1}));

// Qual o mais provável ?

function qualRestaurante(dia) {
    const result = net.run({ [dia]: 1 });
    let maiorValor = 0;
    let melhorRestaurante = '';
    for (let restauranteNome in result) {
        if (result[restauranteNome] > maiorValor) {
            maiorValor = result[restauranteNome];
            melhorRestaurante = restauranteNome;
        }
    }
    
    return melhorRestaurante;
}

console.log(qualRestaurante("Quarta"));