const $rootBtn = document.getElementById('root-btn');
const $resourceList = document.getElementById('resource-list');
const $resourceItems = document.getElementById('resource-items');
const $resourceItemDetails = document.getElementById('resource-item-details');

function resourceUrlFromResourceItemUrl(resourceItemUrl) {
    return resourceItemUrl.split('/').slice(0, -1).join('/');
}
function getRoot() {
    $resourceList.classList.add('loading');
    
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
        }).finally(function() {
            $resourceList.classList.remove('loading');
        });
}

function rootBtnClick() {
    getRoot();
}

function getResource(url) {
    $resourceItems.classList.add('loading');
    
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
                resourceItems = [];

                for (let i = 0; i < body.result.length; i++) {
                    let curResult = body.result[i].properties;
                    curResult.name = curResult.title;
                    resourceItems.push(curResult);
                }
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
        }).finally(function() {
            $resourceItems.classList.remove('loading');
        });
}

function getResourceItemName(url) {
    return fetch(url, {
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

            if (resourceDetails.title) {
                return resourceDetails.title;
            }

            return resourceDetails.name;
        })
        .catch(function (error) {
            console.log(error);
        });
}

function getResourceItemDetails(url) {
    $resourceItemDetails.classList.add('loading');
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
            
            let resourceDetailsPromises = [];

            for (let i = 0; i < resourceDetailsKeys.length; i++) {
                let curKey = resourceDetailsKeys[i];
                let curVal = resourceDetails[curKey];

                switch (curKey) {
                    case 'url':
                        break;
                    case 'created':
                    case 'edited':
                        let date = new Date(curVal);
                        let dateLineHTML = `<li><strong>${curKey}:</strong> ${date.toLocaleDateString('nl-BE')}</li>`;
                        
                        resourceDetailsPromises.push(Promise.resolve(dateLineHTML));
                        break;
                    case 'homeworld':
                        let namePromise = getResourceItemName(curVal).then(function(name) {
                            return `<li><strong>${curKey}:</strong><button class='resource-item-btn'  data-resource-url='${resourceUrlFromResourceItemUrl(curVal)}' data-url='${curVal}'>${name}</button></li>`
                        });

                        resourceDetailsPromises.push(namePromise);
                        break;
                    case 'people':
                    case 'pilots':
                    case 'films':
                    case 'characters':
                    case 'planets':
                    case 'starships':
                    case 'vehicles':
                    case 'species':
                        let namePromises = [];

                        for (let j = 0; j < curVal.length; j++) {
                            let namePromise = getResourceItemName(curVal[j]).then(function(name) {
                                return `<button class='resource-item-btn' data-resource-url='${resourceUrlFromResourceItemUrl(curVal[j])}' data-url='${curVal[j]}'>${name}</button>`;
                            });
                            
                            namePromises.push(namePromise);
                        }

                        let buttonsHTMLPromise = Promise.all(namePromises)
                            .then(function(buttonHTML) {
                            return `<li><strong>${curKey}:</strong>${buttonHTML.join('')}</li>`
                        })
                        
                        resourceDetailsPromises.push(Promise.resolve(buttonsHTMLPromise));
                        break;
                    default:
                        let defaultLineHTML = `<li><strong>${curKey}:</strong> ${curVal}</li>`;
                        
                        resourceDetailsPromises.push(Promise.resolve(defaultLineHTML));
                }
            }
            
            return Promise.all(resourceDetailsPromises).then(function(liStrings) {
                let resourceDetailsHTML = `<ul>${liStrings.join('')}</ul>`;
                $resourceItemDetails.innerHTML = resourceDetailsHTML;
            });
        })
        .catch(function (error) {
            console.log(error);
        }).finally(function() {
            $resourceItemDetails.classList.remove('loading');
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
        const resourceUrl = target.dataset.resourceUrl;

        getResourceItemDetails(url);

        if (resourceUrl) {
            getResource(resourceUrl);
        }
    }
}

$rootBtn.addEventListener('click', rootBtnClick);
$resourceList.addEventListener('click', clickResourceBtn);
$resourceItems.addEventListener('click', clickResourceItemBtn);
$resourceItemDetails.addEventListener('click', clickResourceItemBtn);