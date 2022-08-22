describe('Check widgets', () => {
    it('Check widgets', () => {
        cy.readFile('cypress/integration/data.json').then(user => {
            expect(user.name).to.equal('cookies') // true
            const google_cookies = user.value
            cy.log(google_cookies)
            cy.setCookie('session', google_cookies)
            //Переходим на нужный виджет
            cy.visit(
                'https://rick.ai/company/5motkov-ru-1/8864/Internet-magazin/insights?widgetId=52801#/',
            )
            cy.viewport(1600, 900)
            //Настройа виджета
            cy.contains('настройки виджета').click()
            cy.contains('пользов.')
            cy.wait(1000)
            //Создаём группировку
            cy.contains('добавить группировку').click()
            cy.contains('channel').click()
            cy.wait(500)
            cy.contains('channel type').click()
            cy.wait(500)
            cy.contains('ga:campaign').click()
            cy.wait(500)
            cy.contains('ga:channelGrouping').click()
            cy.wait(500)
            cy.contains('ga:sourceMedium').click()
            cy.wait(500)
            cy.contains('sourceMedium real').click()
            cy.wait(500)
            cy.contains('ga:adContent').click()
            cy.wait(500)
            cy.contains('месяц').click()
            cy.wait(500)
            cy.contains('cohorts: new, old cohort').click()
            cy.wait(500)
            //cy.contains('добавить группировку').click()
            cy.wait(1500)
            cy.contains('настройки виджета').click()
            //Создаём метрики
            cy.contains('настройки виджета').click()
            cy.wait(2500)
            cy.get('[data-cy=widget_params]')
                .contains('добавить метрику')
                .click()
            cy.wait(500)
            cy.contains('показы').click()
            cy.wait(500)
            cy.contains('клики').click()
            cy.wait(500)
            cy.contains('CTR').click()
            cy.wait(500)
            cy.get('[data-cy=widget_params]')
                .contains('ДРР')
                .click()
            cy.wait(500)
            cy.get('[data-cy=widget_params]')
                .contains('любой статус')
                .click()
            cy.get('[data-cy=widget_params]')
                .contains('добавить метрику')
                .click()
            cy.wait(1500)
            //Жмем навигация по виджетам
            cy.contains('настройки виджета').click()
            cy.wait(1500)
            //удаляем группировки
            cy.contains('настройки виджета').click()
            cy.wait(1500)
            cy.get('[data-cy=widget_params]')
                .find('span')
                .eq(14)
                .invoke('show')
                .click()
            cy.get('[data-cy=widget_params]')
                .find('span')
                .eq(14)
                .invoke('show')
                .click()
            cy.wait(500)
            cy.get('[data-cy=widget_params]')
                .find('span')
                .eq(14)
                .invoke('show')
                .click()
            cy.wait(500)
            cy.get('[data-cy=widget_params]')
                .find('span')
                .eq(14)
                .invoke('show')
                .click()
            cy.get('[data-cy=widget_params]')
                .find('span')
                .eq(14)
                .invoke('show')
                .click()
            cy.wait(500)
            cy.get('[data-cy=widget_params]')
                .find('span')
                .eq(14)
                .invoke('show')
                .click()
            cy.contains('настройки виджета').click()
            cy.wait(1500)
            cy.contains('настройки виджета').click()
            cy.wait(1500)
            cy.get('[data-cy=widget_params]')
                .find('span')
                .eq(6)
                .invoke('show')
                .click()
            cy.get('[data-cy=widget_params]')
                .find('span')
                .eq(6)
                .invoke('show')
                .click()
            cy.get('[data-cy=widget_params]')
                .find('span')
                .eq(2)
                .invoke('show')
                .click()
            //удаялем метрики
            cy.wait(500)
            cy.contains('настройки виджета').click()
            cy.wait(1500)
            cy.contains('настройки виджета').click()
            cy.wait(1500)
            cy.get('[data-cy=widget_params]')
                .find('span')
                .eq(3)
                .invoke('show')
                .click()
            cy.wait(500)
            cy.get('[data-cy=widget_params]')
                .find('span')
                .eq(3)
                .invoke('show')
                .click()
            cy.wait(500)
            cy.get('[data-cy=widget_params]')
                .find('span')
                .eq(3)
                .invoke('show')
                .click()
            cy.wait(500)
            cy.get('[data-cy=widget_params]')
                .find('span')
                .eq(3)
                .invoke('show')
                .click()
        })
    })
})
