/**
 * Author : Alexander Perlock + Ekaterina Uhalova
 * MACID : perlocka + uhalovae
 * Date Created : 04 02 26
 * Date Modified : 04 02 26
 * 
 * Resposnible for the creation of all DOM event listeners
 */

const clicker = document.getElementById("clicker");
clicker.addEventListener("click", function (event) {

});

const store_options = document.querySelectorAll("#store li");
store_options.forEach(function (opt) {
    opt.addEventListener("click", function (event) {
        purchase(opt.id)
    }
)});