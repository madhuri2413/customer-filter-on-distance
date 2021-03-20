# Distance Calculation between two points

This codebase gets the list of customers within given range from a reference point calculated based on latitude and logitude

## Installation

This repo uses npm as package manager

Simply run `npm install` to install all dependencies

## Run

There is a signle customer microservice in this project
To run customer microservice in development environment via a local node Server.

- Run Node - `npm run dev`.

The package.json file contains all run commands for reference purposes.

Navigating to this address in your browser
`http://localhost:3000/intercom/customers?rangeInKm=100`

OR
Make GET call from postman for below endpoint 
`http://localhost:3000/intercom/customers?rangeInKm=100`

rangeInKm is the queryParams to get the list of customers based on specific range.

## Testing
Running `npm run test` in the root of this project should run all the tests implemented
in the customer microservices.

## Output

In the root of the project there is `output.txt` file which has the list of all the customers within 100KM of range from
the GPS coordinates 53.339428, -6.257664
