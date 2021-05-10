/**
 * @param {Record<string, 'rtl'|null>} lookupTable
 * @returns {function(string): string}
 */
export const getLanguageDirection = (lookupTable) =>
    /**
     * @param {string} languageCode
     * @returns {'rtl'|'ltr'}
     */
    (languageCode) => lookupTable[languageCode] || 'ltr';

/**
 * Stringify language-code and text-direction to a ckeditor model attribute value
 * @param {ReturnType<getLanguageDirection>} languageDirectionLookup
 * @returns {(function(string, string?): string)}
 */
export const stringifyLanguageAttribute = (languageDirectionLookup) =>
    /**
     * @param {string} languageCode
     * @param {string} textDirection
     * @returns {string}
     */
    (languageCode, textDirection) => {
        if (!textDirection) {
            const isoCode = languageCode.split(/[-_]/)[0];
            textDirection = languageDirectionLookup(isoCode);
        }
        return `${languageCode}:${textDirection}`;
    };

/**
 * Retrieves language properties from the attribute as stringified by {@link stringifyLanguageAttribute}.
 * @param {string} attributeString
 * @returns {{textDirection: string, languageCode: string}}
 */
export const parseLanguageAttribute = (attributeString) => {
    const [ languageCode, textDirection ] = attributeString.split(':');
    return { languageCode, textDirection };
};
