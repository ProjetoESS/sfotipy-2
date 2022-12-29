Feature: Pagina Inicial
As a usuário qualquer do serviço
I want to acessar a página Inicial
So that eu possa ter informaçoes e conteúdos relevantes organizados e expostos para mim

Scenario: Voltar à página inicial
Given que eu esteja logado como um usuário comum no serviço 
And eu esteja em qualquer sub-página do serviço
When eu clico no botão “Home” uma vez
Then qualquer definição não salva feita em outra página será perdida
And eu vou diretamente para a página principal do serviço

Scenario: Pagina inicial
Given que eu esteja na página inicial
And logado com o usuário “vgc3” e a senha “abc1234”
When eu percorro a página
Then eu consigo ver “recomendações”, “musicas em alta” e as “minhas playlists”

Scenario: Sair do serviço
Given que eu esteja na página inicial
And logado com o usuário “vgc3” e a senha “abc1234”
When eu clico no ícone de “sair”
Then eu sou direcionado novamente para a seção de login
And minhas credenciais serão pedidas novamente

Scenario: Usuário não logado
Given que eu esteja na seção de login
And decida não fazer uma conta 
When eu clico no botão de “Entrar como guest”
Then eu consigo ver “musicas em alta” e as “playlists públicas”

Scenario: Minhas Playlists de usuário não logado
Given que eu esteja na pagina inicial
And eu não tenha feito login (seja um guest)
When eu clico no botão "Minhas Playlists"
Then eu sou levado para a pagina de login
And aparece a mensagem "Você precisa estar logado para acessar playlists próprias"

Scenario: Criar playlists como usuário não logado
Given que eu esteja na pagina inicial
And eu não tenha feito login (seja um guest)
When eu clico no simbolo de "Criar Playlist"
Then eu sou levado para a pagina de login
And aparece a mensagem "Você precisa ter uma conta para criar playlists próprias" 
And aparece o botão de "Registrar"

Scenario: Perfil do usuário
Given que eu esteja na página inicial
And logado com o usuário “vgc3” e a senha “abc1234”
When eu clico no ícone "Perfil" 
Then eu posso ver meu dados ("Victor", foto do perfil, "vgc3@cin.ufpe.br", ["Pop Mix", "Electric Vibe" e "Study lofi"])

Scenario: Minhas Playlists de usuário logado
Given que eu esteja na pagina inicial
And logado com o usuário “vgc3” e a senha “abc1234”
When eu clico no botão "Minhas Playlists"
Then eu sou levado para a pagina de "Minhas Playlists"
And eu posso ver uma lista com as mihas playlists "Pop Mix", "Electric Vibe" e "Study lofi"
And eu posso ver ao final a opção "Criar Playlist"
