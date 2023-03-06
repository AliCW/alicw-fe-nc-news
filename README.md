# NC News Frontend

This repository serves as the frontend for the NC News API. Users are able to view articles & refining their searches by topics, votes, comment numbers, date, etc. Comments can also be added to selected articles.

This is a work in progress, CSS & layout features require much refining. User login functionality needs to be implemented with the abilitiy to post new articles.

## Hosted Application

The default application is hosted at the below link

    https://alicwncnews.netlify.app/

## API server

The frontend relies on the the NC News API found at the below link

    https://github.com/AliCW/AliCW-be-NC-news

## How To Setup

1. Clone the repository by entering the below in the command shell.

        git clone https://github.com/AliCW/alicw-fe-nc-news.git


2. Navigate to the cloned repository with the following command

        cd alicw-fe-nc-news/       

3. Enter the below command to install the required packages for the program to run.

        npm install


## Testing Functionality

There are numerous tests for the utility functions setup in the below folder, these use jest & jest-sorted to resolve.

    utilities/__tests__/

To run the tests themselves, enter the below command in the root directory

    npm test
