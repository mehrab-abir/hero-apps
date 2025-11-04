const getInstalledApps = () => {
    const storedIds = localStorage.getItem("installed-apps");

    if (storedIds) {
        return JSON.parse(storedIds);
    }
    else {
        return []
    }
}

const installApp = (id) => {
    const storedIds = getInstalledApps();

    if (!storedIds.includes(id)) {
        storedIds.push(id);
        localStorage.setItem("installed-apps", JSON.stringify(storedIds));
    }
}

const uninstallApp = (appId) => {
    const storedIds = getInstalledApps();

    const installedApps = storedIds.filter(id => id !== appId);
    localStorage.setItem("installed-apps", JSON.stringify(installedApps));
}

export {
    getInstalledApps,
    installApp,
    uninstallApp
}