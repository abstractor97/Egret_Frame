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
var ShopLayer = (function (_super) {
    __extends(ShopLayer, _super);
    function ShopLayer() {
        var _this = _super.call(this) || this;
        _this.coin = 0;
        _this.skinName = "skins.Shop";
        _this.percentWidth = 100;
        _this.percentHeight = 100;
        return _this;
    }
    ShopLayer.prototype.init = function () {
        _super.prototype.init.call(this);
    };
    ShopLayer.prototype.setOnTouchListener = function () {
        this.btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this._onCloseClick, this);
        this.shopList.addEventListener(eui.ItemTapEvent.ITEM_TAP, this._onShopItemTap, this);
    };
    ShopLayer.prototype.removeOnTouchListener = function () {
        this.btn_close.removeEventListener(egret.TouchEvent.TOUCH_TAP, this._onCloseClick, this);
        this.shopList.removeEventListener(eui.ItemTapEvent.ITEM_TAP, this._onShopItemTap, this);
    };
    ShopLayer.prototype._onCloseClick = function () {
        PopupManager.Instance.close(PopUpLayers[PopUpLayers.ShopLayer], EffectType.Slight);
    };
    ShopLayer.prototype._onShopItemTap = function (event) {
        console.log(event.itemIndex);
        var gid = 19;
        // platform.payOrder(event.item.gid);
        platform.payOrder(gid);
    };
    return ShopLayer;
}(Layer));
__reflect(ShopLayer.prototype, "ShopLayer");
//# sourceMappingURL=ShopLayer.js.map