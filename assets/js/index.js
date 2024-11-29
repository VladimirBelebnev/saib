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

// No UI Slider

const soundRange = document.querySelector(".video__sound-range");

if (soundRange) {
    noUiSlider.create(soundRange, {
        start: 127,
        connect: [false, true],
        orientation: "vertical",
        range: {
            'min': 0,
            'max': 100
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
const modals = document.querySelectorAll(".modal");

// Search Element List Variables

const searchElements = document.querySelectorAll(".search-element__btn");
const searchElementWrapper = document.querySelectorAll(".modal__company-input");
const elementsDeleteButtons = document.querySelectorAll(".modal__company > .modal__company-delete");
const searchInput = document.querySelectorAll(".search-element__input");

// Toggle Password Variables

const togglePassButtons = document.querySelectorAll(".input-group__toggle-pass");

// Calendare Variables

const calendareNextBtn = document.querySelector(".calendare__next-btn");
const calendarePrevBtn = document.querySelector(".calendare__prev-btn");
const currentDate = document.querySelector(".calendare__current-month");
const saveDiapasonBtn = document.querySelector(".calendare__cancel-btn");
const selectDiapasonButtons = document.querySelectorAll(".calendare .drop-down__btn");
let cellsSingle;

let currentMonth = currentDate?.getAttribute("data-date").split(".")[1];
let currentYear = currentDate?.getAttribute("data-date").split(".")[0];

let currentDiapason = 7;
let isDiapason;

// Diapason Variables

const checkboxes = document.querySelectorAll(".checkbox-quadro__input");

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

// Calendare Methods

function getDay(date) {
    let trueDate = date.getDay();

    if (trueDate == 0) {
        trueDate = 7;
    }

    return trueDate - 1;
}

function generateMonth(tbody, year, month) {
    let trueMonth = month - 1;
    let date = new Date(year, trueMonth);
    let table = document.querySelector(tbody);
    let tableBody = "";
    let previousMonthDate = new Date(year, trueMonth - 1);
    let lastDayPrevMonth = 0;
    let tableParent = table.closest(".calendare");
    isDiapason = !!(tableParent.getAttribute("data-is-diapason"));

    table.innerHTML = "";

    tableBody += "<tr class='calendare__table-row'>";

    while (previousMonthDate.getMonth() == trueMonth - 1) {
        lastDayPrevMonth += 1;
        previousMonthDate.setDate(previousMonthDate.getDate() + 1);
    }

    for (let i = 0; i < getDay(date); i++) {
        let startDate = lastDayPrevMonth - (getDay(date) - 1);

        tableBody += `<td class="calendare__cell calendare__cell_out-month" data-date="${currentYear}.${currentMonth - 1}.${startDate + i}">
            ${startDate + i}
        </td>`;
    }

    while (date.getMonth() == trueMonth) {
        tableBody += `<td class="calendare__cell" data-date="${currentYear}.${currentMonth}.${date.getDate()}">
            ${date.getDate()}
        </td>`;

        if (getDay(date) == 6) {
            tableBody += `</tr><tr class='calendare__table-row'>`;
        }

        date.setDate(date.getDate() + 1);
    }

    if (getDay(date) != 0) {
        while (getDay(date) != 0) {
            tableBody += `<td class="calendare__cell calendare__cell_out-month" data-date="${currentYear}.${currentMonth + 1}.${date.getDate()}">
                ${date.getDate()}
            </td>`;

            date.setDate(date.getDate() + 1);
        }
    }

    table.innerHTML = tableBody;
    
    Array.from(table.querySelectorAll(".calendare__cell")).forEach(item => {
        let itemDateArray = item.getAttribute("data-date").split(".");
        let itemDate = new Date(itemDateArray[0], itemDateArray[1] - 1, itemDateArray[2]);
        let currentDate = new Date();

        item.setAttribute("data-order", `${Math.round((((itemDate - currentDate) / 1000) / 3600) / 24) + currentDate.getDate() + 1}`);
    });

    if (isDiapason) {
        interpretateDiapason(currentDiapason);

        let start = new Date();
        let end = new Date();

        end.setDate((new Date()).getDate() - currentDiapason);

        const currentDateInput = table.closest(".select-input-2").querySelector(".input__select-value");

        currentDateInput.textContent = `${end.getFullYear()}.${end.getMonth()}.${end.getDate() < 10 ? "0" + end.getDate() : end.getDate()} - ${start.getFullYear()}.${start.getMonth()}.${start.getDate() < 10 ? "0" + start.getDate() : start.getDate()}`;
    }

    cellsSingle = document.querySelectorAll(".calendare__cell:not(.calendare__cell_title)");

    if (!isDiapason) {
        cellsSingle.forEach(item => {
                item.addEventListener("click", (event) => {
                let currentCell = event.currentTarget;

                cellsSingle.forEach(item => item.classList.remove("calendare__cell_active"));
                currentCell.classList.add("calendare__cell_active");
            });
        })
    }
}

function toggleDate(direction, dateElem) {

    if (direction == "next") {

        if (currentMonth >= 12) {
            currentYear++;
            currentMonth = 1;
        }   else {
            currentMonth++;
        }

        generateMonth(".calendare__table-body", currentYear, currentMonth);
    }   else {

        if (currentMonth <= 1) {
            currentYear--;
            currentMonth = 12;
        }   else {
            currentMonth--;
        }

        generateMonth(".calendare__table-body", currentYear, currentMonth);
    }

    dateElem.setAttribute("data-date", `${currentYear}.${currentMonth}`);
    dateElem.textContent = `${translateMonth(currentMonth)} ${currentYear}`;
}

function translateMonth(month) {
    switch (month) {
        case 1:
            return "Январь"
            break;

            case 2:
            return "Февраль"
            break;

            case 3:
            return "Март"
            break;

            case 4:
            return "Апрель"
            break;

            case 5:
            return "Май"
            break;

            case 6:
            return "Июнь"
            break;

            case 7:
            return "Июль"
            break;

            case 8:
            return "Август"
            break;

            case 9:
            return "Сентябрь"
            break;

            case 10:
            return "Октябрь"
            break;

            case 11:
            return "Ноябрь"
            break;

            case 12:
            return "Декабрь"
            break;
    }
}

function setDiapasonCalendare(start, end, cells) {
    Array.from(cells).forEach(cell => {
        const value = +(cell.getAttribute("data-order"));

        if (value > start && value < end) {
            cell.classList.add("calendare__cell_active");
        }   else if (value == start) {
            cell.classList.add("calendare__cell_active-start");
        }   else if (value == end) {
            cell.classList.add("calendare__cell_active-end");
        }
    });
}

function interpretateDiapason(length) {
    const date = new Date();
    const cells = Array.from(document.querySelectorAll(".calendare__cell")).filter(item => !(item.classList.contains("calendare__cell_title")));

    setDiapasonCalendare(date.getDate() - length, date.getDate(), cells);
}

function closeAllDropDowns(elements) {
    elements.forEach(item => item.classList.add("none"));
}

// Event Listeners

// Calendare Events

if (currentDate) {

    generateMonth(".calendare__table-body", currentYear, currentMonth);

    calendareNextBtn?.addEventListener("click", (event) => {
        event.preventDefault();
        const dateElem = event.currentTarget.closest(".calendare__header").querySelector(".calendare__current-month");

        toggleDate("next", dateElem);
    });

    calendarePrevBtn?.addEventListener("click", (event) => {
        event.preventDefault();
        const dateElem = event.currentTarget.closest(".calendare__header").querySelector(".calendare__current-month");

        toggleDate("prev", dateElem);
    });

    saveDiapasonBtn?.addEventListener("click", (event) => {
        const currentBtn = event.currentTarget;
        const diapasonButtons = currentBtn.closest(".calendare__select-wrapper").querySelectorAll(".drop-down__btn");
        const diapasonActiveBtnValue = Array.from(diapasonButtons).find(item => item.classList.contains("drop-down__btn_active"))
                                    .getAttribute("data-diapason");
        const diapasonInput = currentBtn.closest(".calendare__select-wrapper").querySelector(".select-diapason__input-value");

        if (diapasonInput/*.value*/) {
            currentDiapason = +diapasonInput.value;
            generateMonth(".calendare__table-body", currentYear, currentMonth);
        }   else {
            currentDiapason = +diapasonActiveBtnValue;
            generateMonth(".calendare__table-body", currentYear, currentMonth);
        }
    });

    selectDiapasonButtons.forEach(item => {
        item?.addEventListener("click", (event) => {
            event.preventDefault();
            const currentBtn = event.currentTarget;
            const diapasonButtons = currentBtn.closest(".calendare__select-wrapper").querySelectorAll(".drop-down__btn");

            diapasonButtons.forEach(item => item.classList.remove("drop-down__btn_active"));

            currentBtn.classList.add("drop-down__btn_active");
        });
    });

}

modalButtons?.forEach(btn => {
    btn.addEventListener("click", (event) => {
        openModal(event.currentTarget);
        event.preventDefault();
    });
});

searchElements?.forEach(element => {
    element.addEventListener("click", (event) => {
        event.preventDefault();
        let currentWrapper = event.currentTarget.closest(".modal__input-wrapper").querySelector(".modal__company-input");

        addElement(currentWrapper, event.currentTarget.textContent);
    });
});

elementsDeleteButtons?.forEach(element => {
    element.addEventListener("click", (event) => {
        const currentElement = event.currentTarget.closest(".modal__company");

        removeElement(currentElement);
        event.preventDefault();
    });
});

searchInput?.forEach(item => {
    item.addEventListener("input", (event) => {
        event.preventDefault();
        search(event.currentTarget.value, searchElements);
    });
});

modals?.forEach(modal => {
    modal.addEventListener("click", (event) => {
        if (event.currentTarget == event.target) {
            closeAllModals();
        }
    });
});

togglePassButtons?.forEach(btn => {
    btn.addEventListener("click", (event) => {
        const input = event.currentTarget.previousElementSibling;

        if (input.type == "text") {
            input.type = "password";
        }   else {
            input.type = "text";
        }

        event.preventDefault();
    });
});

// Practice

// var validPath = function(n, edges, source, destination) {
//     let checked = {};
//     let graph = {};

//     edges.forEach(elem => {
//         if (!graph[elem[0]]) {
//             graph[elem[0]] = [];
//         }
        
//         if (!graph[elem[1]]) {
//             graph[elem[1]] = [];
//         }
//         graph[elem[0]].push(elem[1]);
//         graph[elem[1]].push(elem[0]);
//     });

//     let queue = graph[source];
//     if (!queue) return true;
 
//     while (queue.length) {
//         let elem = queue.shift();

//         if (checked[elem] != "") {
//             if (elem === destination) {
//                 return true;
//             }   else {
//                 queue.push(...graph[elem]);
//                 checked[elem] = "";
//             }
//         }
//     }

//     return false;
// };

// console.log(validPath(1, [], 0, 0));