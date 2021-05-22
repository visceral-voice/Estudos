INSERT INTO estados (nome, sigla, regiao, populacao)
SELECT 'Acre', 'AC', 'Norte', 0.38;

INSERT INTO estados (nome, sigla, regiao, populacao)
SELECT 'Alagoas', 'AL', 'Nordeste', 3.38
UNION ALL
SELECT 'Amapá', 'AP', 'Norte', 0.8
UNION ALL
SELECT 'Amazonas', 'AM', 'Norte', 4.06;