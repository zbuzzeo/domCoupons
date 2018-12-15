//The entire dev nation is up in arms since our Ultimate Developer Gift Guide is not complete! Please use your DOM skills to help us complete this site and quash any uprising from this unruly group!

//And don't forget, please feel free to reach out for help. There is such a thing as a DOM question...

//1. Target the h3 element with the id of 'disclaimer' and change the contents to the following:

let finePrint = 'Coupons VALID from Tuesday 12/4/2018 thru Saturday 6/29/2019. All sales FINAL. NO REFUNDS and EXCHANGES. And definitely NO RAINCHECKS! And ONLY POSITIVE reviews allowed on Social Media (FB, Instagram, Twitter, Yelp, etc.). And PLEASE Follow us on FB, Instagram, Twitter.'

const disclaimer = document.getElementById ( 'disclaimer' );
disclaimer.innerHTML = finePrint;

//2. Target the div element with the id of 'brand1' and update the content to Nabisco.

const brand1 = document.getElementById ( 'brand1' );
brand1.innerHTML = 'Nabisco';

//3. Target the div element with the id of 'item1' and update the content with Cheeseburger Oreos. 

const item1 = document.getElementById ( 'item1' );
item1.innerHTML = 'Cheeseburger Oreos';

//4. Target the div element with the id of 'price1' and update the content to $8.99.

const price1 = document.getElementById ( 'price1' );
price1.innerHTML = '$8.99';

//5. Target the button element with the id of 'discount1' and update the content to Free fries with purchase!

const discount1 = document.getElementById ( 'discount1' );
discount1.innerHTML = 'Free fries with purchase!';

//6. Create a div element with the id of 'item2' and update the content to Hendrick's Gin. Append this element to William Grand & Sons div.

const getBrand2 = document.getElementById ( 'brand2' );
const item2 = document.createElement( 'div' );
item2.id = 'item2';
item2.innerHTML = 'Hendrick\'s Gin';
getBrand2.appendChild ( item2 );

//7. Create a div element with the id of 'price2' and update the content to $34.99. Append this element to the Hendrick's Gin div.

const price2 = document.createElement ( 'div' );
price2.id = 'price2';
price2.innerHTML = '$34.99';
item2.appendChild ( price2 );

//8. Create a button element with the id of 'discount3' and give it a content of 50% OFF Axe body soap!. Append this element to the appropriate div class 'block3.

const getClassBlock3 = document.getElementsByClassName ( 'block3' );
const discount3 = document.createElement ( 'button' );
discount3.id = 'discount3';
discount3.innerHTML = '50% OFF Axe body soap!';
getClassBlock3[0].appendChild ( discount3 );

//9. Target the div element with a class of 'item' for the Panda Express section and update the content to Orange Chicken.

const getPandaExpressItem = document.getElementsByClassName ( 'item' )[0];
getPandaExpressItem.innerHTML = 'Orange Chicken';


//10. Create a button element with a class of 'discount' and update the content to Free T-shirt and fortune cookie with purchase! Append this button to Panda Express section.

const getPandaExpressParent = document.getElementsByClassName ( 'block1' )[1];
const buttonDiscount = document.createElement ( 'button' );
buttonDiscount.className = 'discount';
buttonDiscount.innerHTML = 'Free T-shirt and fortune cookie with purchase!';
getPandaExpressParent.appendChild ( buttonDiscount );

//11. Target the div element with the class of 'brand' for the red hoodie section and update the content to Uniqlo.

const getHoodieBrand = document.getElementsByClassName ( 'brand' )[1];
getHoodieBrand.innerHTML = 'Uniqlo';

//12. Target the div element with the class of 'price' for the red hoodie section and update the content to 10,000. 

const getHoodiePrice = document.getElementsByClassName ( 'price' )[1];
getHoodiePrice.innerHTML = '$10,000.00';

//13. Create a div element with the class of 'brand' and give it a content of Hifiman Shangri-La. Append this element in the headphones section. 

const headphonesBlock = getClassBlock3[1];
const headphonesBrand = document.createElement ( 'div' );
headphonesBrand.className = 'brand';
headphonesBrand.innerHTML = 'Hifiman Shangri-La';
headphonesBlock.appendChild ( headphonesBrand );

//14. Create a div element with the class of 'item' and give it a content of Electronstatic Headphones. Append this element in the headphones section. 

const headphonesItem = document.createElement ( 'div' );
headphonesItem.className = 'item';
headphonesItem.innerHTML = 'Electrostatic Headphones';
headphonesBlock.appendChild ( headphonesItem );

//15. Create a div element with the class of 'price' and give it a content of $18,000. Append this element in the headphones section.

const headphonesPrice = document.createElement ( 'div' );
headphonesPrice.className = 'price';
headphonesPrice.innerHTML = '$18,000.00';
headphonesBlock.appendChild ( headphonesPrice );

//16. Create a button element with the class of 'discount' and give it a content of Free Barry Manilow CD with purchase! Append this element in the headphones section.

