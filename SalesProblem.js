//function uses sort and map of to iterate
//through the array of object and generate the product with highest sales profit
function topProduct (productProfitArray) {
    if(productProfitArray.length === 0) {
        return "No Data";
    } else {
        let copyOfArray = [...productProfitArray]; //make a copy of the array

        //sort the array by their value from least to greatest then map its object keys
        //and store it in a variable
        const sortedProductKey = copyOfArray.sort((a, b) => 
                Object.values(a)[0] - Object.values(b)[0]).map(obj => Object.keys(obj)[0]);

        //display the last array value which has the greatest value
        console.log(sortedProductKey[sortedProductKey.length-1]);
    }
}

//function uses for.. of to iterate
//through the array of object and generate the product with lowest sales profit
function bottomProduct (productProfitArray) {
    if(productProfitArray.length === 0) {
        return "No Data";
    } else {
        //initialized first the minimum values for object key and object value
        let minProfitKey = Object.keys(productProfitArray[0])[0];
        let minProfitValue = Object.values(productProfitArray[0])[0];

        //loop through the array of object
        for (const obj of productProfitArray) {
            //if value is less than the initial minimum value
            //then store the value and key to the initial values
            if (Object.values(obj)[0] < minProfitValue) {
                minProfitValue = Object.values(obj)[0];
                minProfitKey = Object.keys(obj)[0];
            }
        }

        //display the minimum key base on its value
        console.log(minProfitKey);
    }
}

//function uses conventional for loop to iterate
//through the array of object and generate the product with sales profit closest to 0
function zeroProfitProduct (productProfitArray) {
    if(productProfitArray.length === 0) {
        return "No Data";
    } else {
        let closestKey;
        let closestValue = Infinity; //initialize using the largest value posible

        //iterate through the array to find the key with the value closest to zero
        for (let i = 0; i < arrObject.length; i++) {
            const obj = arrObject[i];
            const key = Object.keys(obj)[0];
            const value = Object.values(obj)[0];
            
            //check if the absolute value of the current value is closer to zero
            if (Math.abs(value) < Math.abs(closestValue)) {
                closestKey = key;
                closestValue = value;
            } else if (Math.abs(value) === Math.abs(closestValue) && value > closestValue) {
                //if there are two equally close values, choose the positive one
                closestKey = key;
                closestValue = value;
            }
        }

        console.log(closestKey);
    }
}