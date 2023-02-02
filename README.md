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
<<<<<<< HEAD
- uploading to heroku with build packs
- create JSON api
=======
- hosting a serverless api on vercel
- create an api
>>>>>>> 879ff9cf918f95d701c9d7cd04dd11177bdfb04a

## Framework/Libraries used
 Built with 
- Playwright
- express
- mongodb

## Screenshots
![image](https://user-images.githubusercontent.com/23703863/215542839-7c90d3a1-2e36-4226-9a64-15d271202a28.png)



## How to use?

#### Check out live site at https://sneaker-api.vercel.app/
#### or 
#### so must clone the github

You will need [Node.js](https://nodejs.org) version 8.0 or greater installed on your system.
```
npm install
```
**need your own mongoDB API keys added, to use this project locally**


If you would like it to use your own database, you must change the uri in api.js
then you can call 
```bash
node scrape
```

```bash
node start
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
