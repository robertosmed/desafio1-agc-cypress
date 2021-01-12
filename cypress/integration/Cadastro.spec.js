/// <reference types="cypress" />

let Chance = require('chance');
let chance =  new Chance();

context('Cadastro', () => {
    it('Cadastro de usuario no site', () => {
        // base Url - http://automationpractice.com/index.php
        cy.visit('/');

        cy.get(".header_user_info a[href$='controller=my-account']").click();

        cy.get('#email_create').type(chance.email());
        
        cy.get("button[name='SubmitCreate']").click();
        
        // check -> radio
        cy.get("#id_gender2").check();

        // nome customer
        cy.get("input[name='customer_firstname']").type(chance.first());
        cy.get("input[name='customer_lastname']").type(chance.last());
        cy.get("input[name='passwd']").type('123456');

        // select -> select & select2 (combos)
        cy.get('select#days').select('16');
        cy.get('select#months').select('February');
        cy.get('select#years').select('1945');

        cy.get("input[name='address1']").type('Rua California do Norte');
        cy.get("input[name='city']").type('EUA');
        cy.get('select#id_state').select('California');
        cy.get("input#postcode").type('99501');
        cy.get("input#phone_mobile").type(chance.phone({formatted: false}));
        cy.get("button[name='submitAccount']").click();

        //validando que foi redirecionado para url correta
        cy.url().should('contain', 'my-account');

        //validando a exibicao do texto 'Welcome to your account'
        cy.get('.info-account')
            .should('contain.text', 'Welcome to your account.')
         
    });
});

//elementos
//.header_user_info a[href$='my-account']
//#email_create
//#SubmitCreate
//#id_gender2
//input[name='customer_firstname']
//input[name='customer_lastname']
//input[name='email']
//input[name='passwd']

//select#days
//select#months
//select#years

//input[name='firstname']
//input[name='lastname']
//input[name='address1']
//#input[name='city']
//select#id_state
//input#postcode
//select#id_country
//input#phone_mobile
//button[name='submitAccount']

//.info-account


