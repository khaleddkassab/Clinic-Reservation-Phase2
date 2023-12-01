#!/bin/bash

# Create Docker network
docker network create network

# Build and run MongoDB container
cd ./data-base/
docker build --tag data-base .
docker run -d -p 27017:27017 --name mongodb --network network data-base
cd ..

# Build and run Back-end container
cd ./back-end/
docker build --tag back-end .
docker run -d -p 8080:8080 --name back-end -e MONGO_DB=mongodb://mongodb/usersdb --network network back-end
cd ..

# Build and run Front-end container
cd ./front-end/
docker build --tag front-end .
docker run -d -p 4200:80 --name front-end --network network front-end
cd ..


icacls setup_clinicRes.sh /grant:r "%USERNAME%:RX"
