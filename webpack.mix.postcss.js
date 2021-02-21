const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');


// Do we want notifications?
mix.disableSuccessNotifications();

// Transpile js and sass
mix.js('resources/js/app.js', 'js');
mix.css('resources/css/app.css', 'css');
mix.css('resources/css/utilities.css', 'css');
mix.combine(['./public/css/app.css', './public/css/utilities.css'], './public/css/themes.css');

mix.options({
    processCssUrls: false,
    postCss: [
        require('postcss-import'),
        tailwindcss('./tailwind.config.js'),
        require('postcss-nested'),
        require('postcss-preset-env')({ stage: 0 })
    ],
});

mix.browserSync({
    proxy: process.env.APP_URL,
    files: [
        'public/js/**/*.js',
        'public/css/**/*.css',
        'resources/views/**/*.html',
    ]
});


mix.version();

// Purge css 
if (mix.inProduction()) {
    mix.sourceMaps().version();
}


// const mix = require('laravel-mix');
// /*
//  |--------------------------------------------------------------------------
//  | Mix Asset Management
//  |--------------------------------------------------------------------------
//  |
//  | Mix provides a clean, fluent API for defining some Webpack build steps
//  | for your Laravel applications. By default, we are compiling the CSS
//  | file for the application as well as bundling up all the JS files.
//  |
//  */

// mix.js('resources/js/site.js', 'public/js')



// if (mix.inProduction()) {
//    mix.version();
// }

/*
 |--------------------------------------------------------------------------
 | Statamic Control Panel
 |--------------------------------------------------------------------------
 |
 | Feel free to add your own JS or CSS to the Statamic Control Panel.
 | https://statamic.dev/extending/control-panel#adding-css-and-js-assets
 |
 */

// mix.js('resources/js/cp.js', 'public/vendor/app/js')
//    .postCss('resources/css/cp.css', 'public/vendor/app/css', [
//     require('postcss-import'),
//     require('tailwindcss'),
//     require('postcss-nested'),
//     require('postcss-preset-env')({stage: 0})
// ])
