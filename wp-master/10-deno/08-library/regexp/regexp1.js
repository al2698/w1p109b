var log=console.log;

var str = "name:john tel:02-3713567 email:john@abc.com age:38";
log(str.match(/name:([a-zA-Z]+)/));
log(str.match(/[0-9\-]{7,}/));
log(str.match(/[a-zA-Z0-9]+@[a-zA-Z0-9\.]+/));