
# Projeto - Programação Web III

Projeto Final da Disciplina Programação Web III do curso do DevElas para Programação BackEnd.

Esse projeto tem o intuito de criar uma simulação de um serviço de cadastramento de veículos, onde a comunicação e a criação do banco de dados deverá ser feita através do módulo Sequelize.

Requisitos funcionais:
- Cadastrar um veículo
- Buscar um veículo por ID
- Buscar um veículo por Modelo
- Atualizar os dados de um veículo
- Excluir um veículo

## Documentação da API

#### Retorna todos os veículos listados

```http
  GET /vehicles
```

#### Cadastra um novo veículo

```http
  POST /vehicles
```

#### Retorna o veículo com a placa digitada (id)

```http
  GET /vehicles/:id
```

#### Retorna todos os veiculos do mesmo modelo

```http
  GET /models/:model
```

#### Atualiza a informação do veículo pela placa (id)

```http
  PATCH /vehicles/:id
```

#### Deleta um veículo pela placa (id)

```http
  DELETE /vehicles
```


## Variáveis de Ambiente

Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu .env

`PORT`

Variáveis do Banco de Dados:

`HOST_DB`,
`PORT_DB`,
`USER_DB`,
`PASS_DB`,
`DATABASE`,
`DIALECT`


## Rodando localmente

Clone o projeto

```bash
  git clone https://github.com/Daniiporfirio/Vehicles/tree/master
```

Entre no diretório do projeto

```bash
  cd Vehicles
```

Instale as dependências

```bash
  npm install
```

Crie o banco de dados

```bash
  npx sequelize-cli db:create
```

Execute os Migrations do Sequelize

```bash
  npx sequelize-cli db:migrate
```

Execute os Seeders do Sequelize

```bash
  npx sequelize-cli db:seed:all
```

Inicie o servidor (modo desenvolvedor)

```bash
  npm run dev
```


## Referência

 - [Sequelize](https://sequelize.org/)
