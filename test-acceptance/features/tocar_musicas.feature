Feature: Tocar músicas
    As a user of the sfotipy
    I want to be able to play and pause songs
    so that I can enjoy the music that I like

Scenario: Tocar playlist da lista de playlists
Given eu estou na página de "Busca"
And todo o conteúdo está visível
When eu seleciono a opção de tocar a playlist "Mix de Coldplay"
Then a playlist "Mix de Coldplay" é definida como a playlist atual

Scenario: Tocar música da lista de músicas
Given eu estou na página de "Busca"
And todas as músicas estão visíveis
And eu posso ver a músicas "Viva la Vida" na lista de músicas
When eu seleciono a opção de tocar a música "Viva la Vida"
Then a música "Viva la Vida" começa a tocar