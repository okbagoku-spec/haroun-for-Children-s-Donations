function setAmount(value) {
    document.getElementById("amount").value = value;
}

function donate() {
    const name = document.getElementById("name").value;
    const amount = document.getElementById("amount").value;

    if (!name || !amount) {
        alert("Please fill all fields");
        return;
    }

    document.getElementById("message").innerText =
        `Thank you ${name}, your donation of $${amount} was received ❤️`;
}
