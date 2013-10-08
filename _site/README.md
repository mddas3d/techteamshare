# Jekyll with grunt and bower

Jekyll with grunt and bower.

## Before you start 
Make sure that you have : 

* Install [Homebrew](http://brew.sh/), also you may need to check this [wiki](https://github.com/mxcl/homebrew/wiki).
* Install [RVM](https://rvm.io/) with a ruby: `$ \curl -L https://get.rvm.io | bash -s stable --rails --ruby=1.9.3` or `--ruby=higher`
* Set up [Node.js and npm](http://shapeshed.com/setting-up-nodejs-and-npm-on-mac-osx/)

** More datails about installing [RVM with a Ruby on mac](http://www.moncefbelyamani.com/how-to-install-xcode-homebrew-git-rvm-ruby-on-mac/).

## How to start 

1. `$ npm install`
1. `$ bower install`
1. `$ jekyll serve` to start server
1. `$ grunt watch`, it will run **jekyll build** automatically when you change files: `e.g. _posts/**/*.md'`, `'_layout/*.html'`, `'_includes/*.html'`, `'*.yml'`, `'*.html'` etc.
1. `$ grunt theme` for updating css.

** To update packages and dependencies : `package.json` & `bower.json`, you can also edit `Gruntfile.js` to add more tasks. 

## Boilerplate

Easily install dependent packages by using [grunt](http://gruntjs.com), This boilerplate is for simple jekyll starter therefore: 
 
**packages.json** includes: `grunt`,`grunt-contrib-watch`,`grunt-contrib-less` and `grunt-shell-spawn`. Also you will be able to install any other [plugins](http://gruntjs.com/plugins).

**bower.json** : For the dependencies, there is [bower](https://github.com/bower/bower) you can install another components and can be directly searched with `$ bower search keyword` e.g.`$ bower search bootstrap`, also be albe to search in their official site, visit [bower components](http://sindresorhus.com/bower-components/). 

**Gruntfile.js** : It defined default task and plugin task. 

### re-build jekyll when specific file has been changed

Here, added shell command which will be automatically build jekyll site, specific files are added watch:jekyll configuration. 

    shell: {
      jekyll: {
        command: 'jekyll build',
        options: {
          async: false
        }
      }
    }
    
    
Basically added `less` for theme. It is a bower component and everytime you update your `less` file under the `/less` directory then it will automatically combine and re-generate a file, which is `assets.css`.

    less: {
        dev: {
            options: {
                yuicompress: true
            },
            files: {
                'assets.css' : ['less/**/*.less']
            }
        }
    }
    
 
 `watch` follows every changes of specific files, so you can easily update files and tasks.
    
    watch: {
      jekyll: {
        files: ['*.yml', '*.html', '*.css', '_posts/**/*.md', '_layouts/*.html', '_includes/*.html'],
        tasks: ['shell:jekyll']
      },
      less: {
          files: ['less/**/*.less'],
          tasks: ['less']
      }
    }