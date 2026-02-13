/**
 * Author : Alexander Perlock + Ekaterina Uhalova
 * MACID : perlocka + uhalovae
 * Date Created : 04 02 26
 * Date Modified : 11 02 26
 * 
 * Shop
 */

class Shop {
    constructor(data) {
        // commented out pulling from local storage for testing

        // if (data) {
        //     const DATA = JSON.parse(data);
        //     this.upgrades = DATA.upgrades;
        //     this.buildings = DATA.buildings;
        // } else {
            this.upgrades = [
                { ID: "mouse", cost: 5, desc: "", out_factor: 0.1},
            ];

            this.buildings = [
                { ID: "cursor", cost: 10, base: 10, amount: 0, desc: "", out_factor: 0.1 }
            ];
        // }
        
        this.img_type = "png";

        this.render();
        this.#event_listeners();
    }

    /**
     * Instantiates event listeners
     */
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

    /**
     * Purchases the given upgrade
     * 
     * @param {upgrades} up the upgrade to be purchased 
     */
    #purchase_up(up) {
        deduct_from_score(up.cost);
        upgrades_count++;

        // removes the element from being purchased again
        document.getElementById(up.ID).style.display = "none";

        console.log(up)
        inc_click_value(up.out_factor);
    }

    /**
     * Purchases the given building
     * 
     * @param {buildings} build the building to be purchased
     */
    #purchase_build(build) {
        deduct_from_score(build.cost);
        build.amount++;

        this.#price_function(build);
        this.update_building(build);

        inc_bps(build.out_factor);
    }

    /**
     * Increases the cost for the next purchase of a building
     * 
     * @param {buildings} building the building to increase the price of
     */
    #price_function(building) {
        building.cost = building.base * 1.15 ** (building.amount)
    }

    /**
     * Returns the total number of upgrades purchased
     * 
     * @returns {int} the number of upgrades
     */
    number_upgrades() {
        let num = this.up_count;
        this.buildings.forEach((build) => num += build.amount);
        return num;
    }

    /**
     * Updates all of the building HTML elements
     */
    update() {
        this.buildings.forEach((building) => this.update_building(building));
    }

    /**
     * Updates the given building HTML element
     * 
     * @param {buildings} building the building to be updated
     */
    update_building(building) {
        document.querySelector(`#${building.ID} .cost`).innerHTML = `Cost : ${building.cost}`;
        document.querySelector(`#${building.ID} .amount`).innerHTML = `Amount : ${building.amount}`;
    }

    /**
     * Renders the upgrades and buildings onto their respective elements
     */
    render() {
        let upgrade_e = document.getElementById("upgrades");
        upgrade_e.innerHTML = ``;
        this.upgrades.forEach((up) => {
            upgrade_e.innerHTML += `<button id=${up.ID}>
            <h1 class="name">${up.ID}</h1>
            <p class="desc">${up.desc}</p>
            <div class="cost">Cost : ${up.cost}</div>
            <img src="./assets/images/${up.ID}.${this.img_type}"></button>`;
        });

        let buidling_e = document.getElementById("buildings");
        buidling_e.innerHTML = ``;
        this.buildings.forEach((build) => {
            buidling_e.innerHTML += `<button id=${build.ID}>
            <h1 class="name">${(build.ID)}</h1>
            <p class="desc">${build.desc}</p>
            <div class="cost">Cost : ${build.cost}</div>
            <div class="amount">Amount : ${build.amount}</div>
            <img src="./assets/images/${build.ID}.${this.img_type}"></button>`;
        });  
    }

    /**
     * Saves the elements of this object
     */
    save() {
        localStorage.shop = JSON.stringify(this);
    }
}
// export default shop;

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