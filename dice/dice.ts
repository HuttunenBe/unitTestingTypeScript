'use strict';

export default class Dice {
    #upperBound: number; // max it can roll
    #dotCount: number; // current value 

    constructor(uBound: number = 6) { // default 6

        if (!Number.isInteger(uBound)) {
            throw new Error('upper bound must be an integer');
        } // make sure its integer 

        if (uBound < 2) {
            throw new Error('upper bound too small');
        } // uBound atleast 2 

        if (uBound > 20) {
            throw new Error('upper bound too big');
        } // uBound no more than 20

        this.#upperBound = uBound; // store max value 
        this.#dotCount = 0; // initialize to now thrown yet 
    }

    get minimumValue(): number {
        return 1;
    } // min value of dice 

    get maximumValue(): number {
        return this.#upperBound;
    } // max value of dice 

    get dots(): number {
        return this.#dotCount;
    } // current number

    roll(): void {
        this.#dotCount = Math.floor(Math.random() * this.#upperBound) + 1;
    } // generate random number. void -> signal that returns no value 

    toString(): string {
        return this.#dotCount === 0 ? 'not rolled yet' : `${this.#dotCount}`;
    } // return string and check conditional 
}
