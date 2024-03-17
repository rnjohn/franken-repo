async function mockRequest() {
    const promise = await new Promise((resolve, reject) => {
        setTimeout(() => {resolve}, 3000);
    })

    console.log('after promise')

    return promise;
}

mockRequest();
console.log('after mockRequest')

// I had the doubt on why the keyword 'async' is async instead of 'sync' if it was making the code synchronous.
// It isn't making the code synchronous. Only what is inside the async function has synchronous behavior but the
// rest of the code is unnaffected.

// Discussion
// https://stackoverflow.com/questions/70048491/why-we-have-to-use-keyword-async-and-await-to-making-it-synchronus-in-node-when
// https://stackoverflow.com/questions/72799361/are-async-await-async-or-synchronous