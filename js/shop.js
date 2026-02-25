/**
 * Author : Alexander Perlock + Ekaterina Uhalova
 * MACID : perlocka + uhalovae
 * Date Created : 04 02 26
 * Date Modified : 19 02 26
 * 
 * Shop
 */

class Shop {
    constructor(data) {
        // commented out pulling from local storage for testing

        if (data) {
            const DATA = JSON.parse(data);
            this.upgrades = DATA.upgrades;
            this.buildings = DATA.buildings;
        } else {
            this.upgrades = [
                { ID: "Mouse", cost: 5, desc: "", out_factor: 0.1, shown: true },
            ];

            this.buildings = [
                { ID: "Cursor", cost: 10, base: 10, amount: 0, desc: "Auto clicks", out_factor: 0.1 },
                { ID: "Grandma", cost: 100, base: 100, amount: 0, desc: "Tends to the ducks", out_factor: 1 },
                { ID: "Farm", cost: 1250, base: 1250, amount: 0, desc: "Duck farm", out_factor: 10 },
                { ID: "Temple", cost: 15000, base: 15000, amount: 0, desc: "ALL praise YTKA", out_factor: 100 },

            ];
        }

        this.img_type = "png";

        this.render();
        this.#event_listeners();

        this.upgrades.forEach((item) => {
            if (!item.shown) {
                console.log(item.ID);
                document.getElementById(item.ID).style.display = "none";
            }
        });
    }

    /**
     * Instantiates event listeners
     */
    #event_listeners() {
        this.upgrades.forEach((up) =>
            document.getElementById(up.ID).addEventListener("click", () => {
                // this.#purchase_up(up);
                this.#purchase(up, "upgrade");
        }));

        this.buildings.forEach((build) => {
            // console.log(build);
            document.getElementById(build.ID).addEventListener("click", () => {
                // this.#purchase_build(build);
                this.#purchase(build, "building");
        })});
    }

    /**
     * Purchases the given item
     * 
     * @param {upgrades || buildings} item the store item to be purchased 
     * @param {String} type the type of the item, either upgrade or building
     */
    #purchase(item, type) {
        if (score < item.cost) {
            return;
        }
        deduct_from_score(item.cost);
        switch (type) {
            case "upgrade":
                document.getElementById(item.ID).style.display = "none";
                item.shown = false;
                inc_click_value(item.out_factor);
                break;

            case "building":
                item.amount++;
                this.#price_function(item);
                this.update_building(item);
                inc_bps(item.out_factor);
                break;
        }
        rewards.update();
    }

    // /**
    //  * Purchases the given upgrade
    //  * 
    //  * @param {upgrades} up the upgrade to be purchased 
    //  */
    // #purchase_up(up) {
    //     deduct_from_score(up.cost);
    //     upgrades_count++;

    //     // removes the element from being purchased again
    //     document.getElementById(up.ID).style.display = "none";

    //     // console.log(up)
    //     inc_click_value(up.out_factor);
    // }

    // /**
    //  * Purchases the given building
    //  * 
    //  * @param {buildings} build the building to be purchased
    //  */
    // #purchase_build(build) {
    //     deduct_from_score(build.cost);
    //     build.amount++;

    //     this.#price_function(build);
    //     this.update_building(build);

    //     inc_bps(build.out_factor);
    // }

    /**
     * Increases the cost for the next purchase of a building
     * 
     * @param {buildings} building the building to increase the price of
     */
    #price_function(building) {
        building.cost = Math.round(building.base * 1.15 ** (building.amount) * 100) / 100
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
            const button = document.createElement("button");
            button.id = up.ID;
            button.className = "store-item";
            
            const name = document.createElement("h1");
            name.classList.add("name");
            name.innerHTML = up.ID;

            const desc = document.createElement("p");
            desc.classList.add("desc");
            desc.innerHTML = up.desc;

            const cost = document.createElement("div");
            cost.classList.add("cost");
            cost.innerHTML = `Cost : ${up.cost}`; 

            const ico = document.createElement("img");
            ico.setAttribute("src", `./assets/images/${up.ID}.${this.img_type}`);

            button.appendChild(name);
            button.appendChild(desc);
            button.appendChild(cost);
            button.appendChild(ico);

            upgrade_e.appendChild(button);
            
        });

        let building_e = document.getElementById("buildings");
        building_e.innerHTML = ``;
        this.buildings.forEach((build) => {
            const button = document.createElement("button");
            button.id = build.ID;
            button.className = "store-item";
            
            const name = document.createElement("h1");
            name.classList.add("name");
            name.innerHTML = build.ID;

            const desc = document.createElement("p");
            desc.classList.add("desc");
            desc.innerHTML = build.desc;

            const cost = document.createElement("div");
            cost.classList.add("cost");
            cost.innerHTML = `Cost : ${build.cost}`; 
            
            const amount = document.createElement("div");
            amount.classList.add("amount");
            amount.innerHTML = `Amount : ${build.amount}`; 

            const ico = document.createElement("img");
            ico.setAttribute("src", `./assets/images/${build.ID}.${this.img_type}`);

            button.appendChild(name);
            button.appendChild(desc);
            button.appendChild(cost);
            button.appendChild(amount);
            button.appendChild(ico);

            building_e.appendChild(button);
        });
    }

    /**
     * Saves the elements of this object
     */
    save() {
        localStorage.shop = JSON.stringify(this);
    }
}