# Documentação da Aplicação Web para Agroflorestas

Esta aplicação web interage com o Firestore e IPFS para gerenciar dados relacionados aos sistemas agroflorestais, incluindo usuários, SAFs (Sistemas Agroflorestais), mentores, espécies e provas de sucessão. A documentação abaixo detalha as principais funcionalidades e como utilizá-las.

## Configuração e Autenticação

### firebaseService.js

Este arquivo fornece funções para interagir com o Firestore e o Firebase Authentication.

- **Dependências**: `firebase/firestore`, `firebase/auth`.
- **Funções de Autenticação**: `getCurrentUser` para obter o usuário atualmente autenticado, `addUser` para adicionar ou atualizar dados do usuário.

## Gerenciamento de Usuários

- **Funções de Usuários**: `addUser` para adicionar um novo usuário ou atualizar os dados de um usuário existente.

## Gerenciamento de SAFs

- **Funções de SAFs**: `getAllSafs` para listar todos os SAFs, `getSaf` para buscar um SAF específico, `addSaf` para adicionar um novo SAF, `deleteSaf` para excluir um SAF.

## Gerenciamento de Mentores

- **Funções de Mentores**: `getMentors` para listar todos os mentores, `addMentor` para adicionar um novo mentor, `editMentor` para editar um mentor existente, `deleteMentor` para excluir um mentor.

## Gerenciamento de Espécies

- **Funções de Espécies**: `getSpecies` para listar todas as espécies, `addSpecie` para adicionar uma nova espécie, `updateSpecie` para atualizar uma espécie existente, `deleteSpecie` para excluir uma espécie.

## Gerenciamento de Provas de Sucessão

- **Funções de Provas de Sucessão**: `getProofs` para listar todas as provas de sucessão associadas a um SAF específico.

## Conclusão

Esta documentação fornece uma visão geral das principais funcionalidades da aplicação web para gerenciar dados de agroflorestas. Para uma implementação detalhada, é necessário seguir as instruções de configuração do Firebase e Firestore, bem como implementar a lógica de interface do usuário para interagir com essas funções.
