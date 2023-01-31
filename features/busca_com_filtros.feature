Feature: Busca com filtros
    As a user of the sfotipy
    I want to be able to search for songs, playlists and authors with filters
    so that I can find exactly what I am looking for

Scenario: Busca com Filtro por categoria
Given estou na “página de busca”, 
When eu selecionar a categoria “MPB” no filtro, 
Then só serão mostradas músicas da categoria “MPB”.

Scenario: Busca com Filtro por trecho do nome
Given eu estou na "página de busca"
When eu escrever um "Paradise" na busca por texto
Then serão mostradas todas as músicas e playlists cujo nome contenha "Paradise".

Scenario: Busca com Filtro por tipo de conteúdo
Given eu estou na "página de busca"
When eu selecionar "apenas músicas" no conteúdo a ser mostrado
Then serão listadas na busca "músicas"

Scenario: Busca com Filtro por tipo de conteúdo e trecho do nome
Given eu estou na "página de busca"
When eu seleciono "apenas músicas" no conteúdo a ser mostrado
E eu escrevo um "Paradise" na busca por texto
Then serão listadas na busca "músicas" cujo "nome" contenha "Paradise"

Scenario: Busca com Filtro por trecho do nome sem correspondências
Given eu estou na "página de busca"
E não há nenhuma música ou playlist cujo nome contenha "Batata"
When eu escrever "batata" na busca por texto
Then será mostrado uma mensagem de erro informando que não foram encontradas correspondências

Scenario: Busca com Filtro por playlist privada
Given eu estou na "página de busca"
E só há uma playlist de nome "Playlist secreta" registrada e a mesma é privada
E eu não tenho acesso à playlist de nome "Playlist secreta"
When eu seleciono "apenas playlists" no conteúdo a ser mostrado
E eu escrever "Playlist secreta" na busca por texto
Then será mostrado uma mensagem de erro informando que não foram encontradas correspondências

Scenario: Busca sem filtro
Given eu estou na "página de busca"
When eu seleciono a opção de iniciar busca
Then serão listadas na página músicas, playlists e artistas sem filtro
