# Personal Assignment 1 Report Template

## 1. Project Overview

**Project Name:**  
(Task Planner)

**What does your calculator do?**  

(This calculator helps users plan their daily workload by calculating the total time required for tasks in minutes. It compares the total time against a user-defined daily limit and provides advice on whether the plan is realistic or if some tasks should be postponed.)

---

## 2. Inputs

List and explain all inputs you used.
Input Name


| Input Name | Unit | What it Represents |
|User Name|Text|The name of the person using the planner|
|Task Count|Count|Total number of individual tasks to complete|
|Time per Task|Minutes|Average time spent on a single task|
|Free Time Limit|Minutes|Total time the user is willing to spend on work today|

Explain in words:  
I chose these inputs because they represent the basic variables of a typical "to-do list." To calculate total workload, you must know both the quantity of items and the average duration of each, while the time limit acts as the benchmark for the if/else logic.

---

## 3. Process (Calculation Logic)

**Formula or Calculation Used:**  
Total Time Required = Task Count × Time per Task

**Steps:**
1)Get input values from HTML using document.getElementById().value.
2)Convert numeric inputs using parseInt() to ensure they are treated as numbers, not text.
3)Multiply the number of tasks by the time per task to get the totalRequired variable.
4)Compare totalRequired with the limit variable.

---

## 4. Conditional Logic (if / else)

-If totalRequired > limit: The workload is too heavy. The program calculates the difference (diff) and tells the user how many minutes they are over the limit.

-Else if totalRequired === limit: The workload exactly matches the limit. The program informs the user that they will be busy the whole time and suggests resting tomorrow.

-Else (if totalRequired < limit): The plan is efficient. The program calculates the remaining time (remain) and encourages the user.

I chose these ranges to cover all mathematical possibilities (greater than, equal to, or less than), ensuring the user always gets a clear interpretation of their schedule.

---

## 5. Output

What does your program show to the user?

-Personalized message: "Hello, [Name]!"
-Calculated value: Shows the total minutes needed to complete everything.
-Interpretation: A specific message (Warning, Info, or Success) based on the if/else logic.

---

## 6. Edge Cases / Unusual Inputs

What happens if:

-User enters zero? The program will calculate 0 minutes and show a "Success" message (Great plan!).

-User leaves input empty? The isNaN() check in the code will trigger. The program will display a warning: "Please enter numbers in all fields!" and stop the calculation.

-User enters text? Same as empty input; the isNaN() validation handles it to prevent errors in calculation.

---

## 7. Optional Features (If You Added Any)

-Validation messages: Custom UI classes (.warning, .success, .info) that change the background color of the output box depending on the result.

-Default values: The input fields have default values to guide the user on how to use the calculator.

---

## 8. How to Run the Project

1. Download the index.html, style.css, and script.js files into the same folder.

2.Open index.html in any modern web browser.

3.Enter your name and task details.

4.Click the "Calculate Plan" button to see your result. 


---

## 9. AI Usage (If Used)

Brief explanation:

-What I asked AI for: I used AI to help structure the if/else logic and to suggest modern CSS styles for the input forms.

-What I modified myself: I adjusted the logic to include the specific "rest tomorrow" message for the equal time condition and renamed variables to be more descriptive.

-What I fully understand now: I now fully understand how to capture values from HTML and use them in mathematical formulas within JavaScript.

---

## 10. Reflection

From this assignment, I learned how to connect HTML forms with JavaScript logic to create a functional tool. I practiced using variables, performing basic math in code, and using conditional statements to give the user meaningful feedback. It showed me how even simple code can solve a real-world problem like time management.
