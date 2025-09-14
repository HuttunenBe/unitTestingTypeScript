'use strict';

const Dice = require('../dice'); // import from parent directory 

const testUpperBounds = new Array(19).fill(2).map((value, ind) => [value + ind]);
// create array 

describe('tests for the constructor', ()=>{

    describe('a dice with no upper bound given',()=>{
        const dice = new Dice(); // create dice with default upperbound 6

        test('minimumValue is 1', ()=>{
            expect(dice.minimumValue).toBe(1);
        }); // check minimum value


        test('maximumValue is 6', ()=>{
            expect(dice.maximumValue).toBe(6);
        }); // check upper bound is 6 


        test('dots is 0', ()=>{
            expect(dice.dots).toBe(0);
        }); // check dice not rolled yet

        test('state of dice ok', ()=>{
            expect(dice.minimumValue).toBe(1);
            expect(dice.maximumValue).toBe(6);
            expect(dice.dots).toBe(0);
        }); // check all gives the correct value 
    });

    describe('Test a dice with upper bounds 2-20', ()=>{
        const testValues = new Array(19).fill(2).map((value, ind) => value + ind);
        testValues.forEach(ubound=>{ 
            describe(`test ubound ${ubound}`,()=>{
                const dice = new Dice(ubound);
// create dice with spesific upperbound

                test('minimum value is 1', () => {
                    expect(dice.minimumValue).toBe(1);
                });
                test(`maximum value is ${ubound}`, () => {
                    expect(dice.maximumValue).toBe(ubound);
                });
                test('dots is 0', () => {
                    expect(dice.dots).toBe(0);
                });
            });
        })
    });

    describe('Test a dice with upper bounds 2-20 testEach', ()=>{
        test.each(testUpperBounds)('test upper bound %s', ubound=>{
            const dice = new Dice(ubound);
            expect(dice.minimumValue).toBe(1);
            expect(dice.maximumValue).toBe(ubound);
            expect(dice.dots).toBe(0);
        }) // same as above
    });

    describe('Test the exceptions',()=>{
        const testValues=[
            ['a', 'upper bound must be an integer'],
            ['1', 'upper bound must be an integer'],
            [2.5, 'upper bound must be an integer'],
            [null, 'upper bound must be an integer'],
            [true, 'upper bound must be an integer'],
            [false, 'upper bound must be an integer'],
            [ 1, 'upper bound too small'],
            [ 0, 'upper bound too small'],
            [ -1, 'upper bound too small'],
            [ -12, 'upper bound too small'],
            [ 21, 'upper bound too big']
        ];
        test.each(testValues)('upper bound %s throws %s', (ub, text)=>{
            expect(()=>new Dice(ub)).toThrow(text);
        }); // check invalid upperbounds and throws error
    })

    describe('Test the exceptions with labels', () => {
        const testValues = [
            ["'a'", 'a', 'upper bound must be an integer'],
            ["'1'", '1', 'upper bound must be an integer'],
            [2.5, 2.5, 'upper bound must be an integer'],
            [null, null, 'upper bound must be an integer'],
            [true, true, 'upper bound must be an integer'],
            [false, false, 'upper bound must be an integer'],
            [1, 1, 'upper bound too small'],
            [0, 0, 'upper bound too small'],
            [-1, -1, 'upper bound too small'],
            [-12, -12, 'upper bound too small'],
            [21, 21, 'upper bound too big']
        ];
        test.each(testValues)('upper bound %s throws an exception', (label, ub, text) => {
            expect(() => new Dice(ub)).toThrow(text);
        }); // same as above with different syntax
    });
});

describe('Testing the roll', ()=>{ // testing roll()
    describe('Create a dice with no upper bound given',()=>{
        const dice=new Dice();

        test('when rolled', ()=>{
            dice.roll();
            expect(dice.dots).toBeGreaterThanOrEqual(1);
            expect(dice.dots).toBeLessThanOrEqual(6);
        }); // roll and check that within 1-6
    });

    // separate roll tests
    describe('Create a dice with no upper bound given separate tests', () => {
        const dice = new Dice();
        dice.roll();
        test('dots>=1', () => {
            expect(dice.dots).toBeGreaterThanOrEqual(1);
        });
        test('dots<=6', ()=>{
            expect(dice.dots).toBeLessThanOrEqual(6);
        });
    });


    describe('test roll with a dice with upperBounds 2...20', ()=>{
        test.each(testUpperBounds)('test upper bound %s', ub=>{
            const dice = new Dice(ub);
            dice.roll();
            expect(dice.dots).toBeGreaterThanOrEqual(1);
            expect(dice.dots).toBeLessThanOrEqual(ub);
        }); // check dice roll for each upperbound
    });
});

describe('Test the toString', ()=>{
    let dice;

    beforeEach(()=>{
        dice=new Dice();
    }); // create new dice before each test 

    test('Dice rolled', ()=>{
        dice.roll();
        expect(dice.toString()).toBe(`${dice.dots}`);
    }); // if rolled should return toString number of dots

    test('Dice not rolled', ()=>{
        expect(dice.toString()).toBe('not rolled yet');
    }); // should return not rolled yet 
});

describe('test the distributing of dots', ()=>{
    describe('create dice with no upper bound given', ()=>{
        const dice=new Dice();

        for(let i=0;i<20;i++){
            test('dots in right interval', ()=>{
                dice.roll();
                expect(dice.dots).toBeGreaterThanOrEqual(1);
                expect(dice.dots).toBeLessThanOrEqual(6);
            });
        } // roll 20 times each roll should be within 1-6

        const dotCounts=[]
        test('dot distribution ok', ()=>{
            for(let i=0; i<60;i++){
                dice.roll();
                dotCounts.push(dice.dots);
            }
            expect(new Set(dotCounts).size).toBe(6);
        }) // roll 60 times and check all roll values appear atleast once
    })

});


