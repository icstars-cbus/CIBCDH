FROM node:10
EXPOSE 8000
# Change working directory


# Update packages and install dependency packages for services
RUN apt-get update \
 && apt-get dist-upgrade -y \
 && apt-get clean \
 && echo 'Finished installing dependencies'

# Copy package.json and package-lock.json
COPY package*.json ./

# Install npm production packages 
RUN npm install --production

COPY . /app

ENV NODE_ENV production
ENV PORT 8000



USER node

CMD ["npm", "start"]
