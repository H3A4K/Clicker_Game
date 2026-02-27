/**
 * Author : Alexander Perlock + Ekaterina Uhalova
 * MACID : perlocka + uhalovae
 * Date Created : 04 02 26
 * Date Modified : 27 02 26
 * 
 * Score instantiation and modification
 */
// class Achievement {
//     constructor (name, desc) {
//         this.name = name;
//         this.desc = desc;
//     }
// }

class Achievements {
    constructor(data) {
        // commented out pulling from local storage for testing

        // if (data) {
        //     const DATA = JSON.parse(data);
        //     this.rewards = DATA.rewards;
        //     this.unavailable = DATA.unavailable;        
        //     this.achieved = DATA.achieved;        
        // } else {
        this.rewards = [
            // { name: "name", desc: "description", successor: "name of reward in unavailable (successors) array that is now achievable", requirement: () => what needs to happen to get this achievement }
            { name: "First-Bubbles", desc: "Aquire 1 bubble", requirement: () => score >= 1, successor: "Ten-Bubbles" }, 
            { name: "Cursors", desc: "Aquire 1 cursor", requirement: () => shop.buildings[0].amount >= 1, successor: "Clicking Are We?" }
        ]
        this.unavailable = [
            { name: "Ten-Bubbles", desc: "Aquire 10 bubbles", requirement: () => score >= 10, successor: null },
            { name: "Clicking Are We?", desc: "Aquire 10 cursor", requirement: () => shop.buildings[0].amount >= 10, successor: null },
        ];
        this.achieved = [];
        // }

        this.update();


        this.img_type = "png";
    }

    /**
     * Formats the reward into an HTML element
     * 
     * @param {rewards} reward the reward to be formated
     */
    #format(reward) {
        const li = document.createElement("li");
        const name = document.createElement("h1");
        name.innerHTML = reward.name;
        const desc = document.createElement("p");
        desc.innerHTML = reward.desc;
        // const img = document.createElement("img");
        // img.setAttribute("src", `${reward.name}.${this.img_type}`)

        li.appendChild(name);
        li.appendChild(desc);
        // li.appendChild(img);

        return li
    }

    /**
     * Moves the reward to the achieved array, and pulls any succeeding reward into rewards array
     * 
     * @param {rewards} reward the reward to be moved
     */
    #move(reward) {
        document.getElementById("rewards").appendChild(this.#format(reward));

        this.achieved.push(reward);
        this.rewards.splice(this.rewards.indexOf(reward), 1);
        
        let successor = reward.successor;
        if (successor) {
            this.unavailable.forEach((item) => {
                if (item.name == successor) {
                    this.rewards.push(item);
                    this.unavailable.splice(this.unavailable.indexOf(item), 1);
                    return;
                }
            })
        }
    }

    /**
     * Clears and renders all rewards onto the #rewards HTML element
     */
    render() {
        const HTML = document.getElementById("rewards");
        HTML.innerHTML = '';
        this.achieved.forEach((reward) => { HTML.appendChild(reward); });
    }

    /**
     * Checks all available rewards to see if their requirement has been met
     */
    update() {
        this.rewards.forEach((reward) => {
            if (reward.requirement()) { this.#move(reward); }
        });
    }

    /**
     * Saves the elements of this object
     */
    save() {
        localStorage.rewards = JSON.stringify(this);
    }
}

// function new_reward(reward) {
//     rewards.push(reward);
//     update_rewards();
//     format_reward(reward);
// }
// 
// function remove_reward(reward) {
//     let ind = rewards.indexOf(reward);
//     rewards.splice(ind, 1);
// 
//     formatted_rewards = []
//     rewards.forEach(format_reward(reward))
// }
// 
// function format_reward(reward) {
//     formatted = `<li><h1>${reward.name}</h1><p>${reward.desc}</p></li>`
//     formatted_rewards.push(formatted);
// }
// 
// function update_rewards() {
//     // TODO : Change rewards page to have all rewards
// 
// }
// 
// let rewards = [];
// let formatted_rewards = [];