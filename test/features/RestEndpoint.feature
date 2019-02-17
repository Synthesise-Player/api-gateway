@1
Feature: initial REST feature
  As a <role>
  I can <do something>
  So that <I can get some value>

Scenario: service fails helpfully
  Given the starter-service
  When I GET the endpoint "/api/v1"
  Then I should get a 200 with a body of
  """
  Hello Express!
  """