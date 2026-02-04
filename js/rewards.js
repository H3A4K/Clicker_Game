/**
 * Author : Alexander Perlock + Ekaterina Uhalova
 * MACID : perlocka + uhalovae
 * Date Created : 04 02 26
 * Date Modified : 04 02 26
 * 
 * Score instantiation and modification
 */
class achievement {
    constructor (name, desc) {
        this.name = name;
        this.desc = desc;
    }
}

function new_reward(reward) {
    rewards.push(reward);
    update_rewards();
    format_reward(reward);
}

function remove_reward(reward) {
    let ind = rewards.indexOf(reward);
    rewards.splice(ind, 1);

    formatted_rewards = []
    rewards.forEach(format_reward(reward))
}

function format_reward(reward) {
    formatted = `<li><h1>${reward.name}</h1><p>${reward.desc}</p></li>`
    formatted_rewards.push(formatted);
}

function update_rewards() {
    // TODO : Change rewards page to have all rewards

}

let rewards = [];
let formatted_rewards = [];