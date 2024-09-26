function toggleBranch(id) {
    const branch = document.getElementById(id);
    const icon = document.getElementById(id + '-icon');
    
    if (branch.style.display === 'none' || branch.style.display === '') {
        branch.style.display = 'block';
        icon.innerText = '-';
    } else {
        branch.style.display = 'none';
        icon.innerText = '+';
    }
}
