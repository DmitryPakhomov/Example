describe('Check widget sort', () => {
    it('Check widget sort', () => {
        cy.readFile('cypress/integration/data.json').then(user => {
            expect(user.name).to.equal('cookies') // true
            const google_cookies = user.value
            cy.log(google_cookies)
            cy.setCookie('session', google_cookies)
            cy.visit(
                'https://rick.ai/company/5motkov-ru-1/8864/Internet-magazin/insights?widgetId=50190&start=2020-08-10&end=2020-08-23#/',
            )
            //cy.viewport(1920, 1280)
            //жмём без сортировки
            cy.wait(1500)
            cy.contains('без сортировки').click()
            //вносим пользователей
            cy.get(
                '#widget_inner_50190 > div.js-components-widgets-styles__reportToolbar--11oYO > div:nth-child(3) > div > div:nth-child(2) > div.jsx-1822186572.SortingItem.default > div > span',
            ).click()
            cy.wait(1500)
            cy.contains('channel').click()
            cy.wait(1500)
            cy.contains('channel').click()
            cy.wait(1500)
            cy.contains('всего').click()
            cy.wait(1500)
            cy.contains('channel').click()
            cy.wait(1500)
            cy.get(
                '#widget_inner_50190 > div.js-components-widgets-styles__reportToolbar--11oYO > div:nth-child(3) > div > div:nth-child(2) > div:nth-child(1) > div > div > span',
            )
                .invoke('show')
                .click()
            cy.contains('без сортировки').click()
        })
    })
})
