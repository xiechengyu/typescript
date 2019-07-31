"use strict";
var Ren;
(function (Ren) {
    Ren[Ren["nan"] = 0] = "nan";
    Ren[Ren["nv"] = 1] = "nv";
    Ren[Ren["yao"] = 2] = "yao";
})(Ren || (Ren = {}));
var Ren1;
(function (Ren1) {
    Ren1["nan"] = "\u7537";
    Ren1["nv"] = "\u5973";
    Ren1["yao"] = "\u5996";
})(Ren1 || (Ren1 = {}));
console.log(Ren.yao);
console.log(Ren1.yao);
