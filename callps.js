const core =require('@actions/core');

console.log(process.env)
var PSFileToRun = "testps.ps1";
var GITHUB_ACTION_PATH = process.env.HOME+"/work/_actions/"+process.env.GITHUB_ACTION_REPOSITORY+"/"+process.env.GITHUB_ACTION_REF;
console.log('Constructed github action path: '+GITHUB_ACTION_PATH)

var spawnSync = require("child_process").spawn,child;
child = spawnSync("pwsh",[GITHUB_ACTION_PATH+"/"+PSFileToRun]);
child.stdout.on("data",function(data){
    process.stdout.write("" + data);

});
child.stderr.on("data",function(data){
    process.stdout.write("Powershell Errors: " + data);
    core.error("Errors: " + data);
    process.exit(1);
});
child.on("exit",function(){
    process.stdout.write("Powershell Script finished");

});
core.notice("This is a notice before stdin.end: "+process.env.REGULARVAR);
core.notice("This is a notice before stdin.end: "+process.env.TESTVAR);

console.log(process.env);

child.stdin.end(); //end input
