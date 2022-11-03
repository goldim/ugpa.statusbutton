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
    include: [qx.ui.form.MModelProperty],

    construct(label){
        // noinspection JSAnnotator
        super(label, "icon-mock");
        this.initStatusPosition("left");
    },

    properties: {
        appearance: {
            init: "status-button",
            refine: true
        },

        value: {
            apply: "_applyValue",
            event: "changeValue"
        },

        statusPosition: {
            deferredInit: true,
            apply: "_applyStatusPosition"
        }
    },

    members: {
        _applyStatusPosition(position){
            if (position === "left"){
                this.setIconPosition("right");
            }
            else if (position === "right"){
                this.setIconPosition("left");
            }
        },

        _applyValue(value){
            this.getChildControl("icon").setBlinked(value);
            this.getChildControl("icon").setColor("green");
        },

        __getColorFromModelByValue(value){
            return this.__model[value];
        },

        __valueHasAnimation(value){
            return this.__model.get(value).attr;
        },

        _createChildControlImpl(id){
            let control;
            switch(id) {
                case "icon":
                    control = new ugpa.statusbutton.Status();
                    this.addListener("appear", function(){
                        const size = this.getBounds().height;
                        control.setWidth(size);
                        control.setHeight(size);
                    }, this);
                    this._add(control);
                    break;
            }
            return control || super._createChildControlImpl(id);
        }
    }
});
