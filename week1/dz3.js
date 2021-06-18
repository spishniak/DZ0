// * 4. Write function, that modify first argument to example output with delay 2 seconds
//  * 
//  * example:
//  * yourFuncName({ a: 1, b: 2}, (data) => { console.log(data) }); output: { a: 2, b: 3 }
//  * HINT: read about callbacks





const object_1 = {
    a: 5,
    b: 2,
}

function simpleSolutionFn() {
    object_1.a += 1
    object_1.b += 1
    console.log(object_1)
}

setTimeout(simpleSolutionFn, 2000);

const object_2 = {
    a: 5,
    b: 2,
};

(async (obj) => {
    await new Promise((resolve, reject) => {
        setTimeout(() => {
            obj.a += 1
            obj.b += 1
            console.log(obj)
            resolve()
        }, 2000)
    })
})(object_2)


