# Use Node.js as the base image
FROM node:18-alpine AS builder

# Set the working directory
WORKDIR /pbg

# Copy package.json and package-lock.json first for better caching
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Next.js application
RUN npm run build

# Production image
FROM node:18-alpine

# Set the working directory
WORKDIR /pbg

# Copy only the necessary files from the builder
COPY --from=builder /pbg/.next /pbg/.next
COPY --from=builder /pbg/public /pbg/public
COPY --from=builder /pbg/package.json /pbg/package.json
COPY --from=builder /pbg/node_modules /pbg/node_modules

# Expose the port the app runs on
EXPOSE 3000

# Start the Next.js application in production mode
CMD ["npm", "start"]
