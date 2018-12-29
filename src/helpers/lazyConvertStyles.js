import convertStylesToArray from './convertStylesToArray';

export default options => {
  if (!options.convertedStyles && typeof options.styles === 'object') {
    options.convertedStyles = [
      {
        selectors: ['&'],
        type: 'nested',
        condition: null,
        key: '&',
        value: convertStylesToArray(options.styles, ['&'], {}, (k, v) => {
          options[k] = v;
        })
      }
    ];
    delete options.styles;
  }
};
