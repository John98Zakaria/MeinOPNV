import { GetNameFromList, StripPrefix } from './helpers/type-utiils.js';
import { deModel } from './de-model.js';


export type AmazonPrefixIntents =
    'AMAZON.CancelIntent'
    | 'AMAZON.HelpIntent'
    | 'AMAZON.StopIntent'
    | 'AMAZON.NavigateHomeIntent'
    | 'AMAZON.FallbackIntent'
    | 'AMAZON.LaunchRequest'
    | 'AMAZON.IntentRequest'
    | 'AMAZON.SessionEndedRequest'

type RawAlexaPrefixIntents = StripPrefix<'AMAZON', AmazonPrefixIntents>

export type BahnSkillIntent =
    Exclude<GetNameFromList<typeof deModel.interactionModel.languageModel.intents>, AmazonPrefixIntents>
    | RawAlexaPrefixIntents

export type AlexaIntent = {
    name: BahnSkillIntent
}
