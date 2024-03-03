export const handleToggleFilter = (filterBtn,
  filterContent) => {
  filterBtn.addEventListener('click', () => {
    filterContent.classList.toggle('open')
  })
}