/* ************************************************************************

   Copyright: 2022 ООО "НПП "ЮГПРОМАВТОМАТИЗАЦИЯ"

   License: MIT license

   Authors: Dmitrii Zolotov (goldim) zolotovdy@yandex.ru

************************************************************************ */

/**
 * This is an example of a contrib library, providing a very special button 
 * @asset(ugpa/statusbutton/*)
 */
qx.Class.define("ugpa.statusbutton.Button", {
    extend : qx.ui.form.Button,

    construct(label) {
        // noinspection JSAnnotator
        super(label, "@MaterialIcons/circle/24");
    },

    properties: {
        appearance: {
            init: "status-button",
            refine: true
        },

        animated: {
            init: false,
            check: "Boolean",
            apply: "_applyAnimated"
        }
    },

    members: {
        _applyAnimated(value) {
            if (value) {
                if (this._animationHandler) {
                    this._animationHandler.play();
                } else {
                    this._animationHandler = this.__createAnimation();
                }
            } else {
                this._animationHandler.pause();
            }
        },

        __createAnimation() {
            const desc = {
                duration: 2000,
                timing: "step-end",
                repeat: "infinite",
                keyFrames: {
                    0: { opacity: 0 },
                    50: { opacity: 1 }
                }
            };

            const html = this.getChildControl("icon").getContentElement().getDomElement();
            return qx.bom.element.AnimationCss.animate(html, desc);
        },

        toggleAnimation() {
            this.setAnimated(!this.getAnimated());
        },

        setColor(color) {
            this.getChildControl("icon").setTextColor(color);
        }
    }
});
