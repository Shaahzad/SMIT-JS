// Q1------------------

document.write("<h1>Q1</h1>")

var sum1 = 3;
var sum2 = 5;

var add = sum1+sum2;

document.write(add)
document.write("<hr>")



// Q2-----------------------------------

// SUBTRACTION----------------

document.write("<h1>Subtraction</h1>")

var sub1 = 6;
var sub2 = 6;

var minus = sub1-sub2;

document.write(minus)
document.write("<hr>")


// MULTIPLICATION-------------------------------------

document.write("<h1>Multiplication</h1>")


var mul1 = 60;
var mul2 = 60;

var mul = mul1+mul2;

document.write(mul)
document.write("<hr>")


// DIVISION-----------------------------

document.write("<h1>Division</h1>")



var div1 = 80;
var div2 = 4;

var div = div1/div2;

document.write(div)
document.write("<hr>")


// MODULUS--------------------------------

document.write("<h1>Modulus</h1>")


var mod1 = 80;
var mod2 = 2;

var mod = mod1/mod2;

document.write(mod)
document.write("<br>")
document.write("<br>")
document.write("<hr>")




// Q3-------------------------------------

document.write("<h1>Q3</h1>")


var amount;

document.write("value after variable declaration is:", amount);
document.write("<br>")



amount=5;

document.write("initial value:", amount);
document.write("<br>")



amount++;

document.write("value after increment is:", amount);
document.write("<br>")



 var add = amount+7;

document.write("value after addition is:", add);
document.write("<br>")


add--;

document.write("value after decrement is:", add);
document.write("<br>")



 var divide = add % 3 ;
document.write("the reminder is:", divide);
document.write("<br>")
document.write("<hr>")




// Q4---------------------------------------

document.write("<h1>Q4</h1>")



var ticketprice= 600;
var ticketbuying= 5;

var totalcost = ticketprice  *  ticketbuying;

document.write("total cost to buy 5 tickets to a movie is ", totalcost ,"PKR")
document.write("<hr>")


// Q6------------------------------

document.write("<h1>Q6</h1>")


var celsius = 25;
let ctof= (celsius * 9/5) +32;

 document.write(celsius,"&degC" , " is ", ctof, " &degF")
 document.write("<br>")


var farenheit = 70;
var ftoc= (farenheit -32) * 5/9;
document.write(farenheit,"&degF", " is", ftoc, "&degC")
document.write("<br>")
document.write("<hr>")


// Q7-------------------------------
document.write("<h1>Q7</h1>")

document.write("<h1>Shopping cart</h1>")
var priceitem1 = 40;
document.write("price of item 1 is ", priceitem1)
document.write("<br>")


var quantityofitem1 = 3;
document.write("quantity of item 1 is ", quantityofitem1)
document.write("<br>")



var priceitem2 = 60;
document.write("price of item 2 is ", priceitem2)
document.write("<br>")


var quantityofitem2 = 6;
document.write("quantity of item 2 is ", quantityofitem2)
document.write("<br>")


var shippingcharges = 200;
document.write("shipping charges ", shippingcharges)
document.write("<br>")

var totalcost = (priceitem1 * quantityofitem1) + (priceitem2*quantityofitem2) + shippingcharges;
document.write("<br>")

document.write("total cost of your order is ", totalcost)
document.write("<br>")
document.write("<br>")
document.write("<hr>")


// Q8--------------------

document.write("<h1>Q8</h1>")

var totalmarks = 980;
document.write("total marks: " , totalmarks)
document.write("<br>")

var markobtain = 804;
document.write("marks obtained: ", markobtain)
document.write("<br>")

var percentage = markobtain * 100 / totalmarks;

document.write("Percentage: ", percentage)
document.write("<hr>")

// Q9------------------------

document.write("<h1>Q9</h1>")

  document.write("<h1>Currency in PKR</h1>")

  var dollar =  10;
  var saudiriyal = 25;

  var pakcurrency = (dollar*104.80) + (saudiriyal*28);

  document.write("Total currency in pkr: ", pakcurrency)
  document.write("<hr>")


// Q10----------------------------

document.write("<h1>Q10</h1>")

var number = 10;

var calculation = number + 5 * 10 / 2;


document.write(calculation)
document.write("<hr>")



// Q11------------------------

document.write("<h1>Q11</h1>")

var currentyear = 2023;
document.write("current year: ", currentyear)
document.write("<br>")
var birthyear = 2001;
document.write("birthyear: ", birthyear)
document.write("<br>")

var totalage= currentyear-birthyear;

document.write("your age is: ",totalage)
document.write("<br>")
document.write("<br>")
document.write("<hr>")





// Q13---------------------------------

document.write("<h1>Q13</h1>")



var favouritesnacks= "chocolate chips";
document.write("favourite snacks: ", favouritesnacks)
document.write("<br>")

var currentage= 15;
document.write("current age: ", currentage)
document.write("<br>")

var maxage= 65;
document.write("max age: ", maxage)
document.write("<br>")

var amountofsnackperday= 3;
document.write("amount of snack perday ", amountofsnackperday)
document.write("<br>")

var totaleat= (maxage - currentage) * amountofsnackperday;

document.write("you will need " , totaleat," ", favouritesnacks," ", "to last you until the ripe old age of ", maxage)
document.write("<hr>")

// Q12---------------------

document.write("<h1>Q12</h1>")

var radius = 20;
document.write("radius of a circle is: ", radius)
document.write("<br>")


var pie = 3.142;
 var circumference = 2*pie*radius;
 document.write("the circumference is: ", circumference)
 document.write("<br>")

 

var area = pie*radius**2;
document.write("the area is: ", area)
document.write("<hr>")


// Q5------------------------
document.write("<h1>Q5</h1>")

var number = 4;

document.write(number, " * 1 = " , (number * 1))
document.write("<br>")
document.write(number, " * 2 = " , (number * 2))
document.write("<br>")
document.write(number, " * 3 = " , (number * 3))
document.write("<br>")
document.write(number, " * 4 = " , (number * 4))
document.write("<br>")
document.write(number, " * 5 = " , (number * 5))
document.write("<br>")
document.write(number, " * 6 = " , (number * 6))
document.write("<br>")
document.write(number, " * 7 = " , (number * 7))
document.write("<br>")
document.write(number, " * 8 = " , (number * 8))
document.write("<br>")
document.write(number, " * 9 = " , (number * 9))
document.write("<br>")
document.write(number, " * 10 = " , (number * 10))
