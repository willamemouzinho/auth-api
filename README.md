## API de Autenticação com TypeScript, Fastify, Zod e Prisma

Esta API REST fornece recursos para autenticação de usuários em um sistema. Ela foi desenvolvida com as seguintes tecnologias:

- **TypeScript**: linguagem de programação robusta e escalável.
- **Fastify**: framework web leve e performante para Node.js.
- `@fastify/jwt`: plugin para autenticação e autorização com tokens JWT.
- `@fastify/cookie`: plugin para gerenciamento de cookies.
- `@fastify/cors`: plugin para permitir acesso à API de diferentes origens.
- **Zod**: biblioteca para validação de dados de entrada e saída.
- **Prisma (SQLite)**: ferramenta de ORM para gerenciamento de banco de dados.

### Funcionalidades

- **Cadastro de usuário**: cria um novo usuário no sistema, retorna um token JWT e o armazena nos cookies do cliente.
- **Login**: autentica um usuário, retorna um token JWT e o armazena nos cookies do cliente.
- **Logout**: invalida o token JWT do usuário limpando o cookie com o token.
- **Rotas autenticadas**: rotas que só podem ser acessadas se os clientes estiverem autenticados.

### Requisitos

- Node.js >= 14.16.0
- yarn

### Instalação

```
git clone https://github.com/willamemouzinho/auth-api.git
cd auth-api
yarn install
```

### Execução

```
yarn prisma db push
yarn dev
```

<!--
-->
