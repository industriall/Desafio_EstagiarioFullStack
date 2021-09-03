## Visão Geral - O que é esperado?

Essa etapa servirá para que você possa mostrar todos os seus conhecimentos em desenvolvimento WEB! Como desafio, é esperado que você desenvolva uma aplicação WEB para cadastrar eventos e uma API REST para receber os dados do formulário via JSON. A API deve receber os dados através de uma requisição POST e validar os campos. Se houver campos inválidos, deve ser retornado um JSON contendo os erros. Se os campos forem válidos, deve ser retornado um JSON contendo o id gerado para o Evento e redirecionar para a página de listagem de eventos. No frontend, após o retorno da requisição, deve ser exibido a(s) mensagem(ns) de sucesso ou erro.

**Observações:**
- Fique à vontade para utilizar quaisquer técnicas, bibliotecas e frameworks para o backend e frontend. Se você utilizar o .NET Core e/ou o React, será um diferencial.
- Não esperamos um sistema completo com persistência de dados. Porém, se fizer, será um diferencial!
- O esboço da tela abaixo é apenas ilustrativo. Você não precisa fazer a estilização igual. Apenas deve conter os campos presentes na imagem e seguir mais ou menos o layout. Se o layout for responsivo será um diferencial.
- A API deve conter os endpoints necessários para: listar os eventos, abrir o formulário de um evento, criar um evento, editar um evento e deletar um evento.

<div align="center">
  <img src="assets/Home%20Page.jpg" alt="Home Page" width="800px"/>
  <img src="assets/Form%20Page.jpg" alt="Form Page" width="800px"/>
</div>

### Validações da API

| Campo          | Regra                                                                                                                 |
| --             | --                                                                                                                    |
| Título         | É obrigatório e deve possuir no máximo 45 caracteres.                                                                 |
| Início         | É obrigatório e deve ser uma data válida no formato *dd/MM/yyyy* menor que a data de fim.                             |
| Fim            | É obrigatório e deve ser uma data válida no formato *dd/MM/yyyy* maior que a data de início.                          |
| Organizadores  | É obrigatório e deve ser um array de strings no qual cada string representa o nome de um dos organizadores do evento. |


### Tipos de Retorno da API

```JavaScript
// JSON de erro
{
  sucesso: false,
  errorMessages: [
    "A data de início é menor que a data final",
    "O título possui mais de 45 caracteres",
  ]
}
```

```JavaScript
// JSON de sucesso com id fake
{
  sucesso: true,
  id: 5
}
```

## Como serei avaliado?

Você poderá:

- efetuar um pull request da sua implementação diretamente no Github até a data limite de 12/09/2021, ou
- encaminhar para o e-mail henan.ferreira@industriall.ai com rh@industriall.ai em cópia, um arquivo .zip ou link com o código fonte até a data limite de 12/09/2021.

Qualquer problema ou dificuldade, você pode entrar em contato conosco pelos e-mails, henan.ferreira@industriall.ai ou rh@industriall.ai para que possamos sanar todas as dúvidas!
