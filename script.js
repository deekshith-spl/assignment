function showDetails(course) {
    let content = document.getElementById("details-content");

    if (course === "ai1") {
        content.innerHTML = `
            <h3>PYHTON </h3>
            <p><strong>Description:</strong> Learn python in detail.</p>
            <p><strong>Instructor:</strong> Tech Academy</p>
            <p><strong>Curriculum:</strong> Python, AI Tools, Automation</p>
            <p><strong>Duration:</strong> 6 Weeks</p>
            <button class="enroll-btn" onclick="enroll(this, 'python')">Enroll</button>
        `;
    }

    else if (course === "ai2") {
        content.innerHTML = `
            <h3>JAVA</h3>
            <p><strong>Description:</strong>Learn java in detail.</p>
            <p><strong>Instructor:</strong> 365 Careers</p>
            <p><strong>Curriculum:</strong> ML, DL, NLP</p>
            <p><strong>Duration:</strong> 8 Weeks</p>
            <button class="enroll-btn" onclick="enroll(this, 'AI Engineer')">Enroll</button>
        `;
    }

    else if (course === "ai3") {
        content.innerHTML = `
            <h3>WEB DEVEOPMENT</h3>
            <p><strong>Description:</strong> Learn WEB DEVELOPMENT in detail.</p>
            <p><strong>Instructor:</strong> 365 Careers</p>
            <p><strong>Curriculum:</strong> Agents, APIs, Automation</p>
            <p><strong>Duration:</strong> 5 Weeks</p>
            <button class="enroll-btn" onclick="enroll(this, 'AI Agents')">Enroll</button>
        `;
    }

    else if (course === "ai4") {
        content.innerHTML = `
            <h3>MACHINE LEARNING</h3>
            <p><strong>Description:</strong> Learn Machine learningcin deatil</p>
            <p><strong>Instructor:</strong> Selfcode</p>
            <p><strong>Curriculum:</strong> SOC, Threat Detection</p>
            <p><strong>Duration:</strong> 7 Weeks</p>
            <button class="enroll-btn" onclick="enroll(this, 'AI Security')">Enroll</button>
        `;
    }
}

/* ENROLL FUNCTION */
function enroll(button, course) {
    button.innerText = "Enrolled ✅";
    button.disabled = true;
    button.style.background = "gray";

    alert("Successfully enrolled in " + course);
}
/* ================= REGISTER VALIDATION ================= */
document.getElementById("registerForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("regName").value.trim();
    let email = document.getElementById("regEmail").value.trim();
    let password = document.getElementById("regPassword").value;
    let confirmPassword = document.getElementById("regConfirmPassword").value;
    let msg = document.getElementById("registerMsg");

    if (name === "" || email === "" || password === "" || confirmPassword === "") {
        msg.style.color = "red";
        msg.textContent = "All fields are required";
        return;
    }

    if (!email.includes("@")) {
        msg.style.color = "red";
        msg.textContent = "Enter a valid email";
        return;
    }

    if (password.length < 6) {
        msg.style.color = "red";
        msg.textContent = "Password must be at least 6 characters";
        return;
    }

    if (password !== confirmPassword) {
        msg.style.color = "red";
        msg.textContent = "Passwords do not match";
        return;
    }

    /* fake storage */
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPassword", password);

    msg.style.color = "lightgreen";
    msg.textContent = "Registration successful";
});


/* ================= LOGIN VALIDATION ================= */
document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let email = document.getElementById("loginEmail").value.trim();
    let password = document.getElementById("loginPassword").value;
    let msg = document.getElementById("loginMsg");

    let storedEmail = localStorage.getItem("userEmail");
    let storedPassword = localStorage.getItem("userPassword");

    if (email === "" || password === "") {
        msg.style.color = "red";
        msg.textContent = "All fields are required";
        return;
    }

    if (email === storedEmail && password === storedPassword) {
        msg.style.color = "lightgreen";
        msg.textContent = "Login successful";
    } else {
        msg.style.color = "red";
        msg.textContent = "Invalid email or password";
    }
});