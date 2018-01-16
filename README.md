# Gifhub

Gifhub is a simple, personalized app to help manage, integrate, and discover your favorite GIFs. This app utlizes microservices architecture - featuring an Angular2 client-facing UI and a Ruby on Rails backend.

## Features

+ User authentication
    + Devise Token Auth: token based authentication system for Rails
    + Angular2-Token: token based authentication system for Angular
+ Powered by [GIPHYDevelopers](https://developers.giphy.com/docs/) API and GIPHY's GIF library
    + Search endpoint - search all GIFs for a word/phrase
    + Trending endpoint - searches currently trending GIFs online
    + Random endpoint - used to 
+ Pagination - users can view search results in a paginated fashion
+ Advanced pagination - users can select a per-page amount of GIFs
+ User favorites - users can add GIFs to their list of favorites
+ Links - users can copy media links, GIF page links, and embedded links to clipboard

## Dependencies

+ npm -v 5.5.1
+ [Angular CLI](https://github.com/angular/angular-cli) -v 1.5.5
+ Ruby -v 2.4.0
+ Rails -v 5.1.4
+ PostgreSQL