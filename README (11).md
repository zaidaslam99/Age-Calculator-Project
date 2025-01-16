
# Age Calculator Project

I developed a sophisticated yet user-friendly educational project aimed at teaching core front-end development skills through the creation of a simple age calculator. This project seamlessly integrates HTML for structuring the web page, CSS for styling and responsive design, and JavaScript for dynamic functionality and user interaction. Through this hands-on project, learners gain practical experience in crafting clean, semantic HTML, applying modern CSS techniques for an aesthetically pleasing and responsive layout, and utilizing JavaScript to handle input validation and real-time age calculation. This comprehensive approach not only reinforces theoretical knowledge but also hones practical skills essential for proficient front-end development.


## Screenshots

![App Screenshot](https://github.com/zaidaslam99/Age-Calculator-Project/blob/main/age_calc_screenshot.png)


## Lessons Learned

This code is a simple web application that calculates a person's age based on their birthday. Here's a detailed summary of what each part of the code does:

Variables and Elements

btnEl: a variable that references a HTML button element with the id "btn".
birthdayEl: a variable that references a HTML input element with the id "birthday".
resultEl: a variable that references a HTML element with the id "result".
Functions

calculateAge(): a function that calculates a person's age based on their birthday.
It gets the value of the birthdayEl input field, which is the person's birthday.
If the birthday value is empty, it shows an alert message asking the user to enter their birthday.
Otherwise, it calls the getAge() function to calculate the person's age.
It then updates the resultEl element with a message displaying the person's age.
getAge(birthdayValue): a function that calculates a person's age based on their birthday.
It creates a new Date object from the birthday value.
It calculates the difference between the current year and the birthday year.
It adjusts the age calculation based on the month and day of the birthday.
It returns the calculated age.
Event Listener

The script adds an event listener to the btnEl button, which calls the calculateAge() function when the button is clicked.

