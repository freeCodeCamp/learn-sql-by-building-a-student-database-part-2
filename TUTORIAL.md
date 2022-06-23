# Learn SQL by Building a Student Database: Part 2

> Welcome to Part 2 of the Build a Student Database Lessons!

## 10. Start the Terminal

### 10.1

**The first thing you need to do is start the terminal.** Do that by clicking the "hamburger" menu at the top left of the screen, going to the "terminal" section, and clicking "new terminal". Once you open a new one, type `echo hello SQL` into the terminal and press enter.

#### HINTS

- Capitalization matters
- If the tests don't run automatically, try typing `exit` into the terminal and redoing the instructions

## 20. psql login

### 20.1

In Part 1 of this tutorial, you created a `students` database and then a script to insert information about your computer science students into it. Log into the psql interactive terminal with `psql --username=freecodecamp --dbname=postgres` to see if it's here.

#### HINTS

- Type `psql --username=freecodecamp --dbname=postgres` into the terminal and press enter

## 30. \l

### 30.1

List the databases.

#### HINTS

- Use the **l**ist shortcut command
- It's the `\l` command
- Type `\l` into the psql prompt and press enter
- Enter `psql --username=freecodecamp --dbname=postgres` in the terminal to log into the psql prompt if you aren't already

## 40. rebuild database

### 40.1

Your database isn't here. You can use the `.sql` file you created at the end of Part 1 to rebuild it. I recommend "splitting" the terminal. You can do that by clicking the "hamburger" menu at the top left of the window, going to the "Terminal" menu, and clicking "Split Terminal". Once you've done that, enter `psql -U postgres < students.sql` in it to rebuild the database.

#### HINTS

- Enter the suggested command in the terminal
- Make sure you are in the `project` folder first

## 50. \l

### 50.1

A lot of stuff happened in the terminal. That looks promising. In the psql prompt, view the databases again.

#### HINTS

- Use the **l**ist shortcut command
- It's the `\l` command
- Type `\l` into the psql prompt and press enter
- Enter `psql --username=freecodecamp --dbname=postgres` in the terminal to log into the psql prompt if you aren't already

## 60. \c students

### 60.1

There's your `students` database. Connect to it.

#### HINTS

- Use the **c**onnect shortcut command with the database name after it
- It's the `\c` command
- Here's an example `\c <database>`
- Type `\c students` into the psql prompt and press enter
- Enter `psql --username=freecodecamp --dbname=postgres` in the terminal to log into the psql prompt if you aren't already

## 70. \d

### 70.1

Now that you're connected. Display the tables and relations that are here to see if it's all correct.

#### HINTS

- Use the **d**isplay shortcut command
- It's the `\d` command
- Type `\d` into the psql prompt and press enter
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 80. \d students

### 80.1

That all looks right. View the details of the `students` table to make sure the stucture is right.

#### HINTS

- Use the **d**isplay shortcut command with the table name after it
- It's the `\d` command
- Here's an example: `\d <table_name>`
- Type `\d students` into the psql prompt and press enter
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 90. select * from students

### 90.1

Looks good. Make sure all the data is in the table, as well.

#### HINTS

- View all the data in the `students` table
- Use the `SELECT` and `FROM` keywords with `*` to view all the columns
- Here's an example: `SELECT <columns> FROM <table_name>`;
- Type `SELECT * FROM students;` into the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 1220. touch student_info.sh

### 1220.1

The data is all there. You should take a look at the details of the other tables and the data in them to make sure they look good. When you are done, use `touch` in the bash terminal to create `student_info.sh`. You are going to make a script to print info about your students.

#### HINTS

- Here's an example: `touch <filename>`
- Enter `touch student_info.sh` in the terminal
- The bash terminal, not the psql one
- Make sure you are in the `project` folder first

## 1230. chmod +x student_info.sh

### 1230.1

Give your new file executable permissions.

#### HINTS

- It's the `chmod` command with the `+x` flag
- Here's an example: `chmod +x <filename>`
- Type `chmod +x student_info.sh` in the terminal and press enter

## 1240. Add shebang

### 1240.1

Add a shebang that uses bash at the top of your new script.

#### HINTS

- The shebang you want is `#!/bin/bash`
- Add `#!/bin/bash` to your `student_info.sh` file

## 1250. Add comment

### 1250.1

Below the shebang, add a comment that says `Info about my computer science students from students database`.

#### HINTS

- Make sure it's a single line comment
- A comment look like this: `# <comment>`
- Add `# Info about my computer science students from students database` below the "shebang" in your `student_info.sh` file

## 1260. Add echo title

### 1260.1

In the new script, use `echo` to print `~~ My Computer Science Students ~~`. Use the `-e` flag with it to put a new line at the beginning and end of the text.

#### HINTS

- The new line character is `\n`
- Here's an example: `echo -e "\n<text>\n"`
- Add `echo -e "\n~~ My Computer Science Students ~~\n"` below the comment in your `student_info.sh` file

## 1265. ./student_info.sh

### 1265.1

Run the script to make sure it's working.

#### HINTS

- Run your `student_info.sh` script by executing it
- Type `./student_info.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 1270. Add PSQL Variable

### 1270.1

You will want to query the database again to get info about the students to display. Add the same `PSQL` variable you use in your `insert_data.sh` script. It looked like this: `PSQL="psql -X --username=freecodecamp --dbname=students --no-align --tuples-only -c"`

#### HINTS

- Add the suggested variable at the bottom of the `student_info.sh` file

## 1280. Add echo students with 4.0

### 1280.1

Below the PSQL variable you just added, use `echo` to print `First name, last name, and GPA of students with a 4.0 GPA:`. Use the `-e` flag to put a new line at the beginning of the sentence.

#### HINTS

- The new line character is `\n`
- Here's an example of the command: `echo -e "\n<text_here>"`
- At the bottom of the `student_info.sh` file, add this:
```sh
echo -e "\nFirst name, last name, and GPA of students with a 4.0 GPA:"
```

## 1290. psql SELECT * FROM students

### 1290.1

You will want to print what that sentence is asking for. You should know how to make that query, but lets practice a little first. `SQL` stands for "Structured Query Language". It's the language you have been using to manage your relational databases. In the psql prompt, view all the data in the students table like you have done many times.

#### HINTS

- Use the `SELECT` and `FROM` keywords with `*` to view all the data
- Enter `SELECT * FROM students;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 1300. psql SELECT first_name

### 1300.1

You should look at the column titles that were returned. The `*` gets all columns in a table with your query. You can return specific columns by putting the column name in the query instead of `*`. In the psql prompt, view just the `first_name` column from the `students` table.

#### HINTS

- Use the `SELECT` and `FROM` keywords
- Here's an example: `SELECT <column_name> FROM <table_name>;`
- Enter `SELECT first_name FROM students;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 1310. psql SELECT first_name, last_name, gpa

### 1310.1

Just the `first_name` column was returned that time. You can specify as many columns you want returned by separating them with commas. View the `first_name`, `last_name` and `gpa` columns from the `students` table.

#### HINTS

- Use the `SELECT` and `FROM` keywords
- Here's an example: `SELECT <column_1>, <column_2>, FROM <table_name>;`
- Enter `SELECT first_name, last_name, gpa FROM students;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already
- Don't filter any rows

## 1320. psql SELECT WHERE gpa < 2.5

### 1320.1

You can return only rows you want by adding `WHERE <condition>` to your query. A condition can consist of a column, an operator, and a value. Use one of these to view the same columns as before but only rows `WHERE gpa < 2.5`.

#### HINTS

- Here's an example: `SELECT <columns> FROM <table_name> WHERE <condition>;`
- The previous command you used was `SELECT first_name, last_name, gpa FROM students;`
- The condition you want is `WHERE gpa < 2.5`
- Enter `SELECT first_name, last_name, gpa FROM students WHERE gpa < 2.5;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 1330. psql SELECT WHERE gpa >= 3.8

### 1330.1

The `<` only return rows where the `gpa` column was less than `2.5`. Some other operators are: `<`, `>`, `<=`, `>=`. View the same columns, but only rows for students with a `gpa` greater than or equal to `3.8`.

#### HINTS

- The greater than or equal to operator is `>=`
- Here's an example: `SELECT <columns> FROM <table_name> WHERE <condition>;`
- The previous command you used was `SELECT first_name, last_name, gpa FROM students WHERE gpa < 2.5;`
- The condition you want here is `WHERE gpa >= 3.8`
- Enter `SELECT first_name, last_name, gpa FROM students WHERE gpa >= 3.8;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 1340. psql SELECT WHERE != 4.0

### 1340.1

That only returned students with a GPA of 3.8 or better. There's equal (`=`) and not equal (`!=`) operators as well. View the same columns for students that don't have a 4.0 gpa.

#### HINTS

- Use the not equal (`!=`) operator
- The previous command you used was `SELECT first_name, last_name, gpa FROM students WHERE gpa >= 3.8;`
- The condition you want here is `WHERE gpa != 4.0`
- Enter `SELECT first_name, last_name, gpa FROM students WHERE gpa != 4.0;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 1360. Add echo query result

### 1360.1

The right query will get you only the data you are looking for. Back in your `student_info.sh` file, add an `echo` command to the bottom that prints what the sentence above it asks for. Place double quotes around it like this: `echo "$($PSQL "<query_here>")"`. This will make it so the output isn't all on one line.

#### HINTS

- Add `echo "$($PSQL "<query_here>")"` to the bottom of the `student_info.sh` file, except with the correct query in it
- You previously used, `SELECT first_name, last_name, gpa FROM students WHERE gpa != 4.0;` in the psql prompt
- The condition you want here is `WHERE gpa = 4.0`
- Practice the query in the psql prompt to make sure it's getting what you want
- If you run your script, the last echo statement should print:
```sh
Casares|Hijo|4.0
Vanya|Hassanah|4.0
Dejon|Howell|4.0
```
- Add `echo "$($PSQL "SELECT first_name, last_name, gpa FROM students WHERE gpa = 4.0")"` to the bottom of the `student_info.sh` file

## 1370. ./student_info.sh

### 1370.1

Run the script to see your students with the highest GPA's.

#### HINTS

- Run your `student_info.sh` script by executing it
- Type `./student_info.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 1380. Add echo courses before D

