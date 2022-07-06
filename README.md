# 🍊 Orange Wallet

> A fim de colocar os estudos em prática, os desenvolvedores da comunidade <a href="https://digital.fcamara.com.br/orangejuice" target="_blank">Orange Juice</a> estruturaram e desenvolveram este projeto, cujo objetivo é cadastrar receitas, despesas e mostrar o saldo disponível.

_O projeto está em andamento._

>

## ✅ To Do List

- [ ] CRUD receitas
- [ ] CRUD despesas

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

3. Ir para a branch develop:

```bash
git checkout develop
```

4. Abrir no editor (manualmente ou pela linha de código, como no exemplo):

```bash
code .
```

5. Instalar dependências:

```bash
npm install
```

6. Rodar o servidor:

```bash
npm run dev
```

7. Criar arquivo .env com o link para o banco de dados, como no exemplo:

```bash
DATABASE_URL="postgres://nomedobanco:senhadobanco@raja.db.elephantsql.com/nomedobanco"
```

8. Criar conexão com o banco de dados

```bash
npx prisma db push
```

9. Abrir interface gráfica para visualização do banco de dados

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
