alert(78 / (1.71 * 1.71));

var vendas = 10;
var clientesAbordados = 25;
var mediaTentativasPorCliente = 4;

var taxa = 0;

taxa = vendas / clientesAbordados *  mediaTentativasPorCliente;
console.log(taxa);


var trPaciente = document.querySelector('#primeiro-paciente');
var tdPeso = trPaciente.querySelector('.info-peso');
var tdAltura = trPaciente.querySelector('.info-altura');

var peso = tdPeso.textContent;
var altura = tdAltura.textContent;

var imc = peso / ( altura * altura);

var trPaciente = document.querySelector('#primeiro-paciente');
var tdPeso = trPaciente.querySelector('.info-peso');
var tdAltura = trPaciente.querySelector('.info-altura');
var tdImc = trPaciente.querySelector('.info-imc');

var peso = tdPeso.textContent;
var altura = tdAltura.textContent;

var pesoEhValido = true; // assumindo de boa fé que o peso é válido
var alturaEhValida = true; // assumindo de boa fé que a altura é válida

if(peso <=0 || peso >= 1000) {
   pesoEhValido = false;
}

if(altura <= 0 || altura >= 3.00) {
  alturaEhValida = false;
}

if(pesoEhValido && alturaEhValida) {
   var imc = peso / ( altura * altura); 
}

var setorTI = true;
var gerente = true;
if(setorTI == true || gerente == true){
    console.log("Acesso permitido");
}else{
    console.log("Acesso negado")
}
