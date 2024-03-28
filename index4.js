
//  Write a program to take input the marks obtained in three subjects &
// total marks. Compute & show the resulting percentage on your page.
// Take percentage & compute grade as per following table:**
// ![image](https://github.com/AlizayAyesha/JavaScript-Programming-Assignment-2/assets/68489612/330dfc56-b762-41f3-9280-041d108d3bf4)

// **Show the total marks, marks obtained, percentage, grade & remarks
// like:**

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
