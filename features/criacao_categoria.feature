Feature: Criação de Categorias
    As um usuário com login e senha e tenho permissão para gerenciar a playlist
    I want to criar e gerenciar categorias de uma playlist 
    So that as categorias de uma playlist serão definidas

    Scenario: adicionando nova categoria a uma playlist
        Given possuo login “jsa2” e senha “123”
        And tenho permissãop para gerenciar a playlist "minhas favoritas"
        When seleciono a opção de gerenciar categorias
        And seleciono “MPB” como uma nova categoria
        Then “MPB” é uma nova categoria da playlist “minhas favoritas”

    Scenario: mudança de categoria de playlist
        Given possuo o login “jsa2” e senha “123”
        And tenho permissãop para gerenciar a playlist "músicas antigas"
        When seleciono gerenciar categorias
        And seleciono “MPB” como a categoria que vai ser mudada
        And seleciono “R&B” como a categoria que vai substituir “MPB”
        Then “R&B” é uma categoria de “músicas antigas” e “MPB” não.

    Scenario: mais de duas categorias para playlist
        Given possuo o login “jsa2” e senha “123”
        And tenho permissãop para gerenciar a playlist "minhas favoritas"
        And “minhas favoritas” possui as categorias “MPB” e “ROCK”
        When tento adicionar uma nova categoria “R&B”
        Then uma mensagem de erro aparece
        And a nova categoria não é registrada

    Scenario: adicionando categoria na playlist não tenho permissão para gerenciá-la.
        Given sou um usuário com login "jsa2" e senha "123"
        When tento adicionar a categoria "MPB" na playlist "clássicos"
        Then recebo uma mensagem de erro indicando que não tenho permissão para a ação
        And ainda estou na página da playlist

    Scenario: adicionando categoria já existente na playlist
        Given possuo o login “jsa2” e senha “123”
        And tenho permissãop para gerenciar a playlist "minhas favoritas"
        And "minhas favoritas" possui a categoria "POP"
        When tento adicionar a categoria "POP"
        Then recebo uma mensagem de erro indicando que "POP" já é uma categoria de "minhas favoritas"

    Scenario: remover uma categoria de uma playlist
        Given sou o dono da playlist "minhas favoritas"
        And estou logado com login "jsa2" e senha "123"
        And "minhas favoritas" possui a categoria "POP"
        When seleciono gerenciar categorias
        And seleciono a categoria "POP"
        Then "minhas favoritas" não possui mais "POP" como uma categoria da playlist
        And ainda estou na página da playlist