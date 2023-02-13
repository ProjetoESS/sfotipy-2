Feature: Em alta do spotipy

Scenario: Entrando na tela de em alta
Dado que estou na “página inicial”,
Quando eu selecionar a “página explorar” do spotipy ,
Então serão mostradas as músicas, artistas e playlist em alta.

Scenario: Busca pelas músicas em alta
Dado que eu estou na "página inicial”
Quando eu entro na "página explorar"
Então são mostrados as músicas em alta no Brasil.

Scenario: Buscando pelos artistas em alta
Dado que eu estou na "página inicial"
Quando eu entro na "página explorar”
Então são mostrados os artistas em alta no Brasil.

Scenario: Buscando pelas playlists em alta
Dado que eu estou na "página inicial"
Quando eu entro na "página explorar”
Então são mostrados as playlists em alta no Brasil.
