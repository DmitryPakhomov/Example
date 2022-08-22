describe('Check widget type', () => {
    it('Check widget type', () => {
        cy.readFile('cypress/integration/data.json').then(user => {
            expect(user.name).to.equal('cookies') // true
            const google_cookies = user.value
            cy.log(google_cookies)
            cy.setCookie('session', google_cookies)
            cy.visit(
                'https://rick.ai/company/5motkov-ru-1/8864/Internet-magazin/insights?widgetId=49978#/',
            )
            //cy.viewport(1920, 1280)
            //жмём без фильтра
            cy.wait(3500)
            cy.contains('без фильтра').click()
            cy.wait(3500)
            //вносим тип Channels и значение Yandex
            cy.contains('добавить фильтр').click()
            cy.contains('channel').click()
            cy.wait(3500)
            cy.get('input')
                .eq(2)
                .type('Yandex')
            //Добавляем метрику клики
            cy.contains('добавить метрику').click()
            cy.wait(3500)
            cy.contains('клики').should('be.visible')
            cy.contains('клики').click()
            cy.get('input')
                .eq(3)
                .type('1')
            cy.wait(3500)
            cy.contains('всего').click()
            cy.wait(3500)
            //Удаляем фильтры
            cy.contains('больше или равно').click()
            cy.wait(2500)
            cy.get('input')
                .eq(2)
                .clear()
            cy.wait(3000)
            cy.get('input')
                .eq(3)
                .clear()
            cy.wait(3000)
            cy.contains('без фильтра').click()
        })
    })
})
