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

  members :
  {
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
      const button1 = new ugpa.statusbutton.Button("Very special button", "ugpa/statusbutton/test.png");
      button1.setStatusPosition("left");

      // Document is the application root
      const doc = this.getRoot();

      // Add button to document at fixed coordinates
      doc.add(button1, {left: 100, top: 50});
      let v = false;

      button1.addListener("click", function(){
        v = !v;
        button1.setValue(v);
      });
    }
  }
});
