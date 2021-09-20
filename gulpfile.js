/*!
 * Themeix Gulp Package (https://themeix.com/)
 * Copyright 2016-2020 themeix team
 * Licensed under MIT
 * Available Main Task Command : production, gulp, zip
 */

(function () {
    'use strict';
    /*
    =============================
        Let's see all CSS/JS Plugin into [package.json]
    =============================
    */

    var File_Name = 'html-clarizent.zip';
    var CSS_Files = [
 
   //  './assets/css/tailwind.css',
       './node_modules/magnific-popup/dist/magnific-popup.css',
       './node_modules/tailwindcss/tailwind.css',
       './node_modules/jquery-nice-select/css/nice-select.css',
       './node_modules/slick-carousel/slick/slick.css',
      './node_modules/aos/dist/aos.css', 
       './assets/css/custom.css',
    ];
    var JS_Files = [
        './node_modules/jquery/dist/jquery.min.js',
        './node_modules/jquery.easing/jquery.easing.min.js',
        './node_modules/jquery-nice-select/js/jquery.nice-select.min.js', 
        './node_modules/slick-carousel/slick/slick.min.js', 
        './node_modules/magnific-popup/dist/jquery.magnific-popup.min.js',  
   './node_modules/aos/dist/aos.js',
        './assets/js/app.js',   
    ];
   
/*
=============================
	Include Gulp & Plugins
=============================
*/
	var gulp 			= require('gulp'),
		sass 			= require('gulp-sass')(require('sass')),
		cleanCSS 		= require('gulp-clean-css'),
		autoprefixer 	= require('gulp-autoprefixer'),
		concat 			= require('gulp-concat'),
		rename 			= require('gulp-rename'),
		uglify 			= require('gulp-uglify'),
		terser 			= require('gulp-terser'),
		jshint 			= require('gulp-jshint'),
		plumber			= require('gulp-plumber'),
		c 				= require('ansi-colors'),
		replace 		= require('gulp-replace'),
		size 			= require('gulp-size'),
		zip 			= require('gulp-zip'),

		// postcss 		= require('postcss'),
		atimport 		= require("postcss-import"),
		purgecss 		= require("@fullhuman/postcss-purgecss"),
		tailwindcss 	= require("tailwindcss"),

		del 			= require('del'),
		gulpCopy 		= require('gulp-copy'),
		runSequence 	= require('run-sequence'),
		inject 			= require('gulp-inject'),
        postcss         = require("gulp-postcss");


      gulp.task('sass', function(done) {
        return gulp.src('./assets/scss/*.scss')
            .pipe(plumber({
               // errorHandler: onError
            }))
            .pipe(sass())
            .pipe(autoprefixer())
            .pipe(gulp.dest('./assets/css'))
            .pipe(rename({
                suffix: '.min'
            }))



            .pipe(cleanCSS())
            .pipe(gulp.dest('./assets/css'))
            .pipe(size())
        done();
    });

    gulp.task('clean-production', function() {
        return del('dist/**/**', {
            force: true
        });
    });
    gulp.task('copy_css_files', function(done) {
        return gulp.src(CSS_Files)
            .pipe(gulp.dest('./dist/production/assets/css'))
            .pipe(size())

        done();
    });
    gulp.task('copy_js_files', function(done) {
        return gulp.src(JS_Files)
            .pipe(gulp.dest('./dist/production/assets/js'))
            .pipe(size())

        done();
    });

    gulp.task('copy_all_files', function(done) {
        return gulp.src([
                './**/*',
                '!.jshintignore',
                '!.jshintrc',
                '!bower.json',
                '!gulpfile.js',
                '!package.json',
                '!package-lock.json',
                '!.gitattributes',
                '!gitignore',
                '!README.md',
                '!.gitignore',
                '!./node_modules/**',
                '!./bower_components/**',
                '!./dist/**',
                '!./git/**'
            ])
            .pipe(gulp.dest('./dist/production'))
            .pipe(size())
        done();
    });

 
 


    gulp.task('production-zip', function(done) {
        gulp.src([
                './dist/production/**/*',
            ])
            .pipe(zip('production-' + File_Name))
            .pipe(gulp.dest('./dist/'))
            .pipe(size())
        done();
    });

    gulp.task('vendor_css', function(done) {
        return gulp.src(CSS_Files)
          .pipe(concat('vendors.css'))

			 // NEED TO ADD TAILWIND PRE PROSS TO OPTIMIZE FILE SIZE
            .pipe(postcss())
            .pipe(rename({
                suffix: '.min'
            }))

            .pipe(cleanCSS())
            .pipe(gulp.dest('./assets/css'))
            .pipe(size())
        done();
    });

    gulp.task('js', function(done) {
        return gulp.src(JS_Files)

            .pipe(jshint())
            .pipe(jshint.reporter('jshint-stylish'))
            .pipe(concat('build.js'))
            .pipe(rename({
                suffix: '.min'
            }))
            .pipe(terser())
            .pipe(gulp.dest('./assets/js'))
            .pipe(size())
        done();
    });


    gulp.task('app_css', function(done) {
        return gulp.src(['./assets/css/vendors.min.css', './assets/css/custom.css'])
            .pipe(concat('app.css'))
            .pipe(cleanCSS())
            .pipe(rename({
                suffix: '.min'
            }))
            .pipe(gulp.dest('./assets/css'))
            .pipe(size())
        done();
    });
    gulp.task('zip', function(done) {
        gulp.src([
                './**/*',
                '.jshintignore',
                '.jshintrc',
                '!.gitattributes',
                '!README.md',
                '!.gitignore',
                '!./node_modules/**',
                '!./bower_components/**',
                '!./dist/**',
                '!./git/**'
            ])
			.pipe(zip('dev-' + File_Name))
            .pipe(gulp.dest('dist'))
            .pipe(size())
        done();
    });

    gulp.task('watch', function() { 
        gulp.watch('tailwind.config.js', gulp.series('build_css'));
        gulp.watch('./assets/css/custom.css', gulp.series('build_css'));
        gulp.watch('*.html', gulp.series('build_css'));
        gulp.watch(['./assets/js/app.js'], gulp.series('js'));
    });

    gulp.task(
        'build_css',
        gulp.series('vendor_css', 'app_css')
    );

    gulp.task(
        'build',
        gulp.series('build_css', 'js')
    );

    gulp.task(
        'production',
        gulp.series('clean-production', 'copy_all_files', 'copy_css_files', 'copy_js_files',   'production-zip', 'zip',)
    );


    gulp.task(
        'default',
        gulp.series('build', 'watch')
    );

})();