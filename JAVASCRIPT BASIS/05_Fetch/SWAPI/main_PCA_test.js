const $rootBtn = document.getElementById('root-btn');
const $resourceList = document.getElementById('resource-list');
const $resourceItems = document.getElementById('resource-items');

//al de errors worden opgevangen in 1 net
function getRoot() {
    fetch('https://swapi.tech/api', {
        method: 'GET',
    }).then(function(response) {
        console.log(response);
        
        //inspelen op de statuscode, deze zelf gaan triggeren wanneer de statuscode niet ok is
        if (!response.ok) {
            throw new Error('Request failed');
        // alles onder de if is de response wel ok en geslaagd
        // deze console.log gaat een promise tonen
        // console.log(response.json());
        //als promise fulfilled is, werken met .then en body opvragen
        }
        
        return response.json();
    })
    .then(function(body) {
        //keys genomen van de result
        //dit object bevat een array waarover er geloopt kan worden
        let resources = Object.keys(body.result);
        
        for (let i = 0; i < resources.length; i++) {
            let curKey = resources[i];
            let curUrl = body.result[curKey];
            
            let newListItem = `<button class='resource-btn' data-url="${curUrl}">${curKey}</button>`;
            $resourceList.insertAdjacentHTML('beforeend', newListItem);
        }
    })
    //catch gaat alle fouten oppakken, dus script gaat ook niet stoppen
    .catch(function(error) {
        console.log(error);
    });
}

function rootBtnClick() {
    getRoot();
}

function getResource(url) {
    fetch(url, {
        method: 'GET',
    }).then(function(response) {
        if (!response.ok) {
            throw new Error('Request failed');
        }

        return response.json();
    })
        .then(function(body) {
            $resourceItems.innerHTML = '';
            let resourceItems = body.results;
            
            if (body.result) {
                resourceItems = body.result;
            }
            
            for (let i = 0; i < resourceItems.length; i++) {
                const curResourceItem = resourceItems[i];
                const resourceItemKeys = Object.keys(curResourceItem);
                
                let resourceItemHTML = '<ul>';
                
                for (let j=0; j <resourceItemKeys.length; j++) {
                    const curKey = resourceItemKeys[j];
                    const curVal = curResourceItem[curKey];
                    resourceItemHTML += `<li><strong>${curKey}:</strong> ${curVal}</li>`;
                }
                
                resourceItemHTML += '</ul>';
                
                $resourceItems.insertAdjacentHTML('beforeend', resourceItemHTML);
            }
        })

        

        .catch(function(error) {
            console.log(error);
        });

        
}

function getName(url) {
    fetch(url, {
        method: 'GET',
    }).then(function(response) {
        if (!response.ok) {
            throw new Error('Request failed');
        }

        return response.json();
    })
        .then(function(body) {
            $resourceItems.innerHTML = '';
            let resourceItems = body.results;
            
            // if (body.result) {
            //     resourceItems = body.result;
            // }
            
            for (let i = 0; i < resourceItems.length; i++) {
                const curResourceItem = resourceItems[i];
                const resourceItemKeys = Object.keys(curResourceItem);
                
                let resourceItemHTML = '<ul>';
                
                for (let j = 0; j < resourceItemKeys.length; j++) {
                    const curKey = resourceItemKeys[j];
                    const curVal = curResourceItem[curKey];
                    resourceItemHTML += `<li><strong>${curKey}:</strong> ${curVal}</li>`;

                    let itemName = [];
                    let resourceNameHTML = '<ul>';
                    for (let k = 0; k < resourceItemKeys.length; k++) {
                        console.log('resourceItemKeys', resourceItemKeys[k]);
                        const curItem = itemName.indexOf(resourceItemKeys[0]);
                        console.log('curItem', curItem);
                        



                    }

                    resourceNameHTML += '</ul>';


                }
                
                resourceItemHTML += '</ul>';
                
                $resourceItems.insertAdjacentHTML('beforeend', resourceItemHTML);
            }
        })
        .catch(function(error) {
            console.log(error);
        });
}

function clickResourceBtn(event) {
    const target = event.target;
    
    if (target.matches('.resource-btn')) {
        const url = target.dataset.url;
        
        getResource(url);
        console.log(url);
        getName(url);
        
    }
}


$rootBtn.addEventListener('click',rootBtnClick);
$resourceList.addEventListener('click', clickResourceBtn)
