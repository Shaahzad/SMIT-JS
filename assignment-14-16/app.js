//   1=============

var JsLiteral = [];

// 2================

var ObjectNotation = {};

// 3===================

var Stringarr = ["Aman","Shahzad","Yaseen"]

// 4====================

var Numarr = [1,2,3,]

// 5=======================

var Booleanarr = [true,false]

// 6=======================

var Mixedarr = ["Shahzad", 23, true,]

// 7========================

var Education = ["SSC","HSC","BCS","BS","BCOM","MSM","PHIL","PHD"]

document.write("<h1>Qualification</h1>")
document.write("<br>")

document.write("<ol>")
document.write(Education[0],"<li>")
document.write("</li>")
document.write(Education[1],"<li>")
document.write("</li>")
document.write(Education[2],"<li>")
document.write("</li>")
document.write(Education[3],"<li>")
document.write("</li>")
document.write(Education[4],"<li>")
document.write("</li>")
document.write(Education[5],"<li>")
document.write("</li>")
document.write(Education[6],"<li>")
document.write("</li>")
document.write(Education[7],"<li>")
document.write("</li>")
document.write("</ol>")

// 8===================

var StdName = ["Aman","Shahzad","Yaseen"]
var StdScore = [300,280,400]
var TotalMarks = 500;

var Percentage = StdScore[0] / TotalMarks * 100
document.write("Score of ",StdName[0], " Is ", StdScore[0], ". Percentage: ", Percentage, " % ")
document.write("<br>")

var Percentage = StdScore[1] / TotalMarks * 100
document.write("Score of ",StdName[1], " Is ", StdScore[1], ". Percentage: ", Percentage, " % ")
document.write("<br>")

var Percentage = StdScore[2] / TotalMarks * 100
document.write("Score of ",StdName[2], " Is ", StdScore[2], ". Percentage: ", Percentage, " % ")
document.write("<br>")
document.write("<br>")
document.write("<br>")

// 9=================

var Color = ["Red","Green","Blue","White"]
document.write(Color)
document.write("<br>")
document.write("<br>")


// Color.unshift(prompt("Enter Color"))
// documentdocument.write(Color)

// Color.push(prompt("Enter Color"))
// document.write(Color)

// Color.unshift(prompt("Enter Color"),prompt("Enter one more color"))
// document.write(Color)

// Color.shift()
// document.write(Color)

// Color.pop()
// document.write(Color)

// var AddClr = prompt("Which Index Number Do You Add Color ")
// var ClrName = prompt("Enter Color Name")
// Color.splice(AddClr,0,ClrName)
// document.write(Color)

// var DelColor = prompt("Enter Which Color Do You Want To Delete")
// var DelQuantity  = prompt("Enter Delete Color Quantity")

// Color.splice(DelColor,DelQuantity)
// document.write(Color)

// 10=================
// var StudentScores = [50,80,90,10]
// document.write(StudentScores)
// document.write("<br>")
// document.write("<br>")

// StudentScores.sort();
// document.write(StudentScores)


// 11========================
// var CityName = ["Karachi","Lahore","Islamabad","Quetta","Peshawar"]
// document.write(CityName)
// document.write("<br>")
// document.write("<br>")

// var SelectedCities = CityName.slice(2, 4)
// document.write(SelectedCities)

// 12===================
// var SingleStr = ["This", "Is", "My", "Cat"];
// document.write(SingleStr)
// document.write("<br>")
// document.write("<br>")
// var arr = SingleStr.join(" ");
// document.write( arr)


// 13============

// var Devices = []

// Devices.push("Keyboard")
// Devices.push("Mouse")
// Devices.push("Monitor")
// Devices.push("Printer")
// document.write(Devices)
// document.write("<br>")
// document.write("<br>")


// var Num1 = Devices.shift();
// var Num2 = Devices.shift();
// var Num3 = Devices.shift();
// var Num4 = Devices.shift();

// document.write(Num1)
// document.write("<br>")
// document.write(Num2)
// document.write("<br>")
// document.write(Num3)
// document.write("<br>")
// document.write(Num4)

// 14==============

// var Reverse = []
// Reverse.push("Keyboard")
// Reverse.push("Mouse")
// Reverse.push("Printer")
// Reverse.push("Monitor")
// document.write(Reverse)
// document.write("<br>")
// document.write("<br>")

// var Dev1 = Reverse.pop()
// var Dev2 = Reverse.pop()
// var Dev3 = Reverse.pop()
// var Dev4 = Reverse.pop()

// document.write(Dev1)
// document.write("<br>")
// document.write(Dev2)
// document.write("<br>")
// document.write(Dev3)
// document.write("<br>")
// document.write(Dev4)

// 15========================

// var MobileDevices = ["Apple","Samsung","Motorola","Nokia","Sony","Haier"]


// document.write("<select>");
// document.write("<option>")
// document.write("Please Pick One")
// document.write("</option>")

// document.write("<option>")
// document.write(MobileDevices[0])
// document.write("</option>")
// document.write("<option>")
// document.write(MobileDevices[1])
// document.write("</option>")
// document.write("<option>")
// document.write(MobileDevices[2])
// document.write("</option>")
// document.write("<option>")
// document.write(MobileDevices[3])
// document.write("</option>")
// document.write("<option>")
// document.write(MobileDevices[4])
// document.write("</option>")
// document.write("<option>")
// document.write(MobileDevices[5])
// document.write("</option>")





document.write("</select>")
