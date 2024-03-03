export const handleDropDown = (dropdown, content) => {

  dropdown.addEventListener('click', function () {
    content.classList.toggle('active');
  });

  dropdown.addEventListener('mouseenter', function () {
    content.classList.add('active');
  });

  dropdown.addEventListener('mouseleave', function () {
    content.classList.remove('active');
  });

  content.addEventListener('mouseenter', function () {
    content.classList.add('active');
  });

  content.addEventListener('mouseleave', function () {
    content.classList.remove('active');
  });

}