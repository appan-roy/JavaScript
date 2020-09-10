/*
A shopkeeper offers 30% discount on purchasing articles whereas the other shopkeeper offers two successive 
discount 20% & 10% for purchasing the same articles. WAP to compute and display which is better offer for a 
customer.
*/

marked_price = 1000

sell_price1 = marked_price * (1 - (30/100))
sell_price2 = marked_price * (1 - (20/100)) * (1 - (10/100))

if(sell_price1 < sell_price2){
    console.log("First offer is better")
}else if(sell_price1 > sell_price2){
    console.log("Second offer is better")
}else{
    console.log("Both the offer are same")
}
