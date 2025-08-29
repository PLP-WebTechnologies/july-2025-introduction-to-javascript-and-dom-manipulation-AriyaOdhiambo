// 🚀 JavaScript Fundamentals Assignment

// ---------------- Part 1: Variables & Conditionals ----------------
document.getElementById("checkAgeBtn").addEventListener("click", function () {
  let age = document.getElementById("userAge").value;
  let result = document.getElementById("ageResult");

  if (age >= 18) {
    result.textContent = "✅ You are an adult!";
  } else if (age > 0) {
    result.textContent = "👶 You are still a minor!";
  } else {
    result.textContent = "⚠️ Please enter a valid age.";
  }
});

// ---------------- Part 2: Functions ----------------
// Function 1: Calculate total price
function calculateTotal(quantity, price) {
  return quantity * price;
}

document.getElementById("calcTotalBtn").addEventListener("click", function () {
  let total = calculateTotal(5, 10); // Example: 5 items × $10
  document.getElementById("totalResult").textContent = "💲 Total: $" + total;
});

// Function 2: Toggle message visibility
function toggleMessage() {
  let message = document.getElementById("toggleMessage");
  if (message.style.display === "none") {
    message.style.display = "block";
  } else {
    message.style.display = "none";
  }
}

document.getElementById("toggleBtn").addEventListener("click", toggleMessage);

// ---------------- Part 3: Loops ----------------
// Example 1: Countdown using a loop
document.getElementById("countdownBtn").addEventListener("click", function () {
  let countdownText = "";
  for (let i = 5; i >= 1; i--) {
    countdownText += i + "... ";
  }
  countdownText += "🚀 Lift off!";
  document.getElementById("countdownResult").textContent = countdownText;
});

// Example 2: Display shopping list with forEach loop
document.getElementById("listItemsBtn").addEventListener("click", function () {
  let items = ["Milk", "Bread", "Eggs", "Apples"];
  let list = document.getElementById("shoppingList");
  list.innerHTML = ""; // Clear old list
  items.forEach(function (item) {
    let li = document.createElement("li");
    li.textContent = item;
    list.appendChild(li);
  });
});

// ---------------- Part 4: DOM Manipulation ----------------
// Example 1: Change background color
document.getElementById("changeColorBtn").addEventListener("click", function () {
  document.body.style.backgroundColor =
    document.body.style.backgroundColor === "lightblue" ? "#f9f9f9" : "lightblue";
});

// Example 2: Add new item to a list dynamically
document.getElementById("addItemBtn").addEventListener("click", function () {
  let newItem = document.createElement("li");
  newItem.textContent = "New Item " + (document.querySelectorAll("#dynamicList li").length + 1);
  document.getElementById("dynamicList").appendChild(newItem);
});

// Example 3: Extra DOM interaction (change text when clicked)
document.getElementById("dynamicList").addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.textContent += " ✅";
  }
});
