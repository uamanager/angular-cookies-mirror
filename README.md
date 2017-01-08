# angular-cookies-mirror
**Useful for `cordova` applications where cookies are not allowed**

The `cookiesMirror` module provides you to use cookies even if they are restricted in browser or platform.
Module is tracking all cookies that you specified from responses header `Set-cookie`, keep them in `localStorage` and sends in every request via `Cookie` header.  


## Install

You can install this package with `bower`.

### bower

```shell
bower install angular-cookies-mirror
```

Add a `<script>` to your `index.html`:

```html
<script src="/bower_components/angular-cookies-mirror/angular-cookies-mirror.js"></script>
```

Then add `cookiesMirror` as a dependency for your app:

```javascript
(function(){
    angular.
        module('myApp', ['cookiesMirror']);
})();
```
## Usage

Add to provider config cookies name those you want to keep:
 
```javascript
(function(){
    angular.
        module('myApp').
        config(cookiesMirrorConfig);
    
    cookiesMirrorConfig.$inject = ['$cookiesMirrorProvider'];
    
    function cookiesMirrorConfig($cookiesMirrorProvider){
        $cookiesMirrorProvider.track(['cookieName1', 'cookieName2']);
    }
})();
```
you can use it also in this way: 

```javascript
(function(){
    angular.
        module('myApp').
        config(cookiesMirrorConfig);
    
    cookiesMirrorConfig.$inject = ['$cookiesMirrorProvider'];
    
    function cookiesMirrorConfig($cookiesMirrorProvider){
        $cookiesMirrorProvider.track('cookieName');
    }
})();
```

or like this:

```javascript
(function(){
    angular.
        module('myApp').
        config(cookiesMirrorConfig);
    
    cookiesMirrorConfig.$inject = ['$cookiesMirrorProvider'];
    
    function cookiesMirrorConfig($cookiesMirrorProvider){
        $cookiesMirrorProvider.track('cookieName1', 'cookieName2');
    }
})();
```

###MIT License

Copyright (c) 2017 uamanager

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
