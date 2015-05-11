@echo off
rem -- Check if argument is INSTALL or REMOVE

if not ""%1"" == ""INSTALL"" goto remove

if exist C:\Alfresco\mysql\scripts\serviceinstall.bat (start /MIN /WAIT cmd /C C:\Alfresco\mysql\scripts\serviceinstall.bat INSTALL)
if exist C:\Alfresco\postgresql\scripts\serviceinstall.bat (start /MIN /WAIT cmd /C C:\Alfresco\postgresql\scripts\serviceinstall.bat INSTALL)
if exist C:\Alfresco\apache2\scripts\serviceinstall.bat (start /MIN /WAIT cmd /C C:\Alfresco\apache2\scripts\serviceinstall.bat INSTALL)
if exist C:\Alfresco\tomcat\scripts\serviceinstall.bat (start /MIN /WAIT cmd /C C:\Alfresco\tomcat\scripts\serviceinstall.bat INSTALL)
if exist C:\Alfresco\resin\scripts\serviceinstall.bat (start /MIN /WAIT cmd /C C:\Alfresco\resin\scripts\serviceinstall.bat INSTALL)
if exist C:\Alfresco\jboss\scripts\serviceinstall.bat (start /MIN /WAIT cmd /C C:\Alfresco\jboss\scripts\serviceinstall.bat INSTALL)
if exist C:\Alfresco\wildfly\scripts\serviceinstall.bat (start /MIN /WAIT cmd /C C:\Alfresco\wildfly\scripts\serviceinstall.bat INSTALL)
if exist C:\Alfresco\openoffice\scripts\serviceinstall.bat (start /MIN /WAIT cmd /C C:\Alfresco\openoffice\scripts\serviceinstall.bat INSTALL)
if exist C:\Alfresco\subversion\scripts\serviceinstall.bat (start /MIN /WAIT cmd /C C:\Alfresco\subversion\scripts\serviceinstall.bat INSTALL)
rem RUBY_APPLICATION_INSTALL
if exist C:\Alfresco\mongodb\scripts\serviceinstall.bat (start /MIN /WAIT cmd /C C:\Alfresco\mongodb\scripts\serviceinstall.bat INSTALL)
if exist C:\Alfresco\lucene\scripts\serviceinstall.bat (start /MIN /WAIT cmd /C C:\Alfresco\lucene\scripts\serviceinstall.bat INSTALL)
if exist C:\Alfresco\third_application\scripts\serviceinstall.bat (start /MIN /WAIT cmd /C C:\Alfresco\third_application\scripts\serviceinstall.bat INSTALL)
if exist C:\Alfresco\nginx\scripts\serviceinstall.bat (start /MIN /WAIT cmd /C C:\Alfresco\nginx\scripts\serviceinstall.bat INSTALL)
if exist C:\Alfresco\php\scripts\serviceinstall.bat (start /MIN /WAIT cmd /C C:\Alfresco\php\scripts\serviceinstall.bat INSTALL)
goto end

:remove

if exist C:\Alfresco\third_application\scripts\serviceinstall.bat (start /MIN /WAIT cmd /C C:\Alfresco\third_application\scripts\serviceinstall.bat)
if exist C:\Alfresco\lucene\scripts\serviceinstall.bat (start /MIN /WAIT cmd /C C:\Alfresco\lucene\scripts\serviceinstall.bat)
if exist C:\Alfresco\mongodb\scripts\serviceinstall.bat (start /MIN /WAIT cmd /C C:\Alfresco\mongodb\scripts\serviceinstall.bat)
rem RUBY_APPLICATION_REMOVE
if exist C:\Alfresco\subversion\scripts\serviceinstall.bat (start /MIN /WAIT cmd /C C:\Alfresco\subversion\scripts\serviceinstall.bat)
if exist C:\Alfresco\openoffice\scripts\serviceinstall.bat (start /MIN /WAIT cmd /C C:\Alfresco\openoffice\scripts\serviceinstall.bat)
if exist C:\Alfresco\jboss\scripts\serviceinstall.bat (start /MIN /WAIT cmd /C C:\Alfresco\jboss\scripts\serviceinstall.bat)
if exist C:\Alfresco\wildfly\scripts\serviceinstall.bat (start /MIN /WAIT cmd /C C:\Alfresco\wildfly\scripts\serviceinstall.bat)
if exist C:\Alfresco\resin\scripts\serviceinstall.bat (start /MIN /WAIT cmd /C C:\Alfresco\resin\scripts\serviceinstall.bat)
if exist C:\Alfresco\tomcat\scripts\serviceinstall.bat (start /MIN /WAIT cmd /C C:\Alfresco\tomcat\scripts\serviceinstall.bat)
if exist C:\Alfresco\apache2\scripts\serviceinstall.bat (start /MIN /WAIT cmd /C C:\Alfresco\apache2\scripts\serviceinstall.bat)
if exist C:\Alfresco\postgresql\scripts\serviceinstall.bat (start /MIN /WAIT cmd /C C:\Alfresco\postgresql\scripts\serviceinstall.bat)
if exist C:\Alfresco\mysql\scripts\serviceinstall.bat (start /MIN /WAIT cmd /C C:\Alfresco\mysql\scripts\serviceinstall.bat)
if exist C:\Alfresco\php\scripts\serviceinstall.bat (start /MIN /WAIT cmd /C C:\Alfresco\php\scripts\serviceinstall.bat)
if exist C:\Alfresco\nginx\scripts\serviceinstall.bat (start /MIN /WAIT cmd /C C:\Alfresco\nginx\scripts\serviceinstall.bat)
:end
