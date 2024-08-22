function loadChapter(chapter) {
    console.log(`Loading chapter: ${chapter}`);
    fetch(chapter)
        .then(response => {
            console.log('Fetch response:', response);
            if (!response.ok) {
                throw new Error(`Network response was not ok: ${response.statusText}`);
            }
            return response.text();
        })
        .then(data => {
            console.log('Chapter loaded successfully');
            document.getElementById('content').innerHTML = data;
            generateSidebarNavigation();
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
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
        li.textContent = header.textContent;
        li.dataset.targetId = header.id;
        ul.appendChild(li);
    });

    sidebarRight.appendChild(ul);
}

document.addEventListener('scroll', () => {
    console.log('Scroll event triggered');
    const headers = document.querySelectorAll('#content h2, #content h3');
    console.log('Headers:', headers);
    let current = null;

    headers.forEach(header => {
        const rect = header.getBoundingClientRect();
        if (rect.top <= 50) {
            current = header;
        }
    });

    console.log('Current header:', current);

    if (current) {
        document.querySelectorAll('.sidebar-right li').forEach(item => item.classList.remove('active'));
        const activeItem = document.querySelector(`.sidebar-right li[data-target-id="${current.id}"]`);
        console.log('Active item:', activeItem);
        if (activeItem) {
            activeItem.classList.add('active');
        }
    }
});