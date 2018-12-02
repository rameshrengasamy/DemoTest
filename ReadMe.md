Contains Demo Test framework with browser based tests with selenium and api tests with requestjs written in javascript (Supports ES6)

## Pre-Requisite:
- [Node.js](https://nodejs.org/en/)
- [Java JDK 8](https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html) or above

## Installation:
Clone or Download the repo and run
```bash
npm install
```

## Usage:
```bash
 npm test -- --user='' --pwd='' --apiToken=''
```

## CLI Arguments:
- **user**: Specifies the login user/email (**Required**)
  - **Usage :** `$npm test -- --user='test@example.com'`


- **pwd**: Specifies the password to login (**Required**)
  - **Usage :** `$npm test -- --pwd='password'`


- **apiToken**: Specifies the api access token (**Required**)
  - **Usage :** `$npm test -- --apiToken='abcded345'`
