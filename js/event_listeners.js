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
    console.log(score);
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
    let local_shop = localStorage.shop
    shop = new Shop( local_shop ? local_shop : null);
})


const t_save_ID = setInterval(() => {
    shop.save();
    // score.save();
    // rewards.save();
}, 60000); // saves once per minute