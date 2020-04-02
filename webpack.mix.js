require('laravel-mix-purgecss');
let mix = require('laravel-mix');
const SVGSpritemapPlugin = require('svg-spritemap-webpack-plugin');
const svgSpriteDestination = "resources/views/partials/svgs.twig";
const svgSourcePath = "resources/svgs/*.svg";
const tailwindcss = require('tailwindcss');


// Do we want notifications?
mix.disableSuccessNotifications();

// Transpile js and sass
mix.js('resources/js/app.js', 'js')
    .sass('resources/sass/theme.scss', 'css');

mix.options({
    processCssUrls: false,
    postCss: [tailwindcss('./tailwind.js')],
});

mix.browserSync({
    proxy: 'domain.com',
    files: [
        'public/js/**/*.js',
        'public/css/**/*.css',
        'resources/views/**/*.html',
    ]
});

// When we need to create svg sprites.
mix.webpackConfig({
    plugins: [
        new SVGSpritemapPlugin(
            svgSourcePath, {
            output: {
                filename: svgSpriteDestination,
                svgo: {
                    removeTitle: true,
                }
            },
            sprite: {
                prefix: false
            }
        }
        )
    ]
});

// Purge css 
if (mix.inProduction()) {

    mix.purgeCss({
        enabled: true,
        content: ['index.html', '**/*.js', '**/*.html', '**/*.vue'],
        whitelist: [
        ],
        whitelistPatterns: [/red$/],
        whitelistPatternsChildren: [/blue$/],
        extensions: ['html', 'js', 'php', 'vue', 'twig'],

    }).sourceMaps().version();

}



/*
 |--------------------------------------------------------------------------
 | Statamic Control Panel Assets
 |--------------------------------------------------------------------------
 |
 | Feel free to add your own JS or CSS to the Statamic Control Panel.
 | https://statamic.dev/extending/control-panel#adding-css-and-js-assets
 |
 */

// mix.js('resources/js/cp.js', 'public/vendor/app/js')
//    .sass('resources/sass/cp.scss', 'public/vendor/app/css');