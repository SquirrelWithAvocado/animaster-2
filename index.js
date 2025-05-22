addListeners();

function addListeners() {
    const animObj = animaster();
    const customAnimation = animaster()
        .addMove(200, { x: 40, y: 40 })
        .addScale(800, 1.3)
        .addMove(200, { x: 80, y: 0 })
        .addScale(800, 1)
        .addMove(200, { x: 40, y: -40 })
        .addScale(800, 0.7)
        .addMove(200, { x: 0, y: 0 })
        .addScale(800, 1);
    
    const customAnimationWithRotation = customAnimation
        .addRotate(1000, 45);

    const customAnimationHandler = customAnimation.buildHandler();
    const customAnimationWithRotationHandler = customAnimationWithRotation.buildHandler();

    const customMoveAndHide = animaster()
        .addMove(2000, { x: 40, y: 40 })
        .addHide(3000);

    const customShowAndHide = animaster()
        .addShow(1000)
        .addDelay(1000)
        .addHide(1000);
    
    const customHeartBeating = animaster()
        .addScale(500, 1.4)
        .addScale(500, 1)
        .addCycle();
    
    const customFadeIn = animaster()
        .addShow(5000);
    
    const customFadeOut = animaster()
        .addHide(5000);
    
    const customMove = animaster()
        .addMove(500, { x: 20, y: 20 });
    
    const customScale = animaster()
        .addScale(1000, 1.4);

    let customAnimationStop;
    let customAnimationReset;
    document.getElementById('CustomAnimationBlock')
        .addEventListener('click', customAnimationHandler);
    
    document.getElementById('CustomAnimationPlay')
        .addEventListener('click', function () {
            const block = document.getElementById('CustomAnimationBlock');
            let cbObject = customAnimation.play(block);

            (
                { reset: customAnimationReset, stop: customAnimationStop } =
                cbObject
            );
        });

    document.getElementById('CustomAnimationStop')
        .addEventListener('click', function () {
            if (customAnimationStop) {
                customAnimationStop();
            }
        });
    
    document.getElementById('CustomAnimationReset')
        .addEventListener('click', function () {
            if (customAnimationReset) {
                customAnimationReset();
            }
        });

    let customAnimationWithRotationStop;
    let customAnimationWithRotationReset;
    document.getElementById('CustomAnimationWithRotationBlock')
        .addEventListener('click', customAnimationWithRotationHandler);
    
    document.getElementById('CustomAnimationWithRotationPlay')
        .addEventListener('click', function () {
            const block = document.getElementById('CustomAnimationWithRotationBlock');
            let cbObject = customAnimationWithRotation.play(block);

            (
                { reset: customAnimationWithRotationReset, stop: customAnimationWithRotationStop } =
                cbObject
            );
        });

    document.getElementById('CustomAnimationWithRotationStop')
        .addEventListener('click', function () {
            if (customAnimationWithRotationStop) {
                customAnimationWithRotationStop();
            }
        });
    
    document.getElementById('CustomAnimationWithRotationReset')
        .addEventListener('click', function () {
            if (customAnimationWithRotationReset) {
                customAnimationWithRotationReset();
            }
        });

    let fadeInReset;
    let fadeInStop;
    document.getElementById('fadeInPlay')
        .addEventListener('click', function () {
            const block = document.getElementById('fadeInBlock');
            let cbObject = customFadeIn.play(block);

            (
                { reset: fadeInReset, stop: fadeInStop } =
                cbObject
            );
        });

    document.getElementById('fadeInReset')
        .addEventListener('click', function () {
            if (fadeInReset) {
                fadeInReset();
            }
        });
    
    document.getElementById('fadeInStop')
        .addEventListener('click', function () {
            if (fadeInStop) {
                fadeInStop();
            }
        });

    let fadeOutReset;
    let fadeOutStop;
    document.getElementById('fadeOutPlay')
        .addEventListener('click', function () {
            const block = document.getElementById('fadeOutBlock');
            let cbObject = customFadeOut.play(block);

            (
                { reset: fadeOutReset, stop: fadeOutStop } =
                cbObject
            );
        });

    document.getElementById('fadeOutReset')
        .addEventListener('click', function () {
            if (fadeOutReset) {
                fadeOutReset();
            }
        });
    
    document.getElementById('fadeOutStop')
        .addEventListener('click', function () {
            if (fadeOutStop) {
                fadeOutStop();
            }
        });

    let moveReset;
    let moveStop;
    document.getElementById('movePlay')
        .addEventListener('click', function () {
            const block = document.getElementById('moveBlock');
            let cbObject = customMove.play(block);

            (
                { reset: moveReset, stop: moveStop } =
                cbObject
            );
        });

    document.getElementById('moveReset')
        .addEventListener('click', function () {
            if (moveReset) {
                moveReset();
            }
        });
    
    document.getElementById('moveStop')
        .addEventListener('click', function () {
            if (moveStop) {
                moveStop();
            }
        });

    let scaleReset;
    let scaleStop;
    document.getElementById('scalePlay')
        .addEventListener('click', function () {
            const block = document.getElementById('scaleBlock');
            let cbObject = customScale.play(block);

            (
                { reset: scaleReset, stop: scaleStop } =
                cbObject
            );
        });

    document.getElementById('scaleReset')
        .addEventListener('click', function () {
            if (scaleReset) {
                scaleReset();
            }
        });
    
    document.getElementById('scaleStop')
        .addEventListener('click', function () {
            if (scaleStop) {
                scaleStop();
            }
        });

    let moveAndHideStop;
    let moveAndHideReset;
    document.getElementById('moveAndHidePlay')
        .addEventListener('click', function () {
            const block = document.getElementById('moveAndHideBlock');
            let cbObj = customMoveAndHide.play(block);

            (
                { stop: moveAndHideStop, reset: moveAndHideReset } =
                cbObj
            )
        });

    document.getElementById('moveAndHideStop')
        .addEventListener('click', function () {
            if (moveAndHideStop) {
                moveAndHideStop();
            }
        });
    
    document.getElementById('moveAndHideReset')
        .addEventListener('click', function () {
            if (moveAndHideReset) {
                moveAndHideReset();
            }
        });

    let showAndHideStop;
    let showAndHideReset;
    document.getElementById('showAndHidePlay')
        .addEventListener('click', function () {
            const block = document.getElementById('showAndHideBlock');
            let cbObj = customShowAndHide.play(block);
            (
                { stop: showAndHideStop, reset: showAndHideReset } =
                cbObj
            )
        });
    
    document.getElementById('showAndHideStop')
        .addEventListener('click', function () {
            if (showAndHideStop) {
                showAndHideStop();
            }
        });
    
    document.getElementById('showAndHideReset')
        .addEventListener('click', function () {
            if (showAndHideReset) {
                showAndHideReset();
            }
        });

    let stopHeartBeating;
    let resetHeartBeating;
    document.getElementById('heartBeatingPlay')
        .addEventListener('click', function () {
            const block = document.getElementById('heartBeatingBlock');
            const cbObj = customHeartBeating.play(block);
            (
                { stop: stopHeartBeating, reset: resetHeartBeating } = 
                cbObj
            );
        });

    document.getElementById('heartBeatingStop')
        .addEventListener('click', function () {
            if (stopHeartBeating) {
                stopHeartBeating();
            }
        });
    
    document.getElementById('heartBeatingReset')
        .addEventListener('click', function () {
            if (stopHeartBeating) {
                resetHeartBeating();
            }
        });
}

