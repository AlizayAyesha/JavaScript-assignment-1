# JavaScript-Programming-Assignment-2

**Note: Check Rules end of document**

**1. Write a program to take “city” name as input from user. If user enters
“Karachi”, welcome the user like this: “Welcome to city of lights”**

**index.js**

var name = prompt("please enter your city name");
if("karachi".toLocaleUpperCase);
alert("Welcome To The City Of Lights");

![image](https://github.com/AlizayAyesha/JavaScript-Programming-Assignment-2/assets/68489612/a285844a-98ee-4a1a-91de-dc3fad18dbbe)

![image](https://github.com/AlizayAyesha/JavaScript-Programming-Assignment-2/assets/68489612/cfa80d70-2534-4c34-bb2e-ed0cf580ce89)

-----------------------------------------------------------------------------------

**2. Write a program to take input color of road traffic signal from the user
& show the message according to this table:**
![image](https://github.com/AlizayAyesha/JavaScript-Programming-Assignment-2/assets/68489612/82d2856d-2415-4a2a-9a7d-15e1f2a110a1)

**index.js**
var color = prompt("Enter a color of traffic signal");
if (color.toUpperCase() == "red".toUpperCase())
{
    alert("message is :" + "stop your vehicals")
}
else if (color.toUpperCase() == "yellow".toUpperCase()) 
{ alert("message is :"+" get ready to move your vehicles.") } 
else if (color.toUpperCase() == "green".toUpperCase())
 { alert("message is :"+" now you can move your vehicles .") }

 ![image](https://github.com/AlizayAyesha/JavaScript-Programming-Assignment-2/assets/68489612/bdf4da16-6afc-4b25-bccc-56f703db4b93)
![image](https://github.com/AlizayAyesha/JavaScript-Programming-Assignment-2/assets/68489612/8d61eb56-be8b-4dba-90d4-135751eb7829)

-----------------------------------------------------------------------------------

**3. Run this script, & check whether alert message would be displayed or
not. Record the outputs.**

a. var a = 4;
if (++a === 5) {
alert("given condition for variable a is true");
}
**output**
given condition for variable b is true
![image](https://github.com/AlizayAyesha/JavaScript-Programming-Assignment-2/assets/68489612/94717e16-2ccb-4fe1-90da-44d2f5459342)


b. var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
**output**
given condition for variable b is true
![image](https://github.com/AlizayAyesha/JavaScript-Programming-Assignment-2/assets/68489612/6753d908-64f7-438b-bcc5-df14c42abf8b)


c. var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}
**output**
condition 2 is true
![image](https://github.com/AlizayAyesha/JavaScript-Programming-Assignment-2/assets/68489612/97bbfc9d-b250-4b17-9357-d43abea39e8f)

condition 4 is true

![image](https://github.com/AlizayAyesha/JavaScript-Programming-Assignment-2/assets/68489612/28dae160-c3d4-45b2-920e-d29f45ff08b9)


d. var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
**output**
The cost equals
![image](https://github.com/AlizayAyesha/JavaScript-Programming-Assignment-2/assets/68489612/a191bd39-63b4-4733-bf3c-8bf8e4a0bbbc)

e. if (true){

alert("True");
}
if (false){
alert("False");
}
**output**
true
![image](https://github.com/AlizayAyesha/JavaScript-Programming-Assignment-2/assets/68489612/0d272a69-07fc-453d-b410-0896d40c2174)


f. if("car" < "cat"){

alert("car is smaller than cat");
}

**output**
car is smaller than cat
![image](https://github.com/AlizayAyesha/JavaScript-Programming-Assignment-2/assets/68489612/666c646b-e84b-44d3-84a7-5b477ecb4074)



-----------------------------------------------------------------------------------

**4. Write a program to take input the marks obtained in three subjects &
total marks. Compute & show the resulting percentage on your page.
Take percentage & compute grade as per following table:**
![image](https://github.com/AlizayAyesha/JavaScript-Programming-Assignment-2/assets/68489612/330dfc56-b762-41f3-9280-041d108d3bf4)

**Show the total marks, marks obtained, percentage, grade & remarks
like:**

**index.html**
<html>
    <head>
        <body>
            <title>Js sample</title> <script src=" index.js"></script>
            <h>
<b> Mark Sheet</b>
            </h> <br>
            total marks 268 <br>
average= 89.33333333333333<br>
 Grade A Excellent
        </body>
    </head>
</html>

**index.js**
let m1,m2,m3,sum,percentage
m1=80
m2=90
m3=98
sum=m1+m2+m3
console.log("total marks" ,sum)
percentage=sum/3
console.log('average=',percentage);

if (percentage > 80 ) {
    console.log("Grade A" , "Excellent");

}

else if (percentage > 70) {
    console.log("Grade B" , "Good");
}

else if (percentage > 60 ) {
    console.log("Grade B" , "You need to improve");
}

else
console.log("Fail" , "Sorry");
![image](https://github.com/AlizayAyesha/JavaScript-Programming-Assignment-2/assets/68489612/b800477c-ee44-4074-8b78-88c6bb06bb8b)

![image](https://github.com/AlizayAyesha/JavaScript-Programming-Assignment-2/assets/68489612/2878ba66-5615-497b-9980-0a5f7cbb193d)

-----------------------------------------------------------------------------------

**5. Guess game:
Store a secret number (ranging from 1 to 10) in a variable. Prompt
user to guess the secret number.
a. If user guesses the same number, show “Bingo! Correct
answer”.
b. If the guessed number +1 is the secret number, show “Close
enough to the correct answer”.**

-----------------------------------------------------------------------------------

**6. Write a program that checks whether the given input is an even
number or an odd number.**

-----------------------------------------------------------------------------------

**7. Write a program to create a calculator for +,-,*, / & % using if
statements. Take the following input:**
a. First number
b. Second number
c. Operation (+, -, *, /, %)
**Compute & show the calculated result to user.**

-----------------------------------------------------------------------------------

**8. Write a program that takes input a number from user & state whether
the number is positive, negative or zero.**

-----------------------------------------------------------------------------------

**9. Write a program that takes a character (i.e. string of length 1) and
returns true if it is a vowel, false otherwise**

-----------------------------------------------------------------------------------

**10. Write a program that**
a. Store correct password in a JS variable.
b. Asks the user to enter his/her password
c. Validate the two passwords:
i. Check if user has entered password. If not, then give the
message “ Please enter your password”
ii. Check if both passwords are the same. If they are the
same, show message “Correct! The password you
entered matches the original password”. Show “Incorrect
password” otherwise.

-----------------------------------------------------------------------------------

**11. Write a program that take time as input from user in 24 hours clock
format like: 1900 = 7pm. Implement the following case using if, else &
else if statements**



