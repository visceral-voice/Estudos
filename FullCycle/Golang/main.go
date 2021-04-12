package main

// import (
// 	"errors"
// 	"fmt"
// )

// type Pessoa struct {
// 	nome  string
// 	idade int
// }

// func (p Pessoa) andou() (string, error) {
// 	if p.nome != "Sergio" {
// 		return "", errors.New("Nome deve ser Sergio")
// 	}
// 	return p.nome + " andou...", nil
// }

// func main() {
// 	fmt.Println("Hello World!")

// 	sergio := Pessoa{
// 		nome:  "Sergio",
// 		idade: 47,
// 	}
// 	fmt.Println(sergio.nome)
// 	res, err := sergio.andou()
// 	if err != nil {
// 		fmt.Println(err)
// 	}
// 	fmt.Println(res)

// 	var nome2 *string    //(Cria varivael para apontar para endereço de memoria)
// 	nome2 = &sergio.nome //pega o endereco de memoria
// 	fmt.Println(nome2)
// 	fmt.Println(*nome2)
// 	*nome2 = "FullCycle"
// 	fmt.Println(sergio.nome)
// }

func main() {
	produto1 := model.newProduct()
	produto1.name = ""
}
