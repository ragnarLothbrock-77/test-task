import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './NavigationItem.scss';


export const NavigationItem = ({ route, goToRoute, isOpened }) => {
  return (
    <div
      onClick={() => goToRoute(route.path)}
      className={classnames('navigation-item', { 'navigation-item_opened': isOpened })}
    >
      <FontAwesomeIcon
        icon={route.icon}
        className={classnames('navigation-item__icon')}
      />
      <span className={classnames('navigation-item__text', { 'navigation-item__text_showed': isOpened })}>{route.title}</span>
    </div>
  )
}