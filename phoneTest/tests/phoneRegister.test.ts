'use strict'; 
// Enables strict mode for safer JavaScript

const PhoneRegister = require('../phoneRegister'); 
// Import the PhoneRegister class

const defaultData = require('../phones.json'); 
// Import default phone register data from JSON file

// ---------------------
// Testing constructor
// ---------------------
describe('Testing constructor', () => {
    test('Test 1: missing parameter throw an exception', () => {
        expect(() => new PhoneRegister()).toThrow('phone data missing'); 
        // Checks that creating a PhoneRegister without data throws the correct error
    });
}); //end of Testing constructor 

// ---------------------
// Testing getTypes()
// ---------------------
describe('Testing getTypes', () => {

    test('Test 1: get types from the default data', () => {
        const register = new PhoneRegister(defaultData);
        expect(register.getTypes()).toEqual(["home", "work", "mobile"]); 
        // Checks that getTypes returns all unique types from default data
    });

    test('Test 1: get types from the default data V2', () => {
        const register = new PhoneRegister(defaultData);
        const expectedResult = ["home", "work", "mobile"];
        expect(register.getTypes()).toEqual(expectedResult); 
        // Same as previous test, using an intermediate variable
    });

    test('Test 2: No persons', () => {
        const register = new PhoneRegister([]);
        expect(register.getTypes()).toEqual([]); 
        // If register is empty, getTypes should return an empty array
    });

    test('test 3. persons have no phones', () => {
        const testData = [
            { "firstname": "Leila", "lastname": "Hökki", "phones": [] },
            { "firstname": "Matt", "lastname": "River", "phones": [] }
        ];
        const register = new PhoneRegister(testData);
        expect(register.getTypes()).toEqual([]); 
        // If persons exist but have no phones, getTypes should return empty array
    });

    test('test 4: only work numbers', () => {
        const testData = [
            { "firstname": "Leila", "lastname": "Hökki", "phones": [
                { "type": "work", "number": "987654321" },
                { "type": "work", "number": "05040302" }
            ]},
            { "firstname": "Matt", "lastname": "River", "phones": [
                { "type": "work", "number": "2468159" }
            ]}
        ];
        const register = new PhoneRegister(testData);
        expect(register.getTypes()).toEqual(["work"]); 
        // Only 'work' type exists, so getTypes should return ["work"]
    });

    test('Test 5. testing type as empty string', () => {
        const testData = [
            { "firstname": "Leila", "lastname": "Hökki", "phones": [
                { "type": "home", "number": "12345678" },
                { "type": "work", "number": "987654321" },
                { "type": "work", "number": "05040302" }
            ]},
            { "firstname": "Matt", "lastname": "River", "phones": [
                { "type": "home", "number": "56743290" },
                { "type": "mobile", "number": "0409812345" },
                { "type": "", "number": "2468159" }
            ]}
        ];
        const register = new PhoneRegister(testData);
        expect(register.getTypes()).toEqual(["home", "work", "mobile", ""]); 
        // Includes empty string type as well
    });

    test('test 6: All types are empty strings', () => {
        const testData = [
            { "firstname": "Leila", "lastname": "Hökki", "phones": [
                { "type": "", "number": "12345678" },
                { "type": "", "number": "987654321" },
                { "type": "", "number": "05040302" }
            ]},
            { "firstname": "Matt", "lastname": "River", "phones": [
                { "type": "", "number": "56743290" },
                { "type": "", "number": "0409812345" },
                { "type": "", "number": "2468159" }
            ]}
        ];
        const register = new PhoneRegister(testData);
        expect(register.getTypes()).toEqual([""]); 
        // If all phone types are empty strings, getTypes returns [""] only
    });
}); //end of Testing getTypes

