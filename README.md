# Star Wars Universe

This website includes information about spaceships, pilots and films from Star Wars universe. Data is fetched (big Thanks!) from https://swapi.dev/ and images from https://starwars-visualguide.com/#/. Routes are protected from non authenticated users via react-router, for that purpose login sessions are stored in local storage.

#### Demo

![Star Wars clone website](./src/assets/starWars.gif)

#### Technologies

    - HTML5
    - CSS3
    - JavaScript
    - React ( useState, useEffect, useContext, useRef )
    - React router
    - Axios

#### How to start ?

```
$ npm install
$ npm start
```

#### User flow

- Register a valid name, password and email.
- Login and visualize spaceships list.
- Visualize each starship details and attributes.
- Logout and be redirected to home.
- Can't access starships unless is registered and logged.

#### Future developments

- Transfer input-output data flow between components from props to Context
- Create extra pages for render planets and actors data
