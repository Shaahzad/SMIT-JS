
// Q1============================

// var cityname = prompt("enter your city")



// if (cityname == "karachi") {
//     document.write("welcome to the city of lights")
// }
// else{
//     document.write("!!!!!!!!!!!!!!!")
// }

// Q2==============


// var gender = prompt("enter your gender")


// if (gender == "male" ) {
//     document.write("goog morning sir")
// }else if (gender == "female") {
//     document.write("goog morning mam")

// }else{
//     document.write("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
// }



// Q3====================



// var trafficlightcolor = prompt("enter traffic color name")


// if (trafficlightcolor == "red"){
//     document.write("must stop")
// }else if (trafficlightcolor == "yellow") {
//         document.write("ready to move")
// }else if (trafficlightcolor == "green"){
//     document.write("move now")
// }else{
//     document.write("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
// }


// Q4========================

// var currentfuel = prompt("remaining fuel in car")

// if (currentfuel < +0.25) {
// document.write("Please Refill Fuel In Your Car")    
// }else{
//     document.write("Fuel Is Full")
// }


// Q5==============

// var a = 4
// if (++a === 5){
//     alert(a)
// }

// var b = 82;
// if (b++ === 83){
//     alert("given condition for variable b is false")
// }

// var c = 12;

// if (c++ === 13){
//     alert("condition 1 is true")
// }
// if (c === 13){
//     alert("condition 2 is true")
// }
// if (++c < 14 ){
//     alert("condition 3 is true")
// }
// if (c === 14 ){
//     alert("condition 4 is true")
// }

// var materialcost = 20000;
// var laborcost = 2000;
// var totalcost = materialcost+laborcost;
// if (totalcost === laborcost + materialcost) {
//     alert("the cost is equal") 
// }


// if (true) {
//     alert("True")
    
// }
// if (false) {
//     alert("False")
// }


// if ("car" < "cat") {
//     alert("car is smaller than cat")
// }

// Q6=================

// var totalmarks1 = 100;
// var totalmarks2 = 100;
// var totalmarks3 = 100;

// var totalmarksall = totalmarks1+totalmarks2+totalmarks3

// document.write("total marks ",totalmarksall)
// document.write("<br>")

// var obtain1 = prompt("enter your marks")
// var obtain2 = prompt("enter your marks")
// var obtain3 = prompt("enter your marks")

// var totalobtain = (+obtain1) + (+obtain2) + (+obtain3)

// document.write("marks obtain :", totalobtain)
// document.write("<br>")

// var percentage = totalobtain/300*100
// document.write("percentage :", percentage , "%")
// document.write("<br>")
 
// if (percentage >= 80){
//     document.write("grade : A-one")
//     document.write("<br>")
//     document.write("remarks : Excellent")
// }
// else if(percentage >= 70 ){
//     document.write("grade : A")
//     document.write("<br>")
//     document.write("remarks : good")
// }
// else if(percentage >= 60 ){
//     document.write("grade : B")
//     document.write("<br>")
//     document.write("remarks : you need to improve")
// }
// else if(percentage < 60 ){
//     document.write("grade : Fail !")
//     document.write("<br>")
//     document.write("remarks : sorry")
// }


// Q7=====================
// var Secretnumber = 5;
// var Guessnumber = +prompt("enter secret number (ranging 1 to 10)")

// if (Secretnumber === Guessnumber){
//     document.write("Bingo! Correct Answer")
// }else if (++Secretnumber === Guessnumber){
//     document.write("Close Enough To The Correct Answer")
// }else{
//     document.write("Wrong!")
// }

// Q8=================
// var GivenNumber = +prompt("enter the number")

// if (GivenNumber % 3 === 0){
//     document.write("The Number Is Divisible By 3")
// }else{
//     document.write("Number Is Not Divisible By 3")
// }

// Q9==================
// var Input = prompt("Enter Even Or Odd Number")

// if (Input % 2 === 0){
//     document.write("Even number")
// }else{
//     document.write("Odd Number")
// }

// Q10====================
// var Temperature = prompt("Enter Temperature")

// if (Temperature > 40){
//     document.write("It Is Too Hot Outside")
// }else if (Temperature > 30){
//     document.write("The Weather Today Is Normal")
// }else if (Temperature > 20){
//     document.write("Today's Weather Is Cool")
// }else if (Temperature > 10){
//     document.write("OMG! Today's Weather Is So Cool")
// }else if (Temperature < 10){
//     document.write("SHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHh")
// }
// else{
//     document.write("Enter Only Temperature")
// }

// Q11=======================

// var FirstNumber = +prompt("Enter First Number")
// var SecondNumber = +prompt("Enter Second Number")
// var Operator = prompt("Enter Operator +,-,*,/ & %")

// if (Operator === "+"){
// var Result = FirstNumber + SecondNumber;
//  document.write("Result ", Result)
// }else if (Operator === "-"){
//     Result = FirstNumber - SecondNumber;
//     document.write("Result ", Result)
// }else if (Operator === "*"){
//     Result = FirstNumber * SecondNumber;
//     document.write("Result ", Result)
// }else if (Operator === "/"){
//     Result = FirstNumber / SecondNumber;
//     document.write("Result ", Result)
// }else if (Operator === "%"){
//     Result = FirstNumber % SecondNumber;
//     document.write("Result ", Result)
// }else{
//     document.write("No Result")
// }