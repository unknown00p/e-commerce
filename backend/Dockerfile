# Use a Node.js image
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build TypeScript files (optional, if you're compiling TS to JS before running)
RUN npm run build

# Expose the application port
EXPOSE 4000

# Start the application
CMD ["npm", "run", "start"]
