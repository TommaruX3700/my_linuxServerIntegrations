#
# CERTIFICATION REMOVAL TOOL
#      
#      Author: 
#          Tommaso Maruzzo
#
#      Description:
#          This tool is designed to work inside other scripts by passing a list of strings to it.
#
#       Example usage in ".bat" files:
#       ```
#           set test_to_del="CN=%nameSSL%","CN=%nameCA%"
#           powershell -ExecutionPolicy Bypass -File %~dp0Certificate_Remover_utility.ps1 -CommonNames %test_to_del%
#       ```
#      
#      Requirements:
#          - Execute this application with administrator priviladges.
#
param (
    [string[]]$CommonNames
)

function Remove-Certificate {
    param (
        [string]$StoreName,
        [string]$CommonName
    )

    $store = New-Object System.Security.Cryptography.X509Certificates.X509Store($StoreName, "LocalMachine")
    $store.Open("ReadWrite")

    $certsToRemove = $store.Certificates | Where-Object { $_.Subject -like "*$CommonName*" }

    foreach ($cert in $certsToRemove) {
        $store.Remove($cert)
        Write-Host "Removed $CommonName from $StoreName store."
    }

    $store.Close()
}

foreach ($cn in $CommonNames) {
    Remove-Certificate -StoreName "My" -CommonName $cn
    Remove-Certificate -StoreName "Root" -CommonName $cn
}