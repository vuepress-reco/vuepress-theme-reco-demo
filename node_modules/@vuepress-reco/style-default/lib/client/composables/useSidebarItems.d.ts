import type { ComputedRef, InjectionKey } from 'vue';
import type { DefaultThemeData, DefaultThemeNormalPageFrontmatter, SidebarConfigArray, SidebarConfigObject } from '../../types';
export interface NavItem {
    text: string;
    ariaLabel?: string;
}
export interface NavGroup<T> extends NavItem {
    children: T[];
}
export interface NavLink extends NavItem {
    link: string;
    rel?: string;
    target?: string;
}
export interface ResolvedSidebarItem extends Partial<NavLink> {
    isGroup?: boolean;
    children?: ResolvedSidebarItem[];
}
export declare type SidebarItemsRef = ComputedRef<ResolvedSidebarItem[]>;
export declare const sidebarItemsSymbol: InjectionKey<SidebarItemsRef>;
export declare const useSidebarItems: () => SidebarItemsRef;
export declare const resolveSidebarItems: (frontmatter: DefaultThemeNormalPageFrontmatter, themeLocale: DefaultThemeData) => ResolvedSidebarItem[];
/**
 * Resolve sidebar items if the config is an array
 */
export declare const resolveArraySidebarItems: (sidebarConfig: SidebarConfigArray) => ResolvedSidebarItem[];
/**
 * Resolve sidebar items if the config is a key -> value (path-prefix -> array) object
 */
export declare const resolveMultiSidebarItems: (sidebarConfig: SidebarConfigObject) => ResolvedSidebarItem[];
