<img src="http://coderslab.pl/wp-content/uploads/2016/03/logo-v2.png" align="right" style="width:150px; margin-top:45px"/>

# Zaawansowany HTML i CSS - Snippety
> Kilka ważnych informacji


Przed przystąpieniem do rozwiązywania zadań przeczytaj poniższe wskazówki

#### 1. Jak zrobić prosty formularz logowania?
Zwróć uwagę jakie pola zostay wykorzystane do jego stworznia.

```html
<form class="form">
    <fieldset>
        <legend>Logowanie</legend>

        <input type="email" placeholder="Email">
        <input type="password" placeholder="Password">

        <label for="remember-me">
            <input id="remember-me" type="checkbox"> Zapamiętaj mnie
        </label>

        <button type="submit" class="button"></button>
    </fieldset>
</form>
```

#### 2. Jak zrobić prosty formularz?
