describe('Check brief', () => {
    it('Check brief', () => {
        cy.readFile('cypress/integration/data.json').then(user => {
            expect(user.name).to.equal('cookies') // true
            const google_cookies = user.value
            cy.log(google_cookies)
            cy.setCookie('session', google_cookies)
            //Переходим на нужный виджет
            cy.visit(
                'https://rick.ai/company/5motkov-ru-1/8864/Internet-magazin/setup/brief?#/',
            )
            cy.viewport(1600, 900)
            //Прверяем надписи
            cy.contains('Авторизация в CRM')
            //Вводим данные в инпуты
            cy.get('textarea')
                .eq(0)
                .clear()
            cy.get('textarea')
                .eq(0)
                .type('Контактные данные записаны автотестом Cypress')
            cy.get('textarea')
                .eq(1)
                .clear()
            cy.get('textarea')
                .eq(1)
                .type('Комментарии ')
            cy.get('textarea')
                .eq(2)
                .clear()
            cy.get('textarea')
                .eq(2)
                .type('Цели и задачи клиента')
            //Проверяем формы
            cy.contains('настройки AppCraft.Exchange')
            cy.contains('Авторизация в CRM')
            cy.contains('Настройки CRM')
        })
    })
})
