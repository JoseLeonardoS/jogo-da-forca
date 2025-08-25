# 🎮 Jogo da Forca  

Um jogo clássico da forca desenvolvido em **React** com **Sass**, trazendo uma experiência minimalista mas divertida.  
Todas as artes do bonequinho foram **criadas no canva**, sendo exibidas progressivamente a cada interação.  

Este projeto foi desenvolvido com foco em **portfólio**, demonstrando domínio de **React, lógica de estados e estilização com Sass**.

---

## 🚀 Funcionalidades

- Sorteio de palavras aleatórias com **dicas**.  
- **Teclado interativo** para seleção das letras.  
- Exibição progressiva do **bonequinho da forca**.  
- Mensagens de vitória ou derrota ao final da partida.  
- Reinício da partida ao fim do jogo.  

---

## 🌐 Demonstração Online

Você pode acessar a versão ao vivo do jogo aqui:  
👉 [Jogar agora](https://joseleonardos.github.io/jogo-da-forca)  

---

## 🛠️ Tecnologias Utilizadas

- **React**
- **JavaScript**  
- **Sass** para estilização  
- **Artes autorais** do bonequinho da forca

---

## 📂 Estrutura do Projeto

```bash
src/
├── Data/          # Status do personagem e Array de palavras e dicas
├── Pages/         # Página do jogo
├── styles/        # Arquivo de estilo .scss
└── images         # Imagens do personagem

```

## 🎮 Como Jogar

- Inicie o projeto (veja instruções abaixo).  
- Uma palavra aleatória será sorteada com uma **dica**.  
- Clique nas letras do teclado para tentar adivinhar.  
- A cada erro, uma parte do **bonequinho da forca** é desenhada.  
- Você vence se adivinhar a palavra antes do boneco estar completo!

---

## ▶️ Como Rodar o Projeto

```bash
# Clone o repositório
git clone https://github.com/JoseLeonardoS/jogo-da-forca.git

# Acesse a pasta
cd jogo-da-forca

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm start
