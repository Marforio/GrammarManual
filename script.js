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

    const headers = content.querySelectorAll('h2, h3, h4, h5');
    const ul = document.createElement('ul');
    let currentUl = ul;
    let lastLevel = 2;

    headers.forEach(header => {
        const level = parseInt(header.tagName.substring(1));
        const li = document.createElement('li');
        li.textContent = header.textContent;
        li.dataset.targetId = header.id;

        if (level > lastLevel) {
            const nestedUl = document.createElement('ul');
            currentUl.lastElementChild.appendChild(nestedUl);
            currentUl = nestedUl;
        } else if (level < lastLevel) {
            let diff = lastLevel - level;
            while (diff > 0) {
                currentUl = currentUl.parentElement.parentElement;
                diff--;
            }
        }

        currentUl.appendChild(li);
        lastLevel = level;
    });

    sidebarRight.appendChild(ul);
}

document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('scroll', () => {
        console.log('Scroll event triggered');
        const headers = document.querySelectorAll('#content h2, #content h3, #content h4, #content h5');
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
});