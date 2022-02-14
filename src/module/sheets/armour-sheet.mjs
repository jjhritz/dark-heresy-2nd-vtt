import {DarkHeresyItemSheet} from "./item-sheet.mjs";
import {DarkHeresyContainerSheet} from "./container-sheet.mjs";

export class DarkHeresyArmourSheet extends DarkHeresyContainerSheet {

    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            width: 820,
            height: 575,
            tabs: [{ navSelector: ".dh-navigation", contentSelector: ".dh-body", initial: "stats" }]
        });
    }

    get template() {
        return `systems/dark-heresy-2nd/templates/item/item-armour-sheet.hbs`;
    }
}
