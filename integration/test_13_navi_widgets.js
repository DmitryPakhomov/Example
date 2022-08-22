describe('Check widgets navigation', () => {
    it('Check widgets navigation', () => {
        cy.readFile('cypress/integration/data.json').then(user => {
            expect(user.name).to.equal('cookies') // true
            const google_cookies = user.value
            cy.log(google_cookies)
            cy.setCookie('session', google_cookies)
            //Переходим на нужный виджет
            cy.visit(
                'https://rick.ai/company/5motkov-ru-1/8864/Internet-magazin/insights?#/',
            )
            cy.viewport(1600, 900)
            //Жмём Навигация по виджетам
            cy.contains('навигация по виджетам').click()
            cy.wait(1000)
            //Проверяем наличие нужной группы виджетов
            cy.contains('Тест навигации по виджетам')
            cy.wait(1500)
            //Жмём создать виджет
            cy.get(
                '#group_edc7e1d9e100472c87ecb9f34ab9cfa2 > div > div:nth-child(5) > div > div',
            )
                .invoke('show')
                .click()
            // Открывем ссылки все папки с виджетами справа сверху
            cy.contains('все папки с виджетами').click()
            cy.wait(500)
            // Только виджеты клиента
            cy.contains('только виджеты клиента').click()
            cy.wait(500)
            // Открывем ссылки все папки с виджетами справа сверху
            cy.contains('только виджеты клиента').click()
            cy.wait(500)
            // только кухня Рика
            cy.contains('только кухня Рика').click()
            cy.wait(500)
            // Открывем ссылки все папки с виджетами справа сверху
            cy.contains('только кухня Рика').click()
            cy.wait(500)
            // Открывем ссылки все папки с виджетами справа сверху
            cy.contains('все папки с виджетами').click()
            cy.wait(500)
            // проверяем ссылку cоздать новую папку
            cy.contains('cоздать новую папку')
            cy.wait(500)
            // проверям поиск
            cy.get('#navigation_filter').type('channel')
            cy.wait(1500)
            // проверям поиск
            cy.get('#navigation_filter').clear()
        })
    })
})
