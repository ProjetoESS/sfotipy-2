Feature: Gerar link de compartilhamento
    As a usuário com login e senha
    I want to compartilhar o link de uma playlist pública
    So that o link é gerado e pode ser compartilhado

    Scenario: geração de link de compartilhamento 
        Given eu sou um usuário com login "jsa2" e senha "123"
        And estou na playlist "Minha playlist" que é "public" com id "7"
        When seleciono a opção de compartilhar
        Then o link "localhost:4200/playlist/7" é gerado
        And uma opção "COPIAR" é mostrada.
        And posso copiar o link "localhost:4200/playlist/7"

    Scenario: não é possível gerar link de playlist privada
        Given sou um usuário com login "2asj" e senha "321"
        When entro na página da playlist "Outra playlist" com id "13"
        And a playlist "Outra playlist" é "private"
        Then a opção de compartilhar playlist não aparece na tela