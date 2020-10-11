const mix = require('laravel-mix');
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
    postCss: [tailwindcss('./tailwind.config.js')],
});

mix.browserSync({
    proxy: process.env.APP_URL,
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

mix.version();

// Purge css 
if (mix.inProduction()) {
    mix.sourceMaps().version();
}