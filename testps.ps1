dir env:

$env:TESTENVVAR = 'value of a test env var'

for($i=0;$i -le 60;$i++){
    Write-Host "This is a sample PS script: $i"
    Start-Sleep -Seconds 1

    #Write-Error "This is a powershell error"
    #exit 1
    
}