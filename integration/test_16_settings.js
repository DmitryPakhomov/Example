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
            //Жмём на настройки
            cy.contains('Settings').click()
            cy.wait(1500)
            //Проверяем надпсии
            cy.contains('Настройки компании и бизнес-юнитов')
            cy.contains('Интернет-магазин пряжи')
            cy.contains('Ключевые метрики')
            cy.contains('Google Analytics')
            cy.contains('число уникальных ga:clientID')
            cy.contains('источник данных')
            cy.contains('способ оставить заявку')
            cy.contains('Создайте инвайт чтобы пригласить коллег в Rick')
            cy.contains('Добавьте пользовательские группировки')
            cy.contains('Landing Page Path')
            cy.contains('CRM, ADs Import, Integrations')
            cy.contains('Facebook')
            cy.contains('Настройка CRM')
            cy.contains('Segmentation & Retargeting')
        })
    })
})
