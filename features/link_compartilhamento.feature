Feature: Gerar link de compartilhamento
    As a usuário com login e senha
    I want to compartilhar o link de uma playlist pública
    So that o link é gerado e pode ser compartilhado

    Scenario geração de link de compartilhamento 
    Given eu sou um usuário com login “jsa2” e senha “123”
    When eu clico no botão de compartilhar playlist que é pública
    Then um link para aquela playlist personalizada é gerado
    And posso copiar esse link e compartilhá-lo.       