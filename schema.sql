-- ATTN WINDOWS USERS: Some of you might have an easier time just copying and pasting the lines below in to your mysql shell

-- YOUR CODE GOES HERE
-- CREATE YOUR DATABASE
DROP DATABASE IF EXISTS cowcowcow;
CREATE DATABASE cowcowcow;
USE cowcowcow;
-- CREATE YOUR TABLES
DROP TABLE IF EXISTS cows;
CREATE TABLE cows (
  id int AUTO_INCREMENT PRIMARY KEY,
  name TEXT,
  description TEXT
);
-- ADD RECORDS TO YOUR TABLE
INSERT INTO cows (name, description ) VALUES ('Buttercup', 'a herbaceous plant with bright yellow cup-shaped flowers, common in grassland and as a garden weed. All kinds are poisonous and generally avoided by livestock.');