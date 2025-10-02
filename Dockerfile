# 1. Use Node.js base image
FROM node:20-alpine

# 2. Set the working directory inside the container
WORKDIR /usr/src/app

# 3. Copy package.json + package-lock.json (for dependencies) and Prisma schema
COPY package*.json ./
COPY prisma ./prisma/

# 4. Install dependencies
RUN npm install

# 5. Generate Prisma client (ORM code based on your schema)
RUN npx prisma generate

# 6. Copy the rest of the backend source code
COPY . .

# 7. Build the NestJS application (compile TypeScript -> JavaScript)
RUN npm run build

# 8. Expose the port NestJS listens on
EXPOSE 3000

# 9. Command to run the app in production mode
CMD ["npm", "run", "start:prod"]

