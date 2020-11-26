import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import cx from 'classnames';

import Nav from '../AppNav/VerticalNavWrapper';
import HeaderLogo from '../AppLogo';
import {
	securityService,
} from '../../Common/Services';

import './style.scss'

class AppSidebar extends Component {

    state = {};

    render() {

        return (
            <Fragment>
                <div className="sidebar-mobile-overlay" onClick={this.props.toggleMobileMenu}/>
                <div className="app-sidebar bg-premium-dark sidebar-shadow sidebar-text-light">
                    <HeaderLogo/>
                        <div className="app-sidebar__inner">
                            {securityService.getToken() &&
                            <Nav/>
                            }
                        </div>
                </div>
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
});

// export default connect(mapStateToProps, mapDispatchToProps)(AppSidebar);
export default AppSidebar;