const headphonesButton = document.createElement ( 'button' );
headphonesButton.className = 'discount';
headphonesButton.innerHTML = 'Free Barry Manilow CD with purchase!';
headphonesBlock.appendChild ( headphonesButton );

//17. For the Unicorn Slippers, change the contents for each element to the following: 
//div.brand = H&M
//div.item =  Unicorn-Head Slippers
//div.price = $21.99
// button.discount = Free knee-high tube socks with purchase!

const getClassBlock1 = document.getElementsByClassName ( 'block1' );
const getUnicornBlock = getClassBlock1[2];
const getBrands = document.getElementsByClassName ( 'brand' );
const getItems = document.getElementsByClassName ( 'item' );
const getPrices = document.getElementsByClassName ( 'price' );
const getDiscounts = document.getElementsByClassName ( 'discount' );
getBrands[3].innerHTML = 'H&M';
getItems[3].innerHTML = 'Unicorn-Head Slippers';
getPrices[3].innerHTML = '$21.99';
getDiscounts[3].innerHTML = 'Free knee-high tube socks with purchase!';

//18. For the Doritos, change the contents for each element to the following:
//div.brand = Frito Lay
//div.item =  Poppin' Jalapeno Doritos
//div.price = $7.77
// button.discount = 33% OFF any 6 pack Budweiser or Bud Light.

const getClassBlock2 = document.getElementsByClassName ( 'block2' );
getBrands[4].innerHTML = 'Frito-Lay';
getItems[4].innerHTML = 'Poppin\' Jalapeno Doritos';
getPrices[4].innerHTML = '$7.77';
getDiscounts[4].innerHTML = '33% OFF any 6 pack Budweiser or Bud Light.';

//19. For the Pug, change the contents for each element to the following:
//div.brand = Any Dog Breeder
//div.item =  Baby Puggy
//div.price = Priceless
// button.discount = No Discounts. This cutie is worth every penny!

getBrands[5].innerHTML = 'Any Dog Breeder';
getItems[5].innerHTML = 'Baby Puggy';
getPrices[5].innerHTML = 'Priceless';
getDiscounts[5].innerHTML = 'No Discounts. This cutie is worth every penny!';

//Final Boss 
//Create your own product for the last three sections.

// Brisk
const getBriskBlock = getClassBlock1[3];
const getBriskImage = document.getElementsByTagName ( 'img' )[10];
getBriskImage.src = 'https://www.drinkbrisk.com/images/default-source/default-album/brisk-homepage_bottle-set-521x580.png?Status=Master&sfvrsn=390cf796_2';
getBrands[6].innerHTML = 'Brisk';
getItems[6].innerHTML = '1/2L Bottle of Brisk';
getPrices[6].innerHTML = '$2.99';
getDiscounts[6].innerHTML = 'Buy 2 get one FREE!';

// Gaming Chair
const getChairBlock = getClassBlock2[3];
const getChairImage = document.getElementsByTagName ( 'img' )[11];
getChairImage.src = 'https://i.ytimg.com/vi/8BtMhv_yDsM/maxresdefault.jpg';

const chairBrand = document.createElement ( 'div' );
chairBrand.className = 'brand';
chairBrand.innerHTML = 'DXRacer';
getChairBlock.appendChild ( chairBrand );

const chairItem = document.createElement ( 'div' );
chairItem.className = 'item';
chairItem.innerHTML = 'Pewdiepie Gaming Chair';
getChairBlock.appendChild ( chairItem );

const chairPrice = document.createElement ( 'div' );
chairPrice.className = 'price';
chairPrice.innerHTML = '$399.99';
getChairBlock.appendChild ( chairPrice );

const chairDiscount = document.createElement ( 'button' );
chairDiscount.className = 'discount';
chairDiscount.innerHTML = 'but can you do this?';
getChairBlock.appendChild ( chairDiscount );

// RGB Keyboard
const getKeyboardBlock = getClassBlock3[3];
const getKeyboardImage = document.getElementsByTagName ( 'img' )[12];
getKeyboardImage.src = 'http://gearopen.com/wp-content/uploads/2018/09/opener2-695x463.jpg';

const keyboardBrand = document.createElement ( 'div' );
keyboardBrand.className = 'brand';
keyboardBrand.innerHTML = 'Corsair';
getKeyboardBlock.appendChild ( keyboardBrand );

const keyboardItem = document.createElement ( 'div' );
keyboardItem.className = 'item';
keyboardItem.innerHTML = 'Strafe RGB Mk2';
getKeyboardBlock.appendChild ( keyboardItem );

const keyboardPrice = document.createElement ( 'div' );
keyboardPrice.className = 'price';
keyboardPrice.innerHTML = '$164.99';
getKeyboardBlock.appendChild ( keyboardPrice );

const keyboardDiscount = document.createElement ( 'button' );
keyboardDiscount.className = 'discount';
keyboardDiscount.innerHTML = '30% OFF of your first purchase!';
getKeyboardBlock.appendChild ( keyboardDiscount );
