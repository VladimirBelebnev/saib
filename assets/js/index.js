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
const saveDiapasonBtn = document.querySelector(".calendare__save-btn");
const selectDiapasonButtons = document.querySelectorAll(".calendare .drop-down__btn");
let cellsSingle;

let currentMonth = currentDate?.getAttribute("data-date").split(".")[1];
let currentYear = currentDate?.getAttribute("data-date").split(".")[0];

let currentDiapason = 7;
let isDiapason;

// Diapason Variables

const checkboxes = document.querySelectorAll(".checkbox-quadro__input");

// Pop Up Variables

const popUpWrappers = document.querySelectorAll(".click-pop-up .input-group");

const visibleCells = document.querySelectorAll(".latest__cell-visible");
const hiddenCells = document.querySelectorAll(".latest__cell-hidden input");

// Latest Tabs

const tabButtons = document.querySelectorAll(".latest__tab-btn");

// Latest Drop Downs

const latestDropDownButtons = document.querySelectorAll(".latest__drop-down-btn");

// Side Panel Drop-Downs

const dropDownButtons = document.querySelectorAll(".side-panel__link-item_drop-down .side-panel__link");

// Edit Tabs

const editTabButtons = document.querySelectorAll(".modal__edit-tab-btn");

// Lending

const lendingCheckbox = document.querySelector(".lending__checkbox");

// User Options

const userOptions = document.querySelector(".monitoring__toggle-btn");

// Settings Tabs

const settingsTabButtons = document.querySelectorAll(".tabs__btn");

// Lessons Like

const lessonsLikes = document.querySelectorAll(".lesson__like");

// Copy Buttons

const copyButtons = document.querySelectorAll(".copy-btn");
const modalCopyButtons = document.querySelectorAll(".modal__copy-btn");

// All Checkboxes

const allCheckboxes = document.querySelectorAll(".checkbox_minus input");

// Video

const video = document.querySelector(".video__video");
const playbackBtn = document.querySelector(".video__reload-btn");
const fullScreenBtn = document.querySelector(".video__fullscreen-btn");

// Selected

const selectedCount = document.querySelector(".selected__count");
const titleCheckboxes = document.querySelectorAll(".latest__header-left-section input");

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

        currentModal.dispatchEvent(new CustomEvent("open", {
            detail: { name: currentData },
        }));
    }
}

function setInitButtons() {
    const searchElements = document.querySelectorAll(".search-element__btn:not(.init)");
    const elementsDeleteButtons = document.querySelectorAll(".modal__company > .modal__company-delete:not(.init)");
    const searchInput = document.querySelectorAll(".search-element__input:not(.init)");

    initSearchElements(searchElements);
    initDeleteButtons(elementsDeleteButtons);
    initSearchInputs(searchInput);
}

modals.forEach(item => {
    item.addEventListener("open", (event) => {

        let currentData = event.detail.name; // Значение data-modal текущей модалки

        if (currentData === "statistic-filter") {
            // api.groups.summary().success(function(groups) {
            //     groups.groups.forEach(group => {
            //     const listItem = document.createElement('li');
            //     listItem.classList.add('search-element__item');
            //     const button = document.createElement('button');
            //     button.classList.add('search-element__btn');
            //     console.log("group!", group)
            //     button.textContent = group.name;
            //     listItem.appendChild(button);
            //     dropdownGroupsList.appendChild(listItem);
            //     });
            // }).error(function(error) {
            //     console.error("Ошибка при получении групп:", error);
            // });

            setInitButtons();
        }
    });
});

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

function initSearchElements(elements) {
    elements?.forEach(element => {
        element.addEventListener("click", (event) => {
            event.preventDefault();
            let currentWrapper = event.currentTarget.closest(".modal__input-wrapper").querySelector(".modal__company-input");
    
            if (currentWrapper) {
                addElement(currentWrapper, event.currentTarget.textContent);
            }   else {
                let value = event.currentTarget.closest(".modal__input-wrapper").querySelector(".input-group__drop-down-btn");
                value.innerHTML = `${event.currentTarget.textContent} <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.77995 9.71691C7.63905 9.57601 7.44796 9.49686 7.2487 9.49686C7.04944 9.49686 6.85835 9.57601 6.71745 9.71691C6.57655 9.85781 6.4974 10.0489 6.4974 10.2482C6.4974 10.4474 6.57655 10.6385 6.71745 10.7794L11.7174 15.7794C11.7871 15.8493 11.8699 15.9048 11.9611 15.9427C12.0522 15.9805 12.15 16 12.2487 16C12.3474 16 12.4451 15.9805 12.5363 15.9427C12.6275 15.9048 12.7103 15.8493 12.7799 15.7794L17.7799 10.7794C17.9208 10.6385 18 10.4474 18 10.2482C18 10.0489 17.9208 9.85781 17.7799 9.71691C17.6391 9.57601 17.448 9.49686 17.2487 9.49686C17.0494 9.49686 16.8583 9.57601 16.7174 9.71691L12.2493 14.185L7.77995 9.71691Z" fill="#677075"></path>
                                    </svg>`;
                value.classList.add("input-group__drop-down-btn_changed");
            }
        });
        element.classList.add("init");
    });
}

