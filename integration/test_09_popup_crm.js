describe('Checkpopup CRM', () => {
    it('Checkpopup CRM', () => {
        cy.readFile('cypress/integration/data.json').then(user => {
            expect(user.name).to.equal('cookies') // true
            const google_cookies = user.value
            cy.log(google_cookies)
            cy.setCookie('session', google_cookies)
            cy.visit(
                'https://rick.ai/company/5motkov-ru-1/8864/Internet-magazin/insights?widgetId=50190#/',
            )
            cy.viewport(1440, 900)
            //жмём CRM
            cy.get('img')
                .eq(3)
                .click()
            //Проверяем магазин пряжи
            cy.contains('amoCRM')
            cy.contains('Точность метрик не позволяет делать выводы')
            cy.contains('+ звонки через calltracking').click()
            //Проверяем что в спике есть основные клиенты
            cy.contains(
                'Выберите Calltracking, чтобы определять канал привлечения заявок',
            )
            cy.wait(4000)
            cy.contains('amoCRM').click()
            cy.contains('ASAP').click()
            //открылся тикет, проверяем содержание
            cy.wait(4000)
            cy.contains('новая задача')
            cy.visit(
                'https://rick.ai/company/5motkov-ru-1/8864/Internet-magazin/insights?widgetId=50190&start=2020-09-07&end=2020-09-20#/task/25063',
            )
            cy.wait(4000)
            cy.contains('Чтобы Рик учитывал актуальную информацию')
        })
    })
})
