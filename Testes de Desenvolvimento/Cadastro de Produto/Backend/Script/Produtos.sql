CREATE TABLE Produtos (Id int NOT NULL AUTO_INCREMENT, 
					   Nome VARCHAR(100), 
					   Categoria_Id int, 
					   Preco DECIMAL(10,2),
					   PRIMARY KEY (id),
			CONSTRAINT fk_Categoria_Id FOREIGN KEY (Categoria_Id) 
			REFERENCES Categorias(Id));