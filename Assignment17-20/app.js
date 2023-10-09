// Q1

// var arr = []
//     arr = [0],
//     arr = [1],
//     arr = [2],
//     document.write(arr.length)


// Q2

// var matrix = [
//     [0, 1, 2, 3, "<br>"]+
//     [1,0,1,2, "<br>"]+
//     [2,1,0,1]
// ]
// document.write(matrix)
// document.write("<br>")
// document.write("<br>")


// Q3

// for (let i = 1; i <=10 ; i++) {
// document.write(i + "<br>")
// }
// document.write("<br>")
// document.write("<br>")





// Q4


// var Tableiwant = prompt("enter Any table number")
// var Table = prompt("enter table length")

// for (let i = 1; i <= Table; i++){
    
//     document.write(Tableiwant + " * " +  i + " = " + Tableiwant * i  + "<br>")

// }


// Q5

// var fruit = ["apple","banana","mango","orange","strawberry"]
// document.write(fruit)
// document.write("<br>")
// document.write("<br>")


// for (let i = 0; i < fruit.length; i++){
//     document.write("element at index " + i + " is " + fruit[i] + "<br>")
// }
// document.write("<br>")
// document.write("<br>")

// Q6 

// a // counting

// for (let i = 1; i <=15 ; i++) {
//     document.write(i + " ")
//     }
//     document.write("<br>")
//     document.write("<br>")

    // b reverse counting

    // for (let i = 10; i >=1 ; i--) {
    //     document.write(i + " ")
    //     }
    // document.write("<br>")
    // document.write("<br>")

    // c even number

    // for (let i = 0; i <=20 ; i++) {
    //     if(i % 2 == 0){
    //         document.write(i + " ")
    //     }
    // }
    // document.write("<br>")
    // document.write("<br>")

    //  d odd number

    // for (let i = 0; i <=20 ; i++) {
    //     if(i % 2 != 0){
    //         document.write(i + " ")
    //     }
    // }
    // document.write("<br>")
    // document.write("<br>")

    // e series
    // for (let i = 2; i <=20 ; i++) {
    //     if(i % 2 == 0){
    //         document.write(i + "K" +  " ")
    //     }
    // }
    // document.write("<br>")
    // document.write("<br>")

    // Q8

    // var Arr = [24,53,78,91,12]
    // document.write(Arr)
    // document.write("<br>")
    // document.write("<br>")
    // var max = Math.max(...Arr)
    // document.write("the largest number is " + max)
    // document.write("<br>")
    // document.write("<br>")

// Q9

// var A = [24,53,78,91,12]
// document.write(A)
// document.write("<br>")
// document.write("<br>")
// var min = Math.min(...A)
// document.write("the smallest number is " + min)
// document.write("<br>")
// document.write("<br>")

// Q10

// for (let i = 5; i <= 100; i+=5){
//     document.write(i + " ")
// }
// document.write("<br>")
// document.write("<br>")

// Q7
  
// var User = prompt("enter which item you need")
// User = User.toLowerCase();
// var food = ["cake", "apple pie", "cookie", "chips", "patties"]

// var match = false

// var itemindex;
// for (var i = 0; i< food.length; i++){
//     var item = food[i].toLowerCase();
//     if (item === User){
//         match = true
//         itemindex = i;
//     }
// }
// if(match){
//     alert(User + " is available at counter number " + itemindex + " in our bakery")
// }else {
//     alert("we are sorry " + User + " is not available in our bakery")
// }