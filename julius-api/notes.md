### Comandos utilizados no projeto

- npm i -g typeorm ==> instala o typeorm de forma global. Assim é possível gerar o projeto pela linha de comando pré configurado

- typeorm init --name nome_do_projeto --database nome_do_banco ==> gera o projeto com as pré configurações do typeorm com o banco desejado
    - typeorm init --name julius-api --database postgres ==> comando utilizado para gerar esse projeto com o banco Postgres

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
        - nessa aplicação foi utilizado apenas o service de "db", que será do banco de dados
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
- comando: docker-compose up -d ==> faz as configurações do container dentro do docker

Postgres
- banco de dados relacional
- é possível conectar e visualizar ele pelo Beekeeper Studio