# Test cases for the constructor

## **constructor(data)**

The data from phones.json (or another test json file) is passed as a parameter. If the parameter is missing, throws an exception `'phone data missing'`.

The data is stored in to the object.

### Test 1: missing parameter throw an exception

```js
new PhoneRegister();
```

expect:

this will throw an exception `'phone data missing'`

# Test cases for the getTypes

## **getTypes()**

returns all phone types in an array. The type is added to the result array only once.

if there are no phones or no persons, an empty array [] is returned. Type may be an empty string.

For example:

```json
["home","work","mobile"]
```

### Test 1: get types from the default data phones.json

Create register with default data
```js
const register=new PhoneRegister(defaultData);
...register.getTypes();
```
Returns

```json
["home","work","mobile"]
```

### Test 2: No persons

create register with an empty array []

```js
const register=new PhoneRegister([]);
...register.getTypes();
```

returns []

## test 3. persons have no phones

Test data:
```json
[
    {
        "firstname":"Leila",
        "lastname":"Hökki",
        "phones":[]
    },
    {
        "firstname":"Matt",
        "lastname":"River",
        "phones":[]
    }
]

```

create register with the testdata

```js
const register=new PhoneRegister(testData);
...register.getTypes();
```

returns []

### Test 4. only work numbers

Test data:
```json
[
    {
        "firstname":"Leila",
        "lastname":"Hökki",
        "phones":[
            {"type":"work", "number":"987654321"},
            {"type":"work", "number":"05040302"}
        ]
    },
    {
        "firstname":"Matt",
        "lastname":"River",
        "phones":[
            {"type":"work", "number":"2468159"}
        ]
    }
]
```
create register with the testdata

```js
const register=new PhoneRegister(testData);
...register.getTypes();
```

returns 
```json
["work"]
```

### Test 5. testing type as empty string

test data:

```json
[
    {
        "firstname":"Leila",
        "lastname":"Hökki",
        "phones":[
            {"type":"home", "number":"12345678"},
            {"type":"work", "number":"987654321"},
            {"type":"work", "number":"05040302"}
        ]
    },
    {
        "firstname":"Matt",
        "lastname":"River",
        "phones":[
            {"type":"home", "number":"56743290"},
            {"type":"mobile", "number":"0409812345"},
            {"type":"", "number":"2468159"}
        ]
    }
]
```

returns
```json
["home","work","mobile",""]
```

### test 6: All types are empty strings

test data:
```json
[
    {
        "firstname":"Leila",
        "lastname":"Hökki",
        "phones":[
            {"type":"", "number":"12345678"},
            {"type":"", "number":"987654321"},
            {"type":"", "number":"05040302"}
        ]
    },
    {
        "firstname":"Matt",
        "lastname":"River",
        "phones":[
            {"type":"", "number":"56743290"},
            {"type":"", "number":"0409812345"},
            {"type":"", "number":"2468159"}
        ]
    }
]
```
returns
```json
[""]
```

# Test cases for getPersonsNumbersByType

### **getPersonsNumbersByType(firstname, lastname, type)**

Method returns an array of phone numbers of given type belonging to a person with given fistname and lastname.

For example Leila Hökki and work returns
```json
["987654321","05040302"]
```

and Matt River mobile returns
["0409812345"]

- if no person with given name is found, an empty array [] is returned
- if no number with given type is found, an empty array [] is returned
- if at least one parameter is missing, an exception `'missing parameter'` is thrown.

## Test 1: Leila Hökki and work

Test uses the default data

```js
const register = new PhoneRegister(defaultData);
const result= register.getPersonsNumbersByType('Leila','Hökki','work');
```

expect :
```json
["987654321","05040302"]
```

## Test 2: Matt River and mobile
Test with default data

returns
```json
["0409812345"]
```

## Test 3: Wrong name or type

Test with default data

### 3.1 firstname Matt, lastname x, type mobile
### 3.2 firstname x, lastname River, type mobile
### 3.3 firstname Matt, lastname River, type x
```
 3.4 firstname x, lastname x, type mobile (tested in earlier tests)
 3.4 firstname x, lastname x, type y (tested in earlier tests)
 ```

 returns []

 ## Test 4: parameter missing
 Test with default data

 ### 4.1: One parameter missing (type)
 call with 'Matt' and 'River'

 ### 4.2: Two parameters are missing (lastname and type)
 call with 'Matt'

 ### 4.3: All parameters are missing
 call with an empty parameterlist

 expect to throw 'missing parameter'

 ## Test 5: testing empty string as type

test data:

```json
[
    {
        "firstname":"Leila",
        "lastname":"Hökki",
        "phones":[
            {"type":"home", "number":"12345678"},
            {"type":"work", "number":"987654321"},
            {"type":"work", "number":"05040302"}
        ]
    },
    {
        "firstname":"Matt",
        "lastname":"River",
        "phones":[
            {"type":"home", "number":"56743290"},
            {"type":"mobile", "number":"0409812345"},
            {"type":"", "number":"2468159"}
        ]
    }
]
```

