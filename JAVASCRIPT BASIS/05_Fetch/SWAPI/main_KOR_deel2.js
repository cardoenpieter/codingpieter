const $rootBtn = document.getElementById('root-btn');
const $resourceList = document.getElementById('resource-list');
const $resourceItems = document.getElementById('resource-items');
const $resourceItemDetails = document.getElementById('resource-item-details');

function getRoot() {
    fetch('https://swapi.tech/api', {
        method: 'GET',
    })
        .then(function (response) {
            console.log(response);

            if (!response.ok) {
                throw new Error('Request failed');
            }

            return response.json();
        })
        .then(function (body) {
            let resources = Object.keys(body.result);

            for (let i = 0; i < resources.length; i++) {
                let curKey = resources[i];
                let curUrl = body.result[curKey];

                let newListItem = `<button class='resource-btn' data-url="${curUrl}">${curKey}</button>`;
                $resourceList.insertAdjacentHTML('beforeend', newListItem);
            }
        })
        .catch(function (error) {
            console.log(error);
        });
}

function rootBtnClick() {
    getRoot();
}

function getResource(url) {
    fetch(url, {
        method: 'GET',
    })
        .then(function (response) {
            if (!response.ok) {
                throw new Error('Request failed');
            }

            return response.json();
        })
        .then(function (body) {
            $resourceItems.innerHTML = '';
            let resourceItems = body.results;

            if (body.result) {
                resourceItems = body.result;
            }

            for (let i = 0; i < resourceItems.length; i++) {
                const curResourceItem = resourceItems[i];

                let resourceName = curResourceItem.name;
                let resourceURL = curResourceItem.url;

                let resourceItemHTML = `<button class='resource-item-btn' data-url='${resourceURL}'>${resourceName}</button>`;

                $resourceItems.insertAdjacentHTML(
                    'beforeend',
                    resourceItemHTML
                );
            }
        })
        .catch(function (error) {
            console.log(error);
        });
}

function getResourceItemDetails(url) {
    fetch(url, {
        method: 'GET',
    })
        .then(function (response) {
            if (!response.ok) {
                throw new Error('Request failed');
            }

            return response.json();
        })
        .then(function (body) {
            let resourceDetails = body.result.properties;
            let resourceDetailsKeys = Object.keys(resourceDetails);

            let resourceDetailsHTML = '<ul>';

            for (let i = 0; i < resourceDetailsKeys.length; i++) {
                let curKey = resourceDetailsKeys[i];
                let curVal = resourceDetails[curKey];

                switch (curKey) {
                    case 'url':
                        break;
                    case 'created':
                    case 'edited':
                        // datum aanpassen;
                        console.log(curVal);
                        let date = new Date(curVal);
                        resourceDetailsHTML += `<li><strong>${curKey}:</strong> ${date.toLocaleDateString('nl-BE')}</li>`;
                        break;
                    default:
                        resourceDetailsHTML += `<li><strong>${curKey}:</strong> ${curVal}</li>`;
                }
            }

            resourceDetailsHTML += '</ul>';

            $resourceItemDetails.innerHTML = resourceDetailsHTML;
        })
        .catch(function (error) {
            console.log(error);
        });
}

function clickResourceBtn(event) {
    const target = event.target;

    if (target.matches('.resource-btn')) {
        const url = target.dataset.url;

        getResource(url);
    }
}

function clickResourceItemBtn(event) {
    const target = event.target;

    if (target.matches('.resource-item-btn')) {
        const url = target.dataset.url;

        getResourceItemDetails(url);
    }
}

$rootBtn.addEventListener('click', rootBtnClick);
$resourceList.addEventListener('click', clickResourceBtn);
$resourceItems.addEventListener('click', clickResourceItemBtn);
