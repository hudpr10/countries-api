# REST Countries API with Color Theme Switcher 🌍🌓

Este projeto é uma interface web interativa que exibe países de todos os continentes com base em dados fornecidos por uma API REST. O objetivo é proporcionar uma experiência intuitiva ao usuário, incluindo busca, filtros por região, tema escuro/claro e uma página com detalhes completos de cada país.

## 🚀 Visão Geral

Criado como parte de um desafio do [Frontend Mentor](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca), o projeto teve como foco principal o consumo de APIs REST, gerenciamento global de estado com Redux, roteamento com React Router e alternância de tema usando Styled-components e TypeScript.

## 🎯 Objetivos

- Praticar integração com APIs REST usando Fetch
- Aprender e aplicar o Redux com Redux Toolkit
- Consolidar conhecimentos de React Router
- Criar uma interface moderna e responsiva com Styled-components
- Aprimorar a tipagem de aplicações React com TypeScript

## 🛠 Tecnologias Utilizadas

- [React](https://reactjs.org/) + [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [React Router DOM](https://reactrouter.com/)
- [Styled-components](https://styled-components.com/)
- [Lucide Icons](https://lucide.dev/)
- [Google Fonts – Nunito Sans](https://fonts.google.com/specimen/Nunito+Sans)

## ⚙️ Funcionalidades

- 🔎 **Busca** por nome de país
- 🌍 **Filtro por região** (África, América, Ásia, Europa, Oceania)
- 🌓 **Alternância entre tema claro e escuro**
  - Tema salvo no `localStorage` e reaplicado automaticamente
  - Gerenciado globalmente com Redux
- 📄 **Página de detalhes** com:
  - Bandeira
  - Nome, nome nativo
  - População, região, sub-região e capital
  - Domínio, moedas, idiomas e fronteiras
- 📱 **Responsivo** para todos os dispositivos
- ↩️ **Botão de voltar** para a home com navegação via Router

## 🧠 Desafios e Aprendizados

### 🔥 Desafios

- Compreender a estrutura da API e seus parâmetros foi um dos maiores desafios iniciais. A leitura da documentação foi essencial.
- Foi minha primeira experiência com Redux, e tive dificuldades iniciais na estruturação dos slices e no uso de middleware como o redux-logger.
- Trabalhar com TypeScript em contextos mais avançados como tipagens de roteamento e dados da API exigiu bastante estudo e teste.

### 💡 Aprendizados

- Aprendi na prática como usar o Redux para gerenciar estado global de forma eficiente, evitando o famoso “prop drilling”.
- Fortaleci conhecimentos em React Router, consumo de APIs, organização com Styled-components e práticas modernas de front-end.
- Evoluí na forma como estruturo projetos, entendendo a importância de boas práticas desde a divisão de pastas até a clareza nos comentários de código.

## 📁 Melhorias Futuras

- Refatorar e melhorar a **estrutura de pastas** para maior escalabilidade
- Adicionar **comentários explicativos** em funções mais complexas
- Organizar e padronizar as importações
- Criar testes com **Jest** e **React Testing Library**
