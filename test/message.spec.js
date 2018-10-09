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
});
