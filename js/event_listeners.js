/**
 * Author : Alexander Perlock + Ekaterina Uhalova
 * MACID : perlocka + uhalovae
 * Date Created : 04 02 26
 * Date Modified : 11 02 26
 * 
 * Resposnible for the creation of all DOM event listeners
 */

// import {defaultEport as shop} from `./shop.js`;

const clicker = document.getElementById("clickme");
clicker.addEventListener("click", function (event) {
    a_click();
    rewards.update();
});

// const store_options = document.querySelectorAll("#store li");
// store_options.forEach(function (opt) {
//     opt.addEventListener("click", function (event) {
//         purchase(opt.id);
//         store_update(opt.id);
//         // inc_c_v(1);
//     }
// )});


window.addEventListener("load", () => {
    let local_shop = localStorage.shop;
    shop = new Shop( local_shop ? local_shop : null );

    let local_rewards = localStorage.rewards;
    rewards = new Achievements( local_rewards ? local_rewards : null );
})


const t_save_ID = setInterval(() => {
    shop.save();
    // score.save();
    // rewards.save();
}, 60000); // saves once per minute