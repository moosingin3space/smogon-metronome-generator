import { AllPokemon } from "./pokedex.ts";
import { AllAbilities, BannedAbilities } from "./ability.ts";
import { AllItems } from "./heldItem.ts";

export interface Species {
    pokedexNum: number;
    name: string;
    imageUrl: string;
}

export interface Pokemon {
    species: Species;
    ability: Ability;
    heldItem: string;
}

export interface Ability {
    num: number;
    name: string;
}

function randomNum(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

export function selectSpecies(): Species {
    return AllPokemon[randomNum(0, AllPokemon.length)];
}

export function selectAbility(): Ability {
    let abilitySelected = AllAbilities[randomNum(0, AllAbilities.length)];
    while (BannedAbilities.indexOf(abilitySelected.name) > -1)
    {
        abilitySelected = AllAbilities[randomNum(0, AllAbilities.length)];
    }
    return abilitySelected;
}

export function selectHeldItem(): string {
    return AllItems[randomNum(0, AllItems.length)];
}

export function randomizePokemon(): Pokemon {
    return {
        species: selectSpecies(),
        ability: selectAbility(),
        heldItem: selectHeldItem(),
    };
}