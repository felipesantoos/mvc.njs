# MVC.njs
Aplicação do padrão de arquitetura de software MVC com Node.js.

# MVC - Camadas
MVC é um padrão de arquitetura de software que divide a aplicação em três camadas: Model – View – Controller.

## Model (modelo)
- É responsável pela leitura, escrita e validação dos dados.
- É onde são implementadas as regras de negócio.

### Regras de negócio
- São as definições de como a empresa em questão fazer negócios.
- É a declaração de como a empresa trabalha, quais são todos os processos para a execução do serviço ou entrega do produto com que a empresa trabalha.

## View (visão)
- É responsável pela interação com o usuário.
- É nela onde são apresentados os dados para o usuário.
- Exemplos de dados: páginas HTML, arquivos XML, documentos, vídeos, fotos, músicas etc.

## Controller (controlador)
- É responsável por lidar com as requisições do usuário.
- Ela gerencia as ações realizadas, definindo qual view e qual model será utilizado para que a ação seja realizada.

# Fluxo da nossa aplicação

![mcv-nodejs](https://user-images.githubusercontent.com/49795183/142776213-23b60bdb-b44a-49d7-86b0-9606013d9346.png)

# Estrutura das pastas
![Screenshot from 2021-11-21 17-00-52](https://user-images.githubusercontent.com/49795183/142777047-028d0d6b-99e0-4c51-9b07-bb28acae4a08.png)


# Dependências
Instale as depedências do projeto com os comandos a seguir:
```shell
npm init -y
npm install express
npm install consign
npm install ejs
```

# Como rodar o projeto
```shell
node index.js
```
