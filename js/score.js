/**
 * Author : Alexander Perlock + Ekaterina Uhalova
 * MACID : perlocka + uhalovae
 * Date Created : 04 02 26
 * Date Modified : 13 02 26
 * 
 * Score instantiation and modification
 */

// init
let score = 0;
let bps = 0;
let num_up = {
    mouse_up: 0,
    other: 0
};
let click_val = 1;
let upgrades_count = 0;

function update_scoreboard() {
    document.getElementById("score_value").innerText = score.toFixed(2);
    document.getElementById("click_value").innerText = click_val.toFixed(2);
    document.getElementById("upgrades_value").innerText = upgrades_count;
}

/**
 * Simulate clicking the desired object
 */
function a_click() {
    score += click_val;
    // document.getElementById("score_value").innerText = score;
    update_scoreboard();
}

function inc_click_value(amount) {
    click_val += amount;
    // document.getElementById("click_value").innerText = click_val;
    // document.getElementById("upgrades_value").innerText = upgrades_count;
    update_scoreboard();
}

function inc_upgrade_count(amount) {
    upgrades_count += amount;
}

function deduct_from_score(amount) {
    score -= amount;
    update_scoreboard();
}

function inc_bps(amount) {
    bps += amount;
}

// is this recursive??
// also, why is this?
periodic_update();

function periodic_update(){
    setTimeout(do_periodic_logic, 4000);
}

function do_periodic_logic() {
    // deduct_from_score(10);
    score += bps;
    update_scoreboard();
    periodic_update();

}
