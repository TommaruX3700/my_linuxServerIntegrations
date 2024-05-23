@echo off
    ::
    :: CERTIFICATE GENERATION TOOL
    ::      
    ::      Author: 
    ::          Tommaso Maruzzo
    ::
    ::      Description:
    ::          This tool asks for a base name then polish old ones, creates and installs a new:
    ::              - Certification Authoritiy (CA);
    ::              - Self-signed certificate (SSL).
    ::          to system store.
    ::          Output files are located in a folder in the same .bat directory, named after current date.
    ::
    ::      Requirements:
    ::          - Execute this script into Microsoft Visual Studio Powershell for developers;
    ::          - Execute this script with Admin priviledges.
    ::
    echo -------------------------------------------------------------
    echo Certificate creation tool.
    echo ATTENTION - This tool will remove all older ones already registered to system store.
    echo -------------------------------------------------------------    
    set /p name="Insert certificate name: "
    :: Check if there is a folder with current named with the current date, or create it
    for /f "tokens=2 delims==" %%I in ('wmic os get localdatetime /value') do set datetime=%%I
    set year=%datetime:~0,4%
    set month=%datetime:~4,2%
    set day=%datetime:~6,2%
    set fullDate=%year%-%month%-%day%
    set folderName=%~dp0%fullDate%
    if exist "%folderName%" (
        echo %fullDate% - Certification files already existing: erasing and rewriting them..
        cd /d "%folderName%"
        del /q *
        if %errorlevel% neq 0 (
            echo %fullDate% - Error occured! Terminating script..
            exit /b %errorlevel%
        )
        echo %fullDate% - Old files deleted! 
    ) else (
        echo %fullDate% - Creating new folder..
        mkdir %folderName%
        if %errorlevel% neq 0 (
            echo %fullDate% - Error occured! Terminating script..
            exit /b %errorlevel%
        )
        echo %folderName% - Folder created!
    )
    echo -------------------------------------------------------------
    :: Certification routine
        echo %fullDate% - Generating new certificate files..
        cd /d "%folderName%"
        if %errorlevel% neq 0 (
            echo %fullDate% - Error occured! Terminating script..
            exit /b %errorlevel%
        )
        set nameCA=%name%CA
        set nameSSL=%name%SSL
        set privateKeyCA=%nameCA%.pvk
        set certificateCA=%nameCA%.cer
        set certificateSSL=%nameSSL%.cer
        :: Check if the script has admin rights
        NET SESSION >nul 2>&1
        if %errorLevel% neq 0 (
            echo Administrator permissions required. Exiting..
            exit /b
        )
        echo -------------------------------------------------------------
        :: Clean old certificates 
        echo Removing old certificates from the "My" and "Root" store...
        set test_to_del="CN=%nameSSL%","CN=%nameCA%"
        powershell -ExecutionPolicy Bypass -File %~dp0Certificate_Remover_utility.ps1 -CommonNames %test_to_del%
        if %errorlevel% neq 0 (
            echo %fullDate% - Couldn't remove older certificates! Terminating script..
            exit /b %errorlevel%
        )
        echo %fullDate% - Older certificates removed successfully!
        echo -------------------------------------------------------------
        :: Create CA certificate inside that folder
        makecert -n "CN=%nameCA%" -r -sv %privateKeyCA% %certificateCA%
        if %errorlevel% neq 0 (
            echo %fullDate% - Execute this .bat file only from Microsoft Visual Studio command prompt! Terminating script..
            exit /b %errorlevel%
        )
        echo %fullDate% - CA certificate created!
        :: Create SSL certificate inside that folder 
        makecert -sk %nameSSL% -iv %privateKeyCA% -n "CN=%nameSSL%" -ic %certificateCA% %certificateSSL% -sr localmachine -ss My
        if %errorlevel% neq 0 (
            echo %fullDate% - Execute this .bat file only from Microsoft Visual Studio command prompt! Terminating script..
            exit /b %errorlevel%
        )
        echo %fullDate% - Self-signed SSL certificate created!
        echo -------------------------------------------------------------
        :: Install CA to Trusted Authority store, with MMC
        echo %certificateCA%
        certutil -addstore -user "Root" "%certificateCA%"
        if %errorlevel% neq 0 (
            echo %fullDate% - Error occured! Terminating script..
            exit /b %errorlevel%
        )
        echo %fullDate% - CA added to Trusted Authority store!
        :: Install SSL to Personal store, with MMC
        echo %certificateSSL%
        certutil -addstore -user "My" "%certificateSSL%"
        if %errorlevel% neq 0 (
            echo %fullDate% - Error occured! Terminating script..
            exit /b %errorlevel%
        )
        echo %fullDate% - SSL added to Personal store!
        echo -------------------------------------------------------------
        echo New SSL certificate and CA authority created and installed successfully!
        echo %fullDate% - Shutting down..
pause