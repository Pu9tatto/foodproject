const req = new Promise((resolve, reject) => {

    resolve();
});

req.then(() => {
    return new Promise((resolve, reject) => {

    });
}).then(() => {

}).catch(() => {

}).finally(() => {

});

const test = time => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=> resolve(),time);
    }); 
};

Promise.all([test(10000), test(20000)]).then(()=>{
    console.log('All');
});

Promise.race([test(10000), test(20000)]).then(()=>{
    console.log('First');
});