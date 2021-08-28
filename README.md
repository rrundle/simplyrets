# Getting Started

- Please read the INSTRUCTIONS.md first
- For any questions around Create React App (CRA), reference
  CRA_DOCUMENTATION.md

# Code and Design Decisions

<!-- Please document your code & design decisions here. -->

## Getting Started

1. Clone the repo
`git clone https://github.com/rrundle/simplyrets.git`

2. Navigate into that directory
`cd simplyrets`

3. Install dependencies
`yarn install`

4. Run the app
`yarn start`

## Design decisions
1. Routing

  To display use of React Router I did not load the property list on the root route. There is a button (unstyled) that allows you
  to enter the app and see the router push to the next page (with more time would have liked to implement dynamic routing).

2. Loading State

  I consider it important to show the user a clean loading state when the app is working and fetching data. I feel like modern apps should have
  a modern loading state like Tombstone loaders that have been implemented here.

3. Abstraction

  As much as possible I tried to abstract modules into their own files for simple reuse. This included modules like fetching, helper and utils, components,
  caching functions, and pages.

4. CSS variables

  Used variables to provide theme-like styling. Change in one place, see it change in all consumers.

## What was left out due to time restraints

- Deployment - I would have liked to deploy this to Heroku or something but ran out of time
- Documentation (focused first on functionality, ran out of time to document too much)
- Unit Tests (focused first on functionality, ran out of time to due unit tests, but wouldn't commit this without adding them)

## THANKS FOR INVITING ME TO DO THIS, I HAD FUN!
