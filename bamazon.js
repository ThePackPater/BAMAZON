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
            message: chalk.magenta.bold("Welcome to Bamazon: MoneyZgone: Inhumnan Weapons Division: What access do you require?"),
            choices: ["CustomerAccess", "ManagerAccess", "Exit"],
            name: "userRole",
        }]).then(function(inquirerResp) {
            var User = inquirerResp.userRole;
            console.log(chalk.red.bold("\nVerifying... " + User) + chalk.red.bold(" One moment please...\n"));
            switch (User) {
                case "CustomerAccess":
                    console.log(chalk.green.bold("Welcome Warrior!!\n"));
                    console.log(divider);
                    allowCust();
                    break;
                case "ManagerAccess":
                    console.log(chalk.green.bold("Welcome GREAT EVIL OVERLORD!!!\n"));
                    allowMgr();
                    break;
                case "Exit":
                    break;
                    // connection.end();

            }
        });
}

function allowCust() {
    inquirer
        .prompt({
            name: "purchase",
            type: "list",
            choices: ["Purchase dwarven weapons", "Purchase elven weapons", "I'm finished"],
            message: chalk.magenta.bold("What do you need Warrior?")
        })
        .then(function(answer) {
            if (answer.purchase === "Purchase dwarven weapons") {
                console.log(divider);
                console.log(chalk.red("Heft and Damage, excellent choice if you got the gold..."));
                console.log(divider);
                inquirer
                    .prompt({
                        name: "dwarven",
                        type: "list",
                        choices: ["broadsword", "battleaxe", "warhammer", "none"],
                        message: chalk.magenta("Which weapon would you like to purchase?")
                    })
                    .then(function(inquirerResp) {
                        var user = inquirerResp.dwarven;
                        switch (user) {
                            case "broadsword":
                                console.log(chalk.cyan("Wanna cut a wide swath from your enemy ranks do ya?!"));

                                connection.query(
                                    "UPDATE bamazon SET ? WHERE ?", [{
                                        Product_Inventory: -1,
                                        Product_Sales: +1
                                    }, {
                                        Product: "BroadSword"
                                    }],
                                    function(err, res) {
                                        console.log(chalk.green(res.affectedRows + " are 650 gold pieces, I'll add one to your your cart and send a Goblin to collect the gold. Thank You!"));
                                        console.log(res.affectedRows + " products updated!\n");
                                        console.log(divider);
                                        allowCust();
                                    });
                                break;
                            case "battleaxe":
                                console.log(chalk.cyan("Looking to cleave a skull or two?!"));
                                connection.query(
                                    "UPDATE bamazon SET ? WHERE ?", [{
                                        Product_Inventory: -1,
                                        Product_Sales: +1
                                    }, {
                                        Product: "BattleAxe"
                                    }],
                                    function(err, res) {
                                        console.log(chalk.green(res.affectedRows + " are 450 gold pieces, I'll add one to your your cart and send a Goblin to collect the gold. Thank You!"));
                                        console.log(res.affectedRows + " products updated!\n");
                                        console.log(divider);
                                        allowCust();
                                    });
                                break;
                            case "warhammer":
                                console.log(chalk.cyan("Oh I like your style, feel like smashing your foes?"));
                                connection.query(
                                    "UPDATE bamazon SET ? WHERE ?", [{
                                        Product_Inventory: -1,
                                        Product_Sales: +1
                                    }, {
                                        Product: "WarHammer"
                                    }],
                                    function(err, res) {
                                        console.log(chalk.green(res.affectedRows + " 475 gold pieces, I'll add one to your your cart and send a Goblin to collect the gold. Thank You!"));
                                        console.log(res.affectedRows + " products updated!\n");
                                        console.log(divider);
                                        allowCust();
                                    });
                                break;
                            case "none":
                                allowCust();
                                break;
                        }
                    });

            } else if (answer.purchase === "Purchase elven weapons") {
                console.log(chalk.red("Speed and Magic, excellent choice if you got the gold..."));
                console.log(divider);
                inquirer
                    .prompt({
                        name: "elven",
                        type: "list",
                        choices: ["longbow", "shortsword", "dagger", "none"],
                        message: chalk.magenta("What weapon would you like to purchase?")
                    })
                    .then(function(inquirerResp) {
                        var user = inquirerResp.elven;
                        switch (user) {
                            case "longbow":
                                console.log(chalk.cyan("Want to get some distance between yourself and a murderous ORC?!"));
                                connection.query(
                                    "UPDATE bamazon SET ? WHERE ?", [{
                                        Product_Inventory: -1,
                                        Product_Sales: +1
                                    }, {
                                        Product: "LongBow"
                                    }],
                                    function(err, res) {
                                        console.log(chalk.green(res.affectedRows + " are 575 gold pieces, I'll add one to your your cart and send a Goblin to collect the gold. Thank You!"));
                                        console.log(res.affectedRows + " products updated!\n");
                                        console.log(divider);
                                        allowCust();
                                    });
                                break;
                            case "shortsword":
                                console.log(chalk.cyan("Do you need to get up close and personal?!"));
                                connection.query(
                                    "UPDATE bamazon SET ? WHERE ?", [{
                                        Product_Inventory: -1,
                                        Product_Sales: +1
                                    }, {
                                        Product: "ShortSword"
                                    }],
                                    function(err, res) {
                                        console.log(chalk.green(res.affectedRows + " are 300 gold pieces, I'll add one to your your cart and send a Goblin to collect the gold. Thank You!"));
                                        console.log(res.affectedRows + " products updated!\n");
                                        console.log(divider);
                                        allowCust();
                                    });
                                break;
                            case "dagger":
                                console.log(chalk.cyan("Needing to kill someone before they know you're there?!"));
                                connection.query(
                                    "UPDATE bamazon SET ? WHERE ?", [{
                                        Product_Inventory: -1,
                                        Product_Sales: +1
                                    }, {
                                        Product: "Dagger"
                                    }],
                                    function(err, res) {
                                        console.log(chalk.green(res.affectedRows + " are 100 gold pieces, I'll add one to your your cart and send a Goblin to collect the gold. Thank You!"));
                                        console.log(res.affectedRows + " products updated!\n");
                                        console.log(divider);
                                        allowCust();
                                    });
                                break;
                            case "none":
                                allowCust();
                                break;
                        }
                    });
            } else if (answer.purchase === "I'm finished") {
                console.log(chalk.red("Good Questing Traveller come see me when you've got more gold!"));
                console.log(divider);
                bamazonStart();
            }
        });
}

