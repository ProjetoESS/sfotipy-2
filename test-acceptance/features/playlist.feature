Feature:  playlist
As a user
I want to acess the playlist section
So that I can create and manage my playlists

    Scenario: create playlist with music
        Given I am logged in with "lgar@cin.ufpe.br" and "123"
        And I am at the "criar_playlist" page
        When I insert the playlist name "pop" with the music "Yellow"
        And I create the playlist
        Then I can see a confirmation message "Playlist criada com sucesso"
        And I am redirected to the "minhas_playlists" page
        And I can see the "pop" playlist

    Scenario: create playlist without music
        Given I am logged in with "lgar@cin.ufpe.br" and "123"
        And I am at the "criar_playlist" page
        When I insert the playlist name "melhores"
        And I create the playlist
        Then I can see a confirmation message "Playlist criada com sucesso"
        And I am redirected to the "minhas_playlists" page
        And I can see the "melhores" playlist

    Scenario: create existent playlist
        Given I am logged in with "lgar@cin.ufpe.br" and "123" 
        And I am at the "criar_playlist" page
        When I insert the playlist name "pop" with the music "Yellow"
        And I create the playlist
        Then I can see an error message "Já existe uma playlist com esse nome"
        And I am still at the "criar_playlist" page 
            