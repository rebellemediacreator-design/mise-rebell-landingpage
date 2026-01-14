# White-Label Bundle Landing Page

Professionelle Landing Page für das White-Label Bundle (Azubi-App + Ausbilder-App).

## Features

✅ **Hero-Section** mit Hauptbotschaft (9.436€ Ersparnis)  
✅ **Problem-Section** (Warum brauchen Betriebe diese Lösung?)  
✅ **Lösung-Section** (Azubi-App + Ausbilder-App Features)  
✅ **5 USPs** mit Icons (White-Label, Offline, Lernfortschritt, IHK-konform, Einmalige Investition)  
✅ **ROI-Rechnung** mit Vergleichstabelle  
✅ **Preisgestaltung** (3 Spalten: Kaufpreis, Hosting, Support)  
✅ **Setup-Anleitung** (3 Schritte in 10 Minuten)  
✅ **Call-to-Action** (Kontaktformular)  
✅ **Responsive Design** (Mobile + Desktop)  
✅ **Smooth Scrolling** (Navigation)  
✅ **Animationen** (Fade-in beim Scrollen)

## Technologie-Stack

- **HTML5** - Semantisches Markup
- **CSS3** - Custom Properties (CSS Variables), Flexbox, Grid
- **Vanilla JavaScript** - Keine Frameworks, pure Performance
- **Font Awesome** - Icons
- **Google Fonts** - Inter-Schriftart

## Dateistruktur

```
landing-page-bundle/
├── index.html          # Haupt-HTML-Datei
├── css/
│   └── style.css       # Alle Styles
├── js/
│   └── script.js       # JavaScript-Funktionalität
├── images/             # Bilder (leer, bereit für Ihre Assets)
└── README.md           # Diese Datei
```

## Installation & Deployment

### Lokale Entwicklung

1. **Dateien entpacken**
   ```bash
   unzip landing-page-bundle.zip
   cd landing-page-bundle
   ```

2. **Mit Live Server öffnen**
   - VS Code: Right-click auf `index.html` → "Open with Live Server"
   - Oder einfach `index.html` im Browser öffnen

### Deployment-Optionen

#### Option 1: Netlify (Empfohlen)

