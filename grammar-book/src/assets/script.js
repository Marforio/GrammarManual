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

    // Create dropdown for small screens
    const dropdown = document.querySelector('.dropdown');

    // List of chapters
    const chapters = [
        { text: '1. Nouns and Determiners', value: 'chapters/ch1_NounsAndDeterminers.html' },
        { text: '2. Adjectives and Adverbs', value: 'chapters/ch2_AdjectivesAndAdverbs.html' },
        { text: '3. Verb Conjugation', value: 'chapters/ch3_VerbConjugationRules.html' },
        { text: '4. Verb Tenses and Modalities', value: 'chapters/ch4_VerbTenses.html' },
        { text: '5. Past Modals', value: 'chapters/ch5_PastModals.html' },
        { text: '6. Logical Connectors', value: 'chapters/ch6_LogicalConnectors.html' },
        { text: '7. Sentence Structure', value: 'chapters/ch7_SentenceStructure.html' },
        { text: '8. Passive Voice', value: 'chapters/ch8_PassiveVoice.html' },
        { text: '9. Pronouns', value: 'chapters/ch9_Pronouns.html' },
        { text: '10. Prepositions', value: 'chapters/ch10_Prepositions.html' },
        { text: '11. Verb Complements', value: 'chapters/ch11_VerbComplements.html' },
        { text: '12. Possessive \'s\'', value: 'chapters/ch12_Possessive_S.html' }
    ];

    // Populate the dropdown
    chapters.forEach(chapter => {
        const option = document.createElement('option');
        option.textContent = chapter.text;
        option.value = chapter.value;
        dropdown.appendChild(option);
    });

    // Add event listener to the dropdown
    dropdown.addEventListener('change', (event) => {
        if (event.target.value) {
            loadChapter(event.target.value);
        }
    });
});