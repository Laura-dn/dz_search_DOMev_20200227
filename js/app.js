//1. Используя html-js заготовку из архива отрисуйте информацию обо всех автомобилях в массиве cars (ovd, brand, color)
function viewCars() {
    let DOMTable = document.querySelector("table");
    
    
    for(let i = 0; i < cars.length; i++) {
        let DOMTr = document.createElement("tr"),
            data = ["BRAND", "OVD", "COLOR"];

        for(let j = 0; j < data.length; j++) {
            let DOMTd = document.createElement("td");

            DOMTd.innerHTML = cars[i][data[j]];
            DOMTr.append(DOMTd);
        }

        DOMTable.append(DOMTr);
    }
}

function preSearch(ev) {
    let DOMId = ev.target.id,
        DOMInput = document.querySelector("#" + DOMId).value,
        re = new RegExp(DOMInput, "gi"),
        DOMPreSearch = document.querySelector("." + DOMId),
        spanStart = "<span class='reFind' title='" + DOMId + "'>",
        spanEnd = "</span>";

    DOMPreSearch.innerHTML = "";
    
    for(let i = 0; i < cars.length; i++) {
        if(re.test(cars[i][DOMId])) {
            let DOMDiv = document.createElement("div");

            DOMDiv.innerHTML = cars[i][DOMId].replace(re, (spanStart + DOMInput.toUpperCase() + spanEnd));
            DOMDiv.addEventListener("click", addSearching);
            DOMPreSearch.append(DOMDiv);
        }
    }
}

//При клике на выделенную желтым область ошибка. target = span, а addSearching разбирает div
function addSearching(ev) {
    let DOMValue = ev.target.textContent,
        DOMId = ev.target.children[0].title,
        DOMInput = document.querySelector("#" + DOMId),
        DOMPreSearch = document.querySelector("." + DOMId),
        DOMTable = document.querySelector("table"),
        DOMInputs = document.querySelectorAll("input");

    for(let i = 0; i < DOMInputs.length; i++) {
        DOMInputs[i].value = "";
    }

    DOMPreSearch.innerHTML = "";
    DOMTable.innerHTML = "";
    DOMInput.value = DOMValue;

    for(let i = 0; i < cars.length; i++) {
        if(DOMValue == cars[i][DOMId]) {
            let DOMTr = document.createElement("tr"),
                data = ["BRAND", "OVD", "COLOR"];

            for(let j = 0; j < data.length; j++) {
                let DOMTd = document.createElement("td");
    
                DOMTd.innerHTML = cars[i][data[j]];
                DOMTr.append(DOMTd);
            }
            
            DOMTable.append(DOMTr);
        }
    }
}

(function() {
    let DOMInputs = document.querySelectorAll("input");

    for(let i = 0; i < DOMInputs.length; i++) {
        DOMInputs[i].addEventListener("keyup", preSearch);
    }

    viewCars();
})();
