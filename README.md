# Online Farmer Education System

### Table of Contents
- [Online Farmer Education System](#online-farmer-education-system)
- [Functionality](#functionality)
- [Installtion](#installtion)
- [Environment Variable Structure](#environment-variable-structure)
- [How to run ?](#how-to-run-)

## Online Farmer Education System 

* **Online farmer education system** is useful for farmers. Farmers can take various information about various crops, new technologies, weather and they can post the doubt and can get solutions. Experts can write blogs on different topics and also can take informative sessions.

* This project uses the [MERN stack](https://www.mongodb.com/mern-stack) :
  * [**M**ongoose.js](http://www.mongoosejs.com) ([MongoDB](https://www.mongodb.com)) : database
  * [**E**xpress.js](http://expressjs.com) : backend framework
  * [**R**eact.js](https://reactjs.org/) : frontend framework
  * [**N**ode.js](https://nodejs.org) : runtime environment

* Other tools and technologies used :
  * [Bootstrap](http://www.getbootstrap.com) : layout and styles
  * [OpenWeather](https://openweathermap.org/guide) : Weather Information
 
## Functionality
  - Register, Login / Logout
  - Newsroom : News related new technology, Natural Event, government Schemes etc
  - Education Section : blog on various topic such as Agriculture, Horticulture, Forestry, seed, Live Stock, fisheries etc
  - Events : Farmar can get information related event 
  - weather information
  

## Installtion
- Install [Node.js](https://nodejs.org/en/), [ReactJs](https://reactjs.org/docs/getting-started.html), [MongoDB](https://www.mongodb.com/)
```python
# will download this repository locally
git clone https://github.com/fad1105/Online-Farmer-Education-System.git
(or manually download this project)
# will install all the dependencies for project
#go to ./backend
npm run install-dependecies
#go to ./online-farmer-eduction-system
npm run install-dependecies
```

## routes 
- Farmar : http://localhost:3000/
- Admin  : http://localhost:3000/admin/

## Environment Variable Structure
```python

MONGO_URL=*****

```

## How to run ?
```python
# start React server (frontend(online-farmer-eduction-system)) 
npm start
# start node.js server (backend)
nodemon index.js
```

<!-- ## Screenshots -->
<!-- - Screenshots are here :) -->
  <!-- ![Decoder](assets/screenshots/decoder.gif) -->
