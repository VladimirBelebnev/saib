// Graphics

const ctx1 = document.querySelector(".statistic__graphic-1");
const ctx2 = document.querySelector(".statistic__graphic-2");
const ctx3 = document.querySelector(".statistic__graphic-3");
const ctx4 = document.querySelector(".statistic__graphic-4");
const ctx5 = document.querySelector(".statistic__graphic-5");

const chart1 = new Chart(ctx1, {
    type: "doughnut",
    data: {
        labels: ["1", "2"],
        datasets: [
        {
            label: "Отправлено писем",
            data: [74],
            // borderRadius: 5,
            cutout: 35,
            borderWidth: 0,
            backgroundColor: [
                "rgba(25, 186, 147, 1)",
            ]
        },
    ]
    },
    options: {
        plugins: {
            legend: {
                display: false
            },
            tooltip: false,
        },
    },
});

const chart2 = new Chart(ctx2, {
    type: "doughnut",
    data: {
        labels: ["1", "2"],
        datasets: [
        {
            label: "Открыто писем",
            data: [43, 31],
            // borderRadius: 5,
            cutout: 35,
            borderWidth: 0,
            backgroundColor: [
                "rgba(255, 184, 0, 1)",
                "#DDE5EC",
            ]
        },
    ]
    },
    options: {
        plugins: {
            legend: {
                display: false
            },
            tooltip: false,
        },
    },
});

const chart3 = new Chart(ctx3, {
    type: "doughnut",
    data: {
        labels: ["1", "2"],
        datasets: [
        {
            label: "Переходов по ссылкам",
            data: [31, 43],
            // borderRadius: 5,
            cutout: 35,
            borderWidth: 0,
            backgroundColor: [
                "rgba(255, 122, 0, 1)",
                "#DDE5EC",
            ]
        },
    ]
    },
    options: {
        plugins: {
            legend: {
                display: false
            },
            tooltip: false,
        },
    },
});

const chart4 = new Chart(ctx4, {
    type: "doughnut",
    data: {
        labels: ["1", "2"],
        datasets: [
        {
            label: "Отправлено данных",
            data: [20, 54],
            // borderRadius: 5,
            cutout: 35,
            borderWidth: 0,
            backgroundColor: [
                "rgba(231, 54, 15, 1)",
                "#DDE5EC",
            ]
        },
    ]
    },
    options: {
        plugins: {
            legend: {
                display: false
            },
            tooltip: false,
        },
    },
});

const chart5 = new Chart(ctx5, {
    type: "doughnut",
    data: {
        labels: ["1", "2"],
        datasets: [
        {
            label: "Жалоб на письма",
            data: [1, 73],
            // borderRadius: 5,
            cutout: 35,
            borderWidth: 0,
            backgroundColor: [
                "rgba(17, 112, 199, 1)",
                "#DDE5EC",
            ]
        },
    ]
    },
    options: {
        plugins: {
            legend: {
                display: false
            },
            tooltip: false,
        },
    },
});

// Main JS

const navbar = document.querySelector(".side-panel");
const navbarOpenBtn = document.querySelector(".statistic__mobile-btn");
const navbarSkipBtn = document.querySelector(".side-panel__skip-btn");

const currentWidth = document.documentElement.offsetWidth;

if (currentWidth <= 991) {
    navbar.classList.add("hidden");
}

// Event Listeners

navbarOpenBtn.addEventListener("click", () => {
    navbar.classList.remove("hidden");
});

navbarSkipBtn.addEventListener("click", () => {
    navbar.classList.add("hidden");
});