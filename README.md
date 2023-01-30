# SneakerAPI
Combines several sneaker  releases dates, image, name from other sites into one api using playwright to web scrape

## Motivation 
I built this project to learn more about web scraping, while doing that this project turned into building an api from it and I just so happened to learn more about back end development.

## What I Learned
- How to use playwright
- handling package.json packages , removing and updating.
- playwright codegen is such an easy way to find selectors 
- send data to mongodb
- pull data from mongodb w/ client w/o mongoose
- uploading to heroku with build packs
- create an api

## Framework/Libraries used
 Built with 
- Playwright
- express
- mongodb

## How to use?

#### Check out live site at https://sneaker-api.vercel.app/
#### or 
#### so must clone the github

You will need [Node.js](https://nodejs.org) version 8.0 or greater installed on your system.
```
npm install
```
**need your own mongoDB API keys added, to use this project locally**

Run the development server.
```bash
node start
```
If you would like it to use your own database, you must change the uri in api.js
then you can call 
```bash
node scrape
```
to scrape and fill your db 

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
