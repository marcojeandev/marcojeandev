document.addEventListener('DOMContentLoaded', () => {
    // Tabs Mapping
    const tabs = {
        'fontend': {
            button: document.getElementById('fontend'),
            display: document.getElementById('display-front-end')
        },
        'backend': {
            button: document.getElementById('backend'),
            display: document.getElementById('display-back-end')
        },
        'database': {
            button: document.getElementById('database'),
            display: document.getElementById('display-Database')
        },
        'devTools': {
            button: document.getElementById('devTools'),
            display: document.getElementById('display-devTools')
        },
        'host': {
            button: document.getElementById('host'),
            display: document.getElementById('display-HostDev')
        }
    };

    const activeBtnClasses = ['bg-brand-500', 'border-brand-500', 'text-white'];
    const inactiveBtnClasses = ['bg-zinc-900/50', 'border-zinc-800', 'text-zinc-400'];

    const switchTab = (activeKey) => {
        Object.keys(tabs).forEach(key => {
            const tab = tabs[key];
            if (!tab.button || !tab.display) return;

            if (key === activeKey) {
                // Activate button
                tab.button.classList.add(...activeBtnClasses);
                tab.button.classList.remove(...inactiveBtnClasses);
                // Show content
                tab.display.classList.remove('hidden');
                tab.display.classList.add('grid');
            } else {
                // Deactivate button
                tab.button.classList.remove(...activeBtnClasses);
                tab.button.classList.add(...inactiveBtnClasses);
                // Hide content
                tab.display.classList.add('hidden');
                tab.display.classList.remove('grid');
            }
        });
    };

    // Add click listeners to all buttons
    Object.keys(tabs).forEach(key => {
        const tab = tabs[key];
        if (tab.button) {
            tab.button.addEventListener('click', () => {
                switchTab(key);
            });
        }
    });

    // Initialize - show frontend by default
    switchTab('fontend');
});