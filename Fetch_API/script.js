const convertBtn = document.getElementById("convertBtn");
const amountInput = document.getElementById("amount");
const currencySelect = document.getElementById("currency");
const resultElement = document.getElementById("result");

convertBtn.addEventListener("click", () => {
  const amount = amountInput.value;
  const currency = currencySelect.value;

  fetch(`https://api.exchangeratesapi.io/latest?base=USD`)
    .then((response) => response.json())
    .then((data) => {
      const exchangeRate = data.rates[currency];
      const convertedAmount = (amount * exchangeRate).toFixed(2);
      resultElement.textContent = `${amount} USD is approximately ${convertedAmount} ${currency}`;
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      resultElement.textContent = "An error occurred. Please try again later.";
    });
});
