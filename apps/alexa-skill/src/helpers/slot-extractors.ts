import { Intent } from 'ask-sdk-model';

type SlotUnderstood = {
    heardAs: string | undefined,
    resolved: string,
    ERstatus: 'ER_SUCCESS_MATCH' | 'ER_SUCCESS_NO_MATCH' | 'ER_ERROR'

}

export function getSlotValues<T>(filledSlots: Intent['slots']): Map<T | number, SlotUnderstood> {
    const slotValues: Map<T, SlotUnderstood> = new Map();
    if (filledSlots === undefined) {
        return new Map();
    }

    Object.keys(filledSlots).forEach((item: keyof typeof filledSlots) => {
        let slotItem = filledSlots[item];
        if (!slotItem) {
            throw Error('Null Error');
        }
        const name = slotItem.name;

        if (slotItem &&
            slotItem.resolutions &&
            slotItem.resolutions.resolutionsPerAuthority &&
            slotItem.resolutions.resolutionsPerAuthority[0] &&
            slotItem.resolutions.resolutionsPerAuthority[0].status &&
            slotItem.resolutions.resolutionsPerAuthority[0].status.code) {
            switch (slotItem.resolutions.resolutionsPerAuthority[0].status.code) {
                case 'ER_SUCCESS_MATCH':
                    slotValues.set(name as T, {
                        heardAs: slotItem.value,
                        resolved: slotItem.resolutions.resolutionsPerAuthority[0].values[0]?.value.name ?? 'Error',
                        ERstatus: 'ER_SUCCESS_MATCH'
                    });
                    break;
                case 'ER_SUCCESS_NO_MATCH':
                    slotValues.set(name as T, {
                        heardAs: slotItem.value,
                        resolved: '',
                        ERstatus: 'ER_SUCCESS_NO_MATCH'
                    });
                    break;
                default:
                    break;
            }
        } else {
            slotValues.set(name as T, {
                heardAs: slotItem.value,
                resolved: '',
                ERstatus: 'ER_ERROR'
            });
        }
    });

    return slotValues;
}
