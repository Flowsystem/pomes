// @flow
/* eslint-disable max-classes-per-file, react/prop-types */

import React from 'react';
import { mount } from 'enzyme';

import localize from 'hocs/localize';

import I18nProvider from 'components/i18n-provider/i18n-provider';

import context from '../support/context';

jest.mock('contexts/i18n');

describe('localize test', () => {
  describe('displayName', () => {
    it('return the correct displayName', () => {
      type DisplayNameProps = {};
      class DisplayName extends React.Component<DisplayNameProps> {
        displayName = 'DisplayName'

        foo() {
          return this.foo;
        }

        render() {
          return <div />;
        }
      }

      const Name = () => <div />;

      expect(localize(DisplayName).displayName).toEqual('Localized(DisplayName)');
      expect(localize(Name).displayName).toEqual('Localized(Name)');
      expect(localize(f => f).displayName).toEqual('Localized(Component)');
    });
  });

  const translations = {
    es: {
      Hello: 'Hola',
    },
    en: {
    },
    de: {
      Hello: 'Hallo',
    },
  };

  it('should pass translation props to the given component', () => {
    const Passthrough = () => <div />;

    const Container = localize(Passthrough);

    const treeWrapper = mount(
      <I18nProvider translations={translations} lang="en" initialLang="en" initialized>
        <Container foo="bar" />
      </I18nProvider>,
    );

    const stub = treeWrapper.find(Passthrough);
    expect(stub.props().foo).toEqual('bar');
    expect(stub.props().message).toEqual(expect.any(Function));
  });

  it('also decorate functions', () => {
    const messageObject = {
      id: 'foo {bar}',
      values: {
        bar: 1,
      },
      comment: 'bar',
    };
    const Passthrough = (props) => {
      const { message } = props;
      return (
        <div>
          {
            message(messageObject)
          }
        </div>
      );
    };
    const Container = localize(Passthrough);

    const treeWrapper = mount(
      <I18nProvider translations={translations} lang="en" initialLang="en" initialized>
        <Container foo="bar" />
      </I18nProvider>,
    );

    const stub = treeWrapper.find(Passthrough);
    expect(stub.props().foo).toEqual('bar');
    expect(stub.props().message).toEqual(expect.any(Function));
    expect(context.message).toHaveBeenCalledWith(messageObject);
  });
});
