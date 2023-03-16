console.log(process.env)

var spawn = require("child_process").spawn,child;
child = spawn("pwsh",[process.env.GITHUB_ACTION +"/testps.ps1"]);
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
