
# Social Network API

![license](https://img.shields.io/badge/License-MIT-blue)

## User Story

```
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```

## Acceptance Criteria
```
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
```

## Description

The purpose of this project was to build the back-end of a social network api. This was completed using MongoDb, Mongoose, Node, and express. The api provides the functionality of adding and deleting friends, adding and deleteing post, as well as adding and deleting reactions to a post.


## Table of Contents   
    
* [Installation](#Installation)
* [Usage](#Usage)

* [License](#License)
* [Contributing](#Contributing)
* [Questions](#Questions)


## Installation

Please follow the following steps in order to install this project:
1. Install Node.js
2. Clone this repository
3. Navigate to the root directory in the terminal
4. Install the required dependecies by typing the following into the terminal:
```
npm install
```
    
## Usage

To use this application, navigate to the root directory in the terminal and simply enter in:
```
npm start
```
This will start the server so you can start interacting with endpoints.

Click [HERE](https://drive.google.com/file/d/1_86YjGQXmu4gn3cF2LPZFWYBL10Nw31P/view) to view a walkthrough video of the api endpoints being tested.

## License

This project is licensed under MIT


## Contributing

Created by Mark Miller
    



## Questions 

Click on my username to be directed to my GitHub profile. [Mark-Miller78](https://github.com/Mark-Miller78)
    
If you have any questions about this project, please feel free to reach out via email at markmiller7858@gmail.com