### 1380.1

Add another `echo` statement at the bottom of the script. Make it print `All course names whose first letter is before 'D' in the alphabet:`. Put a new line in front of it like the first sentence.

#### HINTS

- Use `echo` with the `-e` flag and a new line character
- The new line character is `\n`
- Here's an example of the command: `echo -e "\n<text_here>"`
- At the bottom of the `student_info.sh` file, add this:
```sh
echo -e "\nAll course names whose first letter is before 'D' in the alphabet:"
```

## 1390. psql SELECT * FROM majors

### 1390.1

Practice first. In the psql prompt, view all the data in the `majors` table.

#### HINTS

- Use the `SELECT` and `FROM` keywords with `*` to view all the data
- Enter `SELECT * FROM majors;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 1400. psql SELECT WHERE major = Game Design

### 1400.1

The operators you used with numbers in the last section can be used on text as well. Use the `=` to view all majors named `Game Design`. Don't forget that You need single quotes around text values.

#### HINTS

- Use the `SELECT`, `FROM`, and `WHERE` keywords with `*` to view the suggested rows
- Here's an example: `SELECT <columns> FROM <table> WHERE <condition>;`
- The condition you want is `major = 'Game Design'`
- Enter `SELECT * FROM majors WHERE major = 'Game Design';` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 1410. psql SELECT WHERE major != Game Design

### 1410.1

Next, view all the rows not equal to `Game Design`.

#### HINTS

- The not equal operator is `!=`
- Use the `SELECT`, `FROM`, and `WHERE` keywords with `*` to view the suggested rows
- Here's an example: `SELECT <columns> FROM <table> WHERE <condition>;`
- The condition you want is `major != 'Game Design'`
- Enter `SELECT * FROM majors WHERE major != 'Game Design';` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 1420. psql SELECT WHERE major > Game Design

### 1420.1

Use the greater than operator to see majors that come after it alphabetically.

#### HINTS

- The greater than operator is `>`
- You want to see what rows are `> 'Game Design'`
- Use the `SELECT`, `FROM`, and `WHERE` keywords with `*` to view the suggested rows
- Here's an example: `SELECT <columns> FROM <table> WHERE <condition>;`
- The condition you want is `major > 'Game Design'`
- Enter `SELECT * FROM majors WHERE major > 'Game Design';` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 1430. psql SELECT WHERE major >= Game Design

### 1430.1

`Game Design` was not included in the results because it is not `> 'Game Design'`. Try it with the greater than or equal to operator.

#### HINTS

- The greater than or equal to operator is `>=`
- You want to see what rows are `>= 'Game Design'`
- Use the `SELECT`, `FROM`, and `WHERE` keywords with `*` to view the suggested rows
- Here's an example: `SELECT <columns> FROM <table> WHERE <condition>;`
- The condition you want is `major >= 'Game Design'`
- Enter `SELECT * FROM majors WHERE major >= 'Game Design';` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 1440. psql SELECT WHERE major < G

### 1440.1

It included `Game Design` in the results that time. So if you want to see results that start with a `G` or after, you could use `major >= 'G'`. View the majors that come before `G`.

#### HINTS

- Use the less than (`<`) operator to see rows that come before `G`
- Use the `SELECT`, `FROM`, and `WHERE` keywords with `*` to view the suggested rows
- Here's an example: `SELECT <columns> FROM <table> WHERE <condition>;`
- The condition you want is `major < 'G'`
- Enter `SELECT * FROM majors WHERE major < 'G';` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 1450. Add echo query result

### 1450.1

In your script, add an `echo` at the bottom to print the suggested info like you did before. Make sure to use double quotes where needed.

#### HINTS

- Add `echo "$($PSQL "<query_here>")"` to the bottom of the `student_info.sh` file, except with the correct query in it
- You previously used, `SELECT * FROM majors WHERE major < 'G';` in the psql prompt
- The condition you want here is `WHERE course < 'D'`
- You only want to get the `course` column from the `courses` table
- Practice the query in the psql prompt to make sure it's getting what you want
- If you run your script, the last echo statement should print:
```sh
Computer Networks
Computer Systems
Artificial Intelligence
Calculus
Algorithms
```
- Add `echo "$($PSQL "SELECT course FROM courses WHERE course < 'D'")"` to the bottom of the `student_info.sh` file

## 1460. ./student_info.sh

### 1460.1

Run the script to see what course names come before the letter `D`.

#### HINTS

- Run your `student_info.sh` script by executing it
- Type `./student_info.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 1470. Add echo students after R with gpa above 3.8 or below 2.0 

### 1470.1

Looks like there is five of them. Add another sentence like the others that says: `First name, last name, and GPA of students whose last name begins with an 'R' or after and have a GPA greater than 3.8 or less than 2.0:`

#### HINTS

- At the bottom of the file, use `echo` with the `-e` flag and a new line character again to print the suggested sentence
- The new line character is `\n`
- Here's an example of the command: `echo -e "\n<text_here>"`
- At the bottom of the `student_info.sh` file, add this:
```sh
echo -e "\nFirst name, last name, and GPA of students whose last name begins with an 'R' or after and have a GPA greater than 3.8 or less than 2.0:"
```

## 1480. psql SELECT * FROM students

### 1480.1

To find that, start by using the psql prompt to view all the data in the `students` table.

#### HINTS

- Use the `SELECT` and `FROM` keywords with `*` to view all the data
- Enter `SELECT * FROM students;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 1490. psql SELECT WHERE last_name < M

### 1490.1

It returned 31 rows. Use the same command, but only return the rows for students whose last name comes before `M` in the alphabet.

#### HINTS

- Use the less than (`<`) operator to see rows that come before `M`
- Use the `SELECT`, `FROM`, and `WHERE` keywords with `*` to view the suggested rows
- Here's an example: `SELECT <columns> FROM <table> WHERE <condition>;`
- The condition you want is `last_name < 'M'`
- Enter `SELECT * FROM students WHERE last_name < 'M';` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 1500. SELECT WHERE last_name < M OR gpa = 3.9

### 1500.1

That returned 18 rows. You can use multiple conditions after `WHERE` with `AND` or `OR`, among others. Just add the keyword and another condition. In the psql prompt, use the same command as before, but add an `OR` to also return rows of students with a 3.9 GPA.

#### HINTS

- The previous command was: `SELECT * FROM students WHERE last_name < 'M';`
- Here's an example of the `WHERE` part: `WHERE <condition_1> OR <condition_2>`
- Add an `OR <condition>` to the previous command
- The condition you want to add is `OR gpa = 3.9`
- The whole condition is `WHERE last_name < 'M' OR gpa = 3.9`
- Enter `SELECT * FROM students WHERE last_name < 'M' OR gpa = 3.9;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 1510. psql SELECT WHERE last_name < M AND gpa = 3.9

### 1510.1

It showed rows where one of the conditions was true, there was one more than last time. Enter the previous command, but use `AND` to view only students that meet both conditions.

#### HINTS

- The previous command was: `SELECT * FROM students WHERE last_name < 'M' OR gpa = 3.9;`
- Here's an example of the `WHERE` part: `WHERE <condition_1> AND <condition_2>`
- Enter `SELECT * FROM students WHERE last_name < 'M' AND gpa = 3.9;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 1520. psql SELECT WHERE last_name < M AND gpa = 3.9 OR gpa < 2.3

### 1520.1

Now it only shows rows where both conditions are true, one person. Enter the previous command, but add a third condition of `OR gpa < 2.3`.

#### HINTS

- The previous command was: `SELECT * FROM students WHERE last_name < 'M' OR gpa = 3.9;`
- Here's an example of the `WHERE` part: `WHERE <condition_1> AND <condition_2> OR <condition_2>`
- The conditions look like this: `WHERE last_name < 'M' AND gpa = 3.9 OR gpa < 2.3;`
- Enter `SELECT * FROM students WHERE last_name < 'M' AND gpa = 3.9 OR gpa < 2.3;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 1530. psql SELECT WHERE last_name < M AND (gpa = 3.9 OR gpa < 2.3)

### 1530.1

This showed all students whose GPA is less than 2.3 because the final `OR` condition was true for them. It didn't matter what their last name started with. You can group conditions together with parenthesis like this: `WHERE <condition_1> AND (<condition_2> OR <condition_2>)`. This would only return rows where `<condition_1>` is true and one of the others is true. View students whose last name is before `M` that have a GPA of 3.9 or less than 2.3.

#### HINTS

- The previous command was: `SELECT * FROM students WHERE last_name < 'M' OR gpa = 3.9 OR gpa < 2.3;`
- Enter the previous command but group your conditions with parenthesis to only view the suggested rows
- Enter `SELECT * FROM students WHERE last_name < 'M' AND (gpa = 3.9 OR gpa < 2.3);` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 1540. Add echo query result

### 1540.1

