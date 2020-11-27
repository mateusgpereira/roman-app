# roman-app
> This app was created with NodeJS and TypeScript. Its goal was to solve the challenge of Roman Numerals Conversion.

<br>

## Requirements

- Docker & Compose

OR

- NVM with Node 12
- yarn 1.22.4

<br>

## Installation

First you need to clone the repo:

```bash
git clone https://github.com/mateusgpereira/roman-app.git
```

then:

```bash
cd roman-app
```

<br>

### with docker-compose

Just run the command, wait the build (this may take a while) and u r good to go

```bash
docker-compose up -d
```

<br>

### with nvm

If you don't have the requirements on your machine, you can run the following script to install:

```bash
chmod +x reqinstall.sh && ./reqinstall.sh
```
It will ask you for the root password.

After installed the system requirements, and reload your terminal, you must install the apps dependencies by running:

```bash
yarn
```

And finally, to execute the app you will run:

```bash
yarn dev
```

<br>

## Tests

If you used docker-compose, you can run the tests with the following command:

```bash
docker-compose exec web yarn test
```

If you used nvm on yout local machine, you will be able to run:
```bash
yarn test
```

<br>

## Usage

In the project root folder there are 2 files with the requests
that can be sent to the api:

```bash
insomnia_requests.json
postman_requests.json
```

One to be imported and used in the Insomnia, and the other for Postman.

Or you can send the requests in another way if you want.

The available endpoints are:

- POST /romans
requires: "decimalInput": 65 (int value)

- POST /decimals
requires: "romanInput": "L" (string value)

The app runs by default on the port 3000, so the complete URL
should be: http://localhost:3000/romans
or http://localhost:3000/decimals

<br>

## The Solution

The challenge was solved by using two arrays, one containing all the roman numerals, the other one with the decimals numerals equivalents to the romans.

To make the **decimal to roman** conversion:

I used a for loop to pass throug the romans entire array, from the greater to the minor,
checking if the current decimalIterator was bigger than the decimal equivalent to the current roman.
Then I decrement the decimal value from the decimalIterator and sum the roman to a string
that would form the roman numeral to return.


For the **roman to decimal** conversion:

I split the roman numeral to get an array with each character that compose the roman numeral.
Then I iterate over this array, checking if the current roman is bigger or equals to the next
roman, so it will be added to the decimal result. If it isn't, then it will be keeped in a prevRoman
variable to be used combined to the next roman numeral, in the next loop round.

*(I actually compared if the current array index was less then or equals because I organized the array from the bigger to the smaller value, but the logic behind the scenes was the one above)*
