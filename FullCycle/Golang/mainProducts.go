package main

import "github.com/visceral-voice/Estudos/FullCycle/Golang/model"

func createProducts() {
	produto1 := model.NewProdutc()
	produto1.Name = "Carrinho"

	produto2 := model.NewProdutc()
	produto2.Name = "Boneca"

	produtos := model.Products{}
	produtos.Add(*produto1)
	produtos.Add(*produto2)

}
