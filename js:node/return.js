function foo1() {
    return {
        bar: 'hello'
    };
}

function foo2() {
    return
    {
        bar: 'hello'
    };
}

console.log(foo1());
console.log(foo2());

// these two won't return the same because on foo2 the engine will put a semicolon after return, returning nothing.