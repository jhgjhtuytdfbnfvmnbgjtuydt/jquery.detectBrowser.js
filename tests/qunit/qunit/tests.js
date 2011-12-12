if (window.navigator.platform.toLowerCase().search("win") >= 0) {
    test('windows', function() {
        $('body').detectBrowser();
        equals($('body').hasClass('win'), true, 'windows is correct');
    });
}

if (window.navigator.platform.toLowerCase().search("mac") >= 0) {
    test('mac', function() {
        $('body').detectBrowser();
        equals($('body').hasClass('mac'), true, 'mac is not bad :)');
    });
}

if (window.navigator.platform.toLowerCase().search("iphone") >= 0){
    test('iDevice', function() {
        $('body').detectBrowser();
        equals($('body').hasClass('idevice'), true, 'mac is not bad :)');
    });
}

if (window.navigator.platform.toLowerCase().search("linux") >= 0) {
test('linux', function() {
        $('body').detectBrowser();
        equals($('body').hasClass('lin'), true, 'linux is fine');
    });
}

if ($.browser.mozilla) {
    test('firefox', function() {
        // "Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US; rv:1.9.2.24) Gecko/20111103 Firefox/3.6.24";
        $('body').detectBrowser();
        equals($('body').hasClass('ff'), true, 'firefox is correct');
    });
}

if ($.browser.webkit) {
    test('chrome', function() {
        // "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/535.2 (KHTML, like Gecko) Chrome/15.0.874.121 Safari/535.2"
        $('body').detectBrowser();
        equals($('body').hasClass('crm'), true, 'chrome is correct');
    });

    test('safari', function() {
        // "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/534.50 (KHTML, like Gecko) Version/5.1 Safari/534.50"
        $('body').detectBrowser();
        equals($('body').hasClass('sfr'), true, 'safari is correct');
    });
}

if ($.browser.msie) {
    test('internet explorer', function() {
        // "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; Trident/4.0; SLCC2; .NET CLR 2.0.50727; Media Center PC 6.0; .NET4.0C; .NET4.0E; Tablet PC 2.0; .NET CLR 3.5.30729; .NET CLR 3.0.30729; InfoPath.3)"
        $('body').detectBrowser();
        equals($('body').hasClass('ie'), true, 'ie is correct');
    });
}