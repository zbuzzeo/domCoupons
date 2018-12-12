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

discount1.innerHTML = 'Free fries with purchase!'

// 6. Create a div element with the id of 'item2' and give it a content of Hendrick's Gin. Append this element to William Grand & Sons div.

var ginBox = document.createElement('div');
ginBox.id = 'item2';
ginBox.innerHTML = "Hendrick's Gin";
brand2.appendChild(ginBox)

// 7. Create a div element with the id of 'price2' and give it a content of $34.99. Append this element to the Hendrick's Gin div.

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
