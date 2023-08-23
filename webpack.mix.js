const mix = require('laravel-mix');


mix.disableNotifications()
.options({processCssUrls: false})



/* ----------------------------
Compile websiteBuilder script
------------------------------ */

// Template related global css
.copy('websiteBuilder/develop/css/global.css','build/websiteBuilder/dist/global.css')

// websiteBuilder builder css
.sass('websiteBuilder/develop/sass/websiteBuilder.scss','build/websiteBuilder/dist/gram.min.css')

// Template related global js
.copy('websiteBuilder/develop/js/global.js','build/websiteBuilder/dist/global.js')

// websiteBuilder builder js
.js('websiteBuilder/develop/js/websiteBuilder.js','build/websiteBuilder/dist/gram.min.js')


// Comment this off when there is no change for websiteBuilder fonts and svg.
// const assets_data = [
//     'fonts',
//     'svg'
// ]
// for(let asset of assets_data){
//     mix.copyDirectory(`websiteBuilder/develop/${asset}`,`websiteBuilder/dist/${asset}`)
// }