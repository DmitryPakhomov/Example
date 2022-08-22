describe('Check query, log', () => {
    it('Check query', () => {
        cy.readFile('cypress/integration/data.json').then(user => {
            expect(user.name).to.equal('cookies') // true
            const google_cookies = user.value
            cy.log(google_cookies)
            cy.setCookie('session', google_cookies)
            //Переходим на страницу query
            cy.visit('https://rick.ai/company/domru-ru/4428/domru.ru_etalonn/query?#/')
            cy.wait(1500)
            //Проверяем надпсии
            cy.contains('dimensions')
            cy.contains('includeEmptyRows')
            cy.contains('всего')
            cy.contains('google / cpc')
        })
    })
    it('Check log', () => {
        cy.readFile('cypress/integration/data.json').then(user => {
            expect(user.name).to.equal('cookies') // true
            const google_cookies = user.value
            cy.log(google_cookies)
            cy.setCookie('session', google_cookies)
            //проеряем лог
            cy.visit(
                'https://rick.ai/company/domru-ru/4428/domru.ru_etalonn/setup/developer/exchange-log#/',
            )
            cy.wait(20500)
            //Проверяем надпсии
            cy.contains('Все запросы')
            cy.contains('статус')
            cy.contains('метод')
            cy.contains('ссылка')
            cy.get('[aria-label="grid"]')
        })
    })
})
