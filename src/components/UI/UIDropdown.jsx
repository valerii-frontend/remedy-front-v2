import React, { useState, useEffect, useRef } from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import './UIDropdown.scss';


export const UIDropdown = (props) => {

  const {
    className,
    classNameButton,
    classNameList,
    title,
    linkTo,
    items,
    renderButton,
    children,
  } = props;

  const buttonRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onBodyClick = (e) => {
      if (e.target !== buttonRef.current && !buttonRef.current.contains(e.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', onBodyClick);
    return () => {
      document.removeEventListener('click', onBodyClick);
    };
  }, []);

  const onToggle = (e) => {
    e.preventDefault();
    setIsMenuOpen(!isMenuOpen);
  };

  const renderItem = (item, index) => {
    const { title, linkTo, onClick, isActive } = item;

    const className = cn({
      'UIDropdown__inner': true,
      'UIDropdown__inner--active': isActive,
      'dropdown-item': true,
    });

    return (
      <li className="UIDropdown__item" key={index}>
        {Boolean(linkTo)
          ? <Link className={className} onClick={onClick} to={linkTo}>{title}</Link>
          : <span className={className} onClick={onClick}>{title}</span>
        }
      </li>
    );
  };

  const buttonProps = {
    className: cn(classNameButton, 'UIDropdown__button dropdown-toggle'),
    onClick: onToggle,
    ref: buttonRef,
    to: linkTo,
  };

  return (
    <div className={cn({
      'UIDropdown': true,
      [className]: Boolean(className),
    })}>

      {renderButton && (
        <span {...buttonProps}>{renderButton()}</span>
      )}

      {!renderButton && (
        Boolean(linkTo)
          ? <Link {...buttonProps}>{title}</Link>
          : <span {...buttonProps}>{title}</span>
      )}

      <ul className={cn({
        'UIDropdown__list': true,
        'dropdown-menu': true,
        'show': isMenuOpen,
        [classNameList]: Boolean(classNameList),
      })}>
        {children ? children : items.map(renderItem)}
      </ul>
    </div>
  );
};
