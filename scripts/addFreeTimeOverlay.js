import "./libraries/dayjs.min.js";

export function renderAddFreeTimeUI(selectedDateObject) {
    const container = document.querySelector('.js-group-add-free-time-container');
    container.innerHTML = `
                        <div class="group-add-free-time-overlay">
                            <div class="group-add-free-time-container">
                                <div class="group-add-free-time-header-container">
                                    <p class="group-add-free-time-title font-lg">Add Free Time</p>
                                    <button class="group-add-free-time-cross-button js-group-add-free-time-cross-button">&#10005;</button>
                                </div>

                                <div class="group-add-free-time-date-container">
                                    <label class="form-label-margin font-small" for="date"><b>Date</b></label>
                                    <input class="form-input font-small js-group-add-free-time-date-input" type="date" name="date" required>
                                </div>
                        
                                <div class="group-add-free-time-time-container">
                                    <label class="form-label-margin font-small" for="from-time"><b>Time</b></label>
                                    <div class="group-add-free-time-time-input-container">
                                        <input class="form-input font-small js-group-add-free-time-from-time-input" type="time" name="from-time" required>
                                        <div class="group-add-free-time-time-input-seperator"></div>
                                        <input class="form-input font-small js-group-add-free-time-to-time-input" type="time" name="to-time" required>
                                    </div>
                                </div>
                        
                                <div class="group-add-free-time-repeat-container">
                                    <label class="form-label-margin font-small" for="repeat"><b>Repeat</b></label>
                                    <div class="custom-dropdown">
                                        <select class="font-small" name="repeat">
                                            <option>Daily</option>
                                            <option>Weekly</option>
                                            <option>Monthly</option>
                                            <option>Yearly</option>
                                        </select>
                                    </div>
                                </div>
                                <button class="button-general font-small">Add</button>
                            </div>
                        </div>
                            `;
    handleCrossButton();
    console.log(selectedDateObject);

    // Set selected date and time
    document.querySelector('.js-group-add-free-time-date-input')
        .value = selectedDateObject.format('YYYY-MM-DD');

    document.querySelector(".js-group-add-free-time-from-time-input")
        .value = selectedDateObject.format('HH:mm');

    selectedDateObject = selectedDateObject.add(1, 'hours');
    document.querySelector(".js-group-add-free-time-to-time-input")
        .value = selectedDateObject.format('HH:mm');
}

function handleCrossButton() {
    const container = document.querySelector('.js-group-add-free-time-container');
    document.querySelector('.js-group-add-free-time-cross-button')
        .addEventListener('click', () => {
            container.innerHTML = "";
        });
}