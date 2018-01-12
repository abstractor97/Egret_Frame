var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var DebugPlatform = (function () {
    function DebugPlatform() {
    }
    DebugPlatform.prototype.getUserInfo = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, { nickName: "username" }];
            });
        });
    };
    DebugPlatform.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    DebugPlatform.prototype.login = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    DebugPlatform.prototype.pay = function (goodsId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    return DebugPlatform;
}());
__reflect(DebugPlatform.prototype, "DebugPlatform", ["Platform"]);
var EgretPlatform = (function () {
    function EgretPlatform() {
    }
    EgretPlatform.prototype.getUserInfo = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, { nickName: "username" }];
            });
        });
    };
    EgretPlatform.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var info;
            return __generator(this, function (_a) {
                console.log("start nest init");
                info = {};
                info.egretAppId = 88888;
                info.version = 2;
                info.debug = true;
                nest.easyuser.startup(info, function (resultInfo) {
                    if (resultInfo.result == 0) {
                        platform.login();
                    }
                    else {
                        console.log("nest init fail");
                    }
                });
                return [2 /*return*/];
            });
        });
    };
    EgretPlatform.prototype.login = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loginTypes, typeInfo;
            return __generator(this, function (_a) {
                console.log("login start");
                loginTypes = nest.easyuser.getLoginTypes();
                if (loginTypes.length) {
                    typeInfo = loginTypes[0];
                    if (loginTypes.length == 1 && (typeInfo.loginType == "wx" || typeInfo.loginType == "qq")) {
                        nest.easyuser.login(typeInfo, function (data) {
                            if (data.result == 0) {
                                console.log("log success");
                            }
                            else {
                                console.log("log fail");
                            }
                        });
                    }
                }
                else {
                    nest.easyuser.login({}, function (data) {
                        if (data.result == 0) {
                            console.log("no need loginBtn success");
                            egret.log("log Success");
                            var param = JSON.stringify({ token: data.token });
                            Http.post("http://47.104.85.224:3000/user/login/egret/", param, function (e) {
                                var request = e.currentTarget;
                                var data = JSON.parse(request.response);
                                if (data.code == "200") {
                                    SceneManager.Instance.replaceScene(SceneConst[SceneConst.HallScene]);
                                }
                                console.log("post data : ", request.response);
                            }, this);
                        }
                        else {
                            egret.log("log Fail");
                        }
                    });
                }
                return [2 /*return*/];
            });
        });
    };
    EgretPlatform.prototype.pay = function (goodsId) {
        return __awaiter(this, void 0, void 0, function () {
            var payInfo;
            return __generator(this, function (_a) {
                payInfo = {
                    goodsId: goodsId,
                    goodsNumber: "1",
                    serverId: "1",
                    ext: "",
                };
                console.log(payInfo);
                nest.iap.pay(payInfo, this._onPayHandler.bind(this));
                return [2 /*return*/];
            });
        });
    };
    EgretPlatform.prototype._onPayHandler = function (payInfo) {
        console.log(payInfo);
    };
    return EgretPlatform;
}());
__reflect(EgretPlatform.prototype, "EgretPlatform", ["Platform"]);
if (!window.platform) {
    window.platform = new EgretPlatform();
}
//# sourceMappingURL=Platform.js.map