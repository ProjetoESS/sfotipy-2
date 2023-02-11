Feature: Login
    As a Usuário da aplicação
    I want to Poder me cadastrar e logar no site
    So that Eu posso usufruir da funcionalidade de playlists de música

    Scenario: Cadastro validado (bem sucedido)
        Given O usuário se encontra na página de cadastro
        When Ele insere as informações de forma correta em todos os campos
        And Clica em "cadastrar-se" para enviar essas informações
        Then Aparece uma mensagem de cadastro bem sucedido
        And O cliente é conectado ao nosso servidor
        And Está apto a usufruir de todas as funcionalidades

    Scenario: Cadastro invalidado (mal sucedido)
        Given O usuário se encontra na página de cadastro
        When Ele insere as informações de forma incorreta em alguns campos
        And Clica em "cadastrar-se" para enviar essas informações
        Then Aparece uma mensagem informando qual campo está errado
        And Qual erro foi escrito naquele campo
        And O cliente precisa alocar aquelas informações novamente

    Scenario: Login bem sucedido
        Given Estou na página de login
        When Preencho as informações de usuário e senha corretamente
        And e clico em “entrar”
        Then Eu sou logado no site
        And aparece uma janela de confirmação
        And Posso iniciar as funcionalidades básicas

    Scenario: Login não executado
        Given Estou na página de login
        When Preencho as informações de usuário e senha de forma errada
        And clico em “entrar”
        Then Aparece uma mensagem vermelha de erro informando que o usuário ou senha está incorreto
        And Preciso colocar novamente as informações de login
