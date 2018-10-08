import React from 'react';
import { mount } from 'enzyme';
import Plural from 'plural';
import I18nProvider from 'component/component';
import toJson from 'enzyme-to-json';

describe('Plural', () => {
  it('render singular message', () => {
    const translations = {};
    const message = mount(
      <I18nProvider translations={translations} lang="en" initialLang="en" initialized>
        <Plural
          texts={["You have {count} message", "You have {count} messages"]}
          condition="count"
          values={{ count: 1 }}
          comment="Foo"
        />
      </I18nProvider>,
    );

    expect(toJson(message)).toMatchSnapshot();
  });

  it('render plural message', () => {
    const translations = {};
    const message = mount(
      <I18nProvider translations={translations} lang="en" initialLang="en" initialized>
        <Plural
          texts={["You have {count} message", "You have {count} messages"]}
          condition="count"
          values={{ count: 2 }}
          comment="Foo"
        />
      </I18nProvider>,
    );

    expect(toJson(message)).toMatchSnapshot();
  });
});
