  L�        Direcciones   L�     6   6Crear fuente de datos de direcciones    L�     2   2No se pudo realizar la conexión.   L�     F   FCompruebe la configuración para la fuente de datos.    L�     <   <Datos de direcciones - asignación de campo   L�     �   �No hay campos asignados en este momento.
Si prefiere no realizar las asignaciones ahora, puede hacerlo después yendo a:
Archivo > Plantilla > Origen de libreta de direcciones…    L�     8   8       extensions/res/addresspilot.png   L�  <  B   p  @�   � @EXTENSIONS_HID_ABSPILOT Asistente del origen de datos de la libreta de direcciones          0   0Tipo de libreta de direcciones          ,   ,Configuración de conexión         $   $Selección de tabla         &   &Asignación de campo          ,   ,Título de origen de datos    L�  3   N   N            Seleccione un tipo de libreta de direcciones.     L�  4   �   � @            La fuente de datos no contiene tablas.
¿Desea no obstante configurarla como fuente de datos de direcciones?      L�  4   �   � @            No parece tener una cuenta de GroupWise configurada en Evolution.
¿Desea configurarla como origen de datos igualmente?     L�  t  \   R  @8       @extensions:TabPage:RID_PAGE_SELECTABTYPE        �   �     W  6  6   �                	      �   (%PRODUCTNAME permite acceder a los datos de direcciones existentes en el sistema. Para ello, se creará un origen de datos de %PRODUCTNAME que contenga los datos de las direcciones en forma tabular.

Este asistente facilita la creación del origen de datos.      X   j   j   �                 8      �   Seleccione el tipo de libreta de direcciones externa:      N   n   n  @�        extensions:RadioButton:RID_PAGE_SELECTABTYPE:RB_EVOLUTION       �   Evolution      
  N   |   |  @�        extensions:RadioButton:RID_PAGE_SELECTABTYPE:RB_EVOLUTION_GROUPWISE       �   Todo el grupo        N   z   z  @�        extensions:RadioButton:RID_PAGE_SELECTABTYPE:RB_EVOLUTION_LDAP        �   Evolución LDAP        N   r   r  @�        extensions:RadioButton:RID_PAGE_SELECTABTYPE:RB_MORK        �   Mozilla/Netscape         N   z   z  @�        extensions:RadioButton:RID_PAGE_SELECTABTYPE:RB_THUNDERBIRD       �   Thunderbird/Icedove        N   |   |  @�        extensions:RadioButton:RID_PAGE_SELECTABTYPE:RB_KAB       �   Libreta de direcciones de KDE        N   �   �  @�        extensions:RadioButton:RID_PAGE_SELECTABTYPE:RB_MACAB       �   Libreta de direcciones de Mac OS X         N   ~   ~  @�        extensions:RadioButton:RID_PAGE_SELECTABTYPE:RB_LDAP        �   Datos de las direcciones LDAP        N   �   �  @�        extensions:RadioButton:RID_PAGE_SELECTABTYPE:RB_OUTLOOK       �   Libreta de direcciones de Outlook        N   �   �  @�        extensions:RadioButton:RID_PAGE_SELECTABTYPE:RB_OUTLOOKEXPRESS        �   Libreta de direcciones del sistema de Windows      	  N   �   �  @�        extensions:RadioButton:RID_PAGE_SELECTABTYPE:RB_OTHER       �   Otras fuentes de datos externas     L�  t  �   T  @8       @extensions:TabPage:RID_PAGE_ADMININVOKATION       �   �     W       �                	      �   0Para configurar la nueva fuente de datos se necesita otra información.

Para ello, en cuanto pulse sobre el botón que se encuentra abajo se abrirá otro diálogo. Introduzca en él la información requerida.      F   �   �  @�        extensions:PushButton:RID_PAGE_ADMININVOKATION:PB_INVOKE_ADMIN_DIALOG       _   <      2   Configuración       W   �   �   �    �            d      �   0No se pudo establecer la conexión con el origen de datos.
Antes de continuar, compruebe la configuración realizada o elija (en la página anterior) otro tipo para el origen de datos de direcciones.   L�  t  �   V  @8       @extensions:TabPage:RID_PAGE_TABLESELECTION_AB       �   �     W   �   �   �                	      �   El origen de datos externos elegido contiene más de una libreta de direcciones.
Seleccione la que desee utilizar principalmente:      U   v   v  @?      Hextensions:ListBox:RID_PAGE_TABLESELECTION_AB:LB_TABLELIST           $      �   2��      L�  t  �   R  @8       @extensions:TabPage:RID_PAGE_FIELDMAPPING        �   �     W  �  �   �                	      �   HPara poder incorporar los datos de las direcciones en las plantillas, %PRODUCTNAME debe saber qué campos contienen qué datos.

Por ejemplo usted puede haber guardado las direcciones electrónicas en un campo con el nombre "e-mail", "email", o con otro nombre completamente distinto.

Si pulsa el botón que se encuentra más abajo, se abre otro diálogo en el que podrá configurar la fuente de datos con los nuevos valores.       F   �   �  @�        extensions:PushButton:RID_PAGE_FIELDMAPPING:PB_INVOKE_FIELDS_DIALOG       _   T      2   Asignación de campo       W   4   4   ?                t      �      L�  t  �   J  @8       @extensions:TabPage:RID_PAGE_FINAL       �   �   	  W   �   �   �                	      �   (Ahora dispone de la información necesaria para integrar los datos de las direcciones en %PRODUCTNAME.

Indique ahora el nombre con el que desee registrar la fuente de datos en %PRODUCTNAME.       W   @   @   �                5      2   Ubicación       T   j   j  @?      Hextensions:ComboBox:RID_PAGE_FINAL:CBB_LOCATION          @      �              F   p   p  @�       @extensions:PushButton:RID_PAGE_FINAL:PB_BROWSE        �   ?      2   Examinar…      P   �   �  @�      @extensions:CheckBox:RID_PAGE_FINAL:CB_REGISTER_DS          R      �   Hacer que esta libreta de direcciones esté disponible para todos los módulos de %PRODUCTNAME.        W   V   V   �                 ]      �   Nombre de libreta de direcciones       R   h   h  @?       Hextensions:Edit:RID_PAGE_FINAL:ET_DATASOURCENAME           h      �        
  W   �   �   �    �            |      �   Ya existe otro origen de datos con este nombre. Como los orígenes de datos deben tener nombres únicos globalmente, necesita elegir otro.     �                �      L�        L�       L�   R    L�   �    L�   �    L�      L�  �  3  L�  D  4  L�  �  4  L�     <  L�    t  L�  �  t  L�    t  L�  �  t  L�  v  t  L�  j   