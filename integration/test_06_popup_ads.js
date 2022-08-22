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
            //жмём ADS
            cy.wait(1500)
            cy.get('img')
                .eq(1)
                .click()
            // Жмём на facebook
            cy.contains('facebook ads')
            cy.wait(1500)
            // поиск слова аккаунты
            cy.contains('аккаунты')
            // подключить кабинет
            cy.contains('+ подключить кабинет').click()
            cy.contains('vkontakte ads')
            // Жмём Ads кнопку и еще раз
            cy.get('img')
                .eq(1)
                .click()
        })
    })
})
