var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var LoginLayer = (function (_super) {
    __extends(LoginLayer, _super);
    function LoginLayer() {
        var _this = _super.call(this) || this;
        _this.skinName = "Skin.LoginLayer";
        _this.percentWidth = 100;
        _this.percentHeight = 100;
        return _this;
    }
    LoginLayer.prototype.init = function () {
        _super.prototype.init.call(this);
    };
    LoginLayer.prototype.setOnTouchListener = function () {
        this.btn_login.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onLoginClick, this);
    };
    LoginLayer.prototype.removeOnTouchListener = function () {
        this.btn_login.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onLoginClick, this);
    };
    LoginLayer.prototype.onLoginClick = function () {
        //   LC.Tips.show("\u7528\u6237\u5728\u5176\u4ed6\u684c\u5b50\u4e2d");
        // this._ctrl.sendDebugLoginReq(this.edit_name.text, this.edit_psw.text);
        // LC.Tips.show(LC.ErrorCodeManager.Instance.getErrorCode(1001));
        SceneManager.Instance.replaceScene(SceneConst[SceneConst.HallScene]);
    };
    return LoginLayer;
}(Layer));
__reflect(LoginLayer.prototype, "LoginLayer");
//# sourceMappingURL=LoginLayer.js.map