call with parameters 'Matt','River' and ""

returns 
```json
["2468159"]
```

# Test cases for getAllNumbersByType

### **getAllNumbersByType(type)**

Returns an array of objects consinsting of names and numbers of given type. 
- If no number of given type is found, an empty array [] is returned.
- if the type is missing, throws an exception `'missing parameter'`
- If a person have multiple numbers of given type, each of them will be in it's own object.

The format of the returned object is:
```json
{"firstname":"", "lastname":"","number":{"type":"", "tel":""}}
```

Example: type work

```json
[
  {"firstname":"Leila", "lastname":"Hökki",
            "number":{"type":"work", "tel":"987654321"}}, 
  {"firstname":"Leila", "lastname":"Hökki",
            "number":{"type":"work", "tel":"05040302"}},
  {"firstname":"Matt", "lastname":"River","number":{"type":"work", "tel":"2468159"}}
]
```

All test are done with default data

## Test 1: type mobile

returns
```json
[{"firstname":"Matt", "lastname":"River","number":{"type":"mobile", "tel":"0409812345"}}]
```

## Test 2: type work

```json
[
  {"firstname":"Leila", "lastname":"Hökki",
            "number":{"type":"work", "tel":"987654321"}}, 
  {"firstname":"Leila", "lastname":"Hökki",
            "number":{"type":"work", "tel":"05040302"}},
  {"firstname":"Matt", "lastname":"River","number":{"type":"work", "tel":"2468159"}}
]
```

## Test 3: type x
returns []

## Test 4: missing parameter
throws an exception 'missing parameter'

# Phone API

## data

Data will be in a json file. A person can be in the data array only once. Names are unique (firstname-lastname combination). Phone number is unique and can be only once in the json file. We also assume that the json file is valid and no field is missing. The number can't be an empty string, and the type or number may not be null or undefined.

Type may be an empty string.

### phones.json (default data)
```json
[
    {
        "firstname":"Leila",
        "lastname":"Hökki",
        "phones":[
            {"type":"home", "number":"12345678"},
            {"type":"work", "number":"987654321"},
            {"type":"work", "number":"05040302"}
        ]
    },
    {
        "firstname":"Matt",
        "lastname":"River",
        "phones":[
            {"type":"home", "number":"56743290"},
            {"type":"mobile", "number":"0409812345"},
            {"type":"work", "number":"2468159"}
        ]
    }
]
```

## Class PhoneRegister

### **constructor(data)**

The data from phones.json (or another test json file) is passed as a parameter. If the parameter is missing, throws an exception `'phone data missing'`.

The data is stored in to the object.

## Methods

### **getTypes()**

returns all phone types in an array. The type is added to the result array only once.

if there are no phones or no persons, an empty array [] is returned. Type may be an empty string.

For example:

```json
["home","work","mobile"]
```

### **getPersonsNumbersByType(firstname, lastname, type)**

Method returns an array of phone numbers of given type belonging to a person with given fistname and lastname.

For example Leila Hökki and work returns
```json
["987654321","05040302"]
```

and Matt River mobile returns
["0409812345"]

- if no person with given name is found, an empty array [] is returned
- if no number with given type is found, an empty array [] is returned
- if at least one parameter is missing, an exception `'missing parameter'` is thrown.

### **getAllNumbersByType(type)**

Returns an array of objects consinsting of names and numbers of given type. 
- If no number of given type is found, an empty array [] is returned.
- if the type is missing, throws an exception `'missing parameter'`
- If a person have multiple numbers of given type, each of them will be in it's own object.

The format of the returned object is:
```json
{"firstname":"", "lastname":"","number":{"type":"", "tel":""}}
```

Example: type work

```json
[
  {"firstname":"Leila", "lastname":"Hökki",
            "number":{"type":"work", "tel":"987654321"}}, 
  {"firstname":"Leila", "lastname":"Hökki",
            "number":{"type":"work", "tel":"05040302"}},
  {"firstname":"Matt", "lastname":"River","number":{"type":"work", "tel":"2468159"}}
]
```

### **getAllNumbers()**

Returns all phone numbers in an array, each as an object of form:

```json
{"firstname":"", "lastname":"", "phones":[]}
```

The format for a phone is:

```json
{"type":"", "number":""}
```
- If the person doesn't have a phone (the phones array is empty), then the person is not added to the result.
- If all persons are missing, an empty array is returned.

### **getName(number)**

Returns the name of the owner of given number. Returns an object of format:

```json
{"firstname":"", "lastname":""}
```
- if the number is not found, returns `null`
- if parameter is missing, returns `null`