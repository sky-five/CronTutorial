var schedule = require('node-schedule');
var moment = require('moment');

// Node Method toexecute  after Every Ten Seconds 
var j = schedule.scheduleJob('*/10 * * * * *', function(){
  console.log('This Message will be displayed after Every 10 Seconds');
});

// Node Method toexecute  after Every Minute Seconds 
var rule = new schedule.RecurrenceRule();
rule.minute = new schedule.Range(0, 59, 1);
var j = schedule.scheduleJob(rule, function(){
    console.log('This Message will be displayed after Every 1 Minute');
});

// Node Method toexecute  after One Hour 
var j = schedule.scheduleJob('0 * * * *', function(){
    console.log('This Message will be displayed after Every Hour ');
  });

 // Node Method toexecute  after Two Hour 
var j = schedule.scheduleJob('1 * * * *', function(){
    console.log('This Message will be displayed after Every Two Hours ');
  });



  var date =  new Date();
  var newDateObj = moment(date).add(05, 'm').toDate();
  console.log("Current Date"+newDateObj);
  // var date = new Date(2019,0,30,02,40,0)

  schedule.scheduleJob(newDateObj, function(){
        console.log('Execute just Now'+newDateObj);
    });
