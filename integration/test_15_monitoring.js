describe('Check folder', () => {
    it('Check monioring', () => {
        cy.readFile('cypress/integration/data.json').then(user => {
            expect(user.name).to.equal('cookies') // true
            const google_cookies = user.value
            cy.log(google_cookies)
            cy.setCookie('session', google_cookies)
            cy.viewport(1920, 1080)
            cy.visit(
                'https://rick.ai/company/5motkov-ru-1/8864/Internet-magazin/insights?#/',
            )
            //Переходим в Мониторинг
            cy.contains('Monitoring').click()
            //Ищем элементы
            cy.contains('Зачем нужен и как работает Rick Monitoring')
            //Проверяем отправку дадйжеста
            cy.contains('сформировать дайджест по фильтру').click()
            cy.wait(60000)
            cy.contains(
                'Проверьте, что дайджест корректный, исправьте его и доставьте клиенту',
            )
            cy.contains('Отправить дайджест').click()
            cy.contains('[5motkov.ru + rick.ai] полезные отчеты из сквозной аналитики')
            cy.contains('сформировать дайджест по фильтру').click()
            //Проверяем тикеты
            cy.contains('Обновите счётчик UA-25174567-1')
        })
    })
})
