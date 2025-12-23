function solve() {
    const headers = Array.from(document.querySelectorAll('thead tr th input'));
    const output = document.getElementById("output");
    const checked_inputs = headers.filter((cb) => cb.checked === true);
    const rows = Array.from(document.querySelectorAll("tbody tr"));
    const result = [];
    const checked_data = {};

    checked_inputs.map((i) => checked_data[i.name] = headers.indexOf(i))
    
    for (const r of rows) {
        const tds = r.children;
        let rowObj = {};
        for (const [name, index] of Object.entries(checked_data)) {
            rowObj[name] = tds[index].textContent;
        }
        result.push(rowObj);
        
        
    }
    console.log(result);
    
    output.textContent = JSON.stringify(result);
    

    
    
    
}