import './sidebar.scss';
import React from 'react';
import classnames from 'classnames';
import { SidebarTop } from './SidebarTop/SidebarTop';
import { NavigationItem } from './NavigationItem/NavigationItem';


const routes = [
  { title: 'Home', icon: 'fas-solid fa-house', path: '/' },
  { title: 'Sales', icon: 'chart-line', path: '/sales' },
  { title: 'Costs', icon: 'chart-column', path: '/costs' },
  { title: 'Payments', icon: 'wallet', path: '/payments' },
  { title: 'Finances', icon: 'chart-pie', path: '/finances' },
  { title: 'Messages', icon: 'envelope', path: '/messages' },
];

const bottomRoutes = [
  { title: 'Settings', icon: 'sliders', path: '/settings' },
  { title: 'Support', icon: 'phone-volume', path: '/support' },
];

export default class Sidebar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpened: true,
    };
  }

  toggleSidebar = () => {
    this.setState((state) => ({ isOpened: !state.isOpened }));
    console.log(isOpened);
  };

  goToRoute = (path) => {
    console.log(`going to "${path}"`);
  };

  render() {
    const { isOpened } = this.state;
    const containerClassnames = classnames('sidebar', { opened: isOpened });

    return (
      <div className={containerClassnames}>
        <div className={classnames('sidebar-wrapper', { 'sidebar-wrapper_opened': isOpened })}>
          <SidebarTop
            toggleSidebar={this.toggleSidebar}
            isOpened={isOpened}
          />

          <div className={classnames('navigation')}>
            {
              routes.map((route) => (
                <NavigationItem key={route.title} route={route} isOpened={isOpened} />
              ))
            }
          </div>

          <div className={classnames('sidebar-bottom')}>
            {
              bottomRoutes.map((route) => (
                <NavigationItem key={route.title} route={route} isOpened={isOpened} />
              ))
            }
          </div>
        </div>
      </div>
    );
  }
}