function initDeleteButtons(elements) {
    elements?.forEach(element => {
        element.addEventListener("click", (event) => {
            const currentElement = event.currentTarget.closest(".modal__company");
    
            removeElement(currentElement);
            event.preventDefault();
        });
        element.classList.add("init");
    });
}

function initSearchInputs(elements) {
    elements?.forEach(item => {
        item.addEventListener("input", (event) => {
            event.preventDefault();
            search(event.currentTarget.value, searchElements);
        });
        item.classList.add("init");
    });
}

// Calendare Methods

// function getDay(date) {
//     let trueDate = date.getDay();

//     if (trueDate == 0) {
//         trueDate = 7;
//     }

//     return trueDate - 1;
// }

// function generateMonth(tbody, year, month) {
//     let trueMonth = month - 1;
//     let date = new Date(year, trueMonth);
//     let table = document.querySelector(tbody);
//     let tableBody = "";
//     let previousMonthDate = new Date(year, trueMonth - 1);
//     let lastDayPrevMonth = 0;
//     let tableParent = table.closest(".calendare");
//     isDiapason = !!(tableParent.getAttribute("data-is-diapason"));

//     const currentDateText = table.closest(".calendare").querySelector(".calendare__select-diapason");
//     const currentDateInput = table.closest(".calendare").previousElementSibling.querySelector(".input-group__input_date");

//     table.innerHTML = "";

//     tableBody += "<tr class='calendare__table-row'>";

//     while (previousMonthDate.getMonth() == trueMonth - 1) {
//         lastDayPrevMonth += 1;
//         previousMonthDate.setDate(previousMonthDate.getDate() + 1);
//     }

//     for (let i = 0; i < getDay(date); i++) {
//         let startDate = lastDayPrevMonth - (getDay(date) - 1);

//         tableBody += `<td class="calendare__cell calendare__cell_out-month" data-date="${(currentMonth - 1) == 0 ? currentYear - 1 : currentYear}.${(currentMonth - 1) == 0 ? 12 : currentMonth - 1}.${startDate + i}">
//             ${startDate + i}
//         </td>`;
//     }

//     while (date.getMonth() == trueMonth) {
//         tableBody += `<td class="calendare__cell" data-date="${currentYear}.${currentMonth}.${date.getDate()}">
//             ${date.getDate()}
//         </td>`;

//         if (getDay(date) == 6) {
//             tableBody += `</tr><tr class='calendare__table-row'>`;
//         }

//         date.setDate(date.getDate() + 1);
//     }

//     if (getDay(date) != 0) {
//         while (getDay(date) != 0) {
//             tableBody += `<td class="calendare__cell calendare__cell_out-month" data-date="${currentYear}.${currentMonth + 1}.${date.getDate()}">
//                 ${date.getDate()}
//             </td>`;

//             date.setDate(date.getDate() + 1);
//         }
//     }

//     table.innerHTML = tableBody;
    
//     Array.from(table.querySelectorAll(".calendare__cell")).forEach(item => {
//         let itemDateArray = item.getAttribute("data-date").split(".");
//         let itemDate = new Date(itemDateArray[0], itemDateArray[1] - 1, itemDateArray[2]);
//         let currentDate = new Date();

//         item.setAttribute("data-order", `${Math.round((((itemDate - currentDate) / 1000) / 3600) / 24) + currentDate.getDate() + 1}`);
//     });

//     if (isDiapason && currentDiapason != "today" && currentDiapason != "yesterday") {
//         interpretateDiapason(currentDiapason);

//         let start = new Date();
//         let end = new Date();

//         let currentDate = new Date();

//         if (currentDiapason == "currentmonth") {
//             end = new Date(currentDate.getFullYear(), currentDate.getMonth());
//             start = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1);

//             start.setDate(0);
//         }   else if (currentDiapason == "lastmonth") {
//             end = new Date(currentDate.getFullYear(), currentDate.getMonth());
//             start = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1);

//             end.setMonth(end.getMonth() - 1);
//             start.setMonth(start.getMonth() - 1);

//             start.setDate(0);
//         }   else {
//             end.setDate((new Date()).getDate() - currentDiapason);
//         }

//         currentDateText.textContent = `Выбран диапазон: ${end.getFullYear()}.${end.getMonth() + 1}.${end.getDate() < 10 ? "0" + end.getDate() : end.getDate()} - ${start.getFullYear()}.${start.getMonth() + 1}.${start.getDate() < 10 ? "0" + start.getDate() : start.getDate()}`;
//         currentDateInput.value = `${end.getFullYear()}.${end.getMonth() + 1}.${end.getDate() < 10 ? "0" + end.getDate() : end.getDate()} - ${start.getFullYear()}.${start.getMonth() + 1}.${start.getDate() < 10 ? "0" + start.getDate() : start.getDate()}`;
//     }

