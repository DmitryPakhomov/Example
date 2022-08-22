describe('Check widget type', () => {
    it('Check widget type', () => {
        cy.readFile('cypress/integration/data.json').then(user => {
            expect(user.name).to.equal('cookies') // true
            const google_cookies = user.value
            cy.log(google_cookies)
            cy.setCookie('session', google_cookies)
            cy.visit(
                'https://rick.ai/company/5motkov-ru-1/8864/Internet-magazin/insights?widgetId=49893',
            )
            cy.viewport(1920, 1280)
            cy.contains('настройки виджета').click()
            //Проверяем тип виджета в динамике
            cy.get('[data-cy=widget_params]')
                .contains('за период')
                .click()
            cy.get('[data-cy=widget_params]')
                .contains('в динамике')
                .click()
            cy.get('#report-insight').find('#widget_inner_49893')
            cy.get('#report-insight').find('#grid_49893')
            cy.wait(5500)
            //Проверяем тип виджета иерархия
            cy.get('[data-cy=widget_params]')
                .contains('в динамике')
                .click()
            cy.get('[data-cy=widget_params]')
                .contains('иерархия')
                .click()
            cy.get('#report-insight').find('#widget_inner_49893')
            cy.get('#report-insight').find('#grid_49893')
            cy.wait(5500)
            //Проверяем тип виджета когортный
            cy.get('[data-cy=widget_params]')
                .contains('иерархия')
                .click()
            cy.get('[data-cy=widget_params]')
                .contains('когортный')
                .click()
            cy.get('#report-insight').find('#widget_inner_49893')
            cy.get('#report-insight').find('#grid_49893')
            cy.wait(5500)
            //Проверяем тип виджета за период
            cy.get('[data-cy=widget_params]')
                .contains('когортный')
                .click()
            cy.get('[data-cy=widget_params]')
                .contains('за период')
                .click()
            cy.wait(5500)
            cy.get('#report-insight').find('#widget_inner_49893')
            cy.get('#report-insight').find('#grid_49893')
            cy.contains('настройки виджета').click()
        })
    })
})
