describe('Check widget sort', () => {
    it('Check widget sort', () => {
        cy.readFile('cypress/integration/data.json').then(user => {
            expect(user.name).to.equal('cookies') // true
            const google_cookies = user.value
            cy.log(google_cookies)
            cy.setCookie('session', google_cookies)
            cy.visit(
                'https://rick.ai/company/5motkov-ru-1/8864/Internet-magazin/insights?widgetId=50190&start=2020-04-01&end=2020-04-05#/',
            )
            //cy.viewport(1920, 1280)
            //жмём Insights
            cy.wait(1500)
            cy.get('img')
                .eq(5)
                .click()
            //Проверяем магазин пряжи
            cy.contains('Интернет-магазин пряжи')
            cy.contains('+ создать дайджест').click()
            cy.wait(1500)
            //Проверяем что в спике есть основные клиенты
            cy.contains('Domru.ru b2b')
            cy.contains('nlmk.shop')
            cy.contains('skypark.ru')
            //закрываем попап
            cy.wait(1500)
            cy.get('img')
                .eq(5)
                .click()
        })
    })
})
