let recipes = [];

const moneyFormatter = Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

async function start() {
  const resources = await fetch('http://localhost:3001/recipes');
  const json = await resources.json();
  recipes = json;

  const answers = [];

  answers.push(question01());
  answers.push(question02());
  answers.push(question03());
  answers.push(question04());
  answers.push(question05());
  answers.push(question06());
  answers.push(question07());
  answers.push(question08());
  answers.push(question09());
  answers.push(question10());

  for (const [index, answer] of answers.entries()) {
    const style =
      index % 2 === 0
        ? 'backgroundColor: black; color: white'
        : 'backgroundColor: black; color: orange';

    console.log(
      `%c Questão ${(index + 1).toString().padStart(2, '0')}: ${answer}`,
      style
    );
  }
  p4();
}

function question01() {
  /**
   * Questão 01: Quantas receitas existem ao todo?
   */
  return `Existem ao todo ${recipes.length} receitas.`;
}

function question02() {
  /**
   * Questão 02: Qual é a média de preços das receitas?
   */
  const sumPrice = recipes.reduce((acc, { price }) => acc + price, 0)
  const avgPrice = sumPrice / recipes.length;
  return `A média de preço de todas as receitas é ${moneyFormatter.format(avgPrice)}`;
}

function question03() {
  /**
   * Questão 03: Qual é a receita mais cara e o seu preço?
   * Dica 01: formate o número obtido com o moneyFormatter, declarado
   * no início deste arquivo
   */
  const highPrice = recipes.map(({title, price}) => {
    return {
            title, 
            price
          };
  }).sort((a, b) => { 
    return b.price - a.price;
  }).slice(0,1);
  return `A receita mais cara é a ${highPrice[0].title} e seu preço é de ${moneyFormatter.format(highPrice[0].price)}`;
}

function question04() {
  /**
   * Questão 04: Qual é a receita que possui mais ingredientes? Mostre também a
   * quantidade de ingredientes desta receita
   */
   const higherIng = recipes.map(({title, ingredients}) => {
    return {
            title, 
            countIngredients: ingredients.length
          };
  });
  const majorIng = higherIng.sort((a, b) => {
    return b.countIngredients - a.countIngredients
  }).slice(0,1);
  return `A receita com maior número de ingredientes é a ${majorIng[0].title} e ela possui ${majorIng[0].countIngredients} ingredientes.`;
}

function question05() {
  /**
   * Questão 05: Liste todos os ingredientes distintos considerando todas
   * as receitas. Liste os ingredientes separados por ', '.
   * Dica 01: pesquise por array.flat()
   * Dica 02: pesquise por array.join()
   * Dica 03: pesquise por Set em JavaScript e faça a re-conversão
   * para array com Array.from
   */
  return searchIngredients();
}

function question06() {
  /**
   * Questão 06: existe algum ingrediente que aparece em todas as receitas?
   * Em caso afirmativo, informe-o(os).
   * Dica 01: reaproveite funções já implementadas
   * Dica 02: utilize array.every
   * Dica 03: utilize arrey.forEach
   * Dica 04: pesquise pelo método array.includes
   * Dica 05: pesquise pelo método array.split
   */
  const ingredients = searchIngredients();
  const allRecipes = [];
  let existsIngredient = true;
  const countRecipes = recipes.length;
  let count = 0;
  ingredients.forEach(ingredient => {
    count = 0;
    do {
        existsIngredient = recipes[count].ingredients.includes(ingredient);
        count++;
    } while(existsIngredient === true && count < countRecipes);

    if (existsIngredient === true){
      allRecipes.push(ingredient);
    } else {
      existsIngredient = true;
    }
  });
  return allRecipes.length > 0 ? `O(s) ingrediente(s) ${allRecipes} aparece(m) em todas as receitas.` : 'Não existem ingredientes que apareceçam em todas as receitas.';
}

function question07() {
  /**
   * Questão 07: Quantas receitas possuem "uva" como ingrediente?
   * Dica 01: pesquise pelo método array.includes
   */
  let count = 0;
  const search = 'uva';
  recipes.forEach(recipe => {
    const {id, title, ingredients, price} = recipe;
    if (ingredients.includes(search)){
      count++;
    }
  });
  return `Um total de ${count} receitas possuem "${search}" como ingrediente.`;
}

function question08() {
  /**
   * Questão 08: Quantas receitas possuem "abóbora" e "aveia" como ingredientes?
   * Dica 01: pesquise pelo método array.includes
   */
   let count = 0;
   const searchOne = 'abóbora';
   const searchTwo = 'aveia';
   recipes.forEach(recipe => {
     const {id, title, ingredients, price} = recipe;
     if (ingredients.includes(searchOne) && ingredients.includes(searchTwo)){
       count++;
     }
   });
   return `Um total de ${count} receitas possuem "${searchOne}" e "${searchTwo}" como ingredientes.`;
}

function question09() {
  /**
   * Questão 09: Um determinado cliente quer comprar 2 itens de cada receita
   * que contenha "calabresa" com ingrediente. Quanto ele vai pagar?
   */
   let payCalabresa = 0;
   const search = 'calabresa';
   recipes.forEach(recipe => {
     const {id, title, ingredients, price} = recipe;
     if (ingredients.includes(search)){
      payCalabresa = payCalabresa + (price * 2);
     }
   });
   return `O cliente vai pagar um total de ${moneyFormatter.format(payCalabresa)} na compra de dois itens de cada receita com ${search}.`;
}

function question10() {
  /**
   * Questão 10: Qual seria o faturamento bruto mensal se fossem vendidos,
   * durante um mês, 3 itens de cada receita?
   */
   const sumPrice = recipes.reduce((acc, { price }) => acc + price, 0)
   const revenues = sumPrice * 3;
   return `O faturamento bruto se fossem vendidos 3 itens de cada receita seria de ${moneyFormatter.format(revenues)}`;
}

function searchIngredients(){
  let listIngredients = [];
  recipes.forEach(recipe => {
    const {id, title, ingredients, price} = recipe;
    listIngredients = listIngredients.concat(ingredients.flat());
  });
  const uniqueIngredients = [... new Set(listIngredients)];
  const allIngradients = Array.from(uniqueIngredients);
  return allIngradients;
}

function p4(){
  let interval = null;
  let i = 0;
  let array = [];

  interval = setInterval(() => {
    array.push(i++);

    if (i === 5){
        clearInterval(interval);
        console.log(array);
    }
  }, 1000);
}

start();
