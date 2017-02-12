(function ($) {
    $.fn.extend({
        cookieObj: function (cookieName) {
                cookie = $.cookie(cookieName),
                listObj = cookie ? $.parseJSON(cookie) : [];
            return {
                add: function (list) {
                    listObj.push(list);
                    $.cookie(cookieName, JSON.stringify(listObj), { expires: 365, path: '/' });
                },
                clear: function() {
                    $.removeCookie(cookieName, { path: '/' });
                },
                remove: function(index) {
                    if(listObj[index]) {
                        listObj.splice(index, 1);
                        $.cookie(cookieName, JSON.stringify(listObj), {expires: 365, path: '/'});
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
