import { color } from '@/styles/root';

export const toolbarConfigTextEditor = {
  options: [
    'inline',
    'blockType',
    'list',
    'textAlign',
    'link',
    'emoji',
    'image'
  ],
  inline: {
    inDropdown: false,
    options: [
      'bold',
      'italic',
      'underline',
      'strikethrough',
      'monospace',
      'superscript',
      'subscript'
    ]
  },
  blockType: {
    inDropdown: true,
    options: ['Normal', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'Blockquote']
  },
  list: {
    options: ['unordered', 'ordered']
  },
  textAlign: {
    options: ['left', 'center', 'right', 'justify']
  },
  emoji: {
    inDropdown: true,
    options: ['smile', 'heart', 'fire', 'star', 'thumbUp', 'thumbDown']
  }
};

export const customStyleMap = {
  CODE: {
    color: color.dark,
    backgroundColor: '#eeeded',
    padding: '0 .4rem',
    borderRadius: '.2rem',
    fontFamily: 'Roboto Mono'
  },
  QUOTES: {
    borderLeft: '5px solid blue'
  }
};