function allowMgr() {

    inquirer
        .prompt({
            name: "audit",
            type: "list",
            choices: ["Check Inventory", "Add items", "Delete Items", "Update Items", "I'm Finished"],
            message: chalk.magenta.bold("How may we serve you Master?")
        })
        .then(function(answer) {
            var Answer = answer.audit;
            switch (Answer) {
                case "Check Inventory":
                    console.log(chalk.cyan("Pulling the inventory Master.. soon... soon..."));
                    console.log(divider);
                    readProduct();
                    //allowMgr();
                    break;
                case "Update Items":
                    console.log(chalk.cyan("\nYes Master! Change them, change them and make them obey!!"));
                    console.log(divider);
                    updateProduct();
                    //allowMgr();
                    break;
                case "Add items":
                    console.log(chalk.cyan("\nYes Master! More inhuman death devices!!"));
                    console.log(divider);
                    createProduct();
                    //allowMgr();
                    break;
                case "Delete Items":
                    console.log(chalk.cyan("\nRemove the shameful failures Master, SPITE THEM!!"));
                    console.log(divider);
                    removeProduct();
                    //allowMgr();
                    break;
                case "I'm Finished":
                    console.log(chalk.cyan("\nThank you Master, Dark Blessings upon you!"));
                    console.log(divider);
                    bamazonStart();
                    break;
            }
        });

}

function readProduct() {

    connection.query("SELECT * FROM bamazon", function(err, res) {
        if (err) throw err;
        console.log(divider);
        console.log(" _____________________________________________");
        console.log("     Department    " + "   Product   " + " Inv  " + " Sales");
        console.log(" _____________________________________________");
        console.log(" | " + res[0].Department_Name + "   | " + res[0].Product + "    | " + res[0].Product_Inventory + " |   " + res[0].Product_Sales + "  | ");
        console.log(" | " + res[1].Department_Name + "   | " + res[1].Product + " | " + res[1].Product_Inventory + " |   " + res[1].Product_Sales + "  | ");
        console.log(" | " + res[2].Department_Name + "   | " + res[2].Product + "     | " + res[2].Product_Inventory + " |   " + res[2].Product_Sales + "  | ");
        console.log(" | " + res[3].Department_Name + " | " + res[3].Product + " | " + res[3].Product_Inventory + " |   " + res[3].Product_Sales + "  | ");
        console.log(" | " + res[4].Department_Name + " | " + res[4].Product + "  | " + res[4].Product_Inventory + " |   " + res[4].Product_Sales + "  | ");
        console.log(" | " + res[5].Department_Name + " | " + res[5].Product + "  | " + res[5].Product_Inventory + " |   " + res[5].Product_Sales + "  | ");
        console.log(" _____________________________________________\n");
        console.log(divider);
        allowMgr();
    });

}

function updateProduct() {
    connection.query(
        "UPDATE bamazon SET ? WHERE ?", [{

            },
            {

            }
        ],
        function(err, res) {
            console.log(res.affectedRows + " products updated!\n");
        }
    );
    allowMgr();
}