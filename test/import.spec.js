// Testing: import po
import { getTrans, setTransMessage } from '../bin/import_utils';

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

  describe('setTransMessage', () => {
    it('set the default message when the message has been already set wit another context', () => {
      const translation = {
        test: {
          'sample context': 'Test',
        },
      };

      setTransMessage('', translation, 'test', 'Default test');

      expect(translation).toEqual({
        test: {
          default: 'Default test',
          'sample context': 'Test',
        },
      });
    });

    it('set a message with context', () => {
      const translation = {};

      setTransMessage('Sample context', translation, 'test', 'Sample test');

      expect(translation).toEqual({
        test: {
          'Sample context': 'Sample test',
        },
      });
    });

    it('set the message with default context', () => {
      const translation = {};

      setTransMessage('default', translation, 'test', 'Sample test');

      expect(translation).toEqual({
        test: 'Sample test',
      });
    });
  });
});
