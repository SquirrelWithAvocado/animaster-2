Сегодня мы будем делать код для "Анимастера". Это скрипт, позволяющий создавать и управлять анимациями.

Уже написано несколько функций, делающих элементарные анимации.

При клике на кнопку play возле названия анимации запустят ее.

- [x] Создай функцию с названием `animaster`

- [x]  Сейчас функции-анимации (`move`, `fadeIn`, `scale`) лежат в глобальной области видимости и имеют очень простые названия — их легко случайно переопределить. Поэтому спрячь их определения внутрь функции `animaster`. Функция `animaster` должна возвращать объект с методами для запуска разных анимаций. Сделай так, чтобы кнопки на страничке все еще показывали анимацию.

Использовать анимации теперь можно будет вот так:

```
animaster().scale(element, 500, .8)
```

- [x]  По аналогии с функцией `fadeIn` создай функцию `fadeOut`, скрывающую элемент.

- [x]  Мы хотим, немного облегчить жизнь пользователям анимастера, поэтому напишем для них несколько сложных анимаций. Сложные анимации состоят из нескольких простых, запущенных в правильном порядке и в нужное время. Добавь в интерфейс анимастера три новые анимации. Не забудь сделать так, чтобы с html-странички можно было их запустить. Вот такие анимации должен реализовывать анимастер:

    - `moveAndHide` — блок должен одновременно сдвигаться на 100 пикселей вправо и на 20 вниз, а потом исчезать. Метод на вход должен принимать продолжительность анимации. При этом 2/5 времени блок двигается, 3/5 — исчезает.
    - `showAndHide` — блок должен появиться, подождать и исчезнуть. Каждый шаг анимации длится 1/3 от времени, переданного аргументом в функцию.
    - `heartBeating` — имитация сердцебиения. Сначала элемент должен увеличиться в 1,4 раза, потом обратно к 1. Каждый шаг анимации занимает 0,5 секунды. Анимация должна повторяться бесконечно.

- [x]  Сделай возможность отключать анимацию сердцебиения:

    - сделай, чтобы метод `heartBeating` возвращал объект с методом `stop`
    - при вызове метода `stop` анимация должна прекращаться (скорее всего, нужно останавливать таймер, которым ты анимацию запускаешь)
    - добавь в разметку кнопку stop по аналогии с кнопкой play
    - в коде добавь обработчик клика по аналогии с тем, как это сделано для кнопки play. Обработчик должен вызывать метод `stop` анимации

- [x]  Сделай функции отмены для каждой элементарной операции. Создай служебные (не доступные снаружи анимастера) функции `resetFadeIn`, `resetFadeOut` и `resetMoveAndScale`. Все эти функции принимают на вход элемент, на котором надо сбросить состояние.

`resetFadeIn` и `resetFadeOut` должны менять обратно css-классы в classList — каждая из них должны убирать все дописанные стили, устанавливая их в `null`:

```
element.style.заданныйАнимациейСтиль = null;
```

- [x]  Сделай кнопку reset для анимации `moveAndHide` по аналогии с кнопкой stop из одного из предыдущих пунктов. При нажатии на кнопку reset последующие шаги анимации должны отменяться аналогично stop из `heartBeating`, а элемент должен мгновенно вернуться в исходное состояние с помощью функций из предыдущего пункта.

- [x]  Сделай так, чтобы анимацию `move` можно было вызвать не только так:

```
animaster().move(element, 500, {x: 20, y: 20});
```

Но и так:

```
animaster().addMove(500, {x: 20, y:20}).play(element);
```

Для этого:

- добавь методы `addMove` и `play` в объект, возвращаемый функцией `animaster`
- в объекте, возвращаемом из анимастера, должно появиться поле `_steps` — массив шагов анимации (в начале пустой). Поле `_steps` — приватное. Приватные поля по договоренности между разработчиками начинаются с нижнего подчеркивания.
- метод `addMove` должен возвращать `this` (то есть тот объект анимастера, который вернулся из вызова animaster)
- метод `addMove` должен добавлять в поле `this._steps` новый шаг анимации.

