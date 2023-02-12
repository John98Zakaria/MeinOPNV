import { type Intent } from 'ask-sdk-model';

interface SlotUnderstood {
    heardAs: string | undefined,
    resolved: string,
    ERstatus: 'ER_SUCCESS_MATCH' | 'ER_SUCCESS_NO_MATCH' | 'ER_ERROR'

}

export function getSlotValues<T>(filledSlots: Intent['slots']): Map<T | number, SlotUnderstood> {
    const slotValues = new Map<T, SlotUnderstood>();
    if (filledSlots === undefined) {
        return new Map();
    }

    Object.keys(filledSlots).forEach((item: keyof typeof filledSlots) => {
        const slotItem = filledSlots[item];
        const name = slotItem.name;

        if (slotItem?.resolutions?.resolutionsPerAuthority?.[0]?.status?.code !== undefined) {
            switch (slotItem.resolutions.resolutionsPerAuthority[0].status.code) {
                case 'ER_SUCCESS_MATCH':
                    slotValues.set(name as T, {
                        heardAs: slotItem.value,
                        resolved: slotItem.resolutions.resolutionsPerAuthority[0].values[0]?.value.name ?? 'Error',
                        ERstatus: 'ER_SUCCESS_MATCH',
                    });
                    break;
                case 'ER_SUCCESS_NO_MATCH':
                    slotValues.set(name as T, {
                        heardAs: slotItem.value,
                        resolved: '',
                        ERstatus: 'ER_SUCCESS_NO_MATCH',
                    });
                    break;
                default:
                    break;
            }
        } else {
            slotValues.set(name as T, {
                heardAs: slotItem.value,
                resolved: '',
                ERstatus: 'ER_ERROR',
            });
        }
    });

    return slotValues;
}
