# MyReads Project

This is solution for the final assessment project for Udacity's React Fundamentals course. The goal of the project is to implement a Book tracking app, where a user
can track what books they are reading, want to read and have read. It hooks up to 
an API provided by Udacity and changes persist between refreshes.

## To install and run

To:
* install all project dependencies: `npm install`
* start the development server: `npm start`

## Code structure
```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── App.css # Styles for your app. Feel free to customize this as you desire.
    ├── App.js # This is the root of your app. Contains static HTML right now.
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    |── AddBook.js # Search component - used for search page found at route /search
    |── Book.js # Book component - used to display book on shelves and in search
    |── Shelf.js # Shelf component - used to display each of the three shelves
    |── BookListing.js # Overall component for the main page at the / route
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles. You probably won't need to change anything here.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
```