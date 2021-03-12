import { TElement } from '../../../server/types/element'

export interface Skill {
    ID: string,
    name: string,
    description?: string,
    damage: number,
    element: TElement
}

export enum Elements {
    Fire = 'Fire',
    Air = 'Air',
    Water = 'Water',
    Earth = 'Earth'
}
  
export interface Attributes {
strength: number,
intelligence: number,
stamina: number,
healthpoints: number,
mana: number,
agility: number,
speed: number,
resistance: Elements,
weakness: Elements
}

export interface IHeroCardProps {
ID: string,
imgUrl: string,
name: string,
description: string,
backStory: string,
skills: Array<Skill>,
attributes: Attributes
// extend this
}