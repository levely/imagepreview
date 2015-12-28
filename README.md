# imagepreview
This is the image preview using the "FileReader" class.
It is a jQuery plugin.

## Usage

## script
```html
<script type="text/javascript" src="http://code.jquery.com/jquery-2.1.4.min.js"></script>
<script type="text/javascript" src="../src/imagepreview.js"></script>
```
## js
```javascript
$(function() {
    $('#preview1').imagepreview({
        input: '[name="testimage1"]',
        reset: '#reset1',
        preview: '#preview1'
     });
 });
```

## markup
```html
<body>
    <input type="file" name="testimage1" />
    <input type="button" id="reset1" value="reset1" />
    <div id="preview1"></div>
</body>
```

## Author
Masayuki Yoshii (Levely)
