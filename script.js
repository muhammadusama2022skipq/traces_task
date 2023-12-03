function showFilterOptions() {
    let filtersCard = document.getElementById("filtersCard");
    console.log(filtersCard)
    filtersCard.style.display = filtersCard.style.display === "none" ? "block" : "none";
}

function showSeverityOptions() {
    let severityCard = document.getElementById("severityCard");
    severityCard.style.display = severityCard.style.display === "none" ? "block" : "none";
}

function showEntityOptions() {
    let entityCard = document.getElementById("entityCard");
    entityCard.style.display = entityCard.style.display === "none" ? "block" : "none";
}

function showDetailsCard() {
    let detailsCard = document.getElementById("detailsCard");
    detailsCard.style.display = detailsCard.style.display === "none" ? "block" : "none";
}

function applyFilters() {
    let aperturescienceCheckbox = document.querySelector('input[value="aperturescience"]');
    let blackmesaCheckbox = document.querySelector('input[value="blackmesa"]');
    let highCheckbox = document.querySelector('input[value="high"]');
    let mediumCheckbox = document.querySelector('input[value="medium"]');
    let lowCheckbox = document.querySelector('input[value="low"]');

    let apertureTextTrace = document.querySelectorAll('.apertureTextTrace');
    let blackmesaTextTrace = document.querySelectorAll('.blackmesaTextTrace');
    let high = document.querySelectorAll('.high');
    let medium = document.querySelectorAll('.medium');
    let low = document.querySelectorAll('.low');
    let apertureScienceHigh = document.querySelectorAll('.aperture-science-high');
    let blackMesaHigh = document.querySelectorAll('.black-mesa-high');
    let apertureScienceMedium = document.querySelectorAll('.aperture-science-medium');
    let blackMesaMedium = document.querySelectorAll('.black-mesa-medium');
    let apertureScienceLow = document.querySelectorAll('.aperture-science-low');
    let blackMesaLow = document.querySelectorAll('.black-mesa-low');

    if (aperturescienceCheckbox.checked && blackmesaCheckbox.checked && !highCheckbox.checked && !mediumCheckbox.checked && !lowCheckbox.checked || highCheckbox.checked && mediumCheckbox.checked && lowCheckbox.checked && !aperturescienceCheckbox.checked && !blackmesaCheckbox.checked || highCheckbox.checked && mediumCheckbox.checked && lowCheckbox.checked && aperturescienceCheckbox.checked && blackmesaCheckbox.checked || !highCheckbox.checked && !mediumCheckbox.checked && !lowCheckbox.checked && !aperturescienceCheckbox.checked && !blackmesaCheckbox.checked) {
        blackmesaTextTrace.forEach(function (trace) {
            trace.style.display = 'block';
        });

        apertureTextTrace.forEach(function (trace) {
            trace.style.display = 'block';
        });
    } else if (aperturescienceCheckbox.checked && !blackmesaCheckbox.checked && !highCheckbox.checked && !mediumCheckbox.checked && !lowCheckbox.checked) {
        apertureTextTrace.forEach(function (trace) {
            trace.style.display = 'block';
        });

        blackmesaTextTrace.forEach(function (trace) {
            trace.style.display = 'none';
        });
    } else if (blackmesaCheckbox.checked && !aperturescienceCheckbox.checked && !highCheckbox.checked && !mediumCheckbox.checked && !lowCheckbox.checked) {
        blackmesaTextTrace.forEach(function (trace) {
            trace.style.display = 'block';
        });

        apertureTextTrace.forEach(function (trace) {
            trace.style.display = 'none';
        });
    } else if (highCheckbox.checked && !aperturescienceCheckbox.checked && !blackmesaCheckbox.checked && !mediumCheckbox.checked && !lowCheckbox.checked) {
        high.forEach(function (trace) {
            trace.style.display = 'block';
        });

        medium.forEach(function (trace) {
            trace.style.display = 'none';
        });

        low.forEach(function (trace) {
            trace.style.display = 'none';
        });
    } else if (mediumCheckbox.checked && !aperturescienceCheckbox.checked && !blackmesaCheckbox.checked && !highCheckbox.checked && !lowCheckbox.checked) {
        high.forEach(function (trace) {
            trace.style.display = 'none';
        });

        medium.forEach(function (trace) {
            trace.style.display = 'block';
        });

        low.forEach(function (trace) {
            trace.style.display = 'none';
        });
    } else if (lowCheckbox.checked && !aperturescienceCheckbox.checked && !blackmesaCheckbox.checked && !highCheckbox.checked && !mediumCheckbox.checked) {
        high.forEach(function (trace) {
            trace.style.display = 'none';
        });

        medium.forEach(function (trace) {
            trace.style.display = 'none';
        });

        low.forEach(function (trace) {
            trace.style.display = 'block';
        });
    } else if (!lowCheckbox.checked && !aperturescienceCheckbox.checked && !blackmesaCheckbox.checked && highCheckbox.checked && mediumCheckbox.checked) {
        high.forEach(function (trace) {
            trace.style.display = 'block';
        });

        medium.forEach(function (trace) {
            trace.style.display = 'block';
        });

        low.forEach(function (trace) {
            trace.style.display = 'none';
        });
    } else if (lowCheckbox.checked && !aperturescienceCheckbox.checked && !blackmesaCheckbox.checked && highCheckbox.checked && !mediumCheckbox.checked) {
        high.forEach(function (trace) {
            trace.style.display = 'block';
        });

        medium.forEach(function (trace) {
            trace.style.display = 'none';
        });

        low.forEach(function (trace) {
            trace.style.display = 'block';
        });
    } else if (lowCheckbox.checked && !aperturescienceCheckbox.checked && !blackmesaCheckbox.checked && !highCheckbox.checked && mediumCheckbox.checked) {
        high.forEach(function (trace) {
            trace.style.display = 'none';
        });

        medium.forEach(function (trace) {
            trace.style.display = 'block';
        });

        low.forEach(function (trace) {
            trace.style.display = 'block';
        });
    } else if (!lowCheckbox.checked && aperturescienceCheckbox.checked && !blackmesaCheckbox.checked && highCheckbox.checked && !mediumCheckbox.checked) {
        apertureScienceHigh.forEach(function (trace) {
            trace.style.display = 'block';
        });

        blackMesaHigh.forEach(function (trace) {
            trace.style.display = 'none';
        });

        apertureScienceMedium.forEach(function (trace) {
            trace.style.display = 'none';
        });

        blackMesaMedium.forEach(function (trace) {
            trace.style.display = 'none';
        });

        apertureScienceLow.forEach(function (trace) {
            trace.style.display = 'none';
        });

        blackMesaLow.forEach(function (trace) {
            trace.style.display = 'none';
        });
    } else if (!lowCheckbox.checked && aperturescienceCheckbox.checked && !blackmesaCheckbox.checked && !highCheckbox.checked && mediumCheckbox.checked) {
        apertureScienceHigh.forEach(function (trace) {
            trace.style.display = 'none';
        });

        blackMesaHigh.forEach(function (trace) {
            trace.style.display = 'none';
        });

        apertureScienceMedium.forEach(function (trace) {
            trace.style.display = 'block';
        });

        blackMesaMedium.forEach(function (trace) {
            trace.style.display = 'none';
        });

        apertureScienceLow.forEach(function (trace) {
            trace.style.display = 'none';
        });

        blackMesaLow.forEach(function (trace) {
            trace.style.display = 'none';
        });
    } else if (lowCheckbox.checked && aperturescienceCheckbox.checked && !blackmesaCheckbox.checked && !highCheckbox.checked && !mediumCheckbox.checked) {
        apertureScienceHigh.forEach(function (trace) {
            trace.style.display = 'none';
        });

        blackMesaHigh.forEach(function (trace) {
            trace.style.display = 'none';
        });

        apertureScienceMedium.forEach(function (trace) {
            trace.style.display = 'none';
        });

        blackMesaMedium.forEach(function (trace) {
            trace.style.display = 'none';
        });

        apertureScienceLow.forEach(function (trace) {
            trace.style.display = 'block';
        });

        blackMesaLow.forEach(function (trace) {
            trace.style.display = 'none';
        });
    } else if (!lowCheckbox.checked && !aperturescienceCheckbox.checked && blackmesaCheckbox.checked && highCheckbox.checked && !mediumCheckbox.checked) {
        apertureScienceHigh.forEach(function (trace) {
            trace.style.display = 'none';
        });

        blackMesaHigh.forEach(function (trace) {
            trace.style.display = 'block';
        });

        apertureScienceMedium.forEach(function (trace) {
            trace.style.display = 'none';
        });

        blackMesaMedium.forEach(function (trace) {
            trace.style.display = 'none';
        });

        apertureScienceLow.forEach(function (trace) {
            trace.style.display = 'none';
        });

        blackMesaLow.forEach(function (trace) {
            trace.style.display = 'none';
        });
    } else if (!lowCheckbox.checked && !aperturescienceCheckbox.checked && blackmesaCheckbox.checked && !highCheckbox.checked && mediumCheckbox.checked) {
        apertureScienceHigh.forEach(function (trace) {
            trace.style.display = 'none';
        });

        blackMesaHigh.forEach(function (trace) {
            trace.style.display = 'none';
        });

        apertureScienceMedium.forEach(function (trace) {
            trace.style.display = 'none';
        });

        blackMesaMedium.forEach(function (trace) {
            trace.style.display = 'block';
        });

        apertureScienceLow.forEach(function (trace) {
            trace.style.display = 'none';
        });

        blackMesaLow.forEach(function (trace) {
            trace.style.display = 'none';
        });
    } else if (lowCheckbox.checked && !aperturescienceCheckbox.checked && blackmesaCheckbox.checked && !highCheckbox.checked && !mediumCheckbox.checked) {
        apertureScienceHigh.forEach(function (trace) {
            trace.style.display = 'none';
        });

        blackMesaHigh.forEach(function (trace) {
            trace.style.display = 'none';
        });

        apertureScienceMedium.forEach(function (trace) {
            trace.style.display = 'none';
        });

        blackMesaMedium.forEach(function (trace) {
            trace.style.display = 'none';
        });

        apertureScienceLow.forEach(function (trace) {
            trace.style.display = 'none';
        });

        blackMesaLow.forEach(function (trace) {
            trace.style.display = 'block';
        });
    } else if (lowCheckbox.checked && !aperturescienceCheckbox.checked && blackmesaCheckbox.checked && !highCheckbox.checked && mediumCheckbox.checked) {
        apertureScienceHigh.forEach(function (trace) {
            trace.style.display = 'none';
        });

        blackMesaHigh.forEach(function (trace) {
            trace.style.display = 'none';
        });

        apertureScienceMedium.forEach(function (trace) {
            trace.style.display = 'none';
        });

        blackMesaMedium.forEach(function (trace) {
            trace.style.display = 'block';
        });

        apertureScienceLow.forEach(function (trace) {
            trace.style.display = 'none';
        });

        blackMesaLow.forEach(function (trace) {
            trace.style.display = 'block';
        });
    } else if (!lowCheckbox.checked && !aperturescienceCheckbox.checked && blackmesaCheckbox.checked && highCheckbox.checked && mediumCheckbox.checked) {
        apertureScienceHigh.forEach(function (trace) {
            trace.style.display = 'none';
        });

        blackMesaHigh.forEach(function (trace) {
            trace.style.display = 'block';
        });

        apertureScienceMedium.forEach(function (trace) {
            trace.style.display = 'none';
        });

        blackMesaMedium.forEach(function (trace) {
            trace.style.display = 'block';
        });

        apertureScienceLow.forEach(function (trace) {
            trace.style.display = 'none';
        });

        blackMesaLow.forEach(function (trace) {
            trace.style.display = 'low';
        });
    } else if (lowCheckbox.checked && !aperturescienceCheckbox.checked && blackmesaCheckbox.checked && highCheckbox.checked && !mediumCheckbox.checked) {
        apertureScienceHigh.forEach(function (trace) {
            trace.style.display = 'none';
        });

        blackMesaHigh.forEach(function (trace) {
            trace.style.display = 'block';
        });

        apertureScienceMedium.forEach(function (trace) {
            trace.style.display = 'none';
        });

        blackMesaMedium.forEach(function (trace) {
            trace.style.display = 'none';
        });

        apertureScienceLow.forEach(function (trace) {
            trace.style.display = 'none';
        });

        blackMesaLow.forEach(function (trace) {
            trace.style.display = 'block';
        });
    } else if (lowCheckbox.checked && !aperturescienceCheckbox.checked && blackmesaCheckbox.checked && highCheckbox.checked && mediumCheckbox.checked) {
        apertureScienceHigh.forEach(function (trace) {
            trace.style.display = 'none';
        });

        blackMesaHigh.forEach(function (trace) {
            trace.style.display = 'block';
        });

        apertureScienceMedium.forEach(function (trace) {
            trace.style.display = 'none';
        });

        blackMesaMedium.forEach(function (trace) {
            trace.style.display = 'block';
        });

        apertureScienceLow.forEach(function (trace) {
            trace.style.display = 'none';
        });

        blackMesaLow.forEach(function (trace) {
            trace.style.display = 'block';
        });
    } else if (lowCheckbox.checked && aperturescienceCheckbox.checked && !blackmesaCheckbox.checked && highCheckbox.checked && mediumCheckbox.checked) {
        apertureScienceHigh.forEach(function (trace) {
            trace.style.display = 'block';
        });

        blackMesaHigh.forEach(function (trace) {
            trace.style.display = 'none';
        });

        apertureScienceMedium.forEach(function (trace) {
            trace.style.display = 'block';
        });

        blackMesaMedium.forEach(function (trace) {
            trace.style.display = 'none';
        });

        apertureScienceLow.forEach(function (trace) {
            trace.style.display = 'block';
        });

        blackMesaLow.forEach(function (trace) {
            trace.style.display = 'none';
        });
    } else if (!lowCheckbox.checked && aperturescienceCheckbox.checked && !blackmesaCheckbox.checked && highCheckbox.checked && mediumCheckbox.checked) {
        apertureScienceHigh.forEach(function (trace) {
            trace.style.display = 'block';
        });

        blackMesaHigh.forEach(function (trace) {
            trace.style.display = 'none';
        });

        apertureScienceMedium.forEach(function (trace) {
            trace.style.display = 'block';
        });

        blackMesaMedium.forEach(function (trace) {
            trace.style.display = 'none';
        });

        apertureScienceLow.forEach(function (trace) {
            trace.style.display = 'none';
        });

        blackMesaLow.forEach(function (trace) {
            trace.style.display = 'none';
        });
    } else if (lowCheckbox.checked && aperturescienceCheckbox.checked && !blackmesaCheckbox.checked && highCheckbox.checked && !mediumCheckbox.checked) {
        apertureScienceHigh.forEach(function (trace) {
            trace.style.display = 'block';
        });

        blackMesaHigh.forEach(function (trace) {
            trace.style.display = 'none';
        });

        apertureScienceMedium.forEach(function (trace) {
            trace.style.display = 'none';
        });

        blackMesaMedium.forEach(function (trace) {
            trace.style.display = 'none';
        });

        apertureScienceLow.forEach(function (trace) {
            trace.style.display = 'block';
        });

        blackMesaLow.forEach(function (trace) {
            trace.style.display = 'none';
        });
    } else if (lowCheckbox.checked && aperturescienceCheckbox.checked && !blackmesaCheckbox.checked && !highCheckbox.checked && mediumCheckbox.checked) {
        apertureScienceHigh.forEach(function (trace) {
            trace.style.display = 'none';
        });

        blackMesaHigh.forEach(function (trace) {
            trace.style.display = 'none';
        });

        apertureScienceMedium.forEach(function (trace) {
            trace.style.display = 'block';
        });

        blackMesaMedium.forEach(function (trace) {
            trace.style.display = 'none';
        });

        apertureScienceLow.forEach(function (trace) {
            trace.style.display = 'block';
        });

        blackMesaLow.forEach(function (trace) {
            trace.style.display = 'none';
        });
    } else if (!lowCheckbox.checked && aperturescienceCheckbox.checked && blackmesaCheckbox.checked && highCheckbox.checked && !mediumCheckbox.checked) {
        apertureScienceHigh.forEach(function (trace) {
            trace.style.display = 'block';
        });

        blackMesaHigh.forEach(function (trace) {
            trace.style.display = 'block';
        });

        apertureScienceMedium.forEach(function (trace) {
            trace.style.display = 'none';
        });

        blackMesaMedium.forEach(function (trace) {
            trace.style.display = 'none';
        });

        apertureScienceLow.forEach(function (trace) {
            trace.style.display = 'none';
        });

        blackMesaLow.forEach(function (trace) {
            trace.style.display = 'none';
        });
    } else if (!lowCheckbox.checked && aperturescienceCheckbox.checked && blackmesaCheckbox.checked && !highCheckbox.checked && mediumCheckbox.checked) {
        apertureScienceHigh.forEach(function (trace) {
            trace.style.display = 'none';
        });

        blackMesaHigh.forEach(function (trace) {
            trace.style.display = 'none';
        });

        apertureScienceMedium.forEach(function (trace) {
            trace.style.display = 'block';
        });

        blackMesaMedium.forEach(function (trace) {
            trace.style.display = 'block';
        });

        apertureScienceLow.forEach(function (trace) {
            trace.style.display = 'none';
        });

        blackMesaLow.forEach(function (trace) {
            trace.style.display = 'none';
        });
    } else if (lowCheckbox.checked && aperturescienceCheckbox.checked && blackmesaCheckbox.checked && !highCheckbox.checked && !mediumCheckbox.checked) {
        apertureScienceHigh.forEach(function (trace) {
            trace.style.display = 'none';
        });

        blackMesaHigh.forEach(function (trace) {
            trace.style.display = 'none';
        });

        apertureScienceMedium.forEach(function (trace) {
            trace.style.display = 'none';
        });

        blackMesaMedium.forEach(function (trace) {
            trace.style.display = 'none';
        });

        apertureScienceLow.forEach(function (trace) {
            trace.style.display = 'block';
        });

        blackMesaLow.forEach(function (trace) {
            trace.style.display = 'block';
        });
    } else if (lowCheckbox.checked && !aperturescienceCheckbox.checked && blackmesaCheckbox.checked && highCheckbox.checked && mediumCheckbox.checked) {
        apertureScienceHigh.forEach(function (trace) {
            trace.style.display = 'none';
        });

        blackMesaHigh.forEach(function (trace) {
            trace.style.display = 'block';
        });

        apertureScienceMedium.forEach(function (trace) {
            trace.style.display = 'none';
        });

        blackMesaMedium.forEach(function (trace) {
            trace.style.display = 'block';
        });

        apertureScienceLow.forEach(function (trace) {
            trace.style.display = 'none';
        });

        blackMesaLow.forEach(function (trace) {
            trace.style.display = 'block';
        });
    } else if (!lowCheckbox.checked && aperturescienceCheckbox.checked && blackmesaCheckbox.checked && highCheckbox.checked && mediumCheckbox.checked) {
        apertureScienceHigh.forEach(function (trace) {
            trace.style.display = 'block';
        });

        blackMesaHigh.forEach(function (trace) {
            trace.style.display = 'block';
        });

        apertureScienceMedium.forEach(function (trace) {
            trace.style.display = 'block';
        });

        blackMesaMedium.forEach(function (trace) {
            trace.style.display = 'block';
        });

        apertureScienceLow.forEach(function (trace) {
            trace.style.display = 'none';
        });

        blackMesaLow.forEach(function (trace) {
            trace.style.display = 'none';
        });
    } else if (lowCheckbox.checked && aperturescienceCheckbox.checked && blackmesaCheckbox.checked && highCheckbox.checked && !mediumCheckbox.checked) {
        apertureScienceHigh.forEach(function (trace) {
            trace.style.display = 'block';
        });

        blackMesaHigh.forEach(function (trace) {
            trace.style.display = 'block';
        });

        apertureScienceMedium.forEach(function (trace) {
            trace.style.display = 'none';
        });

        blackMesaMedium.forEach(function (trace) {
            trace.style.display = 'none';
        });

        apertureScienceLow.forEach(function (trace) {
            trace.style.display = 'block';
        });

        blackMesaLow.forEach(function (trace) {
            trace.style.display = 'block';
        });
    } else if (lowCheckbox.checked && aperturescienceCheckbox.checked && blackmesaCheckbox.checked && !highCheckbox.checked && mediumCheckbox.checked) {
        apertureScienceHigh.forEach(function (trace) {
            trace.style.display = 'none';
        });

        blackMesaHigh.forEach(function (trace) {
            trace.style.display = 'none';
        });

        apertureScienceMedium.forEach(function (trace) {
            trace.style.display = 'block';
        });

        blackMesaMedium.forEach(function (trace) {
            trace.style.display = 'block';
        });

        apertureScienceLow.forEach(function (trace) {
            trace.style.display = 'block';
        });

        blackMesaLow.forEach(function (trace) {
            trace.style.display = 'block';
        });
    }
}

function sortByPriority(order) {
    let divs = document.querySelectorAll('.trace');
    let divsArray = Array.from(divs);

    divsArray.sort(function (a, b) {
        let priorityA = getPriorityFromClass(a.classList);
        let priorityB = getPriorityFromClass(b.classList);

        if (order === 'highToLow') {
            return priorityB - priorityA;
        } else if (order === 'lowToHigh') {
            return priorityA - priorityB;
        }
    });

    let container = document.getElementById('mainContentOfTraces');
    container.innerHTML = '';
    divsArray.forEach(function (div) {
        container.appendChild(div);
    });
}

function getPriorityFromClass(classList) {
    if (classList.contains('high')) {
        return 3;
    } else if (classList.contains('medium')) {
        return 2;
    } else if (classList.contains('low')) {
        return 1;
    }
}

function viewDetailsOne(){
    let statusOneTextElement = document.querySelectorAll('.status-one-text')

     let statusOneText = statusOneTextElement.textContent;

     let dynamicStatusOneTextElement = document.getElementById('dynamic-status-one-text');
    dynamicStatusOneTextElement.textContent = statusOneText;
}