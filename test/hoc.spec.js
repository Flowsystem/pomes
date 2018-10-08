import React from 'react';
import { mount } from 'enzyme';
import I18nProvider from 'component/component';

import localize from 'hoc';

import context from './support/context';

jest.mock('component/context');

describe('hoc test', () => {
  describe('displayName', () => {
    it('return the correct displayName', () => {
      class DisplayName extends React.Component {
        displayName = 'DisplayName'

        render() {
          return <div />;
        }
      }

      class Name extends React.Component {
        name = 'Name'

        render() {
          return <div />;
        }
      }

      expect(localize()(DisplayName).displayName).toEqual('Localized(DisplayName)');
      expect(localize()(Name).displayName).toEqual('Localized(Name)');
      expect(localize()(f => f).displayName).toEqual('Localized(Component)');
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
    class Passthrough extends React.Component {
      render() {
        return <div />;
      }
    }

    const Container = localize()(Passthrough);

    const treeWrapper = mount(
      <I18nProvider translations={translations} lang="en" initialLang="en" initialized>
        <Container foo="bar" />
      </I18nProvider>,
    );

    const stub = treeWrapper.find(Passthrough);
    expect(stub.props().foo).toEqual('bar');
    expect(stub.props().message).toEqual(expect.any(Function));
    expect(stub.props().plural).toEqual(expect.any(Function));
  });

  it('should allow you to set the prop name in the child component by passing an arg to localize', () => {
    class Passthrough extends React.Component {
      render() {
        return <div />;
      }
    }

    const Container = localize('singularMessageFunc', 'pluralMessageFunc')(Passthrough);
    const treeWrapper = mount(
      <I18nProvider translations={translations} lang="en" initialLang="en" initialized>
        <Container />
      </I18nProvider>,
    );
    const stub = treeWrapper.find(Passthrough);
    const singularMessage = {
      text: 'foo {bar}',
      values: {
        bar: 1,
      },
      comment: 'Foo',
    };
    const pluralMessage = {
      texts: ['singular', 'plural'],
      condition: 'count',
      values: {
        count: 1,
      },
      comment: 'Foo',
    };
    expect(stub.props().message).toBe(undefined);
    expect(stub.props().plural).toBe(undefined);
    expect(stub.props().singularMessageFunc).toEqual(expect.any(Function));
    expect(stub.props().pluralMessageFunc).toEqual(expect.any(Function));

    stub.props().singularMessageFunc(singularMessage);
    expect(context.t).toHaveBeenCalledTimes(1);
    expect(context.t).toHaveBeenCalledWith('foo {bar}', { bar: 1 }, 'Foo');

    context.t.mockReset();

    stub.props().pluralMessageFunc(pluralMessage);
    expect(context.t).toHaveBeenCalledTimes(1);
    expect(context.t).toHaveBeenCalledWith(['singular', 'plural', 'count'], { count: 1 }, 'Foo');
  });

  it('also decorate functions', () => {
    const Passthrough = (props) => {
      const { message } = props;

      return (
        <div>
          {
            message({
              text: 'foo {bar}',
              values: {
                bar: 1,
              },
              comment: 'bar',
            })
          }
        </div>
      );
    };
    const Container = localize()(Passthrough);

    const treeWrapper = mount(
      <I18nProvider translations={translations} lang="en" initialLang="en" initialized>
        <Container foo="bar" />
      </I18nProvider>,
    );

    const stub = treeWrapper.find(Passthrough);
    expect(stub.props().foo).toEqual('bar');
    expect(stub.props().message).toEqual(expect.any(Function));
    expect(stub.props().plural).toEqual(expect.any(Function));
    expect(context.t).toHaveBeenCalledWith('foo {bar}', { bar: 1 }, 'bar');
  });
});
