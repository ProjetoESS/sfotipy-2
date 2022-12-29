Feature: Recomendações
    As a user of the stotipy
    I want to get playlist recommendations based on what i have been listening to
    so that I can listen to new songs close to what i like
    
    Scenario: Access the recommended playlist
        Given that I am logged with the user "mlv" and password "12345" 
        And I'm on the page "Playlists Recomendadas"
        And a playlist “Pop Music” appears as recommended
        When I try to enter the playlist page “Pop Music”.
        Then I'm on the playlist page "Pop Music"
    
    Scenario: View recommended playlist options    
        Given that I am logged with the user "mlv" and password "12345" 
        And I'm on the page "Playlists Recomendadas"
        And a playlist “Pop Music” appears as recommended
        When I try to see the options of the playlist “Pop Music”
        Then I see next to the playlist “Pop Music” the options "Save", "Like", "Share".

    Scenario: Add a recommended playlist to the user's playlist  
        Given that I am logged with the user "mlv" and password "12345" 
        And I'm on the page "Playlists Recomendadas"
        And a playlist “Pop Music” appears as recommended
        When I try to save the palylist “Pop Music”
        Then the system has the playlist "Pop Music" saved in my playlists
        And the system shows a saved playlist confirmation message

    Scenario: Play playlist whitout going to her page  
        Given that I am logged with the user "mlv" and password "12345" 
        And I'm on the page "Playlists Recomendadas"
        And a playlist “Pop Music” appears as recommended
        And I leave the mouse on top of the playlist "Pop Music"
        When i give play on the playlist “Pop Music”
        Then the playlist "Pop Music" starts playing
        And I'm still on the page "Playlists Recomendadas"
