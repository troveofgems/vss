(function() {
    console.log('document is: ', document);
    let container = document.getElementById('floatingBox');
    function toggleAntigravity() {
        let listOfAppliedStyles = container.classList;
        console.log(listOfAppliedStyles);
        let currentDir = container.className.split('-')[1];
        const dirs = ['up','down','left','right'].filter(v => v !== currentDir);
        const dir = dirs[Math.floor(Math.random() * dirs.length)];
        let styleToApply = "floating-" + dir;
        console.log(styleToApply)
        container.classList.add(styleToApply);
    }
    /** Loop Antigravity */
    window.toggleAntigravity = setInterval(() => {
        toggleAntigravity();
    }, 7000);
    toggleAntigravity();
})();
