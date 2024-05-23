@echo off
    ::
    :: REGISTRATION TOOL
    ::      
    ::      Author: 
    ::          Tommaso Maruzzo
    ::
    ::      Description:
    ::          This tool helps you to register application to signed certificates, to test their network functionalities.
    ::      
    ::      Requirements:
    ::          - Execute this application with administrator priviladges.
    ::
    echo -------------------------------------------------------------
    echo Use this Utility to bind certificates to apps.
    echo -------------------------------------------------------------
    :: Check if the script has admin rights
    NET SESSION >nul 2>&1
    if %errorLevel% neq 0 (
        echo Administrator permissions required. Exiting..
        exit /b
    )
    set name=Compuprint_Wrapper
    set nameCA=%name%CA
    set nameSSL=%name%SSL
    set privateKeyCA=%nameCA%.pvk
    set certificateCA=%nameCA%.cer
    set certificateSSL=%nameSSL%.cer
    set /p ip="Enter listener's IP: "
    set /p port="Enter port listening to: "
    set computerName=%COMPUTERNAME%
    set domainName=%USERDNSDOMAIN%
    set cn=%computerName%.%domainName%
    echo CN=%cn%
    for /f "tokens=*" %%i in ('powershell -command ^
                                "$computerName = '%computerName%';" ^
                                "$domainName = '%domainName%';" ^
                                "$getThumb = Get-ChildItem -path cert:\LocalMachine\My | where { $_.Subject -match 'CN=' + $nameSSL };" ^
                                "if ($getThumb) { $getThumb.thumbprint } else { Write-Host 'No matching certificate found' }"') do set thumbprint=%%i
    if %errorlevel% neq 0 (
        echo %fullDate% - Error occured! Terminating script..
        exit /b %errorlevel%
    )
    echo %fullDate% - Thumbprint found: %thumbprint%
    set /p appID="Enter application ID to bind to (with '{}'): "
    :: Register the application to the network certificate found
    netsh http add sslcert ipport=%ip%:%port% certhash=%thumbprint% appid=%appID%
    if %errorlevel% neq 0 (
        echo %fullDate% - Error occured! Terminating script..
        exit /b %errorlevel%
    )
    echo -------------------------------------------------------------
    echo %fullDate% - All operations have been successfully performed: try sending requests to %ip%:%port%!
    echo %fullDate% - Shutting down..
pause