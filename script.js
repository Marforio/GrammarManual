function loadChapter(chapter) {
    fetch(chapter)
        .then(response => response.text())
        .then(data => {
            document.getElementById('content').innerHTML = data;
            generateSidebarNavigation();
        });
}

function generateSidebarNavigation() {
    const content = document.getElementById('content');
    const sidebarRight = document.getElementById('sidebar-right');
    sidebarRight.innerHTML = '';

    const headers = content.querySelectorAll('h2, h3');
    const ul = document.createElement('ul');

    headers.forEach(header => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = `#${header.id}`;
        a.textContent = header.textContent;
        a.onclick = () => {
            document.querySelectorAll('.sidebar-right a').forEach(link => link.classList.remove('active'));
            a.classList.add('active');
        };
        li.appendChild(a);
        ul.appendChild(li);
    });

    sidebarRight.appendChild(ul);
}

document.addEventListener('scroll', () => {
    const headers = document.querySelectorAll('#content h2, #content h3');
    let current = null;

    headers.forEach(header => {
        const rect = header.getBoundingClientRect();
        if (rect.top <= 50) {
            current = header;
        }
    });

    if (current) {
        document.querySelectorAll('.sidebar-right a').forEach(link => link.classList.remove('active'));
        const activeLink = document.querySelector(`.sidebar-right a[href="#${current.id}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }
    }
});