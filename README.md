# Bike Search

Simple search app created as hobby project. Built with React/Redux/UIkit.

_App features:_

- Filter feature for categories / shops
- Sort results feature
- Endless scroll for results
- PHP + MySQL API Backend

[Demo](https://mikhailkarpov87.github.io/bikes-search/) (search data was collected & parsed from russian bike shops).

### Installation

- You should have [Node](https://nodejs.org/en/) installed
- Download or `git clone` this repository
- `npm install` to install dependencies
- `npm start` to start local dev server
- `npm run build` for production build

### Backend installation & integration

- You'll need hosting with PHP and MySQL for running backend API
- Create MySQL database and import sample db data and structure from `/backend/api/db_sample.sql`
- Update database connection config in `/backend/api/dbconfig.php`
- Set your API_URL in `/src/components/constants.js`

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
