let timerId = null; 
const label = document.getElementById('autoJbLabel');
const checkbox = document.getElementById('autoJbInput');
const jeilbrekBtn = document.getElementById('jeilbrek');
const UAElement = document.getElementById("UA");

const storedAutoJb = localStorage.getItem("autoJb");
let autoJbValue = storedAutoJb !== null ? storedAutoJb === "true" : true;

// choose one of kernel exploits
var exploitChain = localStorage.getItem("exploitChain") || "lapse";
const netctrlRadio = document.getElementById("netctrl-exploit");
const lapseRadio = document.getElementById("lapse-exploit");
const rawgame4Radio = document.getElementById("rawgame4-exploit");
const raw1352Radio = document.getElementById("raw1352-exploit");
const kexForm = document.getElementById('kernel-options');

// Show user agent
UAElement.innerText += " " + navigator.userAgent;

kexForm.addEventListener("change", function (event) {
    localStorage.setItem("exploitChain", event.target.value);
    exploitChain = event.target.value;
});


function ps4FirmwareNumber() {
    const m = /PlayStation\s+4[\/ ](\d+)\.(\d+)/.exec(navigator.userAgent);
    if (!m) return null;
    const minor = parseInt(m[2], 16);
    return parseInt(m[1], 10) * 100 + minor;
}

function validateSelectedExploit() {
    const fw = ps4FirmwareNumber();
    if (fw === null) return true;

    if ((exploitChain === "lapse" || exploitChain === "netctrl") && fw > 1102) {
        alert("Lapse/NetCtrl is reserved for PS4 firmware 6.00–11.02 in this unified build.");
        return false;
    }
    if (exploitChain === "rawgame4" && !(fw >= 1150 && fw <= 1202 || fw >= 1250 && fw <= 1300)) {
        alert("RAW GAME 4 supports 11.50–12.02 and 12.50–13.00. Firmware 12.03–12.49 is not covered by the supplied source.");
        return false;
    }
    if (exploitChain === "raw1352" && !(fw >= 1302 && fw <= 1352)) {
        alert("The 13.52 chain is reserved for PS4 firmware 13.02–13.52 in this unified build.");
        return false;
    }
    return true;
}

// jailbreak execution
jeilbrekBtn.addEventListener("click", function (e){
    if (!validateSelectedExploit()) return;
    jeilbrekBtn.disabled = true;
    stopInterval();
    if (exploitChain === "raw1352") {
        runRaw1352();
    } else if (exploitChain === "rawgame4") {
        runRawGame4();
    } else {
        doJb();
    }
});

checkbox.addEventListener('change', function () {
    localStorage.setItem("autoJb", checkbox.checked);
    if (checkbox.checked == true && jeilbrekBtn.disabled == false) {
        jailbreakCountdown();
        return;
    }

    stopInterval();
});

function stopInterval(){
    if (timerId !== null) {
        clearInterval(timerId);
        timerId = null;
    }
    label.textContent = "Auto Jailbreak";
}

function jailbreakCountdown() {   
    stopInterval();

    let countdown = 5;
    label.textContent = `Auto Jailbreaking in: ${countdown}`;
    timerId = setInterval(() => {
        countdown--;
        label.textContent = `Auto Jailbreaking in: ${countdown}`;

        if (countdown < 0) {
            if (!validateSelectedExploit()) {
                stopInterval();
                return;
            }
            jeilbrekBtn.disabled = true; 
            clearInterval(timerId);
            timerId = null;
            label.textContent = 'Executing';
            if (exploitChain === "raw1352") {
                runRaw1352();
            } else if (exploitChain === "rawgame4") {
                runRawGame4();
            } else {
                doJb();
            }
        }
    }, 1000);
}

function cacheProgress(e) {
    var Percent = (Math.round(e.loaded / e.total * 100));
    document.title = "Caching: " + Percent + "%";
}

function displayCacheProgress() {
    setTimeout(function () {
        // show a tick
        document.title = "\u2713";
    }, 1000);
    setTimeout(function () {
        // location.reload();
        document.title = "CSSFontFace exploit";
    }, 3000);
}


async function runRaw1352() {
    document.body.classList.add("raw1352-running");
    document.getElementById("raw1352-stage").setAttribute("aria-hidden", "false");
    document.title = "PS4 Jailbreak 13.52";
    try {
        await import("../src/1352/jb.js?v=merged1");
    } catch (e) {
        document.body.classList.remove("raw1352-running");
        document.body.classList.add("raw1352-fail");
        const msg = document.getElementById("raw1352-msg");
        msg.textContent = "13.52 exploit failed to load: " + (e && e.message ? e.message : e);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    // Cache handling
    if (window.applicationCache) {
        window.applicationCache.addEventListener("progress", cacheProgress, false);
        window.applicationCache.oncached = function (e) { displayCacheProgress(); };
        window.applicationCache.onupdateready = function (e) { displayCacheProgress(); };
    }

    // choose prefered exploit chain
    if (exploitChain == "netctrl") {
        netctrlRadio.checked = true;
    } else if (exploitChain == "rawgame4") {
        rawgame4Radio.checked = true;
    } else if (exploitChain == "raw1352") {
        raw1352Radio.checked = true;
    } else {
        lapseRadio.checked = true;
    }

    // apply autojb localStorage value
    checkbox.checked = autoJbValue;

    if (autoJbValue) jailbreakCountdown();
});