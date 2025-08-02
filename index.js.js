// اجرا با تاخیر ۳ ثانیه بعد از لود صفحه
setTimeout(() => {

  // 🔐 Login
  let username = prompt("Enter username (admin or user):");
  let password = prompt("Enter password:");

  if ((username === "admin" || username === "user") && password === "1234") {
    let role = username;
    let securityLevel = (username === "admin") ? "high" : "low";

    // ☕ Coffee Order
    let name = prompt("Enter your name:");
    let age = parseInt(prompt("Enter your age:"));
    let coffeeType = prompt("Choose coffee type: espresso, latte, or cappuccino").toLowerCase();
    let quantity = parseInt(prompt("How many cups do you want?"));

    let prices = {
      espresso: 2.5,
      latte: 3.5,
      cappuccino: 4.0
    };

    if (!prices[coffeeType]) {
      alert("Invalid coffee type.");
      return;
    }

    let originalTotal = prices[coffeeType] * quantity;
    let discount = (age < 18 || age > 60) ? originalTotal * 0.1 : 0;
    let finalTotal = originalTotal - discount;

    // 🧾 Bill Split
    let numPeople = parseInt(prompt("How many people are splitting the bill? (1, 2, or 3)"));
    let tipPercent = parseInt(prompt("Enter tip percentage (0, 5, 10, or 15):"));

    if (![1,2,3].includes(numPeople) || ![0,5,10,15].includes(tipPercent)) {
      alert("Invalid number of people or tip percentage.");
      return;
    }

    let tip = (finalTotal * tipPercent) / 100;
    let totalWithTip = finalTotal + tip;
    let perPerson = totalWithTip / numPeople;

    alert(
      "Hello " + name + "!\n" +
      "You ordered " + quantity + " " + coffeeType + "(s).\n" +
      "Original total: $" + originalTotal.toFixed(2) + "\n" +
      "Discount: $" + discount.toFixed(2) + "\n" +
      "Tip: $" + tip.toFixed(2) + "\n" +
      "Total with Tip: $" + totalWithTip.toFixed(2) + "\n" +
      "Split between " + numPeople + " people: $" + perPerson.toFixed(2) + " each"
    );

  } else {
    alert("Incorrect login. Access denied.");
  }

}, 3000); // ۳ ثانیه تأخیر