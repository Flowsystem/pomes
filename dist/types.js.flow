// @flow
import * as React from 'react';

type SingularMessageProps = {
  id: string,
  comment: string,
  context?: string,
  future?: boolean,
  values?: {},
  component?: string | React.ComponentType<any>,
  pluralCondition?: void,
  pluralId?: void,
};

type PluralMessageProps = {
  id: string,
  comment: string,
  pluralId: string,
  pluralCondition: string,
  values: {},
  context?: string,
  future?: boolean,
  component?: string | React.ComponentType<any>,
};

export type MessageProps = SingularMessageProps | PluralMessageProps;

export type MessageTranslator = (props: MessageProps) => string | React.Node;

type InjectedProps = {|
  message: MessageTranslator,
|};

type DecoratedProps<OriginalProps> = {|
  ...OriginalProps,
  ...InjectedProps,
|};

type LocalizedComponent<Props> = React.AbstractComponent<$Rest<$Exact<Props>, InjectedProps>>;

type ComponentToLocalize<Props> = React.AbstractComponent<DecoratedProps<$Exact<Props>>>;

export type {
  LocalizedComponent,
  ComponentToLocalize,
};

export type Localize<Props> = (ComponentToLocalize<Props>) => LocalizedComponent<Props>;

export type SetLanguageAction = {|
  type: 'REDUX_I18N_SET_LANGUAGE',
  lang: string
|};

export type SetTranslationsAction = {|
  type: 'REDUX_I18N_SET_TRANSLATIONS',
  translations: {},
|};

export type SetForceRefreshAction = {|
  type: 'REDUX_I18N_SET_FORCE_REFRESH',
  force: boolean,
|};

export type Action = SetLanguageAction | SetTranslationsAction | SetForceRefreshAction;

export type I18nState = {|
  +lang: string,
  +translations: {},
  +forceRefresh: boolean,
|};

export type State = {
  +i18nState: I18nState,
};

export type I18nProviderProps = {|
  translations: {
    options?: {
      plural_rule: string,
      plural_number: string,
    },
  },
  lang: string,
  translationsFromRedux?: {
    options?: {
      plural_rule: string,
      plural_number: string,
    },
  },
  useReducer?: boolean,
  initialLang?: string,
  fallbackLang?: string,
  initialized?: boolean,
  children: React.Node,
  dispatch?: Function,
|}

export type I18nProviderPropsMSProps = {|
  lang: string,
  translationsFromRedux: {},
|};

export type I18nProviderOwnProps = (
  $Diff<I18nProviderProps, I18nProviderPropsMSProps>
);

export type MapStateToProps = (
  state: State,
  ownProps: I18nProviderOwnProps
) => I18nProviderPropsMSProps;

export type TranslateHOF = (
  translations: {
    options?: {
      plural_rule: string,
      plural_number: string,
    },
  },
  lang: string,
  fallbackLang?: string
) => (
  message: MessageProps,
) => React.Node | string;
