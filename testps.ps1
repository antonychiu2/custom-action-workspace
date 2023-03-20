dir env:

$env:TESTENVVAR = 'value of a test env var'

for($i=0;$i -le 30;$i++){
    Write-Host "This is a sample PS script: $i"
    Start-Sleep -Seconds 1

    #Write-Error "This is a powershell error"
    #exit 1
    
}

$severity = @{
    Critical = 1
    High = 2
}

$env:TEST_VAR = $severity | Format-Table | Out-String
$env:TEST_REGULARVAR = 'regularvarvalue'