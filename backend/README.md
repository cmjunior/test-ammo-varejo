### Backend<br/>
### Dados para teste
- Base de dados, SQLite, usando o Knex.js para criação da base, migrations, e inclusão de alguns registros para testes usando seeds.
O arquivo com os dados, existe no diretório:<br />
backend > database > db.sqlite. Caso não exista, deve ser instalado o knex, e então, utilizar o knex cli para gerar as tabelas e incluir os dados com os comandos abaixo:

### `knex migrate:latest`

### `knex seed:run`

* O arquivo knexfile.js contém a configuração de localização dos arquivos de migration e seed, neste caso dentro do diretório src\database.

### Endpoint
/products => Retorna lista de todos os produtos cadastrados

### Executando o BackEnd
Para rodar o backend, basta usar o comando:
### `npm start`
