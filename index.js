"use strict";

// Map implementation of paul millr's es6-shim
// https://github.com/paulmillr/es6-shim/blob/

if (typeof Map === 'undefined') {

    var indexOfIdentical = function(keys, key) {
        for (var i = 0, length = keys.length; i < length; i++) {
            if (Object.is(keys[i], key)) return i;
        }
        return -1;
    };

    var Map = function () {
        if (!(this instanceof Map)) return new Map();
        this.keys = [];
        this.values = [];
    }

    Map.prototype = {
        get: function(key) {
            var index = indexOfIdentical(this.keys, key);
            return index < 0 ? undefined : this.values[index];
        },

        has: function(key) {
            return indexOfIdentical(this.keys, key) >= 0;
        },

        set: function(key, value) {
            var keys = this.keys;
            var values = this.values;
            var index = indexOfIdentical(keys, key);
            if (index < 0) index = keys.length;
            keys[index] = key;
            values[index] = value;
        },

        'delete': function(key) {
            var keys = this.keys;
            var values = this.values;
            var index = indexOfIdentical(keys, key);
            if (index < 0) return false;
            keys.splice(index, 1);
            values.splice(index, 1);
            return true;
        }
    };
}

module.exports = Map;
