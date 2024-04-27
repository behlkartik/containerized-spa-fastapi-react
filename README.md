# Gameshop App

A simple 3 tier web app using ReactJS as frontend, FastAPI as backend and Mysql as database.

## Run the app

> docker compose up -d

## Stop the app

> docker compose down

The app will run on localhost:80 (ngnix default port where the react app is being served)

### Extras

You can edit the /etc/hosts file on your system to point this app to a custom domain as:

> sudo echo "127.0.0.1 app.gameshop.com" >> /etc/hosts

Now you can access the app from app.gameshop.com instead of localhost

![alt text](<Screenshot 2024-04-28 at 03.13.26.png>)
