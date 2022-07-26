# 🍊 Orange Wallet

> A fim de colocar os estudos em prática, os desenvolvedores da comunidade [Orange Juice](https://digital.fcamara.com.br/orangejuice) estruturaram e desenvolveram este projeto, cujo objetivo é cadastrar receitas, despesas e mostrar o saldo disponível.
>
> *O projeto lançou a primeira versão, mas ainda está em andamento.*
> 

## 🌐 Documentação Swagger

A API está no ar e a especificação [está neste seguinte link](https://orange-wallet-backend.herokuapp.com/swagger-docs/).

## ✅ To Do List

- [x]  CRUD receitas
- [x]  CRUD despesas
- [ ]  CRUD usuários

## 🚀 Tecnologias utilizadas

- NodeJS
- Express
- TypeScript
- Prisma
- Postgresql

## 💻 Como rodar

1. Clonar o repositório:

```bash
git clone git@github.com:Orange-Juice-Projeto-Developer/orange-wallet-backend.git
```

2. Entrar na pasta do projeto:

```bash
cd orange-wallet-backend
```

3. Abrir no editor (manualmente ou pela linha de código, como no exemplo):

```bash
code .
```

4. Instalar dependências:

```bash
npm install
```

5. Rodar o servidor:

```bash
npm run dev
```

6. Criar arquivo .env com o link para o banco de dados, como no exemplo:

```bash
DATABASE_URL="postgres://nomedobanco:senhadobanco@raja.db.elephantsql.com/nomedobanco"
```

7. Criar conexão com o banco de dados

```bash
npx prisma db push
```

8. Abrir interface gráfica para visualização do banco de dados

```bash
npx prisma studio
```

---

💡 Estamos usando o Prettier e o Eslint, que requerem extensões na sua máquina:

- Extensão Prettier - Code Formatter
- Extensão Prettier ESLint
- Extensão ESLint

Além disso, é necessária a seguinte configuração no settings.json:

```bash
"editor.formatOnSave": true,
"prettier.singleQuote": false,
"prettier.printWidth": 70,
"editor.defaultFormatter": "esbenp.prettier-vscode",
"[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
},
"editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
},
"eslint.validate": ["javascript"]
```

💡 Para o Prisma, é recomendado instalar a extensão oficial chamada “Prisma”, e adicionar no settings.json a seguinte configuração para formatar o texto ao salvar:

```bash
"[prisma]": {
    "editor.defaultFormatter": "Prisma.prisma"
  }
```
