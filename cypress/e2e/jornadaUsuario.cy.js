describe("Jornada de usuário", ()=>{
    it("Deve permitir que a pessoa usuário acesse a aplicação, e realize uma transação e faca im logout",
    () =>{
        cy.visit("/")

        cy.getByData("botao-login").click();
        cy.getByData("email-input").type("jean@gmail.com")
        cy.getByData("senha-input").type("123456")
        cy.getByData("botao-enviar").click();
        cy.location("pathname").should("eq", "/home")
        cy.getByData("select-opcoes").select("Transferência")
        cy.getByData("form-input").type("150")
        cy.getByData("realiza-transacao").click()
        cy.getByData("lista-transacoes").find("li").last().contains("- R$ 150")
        cy.getByData("botao-sair").click()
        cy.location("pathname").should("eq", "/")


    })
})