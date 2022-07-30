const SHOTS_URL = 'https://dribbble.com/shots/';

const changeAllUrls = () => {
    document.querySelectorAll('a[data-subject-id]').forEach(node => {
        const { attributes } = node;
        const id = node.getAttribute('data-subject-id');
        const href = SHOTS_URL + id;
        node.setAttribute('href', href);
    });
};

const callback = (mutationList) => {
    const changeList = mutationList.filter(mutation => mutation.type === 'childList');
    if (!changeList.length) {
        return;
    }

    changeAllUrls();
}

const observer = new MutationObserver(callback);
observer.observe(document.querySelector('ol'), { childList: true });

changeAllUrls();
