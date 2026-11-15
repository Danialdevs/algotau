# АлгоТау — подготовка к олимпиадам по информатике (5–11 класс)

Статический сайт без сборки: уроки, тесты и олимпиадные задачи с автоматической проверкой.
Интерфейс и уроки на казахском (по умолчанию) и русском — переключатель ҚАЗ/РУС в шапке.
Код учеников выполняется прямо в браузере (Python 3.12 через Pyodide в Web Worker), сервер не нужен.

Автор: **Ахауова Шарбану Ермухамбетовна** · [Instagram @sharbanuakhauova](https://www.instagram.com/sharbanuakhauova/)

Сайт: https://danialdevs.github.io/algotau/

## Запуск

```bash
python3 tools/serve.py 8791
```

Открыть http://localhost:8791. Подойдёт любой статический хостинг (nginx, GitHub Pages и т. п.);
`tools/serve.py` только оборачивает `index.html` в `<!doctype html>`-каркас, как это делает хостинг артефактов.

## Структура

| Путь | Что там |
|---|---|
| `index.html` | разметка и стили |
| `app.js` | роутер, редактор кода, запуск Python, проверка решений, прогресс |
| `content/kk/grade-N.js` | уроки, тесты-викторины и задачи для N-го класса на казахском (`OLY.addGrade({...})`) |
| `content/ru/grade-N.js` | то же на русском; если казахского файла нет, сайт берёт русский |
| `vendor/pyodide/` | Python для браузера (Pyodide 0.26.4) |
| `tools/validate_content.py` | проверяет контент: схему и то, что эталонные решения проходят все тесты |

## Добавить задачу

Добавь объект в `problems` нужной темы в `content/kk/grade-N.js` и `content/ru/grade-N.js` (одинаковые `id`) (поля: `id`, `title`, `level` 1–3,
`statement`, `input`, `output`, `examples`, `tests`, `hint`, `solution`, `explain`, `starter`), затем:

```bash
python3 tools/validate_content.py content/kk/grade-N.js content/ru/grade-N.js
```

Проверка ответа не чувствительна к пробелам и переводам строк (сравнение по токенам), как в большинстве олимпиадных систем.
Прогресс ученика хранится в `localStorage` браузера.
