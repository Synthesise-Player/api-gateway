# @3
# Feature: Soundcloud feature set
#   As a <role>
#   I can <do something>
#   So that <I can get some value>

# Scenario: Soundcloud get all tracks
#   Given the starter-service
#   When I GET the endpoint "/api/v1/tracks?providers=soundcloud&q=Petit+Reve+Bizarre+20+-+Played+By+Milana+-+Album+With+All+24+Pieces+On+ITunes+-+Follow+Us+On+Spotify"
#   Then I should get a 200 with a body of
#   """
#   Results: 2
#   """