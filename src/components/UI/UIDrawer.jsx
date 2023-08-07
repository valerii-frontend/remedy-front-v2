import React, { useEffect } from 'react';
import cn from 'classnames';
import { toggleBodyScroll } from '../../utils.js';
import './UIDrawer.scss';

/**
 * @component
 * @param {Object} props
 * @param {string} props.className - Class name for the container
 * @param {string} props.classNameDrawer - Class name for the drawer element
 * @param {string} props.classNameContent - Class name for the content block inside the drawer
 * @param {React.ReactNode} props.children - The child nodes this component should render
 * @param {boolean} props.isOpen - Determines whether the drawer is open or not
 * @param {function} props.onClose - Function that is called when the drawer is closed
 *
 * @example
 * <UIDrawer
 *    className="my-drawer"
 *    classNameDrawer="my-drawer-element"
 *    classNameContent="my-drawer-content"
 *    isOpen={true}
 *    onClose={() => console.log('Drawer closed')}>
 *    <p>Drawer Content</p>
 * </UIDrawer>
 */
export function UIDrawer(props){
  const { className, classNameDrawer, classNameContent, children, isOpen, onClose } = props;

  useEffect(() => {
    toggleBodyScroll({ isScrollable: !isOpen });
  }, [isOpen]);

  useEffect(() => {
    const onEscPress = (e) => {
      if (e.key === 'Escape') {
        close();
      }
    };
    document.addEventListener('keydown', onEscPress);

    return () => {
      document.removeEventListener('keydown', onEscPress);
    };
  }, []);

  const close = () => {
    toggleBodyScroll({ isScrollable: true });
    onClose && onClose();
  };

  return (
    <div className={cn({
      'UIDrawer': true,
      'UIDrawer--open': isOpen,
      [className]: Boolean(className),
    })}>
      <i className="UIDrawer__backdrop" onClick={close}/>
      <div className={cn({
        'UIDrawer__container': true,
        [classNameDrawer]: Boolean(classNameDrawer),
      })}>
        <i className="UIDrawer__close UICrossIcon" onClick={close}/>
        <i className="UIDrawer__close-fadeout"/>
        <div className={cn({
          'UIDrawer__content': true,
          [classNameContent]: Boolean(classNameContent),
        })}>
          {children}
        </div>
      </div>
    </div>
  );
}
