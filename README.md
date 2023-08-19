
![RESYANA CAHYANITA](https://github.com/RevoU-FSSE-2/week-9-resyanac/assets/135514670/f0e13b54-7cb5-49d6-a425-4cd47b3bccd8)

# INTRODUCTION

Hello, Resya here! 23 years old girl in +8 GMT (East Borneo) timezone. I am a Tax Collector and software engineer. The 9th assignment are assigned to a simple API server about mbanking app. 


# Simple Mobile Banking App API

the Simple Mobile Banking App API allows users to retrieve, create, update, and delete transactions in their account. The API is designed to interact with a MySQL database using DBeaver and is built using Node.js.

## Prerequisites

- [Node.js](https://nodejs.org/) .
- [DBeaver](https://dbeaver.io/).
- MySQL database configured and running.
- Basic knowledge of RESTful APIs and SQL.


## API Endpoints

### Get User's Total Balance

- **Endpoint**: `GET /user/:userId`
- **Description**: Retrieve the total balance of a user by summing up their income and subtracting their expenses.
- **Parameters**:
  - `userId` (integer): The ID of the user for whom you want to retrieve the balance.

### Get All Transactions for a User

- **Endpoint**: `GET transactions/:userId`
- **Description**: Retrieve all transactions for a specific user.
- **Parameters**:
  - `userId` (integer): The ID of the user for whom you want to retrieve transactions.

### Create a New Transaction

- **Endpoint**: `POST /transaction/:id`
- **Description**: Create a new transaction for a user. 


### Delete a Transaction

- **Endpoint**: `DELETE //transaction/:id`
- **Description**: Delete an existing transaction by its ID.

## Usage Examples

Here are some usage examples of the API:

- To retrieve the all users:
![Screen Shot 2023-08-19 at 03 51 46](https://github.com/RevoU-FSSE-2/week-9-resyanac/assets/135514670/ced79a5d-9dfa-4a20-9acd-d2389adea34b)


- To retrieve the total balance of a user:
![Screen Shot 2023-08-19 at 03 51 40](https://github.com/RevoU-FSSE-2/week-9-resyanac/assets/135514670/038beced-c1dd-47dd-a495-f71871db92b8)



- To retrieve all transactions :
![Screen Shot 2023-08-19 at 03 51 30](https://github.com/RevoU-FSSE-2/week-9-resyanac/assets/135514670/fe58f729-7aea-460b-8f90-f0e0236991f4)

- To create a new transaction:
![Screen Shot 2023-08-19 at 03 51 35](https://github.com/RevoU-FSSE-2/week-9-resyanac/assets/135514670/8b8de431-8ad3-4601-920a-96263084e109)


- To update a transaction:
![Screen Shot 2023-08-19 at 03 51 23](https://github.com/RevoU-FSSE-2/week-9-resyanac/assets/135514670/fbca97c9-fd77-469d-983e-8cebaaa571ce)


- To delete a transaction:
![Screen Shot 2023-08-19 at 03 11 35](https://github.com/RevoU-FSSE-2/week-9-resyanac/assets/135514670/3bdec927-36a3-4423-8851-1d00d9210975)


## Deployment
i deployed this using 


## Conclusion

This Simple Mobile Banking App API provides basic functionality for managing user accounts and transactions. You can use the provided endpoints to retrieve account balances, view expenses, create new transactions, update existing transactions, and delete transactions. Make sure to secure your API endpoints and implement proper authentication and authorization mechanisms in a production environment.
