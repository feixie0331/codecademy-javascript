// @ts-check
// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]
const valid6 = [4, 5, 3, 9, 6, 8, 9, 8, 8, 7, 7, 0, 5, 7, 9, 8]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]


// Add your functions below:
const validateCred = (array) => {
    let validation = new Array(array.length);
    validation[(validation.length) - 1] = array[(validation.length) - 1];
    for (let i = array.length - 1; i >= 0; i--) {
        if ((array.length - 1 - i) % 2 != 0) {
            if (array[i] * 2 > 9) {
                validation[i] = (array[i] * 2 - 9);
            } else {
                validation[i] = (array[i] * 2);
            };
        } else {
            validation[i] = (array[i]);
        };

    };
    //validation.push(array[(array.length - 1)]);
    let sum = 0;
    for (const digit of validation) {
        sum = sum + digit;
    };
    //console.log(sum);
    if (sum % 10 === 0) {
        return true;
    } else {
        return false;
    };


}

const findInvalidCards = (array) => {
    const invalidCards = array.filter(card => {
        if (!validateCred(card)) {
            return card;
        }
    });
    return invalidCards;

}

const idInvalidCardCompanies = (array) => {
    const firstDigit = [];
    const companies = [];
    for (const invalid of array) {
        firstDigit.push(invalid[0]);
    };
    
    //console.log(firstDigit);
    if (firstDigit.includes(3)) {
        companies.push('Amex(American Express');
    };
    if (firstDigit.includes(4)) {
        companies.push('Visa');
    };
    if (firstDigit.includes(5)) {
        companies.push('Master');
    };
    if (firstDigit.includes(6)) {
        companies.push('Discover');
    };
    if(firstDigit.some(element => (element<3 || element>6))) {
        companies.push('Company not found');
    };

}

/*console.log('VALID:')
console.log(valid4);
console.log(validateCred(valid4));
console.log(valid5);
console.log(validateCred(valid5));
console.log(valid3);
console.log(validateCred(valid3));
console.log(valid6);
console.log(validateCred(valid6));
console.log('invalid:')
console.log(invalid3);
console.log(validateCred(invalid3));
console.log(invalid4);
console.log(validateCred(invalid4));
console.log(invalid5);
console.log(validateCred(invalid5));*/
//console.log(findInvalidCards(batch));
const invalidC = [
    [
        4, 5, 3, 2, 7, 7,
        8, 7, 7, 1, 0, 9,
        1, 7, 9, 5
    ],
    [
        5, 7, 9, 5, 5, 9,
        3, 3, 9, 2, 1, 3,
        4, 6, 4, 3
    ],
    [
        3, 7, 5, 7, 9, 6,
        0, 8, 4, 4, 5, 9,
        9, 1, 4
    ],
    [
        6, 0, 1, 1, 1, 2,
        7, 9, 6, 1, 7, 7,
        7, 9, 3, 5
    ],
    [
        5, 3, 8, 2, 0, 1,
        9, 7, 7, 2, 8, 8,
        3, 8, 5, 4
    ],
    [
        3, 4, 4, 8, 0, 1,
        9, 6, 8, 3, 0, 5,
        4, 1, 4
    ],
    [
        6, 0, 1, 1, 3, 7, 7,
        0, 2, 0, 9, 6, 2, 6,
        5, 6, 2, 0, 3
    ],
    [
        4, 9, 2, 9, 8, 7,
        7, 1, 6, 9, 2, 1,
        7, 0, 9, 3
    ]
]
const firstDigit = [
    4, 5, 3, 6,
    5, 0, 9, 4
  ];
const companies = [];

console.log(firstDigit);
if (firstDigit.includes(3)) {
    companies.push('Amex(American Express');
} else { companies.push('Not found')};
if (firstDigit.includes(4)) {
    companies.push('Visa');
};
if (firstDigit.includes(5)) {
    companies.push('Master');
};
if (firstDigit.includes(6)) {
    companies.push('Discover');
};

if(firstDigit.some(element => (element<3 || element>6))) {
    companies.push('Company not found');
}
/*
if (firstDigit.includes(1)) {
    companies.push('Company not found');
};
if (firstDigit.includes(2)) {
    companies.push('Company not found');
};
if (firstDigit.includes(7)) {
    companies.push('Company not found');
};
if (firstDigit.includes(8)) {
    companies.push('Company not found');
};
if (firstDigit.includes(9)) {
    companies.push('Company not found');
};
if (firstDigit.includes(0)) {
    companies.push('Company not found');
};*/
console.log(companies);







