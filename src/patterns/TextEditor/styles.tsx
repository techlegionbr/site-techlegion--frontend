import { presenceAnimation } from '@/animations/presence';
import { color } from '@/styles/root';
import styled from 'styled-components';

export const TextEditor = styled.div`
  width: 100%;
  .text-editor-preview {
    width: 100%;
    color: #ffffffe8;
    figure {
      .rdw-image-imagewrapper img {
        max-width: 100%;
        overflow: hidden;
        border-radius: .3rem;
      }
    }
    .rdw-link-decorator-wrapper {
        a{
          color: ${color.third};
          cursor: pointer;

        }
        .rdw-link-decorator-icon{
          display: none;
        }
      }
  }
  .text-editor {
    resize: vertical;
    width: 100%;
    background: #fff;
    padding: 1rem;
    border-radius: 0.5rem;
    color: #000;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    .text-editor-content {
      width: 900px;
      .rdw-editor-toolbar {
        justify-content: center;
        .rdw-dropdown-selectedtext span {
          color: #000;
        }
        .rdw-option-wrapper{
          width: 30px;
          height: 30px;
          display: flex;
          justify-content: center; 
          align-items: center;
        }
        
        .rdw-option-wrapper.rdw-option-active{
          background-color: #f0f0f0;
        }
        .rdw-embedded-modal,
        .rdw-link-modal {
          box-shadow: none;
          height: auto;
        }
        .rdw-emoji-modal,
        .rdw-image-modal,
        .rdw-colorpicker-modal {
          box-shadow: none;
        }
        .rdw-image-modal .rdw-image-modal-size-input,
        .rdw-embedded-modal .rdw-embedded-modal-size-input {
          padding: 0.3rem;
        }
        .rdw-image-modal .rdw-image-modal-btn,
        .rdw-link-modal .rdw-link-modal-btn,
        .rdw-embedded-modal .rdw-embedded-modal-btn {
          width: auto;
          height: auto;
          padding: 0.3rem 1rem;
        }
      }
      .field-editor-content {
        min-height: 400px;
        max-height: 700px;
        overflow-y: auto;
        padding-right: 0.7rem;
        figure {
          .rdw-image-imagewrapper img {
            max-width: 100%;
          }
        }
      }
    }
  }

  .helper-text {
    margin-top: 0.4rem;
    font-size: 0.7rem;
    line-height: 0.8rem;
    color: ${color.danger};
    font-weight: bold;
    ${presenceAnimation({
  animation: 'opacity',
  duration: 0.3
})};
  }
`;
