'use strict'; 
// Enables strict mode, enforcing safer JavaScript rules (e.g., prevents use of undeclared variables)

module.exports = class PhoneRegister {
    #register 
    // Private class field to store the phone register data
    // Only accessible inside the class

    constructor(data) {
        if (!data) {
            throw new Error('phone data missing'); 
            // Throws an error if no data is provided when creating a new PhoneRegister
        }
        this.#register = data; 
        // Stores the provided data in the private #register field
    }

    getTypes() {
        const foundTypes = []; 
        // Array to hold unique phone types found in the register

        for (const person of this.#register) { 
            // Loop over each person in the register
            for (const phone of person.phones) { 
                // Loop over each phone entry of the current person
                if (!foundTypes.includes(phone.type)) { 
                    // Check if this phone type is not already in foundTypes
                    foundTypes.push(phone.type); 
                    // Add the new phone type to foundTypes
                }
            }
        }

        return foundTypes; 
        // Return an array of all unique phone types in the register
    } //end of getTypes()

    getPersonsNumbersByType(firstname, lastname, type) {
        if (arguments.length < 3) {
            throw new Error('missing parameter'); 
            // Throws an error if any of the three required parameters is missing
        }

        const numbersFound = []; 
        // Array to hold phone numbers that match the criteria

        for (const person of this.#register) { 
            // Loop over each person in the register
            if (person.firstname === firstname && person.lastname === lastname) { 
                // Check if this person's first and last name match the given ones
                for (const phone of person.phones) { 
                    // Loop over this person's phones
                    if (phone.type === type) { 
                        // Check if the phone type matches the requested type
                        numbersFound.push(phone.number); 
                        // Add the matching number to the array
                    }
                }
                return numbersFound; 
                // Return numbers immediately after finding the person
            }
        }

        return numbersFound; 
        // Return empty array if no matching person or numbers are found
    } //end of getPersonsNumbersByType

    getAllNumbersByType(type) {
        // Placeholder method to return all numbers of a given type for all persons
        // Currently empty, needs implementation
    } //end of getAllNumbersByType
}

/*#register → private storage for the data.

getTypes() → returns all unique phone types.

getPersonsNumbersByType() → returns numbers of a specific type for a specific person, with validation for missing parameters.

getAllNumbersByType() → declared but not yet implemented.

Error handling is done for missing data or missing arguments.*/