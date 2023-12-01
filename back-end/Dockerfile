
FROM node:18-alpine

# Set environment variables
ENV PORT=8080
ENV API_SECRET=This_is_very_secret_string
ENV MONGO_HOST=mongodb
ENV MONGO_PORT=27017
ENV MONGO_DB=usersdb

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose the app's port
EXPOSE $PORT

# Command to run your application
CMD ["node", "app.js"]
