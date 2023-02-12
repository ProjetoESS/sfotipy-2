Feature: Em alta do spotipy

Scenario: Entrando na tela de em alta
Dado que estou na “página inicial”,
Quando eu selecionar a “página em alta” do spotipy ,
Então serão mostradas as três músicas mais escutadas no Brasil.

Scenario: Busca pelas músicas em alta
Dado que eu estou na "página inicial”
Quando eu entro na "página de busca"
E busco por "músicas em alta",
Então sou direcionado para "página em alta"
E são mostradas as três músicas mais escutadas no Brasil.

Scenario: Buscando pelos artistas em alta
Dado que eu estou na "página inicial"
Quando eu entro na "página de busca”
E busco por "artistas em alta"
Então sou direcionado para "página em alta"
E são mostradas as três músicas em alta e seus respectivos artistas.