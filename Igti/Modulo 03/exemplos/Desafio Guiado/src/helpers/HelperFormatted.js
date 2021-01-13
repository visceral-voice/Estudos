const formated = Intl.NumberFormat("pt-BR")

function formatedNumbers(number) {
  return formated.format(number);
}

export {formatedNumbers}