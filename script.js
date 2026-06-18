document.addEventListener("DOMContentLoaded", function () {

    const investmentInput = document.getElementById("investment");
    const interestRateInput = document.getElementById("rate");
    const timePeriodInput = document.getElementById("time");

    investmentInput.addEventListener("input", function () {
        updateInvestmentValue(this.value);
    });

    interestRateInput.addEventListener("input", function () {
        updateInterestValue(this.value);
    });

    timePeriodInput.addEventListener("input", function () {
        updateTimePeriod(this.value);
    });

    function updateInvestmentValue(value) {
        document.getElementById("investment-value").innerText =
            Number(value).toLocaleString("en-IN");
    }

    function updateInterestValue(value) {
        document.getElementById("interest-value").innerText =
            `${parseFloat(value).toFixed(1)}%`;
    }

    function updateTimePeriod(value) {
        document.getElementById("timeperiod").innerText = value;
    }

    
    updateInvestmentValue(investmentInput.value);
    updateInterestValue(interestRateInput.value);
    updateTimePeriod(timePeriodInput.value);

    
    window.calculator = function () {

        const p = parseFloat(investmentInput.value);
        const r = parseFloat(interestRateInput.value);
        const t = parseFloat(timePeriodInput.value);

        const n = 4; 

        const total = p * Math.pow((1 + (r / 100) / n), n * t);
        const interest = total - p;

        document.getElementById("investamount").innerText =
            p.toLocaleString("en-IN");

        document.getElementById("estimatedreturns").innerText =
            Math.round(interest).toLocaleString("en-IN");

        document.getElementById("totalvalue").innerText =
            Math.round(total).toLocaleString("en-IN");
    };

});