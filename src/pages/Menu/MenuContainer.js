import { connect } from 'react-redux';
import { setMenuShow } from '@root-redux/rootActions';
import { Menu } from './Menu';

const mapStateToProps = ({ rootReducer }) => ({
  isMenuShow: rootReducer.isMenuShow,
});

const mapDispatchToProps = {
  setMenuShow,
};

export const MenuContainer = connect(mapStateToProps, mapDispatchToProps)(Menu);
