# Projeto de consumo Apollo Cliente - API Countries

Esse projeto foi incializado utilizando [Create React App](https://github.com/facebook/create-react-app).

## Comandos disponiveis

Neste projeto, você consegue utizar os seguintes comandos:

### `yarn start`

Para rodar a aplicação em modo de desenvolvimento.\
Abra [http://localhost:3000](http://localhost:3000) para visualizar no seu navegador o projeto.

### `yarn test`

Ele irá inciar a execução dos testes craidos na aplicação somente dos componentes.\

### `yarn build`

Irá gerar o build para produçãno no diretório final chamado `build`.\

Para visualizar o modo [desenvolvimento](https://datuniano-softplan.vercel.app/) clique para visualizar.

Observação quanto a publicação na Vercel, o projeto não está abrindo devido a API que é consumida não haver HTTPS, por isso em nenhum publish aberto, a aplicação consegue consumir devido a falta do HTTPS.

## Algumas melhorias e pacotes

Github Actions: Foi inserido na aplicação e onde após enviar o push para o repositório, a ação é iniciada para fazer a validação como testes e build da aplicação, para verificar a integridade do projeto.

Styled-components: Devido a necessidade de criar uma interface, inseri no projeto o styled-components para facilitar o desenvolvimento e trazer a flexibilidade para criar as telas e elementos, bem como os componentes.

Storybook: Inserido no projeto para iniciar a documentação dos componentes, devido o mesmo não haver outro estado de componente, foi somente inserido a sua renderização padrão (default) do storybook.
