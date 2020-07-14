# Hire a hero

Just a simple React demo with Redux to manage state and Styled Components to style components :D

## Available scripts

- `start`: Start react-scripts development server
- `build`: Build this react app with react-scripts
- `eject`: As this project use react-scripts by create-react-app, you can eject in order to use webpack or other bundler

## Project Structure (from src)

To keep things simple, I chose not to create a router, so this project follows this structure:

- `/state`: State management
  - `/{domain}/actions.ts`: Redux actions for a domain
  - `/{domain}/asyncActions.ts`: Redux async actions for a domain
  - `/{domain}/reducers.ts`: Redux reducers for a domain
  - `/{domain}/types.ts`: Redux constantes and types for action creators and store
  - `store.ts`: Redux store configuration
  - `Provider.tsx`: Component with Redux with configured
- `/components`: All react components (follows some rules of [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/))
  - `/atoms`: Little dumb components
  - `/molecules`: Atom components combined to form simple components
  - `/organisms`: A bunch of molecules, here you can put some business logic (but not too much)
  - `/templates`: Reusable components that will be turned into pages
  - `/pages`: Instances of templates with others elements in order to deliver first class experience to the user :D
- `/common`: Environment variables and constants
- `/utils`: HTTP functions and other future useful functions
- `/i18n`: Internacionalization Component and i18n configurations

## This project uses translations, why?

As all this code is writen in english, I usually don't feel comfortable with portuguese and english at the same place, besides that, I think text should be sepatared from logic and layout of a aplication, that's why a spent some time with [react-i18next](https://react.i18next.com/) cofiguration :D

## Is redux really necessary?

Well, no, but just as a demo I used all power of redux state management to this simple app

## About my organization in this project

Just to be more organized, I created a simple Kanban board with my stories as Notion, you can check out my board here [here](https://bit.ly/2OmhpTd)

## That's all folks

![That's all folks](https://media.giphy.com/media/upg0i1m4DLe5q/giphy.gif)
