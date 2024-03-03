export const handleToggleMenu = (mobileMenu, mobileMenuClose, mobileMenuOpen) => {
  mobileMenuOpen.addEventListener('click', () => {
    mobileMenu.classList.add('open');
  })

  mobileMenuClose.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
  })


}