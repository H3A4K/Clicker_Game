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
let click_val = 1;

function update_scoreboard() {
    document.getElementById("score_value").innerText = score.toFixed(1);
    document.getElementById("click_value").innerText = click_val.toFixed(1);
    document.getElementById("bps").innerText = bps.toFixed(1);
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

function deduct_from_score(amount) {
    score -= amount;
    update_scoreboard();
}

function inc_bps(amount) {
    bps += amount;
}

function do_periodic_logic() {
    score += bps;
    update_scoreboard();
}

setInterval(do_periodic_logic, 1000);

function score_save() {
    localStorage.score = JSON.stringify(
        {
            score: score,
            bps: bps,
            click_val: click_val,

        }
    )
}

function score_load() {
    let local = localStorage.score;
    if (local) {
        local = JSON.parse(local);
        score = local.score;
        bps = local.bps;
        click_val = local.click_val;
    }
    update_scoreboard();
}