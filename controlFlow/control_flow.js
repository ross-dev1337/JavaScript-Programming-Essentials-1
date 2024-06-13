let userRole = "admin";
let accessLevel;
let isLoggedIn = true;
let userMessage;

if(isLoggedIn) {
    if (userRole === "admin") {
        accessLevel = "Full access granated";
    }
    else if (userRole === "manager") {
        accessLevel = "Limited access granted";
    }
}
else {
    accessLevel = "No access granted";
}

console.log("Access Level: ", accessLevel);




if(isLoggedIn) {
    if (userRole === "admin") {
        userMessage = "Admin!";
    }
    else {
        userMessage = "User!";
    }
} else {
    userMessage = "Please login";
}

console.log("Welcome ", userMessage);

let userType = "subscriber";
let userCategory;

switch (userType) {
    case "admin":
        userCategory = "Admin";
        break;
    case "manager":
        userCategory = "Manager"
        break;
    case "subscriber":
        userCategory = "subscriber";
        break;
    default:
        userCategory = "Unknown";
        break;
}

console.log("User Category: ", userCategory);