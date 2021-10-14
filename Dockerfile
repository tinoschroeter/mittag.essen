FROM node:16.11.1-bullseye-slim AS mittag
RUN apt-get  update && apt-get install --yes locales

WORKDIR /app

COPY server .
RUN npm install --only=production

CMD [ "node", "index.js" ]
