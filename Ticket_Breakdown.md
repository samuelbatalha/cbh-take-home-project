# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

# Ticket 1.1: Handle Custom Agent's Ids for Facilities in Database
- Description: 
 - Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.
 - Create a new Database field to support one personalized 'id' for each Agent from the Facilities.

- Acceptance Criteria: 
 -  Facility is able to create custom ids for each of its Agents.

- Technical Grooming:
 - To generate a new custom id for each Agent per Facility, we should create a new column in database, for example: 'agent_facility_id' in table Agents.
 - If using mysql, the query should be something like: ALTER TABLE Agents ADD agent_facility_id INT;

 Estimated Time: 1h

 # Ticket 1.2: Allow Facilities to add a custom id for each of their Agents.
- Description: 
 - Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.
 - Create a funcionallity to allow Facilities to add a custom id for each of their Agents, and also edit the custom id if wanted/needed.

- Acceptance Criteria: 
 - Facilities should be able to personalize any custom id for each of its own Agents.

- Technical Grooming:
 - Create a function that select all the Agents of a Facility `getAgentsByFacility` and show in a paginated list;
 - Create a functional button that allows the Facility to edit any of its Agents in the list shown above;
 - Create a function `submitAgentsFacilityId` that checks in database if the id already exists before saving;

  Estimated Time: 1-3 days (if the screen and the paginated list needs to be created from scratch)

 # Ticket 1.3: Add to the Report the new custom id.
- Description: 
 - Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.
 - Edit the report to show the recently created id.

- Acceptance Criteria: 
 - Facilities should be able to generate a report and see the new custom id for each of your Agents.

- Technical Grooming:
 - Edit the function `generateReport` and add the new custom id to it;

 Estimated Time: 1h
