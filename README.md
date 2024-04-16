# Web Application Documentation for Agroforestry Systems 🌳

This web application 🌐 interacts with Firestore and IPFS to manage data related to agroforestry systems, including diverse users 🌍, SAFs (Agroforestry Systems) 🌲, mentors 🧑‍🏫, species 🌱, and succession proofs 📈. The documentation below details the main functionalities and how to use them.

## Configuration and Authentication 🔑

### firebaseService.js

This file 📂 provides functions to interact with Firestore 🔥 and Firebase Authentication.

- **Dependencies**: `firebase/firestore`, `firebase/auth`.
- **Authentication Functions**: 
  - `getCurrentUser` to obtain the currently authenticated user 🙋‍♂️.
  - `addUser` to add or update a user's data.

## User Management 👥

- **User Functions**: 
  - `addUser` to add a new user or update an existing user's data.

## SAF Management 🌲

- **SAF Functions**: 
  - `getAllSafs` to list all SAFs.
  - `getSaf` to search for a specific SAF 🔍.
  - `addSaf` to add a new SAF ➕.
  - `deleteSaf` to delete an SAF ❌.

## Mentor Management 👩‍🏫

- **Mentor Functions**: 
  - `getMentors` to list all mentors.
  - `addMentor` to add a new mentor ➕.
  - `editMentor` to edit an existing mentor ✏️.
  - `deleteMentor` to delete a mentor ❌.

## Species Management 🌱

- **Species Functions**: 
  - `getSpecies` to list all species.
  - `addSpecie` to add a new species ➕.
  - `updateSpecie` to update an existing species ✏️.
  - `deleteSpecie` to delete a species ❌.

## Succession Proof Management 📜

- **Proof Functions**: 
  - `getProofs` to list all succession proofs associated with a specific SAF.
  

# Getting Started

To get the project up and running on your local machine, follow these steps:

1. Ensure you have Node.js version 18.17.0 installed. You can check your Node.js version by running `node -v` in your terminal.
2. In your terminal clone the repository:

$ git clone <[repository-url](https://github.com/AgroforestDAO/web3-dapp-saf-design/)>

3. Navigate to the project directory:

$ cd web3-dapp-saf-design

4. Install the project dependencies:

$ npm install

5. Start the application:

$ npm start
   

---


# PT-BR
# Documentação da Aplicação Web para Agroflorestas 🌳

Esta aplicação web 🌐 interage com o Firestore e IPFS para gerenciar dados relacionados aos sistemas agroflorestais, incluindo usuários 👤, SAFs (Sistemas Agroflorestais) 🌲, mentores 🧑‍🏫, espécies 🌱 e provas de sucessão 📈. A documentação abaixo detalha as principais funcionalidades e como utilizá-las.

## Configuração e Autenticação 🔑

### firebaseService.js

Este arquivo 📂 fornece funções para interagir com o Firestore 🔥 e o Firebase Authentication.

- **Dependências**: `firebase/firestore`, `firebase/auth`.
- **Funções de Autenticação**: 
  - `getCurrentUser` para obter o usuário atualmente autenticado 🙋‍♂️.
  - `addUser` para adicionar ou atualizar dados do usuário.

## Gerenciamento de Usuários 👥

- **Funções de Usuários**: 
  - `addUser` para adicionar um novo usuário ou atualizar os dados de um usuário existente.

## Gerenciamento de SAFs 🌲

- **Funções de SAFs**: 
  - `getAllSafs` para listar todos os SAFs.
  - `getSaf` para buscar um SAF específico 🔍.
  - `addSaf` para adicionar um novo SAF ➕.
  - `deleteSaf` para excluir um SAF ❌.

## Gerenciamento de Mentores 👩‍🏫

- **Funções de Mentores**: 
  - `getMentors` para listar todos os mentores.
  - `addMentor` para adicionar um novo mentor ➕.
  - `editMentor` para editar um mentor existente ✏️.
  - `deleteMentor` para excluir um mentor ❌.

## Gerenciamento de Espécies 🌱

- **Funções de Espécies**: 
  - `getSpecies` para listar todas as espécies.
  - `addSpecie` para adicionar uma nova espécie ➕.
  - `updateSpecie` para atualizar uma espécie existente ✏️.
  - `deleteSpecie` para excluir uma espécie ❌.

## Gerenciamento de Provas de Sucessão 📜

- **Funções de Provas de Sucessão**: 
  - `getProofs` para listar todas as provas de sucessão associadas a um SAF específico.

---

Esperamos que esta documentação facilite a sua jornada na aplicação de agroflorestas, ajudando a gerenciar e prosperar seus sistemas de forma eficiente e sustentável! 🌍💚


