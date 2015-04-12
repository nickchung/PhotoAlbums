
require('dotenv').load();

module.exports = {
	applicationPort 	: 3000,
	database 					:
	{
		// host					: 'localhost',
		// //port 					: 8889,
		// port 					: 3306,
  	// database 				: 'photoalbums',
		// user     				: 'root',
 	// 	password 				: 'Mvcapp1!'
		host					: process.env.DB_HOST,
		port 					: process.env.DB_PORT,
		database 			: process.env.DB_NAME,
		user     			: process.env.DB_USER,
		password 			: process.env.DB_PASS

	}
}
