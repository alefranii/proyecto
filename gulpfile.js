// las dependencias de desarrollo que ocuparemos

var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-minify-css');
var webserver = require('gulp-webserver');

//tarea1 concatena los archivos js convirtiendolos en script.js guardandolos en la carpeta dist.
gulp.task('script', function () {
    gulp.src(['node_modules/jquery/dist/jquery.js', 'node_modules/materialize-css/dist/js/materialize.js', 'assets/js*.js'])
        .pipe(concat('scripts.js'))
        //carpeta dist
        .pipe(gulp.dest('dist/js'));
});


//tarea2  concatena y minifica el archivo main.scss, convirtiendolo en style.min.css. guardandolos en la carpeta dist.
gulp.task('style',function(){
    gulp.src(['node_modules/bootstrap-css/dist/css/bootstrap.css', 'assets/sass/main.scss'])
    .pipe(sass().on('error', sass.logError))
    .pipe(minifyCSS())
    .pipe(concat('style.min.css'))
    .pipe(gulp.dest('dist/css/'));
});

//tarea3 crea un servidor web de desarrollo ejecutado en localhost puerto 8000
gulp.task('webserver', function () {
    gulp.src('../proyecto-tea/')
        .pipe(webserver({
            fallback: 'index.html',
            livereload: true,
            directoryListing: false,
            open: true
        }))
});

//le indicamos al gulp cuales son las tareas asignadas
gulp.task('default', ['script', 'style', 'webserver']);