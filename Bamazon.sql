DROP DATABASE IF EXISTS Bamazon_DB;
CREATE DATABASE Bamazon_DB;
USE Bamazon_DB;

CREATE TABLE Bamazon(
    id INT NOT NULL AUTO_INCREMENT,
    Department_Name VARCHAR(100) NOT NULL,
    Product VARCHAR(50) NOT NULL,
    Product_Inventory INT default 0000,
    Product_Price INT default 0000,
    Product_Sales INT default 0000,
    Overhead_Cost INT default 0000,
    Total_Profit INT default 0000,
    PRIMARY KEY (id)
);

INSERT INTO Bamazon (Department_Name, Product, Product_Inventory, Product_Price, Product_Sales, Overhead_Cost, Total_Profit)
VALUES ("Elvin Weapons", "LongBow", 1000, 1500, 875, 950, 0);
INSERT INTO Bamazon (Department_Name, Product, Product_Inventory, Product_Price, Product_Sales, Overhead_Cost, Total_Profit)
VALUES ("Elvin Weapons", "BroadSword", 1000, 5000, 600, 3700, 0);
INSERT INTO Bamazon (Department_Name, Product, Product_Inventory, Product_Price, Product_Sales, Overhead_Cost, Total_Profit)
VALUES ("Elvin Weapons", "PoleAxe", 1000, 3500, 450, 2550, 0);
INSERT INTO Bamazon (Department_Name, Product, Product_Inventory, Product_Price, Product_Sales, Overhead_Cost, Total_Profit)
VALUES ("Elvin Weapons", "ShortSword", 1000, 2000, 995, 1250, 0);
INSERT INTO Bamazon (Department_Name, Product, Product_Inventory, Product_Price, Product_Sales, Overhead_Cost, Total_Profit)
VALUES ("Elvin Weapons", "BattleAxe", 1000, 2500, 647, 1950, 0);
INSERT INTO Bamazon (Department_Name, Product, Product_Inventory, Product_Price, Product_Sales, Overhead_Cost, Total_Profit)
VALUES ("Elvin Weapons", "Dagger", 1000, 3000, 750, 2800, 0);
INSERT INTO Bamazon (Department_Name, Product, Product_Inventory, Product_Price, Product_Sales, Overhead_Cost, Total_Profit)
VALUES ("Elvin Weapons", "WarHammer", 1000, 6000, 325, 4950, 0);

INSERT INTO Bamazon (Department_Name, Product, Product_Inventory, Product_Price, Product_Sales, Overhead_Cost, Total_Profit)
VALUES ("Dwarvin Weapons", "LongBow", 500, 2500, 50, 1950, 0);
INSERT INTO Bamazon (Department_Name, Product, Product_Inventory, Product_Price, Product_Sales, Overhead_Cost, Total_Profit)
VALUES ("Dwarvin Weapons", "BroadSword", 500, 6000, 350, 4700, 0);
INSERT INTO Bamazon (Department_Name, Product, Product_Inventory, Product_Price, Product_Sales, Overhead_Cost, Total_Profit)
VALUES ("Dwarvin Weapons", "PoleAxe", 500, 4500, 450, 3550, 0);
INSERT INTO Bamazon (Department_Name, Product, Product_Inventory, Product_Price, Product_Sales, Overhead_Cost, Total_Profit)
VALUES ("Dwarvin Weapons", "ShortSword", 500, 3000, 275, 2250, 0);
INSERT INTO Bamazon (Department_Name, Product, Product_Inventory, Product_Price, Product_Sales, Overhead_Cost, Total_Profit)
VALUES ("Dwarvin Weapons", "BattleAxe", 500, 3500, 500, 2950, 0);
INSERT INTO Bamazon (Department_Name, Product, Product_Inventory, Product_Price, Product_Sales, Overhead_Cost, Total_Profit)
VALUES ("Dwarvin Weapons", "Dagger", 500, 4000, 200, 3800, 0);
INSERT INTO Bamazon (Department_Name, Product, Product_Inventory, Product_Price, Product_Sales, Overhead_Cost, Total_Profit)
VALUES ("Dwarvin Weapons", "WarHammer", 500, 7000, 500, 5950, 0);

