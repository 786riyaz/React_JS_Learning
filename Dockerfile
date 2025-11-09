# Use official Node.js image as base image
# FROM node
FROM node:21

# Set working directory inside container
WORKDIR /chatApp

# Copy all files from current directory to working directory in container
COPY . .

# Install dependencies
RUN npm install

# When we want to run the app
# RUN npm start

# Expose port 786 to the outside world
# EXPOSE 786

# When we want to create image without running the app
CMD ["npm", "start"]