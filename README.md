# cookie-list

This jQuery extension is for work with cookie files as with javascript list.

## Installation

For work with cookie-list.js add following libraries: jQuery, jquery.cookie.js

<script src="cookie-list.js" type="text/javascript"></script>

## Usage

Object initialization:
var cookie = $.fn.cookieObj('yourCookieName');

Add a new list to array:
cookie.add({key1: 'value', ..........});

Remove list by index from array:
cookie.remove(index);

Get all lists from array:
cookie.listAll();

Get list by index:
cookie.indexOf(index);

Delete cookie file:
cookie.clear();