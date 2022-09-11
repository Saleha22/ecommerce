## Ecommerce

## Table of contents

1. [Description](#description)
2. [Getting started](#getting-started)
3. [Postman](#postman)
4. [User story](#user-story)

## Description

This application creates an API which can show data on company products based on what is input into the route. You can view, update, add and delete; tags, products and categories in the system.

## Getting started

1. clone the repository
2. copy .env.EXAMPLE file and rename to .env and fill in the information
3. run `npm run run seed` in a new terminal
4. run `npm run run start` in the terminal

## Postman

[postman of E-commerce website](./src/assets/Week%2013%20HW.postman_collection.json)

## Link to video recording

[postman of E-commerce recording](https://drive.google.com/file/d/1hnVRgAQ0UVWnAfOQL1dq4J6Sk37b7pkM/view)

## User Story

```md
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete data in my database
```
