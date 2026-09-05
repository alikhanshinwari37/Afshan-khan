const roles = [
    "Web Developer",
    "Frontend Developer",
    "Backend Developer — Learning"
];

const roleText = document.getElementById("role-text");

let currentRole = 0;

setInterval(() => {

    roleText.classList.add("role-changing");

    setTimeout(() => {

        currentRole =
            (currentRole + 1) % roles.length;

        roleText.textContent =
            roles[currentRole];

        roleText.classList.remove("role-changing");

    }, 350);

}, 2500);