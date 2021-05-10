import manifest from '@neos-project/neos-ui-extensibility';
import TextPartLanguage from './editing';
import LanguageSelect from './LanguageSelect';
import { $get } from 'plow-js';

manifest('Prgfx.Neos.TextPartLanguage', {}, (globalRegistry, { frontendConfiguration }) => {

    const ckEditorRegistry = globalRegistry.get('ckEditor5');
    const richtextToolbar = ckEditorRegistry.get('richtextToolbar');
    const config = ckEditorRegistry.get('config');

    const defaultLanguages = frontendConfiguration['Prgfx.Neos.TextPartLanguage:languages'] || {};
    const languageDirections = frontendConfiguration['Prgfx.Neos.TextPartLanguage:languageDirections'] || {};

    config.set('textPartLanguage', ckeEditorConfiguration => {
        ckeEditorConfiguration.plugins = ckeEditorConfiguration.plugins || [];
        ckeEditorConfiguration.plugins.push(TextPartLanguage);
        ckeEditorConfiguration.textPartLanguage = {
            languageDirections,
        };
        return ckeEditorConfiguration;
    });

    richtextToolbar.set('textPartLanguage', {
        component: LanguageSelect,
        callbackPropName: 'onSelect',
        isVisible: $get('textLanguages'),
        defaultLanguages,
    });
});
