/**
 * Copyright 2015 Telerik AD
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(function(f, define){
    define([], f);
})(function(){

(function( window, undefined ) {
    var kendo = window.kendo || (window.kendo = { cultures: {} });
    kendo.cultures["tk"] = {
        name: "tk",
        numberFormat: {
            pattern: ["-n"],
            decimals: 2,
            ",": " ",
            ".": ",",
            groupSize: [3],
            percent: {
                pattern: ["-n%","n%"],
                decimals: 2,
                ",": " ",
                ".": ",",
                groupSize: [3],
                symbol: "%"
            },
            currency: {
                pattern: ["-n$","n$"],
                decimals: 2,
                ",": " ",
                ".": ",",
                groupSize: [3],
                symbol: "m."
            }
        },
        calendars: {
            standard: {
                days: {
                    names: ["Duşenbe","Sişenbe","Çarşenbe","Penşenbe","Anna","Şenbe","Ýekşenbe"],
                    namesAbbr: ["Db","Sb","Çb","Pb","An","Şb","Ýb"],
                    namesShort: ["D","S","Ç","P","A","Ş","Ý"]
                },
                months: {
                    names: ["Ýanwar","Fewral","Mart","Aprel","Maý","lýun","lýul","Awgust","Sentýabr","Oktýabr","Noýabr","Dekabr",""],
                    namesAbbr: ["Ýan","Few","Mart","Apr","Maý","lýun","lýul","Awg","Sen","Okt","Not","Dek",""]
                },
                AM: [""],
                PM: [""],
                patterns: {
                    d: "dd.MM.yy",
                    D: "yyyy 'ý.' MMMM d",
                    F: "yyyy 'ý.' MMMM d H:mm:ss",
                    g: "dd.MM.yy H:mm",
                    G: "dd.MM.yy H:mm:ss",
                    m: "MMMM dd",
                    M: "MMMM dd",
                    s: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
                    t: "H:mm",
                    T: "H:mm:ss",
                    u: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
                    y: "yyyy 'ý.' MMMM",
                    Y: "yyyy 'ý.' MMMM"
                },
                "/": ".",
                ":": ":",
                firstDay: 1
            }
        }
    }
})(this);


return window.kendo;

}, typeof define == 'function' && define.amd ? define : function(_, f){ f(); });