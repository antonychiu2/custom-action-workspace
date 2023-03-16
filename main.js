console.log('This is the main workflow');



for(var i=0;i<60;i++){
    
    task(i);
}

function task(i) {
    setTimeout(function() {
        console.log(i);
    }, 1000 * i);
}