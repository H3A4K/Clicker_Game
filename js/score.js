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
let num_up = 0;
let click_val = 1;

function a_click() {
    score += click_val;
}

function inc_c_v(amount) {
    click_val += amount;
}