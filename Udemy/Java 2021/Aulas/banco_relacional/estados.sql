CREATE TABLE estados (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT, 
    nome VARCHAR(45),
    sigla VARCHAR(02),
    regiao ENUM ('Norte', 'Nordeste', 'Centro-Oeste', 'Sudeste', 'Sul') NOT NULL,
    populacao DECIMAL(5,2) NOT NULL,
    PRIMARY KEY (id),
    UNIQUE KEY (nome),
    UNIQUE KEY (sigla)
);