import type { NavLink } from '../../types';
/**
 * Resolve NavLink props from string
 *
 * @example
 * - Input: '/README.md'
 * - Output: { text: 'Home', link: '/' }
 */
export declare const useNavLink: (item: string) => NavLink;
