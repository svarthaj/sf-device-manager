# Device Manager Webtool

The Device Manager is a simple interface for managing smart devices, databases and servers in real Smart Factories models. This module is part of a bigger project about managing and modeling custom Smart Factory scenarios.  

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

This project is developed using Angular (*not AngularJS*) and follows the Angular file system. Since Angular is based on Node.js, we use NPM for package managing.  To install Node and its package manager run

```
curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
sudo apt-get install -y nodejs
```

To get it up and running you need to install the following dependencies using NPM.

```
sudo npm install -g @angular/cli @angular-devkit/build-angular @angular/core
```

The last step is to set the MongoDB Replica Set used for data storage. First you need to install MongoDB. On Ubuntu, the best option is to install the package maintained by MongoDB Inc. itself. This can be easily done following their [tutorial page](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/). After all is done, you need to create the directories for your DB. On Ubuntu running
```
sudo mkdir -p /data/db /data/log
```

Finally you can deploy the database with
```
sudo mongod --replSet rs0
```

### Installing

There is no installation. To get the server running you must first deploy the MongoDB as mentioned before and then run the command below inside the project main directory

```
npm run build
```

## Built With

* [Angular](https://angular.io/) - Front-end Framework
* [Express](https://expressjs.com/) - Web Framework for JS
* [NODE.js](https://nodejs.org/en/) - JS Framework
* [MongoDB](https://www.mongodb.com/) - Object Database

## Authors

* **Mathias Mormul** - *Project Leader* - [Mormulms](https://github.com/mormulms)
* **Lucas Leal** - *Initial work* - [Svarthaj](https://github.com/Svarthaj)