Two students meet those conditions. Back in the student info file, add an echo command at the bottom to print the suggested rows.

#### HINTS

- Add `echo "$($PSQL "<query_here>")"` to the bottom of the `student_info.sh` file, except with the correct query in it
- You previously used `SELECT * FROM students WHERE last_name < 'M' AND (gpa = 3.9 OR gpa < 2.3);` in the psql prompt
- Practice the query in the psql prompt to make sure it's getting what you want
- The conditions should be `last_name >= 'R' AND (gpa > 3.8 OR gpa < 2.0)`
- If you run your script, the last echo statement should print:
```sh
Efren|Reilly|3.9
Mariana|Russel|1.8
Mehdi|Vandenberghe|1.9
```
- Add `echo "$($PSQL "SELECT first_name, last_name, gpa FROM students WHERE last_name >= 'R' AND (gpa > 3.8 OR gpa < 2.0)")"` to the bottom of the `student_info.sh` file

## 1550. ./student_info

### 1550.1

Run the script to see the results.

#### HINTS

- Run your `student_info.sh` script by executing it
- Type `./student_info.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 1560. Add echo students containing sa or r as second to last letter

### 1560.1

Moving along. Add another `echo` command, like the others, with a sentence that says: `Last name of students whose last name contains a case insensitive 'sa' or have an 'r' as the second to last letter:`

#### HINTS

- At the bottom of the file, use `echo` with the `-e` flag and a new line character again to print the suggested sentence
- The new line character is `\n`
- Here's an example of the command: `echo -e "\n<text_here>"`
- At the bottom of the `student_info.sh` file, add this:
```sh
echo -e "\nLast name of students whose last name contains a case insensitive 'sa' or have an 'r' as the second to last letter:"
```

## 1570. psql SELECT * FROM courses

### 1570.1

Start by viewing everything from the `courses` table in the psql prompt to see how you might be able to find this out.

#### HINTS

- Use the `SELECT` and `FROM` keywords with `*` to view all the data
- Enter `SELECT * FROM courses;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 1580. psql SELECT WHERE course LIKE _lgorithms

### 1580.1

There's a few that contain the word `Algorithms`. You can use `LIKE` to find patterns in text like this: `WHERE <column> LIKE '<pattern>'`. An underscore (`_`) in a pattern will return rows that have any character in that spot. View the rows in this table with a course name that matches the pattern `'_lgorithms'`.

#### HINTS

- Here's an example: `SELECT * FROM courses WHERE course LIKE '<pattern>';`
- Enter `SELECT * FROM courses WHERE course LIKE '_lgorithms';` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 1590. psql SELECT WHERE course LIKE %lgorithms

### 1590.1

That pattern matched only rows that had exactly one character, followed by `lgorithms`. Another pattern character is `%`. It means anything can be there. To find names that start with `W`, you could use `W%`. View the courses that end in `lgorithms`.

#### HINTS

- Use `LIKE` and a pattern with `%` to view the courses ending in `lgorithms`
- Here's an example: `SELECT * FROM courses WHERE course LIKE '<pattern>';`
- The pattern you want is `%lgorithms`
- Enter `SELECT * FROM courses WHERE course LIKE '%lgorithms';` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 1600. psql SELECT WHERE course LIKE Web%

### 1600.1

It found two that time. Try viewing courses that start with `Web`.

#### HINTS

- Use `LIKE` and a pattern with `%` to view the courses starting with `Web`
- Here's an example: `SELECT * FROM courses WHERE course LIKE '<pattern>';`
- The pattern you want is `Web%`
- Enter `SELECT * FROM courses WHERE course LIKE 'Web%';` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 1610. psql SELECT WHERE course LIKE _e%

### 1610.1

Combine the two pattern matching characters to show courses that have a second letter of `e`.

#### HINTS

- Use `LIKE` and a pattern with `_` and `%` to view the courses whose second letter is `e`
- Here's an example: `SELECT * FROM courses WHERE course LIKE '<pattern>';`
- Remember that the `_` will match any single character and `%` will match any number of characters
- The pattern you want is `_e%`
- Enter `SELECT * FROM courses WHERE course LIKE '_e%';` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 1620. psql SELECT WHERE course LIKE % %

### 1620.1

Nice job! Try viewing the courses with a space in their names.

#### HINTS

- Use `LIKE` and a pattern with two `%` to view the courses with a space
- Here's an example: `SELECT * FROM courses WHERE course LIKE '<pattern>';`
- The pattern you want is `% %`
- Enter `SELECT * FROM courses WHERE course LIKE '% %';` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 1630. psql SELECT WHERE course NOT LIKE % %

### 1630.1

There they are. You can use `NOT LIKE` to find things that don't match a pattern. View courses that don't contain a space.

#### HINTS

- Use `NOT LIKE` and a pattern with two `%`'s to view the courses without a space
- Here's an example: `SELECT * FROM courses WHERE course NOT LIKE '<pattern>';`
- The pattern you want is `% %`
- Enter `SELECT * FROM courses WHERE course NOT LIKE '% %';` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 1640. psql SELECT WHERE course LIKE %A%

### 1640.1

Five courses without a space. Try finding the ones that contain an `A`.

#### HINTS

- Use `LIKE` and a pattern with two `%`'s to view the courses containing `A`
- Here's an example: `SELECT * FROM courses WHERE course LIKE '<pattern>';`
- The pattern you want is `%A%`
- Enter `SELECT * FROM courses WHERE course LIKE '%A%';` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 1650. psql SELECT WHERE course ILIKE %A%

### 1650.1

6 rows. This showed all the courses with a capital `A`. `ILIKE` will ignore the case of the letters when matching. Use it to see the courses with an `A` or `a`.

#### HINTS

- Use `ILIKE` and a pattern with two `%`'s to view the courses containing `A` in any case
- Here's an example: `SELECT * FROM courses WHERE course ILIKE '<pattern>';`
- The pattern you want is `%A%`
- Enter `SELECT * FROM courses WHERE course ILIKE '%A%';` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 1670. psql SELECT WHERE course NOT ILIKE %a%

### 1670.1

It found 11 rows that time. You can put `NOT` in front of `ILIKE` as well. Use it to see the courses that don't contain an `A` or `a`.

#### HINTS

- Use `NOT ILIKE` and a pattern with two `%`'s to view the courses not containing `A` in any case
- Here's an example: `SELECT * FROM courses WHERE course NOT ILIKE '<pattern>';`
- The pattern you want is `%A%`
- Enter `SELECT * FROM courses WHERE course NOT ILIKE '%A%';` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 1680. psql SELECT WHERE course NOT ILIKE %A% AND LIKE % %

### 1680.1

You combine these like any other conditions. View the courses that don't have a capital or lowercase `A` and have a space.

#### HINTS

- Use two conditions, one with `NOT ILIKE` and one with `LIKE`
- Here's an example: `SELECT * FROM courses WHERE course NOT ILIKE '<pattern>' AND course LIKE <pattern> ;`
- The two patterns you want are `%A%` and `% %`
- Enter `SELECT * FROM courses WHERE course NOT ILIKE '%A%' AND course LIKE '% %';` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 1690. Add echo query result

### 1690.1

In your student info script, add an `echo` statement at the bottom like the other to print the results of the suggested query.

#### HINTS

- Add `echo "$($PSQL "<query_here>")"` to the bottom of the `student_info.sh` file, except with the correct query in it
- You previously used `SELECT * FROM courses WHERE course NOT ILIKE '%A%' AND course LIKE '% %';` in the psql prompt
- Practice the query in the psql prompt to make sure it's getting what you want
- The conditions should be `last_name ILIKE '%sa%' OR last_name LIKE %r_`
- If you run your script, the last echo statement should print:
```sh
Gilbert
Savage
Saunders
Hilpert
Hassanah
```
- Add `echo "$($PSQL "SELECT last_name FROM students WHERE last_name ILIKE '%sa%' OR last_name LIKE '%r_'")"` to the bottom of the `student_info.sh` file

## 1700. ./student_info.sh

### 1700.1

Run the script to see the results.

#### HINTS

- Run your `student_info.sh` script by executing it
- Type `./student_info.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 1710. Add echo students without major begin with D or gpa > 3.0

### 1710.1

Looks like five students meet those conditions. Add another `echo` command at the bottom, like the others. Make this one say: `First name, last name, and GPA of students who have not selected a major and either their first name begins with 'D' or they have a GPA greater than 3.0:`

#### HINTS

- At the bottom of the file, use `echo` with the `-e` flag and a new line character again to print the suggested sentence
- The new line character is `\n`
- Here's an example of the command: `echo -e "\n<text_here>"`
- At the bottom of the `student_info.sh` file, add this:
```sh
echo -e "\nFirst name, last name, and GPA of students who have not selected a major and either their first name begins with 'D' or they have a GPA greater than 3.0:"
```

## 1715. psql SELECT * FROM students

### 1715.1

Start by looking at all the data in the students table.

#### HINTS

- Use the `SELECT` and `FROM` keywords with `*` to view all the data
- Enter `SELECT * FROM students;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 1720. psql SELECT * FROM students WHERE gpa IS NULL

### 1720.1

All the fields that are empty or blank are `null`. You can access them using `IS NULL` as a condition like this: `WHERE <column> IS NULL`. View the students who don't have a GPA.

#### HINTS

