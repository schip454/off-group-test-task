export const handleToggleMenu = (mobileMenu, mobileMenuClose, mobileMenuOpen) => {
  console.log(mobileMenu, 'mobileMenu')
  mobileMenuOpen.addEventListener('click', () => {
    console.log('mobileMenuOpen')
    mobileMenu.classList.add('open');
  })

  mobileMenuClose.addEventListener('click', () => {
    console.log('mobileMenuClose')
    mobileMenu.classList.remove('open');
  })

  console.log('13')

}