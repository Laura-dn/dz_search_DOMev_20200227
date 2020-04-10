let DOMInputs = document.querySelectorAll("input");

for(let i = 0; i < DOMInputs.length; i++) {
    DOMInputs[i].addEventListener("keyup", preSearch);
}

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
    let DOMId = ev.target.id;

    console.dir(ev);
}

viewCars();