import { Plugin } from 'ckeditor5-exports';
import TextPartLanguageCommand, { commandName } from './command';
import {
    getLanguageDirection,
    parseLanguageAttribute,
    stringifyLanguageAttribute,
} from './util';

export const attributeName = 'language';

export default class TextPartLanguageEditing extends Plugin {
    static get pluginName() {
        return 'TextPartLanguageEditing';
    }

    constructor(editor) {
        super(editor);
        this.languageDirectionLookup = getLanguageDirection(editor.config.get('textPartLanguage').languageDirections);
        this.stringifyLanguageAttribute = stringifyLanguageAttribute(this.languageDirectionLookup);
    }

    init() {
        const editor = this.editor;

        editor.model.schema.extend('$text', { allowAttributes: attributeName });
        editor.model.schema.setAttributeProperties(attributeName, {
            copyOnEnter: true
        });
        this._defineConverters();
        editor.commands.add(commandName, new TextPartLanguageCommand(editor));
    }

    _defineConverters() {
        const conversion = this.editor.conversion;

        conversion.for('upcast').elementToAttribute({
            model: {
                key: attributeName,
                value: viewElement => {
                    const languageCode = viewElement.getAttribute('lang');
                    const textDirection = viewElement.getAttribute('dir');
                    return this.stringifyLanguageAttribute(languageCode, textDirection);
                }
            },
            view: {
                name: 'span',
                attributes: { lang: /[\s\S]+/ }
            }
        });

        conversion.for('downcast').attributeToElement({
            model: attributeName,
            view: (attributeValue, writer) => {
                if (!attributeValue) {
                    return;
                }

                const { languageCode, textDirection } = parseLanguageAttribute(attributeValue);

                return writer.createAttributeElement('span', {
                    lang: languageCode,
                    dir: textDirection || this.languageDirectionLookup(languageCode),
                });
            }
        });
    }
}
