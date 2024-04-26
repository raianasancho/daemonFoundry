import { daemon } from "./module/config.js";
import { DaemonItemSheet } from "./module/sheets/DaemonItemSheet.js";

Hooks.once("init", function () {
  console.log("DAEMON | Initializing Daemon System");

  CONFIG.daemon = daemon;

  Items.unregisterSheet("core", ItemSheet);
  Items.registerSheet("daemon", DaemonItemSheet, {
    makeDefault: true,
  });
});
