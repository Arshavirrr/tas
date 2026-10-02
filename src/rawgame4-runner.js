// RAW GAME 4 runner: firmware-gated integration for the unified PS4 UI.
// Firmware versions listed by the upstream project: 11.50, 11.52, 12.00, 12.02, 12.50, 12.52, 13.00.
async function runRawGame4() {
  const state = document.getElementById("rawgame-state");
  const out = document.getElementById("rawgame-out");
  const panel = document.getElementById("rawgame-panel");
  const form = document.getElementById("kernel-options");

  panel.hidden = false;
  if (form) form.hidden = true;
  if (out) out.textContent = "";

  const m = /PlayStation\s+4[\/ ](\d+)\.(\d+)/.exec(navigator.userAgent);
  if (!m) {
    if (state) { state.textContent = "Unsupported device"; state.className = "bad"; }
    return;
  }

  const major = parseInt(m[1], 10);
  const minor = parseInt(m[2], 16);
  const minorHex = minor.toString(16).padStart(2, "0");
  const key = `${major}.${minorHex}`;
  const fwnum = major * 100 + parseInt(minorHex, 10);

  let chain = null;
  if ([1150, 1152, 1200, 1202].includes(fwnum)) chain = "lapse";
  else if ([1250, 1252, 1300].includes(fwnum)) chain = "poops";

  if (!chain) {
    if (state) {
      state.textContent = `RAW GAME 4: unsupported firmware ${key}`;
      state.className = "bad";
    }
    if (out) out.textContent =
      "Listed firmware versions: 11.50, 11.52, 12.00, 12.02, 12.50, 12.52, 13.00.\n" +
      "This firmware is not listed as supported by the supplied RAW GAME 4 source.";
    return;
  }

  if (state) {
    state.textContent = `RAW GAME 4 — ${key} — ${chain}`;
    state.className = "warn";
  }

  try {
    await import(`./rawgame4/chain_${chain}.js?integrated=1`);
  } catch (e) {
    if (state) {
      state.textContent = "RAW GAME 4 failed to load";
      state.className = "bad";
    }
    if (out) out.textContent += `\nLoad error: ${e && e.stack ? e.stack : e}`;
  }
}
