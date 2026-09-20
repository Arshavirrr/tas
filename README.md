# PS4 Multi-Firmware Jailbreak Host

A unified PS4 jailbreak web host that combines multiple publicly available PS4 exploit projects into a single, easy-to-use interface.

The goal of this project is to provide a centralized web-based host where supported PS4 firmware versions can access their corresponding exploit chain from one website, without requiring separate hosts for each project.

---

## 🚀 Which Option Should I Use?

Select the option corresponding to your PS4 firmware version:

| PS4 Firmware      | Recommended Option | Notes                                                                        |
| ----------------- | ------------------ | ---------------------------------------------------------------------------- |
| **6.00 – 11.02**  | **Lapse**          | Recommended — generally more stable                                          |
| **6.00 – 11.02**  | **NetCtrl**        | Alternative method                                                           |
| **11.50 – 13.00** | **RawGame4**       | Automatically detects the firmware and selects the appropriate exploit chain |
| **13.02 – 13.52** | **Raw13G**         | Use the Raw13G option for this firmware range                                |

### 6.00 – 11.02

For PS4 firmware **6.00 through 11.02**, you can use either:

* **Lapse**
* **NetCtrl**

**Lapse is recommended** because it is generally considered the more stable option in this host.

### 11.50 – 13.00

For PS4 firmware **11.50 through 13.00**, use:

**RawGame4**

RawGame4 handles the firmware detection and selects the appropriate exploit chain for the supported firmware.

### 13.02 – 13.52

For PS4 firmware **13.02 through 13.52**, use:

**Raw13G**

> **Important:** Do not use Lapse, NetCtrl, or RawGame4 for firmware 13.02–13.52. Use the **Raw13G** option provided specifically for this firmware range.

---

## 📦 Sources & Credits

This project was built by integrating and adapting code from the following open-source projects:

### 1. zecoxao/zecoxao.github.io — ntfonto

Source: https://github.com/zecoxao/zecoxao.github.io/tree/main/ntfonto

The `ntfonto` project provides the original interface and exploit implementations used as the foundation of this combined host, including the Lapse and NetCtrl-related options for supported firmware versions.

### 2. rawgame4/rawgame4.github.io

Source: https://github.com/rawgame4/rawgame4.github.io

RawGame4 provides the WebKit exploit chain for PS4 firmware up to 13.00, including automatic firmware detection and selection of the appropriate exploit chain.

### 3. raw13g/raw13g.github.io

Source: https://github.com/raw13g/raw13g.github.io

Raw13G provides the exploit implementation and required files used by this combined host for the newer PS4 firmware range.

---

## 🤖 AI-Assisted Development

This combined project was created with extensive assistance from Artificial Intelligence.

AI was used to help analyze the source projects, understand their file structures and dependencies, design the integration architecture, prevent filename and path conflicts, connect the different exploit implementations to a unified interface, and organize the final project into a single web host.

The original exploit research, code, payloads, and other third-party components remain credited to their respective developers and repositories.

This repository should therefore be considered an **integration project**, rather than an original implementation of the underlying PS4 exploits.

---

## 🟡 GoldHEN

The current integrated GoldHEN payload version used by this project is:

**GoldHEN 2.4b18.11**

This version is used for the supported firmware ranges integrated into this host, **excluding firmware 13.02–13.50**.

GoldHEN is developed by the GoldHEN team:

https://github.com/GoldHEN/GoldHEN

Future GoldHEN releases and exploit updates will be integrated into this project as quickly as possible whenever compatible versions become available.

---

## 🧩 Firmware Support

The integrated host is designed around the following firmware ranges:

* **6.00 – 11.02** → Lapse / NetCtrl
* **11.50 – 13.00** → RawGame4
* **13.02 – 13.52** → Raw13G

Please always verify your exact PS4 firmware version before selecting an option.

---

## 🔄 Updating the Host

The project is designed to make updates as simple as possible.

When a new compatible GoldHEN version, exploit update, firmware offset, payload, or other required component becomes available, the host can be updated from the repository.

### Updating on the PS4

After an update has been published to the web host, users generally only need to:

1. Connect the PS4 to the Internet.
2. Open the jailbreak website.
3. Refresh/reload the page.

The updated website files/cache will then be picked up by the console when the updated host is available.

Because browser caching can affect exploit hosts, a refresh or reload may be required after an update.

---

## ⚠️ Important Notice

This project is intended for **research, educational purposes, homebrew development, and use on hardware owned by the user**.

The underlying exploit code and third-party components belong to their respective authors. Please respect the original licenses and credits of all included components.

This project does not include or distribute copyrighted game content.

Use kernel-level software at your own risk. Exploit failures may cause browser crashes, system restarts, or other unexpected behavior.

---

## ❤️ Credits

Special thanks to all developers and researchers whose work made this project possible, including:

* zecoxao
* raw13g
* rawgame4
* The GoldHEN Team
* Lapse exploit researchers and developers
* Poopsploit / NetCtrl researchers and developers
* SLOPKIT developers and contributors
* The wider PS4 homebrew and security research community

And special thanks to **Artificial Intelligence** for assisting with the analysis, architecture, integration, and development of this combined project.

---

## Disclaimer

This repository is an independent integration project and is not affiliated with or officially endorsed by the original developers of the included projects.

All trademarks, project names, source code, exploit research, and third-party components remain the property of their respective authors.

**Use responsibly and only on hardware you own or are authorized to modify.**
