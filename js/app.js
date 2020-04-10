function viewCars() {
    let DOMTable = document.querySelector("table");
    
    
    for(let i = 0; i < cars.length; i++) {
        let DOMTr = document.createElement("tr"),
            data = ["BRAND", "OVD", "COLOR"];

        for(let j = 0; j < data.length; j++) {
            let DOMTd = document.createElement("td");

            td.innerHTML = cars[i].data[j];
            DOMTr.append(DOMTd);
        }

        DOMTable.append(DOMTr);
    }
}

viewCars();