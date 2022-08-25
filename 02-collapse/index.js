const collapsibleContent = document.querySelector('.collapsible__content')
const collapsibleVisible = document.querySelector('.collapsible__action--visible')
const collapsibleHidden = document.querySelector('.collapsible__action--hidden')

collapsibleHidden.style.display = 'none';

collapsibleVisible.addEventListener('click', () => {
    collapsibleContent.animate(
        [
            { transform: 'translate(-50%, -50%) scale(0)' }
        ],
        {
            duration: 2000,
            easing: 'linear',
            fill: 'forwards'
        }
    );
    collapsibleHidden.style.display = 'block';
    collapsibleVisible.style.display = 'none'
}
)

collapsibleHidden.addEventListener('click', () => {
    collapsibleContent.animate(
        [
            { transform: 'translate(0%, 0%) scale(1)' }
        ],
        {
            duration: 2000,
            easing: 'linear',
            fill: 'forwards'
        }
    );
    collapsibleVisible.style.display = 'block'
    collapsibleHidden.style.display = 'none';
}
)
