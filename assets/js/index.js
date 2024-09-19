// Graphics

const ctx1 = document.querySelector(".statistic__graphic-1");
const ctx2 = document.querySelector(".statistic__graphic-2");
const ctx3 = document.querySelector(".statistic__graphic-3");
const ctx4 = document.querySelector(".statistic__graphic-4");
const ctx5 = document.querySelector(".statistic__graphic-5");

if (ctx1) {
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
}

// Main JS

// Variables

// Navbar Variables

const navbar = document.querySelector(".side-panel");
const currentWidth = document.documentElement.offsetWidth;

// Modal Variables

const modalButtons = document.querySelectorAll("button[data-modal], a[data-modal]");

// Search Element List Variables

const searchElements = document.querySelectorAll(".search-element__btn");
const searchElementWrapper = document.querySelector(".modal__company-input");
const elementsDeleteButtons = document.querySelectorAll(".modal__company > .modal__company-delete");
const searchInput = document.querySelector(".search-element__input");

// Start Values

if (currentWidth <= 991) {
    navbar.setAttribute("data-modal", "side-panel");
    navbar.classList.add("hidden");
}

document.querySelectorAll("*[data-modal]:not(button, a)").forEach(modal => {
    modal.style.transition = 0.5 + "s";
});

// Functions

// Modal Windows Functions

function openModal(currentBtn) {
    const currentData = currentBtn.getAttribute("data-modal");
    const currentModal = document.querySelector(`*[data-modal='${currentData}']:not(button, a)`);

    closeAllModals();

    if (currentModal) {
        currentModal.classList.remove("hidden");
    }
}

function closeAllModals() {
    const modals = document.querySelectorAll("*[data-modal]:not(button, a)");

    modals.forEach(modal => {
        modal.classList.add("hidden");
    });
}

// Search Element Functions

function addElement(wrapper, elementText) {
    wrapper.insertAdjacentHTML("beforeend", `
        <div class="modal__company">
            <span class="modal__company-text">
                ${elementText}
            </span>

            <button class="modal__company-delete">
                <svg width="8" height="8" viewBox="0 0 8 8" fill="white" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.77296 6.97699C7.87863 7.08266 7.938 7.22599 7.938 7.37543C7.938 7.52487 7.87863 7.66819 7.77296 7.77387C7.66729 7.87954 7.52397 7.9389 7.37453 7.9389C7.22508 7.93891 7.08176 7.87954 6.97609 7.77387L3.99999 4.79683L1.02296 7.77293C0.917291 7.8786 0.773969 7.93797 0.624526 7.93797C0.475083 7.93797 0.331761 7.8786 0.226089 7.77293C0.120417 7.66726 0.0610504 7.52393 0.0610504 7.37449C0.0610504 7.22505 0.120417 7.08173 0.226089 6.97605L3.20312 3.99996L0.227026 1.02293C0.121354 0.917256 0.0619879 0.773934 0.0619879 0.624491C0.0619879 0.475048 0.121354 0.331726 0.227026 0.226054C0.332698 0.120382 0.47602 0.0610155 0.625463 0.0610155C0.774907 0.0610155 0.918229 0.120382 1.0239 0.226054L3.99999 3.20309L6.97703 0.225585C7.0827 0.119913 7.22602 0.0605469 7.37546 0.0605469C7.52491 0.0605469 7.66823 0.119913 7.7739 0.225585C7.87957 0.331257 7.93894 0.474579 7.93894 0.624022C7.93894 0.773466 7.87957 0.916788 7.7739 1.02246L4.79687 3.99996L7.77296 6.97699Z" fill="inherit" />
                </svg>
            </button>
        </div>
    `);

    const currentElement = wrapper.lastElementChild.lastElementChild;

    currentElement.addEventListener("click", (event) => {
        const currentElement = event.currentTarget.closest(".modal__company");

        removeElement(currentElement);
        event.preventDefault();
    });
}

function removeElement(currentElement) {
    currentElement.remove();
}

function search(currentValue, elements) {
    if (currentValue == "") {
        elements.forEach(element => element.closest("li").classList.remove("none"));
    }   else {
        elements.forEach(element => {
            if (element.textContent.includes(currentValue)) {
                element.closest("li").classList.remove("none");
            }   else {
                element.closest("li").classList.add("none");
            }
        });
    }

    const openElementsCount = Array.from(elements).filter(element => !(element.closest("li").classList.contains("none"))).length;
    console.log(openElementsCount);
    const notFoundError = elements[0].closest("ul").querySelector(".search-element__item_not-found");

    if (openElementsCount === 0) {
        notFoundError.classList.remove("none");
    }   else {
        notFoundError.classList.add("none");
    }
}

// Event Listeners

modalButtons.forEach(btn => {
    btn.addEventListener("click", (event) => {
        openModal(event.currentTarget);
        event.preventDefault();
    });
});

searchElements.forEach(element => {
    element.addEventListener("click", (event) => {
        addElement(searchElementWrapper, event.currentTarget.textContent);
        event.preventDefault();
    });
});

elementsDeleteButtons.forEach(element => {
    element.addEventListener("click", (event) => {
        const currentElement = event.currentTarget.closest(".modal__company");

        removeElement(currentElement);
        event.preventDefault();
    });
});

searchInput.addEventListener("input", (event) => {
    search(event.currentTarget.value, searchElements);
});