//     cellsSingle = document.querySelectorAll(".calendare__cell:not(.calendare__cell_title)");

//     if (!isDiapason) {
//         cellsSingle.forEach(item => {
//                 item.addEventListener("click", (event) => {
//                 let currentCell = event.currentTarget;

//                 cellsSingle.forEach(item => item.classList.remove("calendare__cell_active"));
//                 currentCell.classList.add("calendare__cell_active");
//             });
//         })
//     }

//     if (currentDiapason == "today") {
//         const date = new Date();
        
//         cellsSingle.forEach(item => {
//             const itemDate = (new Date(...(item.getAttribute("data-date").split("."))));
//             itemDate.setMonth(itemDate.getMonth() - 1);

//             if (itemDate.getDate() == date.getDate() && itemDate.getFullYear() == date.getFullYear() && itemDate.getMonth() == date.getMonth()) {
//                 item.classList.add("calendare__cell_active");

//                 currentDateText.textContent = `Выбрана дата: ${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate() < 10 ? "0" + date.getDate() : date.getDate()}`;
//                 currentDateInput.value = `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate() < 10 ? "0" + date.getDate() : date.getDate()}`;
//             }
//         });
//     }

//     if (currentDiapason == "yesterday") {
//         const date = new Date();
//         date.setDate(date.getDate() - 1);

//         cellsSingle.forEach(item => {
//             const itemDate = (new Date(...(item.getAttribute("data-date").split("."))));
//             itemDate.setMonth(itemDate.getMonth() - 1);

//             if (itemDate.getDate() == date.getDate() && itemDate.getFullYear() == date.getFullYear() && itemDate.getMonth() == date.getMonth()) {
//                 item.classList.add("calendare__cell_active");

//                 currentDateText.textContent = `Выбрана дата: ${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate() < 10 ? "0" + date.getDate() : date.getDate()}`;
//                 currentDateInput.value = `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate() < 10 ? "0" + date.getDate() : date.getDate()}`;
//             }
//         });
//     }
// }

// function toggleDate(direction, dateElem) {

//     if (direction == "next") {

//         if (currentMonth >= 12) {
//             currentYear++;
//             currentMonth = 1;
//         }   else {
//             currentMonth++;
//         }

//         generateMonth(".calendare__table-body", currentYear, currentMonth);
//     }   else {

//         if (currentMonth <= 1) {
//             currentYear--;
//             currentMonth = 12;
//         }   else {
//             currentMonth--;
//         }

//         generateMonth(".calendare__table-body", currentYear, currentMonth);
//     }

//     dateElem.setAttribute("data-date", `${currentYear}.${currentMonth}`);
//     dateElem.textContent = `${translateMonth(currentMonth)} ${currentYear}`;
// }

// function translateMonth(month) {
//     switch (month) {
//         case 1:
//             return "Январь"
//             break;

//             case 2:
//             return "Февраль"
//             break;

//             case 3:
//             return "Март"
//             break;

//             case 4:
//             return "Апрель"
//             break;

//             case 5:
//             return "Май"
//             break;

//             case 6:
//             return "Июнь"
//             break;

//             case 7:
//             return "Июль"
//             break;

//             case 8:
//             return "Август"
//             break;

//             case 9:
//             return "Сентябрь"
//             break;

//             case 10:
//             return "Октябрь"
//             break;

//             case 11:
//             return "Ноябрь"
//             break;

//             case 12:
//             return "Декабрь"
//             break;
//     }
// }

// function setDiapasonCalendare(start, end, cells) {
//     Array.from(cells).forEach(cell => {
//         const value = +(cell.getAttribute("data-order"));

//         if (value > start && value < end) {
//             cell.classList.add("calendare__cell_active");
//         }   else if (value == start) {
//             cell.classList.add("calendare__cell_active-start");
//         }   else if (value == end) {
//             cell.classList.add("calendare__cell_active-end");
//         }
//     });
// }

// function interpretateDiapason(length) {
//     const date = new Date();
//     let monthDays;
//     let start, end;
//     const cells = Array.from(document.querySelectorAll(".calendare__cell")).filter(item => !(item.classList.contains("calendare__cell_title")));

//     switch (length) {
//         case ("currentmonth"):
//             start = new Date(date.getFullYear(), date.getMonth());
//             end = new Date(date.getFullYear(), date.getMonth() + 1);

//             end.setDate(0);
//         break;

//         case ("lastmonth"):
//             let copyDate = new Date();
//             copyDate.setDate(0);
//             monthDays = copyDate.getDate();

//             start = new Date(date.getFullYear(), date.getMonth());
//             end = new Date(date.getFullYear(), date.getMonth() + 1);

//             end.setDate(0);

//             start.setMonth(start.getMonth() - 1);
//             end.setMonth(end.getMonth() - 1);

//             console.log(start, end);
//         break;
//     }

