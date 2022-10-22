## Descrição

Api de cadastro de usuarios e endereços

## Menu

#### [Como Instalar o git bash](#como_instalar_o_git_bash)
### [Instalando o Insomnia](#instalando_o_insomnia)
#### [Abrir e rodar o projeto](#abrir_e_rodar_o_projeto)
#### [Acesso ao projeto](#acesso_ao_projeto)
#### [Rodando Localmente](#rodando_localmente)
#### [Rodando com Docker](#instalando_o_docker)

---

<a id="como_instalar_o_git_bash"></a>

## Como instalar o Git Bash <img align="center" width="20px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />

O Git Bash faz parte do pacote Git for Windows, que é oferecido no próprio site oficial do Git, em: https://git-scm.com/download/win

---

<a id="abrir_e_rodar_o_projeto"></a>

## 🛠️ Abrir e rodar o projeto

1. Instalar o Git Bash em sua máquina. <br>
2. Criar uma pasta do projeto em seu computador. <br>
3. Clique com o botão direito do mouse na pasta e selecione o Git bash. <br>
4. Após abrir a janela, vamos dar início no clone do projeto.<br>

## ❗ Atenção, esse procedimento deve ser feito somente após o [git Bash](#como_instalar_o_git_bash) estar instalado em sua máquina!

Clone o projeto na janela que abriu com o seguinte comando:

```bash
  git clone git@github.com:wandersonDeve/cadastro.git
```

Após isso pode fechar a janela!

---

<a id="acesso_ao_projeto"></a>

## 📁 Acesso ao projeto

Entre na pasta do projeto pelo Visual Studio, Abra o terminal do visual Studio e
vá para o diretório do projeto com o comando:

```bash
  cd cadastro
```

Instale as dependências

```bash
  npm i
```

Feito a instalação dos pacotes basta renomear o arquivo `.env.example` para `.env` e preencher com as suas informações do banco de dados, no caso estamos usando o MySQL

Arquivo .env

```bash
DATABASE_URL=mysql://<USUARIO>:<SENHA>@<HOST>:<PORTA>/<DATABASE>?reconnect=true
```

---

<a id="rodando_localmente"></a>

## 🌐 Rodando localmente

Inicie o servidor

```bash
  npm run start:dev
```

O projeto vai estar rodando em:

`localhost:3001`

Para mudar a porta rodando localmente o projeto, basta adicionar o seguinte codigo do `.env`

```bash
PORT=NUMERO_DA_PORTA_DE_SUA_PREFERENCIA
```

---

<a id="instalando_o_insomnia"></a>

## 🛠️ Instalando o insomnia

Link para baixar: https://insomnia.rest/download

1. Agora basta importar o arquivo `Rotas - cadastro.json` que esta na raiz do projeto que você terá acesso a todos as rotas.

![image](https://user-images.githubusercontent.com/81826043/190295195-7b4ced82-7677-49f3-a789-c3f6a6f7e108.png)


2. Após fazer a importação, colar o link do navegador no local mostrado:

3. Agora basta navegar entre as pastas com as rotas do nossa API

![image](https://user-images.githubusercontent.com/81826043/197311819-103ccda4-c4e5-4c1b-8c3e-fc088b19f895.png)


## ❗ Atenção, É valido lembrar que a porta do link vai se basear no computador e na porta que o navegador está usando!

---

 <a id="instalando_o_docker"></a>

## 🐳  Instalando o Docker

1.Install Docker Desktop on Mac: https://docs.docker.com/desktop/install/mac-install/

2.Install Docker Desktop on Windows: https://docs.docker.com/desktop/install/windows-install/

3.Install Docker Desktop on Linux: https://docs.docker.com/desktop/install/linux-install/

Agora você pode instalar tudo o que precisa para executar o Windows Subsystem for Linux (WSL) inserindo este comando em um PowerShell administrador ou Windows Command Prompt e, em seguida, reiniciando sua máquina.
  
`wsl --install`

Após a instalação do Wsl, vamos até a pasta do projeto e rodar o comando
`docker-compose build`

`docker-compose up -d`

O projeto vai estar rodando em:

`localhost:3001`

para mudar a porta do docker basta alterar a parte do codigo do arquivo `docker-compose.yaml`

![image](https://user-images.githubusercontent.com/81826043/197313171-dd5792ce-135d-4512-b7af-91dc963f81c2.png)