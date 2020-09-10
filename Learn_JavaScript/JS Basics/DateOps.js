/************************************* Date Operations ******************************************/

//The getDate() method returns the day of the month (from 1 to 31) for the specified date
d = new Date("September 13, 2020 19:26:05")
console.log(d.getDate())        //13

//The getDay() method returns the day of the week (from 0 to 6) for the specified date
console.log(d.getDay())         //0 - means sunday

//The getFullYear() method returns the year (four digits for dates between year 1000 and 9999) 
//of the specified date
console.log(d.getFullYear())    //2020

//The getHours() method returns the hour (from 0 to 23) of the specified date and time
console.log(d.getHours())       //19

//The getMilliseconds() method returns the milliseconds (from 0 to 999) of the specified date and time
console.log(d.getMilliseconds())    //0

//The getMinutes() method returns the minutes (from 0 to 59) of the specified date and time
console.log(d.getMinutes())     //26

//The getMonth() method returns the month (from 0 to 11) for the specified date, according to local time
console.log(d.getMonth())       //8

//The getSeconds() method returns the seconds (from 0 to 59) of the specified date and time
console.log(d.getSeconds())     //5

//The getTime() method returns the number of milliseconds between midnight of Jan 1, 1970 and the specified date
console.log(d.getTime())        //1600005365000

//The getTimezoneOffset() method returns the time difference between UTC time and local time, in minutes.
//For example, If your time zone is GMT+2, -120 will be returned.
console.log(d.getTimezoneOffset())  //-330

//The Date.now() method returns the number of milliseconds since January 1, 1970 00:00:00 UTC
console.log(Date.now())     //1598971692793

//The parse() method parses a date string and returns the number of milliseconds between the date string 
//and midnight of January 1, 1970
console.log(Date.parse("September 01, 2020"))   //1598898600000

