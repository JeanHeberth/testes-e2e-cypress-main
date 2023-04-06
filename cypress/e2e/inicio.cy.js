describe('Quando acessar a página', () => {
  beforeEach(()=>{
    cy.acessarUrl();
  })
   it('Deve renderizar a página' , () => {
    cy.getByData("titulo-principal").contains("Experimente mais liberdade");
  });
  });


