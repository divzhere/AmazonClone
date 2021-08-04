import React from "react";
import "./header.scss";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
function Header() {
  return (
    <div className="header">
      <img
        className="header_logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG25.png"
        alt="amazon_logo"
      ></img>
      <div className="header_search">
        <input className="header_search_input" type="text"></input>
        <SearchIcon className="header_search_icon" />
      </div>
      <div className="header_nav">
        <div className="header_option">
          <span className="header_option_line_one">Hello Guest</span>
          <span className="header_option_line_two">Sign in</span>
        </div>
        <div className="header_option">
          <span className="header_option_line_one">Returns</span>
          <span className="header_option_line_two">& Orders</span>
        </div>
        <div className="header_option">
          <span className="header_option_line_one">Your</span>
          <span className="header_option_line_two">Prime</span>
        </div>
        <div className="option_basket">
            <ShoppingBasketIcon/>
            <span className="header_option_line_two option_basket_count">0</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
