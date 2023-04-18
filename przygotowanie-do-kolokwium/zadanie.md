# Przykładowe zadanie - Powodzenia :-)

1. Stwórz bazowy obraz oparty na **alpine:latest**, który będzie służył jako środowisko deweloperskie.
   Zainstaluj niezbędne pakiety, takie jak **curl**, **git**. Następnie pobierz aplikację przykładową z GitHuba.
   Wykorzystaj argument budowy **GIT_REPO** do określenia adresu repozytorium.
   Zainstaluj niezbędne pakiety i zbuduj aplikację przykładową.
   W przypadku aplikacji **Node.js**, użyj **npm install** i **npm run build**.
2. Stwórz drugi etap budowy, bazując na **nginx:latest**.
   Skopiuj zbudowaną aplikację z etapu 2 do właściwego folderu **nginx**, aby była dostępna na serwerze.

Ustaw polecenie **ENTRYPOINT**, które uruchomi **nginx** w trybie **daemon-off**, aby proces był uruchamiany w pierwszym planie.

Napisz skrypt, który będzie budował obraz bazując na przekazanym linku do repozytorium,
następnie będzie uruchamiał kontenery, utworzone w nowej sieci o nazwie **app_network**.
**Wynikiem działania skryptu ma być odpalona aplikacja za pomocą nginx**.

Rozwiązanie spakuj do archiwum i prześlij prowadzącemu przez platformę MsTeams (w szczególnych przypadkach na mail).
Rozwiązanie ma zawierać instrukcję dla prowadzącego jak odpalić napisany skrypt.
Prowadzący do odpalenia skryptu będzie stosował tylko odpalenie napisanego skryptu, a nie ciąg poleceń z Docker CLI.
