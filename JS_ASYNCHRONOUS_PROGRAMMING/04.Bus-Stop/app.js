async function getInfo() {
    const stopInputEl = document.getElementById("stopId");
    const stopNameEl = document.getElementById("stopName");
    const busesEl = document.getElementById("buses");

    const stopId = stopInputEl.value;

    try {
        const res = await fetch(
            `http://localhost:3030/jsonstore/bus/businfo/${stopId}`
        );
        const stopData = await res.json();

        const stopName = stopData.name;
        const busesData = Object.entries(stopData.buses);

        stopNameEl.textContent = stopName;
        for (const [busId, time] of busesData) {
            const liEl = document.createElement("li");
            liEl.textContent = `Bus ${busId} arrives in ${time} minutes`;
            busesEl.appendChild(liEl);
        }
    } catch (err) {
        stopNameEl.textContent = "Error";
    }
}
