<h1 align="center">
  <img src="./github_files/todolist.png alt=To Do List" width="700">
<br>
To Do List
</h1>

<p align="center"> 🚀 A simple To Do List application with create, edit and check items.
<p align="center">
  <a href="https://opensource.org/licenses/MIT">
    <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License MIT">
  </a>
</p>

## Features

- ⚛️ **React Js** — Javascript lib to create de interfaces.
- 💹 **Node Js** — Web framework to use Javascript on both the frontend and backend

## Getting started

### Backend
Download the project. Use MongoDB and create the **.env** file to configure the string connection with `User:Password` on the MONGO_URL property.  
```bash
MONGO_URL: string connection
```
To install the dependencies and run **server** (development mode) execute:
```bash
yarn install
yarn dev
```

### Frontend
To start **Frontend** using React use the commands:
```bash
yarn install
yarn start
```
Once the process is finished, the `localhost: 3000` page will automatically open in your browser with the developed application

### Insomnia 
To test the To Do List API, download and install [Insomnia] (https://insomnia.rest/download/) and then click on Workspace → `Import / Export` →` Import Data` → `From File` → and select the `Insomnia.json` file from this repository.

## How to contribute
- First leave a ⭐!
- Fork the repositories in production as they are updated: <a href="https://github.com/guilhermeorcezi/todolist"> MonoRepo </a>;
- Create a branch with your feature: `git checkout -b my-feature`;
- Commit your changes: `git commit -m 'feat: My new feature'`;
- Push to your branch: `git push origin my-feature`.

## License

This project is licensed by MIT License - Go to the [licence page](https://opensource.org/licenses/MIT) to see more details.
