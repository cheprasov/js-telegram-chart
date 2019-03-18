// @flow

import type { RenderInterface } from '../Base/RenderInterface';
import type { NavigationScopeType } from '../Navigation/NavigationInterface';
import type { VisibilityMapType } from '../Legend/LegendInterface';

export interface ViewInterface extends RenderInterface {

    setNavigationScope(navigationScope: NavigationScopeType): void;

    setVisibilityMap(visibilityMap: VisibilityMapType): void;

}