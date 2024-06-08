const today = new Date();
const phoneBought = new Date("2020-12-28");
const differenceInMilliseconds = today - phoneBought;
const differenceInDays = Math.floor(differenceInMilliseconds / (24 * 60 * 60 * 1000));
document.getElementById('days').textContent = differenceInDays;
const phoneCost = 499.17;
const costPerDay = (phoneCost / differenceInDays).toFixed(2);
document.getElementById('cost-per-day').textContent = costPerDay;