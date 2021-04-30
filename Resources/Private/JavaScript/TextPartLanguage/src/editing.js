import { Plugin } from 'ckeditor5-exports';
import TextPartLanguageCommand, { commandName } from './command';

export const attributeName = 'language';

export default class TextPartLanguageEditing extends Plugin {
    static get pluginName() {
        return 'TextPartLanguageEditing';
    }

    constructor(editor) {
        super(editor);
        editor.config.define('language', {
            textPartLanguage: []
        });
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
                value: viewElement => viewElement.getAttribute('lang')
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

                return writer.createAttributeElement('span', {
                    lang: attributeValue,
                });
            }
        });
    }
}
