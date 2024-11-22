// Function to check if a date falls between September 9 (exclusive) and September 21 (inclusive)
function validDate(date) {
    const targetDate = new Date(date);
    const startDate = new Date(`${targetDate.getFullYear()}-09-09`);
    const endDate = new Date(`${targetDate.getFullYear()}-09-21`);

    return targetDate > startDate && targetDate <= endDate;
}

// Function to check if a name contains special characters
function checkName(name) {
    const regex = /^[a-zA-Z0-9\s]+$/;
    return regex.test(name);
}

module.exports = { validDate, checkName };
