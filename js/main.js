const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],
  // Change code below this line
  getPotions() {
    return this.potions;
  },
  addPotion(newPotion) {
  
    let olName = [];
    for (const pot of this.potions) {
      olName.push(pot.name)
    }
    if (olName.includes(newPotion.name)) {
      
      return `Error! Potion ${newPotion.name} is already in your inventory!`;
    }

    this.potions.push(newPotion);
  },

  removePotion(potionName) {
    const potionIndex = this.potions.indexOf(potionName);
    
    for (let i = 0; i < this.potions.length; i += 1) {
      if (this.potions[i].name === potionName.name) {
        return potionIndex = i;
      }
    }

    if (potionIndex === -1) {
      return `Potion ${potionName} is not in inventory!`;
    }

    this.potions.splice(potionIndex, 1);
  },

  updatePotionName(oldName, newName) {
    const potionIndex = this.potions.indexOf(oldName);

    if (potionIndex === -1) {
      return `Potion ${oldName} is not in inventory!`;
    }

    this.potions.splice(potionIndex, 1, newName);
  },
  // Change code above this line
};
atTheOldToad.addPotion({ name: "Speed potion", price: 460 })
console.log(atTheOldToad.potions)