<img alt="Logo" src="http://coderslab.pl/wp-content/themes/coderslab/svg/logo-coderslab.svg" width="400">

# Zaawansowany HTML i CSS - zadania domowe

> Kod wpisz w odpowiednim pliku, zgodnie z poleceniem zadania. BARDZO WAŻNE - Wasze zadania są sprawdzane przy pomocy automatycznego systemu. Żeby odpowiedzi zostały uznane za poprawne, wszystkie rozwiązane zadania muszą wyświetlać dokładnie to, co jest podane w treści zadania!

## Dzień 1

### Ćwiczenie 1. Stylowanie list

W pliku __index.html__ w katalogu __Dzien_1__ znajduje się gotowy kod. Ostyluj go według podanych wytycznych:

* Dołącz do strony lokalnie font [Roboto](https://fonts.google.com/specimen/Roboto). Użyj do tego znanego Ci narzędzia. Z wyżej wymienionej rodziny czcionek podłącz następujące:
    * Regular
    * Bold
    * Light
* Ustaw __wszystkim listom__ wysokość na ```500px``` i szerokość na ```300px``` i wyłącz stylowanie list,
* Ustaw __wszystkim elementom__ wszystkich list wysokość na ```50px``` i szerokość na ```300px```,
* Dla każdego tekstu w każdym elemencie listy ustaw wysokość linii na ```50px``` oraz wagę fontu na ```30px```. Dodatkowo wyśrodkuj ten tekst,
* Pierwszej liście ustaw kolor tła ```#FF00A5``` a jej elementom kolor tła ```#36FF74```,
* Drugiej liście ustaw kolor tła ```#E8370E``` a jej elementom kolor tła ```#365FFF```,
* Trzeciej liście ustaw kolor tła ```#FFEC0C``` a jej elementom kolor tła ```#0DFFDE```,
* Ustaw dla całego dokumentu biały kolor czcionki,
* Pierwszej liście ustaw wagę czcionki na ```400```,
* Drugiej liście ustaw wagę czcionki na ```700```,
* Trzeciej liście ustaw wagę czcionki na ```300```.

## Dzień 2

### Ćwiczenie 1. Miraż

Spójrz na plik __index.html__ w katalogu __Dzien_2__. Nie zmieniając kodu HTML i używając tylko CSS uzyskaj wynik jak na załączonym obrazku:

![Mirage](Dzien_2/images/mirage.png)

Wytyczne:
* Element o klasie __layer-1__ ma ```800px``` szerokości i wysokości oraz kolor tła ```#FF1106```,
* Element o klasie __layer-2__ ma ```600px``` szerokości i wysokości oraz kolor tła ```#FF5200```,
* Element o klasie __layer-3__ ma ```400px``` szerokości i wysokości oraz kolor tła ```#FF8B05```,
* Element o klasie __layer-4__ ma ```200px``` szerokości i wysokości oraz kolor tła ```#FFCC0D```,
* Elementy o klasach __layer-2__, __layer_3__ oraz __layer-4__ są wyśrodkowane względem swojego rodzica,
* Przy użyciu pseudoelementów ```before``` i ```after``` stwórz i dodaj do elementów o klasach
 __layer-2__, __layer_3__ oraz __layer-4__ kwadraty o bokach ```100px``` i odpowiednich kolorach. Ustaw je w odpowiednich miejsach (_Podpowiedź: przesunięcie zawsze będzie wynosiło ```50px```, oczywiście w odpowiednim kierunku._).


## Dzień 3

### Ćwiczenie 1. Prosta strona

Stwórz stronę jak na załączonym obrazku:

![Website](Dzien_3/images/site.jpg)

* Zacznij od zresetowania wszystkich właściwości CSS zależnych od przeglądarki (prosty reset wystarczy).
* Dołącz do strony font [Bungee Inline](https://fonts.google.com/specimen/Bungee+Inline). Podłącz rodzinę czcionek bezpośrednio z Google Fonts.
* Do body dodaj 3 elementy:
    * ```header```
    * ```section```
    * ```footer```
* Stwórz klasę __container__. Ustaw jej szerokość ```800px``` i spraw, żeby zawsze była wyśrodkowana w poziomie.
* Ustaw elementowi ```header``` szerokość ```100%``` oraz wysokość ```700px``` i użyj pliku __concert.jpg__ z katalogu __images__ jako tła.
* Niech tło w elemencie ```header``` zawsze będzie wyśrodkowane i zawsze odpowiednio rozciągnięte aby pokryć cały element (użyj odpowiednich wartości przy właściwościach ```background-size``` i ```background-position```).
* Wewnątrz elementu ```header``` umieść tekst (wykorzystaj odpowiedni semantyczny element), wyśrodkuj go w pionie i poziomie względem rodzica i nadaj mu odpowiednie właściwości:
    * waga czcionki na ```700```,
    * wielkość czcionki na ```50px```,
    * kolor ustaw na ```#FFFFFF```
* Ustaw elementowi ```section``` szerokość ```100%``` oraz wysokość ```350px``` i kolor tła ```#FFFFFF```.
* W pliku __text.txt__ w katalogu __Dzien_3__ jest tekst, jaki należy umieścić wewnątrz elementu ```section```.
* Pamiętaj, że tekst w elemencie ```section``` musi zostać ograniczony przez odpowiedni element z klasą __containter__.
* Odsuń tekst od góry o ```100px``` i nadaj mu odpowiednie właściwości:
    * waga czcionki ```400```,
    * wielkość czcionki ```22px```,
    * wysokość linii ```26px```
* Ustaw elementowi ```footer``` szerokość ```100%``` i wysokość ```200px``` oraz kolor tła ```#000000```.
* Tekst w elemencie ```footer``` jest wyśrodkowany w pionie i przesunięty maksymalnie w prawo (pamiętaj, że jest ogarniczony przez elemenet z klasą __container__).
* Tekst w elemencie ```footer``` ma następujące właściwości:
    * waga czcionki ```400```,
    * wielkość czcionki ```20px```,
    * kolor czcionki ```#FFFFFF```.
