FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

EXPOSE 80

# Start development server
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0", "--port", "80"] 