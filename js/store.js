/**
 * Author : Alexander Perlock + Ekaterina Uhalova
 * MACID : perlocka + uhalovae
 * Date Created : 04 02 26
 * Date Modified : 11 02 26
 * 
 * Store
 */

class Store {
    constructor() {
        this.upgrades = [
            { ID: "mouse", cost: 5, desc: "" }
        ];

        this.buildings = [
            { ID: "cursor", cost: 10, base: 10, amount: 0, desc: "" }
        ];

        this.render();
        this.#event_listeners();
    }

    #event_listeners() {
        this.upgrades.forEach((up) => 
            document.getElementById(up.ID).addEventListener("click", () => {
                this.#purchase_up(up);
        }));

        this.buildings.forEach((build) => 
            document.getElementById(build.ID).addEventListener("click", () => {
                this.#purchase_build(build);
        }));
    }

    #purchase_up(up) {
        score -= up.cost;
        upgrades_count++;

        document.getElementById(up.ID).style.visibility = "hidden";
    }

    #purchase_build(build) {
        score -= build.cost;
        build.amount++;

        this.#price_function(build);
        this.update_item(build);
    }

    #price_function(item) {
        item.cost *= 0.1 + 1.01 * item.amount ^ 2
    }

    number_upgrades() {
        let num = this.up_count;
        this.buildings.forEach((build) => num += build.amount);
        return num;
    }

    update() {

    }

    update_building(building) {

        // num_upgrades

        // document.querySelector(`#${item_ID} .cost`).innerHTML = `Cost : ${price_function(num_upgrades)}`;
        // document.querySelector(`#${item_ID} .amount`).innerHTML = `Amount : ${num_upgrades}`;
    }

    render() {
        upgrade_e = document.getElementById("upgrades");
        upgrade_e.innerHTML = ``;
        this.upgrades.forEach((up) => {
            upgrade_e.innerHTML += `<li id=${up.ID}>
            <h1 class="name">${up.ID}</h1>
            <p class="desc">${up.desc}</p>
            <div class="cost">Cost : ${up.cost}</div>`;
        });

        buidling_e = document.getElementById("buildings");
        buidling_e.innerHTML = ``;
        this.buildings.forEach((build) => {
            buidling_e.innerHTML += `<input id=${build.ID} type="button">
            <h1 class="name">${build.ID}</h1>
            <p class="desc">${build.desc}</p>
            <div class="cost">Cost : ${build.cost}</div></input>
            <div class="amount>Amount : ${up.amount}</div>`;
        });  
    }
}

// let store_items = [
//     {name: "Cursor", value: 5}, 
//     {name: "Grandma", value: 20},
//     {name: "Farm", value: 50},  
// ];

// function populate_store() {
//     store_items.forEach(function (store_item) {

//     });
// }

// function purchase(eleID) {
//     switch (eleID) {
//         case "mouse_up":
//             inc_c_v(0.1);
//             num_up.mouse_up += 1;
//             break;

//         case "":

//             break;

//         default: break;
//     }
// }

// function price_function(x) {
//     return 10 * (x + 1);
// }

// function update_store() {
//     id_string = "#" + String(eleID);
//         num_upgrades = num_up[eleID];

//         document.querySelector(`${id_string} .cost`).innerHTML = `Cost : ${price_function(num_upgrades)}`;
//         document.querySelector(`${id_string} .amount`).innerHTML = `Amount : ${num_upgrades}`;
// }