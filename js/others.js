// Data de início
const startYear = 2018;
const startMonth = 0; // Janeiro é mês 0 em JavaScript

// Data atual
const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const currentMonth = currentDate.getMonth();

// Cálculo de anos de experiência
let experienceYears = currentYear - startYear;
if (currentMonth < startMonth) {
    experienceYears -= 1; // Ajusta se o mês atual for antes de janeiro
}

// Exibe no HTML
document.getElementById("experience-years").textContent = experienceYears;