// // // // // var age = prompt("tell me your age")
// // // // // document.write ("your age is ",age);

// // // // // document.write("5+9 = ", 5+9, "<br>");
// // // // // document.write("5-9 = ", 5-9, "<br>");
// // // // // document.write("5*9 = ", 5*9, "<br>");
// // // // // document.write("5/9 = ", 5/9, "<br>");

// // // // // var totalcost=  prompt("Total food cost");
// // // // // var no = prompt("no of people");
// // // // // document.write("total cost of food is ", totalcost,"<br>");
// // // // // document.write("each person have to pay ",(totalcost/no).toFixed(2),"<br>");

// // // // // document.write("2^9 = ", Math.pow(2,9));
// // // // // document.write("2^9 = ", Math.abs(-9));

// // // // // var str1 = "rashedkhan";
// // // // // document.write(str1.length,"<br>");
// // // // // document.write(str1.indexOf("khan"), "<br>");
// // // // // document.write(str1.slice(1,9),"<br>");

// // // // var age = prompt("enter your age");
// // // // if (age < 5){
// // // //     document.write("chill");
// // // // }
// // // // else if(age >= 5 && age <= 10){
// // // //     document.write("you have to go primary school");
// // // // }
// // // // else if(age > 10 && age <= 15){
// // // //     document.write("you have to go high school");
// // // // }
// // // // else if(age > 15 && age <= 18){
// // // //     document.write("you have to go college");
// // // // }
// // // // else if(age > 18 && age <= 22){
// // // //     document.write("you have to go university");
// // // // }
// // // // else{
// // // //     document.write("do whatever you want");
// // // // }

// // // var i;
// // // for(i=1; i<=10; i++){
// // //     document.write(i, ". raSHED", "<br>");
// // // }

// // var d = Date.now();
// // document.write("today ", d);

// function validateForm() {
//     var x = document.forms["myForm"]["fname"].value;
//     var y = document.forms["myForm"]["age"].value;
//     if (x == "") {
//       alert("name must be filled out");
//       return false;
//     }
//     if (y == "") {
//         alert("age must be filled out");
//         return false;
//       }
//   }