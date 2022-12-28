Feature: Login
    As a Usuário da aplicação
    I want to Poder me cadastrar e logar no site
    So that Usufruir das funcionalidades de playlists de música

    Scenario: página de login
        Given o sistema não consta com ninguém logado
        When eu clico no botão de entrar/logar
        Then a página de preenchimento de login aparece para mim

    Scenario: página de cadastro
        Given o sistema não consta com ninguém logado
        When eu clico no botão de cadastrar-se
        Then A tabela/página para preenchimento das informações de cadastro aparece

    Scenario: Login bem sucedido
        Given Estou na página de login
        When Preencho as informações de usuário e senha corretamente e clico em “entrar”
        Then Eu sou logado no site e aparece uma janela de confirmação.

    Scenario: Login não executado
        Given Estou na página de login
        When Preencho as informações de usuário e senha de forma errada e clico em “entrar”
        Then Aparece uma mensagem vermelha informando que o usuário ou senha está incorreto
