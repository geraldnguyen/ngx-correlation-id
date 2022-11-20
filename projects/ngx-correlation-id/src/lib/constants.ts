export const CONFIG_OPTION = 'CONFIG_OPTION';
export const DEFAULT_HEADER = 'x-correlation-id';

/**
 * system
 * [system, header]
 * { system, header }
 */
 export type ConfigOptions = string | [string, string] | { system: string; header: string; };