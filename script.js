<<<<<<< HEAD
document.addEventListener('DOMContentLoaded', () => {
    // Получаем все элементы страниц
    const pages = document.querySelectorAll('.page');

    // --- Конфигурация Intersection Observer ---
    const observerOptions = {
        root: null, // Использовать область видимости браузера (viewport) как корневой элемент
        // rootMargin: '0px 0px -200px 0px' - Подтягивает область видимости снизу на 200px.
        // Это означает, что элемент будет считаться "видимым" раньше, еще до того, как он полностью войдет в экран.
        // Создает ощущение, что анимация начинается раньше.
        rootMargin: '0px 0px -200px 0px',

        // threshold: 0.05 - Анимация запускается, как только 5% элемента становится видимым.
        // Это также способствует раннему началу анимации.
        threshold: 0.05
    };

    // Создаем новый Intersection Observer
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            const page = entry.target; // Текущий наблюдаемый элемент

            // Получаем тип перехода из data-атрибута.
            // Если атрибут data-transition-in не задан, используем 'fade-in' по умолчанию.
            const transitionType = page.dataset.transitionIn || 'fade-in';
            // Формируем имя класса для конкретной анимации (например, 'transition-slide-right')
            const transitionClass = `transition-${transitionType}`;

            if (entry.isIntersecting) {
                // --- Элемент входит в область видимости (или стал частично видим, учитывая rootMargin и threshold) ---
                page.classList.add('is-visible'); // Делаем элемент видимым

                // Добавляем специфический класс перехода, если это не стандартный 'fade-in'
                // Это запускает CSS-анимацию, заданную для этого класса.
                if (transitionType !== 'fade-in') {
                    page.classList.add(transitionClass);
                }
            } else {
                // --- Элемент выходит из области видимости (или стал почти полностью невидимым) ---
                page.classList.remove('is-visible'); // Убираем класс видимости, чтобы вернуть его к исходному состоянию (анимация ухода)

                // Удаляем специфический класс перехода, чтобы элемент вернулся к начальному состоянию при уходе.
                if (transitionType !== 'fade-in') {
                    page.classList.remove(transitionClass);
                }
            }
        });
    }, observerOptions);

    // Начинаем наблюдение за каждой страницей
    pages.forEach(page => {
        // Наблюдаем за страницей. Изначально она находится в состоянии, описанном в '.page' CSS
        // (скрыта, с начальными трансформациями для анимации).
        observer.observe(page);
    });
=======
document.addEventListener('DOMContentLoaded', () => {
    // Получаем все элементы страниц
    const pages = document.querySelectorAll('.page');

    // --- Конфигурация Intersection Observer ---
    const observerOptions = {
        root: null, // Использовать область видимости браузера (viewport) как корневой элемент
        // rootMargin: '0px 0px -200px 0px' - Подтягивает область видимости снизу на 200px.
        // Это означает, что элемент будет считаться "видимым" раньше, еще до того, как он полностью войдет в экран.
        // Создает ощущение, что анимация начинается раньше.
        rootMargin: '0px 0px -200px 0px',

        // threshold: 0.05 - Анимация запускается, как только 5% элемента становится видимым.
        // Это также способствует раннему началу анимации.
        threshold: 0.05
    };

    // Создаем новый Intersection Observer
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            const page = entry.target; // Текущий наблюдаемый элемент

            // Получаем тип перехода из data-атрибута.
            // Если атрибут data-transition-in не задан, используем 'fade-in' по умолчанию.
            const transitionType = page.dataset.transitionIn || 'fade-in';
            // Формируем имя класса для конкретной анимации (например, 'transition-slide-right')
            const transitionClass = `transition-${transitionType}`;

            if (entry.isIntersecting) {
                // --- Элемент входит в область видимости (или стал частично видим, учитывая rootMargin и threshold) ---
                page.classList.add('is-visible'); // Делаем элемент видимым

                // Добавляем специфический класс перехода, если это не стандартный 'fade-in'
                // Это запускает CSS-анимацию, заданную для этого класса.
                if (transitionType !== 'fade-in') {
                    page.classList.add(transitionClass);
                }
            } else {
                // --- Элемент выходит из области видимости (или стал почти полностью невидимым) ---
                page.classList.remove('is-visible'); // Убираем класс видимости, чтобы вернуть его к исходному состоянию (анимация ухода)

                // Удаляем специфический класс перехода, чтобы элемент вернулся к начальному состоянию при уходе.
                if (transitionType !== 'fade-in') {
                    page.classList.remove(transitionClass);
                }
            }
        });
    }, observerOptions);

    // Начинаем наблюдение за каждой страницей
    pages.forEach(page => {
        // Наблюдаем за страницей. Изначально она находится в состоянии, описанном в '.page' CSS
        // (скрыта, с начальными трансформациями для анимации).
        observer.observe(page);
    });
>>>>>>> a3a528ba08fa4730ce6849976909d3266e95c41f
});