describe('Check popup transactions', () => {
    it('Check popup transactions', () => {
        cy.readFile('cypress/integration/data.json').then(user => {
            expect(user.name).to.equal('cookies') // true
            const google_cookies = user.value
            cy.log(google_cookies)
            cy.setCookie('session', google_cookies)
            //Переходим на сВиджет
            cy.viewport(1400, 800)
            cy.visit(
                'https://rick.ai/company/netology/5640/Netology/insights?widgetId=49135&start=2020-09-15&end=2020-09-27#/',
            )
            cy.wait(1500)
            //щелкаем на цифру
            cy.get(
                '#grid_49135 > div > table > tbody > tr:nth-child(3) > td:nth-child(3) > div > div > div > span > span',
            ).click()
            cy.wait(3500)
            //Проверяем что попап открылся
            cy.contains('deal created')
            cy.contains('оплачен')
        })
    })
})
