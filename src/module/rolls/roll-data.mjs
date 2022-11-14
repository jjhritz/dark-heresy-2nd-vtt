import { aimModifiers, rollDifficulties } from './roll-difficulties.mjs';

export class RollData {
    template = '';

    sourceActor;
    targetActor;
    distance = 0;
    rangeName = '';
    rangeBonus = 0;

    actions = {};
    action = '';

    baseTarget = 0;
    difficulties = rollDifficulties();
    aims = aimModifiers();
    modifiers = {
        difficulty: 0,
        modifier: 0,
    };
    modifierTotal = 0;

    roll;
    render;

    success = false;
    dos = 0;
    dof = 0;

    get modifiedTarget() {
        return this.baseTarget + this.modifierTotal;
    }

    get activeModifiers() {
        const modifiers = {};
        for (const m of Object.keys(this.modifiers)) {
            if (this.modifiers[m] !== 0) {
                modifiers[m.toUpperCase()] = this.modifiers[m];
            }
        }
        return modifiers;
    }
}

export class SimpleRollData extends RollData {
    name = '';
    type = '';

    constructor() {
        super();
        this.template = 'systems/dark-heresy-2nd/templates/chat/simple-roll-chat.hbs';
    }
}

export class WeaponRollData extends RollData {
    weapons = [];
    weapon;
    weaponSelect = false;

    constructor() {
        super();
        this.template = 'systems/dark-heresy-2nd/templates/chat/weapon-roll-chat.hbs';
    }
}

export class PsychicRollData extends RollData {
    psychicPowers = [];
    power;
    powerSelect = false;

    maxRating = 0;
    effectiveRating = 0;

    constructor() {
        super();
        this.template = 'systems/dark-heresy-2nd/templates/chat/psychic-power-roll-chat.hbs';
    }
}
