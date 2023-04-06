Feature: Busca com filtros
    As a user of the sfotipy
    I want to be able to search for songs, playlists and authors with filters
    so that I can find exactly what I am looking for

Scenario: Busca com Filtro por trecho do nome
Given eu estou na página "busca"
And as músicas "Yellow", "Viva la vida", "Paradise" e "Another day in Paradise" aparecem na lista de músicas
When eu preencher o campo de busca por texto com "Paradise"
Then eu posso ver as músicas "Paradise" e "Another day in Paradise" na lista de músicas
And todas as músicas da lista de músicas contém "Paradise" em seu nome
