const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection');
const homeRoutes = require('./home-routes.js');
const dashboardRoutes = require('./dashboard-routes.js');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes);

// turn on routes
app.use(routes);

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
module.exports = router;
