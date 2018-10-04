import React, { Component, Children } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/test-utils';
import localize from 'hoc';

describe('hoc test', () => {
  class ProviderMock extends Component {
    static childContextTypes = {
      t: PropTypes.func.isRequired,
    }

    getChildContext() {
      return { t: this.props.t };
    }

    render() {
      return Children.only(this.props.children);
    }
  }

  class Passthrough extends Component {
    render() {
      return <div />;
    }
  }

  it('should receive the translation func in context', () => {
    function translation() {}

    const Container = localize()(Passthrough);

    const tree = TestUtils.renderIntoDocument(
      <ProviderMock t={translation}>
        <Container />
      </ProviderMock>,
    );

    const container = TestUtils.findRenderedComponentWithType(tree, Container);
    expect(container.context.t).toEqual(translation);
  });

  it('should pass props to the given component', () => {
    function translation() {}

    const Container = localize()(Passthrough);

    const tree = TestUtils.renderIntoDocument(
      <ProviderMock t={translation}>
        <Container foo="bar" />
      </ProviderMock>,
    );

    const stub = TestUtils.findRenderedComponentWithType(tree, Passthrough);
    expect(stub.props.foo).toEqual('bar');
    expect(stub.props.t).toEqual(translation);
  });

  it('should allow you to set the prop name in the child component by passing an arg to localize', () => {
    const translation = jest.fn();
    const Container = localize('singularMessageFunc', 'pluralMessageFunc')(Passthrough);
    const tree = TestUtils.renderIntoDocument(
      <ProviderMock t={translation}>
        <Container />
      </ProviderMock>,
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
    expect(stub.props.t).toEqual(translation);

    stub.props.singularMessageFunc(singularMessage);
    expect(translation).toHaveBeenCalledTimes(1);
    expect(translation).toHaveBeenCalledWith('foo {bar}', { bar: 1 }, 'Foo');

    translation.mockReset();

    stub.props.pluralMessageFunc(pluralMessage);
    expect(translation).toHaveBeenCalledTimes(1);
    expect(translation).toHaveBeenCalledWith(['singular', 'plural', 'count'], { count: 1 }, 'Foo');
  });
});
