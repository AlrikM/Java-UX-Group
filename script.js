document.getElementById('addBtn').addEventListener('click', function() {
    alert('Add button clicked! Implement file upload functionality here.');
});

document.getElementById('removeBtn').addEventListener('click', function() {
    alert('Remove button clicked! Implement file removal functionality here.');
});

document.getElementById('applyBtn').addEventListener('click', function() {
    alert('Apply changes!');
});

document.getElementById('cancelBtn').addEventListener('click', function() {
    alert('Changes cancelled!');
});
document.getElementById('menuBorder').addEventListener('click',function() {
    const display = document.getElementById('dropDown')
    display.classList.toggle('hidden')
})