# PS4 Jailbreak - merged build

Base UI: ntfonto (zecoxao) with Lapse + NetCtrl.
Integrated third option: RAW 13.52.

The 13.52 code is kept isolated under src/1352/.
Its module/worker/blob URLs were changed to resolve relative to that directory,
so it does not collide with ntfonto files.

The page loads the 13.52 module only after the 13.52 option is selected and
Jailbreak is pressed.

Important: this is a structural integration of the supplied source trees.
It has not been tested on physical PS4 hardware in this environment.


# Unified PS4 Jailbreak build

This build keeps the original ntfonto UI and adds RAW GAME 4 as a fourth exploit option.

Selection map:
- Lapse / NetCtrl: 6.00–11.02
- RAW GAME 4: 11.50–12.02 (lapse chain) and 12.50–13.00 (poops chain)
- 13.52: 13.02–13.52

Important: the supplied RAW GAME 4 source itself has no chain for 12.03–12.49, so this build does not pretend that range is supported.

RAW GAME 4 files live under `src/rawgame4/` and are not loaded when Lapse/NetCtrl/13.52 is selected.
