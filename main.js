const coffeeShop = {
    beans: 40,
    money: 100, // Initial amount of money
  
    drinkRequirements: {
        latte: { beanRequirement: 10, price: 5 },
        americano: { beanRequirement: 5, price: 3 },
        doubleShot: { beanRequirement: 15, price: 7 },
        frenchPress: { beanRequirement: 12, price: 6 }
      },
  
    makeDrink: function (drinkType) {
      const requiredBeans = this.drinkRequirements[drinkType];
  
      if (requiredBeans !== undefined) {
        if (requiredBeans <= this.beans) {
          this.beans -= requiredBeans;
          console.log('Enjoy your ' + drinkType + '!');
        } else {
          console.log("Sorry, we're all out of beans!");
        }
      } else {
        console.log("Sorry, we don't make " + drinkType);
      }
    },
  
    buyBeans: function (numBeans) {
       
        const costPerBean = 2;
        
        const totalCost = numBeans * costPerBean;
        if (totalCost <= this.money) {
          this.money -= totalCost;
          this.beans += numBeans;
          console.log('Successfully bought ' + numBeans + ' beans!');
        } else {
          console.log("Sorry, not enough money to buy beans!");
        }
      },
    
      buyDrink: function (drinkType) {
        const price = this.drinkRequirements[drinkType].price;
    
        if (price !== undefined) {
          this.money += price; // Increase money based on the price of the drink
          this.makeDrink(drinkType); // Call the makeDrink method
        } else {
          console.log("Sorry, we don't serve " + drinkType);
        }
      }
    };
       
  coffeeShop.makeDrink("latte");
  coffeeShop.makeDrink("americano");
  coffeeShop.makeDrink("filtered"); // Should log "Sorry, we don't make filtered"
  coffeeShop.makeDrink("doubleShot");
  coffeeShop.makeDrink("frenchPress"); // Should log "Sorry, we're all out of beans"
  coffeeShop.buyBeans(20); // Buy 20 beans
  console.log('Remaining money: $' + coffeeShop.money);
  console.log('Remaining beans: ' + coffeeShop.beans);
  coffeeShop.buyDrink('latte'); // Buy and make a latte
  console.log('Remaining money: $' + coffeeShop.money);
  console.log('Remaining beans: ' + coffeeShop.beans);
  





