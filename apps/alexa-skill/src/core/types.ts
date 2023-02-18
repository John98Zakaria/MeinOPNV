import { type HafasClient } from 'hafas-client';
import { type deModel } from '../de-model.js';
import { type GetNameFromList } from '../helpers/type-utiils.js';

export type AmazonPrefixIntents =
    | 'AMAZON.CancelIntent'
    | 'AMAZON.HelpIntent'
    | 'AMAZON.StopIntent'
    | 'AMAZON.NavigateHomeIntent'
    | 'AMAZON.FallbackIntent'
    | 'AMAZON.LaunchRequest'
    | 'AMAZON.IntentRequest'
    | 'AMAZON.SessionEndedRequest';

export type BahnSkillIntent =
    | GetNameFromList<typeof deModel.interactionModel.languageModel.intents>
    | AmazonPrefixIntents;

export interface AlexaIntent {
    name: BahnSkillIntent;
}

export type BahnHafas = Required<HafasClient>;
