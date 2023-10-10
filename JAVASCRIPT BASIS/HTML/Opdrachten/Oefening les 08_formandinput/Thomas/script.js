const form = document.getElementById("testform");

const range = document.getElementById("range");
const rangeVal = document.getElementById('rangeVal');

range.addEventListener("input", changeRange);

function changeRange()
{
    rangeVal.innerText = range.value;
}

const landen = ["Belgie", "Nederland", "Frankrijk"];
const gemeente = {
    "Belgie": ["Gent", "Brugge", "Antwerpen"],
    "Nederland": ["Amsterdam", "Rotterdam"],
    "Frankrijk": ["Parijs", "Reims", "Lille"]
};

const ipt_land = document.getElementById("land");
const ipt_gemeente = document.getElementById("gemeente");

landen.forEach(land => {
    const option = document.createElement('option');
    option.value = land;
    option.innerText = land;
    ipt_land.appendChild(option);
});

ipt_land.addEventListener("input", function()
{
    ipt_gemeente.innerHTML = '';
    const defaultOption = document.createElement('option');
    defaultOption.value = '';
    defaultOption.innerText = '- selecteer een gemeente -';
    ipt_gemeente.appendChild(defaultOption);
    
    const gekozenLand = this.value;
    gemeente[gekozenLand].forEach(gemeente => {
        const option = document.createElement('option');
        option.value = gemeente;
        option.innerText = gemeente;
        ipt_gemeente.appendChild(option);
    });
}
);








//form.addEventListener("submit", formSubmit);

function formSubmit(event)
{
    event.preventDefault();
    console.info('Form submitted');

}