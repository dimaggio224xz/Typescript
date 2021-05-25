import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setMenuShow } from '@root-redux/rootActions';

const CustomRouteLink = ({ isMenuShow, setMenuShow, children, ...rest }) => (
  <Link
    onClick={() => {
      if (isMenuShow) setMenuShow(false);
    }}
    {...rest}
  >
    {children}
  </Link>
);

const mapStateToProps = ({ rootReducer }) => ({
  isMenuShow: rootReducer.isMenuShow,
});
const mapDispatchToProps = {
  setMenuShow,
};

export const RouteLink = connect(mapStateToProps, mapDispatchToProps)(CustomRouteLink);
