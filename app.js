// ## **Quick Question #1**

// What does the following code return?

new Set([1,1,2,2,3,4]); // {1,2,3,4}

// ## **Quick Question #2**

// What does the following code return?

[...new Set("referee")].join("") // 'ref'

// ## **Quick Questions #3**

// What does the Map ***m*** look like after running the following code?

let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false); 
// {Array(3) => true}
// {Array(3) => false}


const hasDuplicate = (arr) => new Set(arr).size === arr.length ? false : true;

hasDuplicate([1,3,2,1]) // true
hasDuplicate([1,5,-1,4]) // false





const vowelCount = (str) => {
    const vowels = 'aeiou';
    const m = new Map();
    for (let char of str){
        if (vowels.includes(char)){
            if (!m.has(char)){
                m.set(char, 1);
            } else {
                m.set(char, m.get(char)+1);
            };
        };
    };
    return m;
};

vowelCount('awesome') // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
vowelCount('Colt') // Map { 'o' => 1 }