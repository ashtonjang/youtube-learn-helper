window.onload = async function() {
    await sleep(1000);

    let step;
    document.querySelector('[aria-label="추가 작업"]').click();
    await sleep(100);
    document.querySelectorAll('paper-item.ytd-menu-service-item-renderer').forEach(function(dom) {
        if (dom.innerText === '스크립트 열기') {
            dom.click();
        }
    });

    window.onkeydown = function() {
        //console.log('=>', event.keyCode);
        if (event.keyCode === 65) {
            // keycode a
            jumpStep('prev');
        } else if (event.keyCode === 83) {
            // keycode s
            jumpStep();
        } else if (event.keyCode === 68) {
            // keycode d
            jumpStep('next');
        } else if (event.keyCode === 81) {
            // keycode q
            saveStep();
        } else if (event.keyCode === 69) {
            // keycode e
            loadStep();
        }
    };

    function saveStep() {
        let dom = document.querySelector('.cue-group.active');
        step = dom.querySelector("[role='button']").attributes['start-offset'].value;
    }

    function loadStep() {
        document.querySelector(`[start-offset="${step}"]`).click();
    }

    function jumpStep(type) {
        let dom = document.querySelector('.cue-group.active');

        if (type === 'prev') {
            dom = dom.previousElementSibling;
        } else if (type === 'next') {
            dom = dom.nextElementSibling;
        }

        dom.querySelector("[role='button']").click();
    }

    async function sleep(num) {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve();
            }, num);
        });
    }
};
