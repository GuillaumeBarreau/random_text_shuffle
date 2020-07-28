This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

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

# Build and start your React environment with single command:

Just run:

* $ docker-compose up

And wait until you see the following in the console:

* To gracefully stop undetached run just press CTRL+C

# Test your React Installation:

* Check your code at src/ 
* Open http://localhost:3001
* Dance!

# Docker-compose basic handling:

Run in detached mode:

* $ docker-compose up -d

In detached mode, you won't have direct output from the container, so you'll have to check the container logs to see if the build ended (find the above "Compiled successfully" message):

* $ docker-compose logs

Stop a detached mode run:

* $ docker-compose down

Run commands into your container without going into, from your host machine:

* $ docker-compose exec {container-id} mycommand

Enter into your container to run commands inside it (ssh-like):

* $ docker-compose exec {container-id} bash

Exit your container, and go back to your host machine:

* $ exit

For advanced usage, follow the docker-compose command-line reference:

https://docs.docker.com/compose/reference/
