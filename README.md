# fluz
Two goals have been accomplished with the submitted files.
#
First is setting up the schema for an user so that the user can be queried by its username on Graphiql (schema.js, app.js).
Querying a user by its username (username: "User1") returns the user's rank, relationship, and calorie intakes/spend.
A simple schema for friendlist with the listname and friend is created so that when you query for a friendlist (listname: "mylist"),
it returns the information of the user who is on that friendlist. Currently, all the data are hardcoded in the schema.js. 
#
Second goal is setting up the postgresql database, which is what postgres_server.js does. 
It pings the postgresql server which I created using pgadmin and returns the table with data in console.log. 
I wasn't able to connect the result from the database query to schema and graphiql, which is the reason why all the data are hardcoded in the schema.ja. 
#
Next steps would be establishing the datbase connection, which is a prerequisite for creating mutations of users and their properties and friendlists.
Then continue on with user mutations, then friendlist mutations, and finally the front-end interface for creating users and adding friends. 
