class GameLayer extends Layer {
    // private edit_name: eui.EditableText;
    // private edit_psw: eui.EditableText;
    // private btn_login: eui.Button;

    public constructor() {
        super();
        // this.skinName = "skins.LoginLayer";
        this.percentWidth = 100;
        this.percentHeight = 100;
    }

    protected init(): void {
        super.init();
        // FrameManager.Instance.addFrame(this, this.dosomething, this);

    }

    protected setOnTouchListener() {
        // this.btn_login.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onLoginClick, this);
    }

    protected removeOnTouchListener() {
        // this.btn_login.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onLoginClick, this);
    }

}