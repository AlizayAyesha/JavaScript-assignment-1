//2. Write a program to take input color of road traffic signal from the user
//& show the message according to this table:**

var color = prompt("Enter a color of traffic signal");
if (color.toUpperCase() == "red".toUpperCase())
{
    alert("message is :" + "stop your vehicals")
}
else if (color.toUpperCase() == "yellow".toUpperCase()) 
{ alert("message is :"+" get ready to move your vehicles.") } 
else if (color.toUpperCase() == "green".toUpperCase())
 { alert("message is :"+" now you can move your vehicles .") }
