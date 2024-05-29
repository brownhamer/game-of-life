# Conway's Game of Life

Based on [Conway's Game of Life](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life) this project is used as introduction to learn about programmig using a [micro:bit](https://mmicrobit.org/) computer with a [BYOR](https://byor.nl/) extension. Combined they are used to emulate the 'evolution' of living organisms using various means of interaction and response.

# Rules of life

The following rules need to be implemented to emulate the evolution of life through various means of interaction. In the rules a combination of micro:bit and BYOR is referenced as SAM, the Simple Automated Micro.
* Each SAM starts life with a random language (represented as a value from between 0 and 9, inclusive).
* The SAM sends a language specific welcome message every 1 to 1.5 seconds.
* Each SAM listens for other welcome messages send by other SAMs.
* If the received message is in the same language as the SAM sent itself, it knows another SAM is of the same species.
* If the SAM knows there's a SAM nearby of the same species it
  * shows a green light
  * will reuse the same language for the next message
* If the SAM has not found a SAM nearby of the same species it
  * shows a red light
  * will evolve into another language, again using a random value

# micro:bit

The following content is automatically added by the [micro:bit online editor](https://makecode.microbit.org/).

> Open this page at [https://brownhamer.github.io/game-of-life/](https://brownhamer.github.io/game-of-life/)

## Use as Extension

This repository can be added as an **extension** in MakeCode.

* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **New Project**
* click on **Extensions** under the gearwheel menu
* search for **https://github.com/brownhamer/game-of-life** and import

## Edit this project

To edit this repository in MakeCode.

* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **Import** then click on **Import URL**
* paste **https://github.com/brownhamer/game-of-life** and click import

#### Metadata (used for search, rendering)

* for PXT/microbit
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>
