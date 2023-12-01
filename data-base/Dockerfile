# Use the official MongoDB image as the base image
FROM mongo

# Set the working directory
WORKDIR /usr/src/app

# Create a directory to store MongoDB data
RUN mkdir -p /data/db

# Expose the MongoDB default port
EXPOSE 27017

# Start MongoDB
CMD ["mongod"]
