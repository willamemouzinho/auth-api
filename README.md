## API de Autenticação com TypeScript, Fastify, Zod e Prisma

Esta API REST fornece recursos para autenticação de usuários em um sistema. Ela foi desenvolvida com as seguintes tecnologias:

- **TypeScript**: Linguagem de programação robusta e escalável.
- **Fastify**: Framework web leve e performante para Node.js.
- `@fastify/jwt`: Plugin para autenticação e autorização com tokens JWT.
- `@fastify/cookie`: Plugin para gerenciamento de cookies.
- `@fastify/cors`: Plugin para permitir acesso à API de diferentes origens.
- **Zod**: Biblioteca para validação de dados de entrada e saída.
- **Prisma (SQLite)**: Ferramenta de ORM para gerenciamento de banco de dados.

### Funcionalidades

- Cadastro de usuário: Cria um novo usuário no sistema, retorna um token JWT e o armazena nos cookies do cliente.
- Login: Autentica um usuário, retorna um token JWT e o armazena nos cookies do cliente.
- Logout: Invalida o token JWT do usuário limpando o cookie com o token.

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
