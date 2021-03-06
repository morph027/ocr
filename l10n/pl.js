OC.L10N.register(
    "ocr",
    {
    "Saved." : "Zapisano.",
    "Saving languages failed:" : "Zapisywanie języka nie powiodło się:",
    "The languages are not specified in the correct format." : "Języki nie są podane we właściwym formacie.",
    "Saving Redis settings failed:" : "Błąd w trakcie zapisywania ustawień Redis:",
    "The Redis settings are not specified in the right format." : "Ustawienia Redis nie są podane we właściwym formacie.",
    "OCR" : "OCR",
    "OCR processing failed:" : "Proces OCR nie udał się:",
    "No file selected." : "Nie wybrano żadnego pliku.",
    "MIME type not supported." : "Typ MIME nie wspierany.",
    "_OCR processing for %n file failed. For details please go to your personal settings._::_OCR processing for %n files failed. For details please go to your personal settings._" : ["Proces OCR dla %n pliku nie udał się. Po szczegóły udaj się do swoich ustawień.","Proces OCR dla %n plików nie udał się. Po szczegóły udaj się do swoich ustawień.","Proces OCR dla %n plików nie udał się. Po szczegóły udaj się do swoich ustawień."],
    "OCR status could not be retrieved:" : "Status OCR nie mógł zostać pobrany:",
    "No languages available for OCR processing. Please make sure to configure the languages in the administration section." : "Brak dostępnych języków do przetwarzania OCR. Upewnij się, że ustawienia języka zostały skonfigurowane.",
    "Available languages could not be retrieved:" : "Nie można pobrać dostępnych języków:",
    "Process" : "Postęp",
    "Replace" : "Zamień",
    "_OCR started: %n new file in queue._::_OCR started: %n new files in queue._" : ["OCR wystartował: %n nowy plik w kolejce.","OCR wystartował: %n nowych plików w kolejce.","OCR wystartował: %n nowych plików w kolejce."],
    "_OCR: %n currently pending file in queue._::_OCR: %n currently pending files in queue._" : ["OCR: %n plik oczekuje aktualnie w kolejce.","OCR: %n plików oczekuje aktualnie w kolejce.","OCR: %n plików oczekuje aktualnie w kolejce."],
    "No matches found." : "Nie znaleziono pasujących",
    "Select language" : "Wybierz język",
    "Delete" : "Usuń",
    "No pending or failed OCR items found." : "Nie znaleziono oczekujących lub błędnych obiektów OCR.",
    "Refresh" : "Odśwież",
    "Delete from queue" : "Usuń z kolejki",
    "File" : "Plik",
    "Status" : "Status",
    "Log" : "Log",
    "Replace by result" : "Zamień wynikiem",
    "OCR jobs could not be retrieved:" : "Zadania OCR nie mogły zostać pobrane:",
    "The job for the following file object has been successfully deleted:" : "Zadanie dla następującego obiektu zostało pomyślnie usunięte: ",
    "Error during deletion:" : "Błąd w trakcie usuwania:",
    "Saved" : "Zapisano",
    "Please setup Redis in the administration settings first." : "Proszę zainstaluj/ustaw wpierw Redis w sekcji administracyjnej.",
    "The given settings key is empty." : "Wskazany klucz ustawień jest pusty.",
    "The Redis host is not specified in the correct format." : "Host Redis nie jest podany we właściwym formacie.",
    "The Redis port number is not specified in the correct format." : "Numer portu Redis nie jest podany we właściwym formacie.",
    "The Redis DB is not specified in the correct format." : "Baza Redis nie jest określona w poprawnym formacie.",
    "Wrong parameter." : "Błędny parametr.",
    "Wrong MIME type." : "Błędy typ MIME",
    "Cannot replace shared files." : "Nie można zamienić udostępnionych plików.",
    "Empty parameters passed." : "Żadne parametry nie przeszły.",
    "Cannot delete because of wrong owner." : "Nie można usunąć ze względu na błędnego właściciela.",
    "Cannot delete because of wrong ID." : "Nie można usunąć ze względu na błędne ID.",
    "Reading the finished jobs from Redis went wrong." : "Odczytywanie zakończonych zadań Redis nie powiodło się.",
    "Temp file does not exist." : "Plik tymczasowy nie istnieje.",
    "OCR could not put processed file to the right target folder. If you selected the replace option, you can restore the file by using the trash bin." : "OCR nie mógł osadzić przetworzonych plików do właściwego foldera. Jeśli zaznaczyłeś opcję zamiany, możesz przywrócić plik z kosza.",
    "Could not add files to the Redis OCR processing queue." : "Nie mogę dodać plików do kolejki procesowania Redis OCR.",
    "Temp file cannot be created." : "Plik tymczasowy nie może zostać utworzony.",
    "Cannot delete temporary file during creation of temp file for Tesseract." : "Nie można skasować pliku tymczasowego podczas tworzenia pliku tymczasowego dla Tesseract.",
    "Cannot create temporary file for Tesseract." : "Nie można utworzyć pliku tymczasowego dla Tesseract.",
    "Cannot set permissions for temporary Tesseract file." : "Nie można nadać odpowiednich uprawnień dla pliku tymczasowego Tesseract.",
    "Message queueing capabilities are missing on the server (package php-redis)." : "Możliwości kolejkowania wiadomości są niedostępne na serwerze (pakiet php-redis).",
    "Cannot connect to Redis." : "Nie można się połączyć z Redis.",
    "Redis authentication error." : "Błąd uwierzytelniania Redis.",
    "Cannot connect to the right Redis database." : "Nie można się połączyć z właściwą bazą danych Redis. ",
    "Optical character recognition (OCR)" : "Rozpoznawanie pisma (OCR)",
    "Installed languages" : "Zainstalowane języki",
    "Here goes a semicolon separated list of languages that are supported by the Docker worker instance (more details in the wiki on GitHub)." : "Lista języków oddzielona średnikami, wspierana przez instancję modułu Docker (więcej informacji w wiki na GitHub).",
    "Apply" : "Zastosuj",
    "Redis host" : "Host Redis",
    "The host of the Redis instance for communication with the OCR worker." : "Host z instancją Redis dla komunikacji z modułem OCR.",
    "Redis port" : "Port Redis",
    "The corresponding port (normally 6379)." : "Odpowiadający port (zwykle 6379).",
    "Redis database" : "Baza danych Redis",
    "The Redis database (normally 0)." : "Baza Redis (zwykle 0)",
    "Redis password" : "Hasło Redis",
    "The password to authenticate (normally OCR)." : "Hasło dla autoryzacji (zwykle OCR)."
},
"nplurals=4; plural=(n==1 ? 0 : (n%10>=2 && n%10<=4) && (n%100<12 || n%100>14) ? 1 : n!=1 && (n%10>=0 && n%10<=1) || (n%10>=5 && n%10<=9) || (n%100>=12 && n%100<=14) ? 2 : 3);");
