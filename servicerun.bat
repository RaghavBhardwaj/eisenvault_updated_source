@echo off
rem START or STOP Services
rem ----------------------------------
rem Check if argument is STOP or START

if not ""%1"" == ""START"" goto stop

if exist C:\Alfresco\hypersonic\scripts\servicerun.bat (start /MIN /WAIT cmd /C C:\Alfresco\server\hsql-sample-database\scripts\servicerun.bat START)
if exist C:\Alfresco\ingres\scripts\servicerun.bat (start /MIN /WAIT cmd /C C:\Alfresco\ingres\scripts\servicerun.bat START)
if exist C:\Alfresco\mysql\scripts\servicerun.bat (start /MIN /WAIT cmd /C C:\Alfresco\mysql\scripts\servicerun.bat START)
if exist C:\Alfresco\postgresql\scripts\servicerun.bat (start /MIN /WAIT cmd /C C:\Alfresco\postgresql\scripts\servicerun.bat START)
if exist C:\Alfresco\apache2\scripts\servicerun.bat (start /MIN /WAIT cmd /C C:\Alfresco\apache2\scripts\servicerun.bat START)
if exist C:\Alfresco\openoffice\scripts\servicerun.bat (start /MIN /WAIT cmd /C C:\Alfresco\openoffice\scripts\servicerun.bat START)
if exist C:\Alfresco\tomcat\scripts\servicerun.bat (start /MIN /WAIT cmd /C C:\Alfresco\tomcat\scripts\servicerun.bat START)
if exist C:\Alfresco\resin\scripts\servicerun.bat (start /MIN /WAIT cmd /C C:\Alfresco\resin\scripts\servicerun.bat START)
if exist C:\Alfresco\jboss\scripts\servicerun.bat (start /MIN /WAIT cmd /C C:\Alfresco\jboss\scripts\servicerun.bat START)
if exist C:\Alfresco\wildfly\scripts\servicerun.bat (start /MIN /WAIT cmd /C C:\Alfresco\wildfly\scripts\servicerun.bat START)
if exist C:\Alfresco\jetty\scripts\servicerun.bat (start /MIN /WAIT cmd /C C:\Alfresco\jetty\scripts\servicerun.bat START)
if exist C:\Alfresco\subversion\scripts\servicerun.bat (start /MIN /WAIT cmd /C C:\Alfresco\subversion\scripts\servicerun.bat START)
rem RUBY_APPLICATION_START
if exist C:\Alfresco\lucene\scripts\servicerun.bat (start /MIN /WAIT cmd /C C:\Alfresco\lucene\scripts\servicerun.bat START)
if exist C:\Alfresco\mongodb\scripts\servicerun.bat (start /MIN /WAIT cmd /C C:\Alfresco\mongodb\scripts\servicerun.bat START)
if exist C:\Alfresco\third_application\scripts\servicerun.bat (start /MIN /WAIT cmd /C C:\Alfresco\third_application\scripts\servicerun.bat START)
goto end

:stop
echo "Stopping services ..."
if exist C:\Alfresco\third_application\scripts\servicerun.bat (start /MIN /WAIT cmd /C C:\Alfresco\third_application\scripts\servicerun.bat STOP)
if exist C:\Alfresco\lucene\scripts\servicerun.bat (start /MIN /WAIT cmd /C C:\Alfresco\lucene\scripts\servicerun.bat STOP)
rem RUBY_APPLICATION_STOP
if exist C:\Alfresco\subversion\scripts\servicerun.bat (start /MIN /WAIT cmd /C C:\Alfresco\subversion\scripts\servicerun.bat STOP)
if exist C:\Alfresco\jetty\scripts\servicerun.bat (start /MIN /WAIT cmd /C C:\Alfresco\jetty\scripts\servicerun.bat STOP)
if exist C:\Alfresco\hypersonic\scripts\servicerun.bat (start /MIN /WAIT cmd /C C:\Alfresco\server\hsql-sample-database\scripts\servicerun.bat STOP)
if exist C:\Alfresco\jboss\scripts\servicerun.bat (start /MIN /WAIT cmd /C C:\Alfresco\jboss\scripts\servicerun.bat STOP)
if exist C:\Alfresco\wildfly\scripts\servicerun.bat (start /MIN /WAIT cmd /C C:\Alfresco\wildfly\scripts\servicerun.bat STOP)
if exist C:\Alfresco\resin\scripts\servicerun.bat (start /MIN /WAIT cmd /C C:\Alfresco\resin\scripts\servicerun.bat STOP)
if exist C:\Alfresco\tomcat\scripts\servicerun.bat (start /MIN /WAIT cmd /C C:\Alfresco\tomcat\scripts\servicerun.bat STOP)
if exist C:\Alfresco\openoffice\scripts\servicerun.bat (start /MIN /WAIT cmd /C C:\Alfresco\openoffice\scripts\servicerun.bat STOP)
if exist C:\Alfresco\apache2\scripts\servicerun.bat (start /MIN /WAIT cmd /C C:\Alfresco\apache2\scripts\servicerun.bat STOP)
if exist C:\Alfresco\ingres\scripts\servicerun.bat (start /MIN /WAIT cmd /C C:\Alfresco\ingres\scripts\servicerun.bat STOP)
if exist C:\Alfresco\mysql\scripts\servicerun.bat (start /MIN /WAIT cmd /C C:\Alfresco\mysql\scripts\servicerun.bat STOP)
if exist C:\Alfresco\mongodb\scripts\servicerun.bat (start /MIN /WAIT cmd /C C:\Alfresco\mongodb\scripts\servicerun.bat STOP)
if exist C:\Alfresco\postgresql\scripts\servicerun.bat (start /MIN /WAIT cmd /C C:\Alfresco\postgresql\scripts\servicerun.bat STOP)

:end
