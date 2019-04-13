DROP DATABASE IF EXISTS Bamazon_DB;
CREATE DATABASE Bamazon_DB;
USE Bamazon_DB;

CREATE TABLE Bamazon(
    id INTEGER(11) AUTO_INCREMENT NOT NULL,
    Department_Name VARCHAR(100),
    Product VARCHAR(50),
    Product_Inventory INT,
    Product_Price INT,
    Product_Sales INT,
   
    
    PRIMARY KEY (id)
);

INSERT INTO Bamazon (Department_Name, Product, Product_Inventory, Product_Price, Product_Sales)
VALUES ("Elvin Weapons", "LongBow", 10, 575, 0);
INSERT INTO Bamazon (Department_Name, Product, Product_Inventory, Product_Price, Product_Sales)
VALUES ("Elvin Weapons", "ShortSword", 10, 300, 0);
INSERT INTO Bamazon (Department_Name, Product, Product_Inventory, Product_Price, Product_Sales)
VALUES ("Elvin Weapons", "Dagger", 10, 125, 0);

INSERT INTO Bamazon (Department_Name, Product, Product_Inventory, Product_Price, Product_Sales)
VALUES ("Dwarvin Weapons", "BroadSword", 10, 650, 0);
INSERT INTO Bamazon (Department_Name, Product, Product_Inventory, Product_Price, Product_Sales)
VALUES ("Dwarvin Weapons", "BattleAxe", 10, 450, 0);
INSERT INTO Bamazon (Department_Name, Product, Product_Inventory, Product_Price, Product_Sales)
VALUES ("Dwarvin Weapons", "WarHammer", 10, 475, 0);

