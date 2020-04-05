# Open School System

## Inspiration

We first had a look at the moodle eLearning system most of us already knew from their school time. By side of looking at existing solutions did we have the opportunity to get direct feedback from a teacher. Combined with our knowledge and the one from our mentor did we create the current concept.

## What it does

It gives teachers the possibility to create learning materials, exercises, assignments, and whole lessons. Each student does get added to the lessons he has to attend and can see them in the intuitive timeline on his dashboard. The parents do have the possibility in the same time to watch the latest statistics about their children, to request a call/meeting with the teacher, and they are able to see what is planned next in the calendar for each child.

All the above-mentioned functionalities with the related code are MIT licensed and free to use. The goal would be to provide an open permissionless system for anyone and if possible free of charge. This project could get developed without any full time hires and could get transitioned into a real OpenSourceSoftware project with the required funding for the servers.

## How I built it

We mostly focused on the client-side of the project and do currently use the Google Cloud. Behind the scene are a no-sql database and a simple authentication service. The whole project is written in JavaScript to be able to run it on close to every known device. Because of the clear abstraction from the client to the backend we have. We are able to move the current existing services to self-hosted swiss servers with ease. 

Techstack:

- React & Mobx
- MongoDB
- OAuth2
- JavaScript 

## Challenges I ran into

We first have planned to set up the complete backend on our own with Go, Docker, and CockroachDB but had to stop this because of the limited time and manpower we had. We then created quickly the services we need on the Google Cloud and started to connect the backend services with the browser-based client.

## Accomplishments that I'm proud of

We achieved in a really small amount of time a nice looking UI, working backend, and had the possibility to use some great new browser APIs. We think we can be proud of the current UX/UI and management logic we have created in such a short amount of time.

## What I learned

We learned this hackathon that we probably first should start with the UI of our project and stub data and to slowly integrate the backend instead of putting so many hours on the backend. Those hours are better spent on the UI/UX of our hackathon project.

## What's next for Open Education Server

- Setting up of Switzerland based servers
- Finalizing of existing features
- Asking for feedback from teachers, students, and parents.
- Creating of the demo v0.1
- Defining of the final concept for 1.0 and implementing it.
- Advertise it for schools and teachers.

## Contributions

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
