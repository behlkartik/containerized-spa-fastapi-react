FROM nginx:1.21.0-alpine

COPY dist/ /usr/share/nginx/html

COPY nginx/ngnix.conf /etc/ngnix/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]