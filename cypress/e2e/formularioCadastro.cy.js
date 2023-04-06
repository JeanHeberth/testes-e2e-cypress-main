describe("Formulário Cadastro", () => {
    beforeEach(()=>{
      cy.acessarUrl();
    })
    it("Deve realizar o cadastro no sistema com sucesso!", () => {
    cy.getByData("botao-cadastro")
    .click();
    cy.getByData("nome-input").type("Testando escrever no formulário cadastro");
    cy.getByData("email-input").type("sssdsssdsasass@gmail.com");
    cy.getByData("senha-input").type("123456789");
    cy. getByData("checkbox-input").click();
    cy.getByData("botao-enviar").click();
    cy.getByData("mensagem-sucesso").should("exist")
    .and("have.text", "Usuário cadastrado com sucesso!");
   })

         });

 // cy.getByData("mensagem-erro")
