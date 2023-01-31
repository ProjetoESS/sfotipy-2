Feature: download de musica

Scenario: Busca pelo nome da música
Dado que estou na “página de busca”,
Quando eu digitar o nome da musica,
Então poderei baixar a música selecionada.

Scenario: Download para pela falta de conexão
Dado que eu escolhi uma musica para baixar
Quando eu estou baixando a música
E não há conexão com a internet
Então o download será interronpido.

Scenario: Download da mesma música
Dado que eu baixei uma música
Quando eu selecionar para baixar a mesma música novamente
Então será mostrado uma mensagem perguntando se deseja baixar o mesmo arquivo novamente.

Scenario: Sem capacidade para o download da música
Dado que eu estou na "página de busca"
Quando eu seleciono a música para baixar
E dado que não tenho memória suficiente
Então será mostrado uma mensagem de erro informando que não o dispositivo não suporta  o arquivo.

