# Travel Destinations Website
A modern, responsive two-page travel website showcasing beautiful destinations around the world.

---

## Project Overview
This project is a two-page travel blog website designed using CSS Grid, Flexbox, and SASS/SCSS. It features a clean UI, dynamic layouts, and a modular SCSS structure for better maintainability.  

---

## Features
- Fully Responsive design using CSS Grid and Flexbox.  
- SCSS Features: Variables, Nesting, Mixins, Functions, Interpolation, Placeholder Selectors, Extend, Maps, Loops, and more.  
- Interactive UI with hover effects, buttons, and animations.  
- Modular SCSS Architecture for easy scalability.  

---

## Project Structure
```
travel-website
│── css/
│   ├── styles.css (Compiled CSS)
│── scss/
│   ├── main.scss (Main SCSS file)
│   ├── layout/
│   │   ├── _grid.scss (CSS Grid styles)
│   │   ├── _hero.scss (Hero section)
│   ├── components/
│   │   ├── _buttons.scss (Button styles)
│   │   ├── _cards.scss (Destination card styles)
│   ├── utilities/
│   │   ├── _variables.scss (Global variables)
│   │   ├── _mixins.scss (Reusable mixins)
│   │   ├── _functions.scss (Custom SCSS functions)
│   │   ├── _placeholders.scss (Reusable placeholder styles)
│── images/ (Project images)
│── index.html (Homepage)
│── destination.html (Destinations page)
│── README.md (Project documentation)
```

---

## SCSS Features Implemented
This project follows best practices in SCSS by utilizing the following features:

### 1. Variables  
Defined reusable values for colors, fonts, and spacing in `_variables.scss`.  
```scss
$primary-color: #007bff;
$text-color: #333;
$spacing: 20px;
```

### 2. Nesting  
Used nesting to keep styles organized and hierarchical.  
```scss
.destination-card {
    background: white;
    border-radius: 10px;

    img {
        width: 100%;
        border-radius: 10px;
    }
}
```

### 3. Mixins  
Created reusable mixins for box shadows, media queries, and flex utilities in `_mixins.scss`.  
```scss
@mixin box-shadow {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
```

### 4. Functions  
Defined a function to dynamically adjust color brightness in `_functions.scss`.  
```scss
@function darken-color($color, $amount) {
    @return darken($color, $amount);
}
```

### 5. Placeholder Selectors (`%`)  
Used placeholders to avoid repeated styles in `_placeholders.scss`.  
```scss
%card-style {
    background: white;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
```

### 6. Interpolation (`#{$variable}`)
Used dynamic properties in SCSS.  
```scss
$size: 50px;
.button {
    width: #{$size};
    height: #{$size};
}
```

### 7. Extend (`@extend`)  
Used to share styles across multiple elements without duplicating CSS.  
```scss
.card {
    @extend %card-style;
    padding: 20px;
}
```

### 8. Maps and Loops  
Used maps and loops to dynamically generate styles for button colors.  
```scss
$button-colors: (
    primary: #007bff,
    success: #28a745,
    danger: #dc3545
);

@each $name, $color in $button-colors {
    .btn-#{$name} {
        background-color: $color;
        color: white;
    }
}
```

### 9. Conditionals (`@if` and `@else`)  
Used to conditionally apply styles based on breakpoints.  
```scss
@mixin responsive($size) {
    @if $size == small {
        @media (max-width: 600px) { @content; }
    } @else if $size == medium {
        @media (max-width: 900px) { @content; }
    }
}

.container {
    @include responsive(small) {
        padding: 10px;
    }
}
```

### 10. Calculations (`calc()`)  
Used SCSS math functions for dynamic spacing and layout adjustments.  
```scss
$base-spacing: 20px;

.container {
    padding: calc($base-spacing * 1.5);
}
```

---

## How to Set Up and Run the Project

### 1. Clone the Repository

### 2. Install Dependencies
Ensure you have Node.js and SASS installed. If not, install them:
```bash
npm install -g sass
```

### 3. Compile SCSS to CSS
Run the following command to compile SCSS files into CSS:
```bash
sass scss/main.scss css/styles.css --watch
```
This watches for changes and updates the CSS in real time.

### 4. Open in Browser
Simply open `index.html` in your web browser.

---

