var chron       = require('node-schedule');
var Trello      = require('node-trello');
var trello      = new Trello(process.env.TRELLO_KEY, process.env.TRELLO_TOKEN);
var rule        = new chron.RecurrenceRule();
rule.dayOfWeek  = [0, new chron.Range(0, 6)];
rule.hour       = 17;
rule.minute     = 15;
t.post('/1/lists/' + process.env.LIST_ID + '/archiveAllCards', function(err, data) { console.log(data); });

