/**
 * Here we are using getElementById this will help us interact with the btn, birthday(input), p (results)
 */

const btnEl = document.getElementById("btn");
const birthdayE1 = document.getElementById("birthday");
const resultE1 = document.getElementById("result");

function calculateAge() {
  // Ex. birthdayValue = "1997-11-02"
  const birthdayValue = birthdayE1.value;

  // Incase the user doesn't chose anything
  if (birthdayValue === "") {
    alert("Please enter your birthday");
  } else {
    // Pass birthday to getAge function
    const age = getAge(birthdayValue);
    // string literal with conditional expression
    // if value of age is greater then 1 and the string year otherwise year
    resultE1.innerText = `Your age is ${age} ${age > 1 ? "years" : "year"} old`;
  }
}

// Ex. birthdayValue = "1997-11-02"
function getAge(birthdayValue) {
  // currentDate = Mon May 13 2024 15:10:51 GMT-0500 (Central Daylight Time) {}
  const currentDate = new Date();

  // birthdayDate = Sat Nov 01 1997 18:00:00 GMT-0600 (Central Standard Time) {}, birthdayValue = "1997-11-02"
  const birthdayDate = new Date(birthdayValue);

  // getFullYear() will return the year of the date
  let current_date_year = currentDate.getFullYear();
  let birth_date_year = birthdayDate.getFullYear();
  let age = current_date_year - birth_date_year;

  // getMonth() method is going to return the month we are in
  // month = -6
  let current_date_month = currentDate.getMonth();
  let birth_date_month = birthdayDate.getMonth();
  const month = current_date_month - birth_date_month;

  // (month being negative) ||
  // month === 0 and current date month < birthday month (if birthday is before current day)
  // getDate() will return the day
  if (
    month < 0 ||
    (month === 0 && currentDate.getDate() < birthdayDate.getDate())
  ) {
    age--;
  }
  return age;
}

btnEl.addEventListener("click", calculateAge);
