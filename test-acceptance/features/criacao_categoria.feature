Feature: Criação de Categorias
    As um usuário com login e senha e tenho permissão para gerenciar a playlist
    I want to criar e gerenciar categorias de uma playlist 
    So that as categorias de uma playlist serão definidas

    Scenario: adicionando nova categoria a uma playlist
        Given possuo login "jsa2" e senha "123"
        And estou na página da playlist "Minha playlist" com id "7"
        And tenho permissão para gerenciar "Minha playlist"
        And "Minha playlist" tem a categoria "Pop"
        When seleciono a opção de adicionar uma nova categoria
        And seleciono "Rock" como uma nova categoria
        Then "Rock" é uma nova categoria da playlist "Minha playlist"

    Scenario: mudança de categoria de playlist
        Given possuo o login "jsa2" e senha "123"
        And estou na página da playlist "Outra playlist" com id "13"
        And tenho permissão para gerenciar "Outra playlist"
        And "Indie" não é uma categoria da playlist "Outra playlist"
        And "Electronic" é uma categoria da playlist "Outra playlist"
        When seleciono a opção de adicionar uma nova categoria
        And seleciono "Electronic" para o remover das categorias
        And seleciono "Indie" como uma nova categoria
        Then "Indie" é uma categoria de "Outra playlist” e "Electronic" não.
    
    Scenario: remover uma categoria de uma playlist
        Given possuo o login "jsa2" e senha "123"
        And estou na página da playlist "antigas" com id "32"
        And tenho permissão para gerenciar "antigas"
        And "Rock" é uma categoria da playlist "antigas"
        When seleciono a opção de adicionar uma nova categoria
        And seleciono "Rock" para o remover das categorias
        Then "antigas" não possui mais "Rock" como uma categoria da playlist

    Scenario: adicionando categoria já existente na playlist
        Given possuo o login "jsa2" e senha "123"
        And estou na página da playlist "boas" com id "45"
        And tenho permissão para gerenciar "boas"
        And "Hip-Hop" é uma categoria da playlist "boas"
        When seleciono a opção de adicionar uma nova categoria
        And seleciono "Hip-Hop" como uma nova categoria
        Then "boas" continua tendo somente uma categoria, que é "Hip-Hop"

    Scenario: mais de duas categorias para playlist
        Given possuo o login "jsa2" e senha "123"
        And estou na página da playlist "as melhores" com id "52"
        And tenho permissão para gerenciar "as melhores"
        And "Rock" é uma categoria da playlist "as melhores"
        And "Hip-Hop" é uma categoria da playlist "as melhores"
        When seleciono a opção de adicionar uma nova categoria
        And seleciono "Electronic" como uma nova categoria
        Then "Electronic" não é uma categoria de "as melhores"
        And "Rock" é uma categoria da playlist "as melhores"
        And "Hip-Hop" é uma categoria da playlist "as melhores"
    
    Scenario: removendo todas as categorias de uma playlist
        Given possuo o login "jsa2" e senha "123"
        And estou na página da playlist "fim de semana" com id "61"
        And tenho permissão para gerenciar "fim de semana"
        And "KPop" é uma categoria da playlist "fim de semana"
        And "Electronic" é uma categoria da playlist "fim de semana"
        When seleciono a opção de adicionar uma nova categoria
        And seleciono "Electronic" para o remover das categorias
        And seleciono "KPop" para o remover das categorias
        Then "fim de semana" não possui nenhuma categoria
    
    Scenario: adicionando duas categorias para a playlist
        Given possuo o login "jsa2" e senha "123"
        And estou na página da playlist "fim de semana" com id "61"
        And tenho permissão para gerenciar "fim de semana"
        And "fim de semana" não possui nenhuma categoria cadastrada
        When seleciono a opção de adicionar uma nova categoria
        And seleciono "Electronic" como uma nova categoria
        And seleciono "KPop" como uma nova categoria
        Then "Electronic" é uma categoria da playlist "fim de semana"
        And "KPop" é uma categoria da playlist "fim de semana"

