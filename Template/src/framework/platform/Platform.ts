/** 
 * 平台数据接口。
 * 由于每款游戏通常需要发布到多个平台上，所以提取出一个统一的接口用于开发者获取平台数据信息
 * 推荐开发者通过这种方式封装平台逻辑，以保证整体结构的稳定
 * 由于不同平台的接口形式各有不同，白鹭推荐开发者将所有接口封装为基于 Promise 的异步形式
 */
declare interface Platform {

    getUserInfo(): Promise<any>;

    init(): Promise<any>;

    login(): Promise<any>;

    pay(goodsId): Promise<any>;
}

class DebugPlatform implements Platform {
    async getUserInfo() {
        return { nickName: "username" }
    }

    async init() {

    }

    async login() {

    }

    async pay(goodsId) {

    }
}


class EgretPlatform implements Platform {
    async getUserInfo() {
        return { nickName: "username" }
    }

    async init() {
        console.log("start nest init");
        let info: any = {};
        info.egretAppId = 88888;
        info.version = 2;
        info.debug = true;

        nest.easyuser.startup(info, function (resultInfo: nest.core.ResultCallbackInfo) {
            if (resultInfo.result == 0) {
                platform.login();
            } else {
                console.log("nest init fail");
            }
        });
    }

    async login() {
        console.log("login start");
        let loginTypes: Array<nest.easyuser.ILoginType> = nest.easyuser.getLoginTypes();
        if (loginTypes.length) {
            let typeInfo: nest.easyuser.ILoginType = loginTypes[0];
            if (loginTypes.length == 1 && (typeInfo.loginType == "wx" || typeInfo.loginType == "qq")) {
                nest.easyuser.login(typeInfo, function (data: nest.user.LoginCallbackInfo) {
                    if (data.result == 0) {
                        console.log("log success");

                    } else {
                        console.log("log fail");
                    }
                });
            }
        }
        else {//不需要登录按钮，直接调用登录进游戏
            nest.easyuser.login({}, function (data: nest.user.LoginCallbackInfo) {
                if (data.result == 0) {
                    console.log("no need loginBtn success");
                    egret.log("log Success");
                    let param = JSON.stringify({ token: data.token });
                    Http.post("http://47.104.85.224:3000/user/login/egret/", param, (e) => {
                        var request = e.currentTarget;
                        let data = JSON.parse(request.response);
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
    }

    async pay(goodsId) {
        let payInfo: nest.iap.PayInfo = {
            goodsId: goodsId,
            goodsNumber: "1",
            serverId: "1",
            ext: "",
        };
        console.log(payInfo);
        nest.iap.pay(payInfo, this._onPayHandler.bind(this));
    }

    private _onPayHandler(payInfo: nest.iap.PayCallbackInfo): void {
        console.log(payInfo);
    }
}

if (!window.platform) {
    window.platform = new EgretPlatform();
}

declare let platform: Platform;

declare interface Window {

    platform: Platform
}





