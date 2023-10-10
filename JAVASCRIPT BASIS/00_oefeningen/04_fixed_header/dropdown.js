let $dropdownBtn = document.getElementById('dropdown-btn');
let $dropdown = document.getElementById('dropdown');
let $dropdownContainer = document.getElementById('dropdown-container');

// function handleDropdownBtnClick(event) {
//     if (event.target.matches('#dropdown-btn')) {
//         $dropdown.classList.toggle('header__nav-dropdown--open'); //nav zal openklappen
//     } else {
//         $dropdown.classList.remove('header__nav-dropdown--open'); //nav zal toeklappen waar we ook klikken
//     }
// }

// document.addEventListener('click', handleDropdownBtnClick);

//nav bedienen met tab key en click
function handleDropdownBtnFocus() {
    console.log('focus');
    $dropdown.classList.add('header__nav-dropdown--open');
}

//nav bedienen met tab key en click
function handleDropdownBtnBlur(event) {
    console.log(event.relatedTarget);
    if (!$dropdownContainer.contains(event.relatedTarget)) {
        $dropdown.classList.remove('header__nav-dropdown--open');
    }
}

//nav bedienen met pijlen up en down key en click
function handleDropdownKeydown(event) {
    
    console.log(document.activeElement);        
    if (event.key === 'ArrowDown') {
        event.preventDefault();
        console.log('ArrowDown');                                   //activeElement:het element dat focus heeft, wordt gelogd
        if (document.activeElement.matches('#dropdown-btn')) {
            $dropdown.firstElementChild.focus();                    //firstelementchild: eerste knop die getriggerd wordt
        } else if ($dropdown.contains(document.activeElement)) {
            if (document.activeElement.nextElementSibling) {
                document.activeElement.nextElementSibling.focus();  //nextelementsibling: telkens de volgende knop nemen in de dropdownmenu
            } else {
                $dropdown.firstElementChild.focus();
            }
        }
    } else if (event.key === 'ArrowUp') {
        event.preventDefault();
        console.log('ArrowUp');
        if (document.activeElement.matches('#dropdown-btn')) {
            $dropdown.lastElementChild.focus();
        } else if ($dropdown.contains(document.activeElement)) {
            if (document.activeElement.previousElementSibling) {
                document.activeElement.previousElementSibling.focus();
            } else {
                $dropdown.lastElementChild.focus();                 //lastElementChild:laatste knop die getriggerd wordt
            }
        }
    }
    
}

$dropdownBtn.addEventListener('focus', handleDropdownBtnFocus);
$dropdownContainer.addEventListener('focusout', handleDropdownBtnBlur);
$dropdownContainer.addEventListener('keydown', handleDropdownKeydown);








