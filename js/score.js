/**
 * Author : Alexander Perlock + Ekaterina Uhalova
 * MACID : perlocka + uhalovae
 * Date Created : 04 02 26
 * Date Modified : 11 02 26
 * 
 * Score instantiation and modification
 */

// init
let score = 0;
let eps = 0;
let num_up = 0;
let click_val = 1;
let upgrades_count = 0;

function update_scoreboard() {
    document.getElementById("score_value").innerText = score;
    document.getElementById("click_value").innerText = click_val;
    document.getElementById("upgrades_value").innerText = upgrades_count;
}

function a_click() {
    score += click_val;
    // document.getElementById("score_value").innerText = score;
    update_scoreboard();
}

function inc_click_value(amount) {
    click_val += amount;
    upgrades_count++;
    // document.getElementById("click_value").innerText = click_val;
    // document.getElementById("upgrades_value").innerText = upgrades_count;
    update_scoreboard();
}

function deduct_from_score(amount) {
    score -= amount;
    update_scoreboard();
}

periodic_update();

function periodic_update(){
    setTimeout(do_periodic_logic, 3000);
}

function do_periodic_logic() {
    // deduct_from_score(10);
    periodic_update();

}
