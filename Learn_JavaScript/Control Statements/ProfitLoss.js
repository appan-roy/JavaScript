/*
WAP to accept the cost price & the selling price of an article and calculate either profit
percent or loss percent.
*/

cost_price = 110, sell_price = 100

if(sell_price > cost_price){
    console.log("Profit occured in this trade")
    profit = sell_price - cost_price
    console.log("The profit is : Rs. "+profit)
    profit_percent = (profit * 100)/cost_price
    console.log("The profit percent is : "+profit_percent.toFixed(2)+"%")
}else if(sell_price < cost_price){
    console.log("Loss occured in this trade")
    loss = cost_price - sell_price
    console.log("The loss is : Rs. "+loss)
    loss_percent = (loss * 100)/cost_price
    console.log("The loss percent is : "+loss_percent.toFixed(2)+"%")
}else{
    console.log("No profit no loss occured in this trade")
}
