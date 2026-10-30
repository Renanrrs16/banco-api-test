[readme_do_projeto_de_testes.md](https://github.com/user-attachments/files/34175504/readme_do_projeto_de_testes.md)
# Banco API Test - Automação de Testes REST

## Objetivo

Este projeto tem como objetivo realizar a automação de testes para a [Banco API](https://github.com/Renanrrs16/banco-api-test). A automação contribui para a qualidade, a confiabilidade e o funcionamento correto dos endpoints da API REST, validando diferentes cenários e fluxos de dados.

## Stack Utilizada

O projeto foi desenvolvido utilizando a linguagem **JavaScript** rodando no ambiente Node.js, com o apoio das seguintes bibliotecas principais:

* [**Mocha**](https://mochajs.org/)**:** Framework de testes principal para estruturar os blocos de teste (`describe`, `it`).
* [**Chai**](https://www.chaijs.com/)**:** Biblioteca de asserção do tipo BDD/TDD para validação dos resultados esperados.
* [**Supertest**](https://github.com/ladjs/supertest)**:** Módulo de alto nível para testar requisições HTTP na API.
* [**Mochawesome**](https://github.com/adamgruber/mochawesome)**:** Gerador de relatórios visuais elegantes em HTML e JSON.

## Estrutura de Diretórios

Abaixo está a estrutura principal do projeto, baseada no repositório, detalhando os diretórios, arquivos de configuração e a organização dos cenários de teste:

```text
banco-api-test/
├── fixture/                  # Diretório utilizado para gerenciar os corpos das requisições (massas de dados)
├── helpers/                  # Diretório para funções auxiliares e utilitários de suporte aos testes
├── test/                     # Diretório principal contendo os cenários de teste
│   ├── login.test.js         # Cenários de teste para o fluxo de autenticação/login
│   └── trasnferencia.test.js # Cenários de teste para os fluxos de transferência (total e individual)
├── mochawesome-report/       # Diretório gerado automaticamente após os testes (contém os relatórios HTML/JSON)
├── .env                      # Arquivo de variáveis de ambiente (Criado pelo usuário - Não versionado)
├── .gitignore                # Arquivos e diretórios ignorados pelo versionamento do Git
├── package-lock.json         # Histórico com as versões exatas das dependências instaladas
├── package.json              # Mapeamento de dependências e scripts de execução
└── README.md                 # Documentação do projeto
```

## Configuração Inicial

### 1. Instalação das Dependências

Antes de executar os testes, certifique-se de ter o Node.js instalado e instale as bibliotecas executando o comando na raiz do projeto:

```bash
npm install
```

### 2. Configuração do Arquivo `.env`

O projeto exige a configuração de variáveis de ambiente para rodar adequadamente, as quais não são enviadas para o repositório por questões de segurança.
Crie um arquivo chamado `.env` na raiz do projeto e adicione a variável `BASE_URL` apontando para o host onde a API está rodando.

**Formato do arquivo `.env`:**

```env
# URL base da API a ser testada
BASE_URL=http://localhost:3000
```

*(Altere `http://localhost:3000` para a URL real da sua API, se necessário).*

## Executando os Testes e Gerando Relatórios

Para rodar os testes da API e gerar automaticamente o relatório de execução, utilize o comando configurado nos seus scripts do `package.json`. Normalmente, o comando padrão é:

```bash
npm test
```

**Relatórios:**
O projeto utiliza a biblioteca `mochawesome`. Assim que a execução dos testes finalizar, a ferramenta criará automaticamente uma pasta chamada `mochawesome-report` na raiz do projeto.
Para visualizar o resultado detalhado, abra o arquivo **`mochawesome.html`** (localizado dentro dessa pasta) em qualquer navegador web.

## Documentação das Dependências

Caso queira se aprofundar nas ferramentas utilizadas neste projeto, acesse a documentação oficial de cada uma delas:

* [Documentação Oficial do Node.js](https://nodejs.org/pt-br/docs/)
* [Documentação do Mocha](https://mochajs.org/)
* [Documentação do Chai](https://www.chaijs.com/api/bdd/)
* [Documentação do Supertest](https://github.com/ladjs/supertest#readme)
* [Documentação do Mochawesome](https://github.com/adamgruber/mochawesome#readme)
