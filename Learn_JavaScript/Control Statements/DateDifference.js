/*
WAP to find the difference between 2 dates. e.g.
17-02-1996 (1st date)
07-03-1990 (2nd date)
10-11-5
Output:- 5 years 11 months 10 days
*/

date1 = "17-02-1996"
date2 = "07-03-1990"

date1_arr = date1.split("-")
date2_arr = date2.split("-")

date1_date = parseInt(date1_arr[0])
date1_month = parseInt(date1_arr[1])
date1_year = parseInt(date1_arr[2])

date2_date = parseInt(date2_arr[0])
date2_month = parseInt(date2_arr[1])
date2_year = parseInt(date2_arr[2])

if(date1_date >= date2_date){
    days = date1_date - date2_date
}else{
    date1_date+=30
    date1_month-=1
    days = date1_date - date2_date
}

if(date1_month >= date2_month){
    months = date1_month - date2_month
}else{
    date1_month+=12
    date1_year-=1
    months = date1_month - date2_month
}

if(date1_year >= date2_year){
    years = date1_year - date2_year
    console.log("The date difference is : "+years+" years "+months+" months "+days+" days")
}else{
    console.log("Sorry !! You have entered wrong input. Please try again !!")
}
