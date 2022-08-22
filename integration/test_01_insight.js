describe('Test insight page', () => {
    it('Visits the Rick.ai website and check widgets', () => {
        cy.readFile('cypress/integration/data.json').then(user => {
            expect(user.name).to.equal('cookies') // true
            const google_cookies = user.value
            cy.log(google_cookies)
            cy.setCookie('session', google_cookies)
            cy.visit(
                'https://rick.ai/company/domru-ru/4428/domru.ru_etalonn/insights?groupId=channels#/',
            )
            cy.wait(1000)
            //Выбираем неделю
            cy.contains('изменить дату всех виджетов').click()
            cy.contains('последние 7 ').click()
            cy.contains('изменить дату всех виджетов').click()
            cy.wait(60000)
            //Проверяем что есть надписи на табличке с данными
            cy.contains('форма+cq+обр. звонок+calltouch')
            cy.contains('Эффективность каналов и кампаний')
            //Проверяем что есть элементы в таблице без которых что то поломалось
            cy.get('#report-insight').find('#widget_inner_20949')
            cy.get('#report-insight').find('#grid_20949')
            //Проверяем что есть элементы в таблице без которых что то поломалось
            cy.get('#report-insight').find('#widget_inner_20951')
            cy.get('#report-insight').find('#grid_20951')
            //Проверяем что есть элементы в таблице без которых что то поломалось
            cy.get('#report-insight').find('#widget_inner_28685')
            cy.get('#report-insight').find('#grid_28685')
        })
    })
})
