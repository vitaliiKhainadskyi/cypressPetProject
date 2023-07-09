FROM cypress/browsers:node16.16.0-chrome105-ff104-edge

WORKDIR /app
COPY package*.json .
COPY cypress cypress
COPY cypress.config.ts .
ADD . .

RUN npm install
RUN npm i cypress -D
RUN node_modules/.bin/cypress install

VOLUME /reports

CMD ["npm", "run", "test"]
