/* АлгоТау — olympiad informatics trainer for kids. Vanilla JS, no build step. Kazakh (default) and Russian. */
(() => {
'use strict';

const OLY = window.OLY;
const ALL_GRADES = [5, 6, 7, 8, 9, 10, 11];
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const app = $('#app');

/* ---------------- storage (per-device convenience) ---------------- */
const KEY = 'algotau-v1';
const S = { solved: {}, quiz: {}, code: {}, read: {}, last: null, lang: 'kk' };
try { const raw = localStorage.getItem(KEY); if (raw) Object.assign(S, JSON.parse(raw)); } catch (e) { /* storage unavailable */ }
function saveNow() { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) { /* ignore */ } }
let saveTimer = null;
function save() { clearTimeout(saveTimer); saveTimer = setTimeout(saveNow, 250); updatePoints(); }
const LANG = S.lang === 'ru' ? 'ru' : 'kk';
document.documentElement.lang = LANG;

/* ---------------- texts ---------------- */
const I18N = {
  kk: {
    nav_home: 'Сыныптар', nav_tasks: 'Олимпиадалық тапсырмалар', nav_olymp: 'Олимпиада туралы', nav_sandbox: 'Еркін алаң',
    pts_title: 'Шешілген есептер үшін ұпайлар', home: 'Басты бет',
    py_loading: 'Python жүктелуде…', py_ready: 'Python дайын', py_fail: 'Python іске қосылмады', py_title: 'Python 3.12 тікелей браузерде жұмыс істейді',
    loading: 'Сабақтар жүктелуде…',
    foot1: 'АлгоТау · информатикадан олимпиадаға дайындық, 5–11 сынып',
    foot2: 'Код браузерде орындалады (Pyodide арқылы Python 3.12). Прогресс осы құрылғыда сақталады.',
    hello: 'Сәлем! Мен — Барыс. Бірге олимпиадаға дайындаламыз!',
    hero_eyebrow: 'Информатика · 5–11 сынып',
    hero_h1: 'Алғашқы бағдарламадан <span class="hl2">республикалық олимпиадаға</span> дейін',
    hero_lead: 'Сыныбыңды таңда. Әр тақырыпта түсінікті сабақ, шағын тест және олимпиадалық есептер бар. Шешімді Python тілінде осы жерде жазасың, ал жүйе оны нағыз олимпиададағыдай тесттермен тексереді.',
    cta_grades: 'Сыныпты таңдау', cta_olymp: 'Олимпиада қалай өтеді?',
    proto_title: 'Тексеру осылай көрінеді', proto_task: '«Баспалдақ» есебі · Python', test: 'Тест', wrong: 'қате жауап',
    proto_score: '/ 100 ұпай: әр өткен тест үшін өз үлесі',
    route: 'Маршрут', choose: 'Сыныбыңды таңда',
    choose_p: 'Әр сынып — тауға бір баспалдақ. Тақырыптар оңайдан қиынға қарай жүреді, ал есептер медальмен белгіленген: қола, күміс, алтын.',
    band_jr: 'Кіші олимпиадалар · 5–8 сынып', band_rep: 'Информатикадан республикалық олимпиада · 9–11 сынып',
    grade_word: 'сынып', soon: 'Жақында', meta: '{t} тақырып · {p} есеп',
    f1h: 'Жаттау емес, түсіну', f1p: 'Әр тақырып түсінікті сабақтан басталады: идея, мысал, жиі кездесетін қате және олимпиадалық кеңес. Код мысалдарын бір батырмамен іске қосасың.',
    f2h: 'Нағыз турдағыдай тексеру', f2p: 'Шешім жасырын тесттерде тексеріледі. OK, WA, TLE, RE вердиктері және ішінара ұпайлар — олимпиада жүйесіндегідей.',
    f3h: 'Талпыныстан кейін талдау', f3p: 'Алдымен кеңес, кейін шешімі бар толық талдау. Талдау бірінші жіберуден кейін ашылады — өзің ойланып үлгер.',
    resume: 'Сен <b>«{p}»</b> есебінде тоқтадың · {g} сынып, {t}', resume_btn: 'Жалғастыру',
    st5: '5–6 сынып олимпиадасы, негіз', st6: '5–6 сынып олимпиадасы', st7: '7–8 сынып, мектептік кезең', st8: '7–8 сынып, мектептік кезең',
    st9: 'Республикалық: мектептен облысқа дейін', st10: 'Облыстық кезең', st11: 'Республикалық кезең, IOI іріктеуі',
    lvl1: 'Қола', lvl2: 'Күміс', lvl3: 'Алтын', lvl_short: ['', 'Қ', 'К', 'А'], pts: 'ұпай',
    goal: 'Мақсат:', passed: '{p}% өтілді', no_grade: '{g} сыныптың материалдары жақында қосылады.',
    topic_n: '{n}-тақырып · {m} минут', read_btn: 'Сабақты оқыдым', read_done: '✓ Сабақ оқылды',
    check_self: 'Өзіңді тексер', problems: 'Есептер', problems_p: 'Ретімен шеш: қоладан алтынға қарай. Есеп үшін 100 ұпай × медаль деңгейі.',
    all_topics_back: '← Барлық тақырыптар', all_topics_fwd: 'Барлық тақырыптар →',
    topic_progress: 'Тақырып прогресі', in_topic: 'Бұл тақырыпта', theory: 'Теория',
    example: 'Мысал', input_short: 'Кіріс: ', to_sandbox: 'Еркін алаңға', run: '▶ Іске қосу', running: 'Орындалуда…', no_output: '(бағдарлама ештеңе шығармады)',
    right: 'Дұрыс!', not_yet: 'Әзірге дұрыс емес. Тағы байқап көр!',
    unsolved: 'шешілмеген',
    tip: 'Олимпиадалық кеңес', warn: 'Жиі кездесетін қате',
    lim_time: 'Уақыт: тестке 5 с', lim_io: 'Енгізу: стандартты', lim_tests: 'Тест саны: {n}',
    in_data: 'Кіріс деректері', out_data: 'Шығыс деректері', examples: 'Мысалдар', ex_in: 'Кіріс', ex_out: 'Шығыс', paste: 'Кіріске қою',
    hint: 'Кеңес', next_task: 'Келесі есеп: {t} →', back_topic: '← «{t}» тақырыбына',
    reset: 'Кодты тазалау', reset_sure: 'Шынымен бе?', submit: 'Тексеруге жіберу',
    io_in: 'Кіріс', io_out: 'Шығыс',
    keys: '<kbd>Tab</kbd> — шегініс, <kbd>Shift</kbd>+<kbd>Tab</kbd> — шегіністі алу, <kbd>Ctrl</kbd>/<kbd>⌘</kbd>+<kbd>Enter</kbd> — іске қосу.',
    lock: 'Талдау мен шешім бірінші жіберуден кейін ашылады.', open_now: 'Қазір ашу', open_sure: 'Сенімдісің бе? Алдымен өзің байқап көр',
    solution: 'Талдау және шешім', ref_solution: 'Эталондық шешім', copy: 'Көшіру', copied: 'Көшірілді', selected: 'Белгіленді — Ctrl+C бас',
    result: 'Тексеру нәтижесі', checking: 'Тексеріп жатырмын…',
    win: 'Керемет! Есеп шешілді!', win_pts: '+{n} ұпай', further: 'Әрі қарай →', back_to_topic: 'Тақырыпқа оралу →',
    v_OK: 'Тест өтті', v_WA: 'Қате жауап', v_TLE: 'Уақыт асып кетті', v_RE: 'Орындау қатесі', v_CE: 'Бағдарлама іске қосылмайды',
    is_example: ' · бұл мысалдағы тест', r_in: 'Кіріс', r_exp: 'Күтілген', r_got: 'Сенің жауабың', r_msg: 'Хабарлама', r_help: 'Кеңес', empty_out: '(бос)',
    tle_msg: 'Бағдарлама {s} секундтан ұзақ жұмыс істеді және тоқтатылды. Мүмкін, шексіз цикл немесе алгоритм тым баяу.',
    skip_msg: 'Тест іске қосылмады: уақыт қатарынан екі рет асқаннан кейін тексеру тоқтатылды.',
    py_first: 'Python жүктелуде (алғаш рет 5–10 секунд)…', py_cant: 'Python-ды іске қосу мүмкін болмады: ',
    py_timeout: 'Python 90 секундта жүктелмеді. Интернетті тексеріп, бетті жаңарт.',
    line: 'Жол', syntax: 'Синтаксистік қате', indent: 'Шегініс қатесі', stack: 'Рекурсия тым терең',
    sb_eyebrow: 'Еркін режим', sb_title: 'Еркін алаң', sb_p: 'Идеяларыңды тексер, сабақтағы мысалдарды іске қос, тәжірибе жаса. Код осы құрылғыда сақталады.',
    sb_default: '# Еркін алаң: Python-да кез келген код жаз\n# Кіріс деректері — «Кіріс» өрісінде.\nn = int(input())\nnums = list(map(int, input().split()))\nprint("Қосындысы:", sum(nums))\nprint("Ең үлкені:", max(nums))\nprint("Өсу ретімен:", *sorted(nums))\n',
    editor_label: 'Python код редакторы', resize: 'Биіктігін өзгерту үшін тарт',
    next: 'Келесі →', prev: '← Артқа', to_quiz: 'Тестке өту →', finish_btn: 'Аяқтау ✓', intro: 'Кіріспе', cont: 'жалғасы',
    quiz_n: 'Өзіңді тексер · {a}-сұрақ / {b}', finish_h: 'Жарайсың! Сабақ аяқталды', finish_p: 'Енді білгеніңді есептерде байқап көр. Қоладан бастап, алтынға дейін жет!',
    quiz_score: 'Тест: {b} сұрақтың {a}-і дұрыс', to_problem: 'Есепті шешу →', reread: 'Сабақты басынан оқу', next_topic: 'Келесі тақырып',
    keys_reader: '<kbd>←</kbd> <kbd>→</kbd> пернелерімен немесе саусақпен сырғытып парақтауға болады.',
    tk_eyebrow: '«Дарын» олимпиадаларынан', tk_title: 'Олимпиадалық тапсырмалар',
    tk_p: 'Қазақстандағы информатика олимпиадаларының нағыз есептері. Әр есептің шартын өз сөзімізбен қайта жаздық, тесттер мен талдау қостық, ал түпнұсқаға сілтеме қалдырдық.',
    tk_all: 'Барлығы', tk_src: 'Дереккөз', tk_orig: 'Түпнұсқа', tk_archive: 'Олимпиадалар мұрағаты', tk_banner_h: 'Нағыз олимпиада есептері', tk_banner_p: 'Аудандық, облыстық және республикалық кезеңдердің есептерін шешіп көр.', tk_open: 'Тапсырмаларға өту →',
    tk_back: '← Барлық тапсырмалар', tk_solved: '{a} / {b} шешілді', tk_retold: 'Шарт қайта баяндалған: сандар мен шектеулер түпнұсқадағыдай.',
    author: 'Авторы', author_role: 'Жобаның авторы', author_note: 'Сұрақтар мен ұсыныстарды Instagram-ға жаз',
  },
  ru: {
    nav_home: 'Классы', nav_tasks: 'Олимпиадные задачи', nav_olymp: 'Об олимпиаде', nav_sandbox: 'Песочница',
    pts_title: 'Баллы за решённые задачи', home: 'Главная',
    py_loading: 'Python загружается…', py_ready: 'Python готов', py_fail: 'Python не запустился', py_title: 'Python 3.12 работает прямо в браузере',
    loading: 'Загружаю уроки…',
    foot1: 'АлгоТау · подготовка к олимпиадам по информатике, 5–11 класс',
    foot2: 'Код выполняется в браузере (Python 3.12 через Pyodide). Прогресс хранится на этом устройстве.',
    hello: 'Привет! Я Барыс. Давай вместе готовиться к олимпиаде!',
    hero_eyebrow: 'Информатика · 5–11 класс',
    hero_h1: 'От первой программы до <span class="hl2">республиканской олимпиады</span>',
    hero_lead: 'Выбери свой класс. В каждой теме есть понятный урок, короткий тест и олимпиадные задачи. Пишешь решение на Python прямо здесь, а система проверяет его на тестах, как на настоящем туре.',
    cta_grades: 'Выбрать класс', cta_olymp: 'Как устроена олимпиада?',
    proto_title: 'Так выглядит проверка', proto_task: 'Задача «Лесенка» · Python', test: 'Тест', wrong: 'неверный ответ',
    proto_score: '/ 100 баллов: за каждый пройденный тест — своя часть',
    route: 'Маршрут', choose: 'Выбери класс',
    choose_p: 'Каждый класс — ступенька на гору. Темы идут от простого к сложному, задачи отмечены медалями: бронза, серебро, золото.',
    band_jr: 'Юниорские олимпиады · 5–8 класс', band_rep: 'Республиканская олимпиада по информатике · 9–11 класс',
    grade_word: 'класс', soon: 'Скоро', meta: '{t} тем · {p} задач',
    f1h: 'Понимание, а не зубрёжка', f1p: 'Каждая тема начинается с понятного урока: идея, пример, типичная ошибка и олимпиадный совет. Примеры кода запускаются одной кнопкой.',
    f2h: 'Проверка как на туре', f2p: 'Решение проверяется на скрытых тестах. Вердикты OK, WA, TLE, RE и частичные баллы — как в олимпиадной системе.',
    f3h: 'Разбор после попытки', f3p: 'Сначала подсказка, потом полный разбор с решением. Разбор открывается после первой отправки, чтобы ты успел подумать сам.',
    resume: 'Ты остановился на задаче <b>«{p}»</b> · {g} класс, {t}', resume_btn: 'Продолжить',
    st5: 'Олимпиада 5–6 кл., база', st6: 'Олимпиада 5–6 кл.', st7: '7–8 кл., школьный этап', st8: '7–8 кл., школьный этап',
    st9: 'Республиканская: от школьного до областного', st10: 'Областной этап', st11: 'Республиканский этап, отбор на IOI',
    lvl1: 'Бронза', lvl2: 'Серебро', lvl3: 'Золото', lvl_short: ['', 'Б', 'С', 'З'], pts: 'баллов',
    goal: 'Цель:', passed: '{p}% пройдено', no_grade: 'Материалы для {g} класса скоро появятся.',
    topic_n: 'Тема {n} · {m} минут', read_btn: 'Я прочитал урок', read_done: '✓ Урок прочитан',
    check_self: 'Проверь себя', problems: 'Задачи', problems_p: 'Решай по порядку: от бронзы к золоту. За задачу даётся 100 баллов × уровень медали.',
    all_topics_back: '← Все темы', all_topics_fwd: 'Все темы →',
    topic_progress: 'Прогресс темы', in_topic: 'В этой теме', theory: 'Теория',
    example: 'Пример', input_short: 'Ввод: ', to_sandbox: 'В песочницу', run: '▶ Запустить', running: 'Выполняется…', no_output: '(программа ничего не вывела)',
    right: 'Верно!', not_yet: 'Пока не так. Попробуй ещё раз!',
    unsolved: 'не решена',
    tip: 'Олимпиадный совет', warn: 'Типичная ошибка',
    lim_time: 'Время: 5 с на тест', lim_io: 'Ввод: стандартный', lim_tests: 'Тестов: {n}',
    in_data: 'Входные данные', out_data: 'Выходные данные', examples: 'Примеры', ex_in: 'Ввод', ex_out: 'Вывод', paste: 'Вставить во ввод',
    hint: 'Подсказка', next_task: 'Следующая задача: {t} →', back_topic: '← К теме «{t}»',
    reset: 'Сбросить код', reset_sure: 'Точно?', submit: 'Отправить на проверку',
    io_in: 'Ввод', io_out: 'Вывод',
    keys: '<kbd>Tab</kbd> — отступ, <kbd>Shift</kbd>+<kbd>Tab</kbd> — убрать отступ, <kbd>Ctrl</kbd>/<kbd>⌘</kbd>+<kbd>Enter</kbd> — запустить.',
    lock: 'Разбор и решение откроются после первой отправки.', open_now: 'Открыть сейчас', open_sure: 'Точно? Сначала попробуй сам',
    solution: 'Разбор и решение', ref_solution: 'Эталонное решение', copy: 'Скопировать', copied: 'Скопировано', selected: 'Выделено — нажми Ctrl+C',
    result: 'Результат проверки', checking: 'Проверяю…',
    win: 'Ура! Задача решена!', win_pts: '+{n} баллов', further: 'Дальше →', back_to_topic: 'Вернуться к теме →',
    v_OK: 'Тест пройден', v_WA: 'Неверный ответ', v_TLE: 'Превышено время', v_RE: 'Ошибка выполнения', v_CE: 'Программа не запускается',
    is_example: ' · это тест из примера', r_in: 'Ввод', r_exp: 'Ожидалось', r_got: 'Твой ответ', r_msg: 'Сообщение', r_help: 'Подсказка', empty_out: '(пусто)',
    tle_msg: 'Программа работала дольше {s} с и была остановлена. Возможно, бесконечный цикл или слишком медленный алгоритм.',
    skip_msg: 'Тест не запускался: проверка остановлена после двух превышений времени подряд.',
    py_first: 'Загружаю Python (первый раз около 5–10 секунд)…', py_cant: 'Не удалось запустить Python: ',
    py_timeout: 'Python не загрузился за 90 секунд. Проверь интернет и обнови страницу.',
    line: 'Строка', syntax: 'Синтаксическая ошибка', indent: 'Ошибка отступов', stack: 'Слишком глубокая рекурсия',
    sb_eyebrow: 'Свободный режим', sb_title: 'Песочница', sb_p: 'Проверяй идеи, запускай примеры из уроков и экспериментируй. Код сохраняется на этом устройстве.',
    sb_default: '# Песочница: пиши любой код на Python\n# Входные данные — в поле «Ввод».\nn = int(input())\nnums = list(map(int, input().split()))\nprint("Сумма:", sum(nums))\nprint("Максимум:", max(nums))\nprint("По возрастанию:", *sorted(nums))\n',
    editor_label: 'Редактор кода на Python', resize: 'Потяни, чтобы изменить высоту',
    next: 'Далее →', prev: '← Назад', to_quiz: 'К тесту →', finish_btn: 'Завершить ✓', intro: 'Введение', cont: 'продолжение',
    quiz_n: 'Проверь себя · вопрос {a} из {b}', finish_h: 'Молодец! Урок пройден', finish_p: 'Теперь попробуй знания на задачах. Начни с бронзы и дойди до золота!',
    quiz_score: 'Тест: {a} из {b} правильно', to_problem: 'Решать задачу →', reread: 'Прочитать урок сначала', next_topic: 'Следующая тема',
    keys_reader: 'Листай стрелками <kbd>←</kbd> <kbd>→</kbd> или свайпом пальцем.',
    tk_eyebrow: 'С олимпиад «Дарына»', tk_title: 'Олимпиадные задачи',
    tk_p: 'Настоящие задачи олимпиад по информатике в Казахстане. Условие каждой задачи мы пересказали своими словами, добавили тесты и разбор, а ссылку на оригинал оставили.',
    tk_all: 'Все', tk_src: 'Источник', tk_orig: 'Оригинал', tk_archive: 'Архив олимпиад', tk_banner_h: 'Настоящие олимпиадные задачи', tk_banner_p: 'Попробуй задачи районного, областного и республиканского этапов.', tk_open: 'К задачам →',
    tk_back: '← Все задачи', tk_solved: 'Решено {a} из {b}', tk_retold: 'Условие пересказано: числа и ограничения как в оригинале.',
    author: 'Автор', author_role: 'Автор проекта', author_note: 'Вопросы и предложения пиши в Instagram',
  },
};
const ERR_HELP = {
  kk: {
    NameError: 'Мұндай атау табылмады. Қате жазылмағанын және айнымалы қолданылмас бұрын жарияланғанын тексер.',
    IndexError: 'Тізімнің немесе жолдың шегінен шығып кеттің. Индекстер 0-ден len − 1-ге дейін.',
    ValueError: 'Мән сәйкес емес. Көбіне int() бос орны бар жолды алғанда болады — input().split() қолдан.',
    TypeError: 'Бұл амал мұндай типпен жасалмайды. Мысалы, жолды санға қосуға болмайды: алдымен int() не str().',
    ZeroDivisionError: 'Нөлге бөлу. Бөлгіш 0 болуы мүмкін жағдайды тексер.',
    EOFError: 'Бағдарлама кіріс деректерінде бар жолдардан көбірек оқуға тырысып жатыр.',
    RecursionError: 'Рекурсия тым терең. Шешімді цикл арқылы жазып көр.',
    KeyError: 'Сөздікте мұндай кілт жоқ. d.get(key, 0) қолдан немесе «key in d» арқылы тексер.',
    AttributeError: 'Объектіде мұндай әдіс жоқ. Жазылуын тексер (мысалы, тізімде .add емес, .append).',
    IndentationError: 'Шегініс қатесі. Python-да қос нүктеден кейінгі блок 4 бос орынға ығысады.',
    SyntaxError: 'Python жазуды түсінбеді. Қос нүктелерді, жақшаларды және тырнақшаларды тексер.',
    UnboundLocalError: 'Айнымалы функция ішінде мән берілмей тұрып қолданылып жатыр.',
  },
  ru: {
    NameError: 'Имя не найдено. Проверь, нет ли опечатки и объявлена ли переменная до использования.',
    IndexError: 'Обращение за границу списка или строки. Индексы идут от 0 до len − 1.',
    ValueError: 'Неподходящее значение. Часто так бывает, когда int() получает строку с пробелами — используй input().split().',
    TypeError: 'Операция с неподходящим типом. Например, строку нельзя сложить с числом: сначала int() или str().',
    ZeroDivisionError: 'Деление на ноль. Проверь случай, когда делитель может быть 0.',
    EOFError: 'Программа пытается прочитать больше строк, чем есть во входных данных.',
    RecursionError: 'Слишком глубокая рекурсия. Попробуй переписать решение циклом.',
    KeyError: 'Такого ключа нет в словаре. Используй d.get(key, 0) или проверь «key in d».',
    AttributeError: 'У объекта нет такого метода. Проверь написание (например, .append, а не .add у списка).',
    IndentationError: 'Ошибка отступов. В Python блок после двоеточия сдвигается на 4 пробела.',
    SyntaxError: 'Python не понял запись. Проверь двоеточия, скобки и кавычки.',
    UnboundLocalError: 'Переменная используется внутри функции до того, как ей присвоили значение.',
  },
};
const T = I18N[LANG];
function t(key, vars) {
  let s = T[key] ?? I18N.ru[key] ?? key;
  if (vars) for (const k in vars) s = s.split('{' + k + '}').join(vars[k]);
  return s;
}

/* ---------------- mascot: Barys the snow leopard ---------------- */
function mascot(size = 80, mood = 'normal', cls = '') {
  const eyes = mood === 'happy'
    ? '<path d="M38 60 q7 -9 14 0" fill="none" stroke="#1C1E3F" stroke-width="4" stroke-linecap="round"/><path d="M68 60 q7 -9 14 0" fill="none" stroke="#1C1E3F" stroke-width="4" stroke-linecap="round"/>'
    : '<circle cx="45" cy="61" r="7.5" fill="#1C1E3F"/><circle cx="75" cy="61" r="7.5" fill="#1C1E3F"/><circle cx="47.5" cy="58" r="2.6" fill="#fff"/><circle cx="77.5" cy="58" r="2.6" fill="#fff"/>';
  const mouth = mood === 'oops'
    ? '<ellipse cx="60" cy="84" rx="4" ry="5" fill="#1C1E3F"/>'
    : '<path d="M51 80 q4.5 6 9 0 q4.5 6 9 0" fill="none" stroke="#1C1E3F" stroke-width="3" stroke-linecap="round"/>' + (mood === 'happy' ? '<path d="M54 84 q6 9 12 0 z" fill="#FF6F87"/>' : '');
  const brows = mood === 'oops' ? '<path d="M37 48 l12 3 M83 48 l-12 3" stroke="#1C1E3F" stroke-width="3" stroke-linecap="round"/>' : '';
  return `<svg class="mascot ${cls}" width="${size}" height="${size}" viewBox="0 0 120 120" aria-hidden="true">
    <circle cx="28" cy="32" r="15" fill="#EEF1F8" stroke="#1C1E3F" stroke-width="3.5"/><circle cx="28" cy="32" r="7" fill="#FFB4C2"/>
    <circle cx="92" cy="32" r="15" fill="#EEF1F8" stroke="#1C1E3F" stroke-width="3.5"/><circle cx="92" cy="32" r="7" fill="#FFB4C2"/>
    <path d="M60 104 C30 104 15 88 15 66 C15 42 34 26 60 26 C86 26 105 42 105 66 C105 88 90 104 60 104 Z" fill="#F7F9FD" stroke="#1C1E3F" stroke-width="3.5"/>
    <g fill="#3E4466"><circle cx="44" cy="38" r="3.4"/><circle cx="52" cy="33" r="2.6"/><circle cx="76" cy="38" r="3.4"/><circle cx="68" cy="33" r="2.6"/><circle cx="60" cy="40" r="2.4"/>
      <circle cx="24" cy="66" r="3"/><circle cx="27" cy="76" r="2.4"/><circle cx="96" cy="66" r="3"/><circle cx="93" cy="76" r="2.4"/></g>
    <ellipse cx="34" cy="76" rx="7" ry="4.5" fill="#FFB4C2" opacity=".7"/><ellipse cx="86" cy="76" rx="7" ry="4.5" fill="#FFB4C2" opacity=".7"/>
    ${brows}${eyes}
    <path d="M54 71 h12 l-6 6 z" fill="#FF8FA3" stroke="#1C1E3F" stroke-width="2" stroke-linejoin="round"/>
    ${mouth}
    <path d="M30 72 l-14 -3 M30 77 l-14 2 M90 72 l14 -3 M90 77 l14 2" stroke="#1C1E3F" stroke-width="2" stroke-linecap="round"/>
    <path d="M32 101 q28 12 56 0 l-4 10 q-24 8 -48 0 z" fill="#2F5BEA" stroke="#1C1E3F" stroke-width="3" stroke-linejoin="round"/>
  </svg>`;
}
const GRADE_ICON = {
  5: '<path d="M27 4l6.5 13.5 15 2-11 10.5 2.8 14.8L27 37.6 13.7 44.8l2.8-14.8-11-10.5 15-2z" fill="#fff"/>',
  6: '<path d="M30 2L10 30h14l-4 24 22-30H28z" fill="#fff"/>',
  7: '<text x="27" y="42" text-anchor="middle" font-family="JetBrains Mono, monospace" font-weight="700" font-size="34" fill="#fff">{}</text>',
  8: '<path d="M27 4l22 22-22 26L5 26z" fill="#fff"/>',
  9: '<path d="M27 3c10 8 14 20 12 34H15C13 23 17 11 27 3z M15 37l-8 10 10-3z M39 37l8 10-10-3z" fill="#fff"/>',
  10: '<path d="M6 42L4 14l13 12 10-18 10 18 13-12-2 28z" fill="#fff"/>',
  11: '<path d="M14 6h26v12c0 9-6 15-13 15S14 27 14 18z M27 33v8 M17 48h20 M14 10H5c0 8 4 12 10 12 M40 10h9c0 8-4 12-10 12" fill="#fff" stroke="#fff" stroke-width="4" stroke-linecap="round"/>',
};

/* ---------------- author ---------------- */
const AUTHOR = { name: 'Ахауова Шарбану Ермухамбетовна', insta: 'https://www.instagram.com/sharbanuakhauova/', handle: '@sharbanuakhauova' };
const INSTA_ICON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>';
const instaLink = (cls = '') => `<a class="insta ${cls}" href="${AUTHOR.insta}" target="_blank" rel="noopener">${INSTA_ICON}<span>${AUTHOR.handle}</span></a>`;

/* ---------------- static chrome ---------------- */
$('#brandMascot').innerHTML = mascot(42, 'happy');
$('#brand').setAttribute('aria-label', 'АлгоТау — ' + t('home'));
$('#nav').innerHTML = `<a href="#" data-nav="home">${t('nav_home')}</a><a href="#tasks" data-nav="tasks">${t('nav_tasks')}</a><a href="#olympiad" data-nav="olympiad">${t('nav_olymp')}</a><a href="#sandbox" data-nav="sandbox">${t('nav_sandbox')}</a>`;
$('#ptsChip').title = t('pts_title');
$('#foot1').textContent = t('foot1');
$('#foot2').textContent = t('foot2');
$('#foot3').innerHTML = `${t('author')}: ${esc(AUTHOR.name)} · ${instaLink()}`;
$$('.lang button').forEach((b) => {
  b.setAttribute('aria-pressed', String(b.dataset.lang === LANG));
  b.addEventListener('click', () => {
    if (b.dataset.lang === LANG) return;
    S.lang = b.dataset.lang; saveNow(); location.reload();
  });
});

/* ---------------- content index ---------------- */
const IDX = {};
function buildIndex() {
  const O = OLY.grades.olymp;
  if (O) O.topics.forEach((tp, ti) => {
    IDX[tp.id] = { type: 'topic', G: O, t: tp, ti, olymp: true };
    tp.problems.forEach((p, pi) => { IDX[p.id] = { type: 'problem', G: O, t: tp, p, ti, pi, olymp: true }; });
  });
  for (const g of ALL_GRADES) {
    const G = OLY.grades[g];
    IDX['g' + g] = { type: 'grade', g, G };
    if (!G) continue;
    G.topics.forEach((tp, ti) => {
      IDX[tp.id] = { type: 'topic', G, t: tp, ti };
      tp.problems.forEach((p, pi) => { IDX[p.id] = { type: 'problem', G, t: tp, p, ti, pi }; });
    });
  }
}
const LEVEL_PTS = { 1: 100, 2: 200, 3: 300 };
const lvl = (n) => t('lvl' + n);

function topicProgress(tp) {
  const total = 1 + tp.quiz.length + tp.problems.length;
  let done = S.read[tp.id] ? 1 : 0;
  tp.quiz.forEach((q, i) => { if (S.quiz[tp.id] && S.quiz[tp.id][i] === q.answer) done++; });
  tp.problems.forEach((p) => { done += (S.solved[p.id] || 0) / 100; });
  return done / total;
}
function gradeProgress(G) {
  if (!G || !G.topics.length) return 0;
  return G.topics.reduce((a, tp) => a + topicProgress(tp), 0) / G.topics.length;
}
function totalPoints() {
  let s = 0;
  for (const id in S.solved) { const e = IDX[id]; if (e && e.p) s += Math.round((S.solved[id] / 100) * LEVEL_PTS[e.p.level || 1]); }
  return s;
}
function updatePoints() { $('#pts').textContent = totalPoints(); }
const pct = (x) => Math.round(x * 100);
function medal(p, big) {
  const sc = S.solved[p.id];
  const cls = sc === 100 ? 'done' : sc > 0 ? 'part' : '';
  return `<span class="medal l${p.level} ${cls}" title="${lvl(p.level)}${sc != null ? ' · ' + sc + '/100' : ''}">${big ? T.lvl_short[p.level] : ''}</span>`;
}
function scorePill(id) {
  const sc = S.solved[id];
  if (sc == null) return `<span class="score-pill">${t('unsolved')}</span>`;
  return `<span class="score-pill ${sc === 100 ? 'full' : 'partial'}">${sc}/100</span>`;
}

/* ---------------- Python syntax highlight ---------------- */
const KW = new Set('False None True and as assert async await break class continue def del elif else except finally for from global if import in is lambda nonlocal not or pass raise return try while with yield'.split(' '));
const BI = new Set('print input int str float list dict set tuple range len sum min max sorted abs map enumerate zip reversed round divmod pow bool ord chr any all isinstance type open iter next filter frozenset hex bin oct'.split(' '));
const TOK = /(#[^\n]*)|([rbfRBF]{0,2}(?:"""[\s\S]*?(?:"""|$)|'''[\s\S]*?(?:'''|$)|"(?:\\.|[^"\\\n])*"?|'(?:\\.|[^'\\\n])*'?))|(\b\d[\d_]*(?:\.\d+)?(?:e[+-]?\d+)?\b)|([A-Za-z_Ѐ-ӿ][\wЀ-ӿ]*)/g;
function highlight(src) {
  let out = '', last = 0, prevWord = '';
  src.replace(TOK, (m, com, str, num, word, off) => {
    out += esc(src.slice(last, off));
    last = off + m.length;
    if (com) out += `<span class="tk-com">${esc(m)}</span>`;
    else if (str) out += `<span class="tk-str">${esc(m)}</span>`;
    else if (num) out += `<span class="tk-num">${esc(m)}</span>`;
    else if (KW.has(m)) out += `<span class="tk-kw">${m}</span>`;
    else if (prevWord === 'def' || prevWord === 'class') out += `<span class="tk-fn">${esc(m)}</span>`;
    else if (BI.has(m)) out += `<span class="tk-bi">${m}</span>`;
    else out += esc(m);
    prevWord = word ? m : '';
    return m;
  });
  return out + esc(src.slice(last));
}

/* ---------------- code editor (textarea + highlight layer) ---------------- */
function createEditor(host, { value = '', onChange, onRun, height }) {
  host.innerHTML = `<div class="ed" style="${height ? '--ed-h:' + height + 'px' : ''}"><div class="ed-gutter" aria-hidden="true"></div><div class="ed-body"><pre aria-hidden="true"><code></code></pre><textarea spellcheck="false" autocapitalize="off" autocomplete="off" autocorrect="off" aria-label="${t('editor_label')}"></textarea></div></div><div class="ed-resize" title="${t('resize')}" aria-hidden="true"></div>`;
  const ed = $('.ed', host), ta = $('textarea', host), pre = $('pre', host), code = $('code', host), gut = $('.ed-gutter', host);
  let errLine = 0;
  ta.value = value;
  function paint() {
    const v = ta.value;
    code.innerHTML = highlight(v) + (v.endsWith('\n') || !v ? ' ' : '');
    const n = v.split('\n').length;
    let g = '';
    for (let i = 1; i <= n; i++) g += `<div${i === errLine ? ' class="err"' : ''}>${i}</div>`;
    gut.innerHTML = g;
    sync();
  }
  function sync() { pre.scrollTop = ta.scrollTop; pre.scrollLeft = ta.scrollLeft; gut.scrollTop = ta.scrollTop; }
  function insert(text) {
    ta.focus();
    if (!document.execCommand('insertText', false, text)) {
      ta.setRangeText(text, ta.selectionStart, ta.selectionEnd, 'end');
      ta.dispatchEvent(new Event('input'));
    }
  }
  function lineStart(pos) { return ta.value.lastIndexOf('\n', pos - 1) + 1; }
  function shiftLines(dedent) {
    const v = ta.value, s = ta.selectionStart, e = ta.selectionEnd;
    const a = lineStart(s);
    let b = v.indexOf('\n', e - (e > s && v[e - 1] === '\n' ? 1 : 0));
    if (b < 0) b = v.length;
    const changed = v.slice(a, b).split('\n').map((l) => dedent ? l.replace(/^ {1,4}/, '') : '    ' + l).join('\n');
    ta.setSelectionRange(a, b);
    insert(changed);
    ta.setSelectionRange(a, a + changed.length);
  }
  ta.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') { e.preventDefault(); onRun && onRun(); return; }
    if (e.key === 'Tab') {
      e.preventDefault();
      const multi = ta.value.slice(ta.selectionStart, ta.selectionEnd).includes('\n');
      if (e.shiftKey || multi) shiftLines(e.shiftKey); else insert('    ');
      return;
    }
    if (e.key === 'Enter' && !e.shiftKey && !e.altKey) {
      e.preventDefault();
      const pos = ta.selectionStart, line = ta.value.slice(lineStart(pos), pos);
      let ind = (line.match(/^ */) || [''])[0];
      if (/:\s*(#.*)?$/.test(line)) ind += '    ';
      insert('\n' + ind);
      return;
    }
    if (e.key === 'Backspace' && ta.selectionStart === ta.selectionEnd) {
      const pos = ta.selectionStart, before = ta.value.slice(lineStart(pos), pos);
      if (before.length && /^ +$/.test(before)) {
        e.preventDefault();
        ta.setSelectionRange(pos - (before.length % 4 || 4), pos);
        insert('');
      }
    }
  });
  ta.addEventListener('input', () => { errLine = 0; paint(); onChange && onChange(ta.value); });
  ta.addEventListener('scroll', sync);
  const rz = $('.ed-resize', host);
  rz.addEventListener('pointerdown', (e) => {
    const y0 = e.clientY, h0 = ed.getBoundingClientRect().height;
    rz.setPointerCapture(e.pointerId);
    const move = (ev) => { ed.style.setProperty('--ed-h', Math.max(160, Math.min(900, h0 + ev.clientY - y0)) + 'px'); };
    const up = () => { rz.removeEventListener('pointermove', move); rz.removeEventListener('pointerup', up); };
    rz.addEventListener('pointermove', move); rz.addEventListener('pointerup', up);
  });
  paint();
  return {
    get: () => ta.value,
    set: (v) => { ta.value = v; paint(); onChange && onChange(v); },
    markError: (ln) => { errLine = ln || 0; paint(); },
  };
}

/* ---------------- Python runner: Pyodide in a Web Worker ---------------- */
const PY_BASE = new URL('vendor/pyodide/', document.baseURI).href;
const HARNESS = `
import sys, io, builtins, traceback
sys.setrecursionlimit(3000)
def __oly_run(src, inp):
    out, err = io.StringIO(), io.StringIO()
    old = sys.stdin, sys.stdout, sys.stderr
    try:
        code = compile(src, '<code>', 'exec')
    except SyntaxError as e:
        return {'ok': False, 'kind': 'CE', 'out': '', 'stderr': '', 'name': type(e).__name__, 'msg': str(e.msg), 'line': e.lineno or 0}
    sys.stdin, sys.stdout, sys.stderr = io.StringIO(inp), out, err
    kind, msg, line, name = 'OK', '', 0, ''
    try:
        exec(code, {'__name__': '__main__', '__builtins__': builtins})
    except SystemExit:
        pass
    except BaseException as e:
        kind, name, msg = 'RE', type(e).__name__, str(e)
        frames = [f for f in traceback.extract_tb(e.__traceback__) if f.filename == '<code>']
        line = frames[-1].lineno if frames else 0
    finally:
        sys.stdin, sys.stdout, sys.stderr = old
    return {'ok': kind == 'OK', 'kind': kind, 'out': out.getvalue(), 'stderr': err.getvalue(), 'name': name, 'msg': msg, 'line': line}
`;
const WORKER_SRC = `
let py = null;
self.onmessage = async (e) => {
  const m = e.data;
  if (m.type === 'init') {
    try {
      importScripts(m.base + 'pyodide.js');
      py = await loadPyodide({ indexURL: m.base, stdLibURL: m.base + 'python_stdlib.zip.wasm' });
      py.runPython(m.harness);
      self.postMessage({ type: 'ready' });
    } catch (err) { self.postMessage({ type: 'fail', error: String((err && err.message) || err) }); }
    return;
  }
  if (m.type === 'run') {
    const t0 = performance.now();
    try {
      py.globals.set('__src', m.code); py.globals.set('__inp', m.input);
      const px = py.runPython('__oly_run(__src, __inp)');
      const r = px.toJs({ dict_converter: Object.fromEntries }); px.destroy();
      self.postMessage(Object.assign({ type: 'result', id: m.id, ms: performance.now() - t0 }, r));
    } catch (err) {
      const msg = String((err && err.message) || err);
      self.postMessage({ type: 'result', id: m.id, ok: false, kind: 'RE', out: '', stderr: '', name: /stack|recursion/i.test(msg) ? 'RecursionError' : 'Error', msg: msg.split('\\n').slice(-3).join(' '), line: 0, ms: performance.now() - t0 });
    }
  }
};`;
const pyStat = $('#pystat'), pyText = $('#pytext');
function setPy(state, msg) {
  pyStat.className = 'chip py-' + state;
  pyText.textContent = t('py_' + state);
  pyStat.title = msg || t('py_title');
}
setPy('idle');
pyText.textContent = 'Python';
const Runner = {
  w: null, readyP: null, pending: null, nextId: 1, chain: Promise.resolve(), failMsg: '',
  boot() {
    if (this.readyP) return this.readyP;
    setPy('loading');
    this.readyP = new Promise((resolve, reject) => {
      let w;
      try { w = new Worker(URL.createObjectURL(new Blob([WORKER_SRC], { type: 'text/javascript' }))); }
      catch (e) { this.fail(String(e.message || e)); reject(e); return; }
      this.w = w;
      const to = setTimeout(() => { this.fail(t('py_timeout')); reject(new Error('timeout')); }, 90000);
      w.onmessage = (e) => {
        const m = e.data;
        if (m.type === 'ready') { clearTimeout(to); setPy('ready'); resolve(); }
        else if (m.type === 'fail') { clearTimeout(to); this.fail(m.error); reject(new Error(m.error)); }
        else if (m.type === 'result' && this.pending && this.pending.id === m.id) {
          const p = this.pending; this.pending = null; clearTimeout(p.timer); p.resolve(m);
        }
      };
      w.onerror = (e) => { clearTimeout(to); this.fail(e.message || 'load error'); reject(new Error(e.message)); };
      w.postMessage({ type: 'init', base: PY_BASE, harness: HARNESS });
    });
    this.readyP.catch(() => {});
    return this.readyP;
  },
  fail(msg) { this.failMsg = msg; setPy('fail', msg); this.readyP = null; try { this.w && this.w.terminate(); } catch (e) { /* */ } this.w = null; },
  run(code, input, limitMs = 5000) {
    const job = this.chain.then(() => this._run(code, input, limitMs));
    this.chain = job.catch(() => {});
    return job;
  },
  async _run(code, input, limitMs) {
    try { await this.boot(); }
    catch (e) { return { ok: false, kind: 'SYS', out: '', err: t('py_cant') + (this.failMsg || e.message), line: 0 }; }
    return new Promise((resolve) => {
      const id = this.nextId++;
      const timer = setTimeout(() => {
        this.pending = null;
        try { this.w.terminate(); } catch (e) { /* */ }
        this.w = null; this.readyP = null;
        resolve({ ok: false, kind: 'TLE', out: '', err: t('tle_msg', { s: limitMs / 1000 }), line: 0, ms: limitMs });
        this.boot();
      }, limitMs);
      this.pending = { id, resolve, timer };
      this.w.postMessage({ type: 'run', id, code, input });
    }).then((r) => { if (r.err == null) r.err = errText(r); return r; });
  },
};
function errText(r) {
  if (r.kind === 'OK') return (r.stderr || '').trim();
  const ln = r.line ? `${t('line')} ${r.line}: ` : '';
  if (r.kind === 'CE') return `${ln}${r.name === 'IndentationError' || r.name === 'TabError' ? t('indent') : t('syntax')} — ${r.msg}`;
  const extra = r.name === 'RecursionError' && !r.line ? t('stack') + '. ' : '';
  return ((r.stderr || '') + `${ln}${extra}${r.name}: ${r.msg}`).trim();
}
function errHelp(r) {
  const H = ERR_HELP[LANG];
  if (r.kind === 'CE') return r.name === 'IndentationError' || r.name === 'TabError' ? H.IndentationError : H.SyntaxError;
  return H[r.name] || '';
}
const tokens = (s) => String(s).trim().split(/\s+/).filter(Boolean).join(' ');

/* ---------------- confetti ---------------- */
function confetti() {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const cv = $('#confetti'); cv.hidden = false;
  const ctx = cv.getContext('2d'), W = cv.width = innerWidth, H = cv.height = innerHeight;
  const cols = ['#F2554B', '#FF8A1F', '#FFC83D', '#19B571', '#12A9C2', '#2F5BEA', '#8A4DF0'];
  const P = Array.from({ length: 140 }, () => ({ x: W / 2 + (Math.random() - .5) * 120, y: H * .35, vx: (Math.random() - .5) * 16, vy: -Math.random() * 14 - 4, r: Math.random() * 6 + 4, c: cols[Math.random() * 7 | 0], a: Math.random() * 6, s: Math.random() * .3 - .15 }));
  const t0 = performance.now();
  (function frame(now) {
    ctx.clearRect(0, 0, W, H);
    for (const p of P) { p.vy += .45; p.vx *= .99; p.x += p.vx; p.y += p.vy; p.a += p.s; ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.a); ctx.fillStyle = p.c; ctx.fillRect(-p.r / 2, -p.r / 4, p.r, p.r / 2); ctx.restore(); }
    if (now - t0 < 2200) requestAnimationFrame(frame); else { ctx.clearRect(0, 0, W, H); cv.hidden = true; }
  })(t0);
}

/* ---------------- router ---------------- */
function route() {
  const id = decodeURIComponent(location.hash.slice(1));
  $$('.nav a').forEach((a) => a.classList.toggle('on', a.dataset.nav === (IDX[id] && IDX[id].olymp ? 'tasks' : ['olympiad', 'sandbox', 'tasks'].includes(id) ? id : (id ? '' : 'home'))));
  const e = IDX[id];
  app.className = 'wrap';
  if (!id) renderHome();
  else if (id === 'olympiad') renderOlympiad();
  else if (id === 'sandbox') renderSandbox();
  else if (id === 'tasks') renderTasks();
  else if (e && e.olymp && e.type === 'topic') renderTasks(e.t.id);
  else if (e && e.type === 'grade') renderGrade(e);
  else if (e && e.type === 'topic') renderTopic(e);
  else if (e && e.type === 'problem') renderProblem(e);
  else renderHome();
  window.scrollTo(0, 0);
  updatePoints();
}
window.addEventListener('hashchange', route);

/* ---------------- pages ---------------- */
function renderHome() {
  document.title = 'АлгоТау';
  const lastE = S.last && IDX[S.last];
  const steps = ALL_GRADES.map((g, i) => {
    const G = OLY.grades[g];
    const nT = G ? G.topics.length : 0, nP = G ? G.topics.reduce((a, tp) => a + tp.problems.length, 0) : 0;
    const pr = pct(gradeProgress(G));
    return `<a class="step c${g}" href="#g${g}" style="--lift:${i * 20}px">
      <span class="top-c"><svg viewBox="0 0 54 54" aria-hidden="true">${GRADE_ICON[g]}</svg><span class="g">${g}<small>${t('grade_word')}</small></span></span>
      <span class="body">
        <span class="track">${esc(G ? G.track : t('soon'))}</span>
        <span class="stage">${t('st' + g)}</span>
        <span class="meta"><span>${t('meta', { t: nT, p: nP })}</span><span>${pr}%</span></span>
        <span class="bar"><i style="width:${pr}%"></i></span>
      </span>
    </a>`;
  }).join('');
  const ic = (bg, path) => `<span class="ic" style="background:${bg}"><svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">${path}</svg></span>`;
  app.innerHTML = `
  ${lastE ? `<div class="resume"><span>${t('resume', { p: esc(lastE.p.title), g: lastE.G.grade, t: esc(lastE.t.title) })}</span><a class="btn sun small" href="#${lastE.p.id}">${t('resume_btn')}</a></div>` : ''}
  <section class="hero">
    <div>
      <p class="eyebrow">${t('hero_eyebrow')}</p>
      <h1 style="margin-top:12px">${t('hero_h1')}</h1>
      <p class="lead">${t('hero_lead')}</p>
      <div class="cta">
        <button class="btn primary" type="button" id="toGrades">${t('cta_grades')}</button>
        <a class="btn" href="#olympiad">${t('cta_olymp')}</a>
      </div>
    </div>
    <div class="hero-side">
      <div class="guide">${mascot(110, 'happy', 'bob')}<div class="bubble">${t('hello')}</div></div>
      <div class="protocol" aria-label="${t('proto_title')}">
        <div class="head"><span class="eyebrow">${t('proto_title')}</span><span>${t('proto_task')}</span></div>
        <table class="num">
          <tr><td>${t('test')} 1</td><td><span class="v v-OK">OK</span></td><td>0.02 s</td></tr>
          <tr><td>${t('test')} 2</td><td><span class="v v-OK">OK</span></td><td>0.02 s</td></tr>
          <tr><td>${t('test')} 3</td><td><span class="v v-OK">OK</span></td><td>0.03 s</td></tr>
          <tr><td>${t('test')} 4</td><td><span class="v v-WA">WA</span></td><td>${t('wrong')}</td></tr>
          <tr><td>${t('test')} 5</td><td><span class="v v-TLE">TLE</span></td><td>&gt; 5 s</td></tr>
        </table>
        <div class="score"><b class="num">60</b><span class="muted">${t('proto_score')}</span></div>
      </div>
    </div>
  </section>

  <section id="grades">
    <div class="section-head">
      <div><p class="eyebrow">${t('route')}</p><h2 style="margin-top:6px">${t('choose')}</h2></div>
      <p>${t('choose_p')}</p>
    </div>
    <div class="ascent-bands"><div class="band">${t('band_jr')}</div><div class="band rep">${t('band_rep')}</div></div>
    <div class="steps">${steps}</div>
  </section>
  ${OLY.grades.olymp ? `<a class="tasks-banner" href="#tasks">${mascot(76, 'happy')}<span><b>${t('tk_banner_h')}</b><span>${t('tk_banner_p')}</span></span><span class="btn sun">${t('tk_open')}</span></a>` : ''}

  <section class="facts">
    <div class="fact">${ic('#F2554B', '<path d="M4 19.5V5a2 2 0 0 1 2-2h12v16H6a2 2 0 0 0-2 2.5zM8 7h6M8 11h6"/>')}<h3>${t('f1h')}</h3><p>${t('f1p')}</p></div>
    <div class="fact">${ic('#19B571', '<path d="M20 6L9 17l-5-5"/>')}<h3>${t('f2h')}</h3><p>${t('f2p')}</p></div>
    <div class="fact">${ic('#8A4DF0', '<circle cx="12" cy="12" r="9"/><path d="M12 8v4l3 2"/>')}<h3>${t('f3h')}</h3><p>${t('f3p')}</p></div>
  </section>

  <section class="author" aria-label="${t('author')}">
    <span class="ava" aria-hidden="true">ША</span>
    <span class="who"><span class="eyebrow">${t('author_role')}</span><b>${esc(AUTHOR.name)}</b><span>${t('author_note')}</span></span>
    ${instaLink('btn')}
  </section>`;
  $('#toGrades').addEventListener('click', () => $('#grades').scrollIntoView({ behavior: 'smooth' }));
}

const OLYMP_PAGE = {
  kk: () => `
    <p class="eyebrow">Формат талдауы</p>
    <h1 style="margin-top:8px">Информатикадан олимпиада қалай өтеді</h1>
    <p class="muted" style="font-size:1.12rem">Қазақстанда жалпы білім беретін пәндер бойынша республикалық олимпиада төрт кезеңнен тұрады. Информатика бойынша негізгі ағын — <b>9–11 сыныптар</b>. 5–6 және 7–8 сыныптарға өңірлерде дәл осындай кезеңдері бар кіші олимпиадалар өтеді.</p>
    <div class="timeline">
      <div class="c5"><span class="eyebrow">1-кезең</span><b>Мектептік</b><span>Әдетте қазан айы. Мектеп өткізеді.</span></div>
      <div class="c7"><span class="eyebrow">2-кезең</span><b>Аудандық / қалалық</b><span>Әдетте қараша. Тапсырмаларды «Дарын» орталығы дайындайды.</span></div>
      <div class="c9"><span class="eyebrow">3-кезең</span><b>Облыстық</b><span>Әдетте қаңтар. 2026 жылы 9–11 сыныптар үшін 6–8 қаңтарда өтті.</span></div>
      <div class="c11"><span class="eyebrow">4-кезең</span><b>Республикалық</b><span>Көктем. Үздіктер халықаралық олимпиадаларға құрамаға іріктеледі.</span></div>
    </div>
    <p class="muted" style="font-size:.92rem">Мерзімдер өткен жылдардың ережелерінен алынды. Биылғы нақты кестені Оқу-ағарту министрлігінің бұйрығынан және daryn.kz сайтынан қара.</p>
    <h2>Олимпиадалық есеп қалай құрылған</h2>
    <p>Барлық есеп дерлік бірдей құрылған. Оны бөлшектеп оқуды үйренсең, жұмыстың жартысы бітті.</p>
    <div class="tbl-wrap"><table class="t">
      <tr><th>Бөлігі</th><th>Онда не іздеу керек</th></tr>
      <tr><td>Шарты</td><td>«Әлия және кәмпиттер» туралы әңгімені математикаға аудар: не берілген, не табу керек.</td></tr>
      <tr><td>Кіріс деректері</td><td>Сандардың реті, неше жол, бос орын арқылы ма әлде әрқайсысы жаңа жолдан ба.</td></tr>
      <tr><td>Шектеулер</td><td>Шешімге басты кеңес: n ≤ 20 болса бәрін іріктеуге болады, n ≤ 10⁵ болса n·log n алгоритм керек.</td></tr>
      <tr><td>Шығыс деректері</td><td>Жауаптың нақты пішімі. «Жауап:» сияқты артық мәтін дұрыс шешімді WA-ға айналдырады.</td></tr>
      <tr><td>Мысалдар</td><td>Код жазбас бұрын шешіміңді оларда қолмен тексер.</td></tr>
    </table></div>
    <h2>Тексеру жүйесінің вердиктері</h2>
    <div class="tbl-wrap"><table class="t">
      <tr><th>Вердикт</th><th>Не болды</th><th>Не істеу керек</th></tr>
      <tr><td><span class="v v-OK">OK</span></td><td>Тест өтті</td><td>Әрі қарай жүре бер</td></tr>
      <tr><td><span class="v v-WA">WA</span></td><td>Қате жауап</td><td>Шеткі жағдайларды ізде: n = 1, нөлдер, бірдей сандар, ең үлкен мәндер</td></tr>
      <tr><td><span class="v v-TLE">TLE</span></td><td>Уақыт асып кетті</td><td>Алгоритм тым баяу немесе циклде қалып қойды. Күрделілікті шектеулермен салыстыр</td></tr>
      <tr><td><span class="v v-RE">RE</span></td><td>Орындау кезіндегі қате</td><td>Тізім шегінен шығу, нөлге бөлу, кірісті қате оқу</td></tr>
      <tr><td><span class="v v-CE">CE</span></td><td>Компиляция қатесі</td><td>Бағдарлама іске қосылмайды: қате жазылу, қос нүкте, шегіністер</td></tr>
    </table></div>
    <h2>Әр кезеңде қандай тақырыптар кездеседі</h2>
    <div class="tbl-wrap"><table class="t">
      <tr><th>Кезең</th><th>Жиі кездесетін тақырыптар</th><th>Сайттағы сыныптар</th></tr>
      <tr><td>Кіші олимпиадалар</td><td>Енгізу-шығару, шарттар, циклдер, қалдықтар, санның цифрлары, іріктеу, қарапайым жолдар</td><td><a href="#g5">5</a>, <a href="#g6">6</a>, <a href="#g7">7</a>, <a href="#g8">8</a></td></tr>
      <tr><td>Мектептік</td><td>Іске асыру, сұрыптау, сөздіктер, қарапайым математика, модельдеу</td><td><a href="#g7">7</a>, <a href="#g8">8</a>, <a href="#g9">9</a></td></tr>
      <tr><td>Аудандық / қалалық</td><td>Префикстік қосындылар, екі нұсқағыш, ашкөз алгоритмдер, екілік іздеу, стек</td><td><a href="#g8">8</a>, <a href="#g9">9</a></td></tr>
      <tr><td>Облыстық</td><td>Динамикалық бағдарламалау, BFS және DFS, Дейкстра, жауап бойынша екілік іздеу</td><td><a href="#g9">9</a>, <a href="#g10">10</a></td></tr>
      <tr><td>Республикалық</td><td>Кесінділер ағашы, DSU, маскалар бойынша ДБ, жолдық алгоритмдер, сандар теориясы</td><td><a href="#g11">11</a></td></tr>
    </table></div>
    <h2>Компьютер қанша амал жасап үлгереді</h2>
    <p>1 секундта C++ бағдарламасы шамамен 10⁸ қарапайым амал, ал Python бағдарламасы шамамен 10⁷ амал орындайды. n-ге қойылған шектеуге қарап, қандай алгоритм керек екенін бірден түсінуге болады.</p>
    <div class="tbl-wrap"><table class="t num">
      <tr><th>Шектеу</th><th>Қолайлы күрделілік</th><th>Мысалы</th></tr>
      <tr><td>n ≤ 10</td><td>O(n!)</td><td>Барлық алмастыруларды іріктеу</td></tr>
      <tr><td>n ≤ 20</td><td>O(2ⁿ · n)</td><td>Ішкі жиындарды іріктеу, маскалар бойынша ДБ</td></tr>
      <tr><td>n ≤ 500</td><td>O(n³)</td><td>Үш еселі цикл, Флойд</td></tr>
      <tr><td>n ≤ 5 000</td><td>O(n²)</td><td>Екі еселі цикл, қарапайым ДБ</td></tr>
      <tr><td>n ≤ 10⁵ … 10⁶</td><td>O(n log n)</td><td>Сұрыптау, екілік іздеу, ағаштар</td></tr>
      <tr><td>n ≤ 10⁸</td><td>O(n) немесе O(√n)</td><td>Бір өту, формула</td></tr>
    </table></div>
    <h2>Турдағы стратегия</h2>
    <ul>
      <li>Алдымен <b>барлық</b> есептерді оқып шық. Идеясы ең тез келген есептен баста.</li>
      <li>Есеп тесттер бойынша бағаланады. Кіші тесттерден өтетін «тікелей» шешімнің өзі ұпай әкеледі. Кейін оны жылдамдатуға болады.</li>
      <li>Жіберер алдында шеткі жағдайларды тексер: ең кіші n, барлық сандар бірдей, ең үлкен мәндер.</li>
      <li>Артық ештеңе шығарма: input() ішіне «Санды енгіз» деп жазба, жауапқа түсініктеме қоспа.</li>
      <li>Қарапайым жұмыс істейтін шешімді сақтап қой. Оңтайландыру бұзылса, ұпайларың қалады.</li>
      <li>Олимпиадада C++ немесе Python тілінде жазуға болады. Python-да жазсаң, жылдамдықты қадағала: кірісті <code>sys.stdin</code> арқылы оқы, артық кірістірілген циклдерден аулақ бол.</li>
    </ul>`,
  ru: () => `
    <p class="eyebrow">Разбор формата</p>
    <h1 style="margin-top:8px">Как устроена олимпиада по информатике</h1>
    <p class="muted" style="font-size:1.12rem">Республиканская олимпиада школьников по общеобразовательным предметам в Казахстане проходит в четыре этапа. Основной поток по информатике — <b>9–11 классы</b>. Для 5–6 и 7–8 классов в регионах проводятся юниорские олимпиады с теми же этапами.</p>
    <div class="timeline">
      <div class="c5"><span class="eyebrow">Этап 1</span><b>Школьный</b><span>Обычно октябрь. Проводит школа.</span></div>
      <div class="c7"><span class="eyebrow">Этап 2</span><b>Районный / городской</b><span>Обычно ноябрь. Задания готовит центр «Дарын».</span></div>
      <div class="c9"><span class="eyebrow">Этап 3</span><b>Областной</b><span>Обычно январь. В 2026 году — 6–8 января для 9–11 классов.</span></div>
      <div class="c11"><span class="eyebrow">Этап 4</span><b>Республиканский</b><span>Весна. Лучшие — в сборную на международные олимпиады.</span></div>
    </div>
    <p class="muted" style="font-size:.92rem">Сроки взяты из правил прошлых лет. Точный график на текущий год смотри в приказе Министерства просвещения и на сайте daryn.kz.</p>
    <h2>Как выглядит олимпиадная задача</h2>
    <p>Почти каждая задача устроена одинаково. Если научиться читать её по частям, половина работы сделана.</p>
    <div class="tbl-wrap"><table class="t">
      <tr><th>Часть</th><th>Что в ней искать</th></tr>
      <tr><td>Условие</td><td>Историю «про Алию и конфеты» нужно перевести в математику: что дано и что найти.</td></tr>
      <tr><td>Входные данные</td><td>Порядок чисел, сколько строк, через пробел или каждое с новой строки.</td></tr>
      <tr><td>Ограничения</td><td>Главная подсказка к решению: при n ≤ 20 можно перебрать всё, при n ≤ 10⁵ нужен алгоритм за n·log n.</td></tr>
      <tr><td>Выходные данные</td><td>Точный формат ответа. Лишний текст вроде «Ответ:» превращает верное решение в WA.</td></tr>
      <tr><td>Примеры</td><td>Проверь своё решение на них руками, прежде чем писать код.</td></tr>
    </table></div>
    <h2>Вердикты проверяющей системы</h2>
    <div class="tbl-wrap"><table class="t">
      <tr><th>Вердикт</th><th>Что случилось</th><th>Что делать</th></tr>
      <tr><td><span class="v v-OK">OK</span></td><td>Тест пройден</td><td>Можно идти дальше</td></tr>
      <tr><td><span class="v v-WA">WA</span></td><td>Неверный ответ</td><td>Ищи крайние случаи: n = 1, нули, одинаковые числа, максимум</td></tr>
      <tr><td><span class="v v-TLE">TLE</span></td><td>Превышено время</td><td>Алгоритм слишком медленный или зациклился. Сверь сложность с ограничениями</td></tr>
      <tr><td><span class="v v-RE">RE</span></td><td>Ошибка во время работы</td><td>Выход за границы списка, деление на ноль, неверное чтение ввода</td></tr>
      <tr><td><span class="v v-CE">CE</span></td><td>Ошибка компиляции</td><td>Программа не запускается: опечатка, двоеточие, отступы</td></tr>
    </table></div>
    <h2>Какие темы встречаются на каждом этапе</h2>
    <div class="tbl-wrap"><table class="t">
      <tr><th>Этап</th><th>Типичные темы</th><th>Классы на сайте</th></tr>
      <tr><td>Юниорские</td><td>Ввод-вывод, условия, циклы, остатки, цифры числа, перебор, простые строки</td><td><a href="#g5">5</a>, <a href="#g6">6</a>, <a href="#g7">7</a>, <a href="#g8">8</a></td></tr>
      <tr><td>Школьный</td><td>Реализация, сортировка, словари, простая математика, моделирование</td><td><a href="#g7">7</a>, <a href="#g8">8</a>, <a href="#g9">9</a></td></tr>
      <tr><td>Районный / городской</td><td>Префиксные суммы, два указателя, жадность, бинарный поиск, стек</td><td><a href="#g8">8</a>, <a href="#g9">9</a></td></tr>
      <tr><td>Областной</td><td>Динамическое программирование, BFS и DFS, Дейкстра, бинпоиск по ответу</td><td><a href="#g9">9</a>, <a href="#g10">10</a></td></tr>
      <tr><td>Республиканский</td><td>Деревья отрезков, DSU, ДП по маскам, строковые алгоритмы, теория чисел</td><td><a href="#g11">11</a></td></tr>
    </table></div>
    <h2>Сколько операций успевает компьютер</h2>
    <p>За 1 секунду программа на C++ делает примерно 10⁸ простых операций, на Python — около 10⁷. По ограничению на n можно сразу понять, какой алгоритм нужен.</p>
    <div class="tbl-wrap"><table class="t num">
      <tr><th>Ограничение</th><th>Подходящая сложность</th><th>Например</th></tr>
      <tr><td>n ≤ 10</td><td>O(n!)</td><td>Перебор всех перестановок</td></tr>
      <tr><td>n ≤ 20</td><td>O(2ⁿ · n)</td><td>Перебор подмножеств, ДП по маскам</td></tr>
      <tr><td>n ≤ 500</td><td>O(n³)</td><td>Тройной цикл, Флойд</td></tr>
      <tr><td>n ≤ 5 000</td><td>O(n²)</td><td>Двойной цикл, простое ДП</td></tr>
      <tr><td>n ≤ 10⁵ … 10⁶</td><td>O(n log n)</td><td>Сортировка, бинпоиск, деревья</td></tr>
      <tr><td>n ≤ 10⁸</td><td>O(n) или O(√n)</td><td>Один проход, формула</td></tr>
    </table></div>
    <h2>Стратегия на туре</h2>
    <ul>
      <li>Сначала прочитай <b>все</b> задачи. Начни с той, где идея появилась быстрее всего.</li>
      <li>Задачу оценивают по тестам. Решение «в лоб», которое проходит маленькие тесты, уже приносит баллы. Потом его можно ускорить.</li>
      <li>Перед отправкой проверь крайние случаи: минимальное n, все числа одинаковые, максимальные значения.</li>
      <li>Не выводи лишнего: никаких «Введите число» в input() и пояснений в ответе.</li>
      <li>Сохраняй простое рабочее решение. Если оптимизация сломается, у тебя останутся баллы.</li>
      <li>На олимпиаде можно писать на C++ или Python. Если пишешь на Python, следи за скоростью: читай ввод через <code>sys.stdin</code>, избегай лишних вложенных циклов.</li>
    </ul>`,
};
function renderOlympiad() {
  document.title = t('nav_olymp') + ' · АлгоТау';
  app.innerHTML = `<div class="crumbs"><a href="#">${t('home')}</a><span>${t('nav_olymp')}</span></div><article class="prose">${OLYMP_PAGE[LANG]()}</article>`;
}

function renderGrade(e) {
  const { g, G } = e;
  document.title = `${g} ${t('grade_word')} · АлгоТау`;
  app.className = 'wrap c' + g;
  if (!G) {
    app.innerHTML = `<div class="crumbs"><a href="#">${t('home')}</a><span>${g} ${t('grade_word')}</span></div><div class="empty">${mascot(90, 'normal')}<p>${t('no_grade', { g })}</p></div>`;
    return;
  }
  const rows = G.topics.map((tp, i) => {
    const pr = topicProgress(tp);
    return `<a class="topic-row ${pr >= 0.999 ? 'done' : ''}" href="#${tp.id}">
      <span class="n">${pr >= 0.999 ? '✓' : i + 1}</span>
      <span><h3>${esc(tp.title)}</h3><p>${esc(tp.summary)}</p></span>
      <span class="side">
        <span class="medals">${tp.problems.map((p) => medal(p)).join('')}</span>
        <span class="muted num" style="font-size:.82rem">${tp.minutes} мин · ${pct(pr)}%</span>
      </span>
    </a>`;
  }).join('');
  const prev = OLY.grades[g - 1] ? `<a class="btn" href="#g${g - 1}">← ${g - 1} ${t('grade_word')}</a>` : '<span></span>';
  const next = OLY.grades[g + 1] ? `<a class="btn primary" href="#g${g + 1}">${g + 1} ${t('grade_word')} →</a>` : '<span></span>';
  app.innerHTML = `
    <div class="crumbs"><a href="#">${t('home')}</a><span>${g} ${t('grade_word')}</span></div>
    <div class="grade-hero">
      <div class="grade-num">${g}</div>
      <div>
        <p class="eyebrow">${esc(G.track)}</p>
        <h1>${g} ${t('grade_word')}</h1>
        <p>${G.intro}</p>
        <p class="goal"><b>${t('goal')}</b> ${esc(G.stage)}</p>
        <div style="display:flex;gap:12px;align-items:center;margin-top:14px;max-width:440px">
          <span class="bar" style="flex:1"><i style="width:${pct(gradeProgress(G))}%"></i></span>
          <span class="num" style="font-size:.88rem;font-weight:800">${t('passed', { p: pct(gradeProgress(G)) })}</span>
        </div>
      </div>
      ${mascot(130, 'happy', 'bob')}
    </div>
    <div class="topics">${rows}</div>
    <div class="pager">${prev}${next}</div>`;
}

function codeBlock(b, i) {
  const inp = b.input ? esc(t('input_short') + b.input.trim().split('\n').join(' ⏎ ')).slice(0, 70) : t('example');
  return `<div class="codeblock" data-i="${i}">
    <pre>${highlight(b.code)}</pre>
    ${b.runnable ? `<div class="bar2"><span class="eyebrow">${inp}</span>
      <span style="display:flex;gap:6px;flex-wrap:wrap"><button class="btn small ghost" data-act="tosandbox" type="button">${t('to_sandbox')}</button><button class="btn small go" data-act="run" type="button">${t('run')}</button></span></div>` : ''}
  </div>`;
}
function lessonBlock(b, i) {
  switch (b.type) {
    case 'h': return `<h2 class="lesson-h">${b.text}</h2>`;
    case 'p': return `<p>${b.text}</p>`;
    case 'tip': return `<div class="callout tip"><span class="lbl">${t('tip')}</span>${b.text}</div>`;
    case 'warn': return `<div class="callout warn"><span class="lbl">${t('warn')}</span>${b.text}</div>`;
    case 'list': return `<ul>${b.items.map((x) => `<li>${x}</li>`).join('')}</ul>`;
    case 'table': return `<div class="tbl-wrap"><table class="t"><tr>${b.head.map((h) => `<th>${h}</th>`).join('')}</tr>${b.rows.map((r) => `<tr>${r.map((c) => `<td>${c}</td>`).join('')}</tr>`).join('')}</table></div>`;
    case 'code': return codeBlock(b, i);
    default: return '';
  }
}

let sandboxPreset = null;

/* A lesson is read card by card: short theory cards, then one quiz question per card, then a finish card. */
function lessonSteps(tp) {
  const sections = [];
  tp.lesson.forEach((b, i) => {
    if (b.type === 'h' || !sections.length) sections.push({ title: b.type === 'h' ? b.text : t('intro'), hasH: b.type === 'h', items: [] });
    sections[sections.length - 1].items.push({ b, i });
  });
  const size = (b) => (b.text || b.code || '').length + (b.items ? b.items.join('').length : 0) + (b.rows ? JSON.stringify(b.rows).length : 0);
  const steps = [];
  sections.forEach((sec, si) => {
    let cur = [], len = 0, part = 0;
    const flush = () => { if (cur.length) steps.push({ kind: 'read', title: sec.title, hasH: sec.hasH, part: part++, items: cur }); cur = []; len = 0; };
    for (const it of sec.items) {
      // A paragraph, list or table may start a new card; code and callouts stay with the text they explain.
      if (len >= 380 && ['p', 'list', 'table'].includes(it.b.type)) flush();
      cur.push(it); len += size(it.b);
    }
    flush();
  });
  tp.quiz.forEach((q, qi) => steps.push({ kind: 'quiz', qi, title: t('check_self') }));
  steps.push({ kind: 'finish', title: t('problems') });
  return steps;
}

function renderTopic(e) {
  const { G, t: tp, ti } = e;
  document.title = `${tp.title} · ${G.grade} ${t('grade_word')} · АлгоТау`;
  app.className = 'wrap c' + G.grade;
  const steps = lessonSteps(tp);
  S.step = S.step || {};
  let cur = Math.min(S.step[tp.id] || 0, steps.length - 1);
  const prevT = G.topics[ti - 1], nextT = G.topics[ti + 1];
  const toc = [];
  steps.forEach((s, i) => { if (s.kind === 'read' ? s.part === 0 : (s.kind === 'quiz' ? s.qi === 0 : true)) toc.push({ i, title: s.title }); });

  app.innerHTML = `
    <div class="crumbs"><a href="#">${t('home')}</a><span><a href="#g${G.grade}">${G.grade} ${t('grade_word')}</a></span><span>${esc(tp.title)}</span></div>
    <div class="topic-layout">
      <article class="article reader">
        <p class="eyebrow">${t('topic_n', { n: ti + 1, m: tp.minutes })}</p>
        <h1 class="reader-title">${esc(tp.title)}</h1>
        <div class="rprog" aria-hidden="true">${steps.map((s, i) => `<i class="k-${s.kind}" data-go="${i}"></i>`).join('')}</div>
        <div class="rcard" id="rcard" tabindex="-1"></div>
        <div class="rnav">
          <button class="btn" type="button" id="rPrev">${t('prev')}</button>
          <span class="rcount num" id="rCount"></span>
          <button class="btn primary" type="button" id="rNext">${t('next')}</button>
        </div>
        <p class="muted rkeys">${t('keys_reader')}</p>
      </article>
      <aside class="side-nav reader-side">
        <div class="side-card"><p class="eyebrow">${t('topic_progress')}</p><div class="big-pct" id="tp"></div><span class="bar"><i id="tpbar"></i></span></div>
        <div class="side-card toc"><p class="eyebrow" style="margin-bottom:6px">${t('in_topic')}</p>
          ${toc.map((x) => `<a href="#${tp.id}" data-go="${x.i}">${esc(x.title.replace(/<[^>]+>/g, ''))}</a>`).join('')}</div>
        <div class="side-card"><div style="display:grid;gap:8px">
          ${prevT ? `<a href="#${prevT.id}">← ${esc(prevT.title)}</a>` : `<a href="#g${G.grade}">${t('all_topics_back')}</a>`}
          ${nextT ? `<a href="#${nextT.id}">${esc(nextT.title)} →</a>` : `<a href="#g${G.grade}">${t('all_topics_fwd')}</a>`}
        </div></div>
      </aside>
    </div>`;

  const card = $('#rcard');
  const refresh = () => { const v = pct(topicProgress(tp)); $('#tp').textContent = v + '%'; $('#tpbar').style.width = v + '%'; };

  function quizCard(qi) {
    const q = tp.quiz[qi];
    return `<p class="eyebrow">${t('quiz_n', { a: qi + 1, b: tp.quiz.length })}</p>
      <div class="q" data-q="${qi}"><p class="qt">${q.q}</p><div class="opts">${q.options.map((o, oi) => `<button class="opt" type="button" data-o="${oi}">${o}</button>`).join('')}</div><div class="why" hidden></div></div>`;
  }
  function showQ(qi) {
    const q = tp.quiz[qi], box = $('.q', card), chosen = S.quiz[tp.id] && S.quiz[tp.id][qi];
    if (!box || chosen == null) return;
    const ok = chosen === q.answer;
    $$('.opt', box).forEach((b, oi) => { b.classList.toggle('right', oi === q.answer && ok); b.classList.toggle('wrong', oi === chosen && !ok); });
    const why = $('.why', box); why.hidden = false;
    why.innerHTML = `${mascot(44, ok ? 'happy' : 'oops')}<span>${ok ? `<b style="color:#0B7A4C">${t('right')}</b> ${q.explain}` : `<b style="color:#B42A23">${t('not_yet')}</b>`}</span>`;
  }
  function finishCard() {
    const right = tp.quiz.filter((q, qi) => S.quiz[tp.id] && S.quiz[tp.id][qi] === q.answer).length;
    return `<div class="finish">${mascot(110, 'happy', 'bob')}
        <div><h2>${t('finish_h')}</h2><p>${t('finish_p')}</p><p class="score-line">${t('quiz_score', { a: right, b: tp.quiz.length })}</p></div></div>
      <div class="plist">${tp.problems.map((p) => `
        <a class="prow" href="#${p.id}">${medal(p, true)}
          <span><b>${esc(p.title)}</b><br><small>${lvl(p.level)} · ${LEVEL_PTS[p.level]} ${t('pts')}</small></span>
          ${scorePill(p.id)}</a>`).join('')}</div>
      <div class="finish-actions">
        <a class="btn go" href="#${(tp.problems.find((p) => S.solved[p.id] !== 100) || tp.problems[0]).id}">${t('to_problem')}</a>
        ${nextT ? `<a class="btn" href="#${nextT.id}">${t('next_topic')}: ${esc(nextT.title)} →</a>` : `<a class="btn" href="#g${G.grade}">${t('all_topics_fwd')}</a>`}
        <button class="btn ghost" type="button" data-go="0">${t('reread')}</button>
      </div>`;
  }

  function show(i, dir) {
    cur = Math.max(0, Math.min(steps.length - 1, i));
    S.step[tp.id] = cur;
    const s = steps[cur];
    if (s.kind === 'read') {
      const cont = s.part > 0 || !s.hasH;
      card.innerHTML = `<div class="lesson">${cont ? `<p class="eyebrow">${s.title}${s.part > 0 ? ' · ' + t('cont') : ''}</p>` : ''}${s.items.map(({ b, i: bi }) => lessonBlock(b, bi)).join('')}</div>`;
    } else if (s.kind === 'quiz') {
      card.innerHTML = quizCard(s.qi); showQ(s.qi);
    } else {
      const first = !S.read[tp.id];
      S.read[tp.id] = true;
      card.innerHTML = finishCard();
      if (first) confetti();
    }
    card.classList.remove('in-l', 'in-r'); void card.offsetWidth;
    if (dir) card.classList.add(dir > 0 ? 'in-r' : 'in-l');
    $$('.rprog i').forEach((el, k) => { el.classList.toggle('done', k < cur); el.classList.toggle('on', k === cur); });
    $$('.toc a').forEach((a) => { const k = +a.dataset.go; const nextK = toc.find((x) => x.i > k); a.classList.toggle('on', cur >= k && (!nextK || cur < nextK.i)); });
    $('#rCount').textContent = `${cur + 1} / ${steps.length}`;
    $('#rPrev').disabled = cur === 0;
    $('#rPrev').style.visibility = cur === 0 ? 'hidden' : '';
    const last = cur === steps.length - 1;
    $('#rNext').style.display = last ? 'none' : '';
    $('#rNext').textContent = steps[cur + 1] && steps[cur + 1].kind === 'finish' ? t('finish_btn') : (steps[cur + 1] && steps[cur + 1].kind === 'quiz' && s.kind === 'read' ? t('to_quiz') : t('next'));
    save(); refresh();
    if (dir) {
      const top = $('.rprog').getBoundingClientRect().top;
      if (top < 0 || top > innerHeight * 0.5) $('.rprog').scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  $('#rPrev').addEventListener('click', () => show(cur - 1, -1));
  $('#rNext').addEventListener('click', () => show(cur + 1, 1));
  $('.topic-layout').addEventListener('click', (ev) => {
    const g = ev.target.closest('[data-go]');
    if (g) { ev.preventDefault(); const k = +g.dataset.go; show(k, k >= cur ? 1 : -1); }
  });
  const onKey = (ev) => {
    if (!document.body.contains(card)) { document.removeEventListener('keydown', onKey); return; }
    if (ev.target.closest('input, textarea, select') || ev.altKey || ev.ctrlKey || ev.metaKey) return;
    if (ev.key === 'ArrowRight') { ev.preventDefault(); if (cur < steps.length - 1) show(cur + 1, 1); }
    if (ev.key === 'ArrowLeft') { ev.preventDefault(); if (cur > 0) show(cur - 1, -1); }
  };
  document.addEventListener('keydown', onKey);
  let x0 = null, y0 = null;
  card.addEventListener('touchstart', (ev) => { if (ev.target.closest('pre, .tbl-wrap')) { x0 = null; return; } x0 = ev.touches[0].clientX; y0 = ev.touches[0].clientY; }, { passive: true });
  card.addEventListener('touchend', (ev) => {
    if (x0 == null) return;
    const dx = ev.changedTouches[0].clientX - x0, dy = ev.changedTouches[0].clientY - y0; x0 = null;
    if (Math.abs(dx) > 70 && Math.abs(dx) > 2 * Math.abs(dy)) { if (dx < 0 && cur < steps.length - 1) show(cur + 1, 1); else if (dx > 0 && cur > 0) show(cur - 1, -1); }
  });

  card.addEventListener('click', async (ev) => {
    const opt = ev.target.closest('.opt');
    if (opt) {
      const qi = +opt.closest('.q').dataset.q;
      S.quiz[tp.id] = S.quiz[tp.id] || {};
      S.quiz[tp.id][qi] = +opt.dataset.o;
      save(); showQ(qi); refresh();
      return;
    }
    const btn = ev.target.closest('.codeblock button'); if (!btn) return;
    const cb = btn.closest('.codeblock'), b = tp.lesson[+cb.dataset.i];
    if (btn.dataset.act === 'tosandbox') { sandboxPreset = { code: b.code, input: b.input || '' }; location.hash = 'sandbox'; return; }
    btn.disabled = true; btn.textContent = t('running');
    const r = await Runner.run(b.code, b.input || '');
    btn.disabled = false; btn.textContent = t('run');
    let out = $('.out', cb); if (!out) { out = document.createElement('pre'); out.className = 'out'; cb.appendChild(out); }
    out.classList.toggle('err', !r.ok);
    out.textContent = r.ok ? (r.out || t('no_output')) : (r.out ? r.out + '\n' : '') + r.err;
  });

  show(cur, 0);
  Runner.boot();
}

function ioPanel(id) {
  return `<div class="io">
      <div><div class="lbl"><span>${t('io_in')}</span></div><textarea id="stdin" spellcheck="false" aria-label="${t('io_in')}"></textarea></div>
      <div><div class="lbl"><span>${t('io_out')}</span><span id="runTime" class="num"></span></div><pre id="stdout" aria-live="polite"></pre></div>
    </div>
    <div class="err-help" id="errHelp" hidden></div>`;
}
function showRunResult(r, ed) {
  const stdout = $('#stdout'), help = $('#errHelp');
  stdout.classList.toggle('err', !r.ok);
  stdout.textContent = r.ok ? (r.out || t('no_output')) : ((r.out ? r.out + '\n' : '') + r.err);
  $('#runTime').textContent = r.ms ? (r.ms / 1000).toFixed(2) + ' s' : '';
  const h = r.ok ? '' : errHelp(r);
  help.hidden = !h;
  help.innerHTML = h ? `${mascot(44, 'oops')}<span>${esc(h)}</span>` : '';
  ed.markError(r.ok ? 0 : r.line);
}

function sourceBox(src) {
  return `<div class="source"><span class="eyebrow">${t('tk_src')}</span>
    <span>${esc(src.olymp)} · ${esc(src.stage)} · ${esc(src.year)} · ${esc(src.grades)}${src.name ? ' · ' + esc(src.name) : ''}</span>
    ${src.url ? `<a href="${esc(src.url)}" target="_blank" rel="noopener">${t('tk_orig')} ↗</a>` : ''}
    <small class="muted">${t('tk_retold')}</small></div>`;
}

function renderTasks(stageId) {
  const O = OLY.grades.olymp;
  document.title = t('nav_tasks') + ' · АлгоТау';
  app.className = 'wrap cO';
  if (!O) { app.innerHTML = `<div class="empty">${mascot(90)}<p>${t('soon')}</p></div>`; return; }
  const all = O.topics.flatMap((tp) => tp.problems);
  const solved = all.filter((p) => S.solved[p.id] === 100).length;
  let filter = stageId || 'all';
  app.innerHTML = `
    <div class="crumbs"><a href="#">${t('home')}</a><span>${t('nav_tasks')}</span></div>
    <div class="grade-hero tasks-hero">
      <div class="grade-num"><svg viewBox="0 0 54 54" width="72" height="72" aria-hidden="true">${GRADE_ICON[11]}</svg></div>
      <div>
        <p class="eyebrow">${t('tk_eyebrow')}</p>
        <h1>${t('tk_title')}</h1>
        <p>${t('tk_p')}</p>
        ${O.intro ? `<p class="goal">${O.intro}</p>` : ''}
        <div style="display:flex;gap:12px;align-items:center;margin-top:14px;flex-wrap:wrap">
          <span class="chip pts">★ ${t('tk_solved', { a: solved, b: all.length })}</span>
          ${O.archive ? `<a class="btn small" href="${esc(O.archive)}" target="_blank" rel="noopener">${t('tk_archive')} ↗</a>` : ''}
        </div>
      </div>
      ${mascot(130, 'happy', 'bob')}
    </div>
    <div class="chips" role="group">
      <button type="button" class="fchip" data-f="all">${t('tk_all')} · ${all.length}</button>
      ${O.topics.map((tp) => `<button type="button" class="fchip" data-f="${tp.id}">${esc(tp.title)} · ${tp.problems.length}</button>`).join('')}
    </div>
    <div id="tlist"></div>`;
  const draw = () => {
    $$('.fchip').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.f === filter)));
    $('#tlist').innerHTML = O.topics.filter((tp) => filter === 'all' || tp.id === filter).map((tp) => `
      <section class="stage-block">
        <h2 class="sec-h">${esc(tp.title)}</h2>
        <p class="muted">${tp.summary}</p>
        <div class="plist">${tp.problems.map((p) => `
          <a class="prow" href="#${p.id}">${medal(p, true)}
            <span><b>${esc(p.title)}</b><br><small>${esc(p.source.year)} · ${esc(p.source.grades)} · ${lvl(p.level)}</small></span>
            ${scorePill(p.id)}</a>`).join('')}</div>
      </section>`).join('');
  };
  $('.chips').addEventListener('click', (ev) => {
    const b = ev.target.closest('.fchip'); if (!b) return;
    filter = b.dataset.f; draw();
  });
  draw();
}

