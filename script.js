/**
 * Main function to calculate the daily task plan.
 * Triggered by the button in index.html.
 */
function calculatePlan() {
    // 1. Capture input values and store them in variables
    const name = document.getElementById('userName').value || "Friend";
    const tasks = parseInt(document.getElementById('taskCount').value);
    const minutes = parseInt(document.getElementById('timePerTask').value);
    const limit = parseInt(document.getElementById('freeTime').value);
    
    const output = document.getElementById('display-output');

    // Basic validation to check if inputs are valid numbers
    if (isNaN(tasks) || isNaN(minutes) || isNaN(limit)) {
        output.style.display = "block";
        output.className = "warning";
        output.innerHTML = "Please enter numbers in all fields!";
        return;
    }

    // 2. Process: Perform the core calculation
    const totalRequired = tasks * minutes;

    // 3. Conditional logic (if/else) to determine the status message
    let categoryMessage = "";
    let statusStyle = "";

    if (totalRequired > limit) {
        // Condition: Time needed exceeds the user's limit
        const diff = totalRequired - limit;
        statusStyle = "warning";
        categoryMessage = `This is too much! You are missing <b>${diff} min.</b> Try reducing the number of tasks.`;
    } else if (totalRequired === limit) {
        // Condition: Time needed exactly equals the limit (no rest)
        statusStyle = "info";
        categoryMessage = `Your entire limit is used! No free time today, but <b>you can rest tomorrow</b>.`;
    } else {
        // Condition: Time remains for leisure
        const remain = limit - totalRequired;
        statusStyle = "success";
        categoryMessage = `Great plan! You will have <b>${remain} min.</b> left for rest.`;
    }

    // 4. Final Output: Inject the results directly into the HTML page
    output.style.display = "block";
    output.className = statusStyle;
    output.innerHTML = `
        Hello, <b>${name}</b>!<br>
        You need <b>${totalRequired} min.</b> to complete everything.<br><br>
        ${categoryMessage}
    `;
}