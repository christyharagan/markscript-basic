(function (TRIGGER_COMMIT) {
    TRIGGER_COMMIT[TRIGGER_COMMIT["PRE"] = 0] = "PRE";
    TRIGGER_COMMIT[TRIGGER_COMMIT["POST"] = 1] = "POST";
})(exports.TRIGGER_COMMIT || (exports.TRIGGER_COMMIT = {}));
var TRIGGER_COMMIT = exports.TRIGGER_COMMIT;
(function (TRIGGER_STATE) {
    TRIGGER_STATE[TRIGGER_STATE["CREATE"] = 0] = "CREATE";
    TRIGGER_STATE[TRIGGER_STATE["MODIFY"] = 1] = "MODIFY";
    TRIGGER_STATE[TRIGGER_STATE["DELETE"] = 2] = "DELETE";
})(exports.TRIGGER_STATE || (exports.TRIGGER_STATE = {}));
var TRIGGER_STATE = exports.TRIGGER_STATE;
(function (FrequencyType) {
    FrequencyType[FrequencyType["MINUTES"] = 0] = "MINUTES";
    FrequencyType[FrequencyType["HOURS"] = 1] = "HOURS";
    FrequencyType[FrequencyType["DAYS"] = 2] = "DAYS";
})(exports.FrequencyType || (exports.FrequencyType = {}));
var FrequencyType = exports.FrequencyType;
(function (ScalarType) {
    ScalarType[ScalarType["int"] = 0] = "int";
    ScalarType[ScalarType["unsignedInt"] = 1] = "unsignedInt";
    ScalarType[ScalarType["long"] = 2] = "long";
    ScalarType[ScalarType["unsignedLong"] = 3] = "unsignedLong";
    ScalarType[ScalarType["float"] = 4] = "float";
    ScalarType[ScalarType["double"] = 5] = "double";
    ScalarType[ScalarType["decimal"] = 6] = "decimal";
    ScalarType[ScalarType["dateTime"] = 7] = "dateTime";
    ScalarType[ScalarType["time"] = 8] = "time";
    ScalarType[ScalarType["date"] = 9] = "date";
    ScalarType[ScalarType["gYearMonth"] = 10] = "gYearMonth";
    ScalarType[ScalarType["gYear"] = 11] = "gYear";
    ScalarType[ScalarType["gMonth"] = 12] = "gMonth";
    ScalarType[ScalarType["gDay"] = 13] = "gDay";
    ScalarType[ScalarType["yearMonthDuration"] = 14] = "yearMonthDuration";
    ScalarType[ScalarType["dayTimeDuration"] = 15] = "dayTimeDuration";
    ScalarType[ScalarType["string"] = 16] = "string";
    ScalarType[ScalarType["anyURI"] = 17] = "anyURI";
})(exports.ScalarType || (exports.ScalarType = {}));
var ScalarType = exports.ScalarType;
function mlDeploy() {
    return function (target) {
    };
}
exports.mlDeploy = mlDeploy;
function geoIndexed(definition) {
    return function (target, propertyKey) {
    };
}
exports.geoIndexed = geoIndexed;
function rangeIndexed(definition) {
    return function (target, propertyKey) {
    };
}
exports.rangeIndexed = rangeIndexed;
function mlRuleSet(definition) {
    return function (target, propertyKey, method) {
    };
}
exports.mlRuleSet = mlRuleSet;
function mlTask(definition) {
    return function (target, propertyKey) {
    };
}
exports.mlTask = mlTask;
function mlAlert(definition) {
    return function (target, propertyKey) {
    };
}
exports.mlAlert = mlAlert;
function mlExtension() {
    return function (target) {
        return target;
    };
}
exports.mlExtension = mlExtension;
//# sourceMappingURL=decorators.js.map