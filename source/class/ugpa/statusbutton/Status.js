/* ************************************************************************

   Copyright: 2022 ООО "НПП "ЮГПРОМАВТОМАТИЗАЦИЯ"

   License: MIT license

   Authors: Dmitrii Zolotov (goldim) zolotovdy@yandex.ru

************************************************************************ */
qx.Class.define("ugpa.statusbutton.Status", {
    extend: qx.ui.core.Widget,

    construct() {
        // noinspection JSAnnotator
        super();
    },

    properties: {
        blinked: {
            init: false,
            check: "Boolean",
            apply: "_applyBlinked"
        },

        color: {
            deferredInit: true,
            apply: "_applyColor"
        }
    },

    members: {
        _applyColor(color){
            this.getContentElement().getChildren()[0].setStyle("background-color", color);
        },

        _applyBlinked(value){
            if (value){
                if (this._animationHandler){
                    this._animationHandler.play();
                } else {
                    const desc = {
                        duration: 2000,
                        timing: "step-end",
                        repeat: "infinite",
                        keyFrames: {
                            0: { opacity: 0 },
                            50: { opacity: 1 }
                        }
                    };

                    this._animationHandler = qx.bom.element.AnimationCss.animate(this.getContentElement().getChildren()[0].getDomElement(), desc);
                }
            } else {
                this._animationHandler.pause();
            }
        },

        _createContentElement(){
            const str = '<div style="border-radius:50%; border: 5px solid #333;">' +
                '<div style="border-radius:50%;width: 100%; height: 100%; border: none; background: red;">' +
                '</div>' +
            '</div>';
            const el = new qx.html.Element();
            el.useMarkup(str);
            return el;
        }
    }
});
