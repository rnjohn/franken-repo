function delayRequest(string) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(string), 3000);
    })
}

async function testing() {
    await Promise.all([
        delayRequest('test1'),
        delayRequest('test2'),
        delayRequest('test3'),
        delayRequest('test4'),
        delayRequest('test5'),
    ]).then(([value1, value2, value3, value4, value5]) => {
        console.log(value1, value2, value3, value4, value5)
    });
    console.log('after Promise.all')
}

testing()

// testing how to handle promises concurrently (not actual parallelism)