import { DaemonItemSheet } from "./module/sheets/DaemonItemSheet.js";

Hooks.once("init", function () {
  console.log("DAEMON | Initializing Daemon System");

  Items.unregisterSheet("core", ItemSheet);
  Items.registerSheet("daemon", DaemonItemSheet, {
    makeDefault: true,
  });
});
