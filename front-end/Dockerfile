FROM node:20.5.1 as build

RUN mkdir -p /app

WORKDIR /app

COPY package.json /app/


COPY . /app/

RUN npm install

RUN npm run build --prod


# second stage

FROM nginx:alpine
ARG BACKEND_API_URI
ENV BACKEND_API_URI=$BACKEND_API_URI
COPY --from=build /app/dist/front-end  /usr/share/nginx/html
