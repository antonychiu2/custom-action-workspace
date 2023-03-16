console.log(process.env)
//process.env.GITHUB_ACTION_PATH = '/home/runner/work/_actions/antonychiu2/custom-action-workspace/main'
var GITHUB_ACTION_PATH = process.env.HOME+"/"+"/work/_actions/"+process.env.GITHUB_ACTION_REPOSITORY+"/"+process.env.GITHUB_ACTION_REF;

var spawn = require("child_process").spawn,child;
child = spawn("pwsh",[GITHUB_ACTION_PATH+"/testps.ps1"]);
child.stdout.on("data",function(data){
    process.stdout.write("" + data);
});
child.stderr.on("data",function(data){
    process.stdout.write("Powershell Errors: " + data);
    process.exit(1);
});
child.on("exit",function(){
    process.stdout.write("Powershell Script finished");
});
child.stdin.end(); //end input