- Use the `SELECT`, `FROM`, `WHERE`, and `IS NULL` keywords with `*` to view the suggested rows
- Here's an example: `SELECT <columns> FROM <table> WHERE <condition>;`
- The condition you want is `gpa IS NULL`
- Enter `SELECT * FROM students WHERE gpa IS NULL;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 1730. psql SELECT WHERE gpa IS NOT NULL

### 1730.1

Inversely, you can use `IS NOT NULL` to see rows that aren't null. View all the info on students that do have a GPA.

#### HINTS

- Use the `SELECT`, `FROM`, `WHERE`, and `IS NOT NULL` keywords with `*` to view the suggested rows
- Here's an example: `SELECT <columns> FROM <table> WHERE <condition>;`
- The condition you want is `gpa IS NOT NULL`
- Enter `SELECT * FROM students WHERE gpa IS NOT NULL;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 1740. psql SELECT WHERE major IS NULL

### 1740.1

View all the info on students who haven't chosen a major.

#### HINTS

- A null `major_id` field means that student hasn't chosen a major
- Use the `SELECT`, `FROM`, `WHERE`, and `IS NULL` keywords with `*` to view the suggested rows
- Here's an example: `SELECT <columns> FROM <table> WHERE <condition>;`
- The condition you want is `major_id IS NULL`
- Enter `SELECT * FROM students WHERE major_id IS NULL;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 1750. psql SELECT WHERE major IS NULL and gpa IS NOT NULL

### 1750.1

View the students who don't have a major, but don't include students without a GPA.

#### HINTS

- Use the `SELECT`, `FROM`, `WHERE`, `IS NULL`, `AND` and `IS NOT NULL` keywords with `*` to view the suggested rows
- Here's an example: `SELECT <columns> FROM <table> WHERE <condition_1> AND <condition_2>;`
- The condition you want is `major_id IS NULL AND gpa IS NOT NULL`
- Enter `SELECT * FROM students WHERE major_id IS NULL AND gpa IS NOT NULL;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 1760. psql SELECT WHERE major_id IS NULL AND gpa IS NULL

### 1760.1

One more. View the students who don't have a major and gpa.

#### HINTS

- Use the `SELECT`, `FROM`, `WHERE`, `IS NULL`, and `AND` keywords with `*` to view the suggested rows
- Here's an example: `SELECT <columns> FROM <table> WHERE <condition_1> AND <condition_2>;`
- The condition you want is `major_id IS NULL AND gpa IS NULL`
- Enter `SELECT * FROM students WHERE major_id IS NULL AND gpa IS NULL;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 1770. Add echo query result

### 1770.1

In your script, add an `echo` command at the bottom to print the results the sentence is looking for.

#### HINTS

- Add `echo "$($PSQL "<query_here>")"` to the bottom of the `student_info.sh` file, except with the correct query in it
- Practice the query in the psql prompt to make sure it's getting what you want
- You will need to use the `SELECT`, `FROM`, `WHERE`, `IS NULL`, `AND`, `LIKE`, and `OR` keywords
- If you run your script, the last echo statement should print:
```sh
Noe|Savage|3.6
Danh|Nhung|2.4
Hugo|Duran|3.8
```
- You previously used `SELECT * FROM students WHERE last_name < 'M' AND (gpa = 3.9 OR gpa < 2.3);` in the psql prompt
- Here's an example of the conditions you want: `WHERE <condition_1> AND (<condition_2> OR <condition_3>)`
- The conditions should look like this: `WHERE major_id IS NULL AND (first_name LIKE 'D%' OR gpa > 3.0)`
- Add `echo "$($PSQL "SELECT first_name, last_name, gpa FROM students WHERE major_id IS NULL AND (first_name LIKE 'D%' OR gpa > 3.0)")"` to the bottom of the `student_info.sh` file

## 1780. ./student_info.sh

### 1780.1

Run the script to see the students that meet those conditions.

#### HINTS

- Run your `student_info.sh` script by executing it
- Type `./student_info.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 1790. Add echo first five courses

### 1790.1

There's three of them. Add another sentence, like the others that says `Course name of the first five courses, in reverse alphabetical order, that have an 'e' as the second letter or end with an 's':`

#### HINTS

- At the bottom of the file, use `echo` with the `-e` flag and a new line character again to print the suggested sentence
- The new line character is `\n`
- Here's an example of the command: `echo -e "\n<text_here>"`
- At the bottom of the `student_info.sh` file, add this:
```sh
echo -e "\nCourse name of the first five courses, in reverse alphabetical order, that have an 'e' as the second letter or end with an 's':"
```

## 1800. psql SELECT students ORDER BY gpa

### 1800.1

You can specify the order you want your results to be in by adding `ORDER BY <column_name>` at the end of a query. In the psql prompt, view all the info in the `students` table in order by the GPA's.

#### HINTS

- Use the `SELECT`, `FROM`, `WHERE`, and `ORDER BY` keywords with `*` to view the suggested rows
- Here's an example: `SELECT <columns> FROM <table> ORDER BY <column>;`
- You want to use `ORDER BY gpa` at the end of the query
- Enter `SELECT * FROM students ORDER BY gpa;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 1810. psql SELECT students ORDER BY gpa DESC

### 1810.1

That put the lowest GPA's at the top. When using `ORDER BY`, it will be in ascending (`ASC`) order by default. Add `DESC` (descending) at the end of the last query to put the highest ones at the top.

#### HINTS

- The last command was `SELECT * FROM students ORDER BY gpa;`
- Add `DESC` to the end of the last command
- Enter `SELECT * FROM students ORDER BY gpa DESC;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 1820. psql SELECT students ORDER BY gpa DESC, first_name

### 1820.1

Now, the highest GPA's are at the top. You can add more columns to the order by separating them with a comma like this: `ORDER BY <column_1>, <column_2>`. Any matching values in the first ordered column will then be ordered by the next. View all the student info with the highest GPA's at the top, and in alphabetical order by `first_name` if the GPA's match.

#### HINTS

- Here's an example: `SELECT <columns> FROM <table> ORDER BY <column_1> DESC, <column_2>;`
- You want to use `ORDER BY gpa DESC, first_name` for the order
- Enter `SELECT * FROM students ORDER BY gpa DESC, first_name;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 1830. psql SELECT students ORDER BY gpa DESC, first_name LIMIT 10

### 1830.1

Many times, you only want to return a certain number of rows. You can add `LIMIT <number>` at the end of the query to only get the amount you want. View the students in the same order as the last command, but only return the first 10 rows.

#### HINTS

- The last command was `SELECT * FROM students ORDER BY gpa DESC, first_name;`
- Add `LIMIT 10` to the end of the last command
- Enter `SELECT * FROM students ORDER BY gpa DESC, first_name LIMIT 10;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 1835. psql SELECT students WHERE gpa IS NOT NULL ORDER BY gpa DESC, first_name LIMIT 10

### 1835.1

The order of the keywords in your query matters. You cannot put `LIMIT` before `ORDER BY`, or either of them before `WHERE`. View the same number of students, in the same order, but don't get the ones who don't have a GPA. 

#### HINTS

- The last command was `SELECT * FROM students ORDER BY gpa DESC, first_name LIMIT 10;`
- The keywords you want are `SELECT`, `FROM`, `WHERE`, `IS NOT NULL`, `ORDER BY`, and `LIMIT`, in that order
- Here's an example: `SELECT <columns> FROM <table> WHERE <condition> ORDER BY <column> LIMIT <number>;`
- The condition you want is `gpa IS NOT NULL`
- Enter `SELECT * FROM students WHERE gpa IS NOT NULL ORDER BY gpa DESC, first_name LIMIT 10;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 1840. Add echo query result

### 1840.1

In your script, add the `echo` command to print the rows the sentence is asking for.

#### HINTS

- Add `echo "$($PSQL "<query_here>")"` to the bottom of the `student_info.sh` file, except with the correct query in it
- If you run your script, the last echo statement should print:
```sh
Web Programming
Web Applications
Server Administration
Network Security
Database Systems
```
- Practice the query in the psql prompt to make sure it's getting what you want
- You will need the `SELECT`, `FROM`, `WHERE`, `LIKE`, `OR`, `ORDER BY`, `DESC`, and `LIMIT` keywords
- Add `echo "$($PSQL "SELECT course FROM courses WHERE course LIKE '_e%' OR course LIKE '%s' ORDER BY course DESC LIMIT 5")"` to the bottom of the `student_info.sh` file

## 1850. ./student_info.sh

### 1850.1

Run the script to see the courses.

#### HINTS

- Run your `student_info.sh` script by executing it
- Type `./student_info.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 1860. Add echo average GPA to two decimal places

### 1860.1

:sunglasses: Add another `echo` command at the bottom of the script like the others. Make this one say, `Average GPA of all students rounded to two decimal places:`

#### HINTS

- At the bottom of the file, use `echo` with the `-e` flag and a new line character again to print the suggested sentence
- The new line character is `\n`
- Here's an example of the command: `echo -e "\n<text_here>"`
- At the bottom of the `student_info.sh` file, add this:
```sh
echo -e "\nAverage GPA of all students rounded to two decimal places:"
```

## 1870. psql SELECT MIN(gpa)

### 1870.1

There's a number of mathematic functions to use with numerical columns. One of them is `MIN`, you can use it when selecting a column like this: `SELECT MIN(<column>) FROM <table>`. It will find the lowest value in the column. In the psql prompt, view the lowest value in the `gpa` column of the `students` table.

#### HINTS

- Enter `SELECT MIN(gpa) FROM students;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 1880. psql SELECT MAX(gpa)

### 1880.1

Another one is `MAX`, use it to see the largest `gpa` of the same table.

#### HINTS

- You previously used `SELECT MIN(gpa) FROM students;`
- Enter `SELECT MAX(gpa) FROM students;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 1890. psql SELECT SUM major_id

