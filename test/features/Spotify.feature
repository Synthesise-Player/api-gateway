@3
Feature: Spotify feature set
  As a <role>
  I can <do something>
  So that <I can get some value>
# TODO - Mocking for unit tests
Scenario: get OAuthToken
  Given the starter-service
  When I GET the endpoint "/api/v1/tracks?providers=spotify&q=peach+scone"
  Then I should get a 200 with a body of
  """
  Results: 2
  """
Scenario: Spotify get all tracks
  Given the starter-service
  When I GET the endpoint "/api/v1/tracks?providers=spotify&q=peach+scone"
  Then I should get a 200 with a body of
  """
  Results: 2
  """