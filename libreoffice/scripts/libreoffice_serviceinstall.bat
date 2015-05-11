@echo off
rem -- Check if argument is INSTALL or REMOVE

if not ""%1"" == ""INSTALL"" goto remove

"C:\Alfresco\LIBREO~1\scripts\winserv.exe" install alfrescoLibreOffice -displayname "alfrescoLibreOffice" -start auto "C:\Alfresco\LIBREO~1\App\libreoffice\program\soffice.exe" --nofirststartwizard --nologo --headless --accept=socket,host=127.0.0.1,port=8100;urp;

if ""%2"" == ""STOP"" goto end
net start alfrescoLibreOffice >NUL
goto end

:remove
rem -- STOP SERVICES BEFORE REMOVING

net stop alfrescoLibreOffice >NUL
"C:\Alfresco\LIBREO~1\scripts\winserv.exe" uninstall alfrescoLibreOffice

:end
exit
