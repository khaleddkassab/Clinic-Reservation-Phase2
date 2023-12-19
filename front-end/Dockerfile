# First stage
FROM node:20.5.1 as build

RUN mkdir -p /app
WORKDIR /app

COPY package.json /app/
COPY . /app/
RUN npm install
RUN npm run build --prod

# Second stage
FROM nginx

# Set environment variables
ENV NGINX_HOST=foobar.com
ENV NGINX_PORT=4207

# Copy built files from the first stage
COPY --from=build /app/dist/front-end /usr/share/nginx/html

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
