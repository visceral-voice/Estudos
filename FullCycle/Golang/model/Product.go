package model

//import "github.com/satori/go.uuid"

type Product struct {
	ID   string
	name string
}

type Products struct {
	Product []Product
}

func (p *Products) Add(product Product) {
	p.Product = append(p.Product, product)
}

// func newProduct() *Product {
// 	return &Product{
// 		ID: uuid.NewV4().String(),
// 	}
// }
