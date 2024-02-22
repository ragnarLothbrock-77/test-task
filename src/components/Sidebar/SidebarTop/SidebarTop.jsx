import React from 'react';
import logo from '../../../assets/logo.png';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './SidebarTop.scss';


export const SidebarTop = ({ toggleSidebar, isOpened }) => {
  return (
    <div className={classnames('sidebar-top')}>
      <img
        className={classnames('sidebar-top__image', { 'sidebar-top__image_large': isOpened })}
        src={logo}
        alt="TensorFlow logo"
      />
      <div className={classnames('sidebar-top__switcher', { 'sidebar-top__switcher_opened': isOpened })}>
        <button
          className={classnames('sidebar-top__button', { 'sidebar-top__button_opened': isOpened })}
          onClick={toggleSidebar}>
          <FontAwesomeIcon
            className={classnames('sidebar-top__icon')}
            icon={isOpened ? 'angle-left' : 'angle-right'}
          />
        </button>
      </div>
    </div>
  )
}