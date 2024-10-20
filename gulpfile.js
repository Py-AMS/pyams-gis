
const { src, dest, task, watch, parallel } = require('gulp');

const minify = require('gulp-minify');


task('js', function() {
    return src('src/pyams_gis/resources/js/pyams_gis.js')
        .pipe(minify({
            ext: {
                min: '.min.js'
            }
        }))
        .pipe(dest('src/pyams_gis/resources/js/'));
})

exports.minify_js = task('js');


exports.default = function() {
    watch('src/pyams_gis/resources/js/pyams_gis.js',
        task('js'));
};
