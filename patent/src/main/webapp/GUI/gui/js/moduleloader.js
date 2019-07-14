(function(){
    var modules = {
        menu: {
            js:'menu.js'
        },

        menubutton: {
            js:'menubutton.js'
        },
        datagrid:{
            js:'datagrid.js'
        },
        combo: {
            js:'combo.js'
        },
        combobox: {
            js:'combobox.js'
        },
        datalist:{
            js:'datalist.js'
        },
        treegrid:{
            js:'treegrid.js'
        },

    };

    // 加载队列
    var queues = {};

    // 国际化资源文件
    var locales = {
        'af':'easyui-lang-af.js',
        'bg':'easyui-lang-bg.js',
        'ca':'easyui-lang-ca.js',
        'cs':'easyui-lang-cs.js',
        'da':'easyui-lang-da.js',
        'de':'easyui-lang-de.js',
        'en':'easyui-lang-en.js',
        'fr':'easyui-lang-fr.js',
        'nl':'easyui-lang-nl.js',
        'zh_CN':'easyui-lang-zh_CN.js',
        'zh_TW':'easyui-lang-zh_TW.js'
    };


    /**
     * 加载js文件函数
     *
     * 过程就是动态创建一个script标签，然后添加到head标签中去。
     *
     * 有一个问题是监听了script标签的两个事件函数，一个是onload，另一个是onreadystatechange，这个数要是针对IE和非IE浏览器准备的
     */
    function loadJs(url, callback){
        var done = false;
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.language = 'javascript';
        script.src = url;
        script.onload = script.onreadystatechange = function(){
            if (!done && (!script.readyState || script.readyState == 'loaded' || script.readyState == 'complete')){
                done = true;
                script.onload = script.onreadystatechange = null;
                if (callback){
                    callback.call(script);
                }
            }
        };
        document.getElementsByTagName("head")[0].appendChild(script);
    }

    /**
     *  执行js文件。
     *  把js文件加载进来，再remove掉
     *
     * @param url js的url
     * @callback 回调函数，执行完js时会调用这个函数
     */
    function runJs(url, callback){
        loadJs(url, function(){
            document.getElementsByTagName("head")[0].removeChild(this);
            if (callback){
                callback();
            }
        });
    }


    /**
     * 加载css文件。和加载js文件一样，动态创建一个link标签，然后追加到head标签中去
     *
     * @param url css的url
     * @param callback 回调函数，加载完成后调用此函数
     */
    function loadCss(url, callback){
        var link = document.createElement('link');
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.media = 'screen';
        link.href = url;
        document.getElementsByTagName('head')[0].appendChild(link);
        if (callback){
            callback.call(link);
        }
    }



    /**
     * 加载单独的一个模块
     */
    function loadSingle(name, callback){

        // 加载队列存入该模块名，并表示状态为loading。
        queues[name] = 'loading';

        // 根据模块名，取出该模块定义
        var module = modules[name];

        // js加载状态
        var jsStatus = 'loading';

        // css加载状态，从这里你就可以看出easyloader.css就是一个开关变量，控制是否加载模块相应的css文件
        var cssStatus = ( moduleloader.css && module['css']) ? 'loading' : 'loaded';

        // 是css文件，就使用loadCss来加载之
        if ( moduleloader.css && module['css'] ){
            var url = moduleloader.base + 'themes/' + moduleloader.theme + '/' + module['css'];

            loadCss(url, function(){
                cssStatus = 'loaded';
                if (jsStatus == 'loaded' && cssStatus == 'loaded'){
                    finish();
                }
            });
        }

        // 是js文件，就是用LoadJs来加载之
        var url = moduleloader.base + 'plugins/' + module['js'];
        loadJs(url, function(){
            jsStatus = 'loaded';
            if (jsStatus == 'loaded' && cssStatus == 'loaded'){
                finish();
            }
        });

        // 最终调用finish函数，来结束加载。并触发onProgress函数，每加载成功一个模块，就调用一次onProgress
        function finish(){
            queues[name] = 'loaded';
            moduleloader.onProgress(name);
            if (callback){
                callback();
            }
        }
    }


    /**
     * gui 模块加载函数
     * @param name 模块名，可以是string，也可以是数组
     * @param callback 回调函数，当加载结束后会调用此函数
     */
    function loadModule(name, callback){

        // 模块名，根据依赖关系，从前到后，依次排开
        var mm = [];

        // 加载标识，当其值为true时，表示需要加载的模块已经加载好了
        var doLoad = false;

        // 模块名支持两中，一种是string，一种是数组。这样就可以一次加载多个模块了
        if (typeof name == 'string'){
            // 是string的时候，调用add方法把模块名push到mm数组中去
            add(name);
        } else {
            for(var i=0; i<name.length; i++){
                // 是数组的时候，循环调用add方法把模块名统统push到mm数组中去
                add(name[i]);
            }
        }

        /**
         * loadModule函数中内嵌的一个函数，用来加载模块名到变量mm数组中去
         * @param name 模块名，只能是string
         */
        function add(name){
            // 保护措施，如果该模块名不存在，我们就不要加载了
            if (!modules[name]) return;

            // 否则，就是该模块存在。然后，我们在看看其有没有依赖模块
            var d = modules[name]['dependencies'];
            if (d){
                // 如果有依赖模块，我们要先把依赖模块的名字push到mm中去
                // 这里用了递归调用
                for(var i=0; i<d.length; i++){
                    add(d[i]);
                }
            }

            // 把模块名放到mm中
            mm.push(name);
        }

        /**
         * 当一个模块及其依赖模块加载完成时，执行回调函数，并且触发onLoad函数
         */
        function finish(){
            if (callback){
                callback();
            }
            moduleloader.onLoad(name);
        }

        // 加载用时
        var time = 0;

        /**
         * 加载所需要的模块，需要的模块，我们已经统计好了，并按依赖关系，先后push到mm中去了
         */
        function loadMm(){
            // 判断mm是不是空的
            if (mm.length){

                // 第一个模块
                var m = mm[0];

                // 判断加载队列是否包含此模块
                if (!queues[m]){

                    // 加载队列不包含此模块，开始加载该模块
                    // 把doLoad置成true，表示开始加载
                    doLoad = true;

                    // 调用loadSingle方法来加载模块，加载成功后会把此模块从mm中shift掉，然后继续调用loadMM方法，就形成了递归调用
                    loadSingle(m, function(){
                        mm.shift();
                        loadMm();
                    });
                } else if (queues[m] == 'loaded'){
                    // 加载队列已经加载过此模块了，不需要在加载了，直接从mm中shift掉即可
                    mm.shift();
                    loadMm();
                } else {
                    // 表示正在加载该模块，累计所用时间如果没有超过timeout
                    // 则过10毫秒再调用一次loadMm函数
                    if (time < moduleloader.timeout){
                        time += 10;
                        setTimeout(arguments.callee, 10);
                    }
                }
            } else {
                // 走到这里，表示该加载的模块都已经加载好了
                if (moduleloader.locale && doLoad == true && locales[moduleloader.locale]){
                    // 如果设置了国际化，并且已经加载好了，而且该国际化资源还存在，那么加载该资源js
                    var url = moduleloader.base + 'locale/' + locales[moduleloader.locale];

                    // 执行js完事后，调用finish方法
                    runJs(url, function(){
                        finish();
                    });
                } else {
                    // 没定义国际化文件，那么直接调用finish方法吧
                    finish();
                }
            }
        }

        loadMm();
    }

    /**
     *  moduleloader 定义为全局变量
     */
    moduleloader = {

        // 各个模块文件的定义，包括js、css和依赖模块
        modules:modules,

        // 国际化资源文件
        locales:locales,

        // gui的根目录，在加载 moduleloader r时，会自动根据你放置的位置而改变
        base:'.',

        // 控件的主题，一共就有两个，在theme目录中。还有一个gray主题，浅灰色的，很难看。
        theme:'default',

        // 这是一个开关变量，控制 moduleloader 加载模块时，要不要加载相应的 css 文件，默认是需要加载的
        css:true,

        // 国际化语言，可以根据window.navigator.language或者window.navigator.userLanguage来获取当前浏览器的语言。
        // 有两个属性，主要因为IE浏览器只认识userLanguage和sysLanguage，万恶的IE浏览器啊！
        locale:null,

        // 加载一个模块的最长时间，超过这个时间，就开始加载下一个模块了。
        timeout:2000,

        // moduleloader 就公开了这么一个方法，用来加载模块。
        // name是模块名，callback是加载成功后执行的函数
        load: function(name, callback){
            if ( name.endsWith(".css")){// 如果模块名是以.css结尾
                loadCss(moduleloader.base + name, callback);
            } else if ( name.endsWith(".js") ){ // 如果模块名是以.js结尾
                loadJs(moduleloader.base + name, callback);
            } else {
                // 以上两种都不是，说明是easyui自己的模块，直接使用loadModule来加载，就可以了
                loadModule(name, callback);
            }
        },

        // 模块加载完会触发此函数
        onProgress: function(name){},

        // 模块和其依赖都加载完会触发此函数
        onLoad: function(name){}
    };

    /**
     * 查找 gui 的根目录，并赋值给 moduleloader 的 base 属性上。这样 moduleloader 再加载css文件和js文件就很方便定位了。
     */
    var scripts = document.getElementsByTagName('script');
    for(var i=0; i<scripts.length; i++){
        var src = scripts[i].src;
        if (!src) continue;
        if ( src.endsWith('moduleloader.js') ){
            moduleloader.base = src.replace('/moduleloader.js', '/');
        }
    }

    /**
     * 这个就起一个别名的作用，比如页面中可以想如下这么下：
     * using('window');
     * 这样window模块就加载进来了！
     */
    window.using = moduleloader.load;

    /**
     * moduleloader.js 加载的模块，parser模块调用parse方法，可以解析页面上的gui控件
     */
    if (window.jQuery){
        jQuery(function(){

            Object.keys(modules).forEach(function(modulename){
                moduleloader.load(modulename, function(){

                });
            });
        });
    }

})();