// @flow

import type { RenderInterface } from '../../Base/RenderInterface';
import type { VisibilityMapType } from '../../Legend/LegendInterface';
import type { NavigationScopeType } from '../../Navigation/NavigationInterface';

export interface InfoBoxInterface extends RenderInterface {

    setVisibilityMap(visibilityMap: VisibilityMapType): void;

    setNavigationScope(navigationScope: NavigationScopeType): void;

    setCallbackOnClose(callback: Function): void;

    showInfo(index: number): void;

    move(ratio: number): void;
}
