var inquirer = require("inquirer");
var mysql = require("mysql");
var chalk = require('chalk');
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
            message: chalk.red("Welcome to Bamazon: MoneyZgone: Inhumnan Weapons Division: What access do you require?"),
            choices: ["CustomerAccess", "ManagerAccess"],
            name: "userRole",
        }]).then(function(inquirerResp) {
            var User = inquirerResp.userRole;
            console.log(chalk.blue("\nVerifying Bamazon access: " + User) + chalk.blue("\nOne moment please!\n"));
            switch (User) {
                case "CustomerAccess":
                    console.log(chalk.green("Customer Access Granted!"));
                    console.log(divider);
                    allowCust();
                    break;
                case "ManagerAccess":
                    console.log(chalk.green("Manager Access Granted!"));
                    connection.end();
                    //allowMgr();
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
                choices: ["Purchase dwarven weapons", "Purchase elven weapons", "I'm finished"],
                message: "What can we do for you?"
            })
            .then(function(answer) {
                if (answer.purchase === "Purchase dwarven weapons") {
                    console.log(divider);
                    console.log("Heft and Damage, excellent choice if you got the gold...");
                    console.log(divider);
                    inquirer
                        .prompt({
                            name: "dwarven",
                            type: "list",
                            choices: ["broadsword", "battleaxe", "warhammer"],
                            message: "What weapon would you like to purchase?"
                        })
                        .then(function(inquirerResp) {
                            var user = inquirerResp.dwarven;
                            switch (user) {
                                case "broadsword":
                                    console.log("Wanna cut a wide swath from your enemy ranks do ya?!");
                                    console.log("\nOur Dwarven Broadswords are 650 gold pieces, I'll add one to your your cart and send a Goblin to collect the gold. Thank You!");
                                    console.log(divider);
                                    allowCust();
                                    break;
                                case "battleaxe":
                                    console.log("Looking to cleave a skull or two?!");
                                    console.log("\nOur Dwarven Battleaxes are 450 gold pieces, I'll add one to your your cart and send a Goblin to collect the gold. Thank You!");
                                    console.log(divider);
                                    allowCust();
                                    break;
                                case "warhammer":
                                    console.log("Oh I like your style, feel like smashing your foes?");
                                    console.log("\nOur Dwarven Warhammers are 475 gold pieces, I'll add one to your your cart and send a Goblin to collect the gold. Thank You!");
                                    console.log(divider);
                                    allowCust();
                                    break;

                            }
                        });
                } else if (answer.purchase === "Purchase elven weapons") {
                    console.log("Speed and Magic, excellent choice if you got the gold...");
                    console.log(divider);
                    inquirer
                        .prompt({
                            name: "elven",
                            type: "list",
                            choices: ["longbow", "shortsword", "dagger"],
                            message: "What weapon would you like to purchase?"
                        })
                        .then(function(inquirerResp) {
                            var user = inquirerResp.elven;
                            switch (user) {
                                case "longbow":
                                    console.log("Want to get some distance between yourself and a murderous ORC?!");
                                    console.log("\nOur Elven Longbows are 575 gold pieces, I'll add one to your your cart and send a Goblin to collect the gold. Thank You!");
                                    console.log(divider);
                                    allowCust();
                                    break;
                                case "shortsword":
                                    console.log("Do you need to get up close and personal?!");
                                    console.log("\nOur Elven Shortswords are 300 gold pieces, I'll add one to your your cart and send a Goblin to collect the gold. Thank You!");
                                    console.log(divider);
                                    allowCust();
                                    break;
                                case "dagger":
                                    console.log("Needing to kill someone before they know you're there?!");
                                    console.log("\nOur Elven daggers are 100 gold pieces, I'll add one to your your cart and send a Goblin to collect the gold. Thank You!");
                                    console.log(divider);
                                    allowCust();
                                    break;
                            }
                        });
                } else if (answer.purchase === "I'm finished") {
                    console.log("Good Questing Traveller come see me when you've got the gold!");
                    console.log(divider);
                    connection.end();
                }
            });
        //connection.end();
    });

}