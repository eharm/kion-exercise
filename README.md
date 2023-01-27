# kion-exercise

This repo will contain all of the tests given for the automation testing assessment.

# Premise

Navigate to https://www.expedia.com/ and write test scripts for at least the following 4 test cases

# Test Cases

1) On the Stays tab, search for the Universal Orlando Resort and select the first option from the drop-down. Check-in for a week from the current date and Check-out being a week from that, and Search the options.

2) On the next page, search within the Travelers Dropdown, select two adults and two children, and then set the children’s ages to 8 and 10. Assert that the submission was successful.

3) From the Expedia Homepage, click on Flights, confirm Roundtrip is selected by default, and confirm the following labels exist: Leaving from, Going to, Departing, and Returning. Also, please click the Economy dropdown, select First class, and make sure the dropdown is updated to First class.

4) Next, click One-way and validate that Returning date field no longer appears. If you click Roundtrip again, the Returning date field should be visible.

5) Write a for loop that clicks on each of the following tabs ( Stays, Flights, Cars, Packages, Things to do, and Cruises) and validate that the Search button appears after clicking the tab.

# Running Cypress

headed mode - "npm run test"

headless mode - "npm run e2e"