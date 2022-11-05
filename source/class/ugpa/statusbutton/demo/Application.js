/* ************************************************************************

   Copyright: 2022 ООО "НПП "ЮГПРОМАВТОМАТИЗАЦИЯ"

   License: MIT license

   Authors: Dmitrii Zolotov (goldim) zolotovdy@yandex.ru

************************************************************************ */

/**
 * This is the main application class of "ugpa.statusbutton"
 */
qx.Class.define("ugpa.statusbutton.demo.Application",
{
  extend : qx.application.Standalone,

  /*
  *****************************************************************************
     MEMBERS
  *****************************************************************************
  */

  members :  {
    /**
     * This method contains the initial application code and gets called 
     * during startup of the application
     * 
     * @lint ignoreDeprecated(alert)
     */
    main : function() {
      // Call super class
      this.base(arguments);

      // Enable logging in debug variant
      if (qx.core.Environment.get("qx.debug")) {
        // support native logging capabilities, e.g. Firebug for Firefox
        qx.log.appender.Native;
        // support additional cross-browser console. Press F7 to toggle visibility
        qx.log.appender.Console;
      }

      /*
      -------------------------------------------------------------------------
        Below is your actual application code...
      -------------------------------------------------------------------------
      */

      // Create a button
      const button = new ugpa.statusbutton.Button("label");

      // Document is the application root
      const doc = this.getRoot();

      // Add button to document at fixed coordinates
      doc.add(button, {left: 100, top: 50});

      const colors = {
          0: "red",
          1: "yellow",
          2: "green"
      };

      const animations = {
        1: true
      };

      const timer = new qx.event.Timer(3000);
      timer.addListener("interval", function(){
        const randomValue = this.__getRandomValue(0, 2);
        button.setColor(colors[randomValue]);
        if (animations[randomValue]){
            button.toggleAnimation();
        }
      }, this);
      timer.start();
    },

    __getRandomValue(min, max){
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
  }
});