//     if (start || end) {
//         if (length == "currentmonth") {
//             setDiapasonCalendare(start.getDate(), end.getDate(), cells);
//         }   else {
//             setDiapasonCalendare(start.getDate() - monthDays, end.getDate() - monthDays, cells);
//         }
//         return;
//     }

//     setDiapasonCalendare(date.getDate() - length, date.getDate(), cells);
// }

// function closeAllDropDowns(elements) {
//     elements.forEach(item => item.classList.add("none"));
// }

// // Event Listeners

// // Calendare Events

// if (currentDate) {

//     generateMonth(".calendare__table-body", currentYear, currentMonth);
//     const dateElems = document.querySelectorAll(".calendare__current-month");

//     dateElems.forEach(item => {
//         toggleDate("next", item);
//     });

//     calendareNextBtn?.addEventListener("click", (event) => {
//         event.preventDefault();
//         const dateElem = event.currentTarget.closest(".calendare__header").querySelector(".calendare__current-month");

//         toggleDate("next", dateElem);
//     });

//     calendarePrevBtn?.addEventListener("click", (event) => {
//         event.preventDefault();
//         const dateElem = event.currentTarget.closest(".calendare__header").querySelector(".calendare__current-month");

//         toggleDate("prev", dateElem);
//     });

//     saveDiapasonBtn?.addEventListener("click", (event) => {
//         const currentBtn = event.currentTarget;
//         const diapasonButtons = currentBtn.closest(".calendare").querySelectorAll(".drop-down__btn");
//         const diapasonActiveBtnValue = Array.from(diapasonButtons).find(item => item.classList.contains("drop-down__btn_active"))
//                                     .getAttribute("data-diapason");
//         const diapasonInput = currentBtn.closest(".calendare").querySelector(".select-diapason__input-value");

//         if (diapasonInput/*.value*/) {
//             currentDiapason = +diapasonInput.value;
//             generateMonth(".calendare__table-body", currentYear, currentMonth);
//         }   else {
//             currentDiapason = isFinite(parseInt(diapasonInput)) ? +diapasonActiveBtnValue : diapasonActiveBtnValue;
//             generateMonth(".calendare__table-body", currentYear, currentMonth);
//         }
//     });

//     selectDiapasonButtons.forEach(item => {
//         item?.addEventListener("click", (event) => {
//             event.preventDefault();
//             const currentBtn = event.currentTarget;
//             const diapasonButtons = currentBtn.closest(".calendare__select-wrapper").querySelectorAll(".drop-down__btn");

//             diapasonButtons.forEach(item => item.classList.remove("drop-down__btn_active"));

//             currentBtn.classList.add("drop-down__btn_active");
//         });
//     });

// }

// Calendare

