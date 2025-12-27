<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Hope Charity</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

<header>      
    <h1>Hope Charity</h1>
    <nav>
        <a href="index.html">Home</a>
        <a href="donate.html">Donate</a>
        <a href="about.html">About</a>
        <a href="contact.html">Contact</a>
    </nav>
</header>

<section class="hero">
    <h2>Together We Can Make a Difference</h2>
    <p>Your donation helps people in need worldwide</p>
    <a href="donate.html" class="btn">Donate Now</a>
</section>

<footer>
    <p>© 2025 Hope Charity. All rights reserved.</p>
</footer>

</body>
</html>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Donate</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

<header>
    <h1>Donate</h1>
</header>

<section class="card">
    <h2>Support Our Mission</h2>

    <input type="text" id="name" placeholder="Your Name">
    <input type="email" id="email" placeholder="Email">
    <input type="number" id="amount" placeholder="Amount ($)">

    <div class="amounts">
        <button onclick="setAmount(10)">$10</button>
        <button onclick="setAmount(25)">$25</button>
        <button onclick="setAmount(50)">$50</button>
    </div>

    <button class="btn" onclick="donate()">Donate Securely</button>
    <p id="message"></p>
</section>

<script src="main.js"></script>
</body>
</html>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>About Us</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

<header>
    <h1>About Hope Charity</h1>
</header>

<section class="content">
    <p>
        Hope Charity is a non-profit organization dedicated to helping
        vulnerable communities through education, food aid, and healthcare.
    </p>
</section>

<footer>
    <p>Transparency • Trust • Humanity</p>
</footer>

</body>
</html>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Contact</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

<header>
    <h1>Contact Us</h1>
</header>

<section class="card">
    <input type="text" placeholder="Your Name">
    <input type="email" placeholder="Your Email">
    <textarea placeholder="Your Message"></textarea>
    <button class="btn">Send Message</button>
</section>

</body>
</html>
body {
    margin: 0;
    font-family: Arial, sans-serif;
    background: #f4f6f8;
    color: #333;
}

header {
    background: #0072ff;
    color: white;
    padding: 15px;
    text-align: center;
}

nav a {
    color: white;
    margin: 0 10px;
    text-decoration: none;
}

.hero {
    padding: 60px;
    text-align: center;
    background: linear-gradient(to right, #00c6ff, #0072ff);
    color: white;
}

.btn {
    background: #28a745;
    color: white;
    padding: 12px 20px;
    text-decoration: none;
    border-radius: 6px;
    border: none;
    cursor: pointer;
}

.card {
    max-width: 400px;
    margin: 40px auto;
    background: white;
    padding: 25px;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

input, textarea {
    width: 100%;
    margin: 10px 0;
    padding: 10px;
}

.amounts button {
    margin: 5px;
}
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

