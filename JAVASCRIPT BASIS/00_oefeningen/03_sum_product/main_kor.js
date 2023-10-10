let $inputContainer = document.querySelector('.input-container');
let $addActionBtn = document.getElementById('add-action');
let $sumActionBtn = document.getElementById('sum-action');
let $productActionBtn = document.getElementById('product-action');
let $sumResult = document.getElementById('sum-container');
let $productResult = document.getElementById('product-container');

function setDeleteBtnDisable() {
    let disable = $inputContainer.children.length <= 2;

    for (let i = 0; i < $inputContainer.children.length; i++) {
        let $btn = $inputContainer.children[i].querySelector('.delete-btn');

        $btn.disabled = disable;
    }
}
function deleteRow(event) {
    if ($inputContainer.children.length <= 2) {
        for (let i = 0; i < $inputContainer.children.length; i++) {
            let $btn = $inputContainer.children[i].querySelector('.delete-btn');

            $btn.disabled = true;
        }
        return;
    }

    let $target = event.target;

    if ($target.matches('.delete-btn')) {
        // $target.closest('.input-row').remove();
        $target.parentElement.remove();

        setDeleteBtnDisable();
    }
}

function addRow() {
    let rowHtml = `
            <div class="input-row">
                <input type="number" />
                <button class="delete-btn">Delete</button>
            </div>`;
    $inputContainer.insertAdjacentHTML('beforeend', rowHtml);

    setDeleteBtnDisable();
}

function sumNumbers() {
    let sum = 0;

    for (let i = 0; i < $inputContainer.children.length; i++) {
        let $input = $inputContainer.children[i].querySelector('input');
        let curNumber = Number($input.value);

        if (!Number.isNaN(curNumber)) {
            sum += curNumber;
        }
    }

    console.log(sum);
    $sumResult.innerText = `Sum = ${sum}`;
}

function productNumbers() {
    let product = 1;

    for (let i = 0; i < $inputContainer.children.length; i++) {
        let $input = $inputContainer.children[i].querySelector('input');
        let curNumber = Number($input.value);
        
        if (curNumber.toString() === $input.value && !Number.isNaN(curNumber)) {
           product *= curNumber;    
        }
       
    }

    $productResult.innerText = `Product = ${product}`;
}

$inputContainer.addEventListener('click', deleteRow);
$addActionBtn.addEventListener('click', addRow);
$sumActionBtn.addEventListener('click', sumNumbers);
$productActionBtn.addEventListener('click', productNumbers);