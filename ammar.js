
var input = document.getElementById('searchInput');
var dropdownContent = document.getElementById('dropdownContent');

input.addEventListener('input', function() {
  var searchTerm = input.value.toUpperCase();
  var items = dropdownContent.getElementsByTagName('a');
  for (var i = 0; i < items.length; i++) {
    var item = items[i];
    if (item.textContent.toUpperCase().indexOf(searchTerm) > -1) {
      item.style.display = '';
    } else {
      item.style.display = 'none';
    }
  }
  dropdownContent.classList.add('show');
});

window.addEventListener('click', function(event) {
  if (!event.target.matches('#searchInput')) {
    dropdownContent.classList.remove('show');
  }
});

        