async function injectVConsole() {
    const before_script = document.querySelector("#vconsole");
    if (before_script) {
        before_script.remove();
    }
    const url = "https://unpkg.com/vconsole@latest/dist/vconsole.min.js";
    const script = document.createElement("script");
    script.defer = "defer";
    script.src = url;
    script.id = "vconsole";
    document.head.appendChild(script);
}

export function onLoad() {
    injectVConsole();
    setTimeout(() => {
        var vConsole = new VConsole({ theme: document.querySelector("body").getAttribute("q-theme") });
    }, 100);
}
