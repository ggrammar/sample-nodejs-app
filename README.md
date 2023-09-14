# sample-node-app

This is a sample node.js application that I use as an example. 

I update this repo with documentation and examples as I learn more about node.js. 

# Build

`docker build . -t sample-nodejs-app`

# Run

We need to bind a port so that the webserver is accessible.

The hostname and port are set in `app.js`, but we could set them with an environment varible if we wanted to.

`docker run -p 3000:3000 sample-nodejs-app`

# Stop

For some reason, the Docker container isn't responding to Ctrl^C or Ctrl^D. I'm not sure yet why the container isn't responding to these signals.

Instead, to stop the container, run this command in a separate terminal window to forcefully stop the container.

`docker kill $(docker ps | grep sample-nodejs-app | cut -d" " -f1)`

