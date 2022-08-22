describe('Check folder', () => {
    it('Check folders', () => {
        cy.readFile('cypress/integration/data.json').then(user => {
            expect(user.name).to.equal('cookies') // true
            const google_cookies = user.value
            cy.log(google_cookies)
            cy.setCookie('session', google_cookies)
            cy.visit(
                'https://rick.ai/company/5motkov-ru-1/8864/Internet-magazin/insights?#/',
            )
            //Переходим в папку Автотесты
            cy.visit(
                'https://rick.ai/company/5motkov-ru-1/8864/Internet-magazin/insights?groupId=37f2f16035264197a9d6c57b08b1f9c7',
            )
            //cy.contains('Автотесты(не удалять)').click()
            //Переходим обратно во все папки
            cy.contains('все группы').click()
            //Создаём папку
            cy.contains('создать папку').click()
            cy.wait(1000)
            cy.url().then(url => {
                const groupId = new URL(url).searchParams.get('groupId')
                cy.log(groupId)
            })
            //Переходим обратно во все папки
            cy.contains('все группы').click()
            cy.wait(1500)
            //Жмем навигация по виджетам
            cy.contains('навигация по виджетам').click()
            cy.wait(2500)
        })
    })
})
