import { Command } from 'ckeditor5-exports';
import { attributeName } from './editing';

export const commandName = 'textPartLanguage';

export default class TextPartLanguageCommand extends Command {
    refresh() {
        const model = this.editor.model;
        const doc = model.document;

        this.value = this._getValueFromFirstAllowedNode();
        this.isEnabled = model.schema.checkAttributeInSelection(doc.selection, attributeName);
    }

    execute({ languageCode } = {}) {
        const model = this.editor.model;
        const doc = model.document;
        const selection = doc.selection;

        const value = languageCode || false;

        model.change(writer => {
            if (selection.isCollapsed) {
                // from the original plugin:
                // this seems to apply to an "empty" selection and would just
                // insert span at the current cursor, which is not what we want,
                // because it is difficult to find and un-set
                // if (value) {
                //     writer.setSelectionAttribute(attributeName, value);
                // } else {
                //     writer.removeSelectionAttribute(attributeName);
                // }
            } else {
                const ranges = model.schema.getValidRanges(selection.getRanges(), attributeName);

                for (const range of ranges) {
                    if (value) {
                        writer.setAttribute(attributeName, value, range);
                    } else {
                        writer.removeAttribute(attributeName, range);
                    }
                }
            }
        });
    }

    _getValueFromFirstAllowedNode() {
        const model = this.editor.model;
        const schema = model.schema;
        const selection = model.document.selection;

        if (selection.isCollapsed) {
            return selection.getAttribute(attributeName) || false;
        }

        for (const range of selection.getRanges()) {
            for (const item of range.getItems()) {
                if (schema.checkAttribute(item, attributeName)) {
                    return item.getAttribute(attributeName) || false;
                }
            }
        }

        return false;
    }

}