Структуру, в которой будешь хранить каждый шаг, придумай сам.
Каждый шаг должен содержать следующую информацию:

- название элементарной операции (`move`, `fadeIn`)
- продолжительность шага в миллисекундах
- дополнительные параметры (смещение для `move`, соотношение для `scale`)
- метод `play` должен принимать элемент, который будем анимировать, в качестве аргумента
- метод `play` должен выполнять по очереди все шаги анимации, которые лежат в массиве `this._steps`, применяя их к переданному ему элементу.

- [x] Сделай так, чтобы метод `move` работал на написанных на предыдущем шаге методах.

- [x] Сделай по аналогии с методом `addMove` методы `addScale`, `addFadeIn` и `addFadeOut`. Перепиши соответствующие анимации, чтобы они переиспользовали эти методы.

- [x] Теперь у тебя должно быть возможным такое использование:

```
const customAnimation = animaster()
    .addMove(200, {x: 40, y: 40})
    .addScale(800, 1.3)
    .addMove(200, {x: 80, y: 0})
    .addScale(800, 1)
    .addMove(200, {x: 40, y: -40})
    .addScale(800, 0.7)
    .addMove(200, {x: 0, y: 0})
    .addScale(800, 1);
customAnimation.play(element);
```

В этот момент анимация запускается, элемент перемещается по четырем точкам и меняет размеры. В конце элемент возвращается в исходную точку. Если `customAnimation.play(element)` запустить несколько раз с разными элементами, то анимации должны работать.

- [x] Перепиши сложные анимации `moveAndHide`, `showAndHide` и `heartBeating` на использование новых методов `add...` и `play`. Чтобы сделать `showAndHide`, добавь метод `addDelay`, добавляющий шаг, в котором ничего не происходит в течение заданного времени. Чтобы сделать `heartBeating`, добавь в `play` в аргументы флаг `cycled`, означающий, что шаги анимации надо повторять бесконечно.

- [x] Метод `play` должен возвращать объект с методом `stop` (применяется для `heartBeating`) и `reset`. Метод `reset` должен возвращать элемент в исходное состояние (то, которое было до анимации):

- если элемент был скрыт, то скрыть его
- если был показан, то показать
- если элемент был сдвинут или его размер изменен, то вернуть в исходное состояние

Для этого воспользуйся функциями отмены элементарных операций.

- [x] Добавь метод `buildHandler`, результат которого можно сразу передать в `addEventListener`:

```
const worryAnimationHandler = animaster()
    .addMove(200, {x: 80, y: 0})
    .addMove(200, {x: 0, y: 0})
    .addMove(200, {x: 80, y: 0})
    .addMove(200, {x: 0, y: 0})
    .buildHandler();

document
    .getElementById('worryAnimationBlock')
    .addEventListener('click', worryAnimationHandler);
```

Особенность `addEventListener` в том, что если ему во второй параметр передать не стрелочную функцию, то в качестве контекста вызова `this` он передаст ей DOM-элемент с которым происходит событие.

- [x] \* Реализуй какую-нибудь еще анимацию, которой пока нет. В качестве идей, можешь использовать этот сайт: http://leaverou.github.io/animatable/ Если на этой странице нажать кнопку "Animate All", становится весело =)

- [x] \* Сейчас есть проблема, что если написать вот так:

```
const a = animaster().addMove(111, {x: 10, y: -10})
const b = a.addFadeOut(400);
```

То при запуске `a.play(el)`, выполнится и перемещение и исчезновение, хотя это и не ожидается.

Сделай так, чтобы в такой записи `a` и `b` представляли собой разные наборы анимаций и можно было на любом шаге в цепи сохранить анимацию и воспользоваться ею.
