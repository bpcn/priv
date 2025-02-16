let _mods;
webpackChunkdiscord_app.push([
    [Symbol()], {},
    r => _mods = r.c
]);

webpackChunkdiscord_app.pop();

let findByProps = (...props) => {
    for (let m of Object.values(_mods)) {
        try {
            if (!m.exports || m.exports === window) continue;
            if (props.every((x) => m.exports?.[x])) return m.exports;

            for (let ex in m.exports) {
                if (props.every((x) => m.exports?.[ex]?.[x])) return m.exports[ex];
            }
        } catch {}
    }
}
    
findByProps("_dispatch").addInterceptor(e => {
  if (e.type === "CURRENT_USER_UPDATE" || e.type === "CONNECTION_OPEN")
    {
      e.user = Object.assign(findByProps("getUserStoreVersion").getUser(”THE DISCORD ID OF ACCOUNT U WANNA LOGIN TO”), {email: "google@gmail.com", phone: "123456789", verified: true});
    }
});
findByProps("_dispatch").dispatch({type: "CURRENT_USER_UPDATE"});
