import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import './UIDropdown.scss';


/**
 * @typedef UIDropdownItem
 * @type {Object}
 * @property {string} title - The title of the item.
 * @property {string} [linkTo] - The URL that the item links to.
 * @property {UIDropdownItemClickCallback} [onClick] - The function to be called when the item is clicked.
 */

/**
 * @callback UIDropdownItemClickCallback
 * @param {Event} e - The click event.
 * @param {Item} item - The clicked item.
 */

/**
 * @callback UIDropdownItemChangeCallback
 * @param {Item} item - The selected item.
 */

/**
 * UI Dropdown
 *
 * @component
 * @param {Object} props - The properties that define the component.
 * @param {string} [props.className] - The CSS class for the main component.
 * @param {string} [props.classNameButton] - The CSS class for the button.
 * @param {string} [props.classNameList] - The CSS class for the dropdown.
 * @param {string|ReactNode} props.title - The button text title or component.
 * @param {Function} props.renderTitle - The function to render button title (overrides default dropdown button CSS).
 * @param {string} props.placeholder - The button placeholder (displayed when there's no title).
 * @param {UIDropdownItem[]} [props.items] - The items to be displayed in the dropdown.
 * @param {UIDropdownItem} [props.selectedItem] - The selected item (will be highlighted in the dropdown).
 * @param {ReactNode} [props.children] - The child elements of the dropdown (to be used instead of <props.items>).
 * @param {UIDropdownItemChangeCallback} [props.onChange] - The function to be called when a new item selected.
 * @returns {ReactElement}
 */
export const UIDropdown = (props) => {
  const [hoveredItemIndex, setHoveredItemIndex] = useState(-1);
  const navigate = useNavigate();

  const {
    className,
    classNameButton,
    classNameList,
    title,
    renderTitle,
    placeholder, // TODO: clarify the UX
    items,
    selectedItem,
    children,
    onChange,
  } = props;

  const buttonRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    function onBodyClick(e){
      if (e.target !== buttonRef.current && !buttonRef.current.contains(e.target)) {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener('click', onBodyClick);
    return () => {
      document.removeEventListener('click', onBodyClick);
    };
  }, []);

  useEffect(() => {
    function onArrowNavigation(e){
      if (isMenuOpen && items?.length) {
        if (e.key === 'Enter') {
          const hoveredItem = items[hoveredItemIndex];
          if (hoveredItem) {
            e.preventDefault();
            onItemClick(e, hoveredItem, hoveredItem.onClick);
            hoveredItem.linkTo && navigate(hoveredItem.linkTo);
            setIsMenuOpen(false);
          }
        }
        else if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
          e.preventDefault();
          const delta = e.key === 'ArrowUp' ? -1 : 1;
          const nextHoveredItemIndex = getNextHoveredItemIndex(hoveredItemIndex, delta);
          setHoveredItemIndex(nextHoveredItemIndex);
        }
        else if (e.key === 'Escape') {
          e.preventDefault();
          setIsMenuOpen(false);
        }
      }
    }

    document.addEventListener('keydown', onArrowNavigation);
    return () => {
      document.removeEventListener('keydown', onArrowNavigation);
    }
  }, [isMenuOpen, hoveredItemIndex, items]);


  function getNextHoveredItemIndex(currentIndex, delta) {
    let nextIndex = currentIndex + delta;
    if (nextIndex < 0) {
      return items.length - 1;
    }
    else if (nextIndex >= items.length) {
      return 0;
    }
    return nextIndex;
  }

  function onButtonClick(e){
    e.preventDefault();
    setIsMenuOpen(!isMenuOpen);
  }

  function onItemClick(e, item, onClick){
    onChange && onChange(item);
    onClick && onClick(e, item);
  }

  function onItemMouseEnter(index){
    setHoveredItemIndex(index);
  }

  function renderItem(item, index){
    const { title, linkTo, onClick } = item;

    const isItemActive = selectedItem?.title === item.title;
    const itemInnerProps = {
      className: 'UIDropdown__inner',
      onClick: (e) => onItemClick(e, item, onClick),
      onMouseEnter: () => onItemMouseEnter(index),
    };

    return (
      <li key={index} className={cn({
        'UIDropdown__item': true,
        'UIDropdown__item--active': isItemActive,
        'UIDropdown__item--hovered': hoveredItemIndex === index,
      })}>
        {Boolean(linkTo)
          ? <Link {...itemInnerProps} to={linkTo}>{title}</Link>
          : <span {...itemInnerProps}>{title}</span>
        }
      </li>
    );
  }

  return (
    <div className={cn({
      'UIDropdown': true,
      'UIDropdown--open': isMenuOpen,
      [className]: Boolean(className),
    })}>

      {renderTitle
        ? <span ref={buttonRef} onClick={onButtonClick}>{renderTitle()}</span>
        : (
          <span
            className={cn({
              'UIDropdown__button': true,
              'UIDropdown__button--is-placeholder': !title,
              [classNameButton]: Boolean(classNameButton),
            })}
            onClick={onButtonClick}
            ref={buttonRef}>
            {title || placeholder}
          </span>
        )
      }

      <ul className={cn({
        'UIDropdown__list': true,
        [classNameList]: Boolean(classNameList),
      })}>
        {children ? children : items.map(renderItem)}
      </ul>
    </div>
  );
};
