// App State
let currentLesson = null;
let filteredLessons = lessonsData;

// DOM Elements
const lessonsContainer = document.getElementById('lessonsContainer');
const noResults = document.getElementById('noResults');
const searchInput = document.getElementById('searchInput');
const clearSearch = document.getElementById('clearSearch');
const semesterTabs = document.querySelectorAll('.semester-tab');
const semesterContents = document.querySelectorAll('.semester-content');
const modal = document.getElementById('lessonModal');
const closeModal = document.getElementById('closeModal');
const modalTitle = document.getElementById('modalTitle');
const progressText = document.getElementById('progressText');
const progressIndicator = document.querySelector('.progress-indicator');
const markComplete = document.getElementById('markComplete');

// Material Links
const theoryLink = document.getElementById('theoryLink');
const videoLink = document.getElementById('videoLink');
const testsLink = document.getElementById('testsLink');
const presentationLink = document.getElementById('presentationLink');
const additionalLink = document.getElementById('additionalLink');

// Initialize App
function init() {
    renderLessons(lessonsData);
    setupEventListeners();
    loadProgress();
}

// Render Lessons
function renderLessons(lessons) {
    filteredLessons = lessons;

    if (lessons.length === 0) {
        lessonsContainer.style.display = 'none';
        noResults.style.display = 'block';
        return;
    }

    lessonsContainer.style.display = 'grid';
    noResults.style.display = 'none';

    lessonsContainer.innerHTML = lessons.map(lesson => {
        const isCompleted = isLessonCompleted(lesson.id);
        return `
            <div class="lesson-card ${isCompleted ? 'completed' : ''}" data-lesson-id="${lesson.id}">
                ${isCompleted ? '<div class="lesson-progress">✓</div>' : ''}
                <div class="lesson-number">DARS ${lesson.id}</div>
                <div class="lesson-title">${lesson.title}</div>
                <div class="lesson-description">${lesson.description}</div>
            </div>
        `;
    }).join('');

    // Add click listeners to lesson cards
    document.querySelectorAll('.lesson-card').forEach(card => {
        card.addEventListener('click', () => {
            const lessonId = parseInt(card.dataset.lessonId);
            openLesson(lessonId);
        });
    });
}

// Open Lesson Modal
function openLesson(lessonId) {
    currentLesson = lessonsData.find(l => l.id === lessonId);
    if (!currentLesson) return;

    // Set modal content
    modalTitle.textContent = currentLesson.title;

    // Set material links - all open directly in new tabs
    theoryLink.href = currentLesson.materials.theory;
    videoLink.href = currentLesson.materials.video;
    testsLink.href = currentLesson.materials.tests;
    presentationLink.href = currentLesson.materials.presentation;
    additionalLink.href = currentLesson.materials.additional;

    // Open all materials in new tab
    theoryLink.setAttribute('target', '_blank');
    videoLink.setAttribute('target', '_blank');
    testsLink.setAttribute('target', '_blank');
    presentationLink.setAttribute('target', '_blank');
    additionalLink.setAttribute('target', '_blank');

    // Update progress status
    updateProgressUI(lessonId);

    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close Lesson Modal
function closeLesson() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
    currentLesson = null;
}

// Update Progress UI
function updateProgressUI(lessonId) {
    const isCompleted = isLessonCompleted(lessonId);

    if (isCompleted) {
        progressText.textContent = '✓ Bu dars tugatilgan';
        progressIndicator.classList.add('completed');
        markComplete.textContent = 'Tugatilmagan deb belgilash';
    } else {
        progressText.textContent = 'Bu darsni hali tugatmadingiz';
        progressIndicator.classList.remove('completed');
        markComplete.textContent = 'Tugatildi deb belgilash';
    }
}

// Toggle Lesson Completion
function toggleLessonCompletion() {
    if (!currentLesson) return;

    const lessonId = currentLesson.id;
    const progress = getProgress();

    if (progress.includes(lessonId)) {
        // Remove from completed
        const index = progress.indexOf(lessonId);
        progress.splice(index, 1);
    } else {
        // Add to completed
        progress.push(lessonId);
    }

    saveProgress(progress);
    updateProgressUI(lessonId);
    renderLessons(filteredLessons);
}

// Progress Tracking with localStorage
function getProgress() {
    const progress = localStorage.getItem('lessonProgress');
    return progress ? JSON.parse(progress) : [];
}

function saveProgress(progress) {
    localStorage.setItem('lessonProgress', JSON.stringify(progress));
}

function loadProgress() {
    const progress = getProgress();
    console.log(`${progress.length} ta dars tugatilgan`);
}

function isLessonCompleted(lessonId) {
    const progress = getProgress();
    return progress.includes(lessonId);
}

// Search Functionality
function handleSearch(query) {
    const searchTerm = query.toLowerCase().trim();

    if (!searchTerm) {
        renderLessons(lessonsData);
        clearSearch.style.display = 'none';
        return;
    }

    clearSearch.style.display = 'block';

    const filtered = lessonsData.filter(lesson => {
        return lesson.title.toLowerCase().includes(searchTerm) ||
               lesson.description.toLowerCase().includes(searchTerm) ||
               lesson.id.toString().includes(searchTerm);
    });

    renderLessons(filtered);
}

// Semester Tab Switching
function switchSemester(semesterNum) {
    // Update tabs
    semesterTabs.forEach(tab => {
        if (parseInt(tab.dataset.semester) === semesterNum) {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active');
        }
    });

    // Update content
    semesterContents.forEach(content => {
        if (content.id === `semester-${semesterNum}`) {
            content.classList.add('active');
        } else {
            content.classList.remove('active');
        }
    });

    // Reset search when switching semesters
    if (semesterNum === 1) {
        searchInput.value = '';
        clearSearch.style.display = 'none';
    }
}

// Setup Event Listeners
function setupEventListeners() {
    // Search
    searchInput.addEventListener('input', (e) => {
        handleSearch(e.target.value);
    });

    clearSearch.addEventListener('click', () => {
        searchInput.value = '';
        handleSearch('');
    });

    // Semester tabs
    semesterTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const semester = parseInt(tab.dataset.semester);
            switchSemester(semester);
        });
    });

    // Modal controls
    closeModal.addEventListener('click', closeLesson);

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeLesson();
        }
    });

    // Progress tracking
    markComplete.addEventListener('click', toggleLessonCompletion);

    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeLesson();
        }
    });
}

// Initialize app when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
