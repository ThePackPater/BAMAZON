DROP DATABASE IF EXISTS Bamazon_DB;
CREATE DATABASE Bamazon_DB;
USE Bamazon_DB;

CREATE TABLE Bamazon(
    id INTEGER(11) AUTO_INCREMENT NOT NULL,
    Department_Name VARCHAR(100),
    Product VARCHAR(50),
    Product_Inventory INT DEFAULT 00,
    Product_Price INT DEFAULT 00,
    Product_Sales INT DEFAULT 00,
    Overhead_Cost INT DEFAULT 00,
    Total_Profit INT DEFAULT 00,
    PRIMARY KEY (id)
);

INSERT INTO Bamazon (Department_Name, Product, Product_Inventory, Product_Price, Product_Sales, Overhead_Cost, Total_Profit)
VALUES ("Elvin Weapons", "LongBow", 100, 275, 0, 220, 0);
INSERT INTO Bamazon (Department_Name, Product, Product_Inventory, Product_Price, Product_Sales, Overhead_Cost, Total_Profit)
VALUES ("Elvin Weapons", "BroadSword", 100, 500, 0, 400, 0);
INSERT INTO Bamazon (Department_Name, Product, Product_Inventory, Product_Price, Product_Sales, Overhead_Cost, Total_Profit)
VALUES ("Elvin Weapons", "PoleAxe", 100, 200, 0, 160, 0);
INSERT INTO Bamazon (Department_Name, Product, Product_Inventory, Product_Price, Product_Sales, Overhead_Cost, Total_Profit)
VALUES ("Elvin Weapons", "ShortSword", 100, 300, 0, 240, 0);
INSERT INTO Bamazon (Department_Name, Product, Product_Inventory, Product_Price, Product_Sales, Overhead_Cost, Total_Profit)
VALUES ("Elvin Weapons", "BattleAxe", 100, 350, 0, 280, 0);
INSERT INTO Bamazon (Department_Name, Product, Product_Inventory, Product_Price, Product_Sales, Overhead_Cost, Total_Profit)
VALUES ("Elvin Weapons", "Dagger", 100, 125, 0, 100, 0);
INSERT INTO Bamazon (Department_Name, Product, Product_Inventory, Product_Price, Product_Sales, Overhead_Cost, Total_Profit)
VALUES ("Elvin Weapons", "WarHammer", 100, 375, 0, 300, 0);

INSERT INTO Bamazon (Department_Name, Product, Product_Inventory, Product_Price, Product_Sales, Overhead_Cost, Total_Profit)
VALUES ("Dwarvin Weapons", "LongBow", 100, 150, 0, 120, 0);
INSERT INTO Bamazon (Department_Name, Product, Product_Inventory, Product_Price, Product_Sales, Overhead_Cost, Total_Profit)
VALUES ("Dwarvin Weapons", "BroadSword", 100, 750, 0, 600, 0);
INSERT INTO Bamazon (Department_Name, Product, Product_Inventory, Product_Price, Product_Sales, Overhead_Cost, Total_Profit)
VALUES ("Dwarvin Weapons", "PoleAxe", 100, 300, 0, 240, 0);
INSERT INTO Bamazon (Department_Name, Product, Product_Inventory, Product_Price, Product_Sales, Overhead_Cost, Total_Profit)
VALUES ("Dwarvin Weapons", "ShortSword", 100, 400, 0, 320, 0);
INSERT INTO Bamazon (Department_Name, Product, Product_Inventory, Product_Price, Product_Sales, Overhead_Cost, Total_Profit)
VALUES ("Dwarvin Weapons", "BattleAxe", 100, 450, 0, 360, 0);
INSERT INTO Bamazon (Department_Name, Product, Product_Inventory, Product_Price, Product_Sales, Overhead_Cost, Total_Profit)
VALUES ("Dwarvin Weapons", "Dagger", 100, 200, 0, 160, 0);
INSERT INTO Bamazon (Department_Name, Product, Product_Inventory, Product_Price, Product_Sales, Overhead_Cost, Total_Profit)
VALUES ("Dwarvin Weapons", "WarHammer", 100, 475, 0, 380, 0);

