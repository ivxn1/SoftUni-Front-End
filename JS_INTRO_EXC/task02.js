function calcPrice(count, type, day) {
    let pricePerPerson = 0;
  let price = 0;
  if (type == "Students") {
    if (day == "Friday") {
            pricePerPerson = 8.45;
    } else if (day == "Saturday") {
            pricePerPerson =  9.8;
    } else if (day == "Sunday") {
            pricePerPerson =  10.46;
    }

  } else if (type == "Business") {
    if (day == "Friday") {
      pricePerPerson = 10.9

    } else if (day == "Saturday") {
            pricePerPerson = 15.6;

    } else if (day == "Sunday") {
            pricePerPerson =  16;

    }
  }
  if (type == "Regular") {
    if (day == "Friday") {
            pricePerPerson =  15;
    } else if (day == "Saturday") {
            pricePerPerson =  20;
    } else if (day == "Sunday") {
            pricePerPerson =  22.5;
    }
  }

  price = count * pricePerPerson;

  if (type == "Students") {
    if (count >= 30) {
      price *= 0.85;
    }
  } else if (type == "Business") {
    if (count >= 100) {
      price -= 10 * pricePerPerson;
    }
  } else if (type == "Regular") {
    if (count => 10) {
        if (count <= 20)  {
      price -= 0.05 * price;
    }
  }
}
console.log(`Total price: ${price.toFixed(2)}`);
}

calcPrice(30, "Students", "Sunday");
calcPrice(40, "Regular", "Saturday");
