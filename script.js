const checkboxes = document.querySelectorAll('.myCheckbox');
const labels = document.querySelectorAll('.myLabel');

checkboxes.forEach(function(checkbox, index) {
    checkbox.addEventListener('change', function() {
        const label = labels[index];
        if (this.checked) {
            label.classList.add('strikethrough');
        } else {
            label.classList.remove('strikethrough');
        }
    });
});