import React from 'react';
import getTranslateFunction from 'getTranslateFunction';

describe('getTranslateFunction', () => {
  it('wraps the text with the custom component', () => {
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

  it('throws when not having both start and end jsx tags', () => {
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

  it('throws when multiple custom component levels', () => {
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

  it('throws when multiple occurences of custom component', () => {
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

  it('throws when jsx tags without custom component', () => {
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
});