// ---------------------
// Testing getPersonsNumbersByType()
// ---------------------
describe('Testing getPersonsNumbersByType', () => {

    describe('Testing with default data', () => {
        const register = new PhoneRegister(defaultData);

        test('Test 1: Leila Hökki and work', () => {
            const result = register.getPersonsNumbersByType('Leila', 'Hökki', 'work');
            expect(result).toEqual(["987654321", "05040302"]); 
            // Checks correct work numbers for Leila Hökki
        });

        test('Test 1 v2: Leila Hökki and work', () => {
            const result = register.getPersonsNumbersByType('Leila', 'Hökki', 'work');
            const expectedResult = ["987654321", "05040302"];
            expect(result).toEqual(expectedResult); 
            // Same test, just using variable
        });

        test('Test 1 v3: Leila Hökki and work', () => {
            expect(register.getPersonsNumbersByType('Leila', 'Hökki', 'work'))
                .toEqual(["987654321", "05040302"]); 
            // Inline version of same test
        });

        test('Test 2: Matt River and mobile', () => {
            const result = register.getPersonsNumbersByType('Matt','River','mobile');
            const expectedResult = ["0409812345"];
            expect(result).toEqual(expectedResult); 
            // Checks correct mobile number for Matt River
        });

        describe('Tests 1-3', () => {
            const testData = [
                ['Leila', 'Hökki',  'work',  ["987654321", "05040302"]],
                ['Matt',  'River', 'mobile', ["0409812345"]],
                ['Matt',  'x',     'mobile',  []],
                ['x',     'River', 'mobile',  []],
                ['Matt',  'River',  'x',      []]
            ];

            test.each(testData)('%s, %s, %s returns %s', (fn, ln, type, result) => {
                expect(register.getPersonsNumbersByType(fn, ln, type)).toEqual(result); 
                // Parameterized tests for multiple scenarios
            });
        }); //end of describe Tests 1-3

        describe('Test 4: parameter missing', () => {
            test('4.1: One parameter missing (type)', () => {
                expect(() => register.getPersonsNumbersByType('Matt', 'River'))
                    .toThrow('missing parameter'); 
                // Throws error if type is missing
            });

            test('4.2: Two parameters missing (lastname and type)', () => {
                expect(() => register.getPersonsNumbersByType('Matt'))
                    .toThrow('missing parameter'); 
                // Throws error if lastname and type are missing
            });

            test('4.3: All parameters missing', () => {
                expect(() => register.getPersonsNumbersByType())
                    .toThrow('missing parameter'); 
                // Throws error if all parameters are missing
            });
        }); //end of Test 4
    }); //end of Testing with default data

    describe('Testing with different test data', () => {
        const testData = [
            { "firstname": "Leila", "lastname": "Hökki", "phones": [
                { "type": "home", "number": "12345678" },
                { "type": "work", "number": "987654321" },
                { "type": "work", "number": "05040302" }
            ]},
            { "firstname": "Matt", "lastname": "River", "phones": [
                { "type": "home", "number": "56743290" },
                { "type": "mobile", "number": "0409812345" },
                { "type": "", "number": "2468159" }
            ]}
        ];
        const register = new PhoneRegister(testData);

        test('Test 5: testing empty string as type', () => {
            const result = register.getPersonsNumbersByType('Matt', 'River', '');
            expect(result).toEqual(["2468159"]); 
            // Checks phone numbers with empty string type
        });
    }); //end of Testing with different test data
}); //end of Testing getPersonsNumbersByType

// ---------------------
// Testing getAllNumbersByType()
// ---------------------
describe('Testing getAllNumbersByType', () => {
    const register = new PhoneRegister(defaultData);

    test('Test 1: type mobile', () => {
        const expectedResult = [
            { "firstname": "Matt", "lastname": "River", 
              "number": { "type": "mobile", "tel": "0409812345" } }
        ];
        expect(register.getAllNumbersByType('mobile')).toEqual(expectedResult); 
        // Checks all mobile numbers for all persons
    });

    test('Test 2: type work', () => {
        const expectedResult = [
            { "firstname": "Leila", "lastname": "Hökki", "number": { "type": "work", "tel": "987654321" } },
            { "firstname": "Leila", "lastname": "Hökki", "number": { "type": "work", "tel": "05040302" } },
            { "firstname": "Matt", "lastname": "River", "number": { "type": "work", "tel": "2468159" } }
        ];
        expect(register.getAllNumbersByType('work')).toEqual(expectedResult); 
        // Checks all work numbers for all persons
    });

    test('Test 3: type x', () => {
        expect(register.getAllNumbersByType('x')).toEqual([]); 
        // If type does not exist, returns empty array
    });

    test('Test 4: missing parameter', () => {
        expect(() => register.getAllNumbersByType()).toThrow('missing parameter'); 
        // Throws error if no type parameter is given
    });
}); // end of Testing getAllNumbersByType
