# The first thing we need to do is define 
# from what image we want to build from
FROM node:16

# Create app directory 
# Next we create a directory
# to hold the application code inside the image, 
# this will be the working directory for your application:
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
# Note that, rather than copying the entire working directory, 
#we are only copying the package.json file. 
#This allows us to take advantage of cached Docker layers. 
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# To bundle your app's source code inside the Docker image, 
# Bundle app source
COPY . .


# build the app
RUN npm run build

# Your app binds to port 8080 so you'll use the EXPOSE 
# instruction to have it mapped by the docker daemon:
EXPOSE 8080


#Last but not least, define the command to run your app using 
#CMD which defines your runtime. Here we will use node dist/main to start your server:
CMD ["node", "dist/main"]