describe('Test redirect', () => {
    it('Check redirect autorize users - folders', () => {
        cy.visit(
            //идём в группу пользователем который есть в Рике но открыл в браузер в режиме инкогнито и перешёл по ссылке
            'https://rick.ai/company/domru-ru/4428/domru.ru_etalonn/insights?groupId=channels#/',
        )
        cy.wait(1000)
        //Проверяем что нас кидает на страницу авторизации гугл
        cy.contains('Войдите через Google, чтобы получить доступ в Rick.ai')

        cy.readFile('cypress/integration/data.json').then(user => {
            expect(user.name).to.equal('cookies') // true
            const google_cookies = user.value
            cy.log(google_cookies)
            cy.setCookie('session', google_cookies)
            cy.visit(
                //после установки куки, пробуем еще раз перейдти
                'https://rick.ai/company/domru-ru/4428/domru.ru_etalonn/insights?groupId=channels#/',
            )
            cy.wait(16000)
            // нас уже должно редиректить на точнную группу по ссылке
            //Проверяем что есть папки в таблице без которых что то поломалось
            cy.get('#report-insight').find('#widget_inner_20949')
            cy.get('#report-insight').find('#grid_20949')
        })
    })
    it('Check redirect autorize users - widgets', () => {
        cy.visit(
            //идём в группу пользователем который есть в Рике но открыл в браузер в режиме инкогнито и перешёл по ссылке
            'https://rick.ai/company/5motkov-ru-1/8864/Internet-magazin/insights?widgetId=48578',
        )
        cy.wait(1000)
        //Проверяем что нас кидает на страницу авторизации гугл
        cy.contains('Войдите через Google, чтобы получить доступ в Rick.ai')

        cy.readFile('cypress/integration/data.json').then(user => {
            expect(user.name).to.equal('cookies') // true
            const google_cookies = user.value
            cy.log(google_cookies)
            cy.setCookie('session', google_cookies)
            cy.visit(
                //после установки куки, пробуем еще раз перейдти
                'https://rick.ai/company/5motkov-ru-1/8864/Internet-magazin/insights?widgetId=48578',
            )
            cy.wait(2000)
            // нас уже должно редиректить на точнный виджет по ссылке
            //Проверяем что есть папки в таблице без которых что то поломалось
            cy.get('#report-insight').find('#widget_inner_48578')
        })
    })
    it('Check redirect autorize users - insights', () => {
        cy.visit(
            //идём в группу пользователем который есть в Рике но открыл в браузер в режиме инкогнито и перешёл по ссылке
            'https://rick.ai/company/5motkov-ru-1/8864/Internet-magazin/insights',
        )
        cy.wait(1000)
        //Проверяем что нас кидает на страницу авторизации гугл
        cy.contains('Войдите через Google, чтобы получить доступ в Rick.ai')

        cy.readFile('cypress/integration/data.json').then(user => {
            expect(user.name).to.equal('cookies') // true
            const google_cookies = user.value
            cy.log(google_cookies)
            cy.setCookie('session', google_cookies)
            cy.visit(
                //после установки куки, пробуем еще раз перейдти
                'https://rick.ai/company/5motkov-ru-1/8864/Internet-magazin/insights',
            )
            cy.wait(1000)
            // нас уже должно редиректить на Insights
            //Проверяем что есть папка
            cy.contains('Неэффективные каналы и рекламные кампании')
        })
    })

    it('Check redirect non-autorize users - invite', () => {
        cy.visit(
            //идём в группу пользователем которого нет в Рике но открыл в браузер в режиме инкогнито и перешёл по ссылке- инвайту
            'https://rick.ai/invite/domru-ru/OauIJrU2',
        )
        cy.wait(1000)
        //Проверяем что нас кидает на страницу авторизации гугл
        cy.contains('Дмитрий Пахомов пригласил вас в аналитику domru')

        cy.readFile('cypress/integration/data.json').then(user => {
            expect(user.name).to.equal('cookies') // true
            const google_cookies = user.value
            cy.log(google_cookies)
            cy.setCookie('session', google_cookies)

            //Входим
            cy.visit(
                //идём в группу пользователем которого нет в Рике но открыл в браузер в режиме инкогнито и перешёл по ссылке- инвайту
                'https://rick.ai/invite/domru-ru/OauIJrU2',
            )
            cy.wait(1000)
            //проверяем что нас закинуло в нужную папку в РИке

            cy.contains('5motkov')
        })
    })
})
