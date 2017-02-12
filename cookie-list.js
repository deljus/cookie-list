/**
 * Created by deljus on 11.02.2017.
 * This is jQuery extend for work with cookie files.
 * This extend allows to work with cookie files as a list in javaScript
 *
 *
 * Эта расширение jQuery для работы с файлами 'cookie'.
 * Расширение позволяет работать с файлами 'cookie' как со словарем в javaScript.
 * При инициализации передается параметр 'cookieName', который определяет название файла
 * 'cookie'. Повторное инициализация обьекта с использованием одинакового имени не создает
 * новый обьект. Таким образом можно обращаться к обьекту даже после перезагрузки страницы.
 *
 * Для работы плагина требуется подключения jQuery и jquert.cookie.js.
 *
 * Вызов обьекта:
 * var cookie = $.fn.cookieObj({cookieName: 'myCookieName', expires: 365});
 * Установили название название файла 'myCookieName' и время жизни кукие файла на 365 дней
 *
 * Добавление словаря:
 * cookie.add({key1: 'value', ..........});
 *
 * Удаление словаря:
 * cookie.remove(index);
 *
 * Получение всех записанных значений:
 * cookie.listAll();
 *
 * Получение словаря по индексу:
 * cookie.indexOf(index);
 *
 * Удаление файла 'cookie'
 * cookie.clear()
 *
 */
(function ($) {
    $.fn.extend({
        cookieObj: function (params) {
            /* Дефолтные настройки название
            файла default, время жизни 1 день*/
            var settings = $.extend({}, {
                cookieName: 'Default',
                expires: 1
                }, params),
                cookie = $.cookie(settings.cookieName),
                listObj = cookie ? $.parseJSON(cookie) : [];
            /* Возвращаем методы */
            return {
                add: function (list) {
                    listObj.push(list);
                    $.cookie(cookieName, JSON.stringify(listObj), { expires: settings.expires, path: '/' });
                },
                clear: function() {
                    $.cookie(cookieName, null);
                },
                remove: function(index) {
                    if(listObj[index]) {
                        listObj.splice(index, 1);
                        $.cookie(cookieName, JSON.stringify(listObj), {expires: settings.expires, path: '/'});
                    }
                },
                listAll: function() {
                    return listObj;
                },
                indexOf: function(index) {
                    return listObj[index];
                }
            }
        },

    });
})(jQuery)
