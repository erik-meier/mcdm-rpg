import {game} from "./config.js";
import McdmRpgItemSheet from "./sheets/item-sheet.js";

Hooks.once("init", function() {
    console.log("mcdm-rpg | Initializing MCDM RPG Game System");
    
    CONFIG.game = game;

    Items.unregisterSheet("core", ItemSheet);
    Items.registerSheet("mdcm-rpg", McdmRpgItemSheet, { makeDefault: true });
});