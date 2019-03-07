import React from 'react';
import { mount } from 'enzyme';
import Message from 'message';
import I18nProvider from 'component/component';
import toJson from 'enzyme-to-json';

describe('Message', () => {
  it('render', () => {
    const translations = {};
    const message = mount(
      <I18nProvider translations={translations} lang="en" initialLang="en" initialized>
        <Message id="Hello {name}" values={{ name: 'foo' }} comment="Foo" />
      </I18nProvider>,
    );

    expect(toJson(message)).toMatchSnapshot();
  });

  describe('future', () => {
    it('skip translation of future singular messages', () => {
      const translations = {
        pt: {
          Hello: 'Olá',
        },
        en: {
          Hello: 'Hello',
        },
      };
      const message = mount(
        <I18nProvider translations={translations} lang="pt" initialLang="en" initialized>
          <Message id="Hello {name}" values={{ name: 'foo' }} comment="Foo" future />
        </I18nProvider>,
      );

      expect(message.text()).toEqual('Hello foo');
      expect(toJson(message)).toMatchSnapshot();
    });

    it('skip translation of future plural messages', () => {
      const translations = {
        pt: {
          'You have one message': 'Você tem uma mensagem',
          'You have {count} messages': 'Você tem {count} mensagens',
        },
        en: {
          'You have one message': 'You have one message',
          'You have {count} messages': 'You have {count} messages',
        },
      };
      const message = mount(
        <I18nProvider translations={translations} lang="pt" initialLang="en" initialized>
          <Message
            id="You have one message"
            pluralId="You have {count} messages"
            pluralCondition="count"
            values={{ name: 'foo', count: 2 }}
            comment="Foo"
            future
          />
        </I18nProvider>,
      );

      expect(message.text()).toEqual('You have 2 messages');
      expect(toJson(message)).toMatchSnapshot();
    });
  });

  describe('with a custom component', () => {
    it('wraps the text with the custom component', () => {
      const translations = {
        pt: {
          'Hello {jsx-start}Joe{jsx-end}': 'Olá {jsx-start}Joe{jsx-end}',
        },
        en: {
          'Hello {jsx-start}Joe{jsx-end}': 'Olá {jsx-start}Joe{jsx-end}',
        },
      };
      const CustomComponent = ({ children }) => <div>{children}</div>;
      const message = mount(
        <I18nProvider translations={translations} lang="pt" initialLang="en" initialized>
          <Message
            id="Hello {jsx-start}Joe{jsx-end}"
            comment="Foo"
            component={CustomComponent}
            className="CustomClassName"
            foo="bar"
          />
        </I18nProvider>,
      );

      expect(message.text()).toEqual('Olá Joe');
      expect(toJson(message)).toMatchSnapshot();
    });

    it('it accepts a custom component and wrapped variables', () => {
      const translations = {
        pt: {
          'Hello {jsx-start}{name}{jsx-end}': 'Olá {jsx-start}{name}{jsx-end}',
        },
        en: {
          'Hello {jsx-start}{name}{jsx-end}': 'Olá {jsx-start}{name}{jsx-end}',
        },
      };
      const CustomComponent = ({ children }) => <div>{children}</div>;
      const message = mount(
        <I18nProvider translations={translations} lang="pt" initialLang="en" initialized>
          <Message
            id="Hello {jsx-start}{name}{jsx-end}"
            values={{
              name: 'Joe',
            }}
            comment="Foo"
            component={CustomComponent}
            className="CustomClassName"
            foo="bar"
          />
        </I18nProvider>,
      );

      expect(message.text()).toEqual('Olá Joe');
      expect(toJson(message)).toMatchSnapshot();
    });

    it('it accepts a custom component and variables', () => {
      const translations = {
        pt: {
          'Hello {name} {jsx-start}Doe{jsx-end}': 'Olá {name} {jsx-start}Doe{jsx-end}',
        },
        en: {
          'Hello {name} {jsx-start}Doe{jsx-end}': 'Olá {name} {jsx-start}Doe{jsx-end}',
        },
      };
      const CustomComponent = ({ children }) => <div>{children}</div>;
      const message = mount(
        <I18nProvider translations={translations} lang="pt" initialLang="en" initialized>
          <Message
            id="Hello {name} {jsx-start}Doe{jsx-end}"
            values={{
              name: 'John',
            }}
            comment="Foo"
            component={CustomComponent}
            className="CustomClassName"
            foo="bar"
          />
        </I18nProvider>,
      );

      expect(message.text()).toEqual('Olá John Doe');
      expect(toJson(message)).toMatchSnapshot();
    });

    it('ignores custom component when no jsx tags', () => {
      const template = 'before {jsx-start}middle{jsx-end} after';
      const translations = {
        sv: {
          [template]: 'före efter',
        },
        en: {
          [template]: template,
        },
      };
      const CustomComponent = ({ children }) => <div>{children}</div>;
      const message = mount(
        <I18nProvider translations={translations} lang="sv" initialLang="en" initialized>
          <Message
            id={template}
            comment="Foo"
            component={CustomComponent}
            className="CustomClassName"
            foo="bar"
          />
        </I18nProvider>,
      );

      expect(message.text()).toEqual('före efter');
      expect(toJson(message)).toMatchSnapshot();
    });
  });

  describe('plural', () => {
    it('translate singular form of plural messages', () => {
      const singularPTTranslation = 'Você tem uma mensagem';
      const pluralPTTranslation = 'Você tem {count} mensagens';
      const translations = {
        pt: {
          'You have one message': singularPTTranslation,
          'You have {count} messages': pluralPTTranslation,
        },
      };
      const message = mount(
        <I18nProvider translations={translations} lang="pt" initialLang="en" initialized>
          <Message
            id="You have one message"
            pluralId="You have {count} messages"
            pluralCondition="count"
            values={{ name: 'foo', count: 1 }}
            comment="Foo"
          />
        </I18nProvider>,
      );

      expect(message.text()).toEqual(singularPTTranslation);
      expect(toJson(message)).toMatchSnapshot();
    });

    it('translate plural messages', () => {
      const singularPTTranslation = 'Você tem uma mensagem';
      const pluralPTTranslation = 'Você tem {count} mensagens';
      const translations = {
        pt: {
          'You have one message': singularPTTranslation,
          'You have {count} messages': pluralPTTranslation,
        },
      };
      const message = mount(
        <I18nProvider translations={translations} lang="pt" initialLang="en" initialized>
          <Message
            id="You have one message"
            pluralId="You have {count} messages"
            pluralCondition="count"
            values={{ name: 'foo', count: 2 }}
            comment="Foo"
          />
        </I18nProvider>,
      );

      expect(message.text()).toEqual('Você tem 2 mensagens');
      expect(toJson(message)).toMatchSnapshot();
    });
  });
});
