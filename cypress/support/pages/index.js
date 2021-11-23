class indexPage{
    select = (element) =>{
        cy.fixture('index.json').then((locators)=>{
            cy.get(locators.productItem).click();
            //cy.get(locators.productItem).type(element);
        })
    }
}
export default new indexPage();