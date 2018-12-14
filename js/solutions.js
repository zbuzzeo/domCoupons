//1. Target the h3 element with the id of 'disclaimer' and change the contents to the follow:

var finePrint = 'Coupons VALID from Tuesday 12/4/2018 thru Saturday 6/29/2019. All sales FINAL. NO REFUNDS and EXCHANGES. And definitely NO RAINCHECKS! And ONLY POSITIVE reviews allowed on Social Media (FB, Instagram, Twitter, Yelp, etc.). And PLEASE Follow us on FB, Instagram, Twitter.'

disclaimer.innerHTML = finePrint;

// 2. Target the div elemenet with the id of 'brand1' and update the content to Nabisco.

brand1.innerHTML = 'Nabisco';

// 3. Target the div element with the id of 'item1' and update the content with Cheeseburger Oreos. 

item1.innerHTML = 'Cheeseburger Oreos';

// 4. Target the div element with the id of 'price1' and update the content to $8.99.

price1.innerHTML = '$8.99';

// 5. Target the button element with the id of 'discount1' and update the content to Free fries with purchase!

discount1.innerHTML = 'Free fries with purchase!';

// 6. Create a div element with the id of 'item2' and update the content to Hendrick's Gin. Append this element to William Grand & Sons div.

var ginBox = document.createElement('div');
ginBox.id = 'item2';
ginBox.innerHTML = "Hendrick's Gin";
brand2.appendChild(ginBox);

// 7. Create a div element with the id of 'price2' and update the content to $34.99. Append this element to the Hendrick's Gin div.

var priceBox = document.createElement('div');
priceBox.id = 'price2';
priceBox.innerHTML = '$34.99';
ginBox.appendChild(priceBox);

// 8. Create a button element with the id of 'discount3' and give it a content of 50% OFF Axe body soap!. Append this element to the appropriate div class 'block3.

var blockClass = document.getElementsByClassName('block3');

var buttonBox = document.createElement('button');
buttonBox.id = 'discount3';
buttonBox.innerHTML = '50% OFF Axe body soap!';
blockClass[0].appendChild(buttonBox);

// 9. Target the div element with a class of 'item' for the Panda Express section and update the content to Orange Chicken.

var itemBox = document.getElementsByClassName('item');

itemBox[0].innerHTML = 'Orange Chicken';

// 10. Create a button element with a class of 'discount' and update the content to Free T-shirt and fortune cookie with purchase! Append this button to Panda Express section.

var newBlock = document.getElementsByClassName('block1');

var buttonElem = document.createElement('button');
buttonElem.className = 'discount';
buttonElem.innerHTML = 'Free T-shirt and fortune cookie with purchase!';
newBlock[1].appendChild(buttonElem);


// 11. Target the div element with the class of 'brand' for the red hoodie section and update the content to Uniqlo.

var brandElem = document.getElementsByClassName('brand');

brandElem[1].innerHTML = 'Uniqlo';

// 12. Target the div element with the class of 'price' for the red hoodie section and update the content to 10,000. 

var priceElem = document.getElementsByClassName('price');

priceElem[1].innerHTML = '¥10,000';

// 13. Create a div element with the class of 'brand' and give it a content of Hifiman Shangri-La. Append this element in the headphones section. 

var earPhones = document.createElement('div');
earPhones.className = 'brand';
earPhones.innerHTML = 'Hifiman Shangri-La';
blockClass[1].appendChild(earPhones);

// 14. Create a div element with the class of 'item' and give it a content of Electronstatic Headphones. Append this element in the headphones section. 

var earItem = document.createElement('div');
earItem.className = 'item';
earItem.innerHTML = 'Electronstatic Headphones';
blockClass[1].appendChild(earItem);

// 15. Create a div element with the class of 'price' and give it a content of $18,000. Append this element in the headphones section.

var earPrice = document.createElement('div');
earPrice.className = 'price';
earPrice.innerHTML = '$18,000';
blockClass[1].appendChild(earPrice);

//16. Create a button element with the class of 'discount' and give it a content of Free Barry Manilow CD with purchase! Append this element in the headphones section.

var earButton = document.createElement('button');
earButton.className = 'discount';
earButton.innerHTML = 'Free Barry Manilow CD with purchase!';
blockClass[1].appendChild(earButton);


//17. For the Unicorn Slippers, change the contents for each element to the following: 
//div.brand = H&M
//div.item =  Unicorn-Head Slippers
//div.price = $21.99
// button.discount = Free knee-high tube socks with purchase!

var discountButton = document.getElementsByClassName('discount');

brandElem[3].innerHTML = 'H&M';
itemBox[3].innerHTML = 'Unicorn-Head Slippers';
priceElem[3].innerHTML = '$21.99';
discountButton[3].innerHTML = 'Free knee-high tube socks with purchase!';

//18. For the Doritos, change the contents for each element to the following:
//div.brand = Frito Lay
//div.item =  Poppin' Jalapeno Doritos
//div.price = $7.77
// button.discount = 33% OFF any 6 pack Budweiser or Bud Light.

brandElem[4].innerHTML = 'Frito Lay';
itemBox[4].innerHTML = "Poppin' Jalapeno Doritos";
priceElem[4].innerHTML = '$21.99';
discountButton[4].innerHTML = '33% OFF any 6 pack Budweiser or Bud Light';

//19. For the Pug, change the contents for each element to the following:
//div.brand = Any Dog Breeder
//div.item =  Baby Puggy
//div.price = Priceless
// button.discount = No Discounts. This cutie is worth every penny!

brandElem[5].innerHTML = 'Any Dog Breeder';
itemBox[5].innerHTML = 'Baby Puggy';
priceElem[5].innerHTML = 'Priceless';
discountButton[5].innerHTML = 'No Discounts. This cutie is worth every penny!';

//Final Boss 
//Create your own product for the last three sections.