const passwordBox = document.getElementById("password");
const lenght = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "1234567890";
const symbols = "`~!@#$%^&*()-_=+[]{}?/|;:'><.,";

const allChars = upperCase + lowerCase + numbers + symbols;
function generatePassword() {
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password +=lowerCase[Math.floor(Math.random() *lowerCase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];

    while (lenght > password.length) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    passwordBox.value = password;
}
function copyPassword() {
    if (passwordBox.value == "") {
        alert("No Password to Copy");
    }
    else {
        passwordBox.select();
        document.execCommand("copy");
        alert("Password Copied"); 
    }
}