document.addEventListener('DOMContentLoaded', () => {
    let Calendar;

    if (window.VanillaCalendarPro) {
        Calendar = window.VanillaCalendarPro.Calendar;
    }

    let options = {
        inputMode: true,
        positionToInput: 'auto',
        locale: "ru-RU",
        selectedTheme: "light",

        onChangeToInput(self) {
            if (!self.context.inputElement) return;
            if (self.context?.selectedDates[0] && self.context?.selectedDates[1]) {
                self.context.inputElement.closest(".input-group").setAttribute("data-date", `${self.context.selectedDates[0]} - ${self.context.selectedDates[1]}`);
            }   else if (self.context.selectedDates[0]) {
                self.context.inputElement.closest(".input-group").setAttribute("data-date", self.context.selectedDates[0]);
            }   else {
                self.context.inputElement.closest(".input-group").setAttribute("data-date", '');
            }
        },

        onClickDate(self) {
            const parent2 = document.querySelector(`.vc-${self.cindex}`);
            const result = parent2.querySelector(".vc__result");
            if (self.context?.selectedDates[0] && self.context?.selectedDates[1] && result) {
                result.textContent = `Выбран диапазон: ${self.context.selectedDates[0]} - ${self.context.selectedDates[1]}`;
            }   else if (self.context?.selectedDates[0] && result) {
                result.textContent = `Выбран диапазон: ${self.context.selectedDates[0]}`;
            }
        },

        onHide(self) {
            document.querySelectorAll(".vc.need-none").forEach(item => {
                item.classList.add("none");
            });
        },

        onShow(self) {
            if (!self.isActived) {
                const parent1 = self.context.inputElement.closest(".input-group");
                const parent2 = document.querySelector(`.vc-${self.cindex}`);
        
                const saveBtn = parent2.querySelector(".vc__save-btn");
                const cancelBtn = parent2.querySelector(".vc__cancel-btn");
                const todayBtn = parent2.querySelector("#today");
                const timeBtn = parent2.querySelector(".vc__time-btn");

                saveBtn.addEventListener("click", () => {
                    self.context.inputElement.value = parent1.getAttribute("data-date");
                    self.hide();
                });

                timeBtn?.addEventListener("click", () => {
                    self.context.inputElement.value = parent1.getAttribute("data-date");
                    self.hide();
                });

                todayBtn?.addEventListener("click", () => {
                    self.context.inputElement.closest(".input-group").setAttribute("data-date", self.context.dateToday);
                    self.context.inputElement.value = parent1.getAttribute("data-date");
                    self.hide();
                });
        
                cancelBtn.addEventListener("click", () => {
                    self.hide();
                    console.log(self.context);
                });

                self.isActived = true;
            }
        },
        
        layouts: {
            default: `
                <div class="vc-header" data-vc="header" role="toolbar" aria-label="Calendar Navigation">
                <#ArrowPrev />
                <div class="vc-header__content" data-vc-header="content">
                    <#Month />
                    <#Year />
                </div>
                <#ArrowNext />
                </div>
                <div class="vc-wrapper" data-vc="wrapper">
                <#WeekNumbers />
                <div class="vc-content" data-vc="content">
                    <#Week />
                    <#Dates />
                    <#DateRangeTooltip />
                </div>
                </div>
                <#ControlTime />
                <div class="vc__row">
                    <button class="vc__row-btn vc__today-btn" id="today">
                        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.75 2.5H14.875V1.875C14.875 1.70924 14.8092 1.55027 14.6919 1.43306C14.5747 1.31585 14.4158 1.25 14.25 1.25C14.0842 1.25 13.9253 1.31585 13.8081 1.43306C13.6908 1.55027 13.625 1.70924 13.625 1.875V2.5H7.375V1.875C7.375 1.70924 7.30915 1.55027 7.19194 1.43306C7.07473 1.31585 6.91576 1.25 6.75 1.25C6.58424 1.25 6.42527 1.31585 6.30806 1.43306C6.19085 1.55027 6.125 1.70924 6.125 1.875V2.5H4.25C3.91848 2.5 3.60054 2.6317 3.36612 2.86612C3.1317 3.10054 3 3.41848 3 3.75V16.25C3 16.5815 3.1317 16.8995 3.36612 17.1339C3.60054 17.3683 3.91848 17.5 4.25 17.5H16.75C17.0815 17.5 17.3995 17.3683 17.6339 17.1339C17.8683 16.8995 18 16.5815 18 16.25V3.75C18 3.41848 17.8683 3.10054 17.6339 2.86612C17.3995 2.6317 17.0815 2.5 16.75 2.5ZM6.125 3.75V4.375C6.125 4.54076 6.19085 4.69973 6.30806 4.81694C6.42527 4.93415 6.58424 5 6.75 5C6.91576 5 7.07473 4.93415 7.19194 4.81694C7.30915 4.69973 7.375 4.54076 7.375 4.375V3.75H13.625V4.375C13.625 4.54076 13.6908 4.69973 13.8081 4.81694C13.9253 4.93415 14.0842 5 14.25 5C14.4158 5 14.5747 4.93415 14.6919 4.81694C14.8092 4.69973 14.875 4.54076 14.875 4.375V3.75H16.75V6.25H4.25V3.75H6.125ZM16.75 16.25H4.25V7.5H16.75V16.25ZM11.75 11.875C11.75 12.1222 11.6767 12.3639 11.5393 12.5695C11.402 12.775 11.2068 12.9352 10.9784 13.0299C10.7499 13.1245 10.4986 13.1492 10.2561 13.101C10.0137 13.0528 9.79093 12.9337 9.61612 12.7589C9.4413 12.5841 9.32225 12.3613 9.27402 12.1189C9.22579 11.8764 9.25054 11.6251 9.34515 11.3966C9.43976 11.1682 9.59998 10.973 9.80554 10.8357C10.0111 10.6983 10.2528 10.625 10.5 10.625C10.8315 10.625 11.1495 10.7567 11.3839 10.9911C11.6183 11.2255 11.75 11.5435 11.75 11.875Z" fill="#444A4E" />
                        </svg>
                        Сегодня
                    </button>
                    <button class="vc__row-btn vc__time-btn">
                        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.5 1.875C8.89303 1.875 7.32214 2.35152 5.986 3.24431C4.64985 4.1371 3.60844 5.40605 2.99348 6.8907C2.37852 8.37535 2.21762 10.009 2.53112 11.5851C2.84463 13.1612 3.61846 14.6089 4.75476 15.7452C5.89106 16.8815 7.3388 17.6554 8.9149 17.9689C10.491 18.2824 12.1247 18.1215 13.6093 17.5065C15.094 16.8916 16.3629 15.8502 17.2557 14.514C18.1485 13.1779 18.625 11.607 18.625 10C18.6227 7.84581 17.766 5.78051 16.2427 4.25727C14.7195 2.73403 12.6542 1.87727 10.5 1.875ZM10.5 16.875C9.14026 16.875 7.81105 16.4718 6.68046 15.7164C5.54987 14.9609 4.66868 13.8872 4.14833 12.6309C3.62798 11.3747 3.49183 9.99237 3.7571 8.65875C4.02238 7.32513 4.67716 6.10013 5.63864 5.13864C6.60013 4.17716 7.82514 3.52237 9.15876 3.2571C10.4924 2.99183 11.8747 3.12798 13.131 3.64833C14.3872 4.16868 15.4609 5.04987 16.2164 6.18045C16.9718 7.31104 17.375 8.64025 17.375 10C17.3729 11.8227 16.6479 13.5702 15.3591 14.8591C14.0702 16.1479 12.3227 16.8729 10.5 16.875ZM15.5 10C15.5 10.1658 15.4342 10.3247 15.3169 10.4419C15.1997 10.5592 15.0408 10.625 14.875 10.625H10.5C10.3342 10.625 10.1753 10.5592 10.0581 10.4419C9.94085 10.3247 9.875 10.1658 9.875 10V5.625C9.875 5.45924 9.94085 5.30027 10.0581 5.18306C10.1753 5.06585 10.3342 5 10.5 5C10.6658 5 10.8247 5.06585 10.9419 5.18306C11.0592 5.30027 11.125 5.45924 11.125 5.625V9.375H14.875C15.0408 9.375 15.1997 9.44085 15.3169 9.55806C15.4342 9.67527 15.5 9.83424 15.5 10Z" fill="#444A4E" />
                        </svg>
                        Выбрать время
                    </button>
                </div>
                <div class="vc__buttons">
                    <button class="btn btn_line-primary vc__cancel-btn">
                        Отмена
                    </button>
                    <button class="btn btn_orange vc__save-btn">
                        Применить
                    </button>
                </div>
            `,
        },
    }

    let optionsMultiply = {
        ...options,
        selectionDatesMode: 'multiple-ranged',
        layouts: {
            default: `
                <div class="vc-header" data-vc="header" role="toolbar" aria-label="Calendar Navigation">
                <#ArrowPrev />
                <div class="vc-header__content" data-vc-header="content">
                    <#Month />
                    <#Year />
                </div>
                <#ArrowNext />
                </div>
                <div class="vc-wrapper" data-vc="wrapper">
                <#WeekNumbers />
                <div class="vc-content" data-vc="content">
                    <#Week />
                    <#Dates />
                    <#DateRangeTooltip />
                </div>
                </div>
                <#ControlTime />
                <span class="vc__result">
                    Выбран диапазон: не выбран
                </span>
                <div class="vc__buttons">
                    <button class="btn btn_line-primary vc__cancel-btn">
                        Отмена
                    </button>
                    <button class="btn btn_orange vc__save-btn">
                        Применить
                    </button>
                </div>
            `,
        },
    }

    let calendaresSingle = [ "#calendare-date", "#calendare-start", "#calendare-end" ];
    let calendaresMultiply = [ { cl: '#calendare-diapason', none: true } ];

    calendaresSingle.forEach((cl, index) => {
        if (document.querySelector(cl)) {
            let calendare = new Calendar(cl, options);
            calendare.styles.calendar = `vc vc-${index}`;
            calendare.cindex = index;
            calendare.init();
        }
    });

    calendaresMultiply.forEach((cl, index) => {
        if (document.querySelector(cl.cl)) {
            let calendare = new Calendar(cl.cl, optionsMultiply);
            calendare.styles.calendar = `vc vc-${index} ${cl.none ? "need-none none" : ""}`;
            calendare.cindex = index;
            calendare.init();
        }
    });
    
});

