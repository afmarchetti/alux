#ALUX framework

The Semantic Framework for Awesome Light User Experience by [MarchettiDesign.net](http://www.marchettidesign.net/)


###A Light Framework (20K) for creating amazing Responsive Web Apps.
Presentation, Examples & Docs: [http://afmarchetti.github.io/alux/](http://afmarchetti.github.io/alux/)

The Framework is build with HTML/CSS and pure Vanilla Javascript.
No dependencies, no jQuery but:
Grids, Sliders, Menus (with Animations), Typography, Forms, Buttons & more.

Easy, Light, Fast, Customizable.


## Examples
- [One Page Landing](http://afmarchetti.github.io/alux/home-semantic-onepage.html) – This is Alux most basic implementation
- [Home with Slider](http://afmarchetti.github.io/alux/home-semantic-slider.html) – Using the Slider Based on [Wallop](https://github.com/peduarte/wallop) library

## Benefits
- Mobile first
- Transitions/Animations are all in CSS
- Minimal JavaScript
- Flexible & Scalable
- 20KB minified
- Dependency free

## Usage
Once you have downloaded Alux, the first thing you need to do is include the CSS and the JavaScript.

### CSS
```html
<head>
  <link rel="stylesheet" href="path/to/alux.min.css">
</head>
```

### JavaScript
```html
<script src="path/to/alux.min.js"></script>
```

##Docs
For all the Details & the Docs please visit:[http://afmarchetti.github.io/alux/](http://afmarchetti.github.io/alux/)

## Credits
For the Slider Alux use Wallop Library by Pedro Duarte: (http://pedroduarte.me/wallop)
The Grid System is an evolution of a Chris Coyer Article: (http://css-tricks.com/dont-overthink-it-grids/)

## Licensing
MIT © 2016 [Andrea Marchetti](http://www.marchettidesign.net/)














ALUX is a Superlight Framework (less than 10K) for create amazing responsive application.

The framework is build with HTML/CSS and pure Javascript.

Grid, Animated Navigation, Typography, Forms, Buttons & more.
> Easy, Light, Customizable

# wallop
[![Build Status](https://travis-ci.org/peduarte/wallop.svg)](https://travis-ci.org/peduarte/wallop) [![npm version](https://badge.fury.io/js/wallop.svg)](http://badge.fury.io/js/wallop)

### Much more than just a slider
wallop is a minimal 4kb library for showing & hiding things.

> ❗️**Important note**️<br>
> Version 1 of *WallopSlider* is not compatible with version 2+.<br>
> If you are still using v1, please note that I am no longer supporting it.<br>
> Documentation, etc. has been moved to [this branch](https://github.com/peduarte/wallop/tree/v1).

## About
In a nutshell, wallop takes a collection of HTML elements and Previous & Next buttons, and adds helper HTML classes in the correct elements based on whether you want to navigate forwards or backwards.

It basically just add the right classes in the right places at the right time.

With those classes, you can do an infinite [number of things](#real-life-examples), controlling what's shown or hidden with CSS.

## Examples
- [Basic](http://codepen.io/peduarte/pen/pjzYpG) – This is wallop's most basic implementation
- [Fade animation](http://codepen.io/peduarte/pen/RWbORJ) – Using one of the [available animations](#adding-animations)
- [Custom pagination](http://codepen.io/peduarte/pen/bVbZLK) – Create your own pagination by levaragin the power of wallops' API and CustomEvents

I've created a collection on **[Codepen](http://codepen.io/collection/DQWmxZ/)** with a few more examples, go take a 👀!

## Benefits
- Mobile first
- Progressive enhancement
- Transitions/Animations are all in CSS
- Minimal JavaScript
- Flexible & Scalable
- Custom events and API available
- 4KB minified
- Dependency free
