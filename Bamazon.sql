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
VALUES ("Elvin Weapons", "LongBow", 100, 575, 0, 420, 0);
INSERT INTO Bamazon (Department_Name, Product, Product_Inventory, Product_Price, Product_Sales, Overhead_Cost, Total_Profit)
VALUES ("Elvin Weapons", "ShortSword", 100, 300, 0, 240, 0);
INSERT INTO Bamazon (Department_Name, Product, Product_Inventory, Product_Price, Product_Sales, Overhead_Cost, Total_Profit)
VALUES ("Elvin Weapons", "Dagger", 100, 125, 0, 100, 0);

INSERT INTO Bamazon (Department_Name, Product, Product_Inventory, Product_Price, Product_Sales, Overhead_Cost, Total_Profit)
VALUES ("Dwarvin Weapons", "BroadSword", 100, 650, 0, 500, 0);
INSERT INTO Bamazon (Department_Name, Product, Product_Inventory, Product_Price, Product_Sales, Overhead_Cost, Total_Profit)
VALUES ("Dwarvin Weapons", "BattleAxe", 100, 450, 0, 360, 0);
INSERT INTO Bamazon (Department_Name, Product, Product_Inventory, Product_Price, Product_Sales, Overhead_Cost, Total_Profit)
VALUES ("Dwarvin Weapons", "WarHammer", 100, 475, 0, 380, 0);

