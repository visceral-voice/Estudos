package model

import "github.com/satori/uuid"

type Product struct {
	ID   string `json:"id"`
	Name string `json:"name"`
}

type Products struct {
	Product []Product
}

func (p *Products) Add(product Product) {
	p.Product = append(p.Product, product)
}

func NewProdutc() *Product {
	return &Product{
		ID: uuid.NewV4().String(),
	}
}
