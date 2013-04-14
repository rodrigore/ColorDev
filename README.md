# ColorDev Extension For Google Chrome

<p align="center">
  <img src="https://dl.dropbox.com/u/7325499/banner.jpg" alt="ColorDev Banner"/>
</p>

Customize the color scheme of the code that appears in stackoverflow.

This is not an extension that customize the entire page. The main purpose is to beautify the code that you read from stackoverflow site.

Github, bitbucket and more others are coming soon.

## Installation

You can install this extension from the [URL of the webstore](https://chrome.google.com/webstore/detail/color-dev/kjccccpbheobmffklpejpgjapcbnlkng)

Another option, is to install locally downloading the .zip file and loading it on Chrome.

## How it works?

This Lite extension injects CSS in the pages of stackoverflow, changing the colors of the code.

When users choose a theme, their theme is saved in the localstorage.

## List of themes available

### Solarized light

![Solarized light](https://raw.github.com/rodrigore/colordev/master/screenshots/solarized-light.png)

### Solarized Dark

![Solarized Dark](https://raw.github.com/rodrigore/colordev/master/screenshots/solarized-dark.png)

### Blackboard

![Blackboard](https://raw.github.com/rodrigore/colordev/master/screenshots/blackboard.png)

### Sunburst

![Sunburst](https://raw.github.com/rodrigore/colordev/master/screenshots/sunburst.png)

### Laravel Dark theme

![Laravel Dark theme](https://raw.github.com/rodrigore/colordev/master/screenshots/laravel-dark.png)

### Tomorrow Night Bright

![Tomorrow Night Bright](https://raw.github.com/rodrigore/colordev/master/screenshots/tomorrow-night-bright.png)

### Monokai Bright

![Monokai Bright](https://raw.github.com/rodrigore/colordev/master/screenshots/monokai-bright.png)

### GitHub

![GitHub](https://raw.github.com/rodrigore/colordev/master/screenshots/github.png)

### Rails Cast

![Rails Cast](https://raw.github.com/rodrigore/colordev/master/screenshots/rails-cast.png)

## Notes about the CSS of stackoverflow

The next list represents the CSS classes what I have observed in stackoverflow:

* **typ** => `types` => String, Boolean, Test, Scanner, Date, etc.

* **pun** => `Punctuation` => ; + { } . [ ] ! ?  ( )

* **dec** => `Declaration`: doctype HTML

* **pln** => `Plain text`

* **kwd** => `Keywords`

* **lit** => `Literal`

* **com**  => `Commentary`

* **tag** => `Tag HTML`

* **atn** => `Attribute`

* **atv** => `Attribute value`


As you can see, stackoverflow groups a lot of elements in the same class, e.g. class pun.

You can create your own theme just adding style to the classes.

## Credits

Created by [Rodrigo Campos](http://twitter.com/rodripcg).