function setDate(input, dateType) {
    let date = new Date();
    let dateCopy = new Date();
    
    switch (dateType) {
        case ("today"):
            input.value = `${date.getDate()}.${+date.getMonth() + 1}.${date.getFullYear()}`;
            break;

        case ("yesterday"):
            date.setDate(date.getDate() - 1);
            input.value = `${date.getDate()}.${+date.getMonth() + 1}.${date.getFullYear()}`;
            break;

        case ("week"):
            dateCopy.setDate(dateCopy.getDate() - 7);
            input.value = `${dateCopy.getDate()}.${+dateCopy.getMonth() + 1}.${dateCopy.getFullYear()} - ${date.getDate()}.${+date.getMonth() + 1}.${date.getFullYear()}`;
            break;

        case ("month"):
            dateCopy.setDate(dateCopy.getDate() - 30);
            input.value = `${dateCopy.getDate()}.${+dateCopy.getMonth() + 1}.${dateCopy.getFullYear()} - ${date.getDate()}.${+date.getMonth() + 1}.${date.getFullYear()}`;
            break;

        case ("currentMonth"):
            dateCopy.setDate(1);
            input.value = `${dateCopy.getDate()}.${+dateCopy.getMonth() + 1}.${dateCopy.getFullYear()} - ${date.getDate()}.${+date.getMonth() + 1}.${date.getFullYear()}`;
            break;

        case ("prevMonth"):
            dateCopy.setDate(1);
            dateCopy.setMonth(dateCopy.getMonth() - 1);
            date.setDate(0);
            input.value = `${dateCopy.getDate()}.${+dateCopy.getMonth() + 1}.${dateCopy.getFullYear()} - ${date.getDate()}.${+date.getMonth() + 1}.${date.getFullYear()}`;
            break;

        default:
            document.querySelectorAll(".vc.need-none").forEach(item => {
                item.classList.remove("none");
            });
            input.click();
    }

}

