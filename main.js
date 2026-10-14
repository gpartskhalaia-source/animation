
let balance = 1000;
let transactionCount = 0;

// HTML ელემენტების მოძებნა
const balanceElement = document.querySelector("#balance");
const amountInput = document.querySelector("#amount");

const depositBtn = document.querySelector("#deposit");
const withdrawBtn = document.querySelector("#withdraw");
const resetBtn = document.querySelector("#reset");

const history = document.querySelector("#history");
const message = document.querySelector("#message");

const lastTransaction = document.querySelector("#lastTransaction");
const totalTransactions = document.querySelector("#totalTransactions");

// ბალანსის განახლება
function updateBalance() {
    balanceElement.textContent = balance.toFixed(2);
}

// შეტყობინების ჩვენება
function showMessage(text, type) {
    message.textContent = text;
    message.classList.remove("success", "error");
    message.classList.add(type);
}

// ოპერაციის ისტორიაში დამატება
function addTransaction(type, amount) {

    const li = document.createElement("li");

    let transactionText;

    if (type === "Deposit") {
        transactionText = `Deposit +₾${amount.toFixed(2)}`;
    } else {
        transactionText = `Withdraw -₾${amount.toFixed(2)}`;
    }

    li.textContent = transactionText;

    history.appendChild(li);

    transactionCount++;

    lastTransaction.textContent =
        `Last transaction: ${transactionText}`;

    totalTransactions.textContent =
        `Total transactions: ${transactionCount}`;
}

// თანხის შეტანა
function depositMoney() {

    const amount = Number(amountInput.value);

    if (amountInput.value.trim() === "" ||
        !Number.isFinite(amount) || amount <= 0) {

        showMessage("❌ Please enter a valid amount!", "error");
        return;
    }

    balance += amount;

    updateBalance();

    addTransaction("Deposit", amount);

    showMessage("✅ Money deposited successfully!", "success");

    amountInput.value = "";
}

// თანხის გამოტანა
function withdrawMoney() {

    const amount = Number(amountInput.value);

    if (amountInput.value.trim() === "" ||
        !Number.isFinite(amount) || amount <= 0) {

        showMessage("❌ Please enter a valid amount!", "error");
        return;
    }

    if (amount > balance) {
        showMessage("❌ Insufficient funds!", "error");
        return;
    }

    balance -= amount;

    updateBalance();

    addTransaction("Withdraw", amount);

    showMessage("✅ Money withdrawn successfully!", "success");

    amountInput.value = "";
}

// მონაცემების განულება
function resetBank() {

    balance = 1000;
    transactionCount = 0;

    updateBalance();

    history.innerHTML = "";

    lastTransaction.textContent = "Last transaction: None";
    totalTransactions.textContent = "Total transactions: 0";

    amountInput.value = "";

    showMessage("✅ Account reset successfully!", "success");
}

// ღილაკებზე ფუნქციების მიბმა
depositBtn.addEventListener("click", depositMoney);

withdrawBtn.addEventListener("click", withdrawMoney);

resetBtn.addEventListener("click", resetBank);

// საწყისი ბალანსის ჩვენება
updateBalance();
