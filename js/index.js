document.addEventListener("DOMContentLoaded", function() {
    // Seleciona o formulário
    const formulario = document.getElementById("formulario");

    // Evento de submit
    formulario.addEventListener("submit", function(event) {
        event.preventDefault(); // Evita que o formulário seja enviado

        // Pega os valores dos inputs
        const peso = document.getElementById("peso").value;
        const altura = document.getElementById("altura").value;
        const idade = document.getElementById("idade").value;
        const gastoCaloricoDiario = 400
        const taxaMetabolicaBasal =  66 + (13.7 * peso) + (5 * altura) - (6.8 * idade) + gastoCaloricoDiario
        var quantidadeProteina = 1.8 * peso
        // Pega o valor selecionado nos radio buttons
        const dieta = document.querySelector('input[name="dieta"]:checked')?.value;
        var quantidadeGordura = 1.5 * peso
        if(dieta == 'hipercalorico'){
            var SuperAvitCalorico = 1.2
        }else{
            var SuperAvitCalorico = 0.8
            var quantidadeGordura = ((taxaMetabolicaBasal * SuperAvitCalorico) * 0.3) / 9
        }
        const kcalProteina = quantidadeProteina * 4
        const kcalGordura = quantidadeGordura * 9
        var quantidadeCarboidrato = (taxaMetabolicaBasal * SuperAvitCalorico - (kcalGordura + kcalProteina)) / 4
        if(dieta == 'hipocalorico'){
            var quantidadeCarboidrato = ((taxaMetabolicaBasal * SuperAvitCalorico) * 0.45) / 4
        }
        document.querySelector('#txtProt').textContent = parseInt(quantidadeProteina) + 'g'
        document.querySelector('#txtGord').textContent = parseInt(quantidadeGordura) + 'g'
        document.querySelector('#txtCarb').textContent = parseInt(quantidadeCarboidrato) + 'g'
        document.querySelector('#txtGastoCalorico').textContent = parseInt(taxaMetabolicaBasal) + 'kcal'
        document.querySelector('#txtObjetivo').textContent = parseInt(taxaMetabolicaBasal * SuperAvitCalorico) + 'kcal'


        

        console.log(taxaMetabolicaBasal)
        console.log("Peso: " + peso);
        console.log("Altura: " + altura);
        console.log("Idade: " + idade);
        console.log("Dieta: " + dieta);
    });
});