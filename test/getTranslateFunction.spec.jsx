import React from 'react';
import getTranslateFunction, { legacyGetTranslateFunction } from 'getTranslateFunction';

describe('getTranslateFunction', () => {
  describe('#default', () => {
    it('wrap the text with the custom component', () => {
      const template = 'Hello {jsx-start}Joe{jsx-end}';
      const translations = {
        sv: { [template]: 'Olá {jsx-start}Joe{jsx-end}' },
        en: { [template]: template },
      };
      const CustomComponent = ({ children }) => <div>{children}</div>;
      const translateFunction = getTranslateFunction(translations, 'sv', 'en');

      const parameters = {
        id: template,
        comment: 'Foo',
        component: CustomComponent,
        className: 'CustomClassName',
      };
      expect(translateFunction(parameters)).toMatchSnapshot();
    });

    it('throw when not having both start and end jsx tags', () => {
      const template = 'something {jsx-start}something else';
      const translations = {
        sv: { [template]: 'text {jsx-start}mer text' },
        en: { [template]: template },
      };
      const CustomComponent = ({ children }) => <div>{children}</div>;
      const translateFunction = getTranslateFunction(translations, 'sv', 'en');

      const parameters = {
        id: template,
        comment: 'Foo',
        component: CustomComponent,
        className: 'CustomClassName',
      };
      expect(() => translateFunction(parameters)).toThrow('Pomes error: The number of JSX start and end tags must be the same');
    });

    it('throw when jsx-start and jsx-end are missplaced', () => {
      const template = 'something {jsx-end}something else{jsx-start}';
      const translations = {
        sv: { [template]: 'text {jsx-end}mer text{jsx-start}' },
        en: { [template]: template },
      };
      const CustomComponent = ({ children }) => <div>{children}</div>;
      const translateFunction = getTranslateFunction(translations, 'sv', 'en');

      const parameters = {
        id: template,
        comment: 'Foo',
        component: CustomComponent,
        className: 'CustomClassName',
      };
      expect(() => translateFunction(parameters)).toThrow('Pomes error: JSX start and end tags are in the wrong order');
    });

    it('throw when multiple custom component levels', () => {
      const template = 'foo {jsx-start}some {jsx-start}bar{jsx-end} thing{jsx-end} baz';
      const translations = {
        sv: { [template]: 'före {jsx-start}mitten-start {jsx-start}inuti{jsx-end} mitten-slut{jsx-end} efter' },
        en: { [template]: template },
      };
      const CustomComponent = ({ children }) => <div>{children}</div>;
      const translateFunction = getTranslateFunction(translations, 'sv', 'en');

      const parameters = {
        id: template,
        comment: 'Foo',
        component: CustomComponent,
        className: 'CustomClassName',
      };
      expect(() => translateFunction(parameters)).toThrow('Pomes error: Only one JSX tag pair is allowed');
    });

    it('throw when multiple occurences of custom component', () => {
      const template = 'start {jsx-start}middle-1{jsx-end} between {jsx-start}middle-2{jsx-end} end';
      const translations = {
        sv: {
          [template]: 'före {jsx-start}nummer-1{jsx-end} mitten {jsx-start}nummer-2{jsx-end} efter',
        },
        en: {
          [template]: template,
        },
      };
      const CustomComponent = ({ children }) => <div>{children}</div>;
      const translateFunction = getTranslateFunction(translations, 'sv', 'en');

      const parameters = {
        id: template,
        comment: 'Foo',
        component: CustomComponent,
        className: 'CustomClassName',
      };
      expect(() => translateFunction(parameters)).toThrow('Pomes error: Only one JSX tag pair is allowed');
    });

    it('throw when jsx tags without custom component', () => {
      const template = 'something {jsx-start}child text{jsx-end}';
      const translations = {
        sv: { [template]: 'text {jsx-start}mer text{jsx-end}' },
        en: { [template]: template },
      };
      const translateFunction = getTranslateFunction(translations, 'sv', 'en');

      const parameters = {
        id: template,
        comment: 'Foo',
        component: undefined,
        className: 'CustomClassName',
      };
      expect(() => translateFunction(parameters)).toThrow('Pomes error: Only one JSX tag pair is allowed');
    });

    it('return the correct value when jsx-start end jsx-end are passed with children', () => {
      const template = 'some{jsx-start} child text {jsx-end}in between';
      const translations = {
        sv: { [template]: 'a text with{jsx-start} child text {jsx-end}in between' },
        en: { [template]: template },
      };
      const translateFunction = getTranslateFunction(translations, 'sv', 'en');

      const CustomComponent = ({ children }) => (
        <p>
        a Custom Component to be used in a translated message:
          {children}
        </p>
      );

      const parameters = {
        id: template,
        comment: 'Foo',
        component: CustomComponent,
        className: 'CustomClassName',
      };
      expect(translateFunction(parameters)).toMatchSnapshot();
    });

    it('return the correct value when a jsx custom component with no children', () => {
      const template = 'no text{jsx-start}{jsx-end}in between';
      const translations = {
        sv: { [template]: 'a text with no child text{jsx-start}{jsx-end}in between' },
        en: { [template]: template },
      };
      const translateFunction = getTranslateFunction(translations, 'sv', 'en');

      const CustomComponent = ({ children }) => (
        <p>
        a Custom Component to be used in a translated message:
          {children}
        </p>
      );

      const parameters = {
        id: template,
        comment: 'Foo',
        component: CustomComponent,
        className: 'CustomClassName',
      };
      expect(translateFunction(parameters)).toMatchSnapshot();
    });

    it('return the correct value when a string component but with no children', () => {
      const template = 'nothing {jsx-start}{jsx-end}in between';
      const translations = {
        sv: { [template]: 'no text {jsx-start}{jsx-end}in between' },
        en: { [template]: template },
      };
      const translateFunction = getTranslateFunction(translations, 'sv', 'en');

      const parameters = {
        id: template,
        comment: 'Foo',
        component: 'div',
        className: 'CustomClassName',
      };
      expect(translateFunction(parameters)).toMatchSnapshot();
    });

    it('translate with options and the the parent language splitted by dash', () => {
      const template = 'nothing in between';
      const svTemplate = 'no text in between';
      const translations = {
        sv: { [template]: svTemplate },
        en: { [template]: template },
        options: {
          plural_rule: 'n != 1',
          plural_number: 2,
        },
      };
      const translateFunction = getTranslateFunction(translations, 'sv-US', 'en');

      const parameters = {
        id: template,
        comment: 'Foo',
        component: 'div',
        className: 'CustomClassName',
      };
      expect(translateFunction(parameters)).toEqual(svTemplate);
    });

    it('translate with empty options object', () => {
      const template = 'nothing in between';
      const svTemplate = 'no text in between';
      const translations = {
        sv: { [template]: svTemplate },
        en: { [template]: template },
        options: { },
      };
      const translateFunction = getTranslateFunction(translations, 'sv', 'en');

      const parameters = {
        id: template,
        comment: 'Foo',
      };
      expect(translateFunction(parameters)).toEqual(svTemplate);
    });

    it('translate based on the the fall back lang', () => {
      const template = 'the fall back translation of a message';
      const translations = {
        en: { [template]: template },
      };
      const translateFunction = getTranslateFunction(translations, 'ar', 'en');

      const parameters = {
        id: template,
        comment: 'Foo',
        component: 'div',
        className: 'CustomClassName',
      };
      expect(translateFunction(parameters)).toEqual(template);
    });

    it('return the message id when language and fallback language are not translated', () => {
      const translations = {};
      const translateFunction = getTranslateFunction(translations, 'sv', 'en');

      const parameters = {
        id: 'the message id',
        comment: 'Foo',
        component: 'div',
        className: 'CustomClassName',
      };
      expect(translateFunction(parameters)).toEqual(parameters.id);
    });

    it('return the message id when the fallback language is not translated', () => {
      const translations = {
        sv: { 'a sv message': 'the translated sv message' },
        en: { 'a en message': 'the translated en message' },
      };
      const translateFunction = getTranslateFunction(translations, 'sv');

      const parameters = {
        id: 'the message id',
        comment: 'Foo',
      };
      expect(translateFunction(parameters)).toEqual(parameters.id);
    });

    it('return the message id when the fallback language is not translated', () => {
      const translations = {
        sv: { 'a sv message': 'the translated sv message' },
      };
      const translateFunction = getTranslateFunction(translations, 'sv', 'en');

      const parameters = {
        id: 'the message id',
        comment: 'Foo',
      };
      expect(translateFunction(parameters)).toEqual(parameters.id);
    });

    it('return the message id when the message is not translated in any languages', () => {
      const translations = {
        sv: { 'a sv message': 'the translated sv message' },
        en: { 'an en message': 'the translated en message' },
      };
      const translateFunction = getTranslateFunction(translations, 'sv', 'en');

      const parameters = {
        id: 'the message id',
        comment: 'Foo',
        values: {
          value: null,
        },
      };
      expect(translateFunction(parameters)).toEqual(parameters.id);
    });

    it('coerce the passed value to string when the passed value is falsey', () => {
      const translateFunction = getTranslateFunction({}, 'sv', 'en');

      const parameters = {
        id: 'the message id: {value}',
        comment: 'Foo',
        values: {
          value: null,
        },
      };
      expect(translateFunction(parameters)).toEqual('the message id: null');
    });

    it('return the plural translation of a message', () => {
      const translations = {
        sv: { 'a sv message': 'the translated sv message' },
        en: { 'an en message': 'the translated en message' },
      };
      const translateFunction = getTranslateFunction(translations, 'sv', 'en');

      const parameters = {
        id: 'the message id',
        pluralId: 'the plural id',
        pluralCondition: 'count',
        comment: 'Foo',
        values: {
          count: 2,
        },
      };
      expect(translateFunction(parameters)).toEqual(parameters.pluralId);
    });

    it('return the message id without translating it when it is a future message', () => {
      const template = 'the message';
      const translations = {
        sv: { [template]: 'the message in sv' },
        en: { [template]: 'the message in en' },
      };
      const translateFunction = getTranslateFunction(translations, 'sv', 'en');

      const parameters = {
        id: template,
        comment: 'Foo',
        future: true,
      };
      expect(translateFunction(parameters)).toEqual(template);
    });
  });

  describe('#legacyGetTranslateFunction', () => {
    it('return a singular message without params', () => {
      const template = 'a singular message';
      const translations = {
        sv: { [template]: 'a singular message in sv' },
        en: { [template]: 'a singular message in en' },
      };
      const translateFunction = legacyGetTranslateFunction(translations, 'sv', 'en');

      expect(translateFunction(template)).toEqual('a singular message in sv');
    });

    it('return a singular message with params', () => {
      const template = 'this message has {count} translations';
      const translations = {
        sv: { [template]: 'this sv message has {count} translations' },
        en: { [template]: 'this en message has {count} translations' },
      };
      const translateFunction = legacyGetTranslateFunction(translations, 'sv', 'en');

      const params = { count: 2 };
      expect(translateFunction(template, params)).toEqual('this sv message has 2 translations');
    });

    it('return a plural message', () => {
      const template = [
        'the singular form',
        'the plural form: regarding to {count} items',
        'count',
      ];
      const translations = {
        sv: {
          [template[0]]: 'the singular form in sv',
          [template[1]]: 'the plural form in sv: regarding to {count} items',
        },
        en: {
          [template[0]]: 'the singular form in en',
          [template[1]]: 'the plural form in en: regarding to {count} items',
        },
      };
      const translateFunction = legacyGetTranslateFunction(translations, 'sv', 'en');

      const params = { count: 2 };
      expect(translateFunction(template, params)).toEqual('the plural form in sv: regarding to 2 items');
    });
  });
});
