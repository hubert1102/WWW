var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
console.log("Ależ skomplikowany program!");
function zaloguj() {
    var komunikaty = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        komunikaty[_i] = arguments[_i];
    }
    console.log.apply(console, __spreadArrays(["Ależ skomplikowany program!"], komunikaty));
}
zaloguj("Ja", "cię", "nie", "mogę");
var jsonString = "{\n    \"lotniska\": {\n        \"WAW\": [\"Warszawa\", [3690, 2800]],\n        \"NRT\": [\"Narita\", [4000, 2500]],\n        \"BQH\": [\"Biggin Hill\", [1802, 792]],\n        \"LBG\": [\"Paris-Le Bourget\", [2665, 3000, 1845]]\n    }\n}";
var Pilot = /** @class */ (function () {
    function Pilot() {
    }
    return Pilot;
}());
function sprawdzDaneLiniiLotniczej(dane) {
    return (dane.piloci || dane.piloci === undefined) && (dane.lotniska || dane.lotniska === undefined);
}
var dataStructure = JSON.parse(jsonString);
if (sprawdzDaneLiniiLotniczej(dataStructure)) {
    var juzNaPewnoDaneLinii = dataStructure;
    console.log(juzNaPewnoDaneLinii);
    console.log(juzNaPewnoDaneLinii.piloci.length);
}
