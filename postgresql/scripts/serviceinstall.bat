@echo off
rem -- Check if argument is INSTALL or REMOVE

if not ""%1"" == ""INSTALL"" goto remove

"C:\Alfresco/postgresql\bin\pg_ctl.exe" register -N "alfrescoPostgreSQL-2" -D "C:\Alfresco/alf_data/postgresql"

net start "alfrescoPostgreSQL-2" >NUL
goto end

:remove
rem -- STOP SERVICE BEFORE REMOVING

net stop "alfrescoPostgreSQL-2" >NUL
"C:\Alfresco/postgresql\bin\pg_ctl.exe" unregister -N "alfrescoPostgreSQL-2"


:end
exit