const dateButtons = document.querySelectorAll(".input-group_date-diapason .i-drop-down__btn");

dateButtons?.forEach(btn => {
    btn.addEventListener("click", () => {
        const data = btn.getAttribute("data-date");
        const input = btn.closest(".input-group").querySelector(".input");
        setDate(input, data);
    });
});

modalButtons?.forEach(btn => {
    btn.addEventListener("click", (event) => {
        openModal(event.currentTarget);
        event.preventDefault();
    });
});

const selectButtons = document.querySelectorAll(".i-drop-down__btn");

selectButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        let input = btn.closest(".input-group").querySelector(".input-group__value");
        let btnValue = btn.closest(".input-group").querySelector(".input-group__drop-down-btn");

        if (input) {
            input.value = btn.textContent;
            btnValue.innerHTML = `
                ${btn.textContent}

                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.77995 9.71691C7.63905 9.57601 7.44796 9.49686 7.2487 9.49686C7.04944 9.49686 6.85835 9.57601 6.71745 9.71691C6.57655 9.85781 6.4974 10.0489 6.4974 10.2482C6.4974 10.4474 6.57655 10.6385 6.71745 10.7794L11.7174 15.7794C11.7871 15.8493 11.8699 15.9048 11.9611 15.9427C12.0522 15.9805 12.15 16 12.2487 16C12.3474 16 12.4451 15.9805 12.5363 15.9427C12.6275 15.9048 12.7103 15.8493 12.7799 15.7794L17.7799 10.7794C17.9208 10.6385 18 10.4474 18 10.2482C18 10.0489 17.9208 9.85781 17.7799 9.71691C17.6391 9.57601 17.448 9.49686 17.2487 9.49686C17.0494 9.49686 16.8583 9.57601 16.7174 9.71691L12.2493 14.185L7.77995 9.71691Z" fill="#677075"></path>
                </svg>
            `;
            btnValue.classList.add("input-group__drop-down-btn_changed");
        }
    });
});

initSearchElements(searchElements);
initDeleteButtons(elementsDeleteButtons);
initSearchInputs(searchInput);

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

popUpWrappers.forEach(item => {
    item.addEventListener("click", () => {
        popUpWrappers.forEach(wrapper => {
            if (wrapper != item) {
                wrapper.nextElementSibling.classList.add("hidden");
            }
        });

        const popUp = item.nextElementSibling;
        popUp.classList.toggle("hidden");
    });
});

visibleCells.forEach(item => {
    item.addEventListener("click", () => {
        const nextEl = item.nextElementSibling;

        hiddenCells.forEach(input => {
            const prevEl = input.parentElement.previousElementSibling;
            prevEl.classList.remove("none");
            input.parentElement.classList.add("none");
        });

        nextEl.classList.toggle("none");
        item.classList.toggle("none");

        nextEl.querySelector("input").focus();
    });
});

hiddenCells.forEach(item => {
    item.addEventListener("change", () => {
        const prevEl = item.parentElement.previousElementSibling;
        prevEl.textContent = item.value;
        prevEl.classList.toggle("none");
        item.parentElement.classList.toggle("none");
    });
});

tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        const parent = btn.closest(".latest");
        const btnData = btn.getAttribute("data-tab");
        const tabs = parent.querySelectorAll(".latest__table:not(.row-description .latest__table)");
        const currentButtons = parent.querySelectorAll(".latest__tab-btn");

        tabs.forEach(tab => {
            if (tab.getAttribute("data-tab") == btnData) {
                tab.classList.remove("none");
            }   else {
                tab.classList.add("none");
            }
        });

        currentButtons.forEach(item => item.classList.remove("latest__tab-btn_active"));
        btn.classList.add("latest__tab-btn_active");
    });
});

dropDownButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        const dropDown = btn.nextElementSibling;
        dropDown.classList.toggle("none");
        btn.classList.toggle("side-panel__link_open");
    });
});

latestDropDownButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        const tabs = btn.closest(".latest").querySelectorAll(".row-description");
        const data = btn.getAttribute("data-tab");
        const currentRow = btn.closest(".latest__table-row");
        const currentCells = currentRow.querySelectorAll(".latest__cell");
        const topRow = currentRow.offsetTop;
        let tabHeight;

        tabs.forEach(tab => {
            if (data == tab.getAttribute("data-tab")) {
                tab.classList.toggle("none");
                tabHeight = tab.offsetHeight;

                if (tab.classList.contains("none")) {
                    currentCells.forEach(cell => cell.style.paddingBottom = 16 + "px");
                }   else {
                    currentCells.forEach(cell => cell.style.paddingBottom = tabHeight + 16 + "px");
                    tab.style.top = topRow * 3 + 8 + "px";
                }
            }   else {
                tab.classList.add("none");
            }
        });

        latestDropDownButtons.forEach(item => {
            if (item == btn) {
                btn.classList.toggle("latest__drop-down-btn_active");
            }   else {
                item.classList.remove("latest__drop-down-btn_active");
            }
        });
    });
});

editTabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        const tabs = Array.from(btn.closest(".modal__edit-tab-section").querySelector(".modal__edit-tabs").children);
        const data = btn.getAttribute("data-tab");

        tabs.forEach(tab => {
            if (tab.getAttribute("data-tab") == data) {
                tab.classList.remove("none");
            }   else {
                tab.classList.add("none");
            }
        });

        editTabButtons.forEach(item => {
            if (item == btn) {
                btn.classList.add("modal__edit-tab-btn_active");
            }   else {
                item.classList.remove("modal__edit-tab-btn_active");
            }
        });
    });
});

lendingCheckbox?.addEventListener("change", () => {
    const hiddenSection = lendingCheckbox.nextElementSibling;
    hiddenSection.classList.toggle("none");
});

userOptions?.addEventListener("click", () => {
    const hiddenSection = userOptions.parentElement.nextElementSibling;
    hiddenSection.classList.toggle("none");
    userOptions.classList.toggle("monitoring__toggle-btn_active");
});

settingsTabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        const tabs = Array.from(document.querySelector(".tabs-wrapper").children);
        const data = btn.getAttribute("data-tab");

        tabs.forEach(tab => {
            if (tab.getAttribute("data-tab") == data) {
                tab.classList.remove("none");
            }   else {
                tab.classList.add("none");
            }
        });

        settingsTabButtons.forEach(item => {
            if (item == btn) {
                btn.classList.add("tabs__btn_active");
            }   else {
                item.classList.remove("tabs__btn_active");
            }
        });
    });
});

copyButtons.forEach(item => {
    item?.addEventListener("click", (event) => {
        const currentBtn = event.currentTarget;
        const wrapper = currentBtn.closest(".input-group");
        const input = wrapper.querySelector("input");
        const notify = wrapper.querySelector(".notify");

        navigator.clipboard.writeText(input.value);

        if (notify) {
            notify.classList.remove("hidden");
            setTimeout(() => notify.classList.add("hidden"), 2000);
        }
    });
});

lessonsLikes.forEach(btn => {
    btn.addEventListener("click", () => {
        btn.classList.toggle("lesson__like_active");
    });
});

playbackBtn?.addEventListener("click", () => {
    video.currentTime = 0;
});

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

soundRange?.noUiSlider.on("slide", (value) => {
    video.volume = value[0] / 100;
});

allCheckboxes.forEach(item => {
    item.addEventListener("change", () => {
        let allCheckbox = item.closest(".latest").querySelector("tbody").querySelectorAll(".checkbox input");

        if (!item.checked) {
            allCheckbox.forEach(checkbox => {
                checkbox.checked = false;
            });
        }   else {
            allCheckbox.forEach(checkbox => {
                checkbox.checked = true;
            });
        }
    });
});

titleCheckboxes.forEach(checkbox => {
    checkbox.addEventListener("change", () => {
        let count = 0;

        titleCheckboxes.forEach(item => {
            if (item.checked) {
                count++;
            }
        });

        selectedCount.textContent = `Выбрана ${count} позиций`;
    });
});

modalCopyButtons.forEach(item => {
    item.addEventListener("click", (event) => {
        let input = event.currentTarget.closest(".modal").querySelector("input, textarea");
        let notify = event.currentTarget.nextElementSibling;
        navigator.clipboard.writeText(input.value);

        if (notify) {
            notify.classList.remove("none");
            setTimeout(() => notify.classList.add("none"), 2000);
        }
    });
});

// File Events

const fileInputs = document.querySelectorAll(".upload-field__input");
let deleteCertButtons = document.querySelectorAll(".upload-field__delete-btn");

fileInputs.forEach(input => {
    input.addEventListener("change", () => {
        let file = input.files[0];
        let parent = input.parentElement;
        let uploaded = parent.querySelector(".upload-field__label_uploaded");
        let label = parent.querySelector(".upload-field__label_unuploaded");
        let parentModal = input.closest(".upload");

        label.classList.add("none");
        uploaded.classList.remove("none");

        if (parentModal.classList.contains("upload_narrow") && !parentModal.classList.contains("upload_edit")) {
            uploaded.querySelector(".upload-field__text").innerHTML = `Загружен файл: <span class="upload-field__text_orange">${file.name}</span>`;
        }   else {
            uploaded.querySelector(".upload-field__text").innerHTML = `Файл <span class="upload-field__text_orange">${file.name}</span> загружен`;
        }
    });
});

deleteCertButtons.forEach(item => {
    item.addEventListener("click", () => {
        let parent = item.closest(".upload-field");
        let uploaded = parent.querySelector(".upload-field__label_uploaded");
        let label = parent.querySelector(".upload-field__label_unuploaded");

        uploaded.classList.add("none");
        label.classList.remove("none");
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