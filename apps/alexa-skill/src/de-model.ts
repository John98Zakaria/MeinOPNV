export const deModel = {
    'interactionModel': {
        'languageModel': {
            'invocationName': 'fahr mich',
            'intents': [{'name': 'AMAZON.CancelIntent', 'samples': []}, {
                'name': 'AMAZON.HelpIntent',
                'samples': []
            }, {'name': 'AMAZON.StopIntent', 'samples': []}, {
                'name': 'AMAZON.NavigateHomeIntent',
                'samples': []
            }, {'name': 'AMAZON.FallbackIntent', 'samples': []}, {
                'name': 'GoToOrt',
                'slots': [{'name': 'ort', 'type': 'BekannteOrte'}],
                'samples': ['zum {ort}', 'zu {ort}', 'nach {ort}', 'zur {ort}']
            }, {
                'name': 'AddStationIntent',
                'slots': [
                    {
                        'name': 'adresse',
                        'type': 'AMAZON.StreetName',
                        'samples': ['Die adresse lautet {adresse}', '{adresse}']
                    }, {
                        'name': 'bekannterOrt',
                        'type': 'BekannteOrte',
                        'samples': ['{bekannterOrt}', 'Der ort soll {bekannterOrt} heisen.']
                    },
                    {'name': 'ListChoice', 'type': 'AMAZON.NUMBER'}],
                'samples': ['Speichere {adresse} als {bekannterOrt}', 'Merke dir einen Neunen Ort', 'Speichere einen Neuen Ort']
            }],
            'types': [{
                'values': [{'name': {'value': 'Arbeit', 'synonyms': ['job']}}, {
                    'name': {
                        'value': 'Uni',
                        'synonyms': ['Universität']
                    }
                }], 'name': 'BekannteOrte'
            }]
        },
        'dialog': {
            'intents': [{
                'name': 'AddStationIntent',
                'confirmationRequired': false,
                'prompts': {},
                'slots': [{
                    'name': 'adresse',
                    'type': 'AMAZON.StreetName',
                    'elicitationRequired': true,
                    'confirmationRequired': false,
                    'prompts': {'elicitation': 'Elicit.Slot.206116147410.483422192679'}
                }, {
                    'name': 'bekannterOrt',
                    'type': 'BekannteOrte',
                    'elicitationRequired': true,
                    'confirmationRequired': true,
                    'prompts': {
                        'confirmation': 'Confirm.Slot.206116147410.876656949550',
                        'elicitation': 'Elicit.Slot.206116147410.876656949550'
                    }
                }, {
                    'name': 'ListChoice',
                    'type': 'AMAZON.NUMBER',
                    'elicitationRequired': false,
                    'confirmationRequired': false,
                    'prompts': {},
                    'validations': [{
                        'type': 'isGreaterThan',
                        'prompt': 'Slot.Validation.206116147410.199805348541.87145184706',
                        'value': '0'
                    }, {
                        'type': 'isLessThan',
                        'prompt': 'Slot.Validation.206116147410.199805348541.1110212648416',
                        'value': '6'
                    }]
                }]
            }, {
                'name': 'GoToOrt',
                'confirmationRequired': false,
                'prompts': {},
                'slots': [{
                    'name': 'ort',
                    'type': 'BekannteOrte',
                    'elicitationRequired': false,
                    'confirmationRequired': false,
                    'prompts': {}
                }]
            }], 'delegationStrategy': 'ALWAYS'
        },
        'prompts': [{
            'id': 'Elicit.Slot.206116147410.876656949550',
            'variations': [{'type': 'PlainText', 'value': 'Wie soll der Ort heißen?'}]
        }, {
            'id': 'Confirm.Slot.206116147410.876656949550',
            'variations': [{'type': 'PlainText', 'value': 'Habe ich {bekannterOrt} richtig verstanden?'}]
        }, {
            'id': 'Elicit.Slot.206116147410.483422192679',
            'variations': [{'type': 'PlainText', 'value': 'Wie lautet die adresse ?'}]
        }, {
            'id': 'Slot.Validation.206116147410.199805348541.87145184706',
            'variations': [{'type': 'PlainText', 'value': 'Die Zahl muss grosser als null sein.'}]
        }, {
            'id': 'Slot.Validation.206116147410.199805348541.1110212648416',
            'variations': [{'type': 'PlainText', 'value': 'Die Zahl muss kleiner als sechs sein.'}]
        }]
    }, 'version': '10'
} as const;
