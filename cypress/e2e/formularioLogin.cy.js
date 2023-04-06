describe("Formulário Login", () => {
    beforeEach(()=>{
      cy.acessarUrl();
    })
    it("Não deve realizar o login com email inválido", () => {
    cy.getByData("botao-login")
    .click();
    cy.getByData("email-input")
    .should("be.visible")
    .type("jeanheberth19@gmail")
    cy.getByData("senha-input")
    .should("be.visible")
    .type("123456")
    cy.getByData("botao-enviar").click();
    cy.getByData("mensagem-erro").should("exist").and("have.text", "O email digitado é inválido")
    cy.getByData("email-input").clear();
    })

    it("Não deve realizar o login com email vazio", () => {
    cy.getByData("botao-login")
    .click();
    cy.getByData("senha-input")
    .should("be.visible")
    .type("123456")
    cy.getByData("botao-enviar").click();
    cy.getByData("mensagem-erro").should("exist").and("have.text", "O campo email é obrigatório")
    
    })
         });