### 1890.1

In the same fashion, use a `SUM` function find out what all the values of the `major_id` column in the `students` table add up to. 

#### HINTS

- Use `SUM` like you used `MIN` and `MAX`
- You previously used `SELECT MAX(gpa) FROM students;`
- Enter `SELECT SUM(major_id) FROM students;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 1900. psql SELECT AVG(major_id)

### 1900.1

`AVG` will give you the average of all the values in a column. Use it to see the average of the same column.

#### HINTS

- It's the `major_id` column in the `students` table
- Use `AVG` like you used `SUM`, `MIN` and `MAX`
- You previously used `SELECT SUM(major_id) FROM students;`
- Enter `SELECT AVG(major_id) FROM students;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 1910. psql SELECT CEIL(AVG(major_id))

### 1910.1

You can round decimals up or down to the nearest whole number with `CEIL` and `FLOOR`, respectively. Use `CEIL` to round the average `major_id` up to the nearest whole number. Here's an example: `CEIL(<number_to_round>)`.

#### HINTS

- Here's another example: `CEIL(<average_of_major_id's_here>)`
- You previously used `SELECT AVG(major_id) FROM students;` to get the average
- Put `AVG(major_id)` inside the parenthesis of the `CEIL` function
- Enter `SELECT CEIL(AVG(major_id)) FROM students;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 1920. psql SELECT ROUND(AVG(major_id))

### 1920.1

Or, you can round a number to the nearest whole number with `ROUND`. Use it to round the average of the `major_id` column to the nearest whole number.

#### HINTS

- Here's an example: `ROUND(<average_of_major_id's_here>)`
- You previously used `SELECT CEIL(AVG(major_id)) FROM students;` to round a number up
- Put `AVG(major_id)` inside the parenthesis of the `ROUND` function
- Enter `SELECT ROUND(AVG(major_id)) FROM students;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 1930. psql SELECT ROUND(AVG(major_id),5)

### 1930.1

You can round to a specific number of decimal places by adding a comma and number to `ROUND`, like this: `ROUND(<number_to_round>, <decimals_places>)`. Round the average of the `major_id` to five decimal places.

#### HINTS

- You previously used `SELECT ROUND(AVG(major_id)) FROM students;` to get the average
- Put `AVG(major_id), 5` inside the parenthesis of the `ROUND` function
- Enter `SELECT ROUND(AVG(major_id), 5) FROM students;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 1940. Add echo query result

### 1940.1

You should be able to find what your script is asking for now. Add the command to print it.

#### HINTS

- Add `echo "$($PSQL "<query_here>")"` to the bottom of the `student_info.sh` file, except with the correct query in it
- If you run your script, the last echo statement should print:
```sh
3.09
```
- Practice the query in the psql prompt to make sure it's getting what you want
- You previously used `SELECT ROUND(AVG(major_id), 5) FROM students;` in the psql prompt
- Add `echo "$($PSQL "SELECT ROUND(AVG(gpa), 2) FROM students")"` to the bottom of the `student_info.sh` file

## 1950. ./student_info.sh

### 1950.1

Run the script to see the average GPA of all your students.

#### HINTS

- Run your `student_info.sh` script by executing it
- Type `./student_info.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 1960. Add echo count of students per major with more than one student

### 1960.1

They're doing pretty good. Add another command to print `Major ID, total number of students in a column named 'number_of_students', and average GPA rounded to two decimal places in a column name 'average_gpa', for each major ID in the students table having a student count greater than 1:`

#### HINTS

- At the bottom of the file, use `echo` with the `-e` flag and a new line character again to print the suggested sentence
- The new line character is `\n`
- Here's an example of the command: `echo -e "\n<text_here>"`
- At the bottom of the `student_info.sh` file, add this:
```sh
echo -e "\nMajor ID, total number of students in a column named 'number_of_students', and average GPA rounded to two decimal places in a column name 'average_gpa', for each major ID in the students table having a student count greater than 1:"
```

## 1970. psql SELECT COUNT(*) FROM majors

### 1970.1

Another function is `COUNT`. You can use it like this: `COUNT(<column>)`. It will tell you how many entries are in a table for the column. Try it out in the psql prompt by using `COUNT(*)` to see how many majors there are.

#### HINTS

- Use the `SELECT`, `COUNT`, and `FROM` keywords
- Here's an example `SELECT COUNT(<column>) FROM <table>;`
- Use `*` for the column and `majors` for the table
- Enter `SELECT COUNT(*) FROM majors;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 1980. psql SELECT COUNT(*) FROM students

### 1980.1

Using the same method, check how many students you have.

#### HINTS

- You previously used: `SELECT COUNT(*) FROM majors;`
- Use the `SELECT`, `COUNT`, and `FROM` keywords
- Here's an example `SELECT COUNT(<column>) FROM <table>;`
- Use `*` for the column and `students` for the table
- Enter `SELECT COUNT(*) FROM students;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 1990. psql SELECT COUNT(major_id) FROM students

### 1990.1

Using `*` like that told you how many total rows are in the table. View the count of the `major_id` column in the `students` table to see how many of your students have picked a major.

#### HINTS

- Use the `SELECT`, `COUNT`, and `FROM` keywords
- Here's an example `SELECT COUNT(<column>) FROM <table>;`
- Use `major_id` for the column and `students` for the table
- Enter `SELECT COUNT(major_id) FROM students;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 2000. psql SELECT DISTINCT(major_id) FROM students

### 2000.1

Using `major_id` didn't count the `null` values in that column. 23 students have a major. `DISTINCT` is a function that will show you only unique values. You can use it like this: `DISTINCT(<column>)`. View the unique `major_id` values in the `students` table.

#### HINTS

- Use the `SELECT`, `COUNT`, and `FROM` keywords
- Here's an example `SELECT DISTINCT(<column>) FROM <table>;`
- Use `major_id` for the column and `students` for the table
- Enter `SELECT DISTINCT(major_id) FROM students;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 2010. psql SELECT FROM students GROUP BY major_id

### 2010.1

There's six unique `major_id` values in the `students` table. You can get the same results with `GROUP BY`. Here's an example of how to use it: `SELECT <column> FROM <table> GROUP BY <column>`. Use this method to view the unique `major_id` values in the `students` table again.

#### HINTS

- You want to **select** and **group** the `major_id` column
- Use the `SELECT`, `FROM`, and `GROUP BY` keywords
- Here's an example `SELECT COUNT(<column>) FROM <table>;`
- Use `major_id` for the column and `students` for the table
- Enter `SELECT major_id FROM students GROUP BY major_id;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 2020. psql SELECT major_id, count(*) FROM students GROUP BY major_id

### 2020.1

The output was the same as `DISTINCT`, but with `GROUP BY` you can add any of the aggregate functions (`MIN`, `MAX`, `COUNT`, etc) to it to find more information. For instance, if you wanted to see how many students were in each major you could use `SELECT COUNT(*) FROM students GROUP BY major_id`. View the `major_id` column **and** number of students in each `major_id`.

#### HINTS

- You want to `SELECT` two columns, `major_id` and the `COUNT` of all (`*`) the rows
- Use the `SELECT`, `COUNT`, `FROM`, and `GROUP BY` keywords
- Here's an example `SELECT <column_1>, COUNT(<column_2>) FROM <table> GROUP BY <column_1>;`
- Enter `SELECT major_id, COUNT(*) FROM students GROUP BY major_id;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 2030. psql SELECT major_id, MIN(gpa) FROM students GROUP BY major_id

### 2030.1

When using `GROUP BY`, any columns in the `SELECT` area must be included in the `GROUP BY` area. Other columns must be used with any of the aggregate functions (`MAX`, `AVG`, `COUNT`, etc). View the unique `major_id` values with `GROUP BY` again, but see what the lowest GPA is in each of them.

#### HINTS

- The last query was `SELECT major_id, COUNT(*) FROM students GROUP BY major_id;`
- Use the `SELECT`, `MIN`, `FROM`, and `GROUP BY` keywords
- Here's an example `SELECT <column_1>, MIN(<column_2>) FROM <table> GROUP BY <column_1>;`
- Enter `SELECT major_id, MIN(gpa) FROM students GROUP BY major_id;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 2040. psql SELECT MIN(gpa), MAX(gpa) FROM students GROUP BY major_id

### 2040.1

Nice job. Enter the same query, but add a column that shows you the highest GPA in each major as well.

#### HINTS

- The last query was: `SELECT major_id, MIN(gpa) FROM students GROUP BY major_id;`
- Use the `SELECT`, `MIN`, `MAX`, `FROM`, and `GROUP BY` keywords
- Enter `SELECT major_id, MIN(gpa), MAX(gpa) FROM students GROUP BY major_id;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 2050. psql SELECT MIN(gpa), MAX(gpa) FROM students GROUP BY major_id HAVING MAX(gpa) = 4

### 2050.1

Another option with `GROUP BY` is `HAVING`. You can add it at the end like this: `SELECT <column> FROM <table> GROUP BY <column> HAVING <condition>`. The condition must be an aggregate function with a test. An example to might be to use `HAVING COUNT(*) > 0` to only show what whatever column is grouped that have at least one row. Use `HAVING` to only show rows from the last query that have a maximum GPA of 4.0.

#### HINTS

