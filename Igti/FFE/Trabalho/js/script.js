const groupMembers = ['Raphael Gomide', 'Gedy Lee', 'Sérgio Ricardo', 'Alex Lifeson', 'Neil Port'];

function start() {
    getGroupMembers();
    getFullName();
    getFullName('Sérgio');
    getFullName('Sérgio', 'Ricardo');
    getFullName('Sergio', 'Ricardo', 'Pires', 'de', 'Paula');
    transform([10, 20, 30, 40, 50]);
    transform([61, 72, 83, 94]);
    onlyNumbersFrom('1234.3423.2423.233');
    onlyNumbersFrom('1234.3423.2423.233jjskjdldhfshflsjfsdj ~~~~~~~~~~~~ ^=======+++++---------');
}

function getGroupMembers () {
  console.log(groupMembers.sort().join(', '));
}

function getFullName(...names){
    console.log(names.join(' '));
}

function transform (array){
    const arrayReturn = array.map(item =>{
        return item / 10 + 1;
    });

    console.log(arrayReturn.join(', '));
}

function onlyNumbersFrom (barCode){
  const array = barCode.split('');
  let arrayReturn = [];
  array.map(item => {
      if (isNaN(item) === false) {
          arrayReturn.push(item);
      }
  })
  console.log(arrayReturn.join(''));
}

start();
