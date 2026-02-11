/**
 * Author : Alexander Perlock + Ekaterina Uhalova
 * MACID : perlocka + uhalovae
 * Date Created : 04 02 26
 * Date Modified : 04 02 26
 * 
 * Store
 */

function purchase(eleID) {
    switch (eleID) {
        case "mouse_up":
            inc_c_v(0.1);
            num_up.mouse_up += 1;
            break;
           
        case "":

            break;

        default: break;
    }
}

function price_function(x) {
    return 10 * (x + 1);
}

function store_update(eleID) {
    id_string = "#" + String(eleID);
    num_upgrades = num_up[eleID];

    document.querySelector(`${id_string} .cost`).innerHTML = `Cost : ${price_function(num_upgrades)}`;
    document.querySelector(`${id_string} .amount`).innerHTML = `Amount : ${num_upgrades}`;
}