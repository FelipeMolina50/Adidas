function toggleBranch(branchId) {
    const branch = document.getElementById(branchId);
    if (branch.style.display === "block") {
        branch.style.display = "none";
    } else {
        branch.style.display = "block";
    }
}
