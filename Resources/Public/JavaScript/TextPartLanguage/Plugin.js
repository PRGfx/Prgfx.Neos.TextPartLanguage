(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __decorateClass = (decorators, target, key, kind) => {
    var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
    for (var i = decorators.length - 1, decorator; i >= 0; i--)
      if (decorator = decorators[i])
        result = (kind ? decorator(target, key, result) : decorator(result)) || result;
    if (kind && result) __defProp(target, key, result);
    return result;
  };
  var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);

  // node_modules/@neos-project/neos-ui-extensibility/dist/readFromConsumerApi.js
  function readFromConsumerApi(key) {
    return (...args) => {
      if (window["@Neos:HostPluginAPI"] && window["@Neos:HostPluginAPI"][`@${key}`]) {
        return window["@Neos:HostPluginAPI"][`@${key}`](...args);
      }
      throw new Error("You are trying to read from a consumer api that hasn't been initialized yet!");
    };
  }
  var init_readFromConsumerApi = __esm({
    "node_modules/@neos-project/neos-ui-extensibility/dist/readFromConsumerApi.js"() {
    }
  });

  // node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/ckeditor5-exports/index.js
  var require_ckeditor5_exports = __commonJS({
    "node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/ckeditor5-exports/index.js"(exports, module) {
      init_readFromConsumerApi();
      module.exports = readFromConsumerApi("vendor")().CkEditor5;
    }
  });

  // node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/react/index.js
  var require_react = __commonJS({
    "node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/react/index.js"(exports, module) {
      init_readFromConsumerApi();
      module.exports = readFromConsumerApi("vendor")().React;
    }
  });

  // node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/prop-types/index.js
  var require_prop_types = __commonJS({
    "node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/prop-types/index.js"(exports, module) {
      init_readFromConsumerApi();
      module.exports = readFromConsumerApi("vendor")().PropTypes;
    }
  });

  // node_modules/@neos-project/neos-ui-extensibility/dist/shims/neosProjectPackages/neos-ui-decorators/index.js
  var require_neos_ui_decorators = __commonJS({
    "node_modules/@neos-project/neos-ui-extensibility/dist/shims/neosProjectPackages/neos-ui-decorators/index.js"(exports, module) {
      init_readFromConsumerApi();
      module.exports = readFromConsumerApi("NeosProjectPackages")().NeosUiDecorators;
    }
  });

  // node_modules/@neos-project/neos-ui-extensibility/dist/shims/neosProjectPackages/react-ui-components/index.js
  var require_react_ui_components = __commonJS({
    "node_modules/@neos-project/neos-ui-extensibility/dist/shims/neosProjectPackages/react-ui-components/index.js"(exports, module) {
      init_readFromConsumerApi();
      module.exports = readFromConsumerApi("NeosProjectPackages")().ReactUiComponents;
    }
  });

  // node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/react-redux/index.js
  var require_react_redux = __commonJS({
    "node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/react-redux/index.js"(exports, module) {
      init_readFromConsumerApi();
      module.exports = readFromConsumerApi("vendor")().reactRedux;
    }
  });

  // node_modules/@neos-project/neos-ui-extensibility/dist/shims/neosProjectPackages/neos-ui-redux-store/index.js
  var require_neos_ui_redux_store = __commonJS({
    "node_modules/@neos-project/neos-ui-extensibility/dist/shims/neosProjectPackages/neos-ui-redux-store/index.js"(exports, module) {
      init_readFromConsumerApi();
      module.exports = readFromConsumerApi("NeosProjectPackages")().NeosUiReduxStore;
    }
  });

  // node_modules/@neos-project/neos-ui-extensibility/dist/shims/neosProjectPackages/neos-ui-ckeditor5-bindings/index.js
  var require_neos_ui_ckeditor5_bindings = __commonJS({
    "node_modules/@neos-project/neos-ui-extensibility/dist/shims/neosProjectPackages/neos-ui-ckeditor5-bindings/index.js"(exports, module) {
      init_readFromConsumerApi();
      module.exports = readFromConsumerApi("NeosProjectPackages")().CkEditorApi;
    }
  });

  // node_modules/@neos-project/neos-ui-extensibility/dist/index.js
  init_readFromConsumerApi();
  var dist_default = readFromConsumerApi("manifest");

  // src/editing.js
  var import_ckeditor5_exports2 = __toESM(require_ckeditor5_exports());

  // src/command.js
  var import_ckeditor5_exports = __toESM(require_ckeditor5_exports());
  var commandName = "textPartLanguage";
  var TextPartLanguageCommand = class extends import_ckeditor5_exports.Command {
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
      model.change((writer) => {
        if (selection.isCollapsed) {
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
  };

  // src/util.js
  var getLanguageDirection = (lookupTable) => (
    /**
     * @param {string} languageCode
     * @returns {'rtl'|'ltr'}
     */
    (languageCode) => lookupTable[languageCode] || "ltr"
  );
  var stringifyLanguageAttribute = (languageDirectionLookup) => (
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
    }
  );
  var parseLanguageAttribute = (attributeString) => {
    const [languageCode, textDirection] = attributeString.split(":");
    return { languageCode, textDirection };
  };

  // src/editing.js
  var attributeName = "language";
  var TextPartLanguageEditing = class extends import_ckeditor5_exports2.Plugin {
    static get pluginName() {
      return "TextPartLanguageEditing";
    }
    constructor(editor) {
      super(editor);
      this.languageDirectionLookup = getLanguageDirection(editor.config.get("textPartLanguage").languageDirections);
      this.stringifyLanguageAttribute = stringifyLanguageAttribute(this.languageDirectionLookup);
    }
    init() {
      const editor = this.editor;
      editor.model.schema.extend("$text", { allowAttributes: attributeName });
      editor.model.schema.setAttributeProperties(attributeName, {
        copyOnEnter: true
      });
      this._defineConverters();
      editor.commands.add(commandName, new TextPartLanguageCommand(editor));
    }
    _defineConverters() {
      const conversion = this.editor.conversion;
      conversion.for("upcast").elementToAttribute({
        model: {
          key: attributeName,
          value: (viewElement) => {
            const languageCode = viewElement.getAttribute("lang");
            const textDirection = viewElement.getAttribute("dir");
            return this.stringifyLanguageAttribute(languageCode, textDirection);
          }
        },
        view: {
          name: "span",
          attributes: { lang: /[\s\S]+/ }
        }
      });
      conversion.for("downcast").attributeToElement({
        model: attributeName,
        // between Neos 8 and 9 the editor API changed and the writer is passed in an options object
        view: (attributeValue, maybeWriter) => {
          if (!attributeValue) {
            return;
          }
          const { languageCode, textDirection } = parseLanguageAttribute(attributeValue);
          const writer = "writer" in maybeWriter ? maybeWriter.writer : maybeWriter;
          return writer.createAttributeElement("span", {
            lang: languageCode,
            dir: textDirection || this.languageDirectionLookup(languageCode)
          });
        }
      });
    }
  };

  // src/LanguageSelect.js
  var import_react = __toESM(require_react());
  var import_prop_types = __toESM(require_prop_types());
  var import_neos_ui_decorators = __toESM(require_neos_ui_decorators());
  var import_react_ui_components = __toESM(require_react_ui_components());
  var import_react_redux = __toESM(require_react_redux());
  var import_neos_ui_redux_store = __toESM(require_neos_ui_redux_store());
  var CkEditorApi = __toESM(require_neos_ui_ckeditor5_bindings());
  var sanitizeOptions = (options) => Object.entries(options || {}).filter((tpl) => !!tpl[1]);
  var LanguageSelect = class extends import_react.PureComponent {
    constructor(props) {
      super(props);
      this.handleOnSelect = this.handleOnSelect.bind(this);
    }
    render() {
      const options = sanitizeOptions(
        this.props.inlineEditorOptions.textLanguages.languages || this.props.defaultLanguages || {}
      ).map(([value, label]) => ({
        label: this.props.i18nRegistry.translate(label),
        value
      }));
      const placeholderKey = this.props.inlineEditorOptions.textLanguages.placeholder || "Prgfx.Neos.TextPartLanguage:Editor:placeholder";
      const placeholder = this.props.i18nRegistry.translate(placeholderKey);
      const currentAttributeValue = this.props.formattingUnderCursor.textPartLanguage || null;
      let currentValue = null;
      if (currentAttributeValue) {
        currentValue = parseLanguageAttribute(currentAttributeValue).languageCode;
      }
      return /* @__PURE__ */ import_react.default.createElement(
        import_react_ui_components.SelectBox,
        {
          options,
          value: currentValue,
          placeholder,
          allowEmpty: true,
          onValueChange: this.handleOnSelect
        }
      );
    }
    handleOnSelect(languageCode) {
      CkEditorApi.executeCommand(commandName, {
        languageCode
      });
    }
  };
  __publicField(LanguageSelect, "propTypes", {
    formattingUnderCursor: import_prop_types.default.object.isRequired,
    inlineEditorOptions: import_prop_types.default.object.isRequired,
    i18nRegistry: import_prop_types.default.object.isRequired,
    defaultLanguages: import_prop_types.default.object
  });
  LanguageSelect = __decorateClass([
    (0, import_neos_ui_decorators.neos)((globalRegistry) => ({
      i18nRegistry: globalRegistry.get("i18n")
    })),
    (0, import_react_redux.connect)((state) => ({
      formattingUnderCursor: import_neos_ui_redux_store.selectors.UI.ContentCanvas.formattingUnderCursor(state)
    }))
  ], LanguageSelect);

  // src/manifest.js
  dist_default("Prgfx.Neos.TextPartLanguage", {}, (globalRegistry, { frontendConfiguration }) => {
    const ckEditorRegistry = globalRegistry.get("ckEditor5");
    const richtextToolbar = ckEditorRegistry.get("richtextToolbar");
    const config = ckEditorRegistry.get("config");
    const defaultLanguages = frontendConfiguration["Prgfx.Neos.TextPartLanguage:languages"] || {};
    const languageDirections = frontendConfiguration["Prgfx.Neos.TextPartLanguage:languageDirections"] || {};
    config.set("textPartLanguage", (ckeEditorConfiguration) => {
      ckeEditorConfiguration.plugins = ckeEditorConfiguration.plugins || [];
      ckeEditorConfiguration.plugins.push(TextPartLanguageEditing);
      ckeEditorConfiguration.textPartLanguage = {
        languageDirections
      };
      return ckeEditorConfiguration;
    });
    richtextToolbar.set("textPartLanguage", {
      component: LanguageSelect,
      callbackPropName: "onSelect",
      isVisible: (editorOptions) => !!editorOptions?.textLanguages,
      defaultLanguages
    });
  });
})();
