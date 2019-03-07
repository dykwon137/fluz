
var pg = require('pg');
var conString = process.env.ELEPHANTSQL_URL || 'postgresql://postgres:password@localhost:5432/postgres';
var client = new pg.Client(conString);

client.connect(function(err) {
  if(err) {
    return console.error('could not connect to postgres', err);
  }
  client.query('SELECT * FROM public.user', function(err, result) {
    if(err) {
      return console.error('error running query', err);
    }
   console.log(result.rows);

    client.end();
  });
});
