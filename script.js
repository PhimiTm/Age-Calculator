document.addEventListener("DOMContentLoaded", () => {
    const DateTime = luxon.DateTime;

    // Initialize the datepicker
    flatpickr("#birthdate", {
        dateFormat: "Y-m-d",
        maxDate: "today",
    });

    document.getElementById("calculate").addEventListener("click", () => {
        const birthdateInput = document.getElementById("birthdate").value;
        if (!birthdateInput) {
            alert("Please enter a valid date.");
            return;
        }

        // Convert input to Luxon DateTime
        const birthDate = DateTime.fromISO(birthdateInput);
        const now = DateTime.now();
        
        // Calculate the difference
        const diff = now.diff(birthDate, ["years", "months", "days"]).toObject();

        // Display result
        document.getElementById("result").innerHTML = `You are <strong>${Math.floor(diff.years)} years, ${Math.floor(diff.months)} months, and ${Math.floor(diff.days)} days</strong> old.`;
    });
});