- The last query was: `SELECT major_id, MIN(gpa), MAX(gpa) FROM students GROUP BY major_id;`
- Use the `SELECT`, `MIN`, `MAX`, `FROM`, `GROUP BY`, and `HAVING` keywords
- Here's an example `SELECT <column_1>, MIN(<column>), MAX(<column>) FROM <table> GROUP BY <column_1> HAVING <condition>;`
- The condition you want is `HAVING MAX(gpa) = 4.0`
- Enter `SELECT major_id, MIN(gpa), MAX(gpa) FROM students GROUP BY major_id HAVING MAX(gpa) = 4.0;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 2060. psql SELECT MIN(gpa) AS, MAX(gpa) FROM students GROUP BY major_id HAVING MAX(gpa) = 4

### 2060.1

Two of your majors have at least one student with a 4.0 GPA. Looking at the results, the column is named `min`. You can rename a column with `AS` like this: `SELECT <column> AS <new_column_name>` Enter the same command, but rename the `min` column to `min_gpa`.

#### HINTS

- The last query was: `SELECT major_id, MIN(gpa), MAX(gpa) FROM students GROUP BY major_id HAVING MAX(gpa) = 4.0;`
- Use the `SELECT`, `MIN`, `AS`, `FROM`, and `GROUP BY` keywords
- Rename the `MIN(gpa)` column like this: `MIN(gpa) AS min_gpa`
- Enter `SELECT major_id, MIN(gpa) AS min_gpa, MAX(gpa) FROM students GROUP BY major_id HAVING MAX(gpa) = 4.0;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 2070. psql SELECT MIN(gpa) AS, MAX(gpa) AS FROM students GROUP BY major_id HAVING MAX(gpa) = 4

### 2070.1

Now the column has a better name. Enter the same command, but rename the `max` column to `max_gpa` as well.

#### HINTS

- The last query was: `SELECT major_id, MIN(gpa) AS min_gpa, MAX(gpa) FROM students GROUP BY major_id HAVING MAX(gpa) = 4.0;`
- Use the `SELECT`, `MIN`, `AS`, `FROM`, and `GROUP BY` keywords
- Rename the `MAX(gpa)` column like this: `MAX(gpa) AS max_gpa`
- Enter `SELECT major_id, MIN(gpa) AS min_gpa, MAX(gpa) AS max_gpa FROM students GROUP BY major_id HAVING MAX(gpa) = 4.0;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 2075. psql - SELECT major_id, COUNT() AS number_of_students FROM students GROUP BY major_id

### 2075.1

That's more descriptive. View the `major_id` and number of students in each `major_id` in a column named `number_of_students`. 

#### HINTS

- Use the `SELECT`, `COUNT`, `AS`, `FROM`, and `GROUP BY` keywords
- Here's an example: `SELECT <column_1>, COUNT(*) AS <custom_column_name> FROM <table> GROUP BY <column_1>;`
- You want to `COUNT(*) AS number_of_students` and `GROUP BY major_id`
- Enter `SELECT major_id, COUNT(*) AS number_of_students FROM students GROUP BY major_id;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 2080. psql SELECT COUNT(*) AS FROM students GROUP BY major_id HAVING COUNT(*) < 8

### 2080.1

Use `HAVING` with the last query to only show the rows with less than eight students in the major.

#### HINTS

- The last query was: `SELECT major_id, COUNT(*) AS number_of_students FROM students GROUP BY major_id;`
- Here's an example: `SELECT <column_1>, COUNT(*) AS <custom_column_name> FROM <table> GROUP BY <column_1> HAVING <condition>;`
- The condition you want is `COUNT(*) < 8`
- Enter `SELECT major_id, COUNT(*) AS number_of_students FROM students GROUP BY major_id HAVING COUNT(*) < 8;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 2090. Add echo query result

### 2090.1

Well done. Back in your script, add the command the print the suggested results.

#### HINTS

- Add `echo "$($PSQL "<query_here>")"` to the bottom of the `student_info.sh` file, except with the correct query in it
- If you run your script, the last echo statement should print:
```sh
|8|2.97
37|6|3.38
36|6|2.92
41|6|3.53
38|4|2.73
```
- Practice the query in the psql prompt to make sure it's getting what you want
- You previously used `SELECT major_id, COUNT(*) AS number_of_students FROM students GROUP BY major_id HAVING COUNT(*) < 8;` in the psql prompt
- Add `echo "$($PSQL "SELECT major_id, COUNT(*) AS number_of_students, ROUND(AVG(gpa),2) AS average_gpa FROM students GROUP BY major_id HAVING COUNT(*) > 1")"` to the bottom of the `student_info.sh` file

## 2100. ./student_info.sh

### 2100.1

Run the script to see the output.

#### HINTS

- Run your `student_info.sh` script by executing it
- Type `./student_info.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 2110. Add echo majors with no students or student with ma

### 2110.1

Add an echo command to your script like the others that prints `List of majors, in alphabetical order, that either no student is taking or has a student whose first name contains a case insensitive 'ma':`

#### HINTS

- At the bottom of the file, use `echo` with the `-e` flag and a new line character again to print the suggested sentence
- The new line character is `\n`
- Here's an example of the command: `echo -e "\n<text_here>"`
- At the bottom of the `student_info.sh` file, add this:
```sh
echo -e "\nList of majors, in alphabetical order, that either no student is taking or has a student whose first name contains a case insensitive 'ma':"
```

## 2120. psql students FULL JOIN majors

### 2120.1

The `majors` and `students` table are linked with the `major_id` foreign key. If you want to see the name of a major that a student is taking, you need to `JOIN` the two tables into one. Here's an example of how to do that:
`SELECT * FROM <table_1> FULL JOIN <table_2> ON <table_1>.<foreign_key_column> = <table_2>.<foreign_key_column>;`

In the psql prompt, join the two tables together with the above method. 

#### HINTS

- Join the `students` and `majors` table with the method in the example. Use the `students` table first where applicable
- Enter `SELECT * FROM students FULL JOIN majors ON students.major_id = majors.major_id;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 2130. psql students LEFT JOIN majors

### 2130.1

It's showing all the columns from both tables, the two `major_id` columns are the same in each row for the ones that have it. You can see that there are some students without a major, and some majors without any students. The `FULL JOIN` you used will include **all** rows from both tables, whether or not they have a row using that foreign key in the other. From there, you could use any of the previous methods to narrow down, group, order, etc. Use a `LEFT JOIN` to join the same two tables in the same way.

#### HINTS

- Join the `students` and `majors` table with a `LEFT JOIN`. Use the `students` table first where applicable
- You previously entered: `SELECT * FROM students FULL JOIN majors ON students.major_id = majors.major_id;`
- Replace `FULL JOIN` from the previous command with `LEFT JOIN`
- Enter `SELECT * FROM students LEFT JOIN majors ON students.major_id = majors.major_id;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 2140. psql students RIGHT JOIN majors

### 2140.1

There's a few less rows than the last query. In the `LEFT JOIN` you used, the `students` table was the left table since it was on the left side of the `JOIN`. `majors` was the right table. A `LEFT JOIN` gets all rows from the left table, but only rows from the right table that are linked to from the left one. Looking at the data, you can see that every student was returned, but the majors without any students were not. Join the same two tables with a `RIGHT JOIN` this time.

#### HINTS

- Join the `students` and `majors` table with a `RIGHT JOIN`. Use the `students` table first where applicable
- You previously entered: `SELECT * FROM students LEFT JOIN majors ON students.major_id = majors.major_id;`
- Replace `LEFT JOIN` from the previous command with `RIGHT JOIN`
- Enter `SELECT * FROM students RIGHT JOIN majors ON students.major_id = majors.major_id;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 2150. psql students INNER JOIN majors

### 2150.1

The right join showed all the rows from the right table (`majors`), but only rows from the left table (`students`) if they have a major. There's one more type you should know about. Join the two tables with an `INNER JOIN`.

#### HINTS

- Join the `students` and `majors` table with an `INNER JOIN`. Use the `students` table first where applicable
- You previously entered: `SELECT * FROM students RIGHT JOIN majors ON students.major_id = majors.major_id;`
- Replace `RIGHT JOIN` from the previous command with `INNER JOIN`
- Enter `SELECT * FROM students INNER JOIN majors ON students.major_id = majors.major_id;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 2160. psql majors LEFT JOIN students

### 2160.1

The `INNER JOIN` only returned students if they have a major and majors that have a student. In other words, it only returned rows if they have a value in the foreign key column (`major_id`) of the opposite table. You should know a little about the four main types of joins now. Try using a `LEFT JOIN` to show **all the majors** but only students that have a major.

#### HINTS

- You want to join the `students` and `majors` tables again
- The left table is the on the left side of `LEFT JOIN`.
- A `LEFT JOIN` will show all rows from the left table.
- You previously entered: `SELECT * FROM students INNER JOIN majors ON students.major_id = majors.major_id;`
- Enter `SELECT * FROM majors LEFT JOIN students ON majors.major_id = students.major_id;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 2170. psql majors INNER JOIN students

### 2170.1

Excellent. All the majors are there. Next, use the appropriate join to show only students that are enrolled in a major, and only majors that have a student enrolled in it.

#### HINTS

- You want to join the `students` and `majors` tables again
- Join them with the join that only shows rows if they have a value in the foreign key column of the other table
- The types of joins you learned are `FULL JOIN`, `LEFT JOIN`, `RIGHT JOIN`, and `INNER JOIN`
- The previous query was: `SELECT * FROM majors RIGHT JOIN students ON majors.major_id = students.major_id;`
- You want to use an `INNER JOIN` with the two tables
- Enter `SELECT * FROM majors INNER JOIN students ON majors.major_id = students.major_id;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 2180. psql majors RIGHT JOIN students

