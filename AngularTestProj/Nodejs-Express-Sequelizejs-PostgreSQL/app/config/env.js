const env = {
  database: 'angular_users',
  username: 'postgres',
  password: '1329242214Ms',
  host: 'localhost',
  dialect: 'postgres',
  pool: {
	  max: 5,
	  min: 0,
	  acquire: 30000,
	  idle: 10000
  }
};

module.exports = env;