## API de Autenticação com TypeScript, Fastify, Zod e Prisma

Esta API REST fornece recursos para autenticação de usuários em um sistema. Ela foi desenvolvida com as seguintes tecnologias:

* **TypeScript**: Linguagem de programação robusta e escalável.
* **Fastify**: Framework web leve e performante para Node.js.
* `@fastify/jwt`: Plugin para autenticação e autorização com tokens JWT.
* `@fastify/cookie`: Plugin para gerenciamento de cookies.
* `@fastify/cors`: Plugin para permitir acesso à API de diferentes origens.
* **Zod**: Biblioteca para validação de dados de entrada e saída.
* **Prisma**: Ferramenta de ORM para gerenciamento de banco de dados.

### Funcionalidades

* Cadastro de usuário: Cria um novo usuário no sistema e retorna um token JWT.
* Login: Autentica um usuário e retorna um token JWT.
* Logout: Invalida o token JWT do usuário.
  
### Requisitos

- Node.js >= 14.16.0
- yarn, npm ou pnpm

<!--

### Instalação

```
git clone https://github.com/willamemouzinho/auth-api.git
cd auth-api
yarn install
```

### Execução

```
yarn dev
```

-->
