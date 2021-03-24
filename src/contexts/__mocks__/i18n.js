import context from '../../../test/support/context';

const I18nContext = {
  Consumer: (props) => props.children(context),
  Provider: (props) => props.children,
};

export default I18nContext;