### 2180.1

:thumbsup: Try using a right join to show all students but only majors if a student is enrolled in it.

#### HINTS

- You want to join the `students` and `majors` tables again
- The left table is the on the left side of `RIGHT JOIN`.
- A `RIGHT JOIN` will show all rows from the right table.
- You previously entered: `SELECT * FROM students INNER JOIN majors ON students.major_id = majors.major_id;`
- Enter `SELECT * FROM majors RIGHT JOIN students ON majors.major_id = students.major_id;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 2190. psql majors FULL JOIN students

### 2190.1

That showed all the students since it was the right table of the `RIGHT JOIN`. Use the appropriate join with the same two table to show all rows in both tables whether they have a value in the foreign key column or not.

#### HINTS

- You want to join the `students` and `majors` tables again
- Join them with the join that only shows rows if they have a value in the foreign key column of the other table
- The previous query was: `SELECT * FROM majors INNER JOIN students ON majors.major_id = students.major_id;`
- You want to use an `INNER JOIN` with the two tables
- Enter `SELECT * FROM majors FULL JOIN students ON majors.major_id = students.major_id;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 2200. psql SELECT * students INNER JOIN majors

### 2200.1

Lets do some more experiments with joins. Say you wanted to find a list of majors that students are taking. Use the most efficient `JOIN` to join the two tables you need. Only join the tables for now, don't use any other conditions.

#### HINTS

- You want to join the `students` and `majors` tables again
- Use the join that shows you only students that have a major and only majors that have a student.
- Only use the join, don't use a `WHERE`, `HAVING`, or any other filters
- You previously used: `SELECT * FROM students FULL JOIN majors ON students.major_id = majors.major_id;`
- You want to use an `INNER JOIN`
- Enter `SELECT * FROM students INNER JOIN majors ON students.major_id = majors.major_id;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 2210. psql SELECT major students INNER JOIN majors

### 2210.1

Good. To get the list, you don't need all the columns, though. Enter the same command, but just get the column you need.

#### HINTS

- The previous query was `SELECT * FROM students INNER JOIN majors ON students.major_id = majors.major_id;`
- Enter the previous query, but only get the column you need
- You only need the `major` column
- Enter `SELECT major FROM students INNER JOIN majors ON students.major_id = majors.major_id;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 2220. psql SELECT DISTINCT(major) students INNER JOIN majors

### 2220.1

You also don't want any duplicates. Use `DISTINCT` to only return the unique ones to see the list of majors who have students.

#### HINTS

- The previous query was `SELECT major FROM students INNER JOIN majors ON students.major_id = majors.major_id;`
- Enter the previous query, but only get the `DISTINCT` majors
- Here's an example: `DISTINCT(<column>)`
- You want to change `major` from the previous query to `DISTINCT(major)`
- Enter `SELECT DISTINCT(major) FROM students INNER JOIN majors ON students.major_id = majors.major_id;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 2230. psql SELECT * students RIGHT JOIN majors

### 2230.1

There's your list of majors that students are taking :smile: Next, say you wanted a list of majors that students aren't taking. Use the most efficient `JOIN` to join the two tables you need. Only join the tables for now, don't use any other conditions.

#### HINTS

- You want to join the `students` and `majors` tables again
- Use the join that shows you all majors, but only students that have a major
- Only use the join, don't use a `WHERE`, `HAVING`, or any other filters
- You previously used: `SELECT * FROM students FULL JOIN majors ON students.major_id = majors.major_id;`
- You want to use a `RIGHT JOIN` with the `majors` table on the right of it
- Enter `SELECT * FROM students RIGHT JOIN majors ON students.major_id = majors.major_id;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 2240. psql SELECT * students RIGHT JOIN majors WHERE student_id IS NULL

### 2240.1

That got you all the majors, you can see the ones that don't have any students. Add a `WHERE` condition to only see the majors without students, use `student_id` in it's condition.

#### HINTS

- The previous query was `SELECT * FROM students RIGHT JOIN majors ON students.major_id = majors.major_id;`
- Enter the previous query, but add a `WHERE <condition>` at the end to only get the rows you need
- Use `IS NULL` with the condition
- The keywords you want are `SELECT`, `FROM`, `RIGHT JOIN`, `ON`, `WHERE` and `IS NULL`
- Use `student_id IS NULL` as the condition
- Enter `SELECT * FROM students RIGHT JOIN majors ON students.major_id = majors.major_id WHERE student_id IS NULL;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 2245. psql SELECT major students RIGHT JOIN majors WHERE student_id IS NULL

### 2245.1

Now you only have the rows you need. Only get the columns you need with it to see the list of majors without students.

#### HINTS

- The previous query was `SELECT * FROM students LEFT JOIN majors ON students.major_id = majors.major_id WHERE student_id IS NULL;`
- Enter the previous query, but only get the column you need
- The column you need is the `major` column
- Enter `SELECT major FROM students RIGHT JOIN majors ON students.major_id = majors.major_id WHERE student_id IS NULL;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 2250. psql SELECT * students LEFT JOIN majors

### 2250.1

You're doing great. Next, use the most efficient 'JOIN' to join the tables you would need if you were asked to get the first name, last name, major, and GPA of students who are taking Data Science or have a gpa of 3.8 or greater. Only join the tables for now, don't use any other conditions.

#### HINTS

- Use the join to get all students but only majors that have a student
- Only use the join, don't use a `WHERE`, `HAVING`, or any other conditional expressions.
- You previously used: `SELECT * FROM students RIGHT JOIN majors ON students.major_id = majors.major_id;`
- You want to use a `LEFT JOIN` with `students` as the left table
- Enter `SELECT * FROM students LEFT JOIN majors ON students.major_id = majors.major_id;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 2260. psql SELECT students LEFT JOIN majors WHERE major = Data Science OR gpa >= 3.8

### 2260.1

Enter the same command, but use `WHERE` to only get the students that meet the requirements. As a reminder, the goal was to find students who are taking Data Science or have a gpa of 3.8 or greater.

#### HINTS

- The previous query was `SELECT * FROM students LEFT JOIN majors ON students.major_id = majors.major_id;`
- You want to add two conditions one testing the `major` column, and another testing the `gpa` column
- Here's an example `SELECT * FROM <table_1> LEFT JOIN <table_2> ON <table_1>.<foreign_key> = <table_2>.<foreign> WHERE <condition_1> OR <condition_2>;`
- The two conditions you want are `major = 'Data Science'` and `gpa >= 3.8`
- Enter `SELECT * FROM students LEFT JOIN majors ON students.major_id = majors.major_id WHERE major='Data Science' OR gpa >= 3.8;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 2265. psql SELECT columns LEFT JOIN WHERE major = Data Science OR gpa >= 3.8

### 2265.1

Now, you have narrowed it down the rows you are looking for. Enter the same command, but only get the columns you need. There was four of them, the students first name, last name, their major, and GPA. Get them in that order.

#### HINTS

- The previous query was `SELECT * FROM students LEFT JOIN majors ON students.major_id = majors.major_id WHERE major='Data Science' OR gpa >= 3.8;`
- Enter the previous query, but only get the columns you need
- Get the `first_name`, `last_name`, `major`, and `gpa` columns in that order
- Enter `SELECT first_name, last_name, major, gpa FROM students LEFT JOIN majors ON students.major_id = majors.major_id WHERE major='Data Science' OR gpa >= 3.8;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 2270. psql SELECT * students FULL JOIN majors

### 2270.1

From there, you could put them in a specific order if you wanted or limit the results to a certain number among other things. Lastly, use the most efficient 'JOIN' to join the tables you would need if you were asked to get the first name and major for students whose `first_name`, or the `major`, contains `ri`. Only join the tables for now, don't use any other conditions.

#### HINTS

- Use the join that gets all students and majors
- You previously used: `SELECT * FROM students LEFT JOIN majors ON students.major_id = majors.major_id;`
- You want to use a `FULL JOIN`
- Enter `SELECT * FROM students FULL JOIN majors ON students.major_id = majors.major_id;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 2280. psql SELECT * students FULL JOIN majors WHERE first_name || major LIKE ri

### 2280.1

Add a `WHERE` to the previous query so you only get the rows you need. The rows you wanted were the ones with a first name or major containing `ri`.

#### HINTS

- The previous query was `SELECT * FROM students FULL JOIN majors ON students.major_id = majors.major_id;`
- You want to add two conditions one testing the `first_name` column, and another testing the `major` column
- Here's an example `SELECT * FROM <table_1> LEFT JOIN <table_2> ON <table_1>.<foreign_key> = <table_2>.<foreign> WHERE <condition_1> OR <condition_2>;`
- The two conditions you want should use the `LIKE` or `ILIKE` keywords
- They conditions are `WHERE first_name LIKE '%ri%' OR major LIKE '%ri%'`
- Enter `SELECT * FROM students FULL JOIN majors ON students.major_id = majors.major_id WHERE first_name LIKE '%ri%' OR major LIKE '%ri%';` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 2290. psql SELECT major FROM students FULL JOIN majors WHERE WHERE first_name || major LIKE ri

### 2290.1

Finally, you only wanted to display the `first_name` and `major` columns. Enter the previous query, but only get the columns you need.

#### HINTS

- The previous query was `SELECT * FROM students LEFT JOIN majors ON students.major_id = majors.major_id WHERE first_name LIKE '%ri%' OR major LIKE '%ri%';`
- The two columns you want are `first_name` and `major`
- Enter `SELECT first_name, major FROM students FULL JOIN majors ON students.major_id = majors.major_id WHERE first_name LIKE '%ri%' OR major LIKE '%ri%';` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 2310. Add echo query result

