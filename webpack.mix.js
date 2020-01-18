let mix = require('laravel-mix');
require('laravel-mix-purgecss');
let SVGSpritemapPlugin = require('svg-spritemap-webpack-plugin');
const svgSpriteDestination = "../addons/williamastrom/pixney/rocket-theme/resources/views/partials/svgs.twig";
const svgSourcePath = "addons/williamastrom/pixney/rocket-theme/resources/svgs/*.svg";

mix
    .disableSuccessNotifications()
    .js('addons/williamastrom/pixney/rocket-theme/resources/js/app.js', 'js')
    .sass('addons/williamastrom/pixney/rocket-theme/resources/sass/theme.scss', 'css')

    //   .webpackConfig({
    //     plugins: [
    //        new SVGSpritemapPlugin(
    //           svgSourcePath, {
    //              output: {
    //                 filename: svgSpriteDestination,
    //                 svgo: {
    //                    removeTitle: true,
    //                 }
    //              },
    //              sprite: {
    //                 prefix: false
    //              }
    //           }
    //        )
    //     ]
    //  })

    .sourceMaps()
    .version()
    .browserSync({
        proxy: 'stengarde.test',
        files: [
            'public/js/**/*.js',
            'public/css/**/*.css',
            'addons/stengarde/pixney/stengarde-theme/resources/views/**/*.twig',
            'addons/williamastrom/pixney/**/*.twig'
        ]
    });




if (mix.inProduction()) {
    mix.purgeCss({
        enabled: true,

        whitelist: [
            'o-navbar--shadow',
            'o-navbar--white-bg',
            'pm--toggle',
            'pm--open',
            'pm--open-menu',
            'in-viewport'
        ],

        globs: [
            path.join(__dirname, 'addons/stengarde/pixney/stengarde-theme/resources/**/*.twig'),
            path.join(__dirname, 'addons/stengarde/pixney/stengarde-theme/resources/**/*.vue'),

        ],

        extensions: ['html', 'js', 'php', 'vue', 'twig'],

    })
        .version();
}