function renderProblem(e) {
  const { G, t: tp, p, pi } = e;
  document.title = `${p.title} · АлгоТау`;
  const O = e.olymp;
  app.className = 'wrap ' + (O ? 'cO' : 'c' + G.grade);
  S.last = p.id; save();
  const attempted = S.solved[p.id] != null;
  const nextP = tp.problems[pi + 1];
  app.innerHTML = `
    <div class="crumbs"><a href="#">${t('home')}</a>${O ? `<span><a href="#tasks">${t('nav_tasks')}</a></span>` : `<span><a href="#g${G.grade}">${G.grade} ${t('grade_word')}</a></span>`}<span><a href="#${tp.id}">${esc(tp.title)}</a></span><span>${esc(p.title)}</span></div>
    <div class="workspace">
      <section class="statement">
        <div class="p-title">${medal(p, true)}<div><p class="eyebrow">${lvl(p.level)} · ${LEVEL_PTS[p.level]} ${t('pts')}</p><h1 style="font-size:1.7rem;margin-top:4px">${esc(p.title)}</h1></div></div>
        <div class="limits num"><span>${t('lim_time')}</span><span>${t('lim_io')}</span><span>${t('lim_tests', { n: p.tests.length })}</span></div>
        ${p.source ? sourceBox(p.source) : ''}
        <div>${p.statement}</div>
        <h4>${t('in_data')}</h4><div>${p.input}</div>
        <h4>${t('out_data')}</h4><div>${p.output}</div>
        <h4>${t('examples')}</h4>
        <div class="examples">${p.examples.map((x, i) => `
          <div class="ex"><div><div class="lbl">${t('ex_in')} <button class="linkbtn" type="button" data-ex="${i}">${t('paste')}</button></div><pre>${esc(x.in)}</pre></div><div><div class="lbl">${t('ex_out')}</div><pre>${esc(x.out)}</pre></div></div>`).join('')}</div>
        <details class="reveal"><summary>${t('hint')}</summary><div>${p.hint}</div></details>
        <div id="solutionBox"></div>
        <div style="padding-top:6px">${nextP ? `<a class="btn primary" href="#${nextP.id}">${t('next_task', { t: esc(nextP.title) })}</a>` : `${O ? `<a class="btn" href="#tasks">${t('tk_back')}</a>` : `<a class="btn" href="#${tp.id}">${t('back_topic', { t: esc(tp.title) })}</a>`}`}</div>
      </section>
      <section class="ide">
        <div class="ide-card">
          <div class="ide-bar">
            <span class="langtag">Python 3</span>
            <button class="btn small ghost" type="button" id="resetBtn">${t('reset')}</button>
            <span class="spacer"></span>
            <button class="btn small" type="button" id="runBtn" title="Ctrl/⌘ + Enter">${t('run')}</button>
            <button class="btn small go" type="button" id="submitBtn">${t('submit')}</button>
          </div>
          <div id="editor"></div>
          ${ioPanel()}
        </div>
        <div class="ide-card" id="verdictCard" hidden><div class="verdict" id="verdict"></div></div>
        <p class="muted" style="font-size:.86rem">${t('keys')}</p>
      </section>
    </div>`;

  const ed = createEditor($('#editor'), {
    value: S.code[p.id] != null ? S.code[p.id] : p.starter,
    onChange: (v) => { S.code[p.id] = v; save(); },
    onRun: () => runOnce(),
  });
  const stdin = $('#stdin');
  stdin.value = p.examples[0] ? p.examples[0].in : '';
  $$('[data-ex]').forEach((b) => b.addEventListener('click', () => { stdin.value = p.examples[+b.dataset.ex].in; stdin.focus(); }));
  $('#resetBtn').addEventListener('click', (ev) => {
    const b = ev.currentTarget;
    if (b.dataset.confirm) { ed.set(p.starter); delete b.dataset.confirm; b.textContent = t('reset'); return; }
    b.dataset.confirm = '1'; b.textContent = t('reset_sure');
    setTimeout(() => { if (b.isConnected) { delete b.dataset.confirm; b.textContent = t('reset'); } }, 3000);
  });
  async function runOnce() {
    const btn = $('#runBtn'); btn.disabled = true; btn.textContent = t('running');
    const stdout = $('#stdout'); stdout.classList.remove('err'); stdout.textContent = Runner.readyP ? '' : t('py_first');
    const r = await Runner.run(ed.get(), stdin.value);
    btn.disabled = false; btn.textContent = t('run');
    showRunResult(r, ed);
  }
  $('#runBtn').addEventListener('click', runOnce);

  function renderSolution(unlocked) {
    const box = $('#solutionBox');
    if (!unlocked) {
      box.innerHTML = `<div class="lock"><span>${t('lock')}</span><button class="btn small ghost" type="button" id="peek">${t('open_now')}</button></div>`;
      $('#peek').addEventListener('click', (ev) => {
        const b = ev.currentTarget;
        if (!b.dataset.c) { b.dataset.c = 1; b.textContent = t('open_sure'); return; }
        renderSolution(true);
      });
      return;
    }
    box.innerHTML = `<details class="reveal"><summary>${t('solution')}</summary><div><div>${p.explain}</div>
      <div class="codeblock" style="margin-top:12px"><pre>${highlight(p.solution)}</pre><div class="bar2"><span class="eyebrow">${t('ref_solution')}</span><button class="btn small ghost" type="button" id="copySol">${t('copy')}</button></div></div></div></details>`;
    $('#copySol').addEventListener('click', async (ev) => {
      const b = ev.currentTarget;
      try { await navigator.clipboard.writeText(p.solution); b.textContent = t('copied'); }
      catch (err) { const sel = getSelection(), rg = document.createRange(); rg.selectNodeContents($('#solutionBox pre')); sel.removeAllRanges(); sel.addRange(rg); b.textContent = t('selected'); }
    });
  }
  renderSolution(attempted);

  $('#submitBtn').addEventListener('click', async () => {
    const btn = $('#submitBtn'); btn.disabled = true; $('#runBtn').disabled = true;
    const code = ed.get();
    const card = $('#verdictCard'), vbox = $('#verdict'); card.hidden = false;
    const n = p.tests.length;
    const res = new Array(n).fill(null);
    const draw = (score, done) => {
      const cur = res.findIndex((x) => !x);
      vbox.innerHTML = `
        <div class="summary"><span class="eyebrow">${done ? t('result') : t('checking')}</span>${done ? `<span><b>${score}</b> <span class="muted">/ 100</span></span>` : ''}</div>
        <div class="tests">${res.map((r, i) => `<button type="button" class="v ${r ? 'v-' + r.v : (i === cur && !done ? 'v-run' : 'v-wait')}" data-t="${i}" title="${t('test')} ${i + 1}">${i + 1}${r ? ' ' + r.v : ''}</button>`).join('')}</div>
        <div id="tdetail"></div>`;
    };
    draw(0, false);
    card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    for (let i = 0; i < n; i++) {
      const tc = p.tests[i];
      const r = await Runner.run(code, tc.in);
      const v = r.kind === 'OK' ? (tokens(r.out) === tokens(tc.out) ? 'OK' : 'WA') : r.kind === 'SYS' ? 'RE' : r.kind;
      res[i] = { v, r, tc };
      if (v === 'CE') { for (let j = i + 1; j < n; j++) res[j] = { v: 'CE', r, tc: p.tests[j] }; break; }
      if (v === 'TLE' && i > 0 && res[i - 1].v === 'TLE') {
        for (let j = i + 1; j < n; j++) res[j] = { v: 'TLE', r: { ...r, err: t('skip_msg') }, tc: p.tests[j] };
        break;
      }
      draw(0, false);
    }
    const ok = res.filter((x) => x && x.v === 'OK').length;
    const score = Math.round((100 * ok) / n);
    const prevBest = S.solved[p.id];
    if (prevBest == null || score > prevBest) S.solved[p.id] = score;
    save();
    draw(score, true);
    if (score === 100) {
      vbox.insertAdjacentHTML('afterbegin', `<div class="win">${mascot(64, 'happy')}<span><big>${t('win')}</big>${t('win_pts', { n: LEVEL_PTS[p.level] })} · ${nextP ? `<a href="#${nextP.id}">${t('further')}</a>` : `<a href="#${tp.id}">${t('back_to_topic')}</a>`}</span></div>`);
      confetti();
    }
    const showDetail = (i) => {
      const x = res[i]; if (!x) return;
      const isExample = p.examples.some((ex) => ex.in === x.tc.in);
      $('#tdetail').innerHTML = `<p style="margin-bottom:8px"><b>${t('test')} ${i + 1}:</b> ${t('v_' + x.v)}${isExample ? t('is_example') : ''}</p>
        <div class="detail">
          <div class="row"><span>${t('r_in')}</span><pre>${esc(x.tc.in.length > 600 ? x.tc.in.slice(0, 600) + '\n…' : x.tc.in)}</pre></div>
          ${x.v === 'WA' || x.v === 'OK' ? `<div class="row"><span>${t('r_exp')}</span><pre>${esc(x.tc.out.length > 400 ? x.tc.out.slice(0, 400) + '…' : x.tc.out)}</pre></div><div class="row"><span>${t('r_got')}</span><pre>${esc((x.r.out || t('empty_out')).slice(0, 400))}</pre></div>` : ''}
          ${x.r.err ? `<div class="row"><span>${t('r_msg')}</span><pre style="color:#B42A23">${esc(x.r.err)}</pre></div>` : ''}
          ${!x.r.ok && errHelp(x.r) ? `<div class="row"><span>${t('r_help')}</span><pre style="font-family:var(--f-body);font-weight:700">${esc(errHelp(x.r))}</pre></div>` : ''}
        </div>`;
      if (x.r.line) ed.markError(x.r.line);
    };
    vbox.addEventListener('click', (ev) => { const b = ev.target.closest('[data-t]'); if (b) showDetail(+b.dataset.t); });
    const firstBad = res.findIndex((x) => x && x.v !== 'OK');
    if (firstBad >= 0) showDetail(firstBad);
    btn.disabled = false; $('#runBtn').disabled = false;
    if (!$('#solutionBox details')) renderSolution(true);
  });
  Runner.boot();
}

