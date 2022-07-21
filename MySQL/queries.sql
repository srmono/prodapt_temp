--C:\Program Files\MySQL\MySQL Server 8.0\bin
-- mysql installation
-- workbench

-- Check version
mysql -V 

-- Access MySQL  -- Command prompt  -- gui editors: 

mysql -u root -p 

-- crud operations

-- Show Database
show databases;
SHOW DATABASES;

-- Create Database
CREATE DATABASE prodapt_database;

-- use database

USE prodapt_database;

-- Show tables / LIST TABLES
SHOW TABLES;

-- create table 
--VARCHAR(M) 1 AND 255

CREATE TABLE course_list (
    course_id INT NOT NULL AUTO_INCREMENT,
    course_title VARCHAR(50) NOT NULL,
    course_author VARCHAR(40) NOT NULL,
    course_date DATE,
    PRIMARY KEY(course_id)
);

-- drop table
DROP TABLE course_list; 

-- insert one record data into table

INSERT INTO course_list (course_title, course_author, course_date) VALUES ("Java", "Venkat", NOW());

-- insert multiple records  into table

INSERT INTO course_list (course_title, course_author, course_date) 
    VALUES
    ("MySQL", "Venkat", NOW()),
    ("Angular", "Venkat", NOW()),
    ("API", "Venkat", NOW());

-- Select data from table

select * from course_list;
select course_title from course_list;

-- update records in the table

UPDATE course_list SET course_title="API Testing" WHERE course_id=4;

-- Delete query

DELETE FROM course_list  WHERE course_id=4;

-- rename table
RENAME TABLE old_table_name TO new_table_name;

ALTER TABLE course_list RENAME TO new_table_name;


RENAME TABLE course_list TO tech_stack;
-- alter tables
    -- drop colums
    -- addcolumns

-- ALTER TABLE table_name 
-- ADD 
--    new_column_name column_definition 

ALTER TABLE course_list 
ADD 
   course_score VARCHAR(100) NOT NULL; 

-- add multiple columns
ALTER TABLE course_list 
    ADD course_score VARCHAR(100) NOT NULL,
    ADD course_score_two VARCHAR(100) NOT NULL;

--describe table
describe table_name; 

-- Modify column type
ALTER TABLE course_list
    MODIFY course_score_two VARCHAR(50) NOT NULL,
    MODIFY course_title VARCHAR(100) NOT NULL;

-- Rename column name
ALTER TABLE course_list
    CHANGE COLUMN old_column_name new_column_name INT NOT NULL;

ALTER TABLE course_list
    CHANGE COLUMN course_score_two course_status INT NOT NULL;


-- delete column
ALTER TABLE course_list
    DROP COLUMN column_name;

--RelationShips--
-- FOREIGN KEY RelationShips

CREATE TABLE Orders (
    OrderID INT NOT NULL,
    OrderNumer INT NOT NULL,
    PersonID int,
    PRIMARY KEY(OrderID),
    CONSTRAINT FK_PersonOrder FOREIGN KEY(PersonID) REFERENCES Persons(PersonID)
);

-- ALTER FOREIGN KEY 
ALTER TABLE Orders 
ADD CONSTRAINT FK_PersonOrder FOREIGN KEY(PersonID) REFERENCES Persons(PersonID)

-- Drop FOREIGN KEY
ALTER TABLE Orders DROP CONSTRAINT FK_PersonOrder;

--- Import existing database 
-- inside mysql terminal

source path/mysql_file_name

source I:\Training\KValuent\Prodast\tech_stack\MySQL\mysqlsampledatabase.sql

-----------------------------

-- Query data 
--     select 
--     sort
--     filter 
--     joining 
--     group 
--     subqueries
--     set 
--     modify 


--SELECT filed_name FROM tablename;

-- FROM -> SELECT 

SELECT lastName FROM employees;

SELECT firstName, lastName, jobTitle FROM employees;

SELECT * FROM employees;

-- SELECT 

SELECT 1 + 1;

SELECT CONCAT("BVS", ' ', "RAO");

SELECT NOW();

-- column alias

-- SELECT expression AS column_alias;

SELECT CONCAT("BVS", ' ', "RAO") AS fullname;

-- Sort quries

-- FROM -> SELECT -> ORDER BY

SELECT 
    filed_names
FROM
    table_name
ORDER BY 
    column1 [asc|desc],
    column2 [asc|desc],
    ....;

-- user customer table to practce sort

--- ORDER BY lastname 

SELECT 
    contactLastName,
    contactFirstName
FROM
    customers 
ORDER BY 
    contactLastName;


SELECT 
    contactLastName,
    contactFirstName
FROM
    customers 
ORDER BY 
    contactLastName DESC;


SELECT 
    contactLastName,
    contactFirstName
FROM
    customers 
ORDER BY 
    contactLastName DESC,
    contactFirstName ASC;

-- orderdetails table 
SELECT 
    orderNumber,
    orderLineNumber,
    quantityOrdered * priceEach
FROM 
    orderdetails
ORDER BY
    quantityOrdered * priceEach DESC;

SELECT 
    orderNumber,
    orderLineNumber,
    quantityOrdered * priceEach AS subtotal
FROM 
    orderdetails
ORDER BY
    subtotal DESC;


-- status 
    -- In Progress 
    -- On Hold 
    -- Canceled 
    -- Resolved
    -- Disputed 
    -- Shipped 

SELECT 
    orderNumber, status
FROM 
    orders 
ORDER BY FIELD(status,
    "In Process",
    "On Hold",
    "Cancelled",
    "Resolved",
    "Disputed",
    "Shipped");

SELECT 
    firstName,
    lastName,
    reportsTo
FROM
    employees
ORDER BY reportsTo;

SELECT 
    firstName,
    lastName,
    reportsTo
FROM
    employees
ORDER BY reportsTo DESC;


--- Filtering data 
-- WHERE 
-- SELECT DISTINCT 
-- AND 
-- OR 
-- IN 
-- NOT IN 
-- BETWEEN 
-- LIMIT 
-- IS NULL 

-- FROM -> WHERE -> SELECT -> ORDER BY 

SELECT
    firstName,
    lastName,
    jobTitle
FROM 
    employees
WHERE
    jobTitle = "Sales Rep";
---
SELECT
    firstName,
    lastName,
    jobTitle
FROM 
    employees
WHERE
    jobTitle = "Sales Rep" AND 
    officeCode = 1;

-- 
SELECT
    firstName,
    lastName,
    jobTitle,
    officeCode
FROM 
    employees
WHERE
    jobTitle = "Sales Rep" OR 
    officeCode = 1;
---

SELECT
    firstName,
    lastName,
    jobTitle,
    officeCode
FROM 
    employees
WHERE
    jobTitle = "Sales Rep" OR 
    officeCode = 1
ORDER BY 
    officeCode,
    jobTitle;

---
SELECT
    firstName,
    lastName,
    officeCode
FROM 
    employees
WHERE
    officeCode BETWEEN 1 AND 3
ORDER BY officeCode;

---
-- LIKE clause 

SELECT
    firstName,
    lastName
FROM 
    employees
WHERE
    lastName LIKE '%son'
ORDER BY firstName;

"Tho%"
'%son'
'%att%'
"_r%"
"a_%"
"a__%"
't%n'

-- IN operator 

SELECT
    firstName,
    lastName,
    officeCode
FROM 
    employees
WHERE
    officeCode IN (1, 2, 3)
ORDER By
    officeCode;
--- 





