### Comandos utilizados no projeto

- npm i -g typeorm ==> instala o typeorm de forma global. Assim é possível gerar o projeto pela linha de comando pré configurado

- typeorm init --name nome_do_projeto --database nome_do_banco ==> gera o projeto com as pré configurações do typeorm com o banco desejado
    - typeorm init --name julius-api --database postgres ==> comando utilizado para gerar esse projeto com o banco Postgres

- npm i -s express cors morgan
    - express ==> biblioteca responsável pelas rotas e configurações da api
    - cors ==> pacote de configuração do CORS da api
    - morgan ==> pacote para log detalhados

- npm i -D nodemon @types/express
    - nodemon ==> pacote para o hot reload da aplicação
    - @types/express ==> pacote de tipagem do express

### Anotações

Decorators
- permite adicionar novos comportaments aos objetos dinamicamente
- exemplo de decorators: @Entity()    
- https://www.typescriptlang.org/docs/handbook/decorators.html

Docker Compose
- ferramenta auxiliar do docker que permite trabalhar com mais de um container na aplicação
- https://docs.docker.com/compose/
- o arquivo precisa ser criado na pasta raiz do projeto com o nome de "docker-compose.yml"
    - o arquivo .yml é feito por tabulações
- algumas propriedades utilizadas na configuração do docker-compose desse projeto:
    - version ==> versão do Docker
    - services ==> 
        - dentro dos services é colocado cada container que vai ser utilizado para a aplicação
        - nessa aplicação foi utilizado o service de "db", que será do banco de dados, e o "app", que será a aplicação em si
    - image ==> seleciona a tecnologia que vai ser utilizada no container
    - environment ==>
        - configuração do banco de dados
        - POSTGRES_PASSWORD ==> senha do banco
        - POSTGRES_USER ==> usuário de acesso ao banco
        - POSTGRES_DB ==> nome do banco
    - volumes ==> permite que os dados fiquem persistindo dentro do container, assim não será apagado quando finalizar o mesmo
    - ports ==>
        - quais as portas que estão rodando o banco e qual a porta que ele vai expor para ser utilizado em outro container
        - exemplo: '5432:5432'
            - primeiro config é a porta do banco
            - segunda config é a porta que será exposta para outro container  
    - container_name ==> nome do container
    - restart ==> responsável por reiniciar a app quando cair ou algo do tipo
    - build ==> forma de como será o build da aplicação
        - nessa app foi configurado como "." apenas, assim o docker vai pegar o Dockerfile da pasta raiz
        - o Dockerfile é onde estão as configurações para o build da app
    - depends_on ==> define que o serviço depende de outro para conseguir ser executado
- comandos: 
    - docker-compose up -d ==> faz as configurações do container dentro do docker e roda
    - docker-compose up --force-recreate --build -d ==> recria o container


Postgres
- banco de dados relacional
- é possível conectar e visualizar ele pelo Beekeeper Studio

Dockerfile
- utilizado para criar imagens. Em outras palavras, ele serve como a receita para construir um container, permitindo definir um ambiente personalizado e próprio para o projeto

Dockerignore
- arquivo igual o gitignore, para não incluir pastas selecionadas