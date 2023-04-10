Feature:  playlist
As a user
I want to acess the playlist section
So that I can create and manage my playlists

  #  Scenario: create playlist
   #     Given I am at the "minhas_playlists" page
    #    And I dont have any playlist registered as "pop"
    #    When I go to the "criar_playlist" page
    #    And I insert the playlist name "pop"
    #    And I insert the music "Yellow" 
    #    And I create the playlist
    #    Then I can see a confirmation message "Playlist criada com sucesso"
    #    And I return to the "minhas_playlists" page
    #    And I can see the playlist registered as "pop"

   # Scenario: create existent playlist 
    #    Given I am at the "minhas_playlists" page
    #    And I have a playlist registered as "pop"
    #    When I go to the "criar_playlist" page
    #    And I insert the playlist name "pop"
    #    And I insert the music "Yellow" 
    #    And I create the playlist
    #    Then I can see an error message "Já existe uma playlist com esse nome"
    #    Then I return to the "criar_playlist" page

   # Scenario: create playlist with no music
   #     Given I am at the "minhas_playlists" page
   #     And I dont have any playlist registered as "minhas preferidas"
   #     When I go to the "criar_playlist" page
   #     And insert the playlist name "minhas preferidas"
   #     And I create the playlist
    #    Then I can see a confirmation message "Playlist criada com sucesso"
     #   And I return to the "minhas_playlists" page
      #  And I can see the playlist registered as "minhas preferidas"
    
  #  Scenario: create playlist with bigger name than allowed
   #     Given I am at the "minhas_playlists" page
    #    And I dont have any playlist registered as "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
     #   When I go to the "criar_playlist" page
      #  And insert the playlist name "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
      #  And I insert the music "Yellow" 
      #  And I create the playlist
      #  Then I can see an error message "Nome da playlist não pode ser maior que 35 caracteres."
      #  Then I return to the "criar_playlist" page

    Scenario: update playlist musics
        Given I am at the "minhas_playlists" page
        And I see a playlist registered as "pop"
        When I go to the "pop" playlist page
        And I go to the add music option
        And I add the music "Thunder"
        Then I can see a confirmation message "Músicas atualizadas com sucesso!"
        And I return to the playlist page
        And I can see the music "Thunder" in the playlist page
   
    
