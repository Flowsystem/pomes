// Testing: import po
import { getTrans, getTransMessage } from '../bin/import_utils';

describe('importing po files', () => {
  it('from po file to dict', () => {
    const translations = {};
    getTrans('./test/en.po', translations);

    expect(Object.keys(translations).length).toEqual(2);
    expect(Object.keys(translations)[0]).toEqual('en');
    expect(Object.keys(translations.en).length).toEqual(8);

    expect(translations.en['Traducir este texto']).toEqual('Translate this text');
    expect(translations.en['Hola {n}!']).toEqual('Hello {n}!');
    expect(translations.en['una noche']).toEqual({
      default: 'one night',
      'just nights': 'just one night',
      nights: 'only one night',
    });
    expect(translations.en['{n} noches']).toEqual({
      default: '{n} nights',
      'just nights': 'just {n} nights',
      nights: 'all the {n} nights',
    });
    expect(translations.en['Text \'with\' quotes']).toEqual('Text \'with\' quotes');

    expect(translations.options.plural_rule).toEqual('n != 1');
    expect(translations.options.plural_number).toEqual('2');
  });

  describe('getTransMessage', () => {
    it('set the default message when the message has been already set wit another context', () => {
      const currentTranslation = {
        'sample context': 'Test',
      };

      expect(getTransMessage('', 'Default test', currentTranslation)).toEqual({
        default: 'Default test',
        'sample context': 'Test',
      });
    });

    it('set a message with context', () => {
      const currentTranslation = undefined;

      expect(getTransMessage('Sample context', 'Sample test', currentTranslation)).toEqual({
        'Sample context': 'Sample test',
      });
    });

    it('set the message with default context', () => {
      const currentTranslation = undefined;

      expect(getTransMessage('default', 'Sample test', currentTranslation)).toEqual('Sample test');
    });
  });
});
