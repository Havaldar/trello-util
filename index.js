var express     = require('express');
var chron       = require('node-schedule');
var Trello      = require('node-trello');

var app         = express();
var trello      = new Trello(process.env.TRELLO_KEY, process.env.TRELLO_TOKEN);
var rule        = new chron.RecurrenceRule();
rule.dayOfWeek  = [0, new chron.Range(0, 6)];
rule.hour       = 17;
rule.minute     = 15;

var archiveTask = chron.scheduleJob(rule, function() {
    t.post('/1/lists/' + process.env.LIST_ID + '/archiveAllCards', function(err, data) { console.log(data); });
});

app.use(function(req, res) { res.send("Yea still working!") })
app.listen(process.env.PORT || 8000)
