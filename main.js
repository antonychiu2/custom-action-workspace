const core =require('@actions/core');

console.log('This is the main workflow');

console.log(process.env)

for(var i=0;i<60;i++){
    
    task(i);
}

function task(i) {
    setTimeout(function() {
        console.log(i);
    }, 1000 * i);
}