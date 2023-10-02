const dynastyReign = [
    {"San Dynasty": "MXLI"},
    {"Viloria Dynasty": "MCCCIIII"},
    {"Tan Dynasty": "MCCCXCVIII"},
    {"Bon Dynasty": "MCDXLV"},
    {"Maiko Dynasty": "MDCLXIV"},
    {"Paul Dynasty": "MCMXLIX"},
    {"Andre Dynasty": "MMMXICX"}
];

longestdynasty(dynastyReign);

function longestdynasty(dynastyReign) {
    if(dynastyReign.length === 0) {
        return "No Data";
    } else {
        let longest = '';
        let maxReign = 0;
        let currentStartYear = 1000;
      
        dynastyReign.forEach((entry) => {
            const dynasty = Object.keys(entry)[0]; //store the dynasty name
            const romanYear = entry[dynasty]; //store the roman year of the dynasty
            const endYear = convertYear(romanYear); //convert the roman year to its numerical value

            if(endYear === "Invalid") {
                return; //if the end year of the dynasty is invalid do nothing
            } else {
                //compute the duration of the dynasty reign
                const reignDuration = endYear - currentStartYear + 1;
        
                //if reignDuration of the current dynasty is greater than the max reign value
                //store the reignDuration to be the maxReign value and longest will have the dysnasty name
                if (reignDuration > maxReign) {
                    maxReign = reignDuration;
                    longest = dynasty;
                }
          
                //update the starting year for the next dynasty
                currentStartYear = endYear + 1;
            }
        });
        
        //return the name of the longest dynasty reign or return invalid if all data are invalid
        console.log(longest || "Invalid");
    }
}

function convertYear (year) {
    const romanFormat = /^(?=[MDCLXVI])M*(C[MD]|D?C{0,3})(X[CL]|L?X{0,3})(I[XV]|V?I{0,3})$/;
    
    if (!romanFormat.test(year)) {
        return "Invalid"; //check for invalid characters and format
    } else {
        const romanNumerals = {
            I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000
        };
    
        //map the array to split its char and return the numerical values of each letter
        const values = year.split('').map(char => romanNumerals[char]);
    
        return values.reduce((acc, value, index, arr) => {
          const nextValue = arr[index + 1] || 0;
          return value < nextValue ? acc - value : acc + value;
        }, 0);
    }
}