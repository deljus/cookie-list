# cookie-list

This jQuery extension is for work with cookie files as with javascript list.

## Installation

For work with cookie-list.js add following libraries: jQuery, jquery.cookie.js
```html
<script src="cookie-list.js" type="text/javascript"></script>
```

## Usage

Object initialization:
```javascript
var cookie = $.fn.cookieObj('yourCookieName');
```

Add a new list to array:
```javascript
cookie.add({key1: 'value', ..........});
```

Remove list by index from array:
```javascript
cookie.remove(index);
```

Get all lists from array:
```javascript
cookie.listAll();
```

Get list by index:
```javascript
cookie.indexOf(index);
```

Delete cookie file:
```javascript
cookie.clear();
```
