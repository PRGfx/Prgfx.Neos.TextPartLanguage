import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { neos } from '@neos-project/neos-ui-decorators';
import { SelectBox } from '@neos-project/react-ui-components';
import { connect } from 'react-redux';
import { selectors } from '@neos-project/neos-ui-redux-store';
import * as CkEditorApi from '@neos-project/neos-ui-ckeditor5-bindings';
import { commandName } from './command';
import { parseLanguageAttribute } from './util';

export const sanitizeOptions = (options) =>
    Object.entries(options || {}).filter(tpl => !!tpl[1]);

@neos(globalRegistry => ({
    i18nRegistry: globalRegistry.get('i18n'),
}))
@connect(state => ({
    formattingUnderCursor: selectors.UI.ContentCanvas.formattingUnderCursor(state),
}))
export default class LanguageSelect extends PureComponent {
    static propTypes = {
        formattingUnderCursor: PropTypes.object.isRequired,
        inlineEditorOptions: PropTypes.object.isRequired,
        i18nRegistry: PropTypes.object.isRequired,
        defaultLanguages: PropTypes.object,
    }

    constructor(props) {
        super(props);
        this.handleOnSelect = this.handleOnSelect.bind(this);
    }

    render() {
        const options = sanitizeOptions(
            this.props.inlineEditorOptions.textLanguages.languages
            || this.props.defaultLanguages
            || {}
        )
            .map(([value, label]) => ({
                label: this.props.i18nRegistry.translate(label),
                value,
            }));
        const placeholderKey = this.props.inlineEditorOptions.textLanguages.placeholder
            || 'Prgfx.Neos.TextPartLanguage:Editor:placeholder';
        const placeholder = this.props.i18nRegistry.translate(placeholderKey);
        const currentAttributeValue = this.props.formattingUnderCursor.textPartLanguage || null;
        let currentValue = null;
        if (currentAttributeValue) {
            currentValue = parseLanguageAttribute(currentAttributeValue).languageCode;
        }

        return (
            <SelectBox
                options={options}
                value={currentValue}
                placeholder={placeholder}
                allowEmpty
                onValueChange={this.handleOnSelect}
            />
        );
    }

    handleOnSelect(languageCode) {
        CkEditorApi.executeCommand(commandName, {
            languageCode,
        });
    }
}
