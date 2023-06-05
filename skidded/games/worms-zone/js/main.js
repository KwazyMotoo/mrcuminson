function toDataURL(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function() {
        var reader = new FileReader();
        reader.onloadend = function() {
            callback(reader.result);
        }
        reader.readAsDataURL(xhr.response);
    };
    xhr.open('GET', url);
    xhr.responseType = 'blob';
    xhr.send();
}

var WEBGL = {
    isWebGLAvailable: function() {
        try {
            // var canvas = document.createElement('canvas');
            var canvas = document.getElementById('canvas');
            return !!(window.WebGLRenderingContext && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
        } catch (e) {
            return false;
        }
    },

    getWebGLErrorMessage: function() {
        return this.getErrorMessage(1);
    }
};

function logError(text, fatal) {
    console.error(text);

    if (typeof gtag === "function") {
        gtag('event', 'exception', {
            'description': text,
            'fatal': fatal // set to true if the error is fatal
        });
    }
}

// ------------------------------------------------------------------------------

var runtimeInitialized = false;

function tryToRun() {
    if (runtimeInitialized === true) {
        try {
            Module.callMain();
        } catch (error) {
            logError(error, true);
        }
    } else {
        setTimeout(function() {
            tryToRun();
        }, 500);
    }
}

window.onload = function() {
    tryToRun();
};

// ------------------------------------------------------------------------------

var Module = {
    noInitialRun: true,
    noExitRuntime: true,

    preRun: [],
    postRun: [],

    printErr: function(text) {
        if (arguments.length > 1) {
            text = Array.prototype.slice.call(arguments).join(' ');
        }

        logError(text, false);
    },

    onRuntimeInitialized: (function() {
        runtimeInitialized = true;

        window.addEventListener('mousedown', function(evt) {
            window.focus();
            evt.stopPropagation();
            evt.target.style.cursor = 'default';
        }, false);
    })(),

    canvas: (function() {
        var canvas = document.getElementById('canvas');
        return canvas;
    })(),

    setStatus: function(text) {},

    totalDependencies: 0,
    monitorRunDependencies: function(left) {}
};
