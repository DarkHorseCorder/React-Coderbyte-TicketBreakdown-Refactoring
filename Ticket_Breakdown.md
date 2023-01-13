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

### Feature: Generate Report for Agent by custom Agent ID.

### Task 1: Adding custom Agent ID

- **Description**:
  Facility wants to save there own custom Agent ID stored for easy access to an Agent.

- **Acceptance Criteria**:
  Facility should be able to give their own custom ID for any Agent.

- Implementation Details:
  1. Added a table `FacilityAgents` with one to many relationship between Facility and Agents, having information like facilityId, agentId, customId.
  2. Create an API to add entry to this table.
- **Estimations**: 5hrs (1 story point)
  1. Implentation: 3hrs
  2. Testing: 2hrs

### Task 2: API to get shift given Agent ID

- **Description**:
  Create a method `getShifyByAgentId(agentID)` which will returning all Shifts worked that quarter for by that agent.

- **Acceptance Criteria**:
  Given any Agent Id, we should have all this shift information for that quater.

- **Implementation Details**:

  1. Create an API to `getShifyByAgentId` to lookup in Shifts table to sum all the shift information.

- **Estimations**: 5hrs (1 story point)
  1. Implentation: 3hrs
  2. Testing: 2hrs

### Task 3: API to generate report given custom Agent ID

- **Description**:
  Create a method `generateReportForAgentWithID(customAgentID)` which will generate report for that Agent for that quarter by summing up every Shift they worked.

- **Acceptance Criteria**:
  Facility should be able to give their own custom ID for any Agent for that quarter by summing up every Shift they worked.

- Implementation Details:

  1. For the given `customAgentID` find actual `agentID` using table `FacilityAgents`.
  2. call API `getShifyByAgentId(agentID)`.
  3. call `generateReport` function to give report in pdf format for the agent shift information.

- **Estimations**: 8hrs (1 story point)

  1. Implentation: 4hrs
  2. Testing: 4hrs

- **Dedendency**: Task1 and Task2
