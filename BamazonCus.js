var inquirer = require("inquirer");
var mysql = require("mysql");
var divider = "\n------------------------------------------------------------\n";

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "Bamazon_db"
});

connection.connect(function(err) {
    if (err) throw err;
    bamazonStart();
});

function bamazonStart() {
    console.log(divider);
    inquirer
        .prompt([{
            type: "list",
            message: "Welcome to Bamazon:MoneyZgone: What access do you require?",
            choices: ["CustomerAccess", "ManagerAccess", "CEOAccess"],
            name: "userRole",
        }]).then(function(inquirerResp) {
            var User = inquirerResp.userRole;
            console.log("\nVerifying Bamazon access: " + User);
            console.log("One moment please!\n");
            switch (User) {
                case "CustomerAccess":
                    console.log("Customer Access Granted!");
                    console.log(divider);
                    allowCust();
                    break;
                case "ManagerAccess":
                    console.log("Manager Access Granted!");
                    connection.end();
                    //allowMgr();
                    break;
                case "CEOAccess":
                    console.log("CEO Access Granted!");
                    connection.end();
                    //allowCEO();
                    break;
                default:
                    console.log("I'm sorry you cannot access Bamazon");
                    connection.end();
                    //tryAgain();
                    break;
            }
        });
}

function allowCust() {
    connection.query("SELECT * FROM Bamazon", function(err, results) {
        if (err) throw err;
        inquirer
            .prompt({
                name: "purchase",
                type: "list",
                choices: ["dwarven weapons", "elven weapons"],
                message: "What type of weapons would you like to purchase?"
            })
            .then(function(answer) {
                if (answer.purchase === "dwarven weapons") {
                    console.log(divider);
                    console.log("Heaft and Damage, excellent choice if you got the gold...");
                    inquirer
                        .prompt({
                            name: "dwarven",
                            type: "list",
                            choices: ["broadsword", "battleaxe", "warhammer"],
                            message: "What weapon would you like to purchase?"
                        })
                        .then(function(answer) {
                            console.log(divider);

                            switch (answer) {
                                case "broadsword":
                                    console.log("Wanna cut a wide swath from your enemy ranks do ya?!");
                                    console.log(divider);
                                    break;
                                case "battleaxe":
                                    console.log("Looking to cleave a skull or two?!");
                                    console.log(divider);
                                    break;
                                case "warhammer":
                                    console.log("Oh I like your style, feel like smashing your foes?");
                                    console.log(divider);
                                    break;
                            }
                        });
                } else if (answer.purchase === "elven weapons") {
                    console.log(divider);
                    console.log("Speed and Magic, excellent choice if you got the gold...");
                    inquirer
                        .prompt({
                            name: "dwarven",
                            type: "list",
                            choices: ["longbow", "shortsword", "dagger"],
                            message: "What weapon would you like to purchase?"
                        })
                        .then(function(answer) {
                            console.log(divider);

                            switch (answer) {
                                case "longbow":
                                    console.log("Want to get some distance between yourself and a murderous ORC?!");
                                    console.log(divider);
                                    break;
                                case "shortsword":
                                    console.log("Do you need to get up close and personal?!");
                                    console.log(divider);
                                    break;
                                case "dagger":
                                    console.log("Needing to kill someone before they know you're there?!");
                                    console.log(divider);
                                    break;
                            }
                        });
                } else {
                    console.log(divider);
                    connection.end();
                }
            });
        connection.end();
    });

}