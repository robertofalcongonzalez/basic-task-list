/// <reference types="Cypress" />

describe('Main', () => {
    it('should display empty item', () => {
        cy.visit('/')
        cy.get('input:first').should('have.attr', 'placeholder', 'Type to add new task')
    })
})
describe('inserting a task', () => {
    it('should create a span with email tag text color', () => {
        cy.visit('/')
        cy.get('input:first').click()
        cy.get('input:first')
            .type('fake@email.com', { force: true })
            .should('have.value', 'fake@email.com')
            .type(' ', { force: true })
            .should('have.value', '')
        cy.get('span:first').should('have.class', 'text-[#F58E0A]').invoke('text').then((text) => {
            expect(text.trim()).equal('fake@email.com')
        })
    })
    it('should create a span with hashtag tag text color', () => {
        cy.visit('/')
        cy.get('input:first').click()
        cy.get('input:first')
            .type('#important', { force: true })
            .should('have.value', '#important')
            .type(' ', { force: true })
            .should('have.value', '')
        cy.get('span:first').should('have.class', 'text-[#702EE6]').invoke('text').then((text) => {
            expect(text.trim()).equal('#important')
        })
    })
    it('should create a span with reference tag text color', () => {
        cy.visit('/')
        cy.get('input:first').click()
        cy.get('input:first')
            .type('@reference', { force: true })
            .should('have.value', '@reference')
            .type(' ', { force: true })
            .should('have.value', '')
        cy.get('span:first').should('have.class', 'text-[#07A873]').invoke('text').then((text) => {
            expect(text.trim()).equal('@reference')
        })
    })
    it('should create a span with link tag text color', () => {
        cy.visit('/')
        cy.get('input:first').click()
        cy.get('input:first')
            .type('https://link.com', { force: true })
            .should('have.value', 'https://link.com')
            .type(' ', { force: true })
            .should('have.value', '')
        cy.get('span:first').should('have.class', 'text-[#007FFF]').invoke('text').then((text) => {
            expect(text.trim()).equal('https://link.com')
        })
    })
})

describe('saving a task', () => {
    it('should create one tag for each kind of tag at once', () => {
        cy.visit('/')
        cy.get('input:first').click()
        cy.get('input:first')
            .type('fake@email.com', { force: true })
            .type(' ', { force: true })
            .type('#important', { force: true })
            .type(' ', { force: true })
            .type('@reference', { force: true })
            .type(' ', { force: true })
            .type('https://link.com', { force: true })
            .type(' ', { force: true })
        cy.get('[data-cy="empty-container"]').find('span').each((item, index, list) => {
            expect(list).to.have.length(4);
        })
    })
    it('should send task to the server', () => {
        cy.intercept('POST', '**/tasks/')
            .as('insertTask');
        cy.visit('/')
        cy.get('input:first').click()
        cy.get('input:first')
            .type('fake@email.com', { force: true })
            .type(' ', { force: true })
            .type('#important', { force: true })
            .type(' ', { force: true })
            .type('@reference', { force: true })
            .type(' ', { force: true })
            .type('https://link.com', { force: true })
            .type(' ', { force: true })
        cy.get('[data-cy="save-button"]').click({ force: true });
        cy.wait('@insertTask', { responseTimeout: 60000 })
        cy.get('@insertTask')
            .its('request.body')
            .should(
                'deep.equal',
                {
                    text: 'fake@email.com #important @reference https://link.com'
                }
            )
    })
})