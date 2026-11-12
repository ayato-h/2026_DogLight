
const alarmList = document.getElementById("alarm-list");
const addButton = document.getElementById("add-alarm");

addButton.addEventListener("click", () => {

    const alarmInfo = document.createElement("div");
    alarmInfo.className = "alarm-info";

    alarmInfo.innerHTML = `
        <div class="alarm-detail">
            <strong>06:00</strong>
            <div class="voice-options">
                <label>
                    <input type="checkbox" checked>
                    <span>るり</span>
                </label>
                <label>
                    <input type="checkbox" checked>
                    <span>なごみ</span>
                </label>
            </div>
        </div>

        <label class="alarm-toggle">
            <input type="checkbox" checked>
            <span class="toggle-slider"></span>
        </label>
    `;

    alarmList.appendChild(alarmInfo);

});
