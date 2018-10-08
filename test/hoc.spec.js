import React from 'react';

import TestUtils from 'react-dom/test-utils';
import I18n from 'component/component';
import localize from 'hoc';

describe('hoc test', () => {
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

  class Passthrough extends React.Component {
    render() {
      return <div />;
    }
  }

  it('should pass props to the given component', () => {
    const Container = localize()(Passthrough);

    const tree = TestUtils.renderIntoDocument(
      <I18n translations={translations} lang="en" initialLang="en" initialized>
        <Container foo="bar" />
      </I18n>,
    );

    const stub = TestUtils.findRenderedComponentWithType(tree, Passthrough);
    expect(stub.props.foo).toEqual('bar');
    expect(stub.props.message).toEqual(expect.any(Function));
    expect(stub.props.plural).toEqual(expect.any(Function));
  });

  it('should allow you to set the prop name in the child component by passing an arg to localize', () => {
    const translation = jest.fn();
    const Container = localize('singularMessageFunc', 'pluralMessageFunc')(Passthrough);
    const tree = TestUtils.renderIntoDocument(
      <I18n translations={translations} lang="en" initialLang="en" initialized>
        <Container />
      </I18n>,
    );
    const stub = TestUtils.findRenderedComponentWithType(tree, Passthrough);
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
    expect(stub.props.message).toBe(undefined);
    expect(stub.props.plural).toBe(undefined);
    expect(stub.props.singularMessageFunc).toEqual(expect.any(Function));
    expect(stub.props.pluralMessageFunc).toEqual(expect.any(Function));

    // stub.props.singularMessageFunc(singularMessage);
    // expect(translation).toHaveBeenCalledTimes(1);
    // expect(translation).toHaveBeenCalledWith('foo {bar}', { bar: 1 }, 'Foo');

    // translation.mockReset();

    // stub.props.pluralMessageFunc(pluralMessage);
    // expect(translation).toHaveBeenCalledTimes(1);
    // expect(translation).toHaveBeenCalledWith(['singular', 'plural', 'count'], { count: 1 }, 'Foo');
  });
});
