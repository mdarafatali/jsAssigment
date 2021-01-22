



// kilometerToMeter

function kilometerToMeter(kiloMeter){
    var meter = (kiloMeter*1000);
    if (kiloMeter <= 0){   //unwanted input Condition
        console.log("input number should be greater than 0")
    }
    else{
        return meter;   //return the value to meter 
    }
}

var lengthConverter = kilometerToMeter(10);   //call kilometerToMeter Function
console.log(lengthConverter);







// budgetCalculator

var ghoriPrice = 50;
var phonePrice = 100;
var laptopPrice = 500;

function budgetCalculator(qtyOfGhori, qtyOfPhone, qtyOfLaptop ){
    var totalPriceOfGhori = (qtyOfGhori * ghoriPrice);
    var totalPriceOfPhone = (qtyOfPhone * phonePrice);
    var totalPriceOfLaptop = (qtyOfLaptop * laptopPrice);
    var totalAmount = (totalPriceOfGhori + totalPriceOfPhone + totalPriceOfLaptop); //Sum of all items

    if(qtyOfGhori < 0 || qtyOfPhone < 0 || qtyOfLaptop < 0){   //unwanted input condition
        console.log("Please input Valid Qty");
    }

    else{
        return totalAmount;   //Return total value of all items
    }                      
}

var totalBudget = budgetCalculator(1, 20, 30);   //Call totalBudget Function
console.log(totalBudget);






// hotelCost

var package1To10 = 100;
var package11To20 = 80;
var package21ToMore = 50;

function hotelCost(countDays){
    if (countDays <= 0){   //unwanted input condition
        console.log("Please input Valid number")
    }
    

    else if (countDays <= 10 && countDays > 0){   //equal or less than 10 days condition
        var totalPkg1Cost = package1To10 * countDays;
        return totalPkg1Cost;
    }

    else if (countDays <= 20 && countDays > 10 ){   //11 to 20 days condition
        var totalPkg2Cost =  (package11To20 * (countDays-10)) + (package1To10 * 10);
        return totalPkg2Cost;
    }

    else if (countDays >= 21){   //equal or more than 21 days condition
        var totalPkg3Cost = (package21ToMore * (countDays-20)) + (package1To10 * 10) + (package11To20*10);
        return totalPkg3Cost;
    }
}

var totalHotelCost = hotelCost(21);   //call hotelCost function
console.log(totalHotelCost);








// megaFriend 

function megaFriend(friendList){  
    var largestName = [0];
    for (var i = 0; i < friendList.length; i++){ 
        var result = friendList[i];
        
        if (result.length > largestName.length){ //largest Name condition
            largestName = result;
        }
    }
    return largestName;     //return largest Number
}

var friends = megaFriend(["Arafat", "Al Amin", "Hemel", "Syed Al Amin"]);   //call function
console.log(friends);