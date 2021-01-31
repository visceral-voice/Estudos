let globalRangeNumber = null;
const unit = ["Zero", "Um", "Dois", "Três", "Quatro", "Cinco", "Seis", "Sete", "Oito", "Nove", 
              "Dez", "Onze", "Doze", "Treze", "Quatorze", "Quinze", "Dezesseis", "Dezessete", "Dezoito", "Dezenove", "Vinte"];
const ten = ["_", "_", "Vinte", "Trinta", "Quarenta", "Cinquenta", "Sessenta", "Setenta", "Oitenta", "Noventa"];
const cent = ["Cem", "Cento", "Duzentos", "Trezentos", "Quatrocentos", "Quinhentos", "Seiscentos", "Setecentos", "Oitocentos", "Novecentos"];

window.addEventListener("load",() =>{
  globalRangeNumber = document.querySelector("#numberRange");
  initializeValues();
});

const initializeValues = (() => {
  globalRangeNumber.value = 0;
  globalRangeNumber.addEventListener('input', handleRangeChanged);
});

const handleRangeChanged = ((event) => {
  let number = "Número inválido"
  let rangeNumber = event.target.value;
  let actualNumber = document.querySelector("#numberValue");
  actualNumber.value = rangeNumber;

  let actualExtense = document.querySelector("#numberExtense");
  number = displayNumber(rangeNumber);
  actualExtense.value = number;
});

const displayNumber = ((rangeNumber) => {
  let ret = "";
  if (rangeNumber <= 20) return unit[rangeNumber];
  if (rangeNumber === "100") return cent[0];
  if (rangeNumber < 100){
      ret = ten[rangeNumber.toString()[0]];
      if (rangeNumber.toString()[1] !== "0") ret += " e " + unit[rangeNumber.toString()[1]];
  }else{
    ret = displayCent(rangeNumber);
  }
  return ret;
});

const displayCent = ((rangeNumber) => {
  let ret = cent[rangeNumber[0]];
  if ((rangeNumber % 100) !== 0){
    let ten = rangeNumber - (rangeNumber[0] * 100);
    ret += " e " + displayNumber(ten);
  }
  return ret;
});