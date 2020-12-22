const nome = "teste de exportacao";
function soma (a, b){
  return a + b;
}
function subtracao(a, b){
  return a - b;
}

//module.exports = {soma, subtracao, nome};
export default {soma, subtracao, nome};