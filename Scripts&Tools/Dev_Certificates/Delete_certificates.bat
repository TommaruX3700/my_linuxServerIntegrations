@echo off
    ::
    :: CERTIFICATE DELETION TOOL
    ::      
    ::      Author: 
    ::          Tommaso Maruzzo
    ::
    ::      Description:
    ::          This tool asks for a base name and uses a powershell script to remove all 
    ::          related occurences on "Personal" and "Trusted Authority" system stores.
    ::
    ::      Requirements:
    ::          - Execute this script with Admin priviledges.
    ::
    echo -------------------------------------------------------------
    echo Use this Utility to delete certificates.
    echo ATTENTION! - this application deletes both CA and SSL certificates.
    echo -------------------------------------------------------------
    set /p name="Give certificate base name to delete (eg: Compuprint_WrapperCA -> Compuprint_Wrapper): "
    set nameSSL=%name%SSL
    set nameCA=%name%CA        
    echo Removing old certificates from the "My" and "Root" store...
    set test_to_del="CN=%nameSSL%","CN=%nameCA%"
    powershell -ExecutionPolicy Bypass -File %~dp0Certificate_Remover_utility.ps1 -CommonNames %test_to_del%
    if %errorlevel% neq 0 (
        echo %fullDate% - Couldn't remove older certificates! Terminating script..
        exit /b %errorlevel%
    )
    echo %fullDate% - Older certificates removed successfully!
    echo -------------------------------------------------------------
    echo %fullDate% - All operations have been successfully performed, shutting down..
pause