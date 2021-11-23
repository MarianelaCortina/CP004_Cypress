import indexPage from '../support/pages/index'

describe('Seleccionando un celular', ()=>{
    it('Seleccionando el modelo Moto G2O y que contenga descuento', ()=>{
        cy.visit('/')
        indexPage.select('Moto G20');
        cy.get('.percent-discount').should('contain', '% off');
        
    })
})
