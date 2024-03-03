import '../scss/main.scss'

import { handleDropDown } from './dropDownMenu'
import { imagesSlider } from './imagesSlider';
import { handleTabs } from './tabs';
import { handleToggleFilter } from './toggleFilter';
import { handleToggleMenu } from './toggleMenu';


document.addEventListener('DOMContentLoaded', () => {

  const dropdown = document.querySelector('.menu__dropdown');
  const content = document.querySelector('.menu__dropdown-content');

  const tabs = document.querySelectorAll(".product__tab");
  const tabContent = document.querySelectorAll(".product__tabs-pane");

  const mobileMenu = document.querySelector('.header__menu');
  const mobileMenuOpen = document.querySelector('.header__menu-btn');
  const mobileMenuClose = document.querySelector('.header__menu-close');

  const filterBtn = document.querySelector('.product__btn-filter')
  const filterContent = document.querySelector('.product__aside')

  if (tabs && tabContent)
    handleTabs(tabs, tabContent)


  if (mobileMenu && mobileMenuClose && mobileMenuOpen)
    handleToggleMenu(mobileMenu, mobileMenuClose, mobileMenuOpen)


  if (dropdown && content)
    handleDropDown(dropdown, content)


  if (filterBtn &&
    filterContent)
    handleToggleFilter(filterBtn, filterContent)



  imagesSlider()








});


