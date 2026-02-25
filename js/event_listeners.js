/**
 * Author : Alexander Perlock + Ekaterina Uhalova
 * MACID : perlocka + uhalovae
 * Date Created : 04 02 26
 * Date Modified : 11 02 26
 * 
 * Resposnible for the creation of all DOM event listeners
 */

window.addEventListener("load", () => {
    score_load(localStorage.store);

    shop = new Shop(localStorage.shop);
    rewards = new Achievements(localStorage.rewards);

    function save() {
        shop.save()
        score_save();
        rewards.save();
    }

    setInterval(save, 1000);
    window.addEventListener("close", () => {
        save();
        
    });
});

const clicker = document.getElementById("clickme");
clicker.addEventListener("click", function (event) {
    a_click();
    rewards.update();
});