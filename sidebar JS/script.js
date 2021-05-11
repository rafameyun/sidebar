function toggleSidebar() {
    const sidebar = document.querySelector(".sidebar");

    //adiciona o .active no .sidebar
    //ou remove se já estiver adicionado
    sidebar.classList.toggle("active");
}