//@flow

import type { NavigationScopeType } from '../../Navigation/NavigationInterface';

export type AxisXItemType = {
    value: number,
    title: string,
};

export interface AxisXGeneratorInterface {

    setNavigationScope(navigationScope: NavigationScopeType): void;

    getAxisXItems(): null | AxisXItemType[];

    getHash(): null | string;

}