### 2310.1

In your script, add the command to print what the sentence is asking for.

#### HINTS

- Add `echo "$($PSQL "<query_here>")"` to the bottom of the `student_info.sh` file, except with the correct query in it
- If you run your script, the last echo statement should print:
```sh
Computer Programming
Database Administration
Network Engineering
Web Development
```
- Practice the query in the psql prompt to make sure it's getting what you want
- You previously used `SELECT first_name, major FROM students FULL JOIN majors ON students.major_id = majors.major_id WHERE first_name LIKE '%ri%' OR major LIKE '%ri%';` in the psql prompt
- Add `echo "$($PSQL "SELECT major FROM students FULL JOIN majors ON students.major_id = majors.major_id WHERE major IS NOT NULL AND (student_id IS NULL OR first_name ILIKE '%ma%') ORDER BY major")"` to the bottom of the `student_info.sh` file

## 2320. ./student_info.sh

### 2320.1

Run the script to see the majors described.

#### HINTS

- Run your `student_info.sh` script by executing it
- Type `./student_info.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 2330. Add echo courses with no students or Obie Hilpert

### 2330.1

:smile: Almost done. In your script, add a command to print this sentence like the others: `List of unique courses, in reverse alphabetical order, that no student or 'Obie Hilpert' is taking:`

#### HINTS

- At the bottom of the file, use `echo` with the `-e` flag and a new line character again to print the suggested sentence
- The new line character is `\n`
- Here's an example of the command: `echo -e "\n<text_here>"`
- At the bottom of the `student_info.sh` file, add this:
```sh
echo -e "\nList of unique courses, in reverse alphabetical order, that no student or 'Obie Hilpert' is taking:"
```

## 2340. psql SELECT * FROM students FULL JOIN majors

### 2340.1

Lets go over a few more things before you figure out how to see the courses a student is taking. Start by doing a `FULL JOIN` on your `students` and `majors` tables.

#### HINTS

- Join the `students` and `majors` table with a `FULL JOIN`. Use the `students` table first where applicable
- Enter `SELECT * FROM students FULL JOIN majors ON students.major_id = majors.major_id;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 2350. psql SELECT students.major_id students FULL JOIN majors

### 2350.1

If you look at the column names, it shows two `major_id` columns. One from the `students` table and one from the `majors` table. If you were to try and query it using `major_id`, you would get an error. You would need to specify what table you want the column from like this: `<table>.<column>`. Enter the same join but only get the `major_id` column from the `students` table.

#### HINTS

- The previous query was `SELECT * FROM students FULL JOIN majors ON students.major_id = majors.major_id;`
- You can get the column you want with `students.major_id`
- Enter `SELECT students.major_id FROM students FULL JOIN majors ON students.major_id = majors.major_id;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 2360. psql SELECT students.major_id FROM students FULL JOIN majors AS m

### 2360.1

Earlier, you used `AS` to rename columns. You can use it to rename tables, or give them aliases, as well. Here's an example: `SELECT * FROM <table> AS <new_name>;`. Enter the same query you just entered, but rename the `majors` table to `m`. Anywhere the `majors` table is referenced, you will need to use `m` instead of `majors`.

#### HINTS

- The previous query was `SELECT students.major_id FROM students FULL JOIN majors ON students.major_id = majors.major_id;`
- You want to join `majors AS m` and use `m.major_id` when referencing the joining column
- Enter `SELECT students.major_id FROM students FULL JOIN majors AS m ON students.major_id = m.major_id;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 2370. psql SELECT s.major_id FROM students AS s FULL JOIN majors AS m

### 2370.1

This doesn't affect the output. It can just make some queries easier to read. Enter the same query, but rename the `students` table to `s` as well.

#### HINTS

- The previous query was `SELECT students.major_id FROM students FULL JOIN majors AS m ON students.major_id = m.major_id;`
- You want to rename `students AS s` and use `s.<column>` when referencing columns from the `students` table
- Enter `SELECT s.major_id FROM students AS s FULL JOIN majors AS m ON s.major_id = m.major_id;` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 2390. psql SELECT * FROM students FULL JOIN majors USING

### 2390.1

There's a shortcut keyword, `USING` to join tables if the foreign key column has the same name in both tables. Here's an example: `SELECT * FROM <table_1> FULL JOIN <table_2> USING(<column>);`. Use this method to see **all** the columns in the `students` and `majors` table. Don't use any aliases.

#### HINTS

- Enter `SELECT * FROM students FULL JOIN majors USING(major_id);` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 2400. psql SELECT * FROM students FULL JOIN majors USING FULL JOIN major_courses USING

### 2400.1

Note that the two `major_id` columns were turned into one with `USING`. In order to find out what courses a student is taking, you will need to join all the tables together. You can add a third table to a join like this: `SELECT * FROM <table_1> FULL JOIN <table_2> USING(<column>) FULL JOIN <table_3> USING(<column>)`. This example will join the first two tables into one, turning it into the left table for the second join. Use this method to join the two tables from the previous query with the `majors_courses` table.

#### HINTS

- The previous query was `SELECT * FROM students FULL JOIN majors USING(major_id);`
- View the details of the `majors_courses` table with `\d majors_courses` to find the foreign key to join on
- It's the `major_id` column
- Enter `SELECT * FROM students FULL JOIN majors USING(major_id) FULL JOIN majors_courses USING(major_id);` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 2410. psql SELECT * students FULL JOIN majors USING JOIN major_courses USING JOIN courses USING

### 2410.1

You may need to adjust the terminal size to align the output. What you're seeing is every unique combination of rows in the database. Students with a major are listed multiple times, one for each course included in the major. The majors without any students are there along with the courses for them. The students without a major are included, they have no courses and are only listed once. You can join as many tables together as you want. Join the last table to the previous command to get the names of the courses with all this info.

#### HINTS

- The previous query was `SELECT * FROM students FULL JOIN majors USING(major_id) FULL JOIN majors_courses USING(major_id);`
- The last table is the `courses` table
- View the details of the `courses` table with `\d courses` to find the foreign key to join on
- Enter `SELECT * FROM students FULL JOIN majors USING(major_id) FULL JOIN majors_courses USING(major_id) FULL JOIN courses USING(course_id);` in the psql prompt
- Enter `psql --username=freecodecamp --dbname=students` in the terminal to log into the psql prompt if you aren't already

## 2420. Add echo query result

### 2420.1

Same amount of rows, but you get the course names now. In your script, add the command to print the suggested info. 

#### HINTS

- Add `echo "$($PSQL "<query_here>")"` to the bottom of the `student_info.sh` file, except with the correct query in it
- If you run your script, the last echo statement should print:
```sh
Web Programming
Web Applications
Python
Object-Oriented Programming
Network Security
Data Structures and Algorithms
Computer Systems
Computer Networks
Algorithms
```
- Practice the query in the psql prompt to make sure it's getting what you want
- You previously used `SELECT * FROM students FULL JOIN majors USING(major_id) FULL JOIN majors_courses USING(major_id) FULL JOIN courses USING(course_id);` in the psql prompt
- Add `echo "$($PSQL "SELECT DISTINCT(course) FROM students RIGHT JOIN majors USING(major_id) INNER JOIN majors_courses USING(major_id) INNER JOIN courses USING(course_id) WHERE (first_name = 'Obie' AND last_name = 'Hilpert') OR student_id IS NULL ORDER BY course DESC")"` to the bottom of the `student_info.sh` file

## 2430. ./student_info.sh

### 2430.1

Run the script to see courses described.

#### HINTS

- Run your `student_info.sh` script by executing it
- Type `./student_info.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 2440. Add echo courses with only one student

### 2440.1

Last one. Add a command that prints `List of courses, in alphabetical order, with only one student enrolled:`.

#### HINTS

- At the bottom of the file, use `echo` with the `-e` flag and a new line character again to print the suggested sentence
- The new line character is `\n`
- Here's an example of the command: `echo -e "\n<text_here>"`
- At the bottom of the `student_info.sh` file, add this:
```sh
echo -e "\nList of courses, in alphabetical order, with only one student enrolled:"
```

## 2450. Add echo query result

### 2450.1

Go for it.

#### HINTS

- Add a command at the bottom of the script to print the suggested information
- Add `echo "$($PSQL "<query_here>")"` to the bottom of the `student_info.sh` file, except with the correct query in it
- If you run your script, the last echo statement should print:
```sh
Computer Networks
Computer Systems
Server Administration
UNIX
```
- Practice the query in the psql prompt to make sure it's getting what you want
- You can do this
- Give it another try
- I don't know how to get it either
- So there's no answers here
- :confused:
- Try entering this in the psql prompt: `SELECT COUNT(course), COURSE FROM students INNER JOIN majors USING(major_id) INNER JOIN majors_courses USING(major_id) INNER JOIN courses USING(course_id) GROUP BY course;`
- Add `echo "$($PSQL "SELECT course FROM students INNER JOIN majors_courses USING(major_id) INNER JOIN courses USING(course_id) GROUP BY course HAVING COUNT(student_id) = 1 ORDER BY course")"` to the bottom of the `student_info.sh` file

## 2460. ./student_info.sh

### 2460.1

This is the last step, you have done really well. Run the script one last time. :wave:

#### HINTS

- Run your `student_info.sh` script by executing it
- Type `./student_info.sh` in the terminal and press enter
- Make sure you are in the `project` folder first
