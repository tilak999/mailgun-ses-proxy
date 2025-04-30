/**
 * Replace all occurrences of a substring in a string.
 * @description This function replaces all occurrences of a specified substring in a string with a new substring.
 * @param str 
 * @param find 
 * @param replace 
 * @returns 
 */
export function replaceAll(str: string, find: string, replace: string): string {
    const escapedFind = find.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); // Escape special characters
    return str.replace(new RegExp(escapedFind, "g"), replace);
}

/**
 * Converts an object to a plain JSON string.
 * @param obj - Any JavaScript object.
 * @param config - Optional configuration object.
 * @param config.indent - Number of spaces to indent the JSON string.
 * @param config.dropKeys - Array of keys to drop from the object.
 * @returns A plain JSON string.
 */
export function safeStringify(obj: any, config?: { indent?: number; dropKeys?: string[] }): string {
    const cache = new Set<any>();
    const filterAndFormat = (key: string, value: any) => {
        if (config?.dropKeys?.includes(key)) {
            return undefined; // Drop the key
        }
        if (typeof value === "object" && value !== null) {
            if (cache.has(value)) {
                return undefined; // Avoid circular references
            }
            cache.add(value);
        }
        return value;
    };
    return JSON.stringify(obj, filterAndFormat, config?.indent || 2);
}