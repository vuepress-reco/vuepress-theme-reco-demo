import type { Theme, ThemeConfig } from '@vuepress/core';
import { StyleOptions } from '../types/';
export declare const defineStyle: (options: (themeConfig: Record<string, any>) => StyleOptions) => Theme<ThemeConfig>;
