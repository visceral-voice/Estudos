//window.addEventListener("load",start);
var globalRangeNumber = null;
function start(){
   globalRangeNumber = document.querySelector("#numberRange");
   initializeValues();
}

function initializeValues(){
  globalRangeNumber.value=0;
  globalRangeNumber.addEventListener('input', handleRangeChanged);
}

function handleRangeChanged(event){
  var number = "Número inválido"
  var rangeNumber = event.target.value;
  var actualNumber = document.querySelector("#numberValue");
  actualNumber.value = rangeNumber;

  var actualExtense = document.querySelector("#numberExtense");
  if (rangeNumber.length === 1) number = displayOneNumber(rangeNumber);
  if (rangeNumber.length === 2) number = displayTwoNumber(rangeNumber);
  if (rangeNumber.length === 3) number = displayThreeNumber(rangeNumber);
  actualExtense.value = number;
}

function displayOneNumber(rangeNumber){
  var number = "";
  if(rangeNumber === "0") number = "Zero";
  if(rangeNumber === "1") number = "Um";
  if(rangeNumber === "2") number = "Dois";
  if(rangeNumber === "3") number = "Três";
  if(rangeNumber === "4") number = "Quatro";
  if(rangeNumber === "5") number = "Cinco";
  if(rangeNumber === "6") number = "Seis";
  if(rangeNumber === "7") number = "Sete";
  if(rangeNumber === "8") number = "Oito";
  if(rangeNumber === "9") number = "Nove";
  return number;
}
function displayTwoNumber(rangeNumber){
  var number = "";
  if(rangeNumber === "10") number = "Dez";
  if(rangeNumber === "11") number = "Onze";
  if(rangeNumber === "12") number = "Doze";
  if(rangeNumber === "13") number = "Treze";
  if(rangeNumber === "14") number = "Quatorze";
  if(rangeNumber === "15") number = "Quinze";
  if(rangeNumber === "16") number = "Desseseis";
  if(rangeNumber === "17") number = "Dessesete";
  if(rangeNumber === "18") number = "Dezoito";
  if(rangeNumber === "19") number = "Dezenove";
  if(rangeNumber === "20") number = "Vinte";
  if(rangeNumber === "30") number = "Trinta";
  if(rangeNumber === "40") number = "Quarenta";
  if(rangeNumber === "50") number = "Cinquenta";
  if(rangeNumber === "60") number = "Sessenta";
  if(rangeNumber === "70") number = "Setenta";
  if(rangeNumber === "80") number = "Oitenta";
  if(rangeNumber === "90") number = "Noventa";

  if(number.length > 0) return number;
  var ten = rangeNumber[0];

  if(ten === "2") number = "Vinte e ";
  if(ten === "3") number = "Trinta e ";
  if(ten === "4") number = "Quarenta e ";
  if(ten === "5") number = "Cinquenta e ";
  if(ten === "6") number = "Sessenta e ";
  if(ten === "7") number = "Setenta e ";
  if(ten === "8") number = "Oitenta e ";
  if(ten === "9") number = "Noventa e ";
  
  var unit = rangeNumber[1];
  number = number + displayOneNumber(unit);
  return number;
}

function displayThreeNumber(rangeNumber){
  var number = "";
  if(rangeNumber === "100") number = "Cem";

  if(number.length > 0) return number;

  var cent = rangeNumber[0];

  if(cent === "1") number = "Cento";
  if(cent === "2") number = "Duzentos";
  if(cent === "3") number = "Trezentos";
  if(cent === "4") number = "Quatrocentos";
  if(cent === "5") number = "Quinhentos";
  if(cent === "6") number = "Seiscentos";
  if(cent === "7") number = "Setecentos";
  if(cent === "8") number = "Oitocentos";
  if(cent === "9") number = "Novecentos";

  var ten = rangeNumber - (cent * 100);
  if(ten === 0) return number;
  number = number + " e ";
  if (ten < 10) {
    number = number + displayOneNumber(ten.toString());
    return number;
  }
  number = number + displayTwoNumber(ten.toString());
  return number;
}
start();