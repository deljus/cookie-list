(function ($) {
    $.fn.extend({
        cookieObj: function (params) {
            var settings = $.extend({}, {
                cookieName: 'Default',
                expires: 1
                }, params),
                cookie = $.cookie(settings.cookieName),
                listObj = cookie ? $.parseJSON(cookie) : [];
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
