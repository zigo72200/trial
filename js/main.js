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
    for (let i = 0; i < this.potions.length; i += 1) {
      if (this.potions[i].name === potionName.name) {
        this.potions.splice(i, 1);

        return `Potion ${potionName} remove`;
      }
    }
      return `Potion ${potionName} is not in inventory!`;

    
  },

  updatePotionName(oldName, newName) {
    for (let i = 0; i < this.potions.length; i += 1) {
      if (this.potions[i].name === oldName) {
        this.potions[i].name = newName;

       
      }
    }
      return `Potion ${oldName} is not in inventory!`;

    // const potionIndex = this.potions.indexOf(oldName);

    // if (potionIndex === -1) {
    //   return `Potion ${oldName} is not in inventory!`;
    // }

    // this.potions.splice(potionIndex, 1, newName);
  },
  // Change code above this line
};

atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion")
console.log(atTheOldToad.potions);
