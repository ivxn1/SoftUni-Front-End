function solve() {
    const stopNameEl = document.querySelector("span.info");
    const departBtn = document.getElementById("depart");
    const arriveBtn = document.getElementById("arrive");

    let stopId = "depot";
    let stopName = "";

    async function depart() {
        try {
            const res = await fetch(
                `http://localhost:3030/jsonstore/bus/schedule/${stopId}`
            );
            const stopData = await res.json();

            stopName = stopData.name;
            stopId = stopData.next;
            stopNameEl.textContent = `Next stop ${stopName}`;
            departBtn.disabled = true;
            arriveBtn.disabled = false;
        } catch (error) {
            stopNameEl.textContent = "Error";
            departBtn.disabled = true;
            arriveBtn.disabled = true;
        }
    }

    function arrive() {
        stopNameEl.textContent = `Arriving at ${stopName}`;
        departBtn.disabled = false;
        arriveBtn.disabled = true;
    }

    return {
        depart,
        arrive,
    };
}

let result = solve();
