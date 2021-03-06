// start window
pref("toolkit.defaultChromeURI", "chrome://buzzbird/content/main.xul");
//pref("toolkit.defaultChromeURI", "chrome://buzzbird/content/template.xul");

// suppress external-load warning for standard browser schemes
pref("network.protocol-handler.warn-external.http", false);
pref("network.protocol-handler.warn-external.https", false);
pref("network.protocol-handler.warn-external.ftp", false);

// this doesn't seem to make the tooltips show up.  :(
pref("browser.chrome.tooltips.attrlist.enabled", true);
pref("browser.chrome.tooltips.attrlist", "alt|src|data|title|href|cite|action|onclick|onmouseover|onsubmit");

pref("browser.cache.disk.enable", true);
pref("nglayout.debug.disable_xul_cache", false);
pref("nglayout.debug.disable_xul_fastload", false);

// Needed for preferences window (see https://developer.mozilla.org/en/Preferences_System, or mozilla bug 302509)
//pref("browser.preferences.animateFadeIn", false);
//pref("browser.preferences.instantApply", true);

// enable password manager
pref("signon.rememberSignons", true);
pref("signon.expireMasterPassword", false);
pref("signon.SignonFileName", "signons.txt");

// enable extension installers
pref("xpinstall.dialog.confirm", "chrome://mozapps/content/xpinstall/xpinstallConfirm.xul");
pref("xpinstall.dialog.progress.skin", "chrome://mozapps/content/extensions/extensions.xul?type=themes");
pref("xpinstall.dialog.progress.chrome", "chrome://mozapps/content/extensions/extensions.xul?type=extensions");
pref("xpinstall.dialog.progress.type.skin", "Extension:Manager-themes");
pref("xpinstall.dialog.progress.type.chrome", "Extension:Manager-extensions");
pref("extensions.update.enabled", true);
pref("extensions.update.interval", 86400);
pref("extensions.dss.enabled", false);
pref("extensions.dss.switchPending", false);
pref("extensions.ignoreMTimeChanges", false);
pref("extensions.logging.enabled", false);
pref("general.skins.selectedSkin", "classic/1.0");
// NB these point at AMO
pref("extensions.update.url", "chrome://mozapps/locale/extensions/extensions.properties");
pref("extensions.getMoreExtensionsURL", "chrome://mozapps/locale/extensions/extensions.properties");
pref("extensions.getMoreThemesURL", "chrome://mozapps/locale/extensions/extensions.properties");

// enable tracemonkey
pref("javascript.options.jit.content",true);
pref("javascript.options.jit.chrome",true);

// Crank up the number of simultaneous ajax requests
pref("network.http.max-connections",40);
pref("network.http.max-connections-per-server",25);
pref("network.http.max-persistent-connections-per-server",25);

// defaults
pref("buzzbird.update.interval", 180000);
pref("buzzbird.auto.markread", false);
pref("buzzbird.zoom", 100);
pref("buzzbird.retweet.format","rt");
pref("buzzbird.hashtag.destination","hashtags.org");
pref("buzzbird.shorturl.destination","is.gd");
pref("buzzbird.window.title","both");
pref("buzzbird.render.bold-name","handle");
pref("buzzbird.toolbar.show-text",true);
pref("buzzbird.toolbar.show-icons",true);
pref("buzzbird.toolbar.small-size",true);
pref("buzzbird.retweet.method","Q");
pref("buzzbird.alert.visual.general",false);
pref("buzzbird.alert.visual.general.sticky",false);
pref("buzzbird.alert.visual.mention",true);
pref("buzzbird.alert.visual.mention.sticky",false);
pref("buzzbird.alert.visual.direct",true);
pref("buzzbird.alert.visual.direct.sticky",false);
pref("buzzbird.autoclose.post",true);
pref("buzzbird.post.return",false);

// default all filters off.
pref("buzzbird.filters.foursquare",false);
pref("buzzbird.filters.gowalla",false);
pref("buzzbird.filters.brightkite",false);
pref("buzzbird.filters.whrrl",false);
pref("buzzbird.filters.fishies",false);
pref("buzzbird.filters.qrank",false);
pref("buzzbird.filters.dotsonline",false);
pref("buzzbird.filters.chessonline",false);
pref("buzzbird.filters.rhythmbox",false);
pref("buzzbird.filters.pandora",false);
pref("buzzbird.filters.tweekly",false);
pref("buzzbird.filters.slackerradio",false);
pref("buzzbird.filters.blip",false);
pref("buzzbird.filters.lastfmlovetweet",false);
pref("buzzbird.filters.lastfmtweets",false);
pref("buzzbird.filters.twunes",false);
pref("buzzbird.filters.wereward",false);
pref("buzzbird.filters.mylikes",false);
pref("buzzbird.filters.adcause",false);
pref("buzzbird.filters.ratepoint",false);
pref("buzzbird.filters.assetize",false);
pref("buzzbird.filters.adly",false);
pref("buzzbird.filters.sponsoredtweets",false);
