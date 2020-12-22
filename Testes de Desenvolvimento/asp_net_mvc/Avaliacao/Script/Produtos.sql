CREATE TABLE Produtos (Id int PRIMARY KEY, 
					   Nome VARCHAR(100), 
					   Categoria_Id int, 
					   Preco DECIMAL(10,2), 
			CONSTRAINT fk_Categoria_Id FOREIGN KEY (Categoria_Id) 
			REFERENCES Categorias(Id));