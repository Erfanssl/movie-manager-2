FROM node:alpine

WORKDIR '/app'

COPY package.json package-lock*.json ./

RUN npm install && npm cache clean --force

COPY . .

RUN npm run build

WORKDIR '/app/server'

CMD ["node", "server.cjs"]
