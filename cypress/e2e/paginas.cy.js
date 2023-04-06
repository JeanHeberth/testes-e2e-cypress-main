describe("Testando múiltiplas páginas", () => {
//     beforeEach(() =>{
// cy.acessarUrl();
//     })
it("Deve conseguir acessar a página ", () =>{
        cy.visit("/");
        cy.getByData("botao-login").click();
        cy.getByData("email-input").type("ssss@gmail.com");
        cy.getByData("senha-input").type("123456789");
        cy.getByData("botao-enviar").click();
        cy.location("pathname").should("eq", "/home")
        cy.getByData("app-home").find("a").eq("1").click();
        cy.getByData("titulo-cartoes").should("exist").and("have.text", "Meus cartões")
        cy.location("pathname").should("eq", "/home/cartoes")

     

})
})