# Projeto de Criptografia com NestJS

Este projeto é um exemplo de como criptografar e descriptografar dados usando NestJS. Utilizamos o algoritmo AES-256-CBC para garantir a segurança dos dados.

![NestJS](https://nestjs.com/img/logo-small.svg)

## Estrutura do Projeto

- **AppService:** Serviço responsável por criptografar e descriptografar os dados.
- **EncryptionInterceptor:** Interceptor que intercepta as requisições para criptografar e descriptografar os dados automaticamente.
- **AppController:** Controlador com endpoints para criptografar e descriptografar dados manualmente.

## Configuração

### Pré-requisitos

- Node.js
- NestJS CLI
- npm

### Instalação

1. Clone o repositório:
    ```bash
    git clone [https://github.com/devlucasmart/encrypt-data-api.git)
    ```
2. Navegue até o diretório do projeto:
    ```bash
    cd encrypt-data-api
    ```
3. Instale as dependências:
    ```bash
    npm install
    ```

### Execução

1. Inicie o servidor:
    ```bash
    npm run start
    ```
2. O servidor estará disponível em `http://localhost:3000`.

## Uso

### Endpoints

- **POST /encrypt:** Criptografa os dados fornecidos.
- **POST /decrypt:** Descriptografa os dados fornecidos.

