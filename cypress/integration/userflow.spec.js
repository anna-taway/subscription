/* eslint-disable no-undef */
describe("User flow test", () => {
    
    it("Test user filling the form to suscribe", () => {
        
        // Visit path "/"
        cy.visit('/');

        // Click on a link containing form in href & check URL
        cy.get('a[href*="form"]').click()
        cy.url().should('include', '/form');

        // Submit the form with empty fields
        cy.get('form').submit();
        // Check error messages

        // Fill 'lastName' input field & 'firstName' input field
        cy.get('input[name="lastName"]')
            .type("Musk")
            .should("have.value", "Musk");
        cy.get('input[name="firstName"]')
            .type("Elon")
            .should("have.value", "Elon");
        cy.get('form').submit();
        // Check error messages
        
        // Fill the form completely
        cy.get('input[name="address"]')
            .type("1050 North Point St UNIT L")
            .should("have.value", "1050 North Point St UNIT L");
        cy.get('input[name="city"]')
            .type("San Francisco")
            .should("have.value", "San Francisco");
        cy.get('input[name="postalCode"]')
            .type("CA 94109")
            .should("have.value", "CA 94109");
        cy.get('input[name="mail"]')
            .type("elon.musk@space-x.com")
            .should("have.value", "elon.musk@space-x.com");   
        cy.get('input[name="phone"]')
            .type("0700000000")
            .should("have.value", "0700000000");  
        cy.get('form').submit();
        // Check validate function returns empty object errors

        // Check Modal is opened
        cy.get('.modals').should('have.class', 'active');

        // Click on confirm in the modal
        cy.get('.positive').click();
        // Check the URL contains subscription/confirm
        cy.url().should('include', '/subscription/confirm');

        // -> Test OAuth flow : it requires a Gmail Mock account
        // Visit path "/" and click on DOM elements with class red 
        // cy.visit('/');
        // cy.get('.red').click({multiple: true});

    });
});