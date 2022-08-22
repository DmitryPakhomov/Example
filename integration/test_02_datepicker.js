describe('Check datapicker', () => {
    it('Check general datapicker', () => {
        cy.readFile('cypress/integration/data.json').then(user => {
            expect(user.name).to.equal('cookies') // true
            const google_cookies = user.value
            cy.log(google_cookies)
            cy.setCookie('session', google_cookies)
            cy.visit(
                'https://rick.ai/company/5motkov-ru-1/8864/Internet-magazin/insights?groupId=channels#/',
            )
            //Проверяем что общий датапикер на всех виджетах открыается и там есть указанные значения
            cy.wait(1500)
            cy.contains('изменить дату всех виджетов').click()
            cy.contains('последние 7 ').click()
            cy.contains('изменить дату всех виджетов').click()
            //Проверяем что есть элементы в таблице без которых что то поломалось
            cy.wait(10000)
            cy.get('#report-insight').find('#widget_inner_48574')
            cy.get('#report-insight').find('#grid_48574')
        })
    })

    it('Check widget datapicker', () => {
        //Проверяем что датапикер на виджете открыается и там есть указанные значения
        cy.readFile('cypress/integration/data.json').then(user => {
            expect(user.name).to.equal('cookies') // true
            const google_cookies = user.value
            cy.log(google_cookies)
            cy.setCookie('session', google_cookies)
            cy.visit(
                'https://rick.ai/company/5motkov-ru-1/8864/Internet-magazin/insights?widgetId=50190#/',
            )
            //Проверяем что датапикер открыается и там есть указанные значения
            cy.contains('пн ').click()
            cy.contains('последние 7').click()
            cy.contains('посл. 6 дней').click()
            cy.wait(10000)
            cy.get('#report-insight').find('#widget_inner_50190')
            cy.get('#report-insight').find('#grid_50190')
        })
    })
})
