
======================================================================
File leggimi di LibreOffice 4.2
======================================================================


Per gli ultimi aggiornamenti a questo file leggimi, consultate la pagina http://www.libreoffice.org/welcome/readme.html.

Questo file contiene informazioni importanti sul programma LibreOffice. Prima di procedere con l'installazione, vi raccomandiamo di leggere molto attentamente queste informazioni.

La comunità di LibreOffice è responsabile dello sviluppo di questo prodotto e vi invita a considerare la vostra partecipazione come membro della comunità. Se siete nuovi utenti, potete visitare il sito di LibreOffice, dove troverete molte informazioni sul progetto LibreOffice e le comunità che vi ruotano intorno. Visitate l'indirizzo http://www.libreoffice.org/.

LibreOffice è davvero un prodotto libero per tutti?
----------------------------------------------------------------------

Tutti sono liberi di usare LibreOffice. Potete installare questa copia di LibreOffice in qualsiasi computer e utilizzarla per qualsiasi scopo desiderato (incluso l'uso in ambito commerciale, governativo, nella pubblica amministrazione e nelle scuole). Per ulteriori dettagli, consultate la licenza contenuta in questa copia di LibreOffice.

Perché LibreOffice è libero per tutti?
----------------------------------------------------------------------

Potete usare questa copia di LibreOffice senza pagare niente poiché contributori individuali e aziende patrocinanti hanno progettato, sviluppato, provato, tradotto, documentato, supportato, pubblicizzato e aiutato in molti altri modi per rendere LibreOffice ciò che è oggi: il software di produttività open source primo al mondo, per la casa e l'ufficio.

Se apprezzate i loro sforzi, e desiderate che LibreOffice continui a essere disponibile negli anni a venire, considerate di contribuire al progetto - consultate http://www.documentfoundation.org/contribution/ per i dettagli. Tutti possono contribuire in qualche modo.

----------------------------------------------------------------------
Avvertenze per l'installazione
----------------------------------------------------------------------

Affinché funzioni in modo completo LibreOffice richiede una versione recente dell'ambiente di runtime Java (JRE). JRE non fa parte del pacchetto di installazione di LibreOffice e deve essere installato separatamente.

Requisiti di sistema
----------------------------------------------------------------------

* Microsoft Windows XP, Vista, Windows 7 o Windows 8

Per l'installazione è necessario avere diritti di amministratore.

L'impostazione di LibreOffice come applicazione predefinita per i formati di documento Microsoft Office può essere forzata o esclusa utilizzando i seguenti parametri di comando per l'installazione:

* REGISTER_ALL_MSO_TYPES=1 forzerà la registrazione di LibreOffice come applicazione predefinita per i formati Microsoft Office.
* REGISTER_NO_MSO_TYPES=1 disabiliterà la registrazione di LibreOffice come applicazione predefinita per i formati Microsoft Office.

Assicuratevi che ci sia spazio libero sufficiente nella cartella temporanea del vostro sistema e di avere diritti di lettura, scrittura ed esecuzione. Prima di avviare il processo di installazione chiudete tutti gli altri programmi.

Installazione di LibreOffice su sistemi Linux basati su Debian/Ubuntu
----------------------------------------------------------------------

Per apprendere come installare un pacchetto di lingua (dopo aver installato la versione inglese US di LibreOffice), leggete la sezione sottostante intitolata "Installare un pacchetto di lingua".

Quando decomprimerete l'archivio scaricato, noterete che il contenuto è stato decompresso in una sottocartella. Aprite il vostro gestore di file e spostatevi nella cartella che inizia per "LibreOffice_" seguito dal numero di versione e qualche informazione sulla piattaforma.

Questa cartella contiene una sottocartella chiamata "DEBS". Passate alla cartella "DEBS".

Fate clic col pulsante destro del mouse all'interno della cartella e scegliete "Apri in terminale". Si aprirà una finestra di terminale. Dalla riga di comando della finestra, digitate il seguente comando (per eseguire il comando, vi sarà chiesto di digitare la vostra password di amministrazione):

I comandi seguenti installeranno LibreOffice e i pacchetti di integrazione del desktop (è possibile anche solo copiarli e incollarli all'interno della schermata del terminale, piuttosto che scriverli):

sudo dpkg -i *.deb

Il processo di installazione è ora completato, e dovreste avere le icone per tutte le applicazioni di LibreOffice nel menu Applicazioni/Ufficio del vostro desktop.

Installazione di LibreOffice su sistemi Linux Fedora, openSUSE, Mandriva, e altri, che utilizzano pacchetti RPM
----------------------------------------------------------------------

Per apprendere come installare un pacchetto di lingua (dopo aver installato la versione inglese US di LibreOffice), leggete la sezione sottostante intitolata "Installare un pacchetto di lingua".

Quando decomprimerete l'archivio scaricato, noterete che il contenuto è stato decompresso in una sottocartella. Aprite il vostro gestore di file e spostatevi nella cartella che inizia per "LibreOffice_" seguito dal numero di versione e qualche informazione sulla piattaforma.

Questa cartella contiene una sottocartella chiamata "RPMS". Spostatevi nella cartella "RPMS".

Fate clic col pulsante destro del mouse all'interno della cartella e scegliete "Apri in terminale". Si aprirà una finestra di terminale. Dalla riga di comando della finestra, digitate il seguente comando (per eseguire il comando, vi sarà chiesto di digitare la vostra password di amministrazione):

Per i sistemi basati su Fedora: su -c 'yum install *.rpm'

Per i sistemi basati su Mandriva: sudo urpmi *.rpm

Per gli altri sistemi basati su RPM (openSUSE, ecc): rpm -Uvh *.rpm

Il processo di installazione è ora completato, e dovreste avere le icone per tutte le applicazioni di LibreOffice nel menu Applicazioni/Ufficio del vostro desktop.

In alternativa, per eseguire un'installazione come utente potete usare lo script 'install', che si trova nella cartella principale di questo archivio. Lo script imposterà LibreOffice in modo da avere un suo proprio profilo per questa installazione, separato dal vostro normale profilo LibreOffice. È da notare che questa operazione non installerà le parti per l'integrazione del sistema, quali gli elementi di menu e le registrazioni dei tipi MIME.

Note relative l'integrazione desktop per le distribuzioni Linux non trattate nelle istruzioni di installazione precedenti
----------------------------------------------------------------------

Dovrebbe essere possibile installare facilmente LibreOffice su altre distribuzioni Linux non specificamente definite in queste istruzioni di installazione. Le principali differenze che si potrebbero riscontrare sono nell'integrazione con il desktop.

La cartella RPMS (o DEBS, rispettivamente) contiene anche un pacchetto chiamato libreoffice4.1-freedesktop-menus-4.1.0-3.noarch.rpm (o libreoffice4.1-debian-menus_4.1.0-3_all.deb, rispettivamente, o simile). Questo pacchetto vale per tutte le distribuzioni Linux che supportano le specifiche/raccomandazioni Freedesktop.org (http://en.wikipedia.org/wiki/Freedesktop.org), ed è fornito per l'installazione sulle altre distribuzioni Linux non contemplate nelle istruzioni menzionate in precedenza.

Installare un pacchetto di lingua
----------------------------------------------------------------------

Scaricate il pacchetto di lingua desiderato per la vostra piattaforma. Essi sono disponibili nella stessa ubicazione dell'archivio di installazione principale. Dal gestore di file Nautilus, estraete l'archivio scaricato all'interno di una cartella (la vostra scrivania, per esempio). Assicuratevi di aver chiuso tutte le applicazioni di LibreOffice, incluso il QuickStart, se avviato.

Spostatevi nella cartella in cui avete estratto il pacchetto di lingua scaricato.

Ora spostatevi nella cartella creata durante il processo di estrazione. Per esempio, per il pacchetto di lingua italiana per un sistema a 32-bit basato su Debian/Ubuntu, la cartella si chiamerà LibreOffice_, più qualche informazione di versione, più Linux_x86_langpack-deb_it.

Ora spostatevi nella cartella che contiene i pacchetti da installare. Nei sistemi basati su Debian/Ubuntu, la cartella sarà DEBS. Nei sistemi Fedora, openSUSE o Mandriva, essa sarà RPMS.

Dal gestore di file Nautilus, fate clic col pulsante destro del mouse nella cartella e scegliete il comando "Apri in terminale". Nei finestra di terminale appena aperta eseguite il comando per installare il pacchetto di lingua (potrebbe essere richiesta la password di amministrazione per tutti i comandi seguenti):

Per i sistemi basati su Debian/Ubuntu: sudo dpkg -i *.deb

Per i sistemi basati su Fedora: su -c 'yum install *.rpm'

Per i sistemi basati su Mandriva: sudo urpmi *.rpm

Per gli altri sistemi che usano RPM (openSUSE, ecc.): rpm -Uvh *.rpm

Ora avviate un'applicazione di LibreOffice - Writer, per esempio. Andate nel menu Strumenti e scegliete Opzioni. Nella finestra di dialogo delle opzioni, fate clic su "Impostazioni della lingua", poi su "Lingue". Fate clic sull'elenco "Interfaccia utente" e selezionate la lingua appena installata. Se lo desiderate, fate lo stesso per la "Impostazione locale", la "Valuta predefinita" e le "Lingue predefinite per i documenti".

Dopo aver regolato le impostazioni, fate clic su OK. La finestra si chiuderà e apparirà un messaggio informativo che le modifiche saranno applicate solo dopo aver chiuso e riavviato LibreOffice (ricordate di chiudere anche il QuickStart, se avviato).

Al successivo avvio, LibreOffice apparirà nella lingua appena installata.

----------------------------------------------------------------------
Problemi all'avvio del programma
----------------------------------------------------------------------

Eventuali difficoltà all'avvio di LibreOffice (come il blocco delle applicazioni) e problemi di visualizzazione sono spesso causati dal driver della scheda grafica. In questi casi, conviene aggiornare il driver in questione o provare a usare il driver grafico fornito con il sistema operativo. Le difficoltà di visualizzazione degli oggetti 3D possono spesso essere risolte disattivando l'opzione "Usa OpenGL" sotto 'Strumenti - Opzioni - LibreOffice - Vista - Vista 3D'.

----------------------------------------------------------------------
Touchpad ALPS/Synaptics in MS Windows
----------------------------------------------------------------------

A causa di un problema con i driver di MS Windows, non è possibile utilizzare la funzione di scorrimento del touchpad ALPS/Synaptics nei documenti di LibreOffice.

Per abilitare lo scorrimento, aggiungete le seguenti righe al file di configurazione "C:\Programmi\Synaptics\SynTP\SynTPEnh.ini" e riavviate il computer:

[LibreOffice]

FC = "SALFRAME"

SF = 0x10000000

SF |= 0x00004000

La posizione del file di configurazione può variare sui diversi sistemi Windows.

----------------------------------------------------------------------
Tasti di scelta rapida
----------------------------------------------------------------------

In LibreOffice si possono utilizzare i tasti di scelta rapida che non siano già utilizzati dal sistema operativo. Nel caso in cui una combinazione di tasti non funzioni come descritto nella guida in linea, verificate che la stessa non sia assegnata a qualche comando dal sistema. È possibile risolvere questi conflitti modificando i tasti di scelta rapida del sistema; in alternativa potete cambiare quasi ogni combinazione assegnata da LibreOffice. Per maggiori informazioni su questo argomento, fate riferimento alla documentazione in linea di LibreOffice o alla documentazione del vostro sistema operativo.

----------------------------------------------------------------------
Problemi durante la spedizione di documenti come e-mail da LibreOffice
----------------------------------------------------------------------

Si possono verificare dei problemi (il programma va in crash o si blocca) inviando un documento da 'File - Invia - Documento come e-mail' o 'Documento come allegato PDF'. La causa è rintracciabile nel file di sistema di MS Windows "Mapi" (Messaging Application Programming Interface) che in alcune versioni non funziona correttamente; purtroppo è impossibile identificare con precisione quali siano queste versioni. Per maggiori informazioni cercate "mapi dll" nella Microsoft Knowledge Base all'indirizzo http://www.microsoft.com

----------------------------------------------------------------------
Avvertenze importanti per l'accessibilità
----------------------------------------------------------------------

Per ulteriori informazioni sulle caratteristiche di accesso facilitato in LibreOffice, consultate http://www.libreoffice.org/accessibility/

----------------------------------------------------------------------
Supporto utenti
----------------------------------------------------------------------

La pagina di supporto principale http://www.libreoffice.org/support/ offre varie soluzioni di assistenza per LibreOffice. Il vostro quesito potrebbe avere già ottenuto risposta: controllate il forum della comunità all'indirizzo http://www.documentfoundation.org/nabble/ o ricercate negli archivi della mailing list 'users@libreoffice.org' in http://www.libreoffice.org/lists/users/. In alternativa, potete inviare i vostri questi a users@libreoffice.org. Se volete iscrivervi alla lista (per ottenere risposte), inviate un messaggio vuoto all'indirizzo: users+subscribe@libreoffice.org.

Controllate anche la sezione FAQ in http://www.libreoffice.org/faq/.

----------------------------------------------------------------------
Segnalazione di bug e problemi
----------------------------------------------------------------------

Attualmente il nostro sistema di segnalazione, tracciamento e risoluzione degli errori è BugZilla, gentilmente ospitato in https://bugs.libreoffice.org/. Invitiamo tutti gli utenti a segnalare gli errori riscontrati nella loro piattaforma specifica. Un sistema di segnalazioni vivace è uno dei contributi più importanti che la comunità degli utenti può dare per lo sviluppo e il miglioramento futuro di LibreOffice.

----------------------------------------------------------------------
Come collaborare
----------------------------------------------------------------------

La comunità di LibreOffice ha bisogno della vostra partecipazione attiva per lo sviluppo di questo importante progetto open source.

In quanto utenti, siete già una parte importante del processo di sviluppo della suite, ma desidereremmo aveste un ruolo ancora più attivo, con l'obiettivo di diventare contributori a lungo termine della comunità. Potete contattarci e unirvi a noi alla pagina dei contributi http://www.libreoffice.org/contribution/

Come iniziare
----------------------------------------------------------------------

Il modo migliore per iniziare a contribuire al progetto è iscriversi a una o più mailing list, seguire per un po' le discussioni e iniziare a leggere gli archivi per prendere confidenza con i numerosi argomenti trattati dalla prima uscita di LibreOffice nel lontano ottobre 2000. Quando sarete pronti, non vi resta altro da fare che mandare un messaggio di presentazione e buttarvi nella mischia! Se avete già collaborato ad altri progetti open source, controllate la lista delle cose da fare (To-Do) e scoprite se c'è qualcosa che fa per voi in http://www.libreoffice.org/develop/.

Iscrivetevi
----------------------------------------------------------------------

Ecco alcune mailing list a cui vi potete iscrivere alla pagina http://www.libreoffice.org/contribution/

* News: announce@documentfoundation.org *raccomandata a tutti gli utenti* (traffico basso)
* Lista utenti principale: users@global.libreoffice.org *metodo semplice per seguire le discussioni* (traffico intenso)
* Progetto marketing: marketing@global.libreoffice.org *oltre lo sviluppo* (traffico in incremento)
* Lista generale per gli sviluppatori: libreoffice@lists.freedesktop.org (traffico intenso)

Unirsi a uno o più progetti
----------------------------------------------------------------------

Anche se non avete grande esperienza di progettazione o programmazione di software, potete dare un importante contributo a questo importante progetto open source. Come?

Vi auguriamo buon lavoro e buon divertimento con il nuovo LibreOffice 4.2 e speriamo di incontrarvi presto online.

La comunità di LibreOffice

----------------------------------------------------------------------
Codice sorgente usato / modificato
----------------------------------------------------------------------

Portions Copyright 1998, 1999 James Clark. Portions Copyright 1996, 1998 Netscape Communications Corporation.
