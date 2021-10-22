# Desafio Pomodoro
Projeto de desafio técnico para empresa Vila Apps

---

# Sumário

- [HISTÓRIA](#história)
- [COMO EXECUTAR](#Como-executar)
  - [Lista de Requisitos](#lista-de-requisitos)
    - [1 - Temporizador com feedback visual](#1---Temporizador-com-feedback-visual)
    - [2 - Botão Pause](#2---Botão-Pause)
    - [3 - Botão zerar](#3---Botão-zerar)
    - [4 - TimePicker](#4---TimePicker)
    - [5 - Gráfico](#5---Gráfico)
    - [6 - Feedback sonoro](#6---Feedback-sonoro)
    - [7 - Deploy](#7---Deploy)

# História 
  A Técnica Pomodoro é um método de gerenciamento de tempo desenvolvido por Francesco Cirillo no final dos anos 1980. A técnica usa um cronômetro para dividir o
trabalho em intervalos, tradicionalmente de 25 minutos de duração, separados por intervalos curtos - 5 minutos.

  Porém, buscando uma maior praticidade para a avaliação, os temporizadores deverão estar em segundos e não em minutos. Ou seja, os 25 minutos de duração
deverão ser 25 segundos e os 5 minutos de intervalo deverão ser 5 segundos.

# Como executar

  O projeto está disponível no githubPages pelo link: https://bruno-s-mendes.github.io/desafio-pomodoro/ 
  Este repositório pode ser clonado em uma pasta no seu computador e rodado localmente, para isso:

    1- Crie uma pasta em seu computador e entre nela pelo terminal.
    2- Copie o link do repositório e execute o comando git clone em seu terminal:
        git clone git@github.com:bruno-s-mendes/desafio-pomodoro.git
    3- Entre na página do desafio pelo terminal, para isso rode o comando ( cd desafio-pomodoro);
    4- Instale as dependencias, para isso rode o comando ( npm instal);
    5- Rode o script de inicialização, para isso rode o comando ( npm start);

    A aplicação deve abrir em seu navegador. Caso tenha alguma dúvida não hesite em me contatar no email: mendessbruno@gmail.com


## Lista de Requisitos:

### 1 - Temporizador com feedback visual

Um temporizador para demonstrar o tempo de duração da atividade e do intervalo (deve haver um feedback visual para distinguir duração da atividade
e duração do intervalo);

### 2 - Botão Pause
Um botão para pausar o temporizador;

### 3 - Botão zerar

Um botão para zerar o temporizador (lembrando que o ponto inicial do temporizador são os 25 segundos).

### 4 - TimePicker

Configuração de tempo personalizada com TimePicker (esse componente deve ser feito do 0, podendo utilizar lib auxiliar como moment).

### 5 - Gráfico

Adicionar um gráfico que demonstra a redução do tempo;

### 6 - Feedback sonoro

Adicionar um feedback sonoro para quando o tempo da atividade terminar;

### 7 - Deploy

Disponibilizar a página para utilização (deploy).

