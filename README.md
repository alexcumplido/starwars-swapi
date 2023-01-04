# SWAPI - Star Wars Api

Check the [deployed project here](https://starwars-swapi.vercel.app/). This website displays information about the Star Wars universe, including spaceships, films, and pilots. Data is fetched from https://swapi.dev/ and https://starwars-visualguide.com/#/ APIs. Routes are protected from non-authenticated users via react-router, storing sessions in local storage for that purpose.

## User flow 🎯

- Register a valid name, password and email.
- Login and visualize spaceships data.
- Visualize each starship details and attributes.
- Logout and be redirected to home.
- Can't access starships unless is registered and logged.

## Installation ⚙️

Clone this repository into a newly created directory

```shell
    # Clone repo
    $ git clone git@github.com:alexcumplido/starwars-swapi.git
```

```shell
    # Install dependencies
    npm install
    yarn install
```

```shell
    # Run project
    npm run dev
    yarn dev
```

## Stack ⚒️

- HTML5
- CSS3
- JavaScript
- React ( useState, useEffect, useContext, useRef )
- React router
- Axios
- Browser local storage

## Visuals 👀

![Star Wars clone website](./src/assets/starWars.gif)

## Roadmap

- Transfer input-output data flow between components from props to context
- Migrate from CSS to Sass
- Create an extra view rendering data about planets

## Contributing 🙌

1. Fork the repo
2. Create a new branch
3. Implement changes
4. Commit and subit a pull request with a description

## Contact info 📫

Alexandre Cumplido Bou

[Linkedin](https://www.linkedin.com/in/alexandrecb/)

[Portfolio](https://alexcumplido.github.io/portfolio/)

## Acknowledgements 🙏

[Josh Comeau custom CSS reset](https://www.joshwcomeau.com/css/custom-css-reset/)

[Brian Holt eslint configuration](https://github.com/btholt/citr-v8-project/blob/main/03-jsx/.eslintrc.json)

## License 📃

[MIT License](https://opensource.org/licenses/MIT)
