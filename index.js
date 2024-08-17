function askForUserName(){
  const userName = prompt("Please enter your name:");
}

if(userName){
  document.getElementById("greeting").textcontent= `Hello, ${userName}! Welcome to our website.`;
}

else{
  document.getElementById("greeting").textContent = 'Hello! Welcome to our website.';
}

window.onload = askForUserName;