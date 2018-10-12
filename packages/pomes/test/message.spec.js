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
          'Hello': 'Olá',
        },
        en: {
          'Hello': 'Hello',
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

  describe('plural', () => {
    it('translate singular form of plural messages', () => {
      const singularPTTranslation = 'Você tem uma mensagem';
      const pluralPTTranslation = 'Você tem {count} mensagens'
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
      const pluralPTTranslation = 'Você tem {count} mensagens'
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
