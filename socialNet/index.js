/* Social Network requirents

The user need:

1. Sign in the network
2. The sytem can verific the user
3. If the user sign correct, the system show up a message with "Bienvendido " + Username, and the timeline.
4.else create a message "Error" + no show up any timeline

*/

const userDataBase = [
    {
        username: "Anders",
        password: "1231", 
    },
    {
        username: "Anders2",
        password: "1234", 
    },
    {
        username: "Anders3",
        password: "1235", 
    },
    
];

const userTimeLine = [    
    {
        username: "Anders",
        timeline: "I love chocolate", 
    },
    {
        username: "Anders2",
        timeline: "Time to learn something new", 
    },
    {
        username: "Anders3",
        timeline: "Trying to think in english is a litle hard", 
    },
];

const username = prompt("What is your username? ");
const password = prompt("What is your password? ");
    
function existingdUser(username, password){
    for(let i= 0; i < userDataBase.length; i++){
        if(
            userDataBase[i].username === username &&
            userDataBase[i].password === password
        ) {
            return true;
        } 
    }
    return false;
}

function signIn(username, password) {
    if(existingdUser(username, password)){
        alert(`Welcome to your account ${username}`);
    } else {
        alert("Incorrect User or Password")
    }
}

signIn(username,password)
