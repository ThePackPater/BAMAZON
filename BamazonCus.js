var inquirer = require("inquirer");
var mysql = require("mysql");
var divider = "\n------------------------------------------------------------\n\n";

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "password",
    password: "password",
    database: "Bamazon.sql"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected");
});

inquirer
    .prompt([{
        type: "list",
        message: "Welcome to Bamazon:MoneyZgone: What access do you require?",
        choices: ["CustomerAccess", "ManagerAccess", "CEOAccess"],
        name: "userRole"
    }]).then(function(inquirerResp) {
        var User = inquirerResp.userRole;
        console.log("\nVerifying Bamazon access: " + User);
        console.log("One moment please!\n");
    });
// switch (User) {
//     case "CustomerAccess":
//         allowCust();
//         break;
//     case "ManagerAccess":
//         allowMgr();
//         break;
//     case "CEOAccess":
//         allowCEO();
//         break;
//     default:
//         console.log("I'm sorry you cannot access Bamazon");
//         tryAgain();
//         break;

//}


// });