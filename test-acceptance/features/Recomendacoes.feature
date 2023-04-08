Feature: Recomendações

    As a user of the sfotipy
    I want to get playlist recommendations based on what I have been listening to
    so that I can listen to new songs close to what I like
    
    Scenario: Access the recommended playlist
        Given I'm on the page "Playlists Recomendadas"
        And a playlist "Melhores Pop" appears as recommended
        When I try to enter the playlist page "Melhores Pop"
        Then I'm on the playlist page "Melhores Pop"
    
    Scenario: View recommended playlist options    
        Given I'm on the page "Playlists Recomendadas"
        And a playlist "Melhores Pop" appears as recommended
        When I try to see the options of the playlist "Melhores Pop"
        Then I see next to the playlist "Melhores Pop" the options "Save", "Like", "Share"

    Scenario: Get link to recommended playlist
        Given I'm on the page "Playlists Recomendadas"
        And a playlist "Para Dormir" appears as recommended
        When I try to share the playlist "Para Dormir"
        Then the system shows a confirmation message that the link to the playlist "Para Dormir" has been copied