# Portfolion README vertaisarviointia varten

## HTML
### 1. Basic HTML structure is present
- HTML-tiedostoja selatessa helposti huomattavissa

### 2. HTML structure with clear content differentiation (headings, paragraphs, lists).
- Lähes kaikki HTML-koodi nettisivulla on jaoteltu selkeästi eri elementteihin

### 3. Use of forms, links, and media.
- Form löytyy contact.html-tiedostosta
- Linkkejä löytyy esimerkiksi yläpalkista, joka on samanlainen sivuston jokaisessa html-tiedostossa
- Mediaa löytyy esimerkiksi projects.html-tiedoston videoista tai kissat.html-tiedoston gifeistä ja audiosta

### 4. Tables are effectively used.
- Table löytyy etusivun index.html-tiedostosta taitotaulukon muodossa

### 5. Consistent use of semantic HTML throughout, ensuring better structure and understanding of the content.
- Semantic HTML:n section-, header- ja nav-elementtejä on käytetty runsaasti sivuston kaikissa HTML-tiedostoissa
## CSS
### 1. Basic CSS styling (colors, fonts).
- Erilaisia värejä ja fontteja on käytetty nettisivua tehdessä ja ne voi tarkastaa styles.css-tiedostosta

### 2. Use of classes and IDs to style specific elements.
- Esimerkiksi section-elementtien tyylit on tehty class selectoria käyttämällä

### 3. Implementation of responsive design elements.
- Nettisivu toimii puhelimella normaalisti, elementit skaalautuvat ikkunan kokoa muuttaessa tai esim. puhelinta käyttäessä siten, että kaikki teksti ja media on helposti luettavassa muodossa

### 4. Use of layouts for advanced user interfaces (arrays, float, flexbox, css grid)
- Flexiä on käytetty esimerkiksi yläpalkissa, sekä videosoittimessa

### 5. Styling demonstrates a strong graps of layout principles, aesthetics and user experience.
- Omasta mielestäni nettisivu on käyttäjäystävällinen, sekä suht siistin näköinen

## JavaScript Basics
### 1. Simple interactions (like alerts on button click)
- Etusivun index.html:n Click me -nappi on tehty alertteja käyttäen, JavaScript koodit löytyvät script.js-tiedostosta

### 2. Multiple event listeners and basic DOM manipulations.
- Event listenereitä on käytetty esimerkiksi index.html:n napeissa ja projects.html:n videosoittimessa
- Ajastinta on käytetty esimerkiksi kissat.html:n GIFien vaihtelussa
- Muita DOM-manipulaattoreita on käytetty myös esimeriksi projects.html:n videoiden toistossa

### 3. Use of arrays, objects and functions.
- Arrayta on käytetty index.html:n satunnaishenkilögeneraattorissa
- Objekteja on käytetty index.html:n satunnaishenkilögeneraattorissa
- Funktioita on käytetty esimerkiksi index.html:n satunnaishenkilögeneraattorissa, sekä kissat.html:n GIFien vaihtelussa

### 4. Advanced logic, looping through data, and dynamic DOM updates.
- Esimerkiksi getElementById-metodia on käytetty projects.html-tiedoston videosoittimessa, sekä index.html-tiedoston Click me -napissa, koodi löytyy script.js-tiedostosta

### 5. Consistent use of Object-Oriented JavaScript principles.
- Konstruktoreita on käytetty esimerkiksi index.html:n satunnaishenkilögeneraattorissa

## Asynchronous operations
### 1. Use of timers.
- Ajastimia on käytetty kissat.html:n GIFien vaihtamisessa, koodi löytyy script.js-tiedostosta

### 2. Succesful implementation of an AJAX call or Fetch.
- Fetchiä on käytetty index.html:n satunnaishenkilögeneraattorissa satunnaisen etunimen luomiseen, koodi löytyy script.js-tiedostosta

### 3. Data from the asynchronous call is displayed on the webpage.
- Ylemmässä kohdassa mainittu Fetch palauttaa satunnaisen etunimen joka näytetään nettisivulla.

### 4. Error handling is implemented (for failed API calls, etc.).
- Contact.html:n contact form antaa virheen, jos formissa on tyhjiä kenttiä, tai sähköpostiosoite on viallinen. Index.html:n satunnaishenkilögeneraattori antaa myös virheen jos API Call etunimen hakemiseen epäonnistuu.

### 5. Effective use of asynchronous data to enhance user experience (like filtering, sorting).
-