1. Gehe zu [netlify.com](https://www.netlify.com)
2. Drag & Drop den `landing-page-bundle` Ordner
3. Fertig! URL erhalten (z.B. `your-site.netlify.app`)

**Vorteile:**
- Kostenlos
- Automatisches HTTPS
- CDN weltweit
- Custom Domain möglich

#### Option 2: GitHub Pages

1. Repository erstellen auf GitHub
2. Dateien hochladen
3. Settings → Pages → Source: `main` branch
4. URL: `https://username.github.io/repo-name`

**Vorteile:**
- Kostenlos
- Versionskontrolle
- Einfache Updates

#### Option 3: Eigener Webserver

1. Dateien per FTP/SFTP hochladen
2. In `public_html` oder `www` Ordner kopieren
3. Fertig!

**Vorteile:**
- Volle Kontrolle
- Eigene Domain
- Backend-Integration möglich

## Anpassungen

### Kontaktdaten ändern

**Datei:** `index.html`  
**Zeile:** ~450-470 (Contact Section)

```html
<div class="contact-item">
    <i class="fas fa-envelope"></i>
    <span>info@ihre-domain.de</span> <!-- HIER ÄNDERN -->
</div>
<div class="contact-item">
    <i class="fas fa-phone"></i>
    <span>+49 (0) 123 456789</span> <!-- HIER ÄNDERN -->
</div>
<div class="contact-item">
    <i class="fas fa-globe"></i>
    <span>www.ihre-domain.de</span> <!-- HIER ÄNDERN -->
</div>
```

### Farben anpassen

**Datei:** `css/style.css`  
**Zeile:** 9-18 (CSS Variables)

```css
:root {
    --color-primary: #0052CC;      /* Hauptfarbe (Blau) */
    --color-secondary: #333333;    /* Sekundärfarbe (Dunkelgrau) */
    --color-text: #1A1A1A;         /* Textfarbe */
    --color-text-light: #666666;   /* Helle Textfarbe */
    --color-bg: #FFFFFF;           /* Hintergrund */
    --color-bg-light: #F2F2F2;     /* Heller Hintergrund */
    --color-bg-dark: #1A1A1A;      /* Dunkler Hintergrund */
    --color-border: #E0E0E0;       /* Rahmenfarbe */
}
```

### Logo hinzufügen

**Datei:** `index.html`  
**Zeile:** ~20 (Navigation)

```html
<div class="nav-brand">
    <img src="images/logo.png" alt="Logo" style="height: 40px;"> <!-- LOGO HINZUFÜGEN -->
    <span>White-Label Bundle</span>
</div>
```

### Kontaktformular Backend-Integration

**Datei:** `js/script.js`  
**Zeile:** ~40-70 (Contact Form Handling)

Aktuell wird das Formular nur in der Console geloggt. Für echte Backend-Integration:

```javascript
// Beispiel: Integration mit eigenem Backend
fetch('https://ihre-domain.de/api/contact', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData)
})
.then(response => response.json())
.then(data => {
    alert('Vielen Dank für Ihre Anfrage!');
    contactForm.reset();
})
.catch(error => {
    alert('Fehler beim Senden. Bitte versuchen Sie es erneut.');
});
```

**Alternativen:**
- **Formspree** (formspree.io) - Einfachste Lösung, kostenlos
- **Netlify Forms** - Wenn auf Netlify gehostet
- **EmailJS** (emailjs.com) - E-Mail direkt vom Frontend

## SEO-Optimierung

### Meta-Tags hinzufügen

**Datei:** `index.html`  
**Zeile:** ~6 (Head-Bereich)

```html
<!-- Open Graph (Facebook, LinkedIn) -->
<meta property="og:title" content="White-Label Bundle: Azubi-App + Ausbilder-App">
<meta property="og:description" content="Digitales Berichtsheft für die Gastronomie. Spart bis zu 9.436€ über 3 Jahre.">
<meta property="og:image" content="https://ihre-domain.de/images/og-image.jpg">
<meta property="og:url" content="https://ihre-domain.de">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="White-Label Bundle: Azubi-App + Ausbilder-App">
<meta name="twitter:description" content="Digitales Berichtsheft für die Gastronomie. Spart bis zu 9.436€ über 3 Jahre.">
<meta name="twitter:image" content="https://ihre-domain.de/images/twitter-image.jpg">
```

### Favicon hinzufügen

**Datei:** `index.html`  
**Zeile:** ~6 (Head-Bereich)

```html
<link rel="icon" type="image/png" sizes="32x32" href="images/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="images/favicon-16x16.png">
<link rel="apple-touch-icon" sizes="180x180" href="images/apple-touch-icon.png">
```

## Performance-Optimierung

### Bilder optimieren

1. **Format:** WebP statt PNG/JPG (kleinere Dateigröße)
2. **Größe:** Maximale Breite 1920px (für Retina-Displays)
3. **Kompression:** TinyPNG.com oder Squoosh.app

### Lazy Loading

**Datei:** `index.html`

```html
<img src="images/hero-image.jpg" alt="Hero" loading="lazy">
```

### CSS/JS Minifizierung

**Für Production:**
- CSS: cssnano.co
- JS: terser.org

## Browser-Kompatibilität

✅ Chrome 90+  
✅ Firefox 88+  
✅ Safari 14+  
✅ Edge 90+  
✅ Mobile Browsers (iOS Safari, Chrome Mobile)

## Lizenz

Diese Landing Page ist Teil des White-Label Bundles und unterliegt der gleichen Lizenz.

**Erlaubt:**
- Nutzung für eigene Zwecke
- Anpassung an eigenes Branding
- Hosting auf eigenen Servern

**Nicht erlaubt:**
- Weiterverkauf als Template
- Entfernen von Urheberrechtsvermerken

## Support

Bei Fragen oder Problemen:
- E-Mail: [Ihre Support-E-Mail]
- Telefon: [Ihre Support-Telefonnummer]

## Changelog

### Version 1.0.0 (2025-01-14)
- ✅ Initiale Version
- ✅ Responsive Design
- ✅ Kontaktformular
- ✅ ROI-Rechner
- ✅ Animationen

---

**Viel Erfolg mit Ihrer Landing Page!** 🚀
