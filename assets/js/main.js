const tripDistanceEl = document.getElementById('trip-distance')
const fuelEffEl = document.querySelector('#fuel-efficiency')
const fuelCostEl = document.querySelector('#fuel-cost')
const calculateBtnEl = document.querySelector('#calculateBtn')
const resultEl = document.getElementById("result_div");

resultEl.classList.add('hidden')
calculateBtnEl.addEventListener("click" , event => {
    event.preventDefault();

    if (tripDistanceEl.value === ""){
        resultEl.classList.remove("hidden");
        resultEl.innerText = `Enter valid Input`;

    } else{
        const distanceKM = tripDistanceEl.value
        const milage = fuelEffEl.value
        const fuelCost = fuelCostEl.value

        const result = (distanceKM / milage)*fuelCost

        resultEl.innerText = `The Amount you should spend for Fuel : Rs.${result.toFixed(2)}`
        resultEl.classList.remove('hidden')
    }
})