function renderSandbox() {
  document.title = t('sb_title') + ' · АлгоТау';
  const preset = sandboxPreset; sandboxPreset = null;
  app.innerHTML = `
    <div class="crumbs"><a href="#">${t('home')}</a><span>${t('sb_title')}</span></div>
    <div class="section-head"><div class="guide">${mascot(80, 'happy')}<div><p class="eyebrow">${t('sb_eyebrow')}</p><h1 style="font-size:clamp(1.7rem,3.6vw,2.4rem);margin-top:6px">${t('sb_title')}</h1></div></div><p>${t('sb_p')}</p></div>
    <div class="ide-card">
      <div class="ide-bar"><span class="langtag">Python 3</span><span class="spacer"></span><button class="btn small go" type="button" id="runBtn" title="Ctrl/⌘ + Enter">${t('run')}</button></div>
      <div id="editor"></div>
      ${ioPanel()}
    </div>`;
  const ed = createEditor($('#editor'), {
    value: preset ? preset.code : (S.code.__sandbox != null ? S.code.__sandbox : t('sb_default')),
    height: 380,
    onChange: (v) => { S.code.__sandbox = v; save(); },
    onRun: () => go(),
  });
  if (preset) { S.code.__sandbox = preset.code; save(); }
  const stdin = $('#stdin');
  stdin.value = preset ? preset.input : (S.code.__sandboxIn != null ? S.code.__sandboxIn : '5\n3 9 1 7 4\n');
  stdin.addEventListener('input', () => { S.code.__sandboxIn = stdin.value; save(); });
  async function go() {
    const btn = $('#runBtn'); btn.disabled = true; btn.textContent = t('running');
    const stdout = $('#stdout'); stdout.classList.remove('err'); stdout.textContent = Runner.readyP ? '' : t('py_first');
    const r = await Runner.run(ed.get(), stdin.value, 10000);
    btn.disabled = false; btn.textContent = t('run');
    showRunResult(r, ed);
  }
  $('#runBtn').addEventListener('click', go);
  Runner.boot();
}

/* ---------------- boot: load lessons in the chosen language ---------------- */
function loadScript(src) {
  return new Promise((res) => {
    const s = document.createElement('script');
    s.src = src; s.onload = () => res(true); s.onerror = () => { s.remove(); res(false); };
    document.head.appendChild(s);
  });
}
async function start() {
  app.innerHTML = `<div class="empty" style="margin-top:40px">${mascot(90, 'happy', 'bob')}<p>${t('loading')}</p></div>`;
  await Promise.all(ALL_GRADES.map(async (g) => {
    if (!(await loadScript(`content/${LANG}/grade-${g}.js`)) && LANG !== 'ru') await loadScript(`content/ru/grade-${g}.js`);
  }));
  if (!(await loadScript(`content/${LANG}/olymp.js`)) && LANG !== 'ru') await loadScript('content/ru/olymp.js');
  buildIndex();
  route();
}
window.AlgoTau = { Runner, IDX }; // for teachers/debugging from the console
start();
})();
