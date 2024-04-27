FROM node:21-alpine as build

WORKDIR /app/gameshop

COPY package*.json .

RUN npm install

COPY . .

RUN npm run build

FROM nginx:alpine

COPY --from=build /app/gameshop/dist /usr/share/nginx/html/

COPY nginx/ngnix.conf /etc/ngnix/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]