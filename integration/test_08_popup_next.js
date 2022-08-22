describe('Check popup next', () => {
    it('Check popup next', () => {
        cy.readFile('cypress/integration/data.json').then(user => {
            expect(user.name).to.equal('cookies') // true
            const google_cookies = user.value
            cy.log(google_cookies)
            cy.setCookie('session', google_cookies)
            cy.visit(
                'https://rick.ai/company/5motkov-ru-1/8864/Internet-magazin/insights?widgetId=50190#/',
            )
            //cy.viewport(1920, 1280)
            //жмём next
            cy.contains('next').click()
            cy.wait(1500)
            //Проверяем магазин пряжи
            cy.contains('Обновите счетчик Google Analytics с записью ga_clientID')
            cy.contains('Импортируйте расходы')
            cy.contains('Настройте отправку сделок c ga_clientID')
            cy.wait(1500)
            cy.contains('Обновите счётчик UA-25174567-1')
            cy.contains('После импортирования расходов,')
            cy.contains('Чтобы вы могли посчитать')
            //закрываем попап
            cy.wait(1500)
            cy.contains('next').click()
        })
    })
})
