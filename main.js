console.log('This is the main workflow');

function sleep(ms){
    return new Promise((resolve) => {
        setTimeout(resolve,ms);
    });
}

for(let i=0;i<60;i++){
    sleep(1000);
    console.log('${i} minute has passed.');
}
