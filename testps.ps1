dir env:

$env:TESTENVVAR = 'value of a test env var'

for($i=0;$i -le 5;$i++){
    Write-Host "This is a sample PS script: $i"
    Start-Sleep -Seconds 1

    #Write-Error "This is a powershell error"
    #exit 1
    
}

$severity = @{
    Critical = 1
    High = 2
}

$env:TESTVAR = $severity | Format-Table | Out-String