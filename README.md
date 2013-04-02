# ColorDev Extension For Google Chrome

Customize the color scheme of the code that appears in stackoverflow.

This is not a extension who customize the entire page. The main purpose is to beautify the code that you read from the stackoverflow.

Github, bitbucket and more are coming.

## Install

You can install the extension from the [URL of the webstore](https://chrome.google.com/webstore/detail/color-dev/kjccccpbheobmffklpejpgjapcbnlkng)

Another option, is install locally,downloading the zip file and loading in the chrome.

## How it  Works?

This Lite extension inject the CSS of the pages in stackoverflow, changing the colors of the code.

When a user choose an theme, their theme is save in the localstorage.

For now, only two themes are available (Solarized light-Dark).

## Notes about the CSS of stackoverflow

The next list represents the CSS classes what I observed in stackoverflow:

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


As you can see, stackoverflow group a lot of elements in the same class, i.e the class pun.

You can create your own theme adding style to the classes.

# Todo:

* Add more schemes
* Customize GitHub Code
* Customize Bitbucket Code
* Maybe add an option that allow to the user load the scheme of Sublime Text, and convert to css.
* ...

## Note

Apologies for my Tarzan English.

## Credits

Created by [Rodrigo Campos](http://twitter.com/rodripcg).