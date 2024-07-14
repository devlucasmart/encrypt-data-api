# Projeto de Criptografia com NestJS

Este projeto é um exemplo de como criptografar e descriptografar dados usando NestJS. Utilizamos o algoritmo AES-256-CBC para garantir a segurança dos dados.

## Estrutura do Projeto

- **AppService:** Serviço responsável por criptografar e descriptografar os dados.
- **EncryptionInterceptor:** Interceptor que intercepta as requisições para criptografar e descriptografar os dados automaticamente.
- **AppController:** Controlador com endpoints para criptografar e descriptografar dados manualmente.

## Configuração

### Pré-requisitos

- Node.js
- NestJS CLI
- npm