function animaster() {
    /**
     * Блок плавно появляется из прозрачного.
     * @param element — HTMLElement, который надо анимировать
     * @param duration — Продолжительность анимации в миллисекундах
     */
    function fadeIn(element, duration) {
        element.style.transitionDuration = `${duration}ms`;
        element.classList.remove('hide');
        element.classList.add('show');

        return () => {
            resetFadeIn(element);
        }
    }

    /**
     * Блок плавно исчезает
     * @param element - HTMLElement, который надо анимировать
     * @param duration - Продолжительность анимации в миллисекундах
     */
    function fadeOut(element, duration) {
        element.style.transitionDuration = `${duration}ms`;
        element.classList.remove('show');
        element.classList.add('hide');

        return () => {
            resetFadeOut(element);
        };
    }

    /**
     * Функция, передвигающая элемент
     * @param element — HTMLElement, который надо анимировать
     * @param duration — Продолжительность анимации в миллисекундах
     * @param translation — объект с полями x и y, обозначающими смещение блока
     */
    function move(element, duration, translation) {
        element.style.transitionDuration = `${duration}ms`;
        element.style.transform = getTransform(translation, this._scale);
        this._translate = translation;
        return translation;
    }

    /**
     * Функция, увеличивающая/уменьшающая элемент
     * @param element — HTMLElement, который надо анимировать
     * @param duration — Продолжительность анимации в миллисекундах
     * @param ratio — во сколько раз увеличить/уменьшить. Чтобы уменьшить, нужно передать значение меньше 1
     */
    function scale(element, duration, ratio) {
        element.style.transitionDuration = `${duration}ms`;
        element.style.transform = getTransform(this._translate, ratio);
        this._scale = ratio;
        return ratio;
    }

    /**
     * Функция, изменяющая масштаб и положение элемента
     * @param element — HTMLElement, который надо анимировать
     * @param duration — Продолжительность анимации в миллисекундах
     * @param ratio — во сколько раз увеличить/уменьшить. Чтобы уменьшить, нужно передать значение меньше 1
     * @param translation — объект с полями x и y, обозначающими смещение блока
     */
    function transform(element, duration, ratio=null, translation=null) {
        element.style.transitionDuration = `${duration}ms`;
        element.style.transform = getTransform(translation, ratio);
    }

    /**
     * Функция, смещающая элемент и делает его невидимым
     * @param element — HTMLElement, который надо анимировать
     * @param duration — Продолжительность анимации в миллисекундах
     * @param translation — объект с полями x и y, обозначающими смещение блока
     */
    function moveAndHide(element, duration, translation) {
        move(element, duration * 2 / 5, translation);
        fadeOut(element, duration * 3 / 5);

        return () => {
            resetMoveAndScale(element);
            resetFadeOut(element);
        }
    }

    /**
     * Функция, которая показывает элемент, а затем прячет
     * @param element — HTMLElement, который надо анимировать
     * @param duration — Продолжительность анимации в миллисекундах
     */
    function showAndHide(element, duration) {
        fadeIn(element, duration / 3);
        setTimeout(
            () => fadeOut(element, duration / 3),
            duration / 3
        );
    }

    /**
     * Функция, которая показывает элемент меняет размер элемента с интервалом
     * @param element — HTMLElement, который надо анимировать
     * @param duration — Продолжительность анимации в миллисекундах
     */
    function heartBeating(element, duration) {
        let isRunning = true;

        function runLoop(increase) {
            if (isRunning) {
                scale(element, duration, increase ? 1.4 : 1);
                setTimeout(() => runLoop(!increase), duration);
            }
        }
        runLoop(true);

        return () => {
            isRunning = false;
        };
    }

    /**
     * Функция, которая сбрасывает состояние элемента до прозрачного
     * @param element — HTMLElement, который надо анимировать
     */
    function resetFadeIn(element) {
        element.style.transitionDuration = null;
        element.classList.remove('show');
        element.classList.add('hide');
    }

    /**
     * Функция, которая сбрасывает состояние элемента до видимого
     * @param element — HTMLElement, который надо анимировать
     */
    function resetFadeOut(element) {
        element.style.transitionDuration = null;
        element.classList.remove('hide');
        element.classList.add('show');
    }

    /**
     * Функция, которая сбрасывает состояние элемента до начального размера и позиции
     * @param element — HTMLElement, который надо анимировать
     */
    function resetMoveAndScale(element) {
        element.style.transitionDuration = null;
        element.style.transform = getTransform(null, null);
    }

    /**
     * Функция, которая добавляет действие в анимацию движения
     * @param duration - продолжительность анимации
     * @param translation - координаты смещения
     */
    function addMove(duration, translation) {
        if (!this._steps) {
            return this;
        }

        let newStep = [
            (element, context) => move.call(context, element, duration, translation),
            duration
        ];

        let animObject = createAnimObject(this);
        animObject._steps.push(newStep);

        return animObject; 
    }

    /**
    * Функция, которая добавляет действие в анимацию масштабирования
    * @param duration - продолжительность анимации
    * @param translation - координаты смещения
    */
    function addScale(duration, ratio) {
        if (!this._steps) {
            return this;
        }

        let newStep = [
            (element, context) => scale.call(context, element, duration, ratio),
            duration
        ];

        let animObject = createAnimObject(this);
        animObject._steps.push(newStep);

        return animObject; 
    }

    /**
     * Функция, которая делает паузу в анимации
     * @param duration - продолжительность анимации
     */
    function addDelay(duration) {
        if (!this._steps) {
            return this;
        }

        let newStep = [
            (_element) => { },
            duration
        ];

        let animObject = createAnimObject(this);
        animObject._steps.push(newStep);

        return animObject; 
    }

    /**
     * Функция, которая делает элемент прозрачным
     * @param duration - продолжительность анимации
     */
    function addHide(duration) {
        if (!this._steps) {
            return this;
        }

        let newStep = [
            (element) => fadeOut(element, duration),
            duration
        ];

        let animObject = createAnimObject(this);
        animObject._steps.push(newStep);

        return animObject; 
    }

    /**
     * Функция, которая делает элемент видимым
     * @param duration - продолжительность анимации
     */
    function addShow(duration) {
        if (!this._steps) {
            return this;
        }

        let newStep = [
            (element) => fadeIn(element, duration),
            duration
        ];

        let animObject = createAnimObject(this);
        animObject._steps.push(newStep);

        return animObject; 
    }

    /**
     * Функция, которая поворачивает элемент
     */
    function addRotate(duration, angle) {
        if (!this._steps) {
            return this;
        }

        let newStep = [
            (element) => {
                element.style.transitionDuration = `${duration}ms`;
                element.style.transform = `rotate(${angle}deg)`;
            },
            duration
        ];

        let animObject = createAnimObject(this);
        animObject._steps.push(newStep);

        return animObject; 
    }

    /**
     * Функция, которая делает анимацию цикличной
     */
    function addCycle() {
        let animObject = createAnimObject(this);
        animObject._isCycle = true;

        return animObject;
    }

    /**
     * Точка входа в анимацию
     * @param element - объект анимации
     */
    function play(element) {
        this._isRunning = true;

        if (!this._defaultState) {
            this._defaultState = {
                classList: [...element.classList.values()],
                transform: element.style.transform,
                transitionDuration: element.style.transitionDuration
            }
        }

        runAnimation.call(this, element);

        let returnObj = {};
        returnObj.stop = stop.bind(this);
        returnObj.reset = () => reset.call(this, element);

        return returnObj;
    }

    /**
     * Создает методя для addEventListener
     */
    function buildHandler() {
        let animObj = this;
        return function name(_evt) {
            play.call(animObj, this);
        } 
    }

    /**
     * Останавливает анимацию
     */
    function stop() {
        this._isRunning = false;
    }

    /**
     * Сбрасывает анимацию
     */
    function reset(element) {
        element.style.transform = this._defaultState.transform;
        element.style.transitionDuration = this._defaultState.transitionDuration;
        element.classList.remove(...element.classList.values());
        element.classList.add(...this._defaultState.classList);

        this._isRunning = false;
        this._idx = 0;
    }

    /**
     * Запускает анимации, добавленные через AddMove для заданного элемента
     * @param element - объект анимации
     */
    function runAnimation(element) {
        if (!this._isRunning) {
            return;
        }
        
        if (!this._steps) {
            return;
        }

        if (this._idx === this._steps.length) {
            if (this._isCycle) {
                this._idx = 0;
            } else {
                return;
            }
        }

        let [animationCb, duration] = this._steps[this._idx];
        this._idx++;
        animationCb(element, this);
        setTimeout(() => runAnimation.call(this, element), duration);
    }

    function getTransform(translation, ratio) {
        const result = [];
        if (translation) {
            result.push(`translate(${translation.x}px,${translation.y}px)`);
        }
        if (ratio) {
            result.push(`scale(${ratio})`);
        }
        return result.join(' ');
    }

    function createAnimObject(context) {
        let animObject;
        if (context) {
            animObject = {
                _steps: [...context._steps],
                _isCycle: context._isCycle,
                _isRunning: context._isRunning,
                _idx: context._idx,
                _scale: context._scale,
                _translate: context._translate ? {...context._translate} : null,
                _defaultState: context._defaultState,
            };
        } else {
            animObject = {
                _steps: [],
                _isCycle: false,
                _isRunning: true,
                _idx: 0,
                _scale: null,
                _translate: null,
                _defaultState: null,
            };
        }
        

        animObject.move = move.bind(animObject);
        animObject.scale = scale.bind(animObject);

        animObject.fadeIn = fadeIn.bind(animObject);
        animObject.fadeOut = fadeOut.bind(animObject);  
        animObject.moveAndHide = moveAndHide.bind(animObject);
        animObject.showAndHide = showAndHide.bind(animObject);
        animObject.heartBeating = heartBeating.bind(animObject);

        animObject.addMove = addMove.bind(animObject);
        animObject.addScale = addScale.bind(animObject);
        animObject.addDelay = addDelay.bind(animObject);
        animObject.addHide = addHide.bind(animObject);
        animObject.addShow = addShow.bind(animObject);
        animObject.addRotate = addRotate.bind(animObject);
        animObject.addCycle = addCycle.bind(animObject);
        animObject.play = play.bind(animObject);
        animObject.buildHandler = buildHandler.bind(animObject);

        return animObject;
    }

    const animObject = createAnimObject(null);
    return animObject;
}
