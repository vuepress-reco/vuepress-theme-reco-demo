import type { ComputedRef, InjectionKey } from 'vue';
import type { PageHeader } from '@vuepress/client';
import type { ResolvedSidebarItem } from '../../types';
export interface ResolvedPageHeader {
    [prop: string]: any;
}
export declare type PageHeadersRef = ComputedRef<ResolvedPageHeader[]>;
export declare const pageHeadersSymbol: InjectionKey<PageHeadersRef>;
export declare const usePageHeaders: () => PageHeadersRef;
export declare function resolvePageHeaders(): any;
export declare const headerToSidebarItem: (header: PageHeader) => ResolvedSidebarItem;
export declare const headersToSidebarItemChildren: (headers: PageHeader[]) => ResolvedSidebarItem[];
