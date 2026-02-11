/**
 * Author : Alexander Perlock + Ekaterina Uhalova
 * MACID : perlocka + uhalovae
 * Date Created : 04 02 26
 * Date Modified : 04 02 26
 * 
 * Score instantiation and modification
 */

// init
let score = 0;
let eps = 0;
let num_up = {
    mouse_up: 0,
    other: 0
};
let click_val = 1;
let timer_ID;

/**
 * Simulate clicking the desired object
 */
function a_click() {
    score += click_val;
}

/**
 * Increae click value
 * 
 * @param float amount -> the amount to increase the click value by
 */
function inc_c_v(amount) {
    click_val += amount;
}

/**
 * Increase EPS
 * 
 * @param float amount -> the amount to increase the EPS by
 */
function inc_eps(amount) {
    eps += amount;

    timer_ID = setInterval();
    
}