# Teacher guide: atomic spectra simulation

## Quick reference

The simulation shows that an atom only absorbs and emits photons of specific energies, when it receives light or is hit by electrons, and it builds up the atom's spectrum. Its main use is in Bachillerato 1 (Year 12 in the UK, 11th grade in the US), with applications in ESO 4 and Bachillerato 2 Chemistry.

| Item | Details |
| --- | --- |
| Link | [jrgrijota.github.io/simulacion-espectros](https://jrgrijota.github.io/simulacion-espectros/) |
| Year groups | Bachillerato 1 (main use), ESO 4, Bachillerato 2 Chemistry; occasional review in Bachillerato 2 Physics |
| Subject | Physics and Chemistry |
| Suggested time | 15–20 minutes of explanation with the simulation projected |
| Equipment | Projector or interactive whiteboard; runs in the browser, also on phones and tablets, with nothing to install |
| Prior knowledge | The idea of an atom with electrons in energy levels, the visible spectrum and colours; in Bachillerato, E = h·f and the electronvolt |
| Accessibility | Dark, light and high-contrast themes (gear button) |

## How the simulation works

The simulation has three modes, “Photons”, “Collision” and “Ionised Gas”, chosen at the top of the left-hand panel. Below them, the “Element” drop-down offers hydrogen (4 levels), helium (3), sodium (3) and neon (5). In Photons and Collision an atom is shown with its orbits labelled with their energy. On the right there is an “Energy level diagram” in eV. In all three modes the “Emission spectrum” from 380 to 780 nm is at the bottom; in Photons the strip splits in two and the “Absorption spectrum” appears above it. Below that, another bar collects the UV (200–380 nm) and the IR (780–3000 nm).

| Mode | What the teacher controls | What it shows |
| --- | --- | --- |
| Photons, “White light” | “Single photon” (fired by clicking the source on the canvas) or “Continuous stream”, with “Photon flux” from “Slow” to “Maximum” | Photons of random wavelength between 380 and 780 nm. The atom only absorbs those that match one of its visible lines |
| Photons, “Monochromatic” | “Wavelength” from 380 to 780 nm, in steps of 2 nm; it starts at 550 nm | If the photon matches a transition, the label shows “ABSORBS 656 nm” and the electron moves up an orbit. If not, the photon passes straight by |
| Collision | “Electron energy” from 0.5 to 6.0 eV, in steps of 0.1; it starts at 3.0 eV. “Single shot” (click the gun) or “Continuous beam” with “Firing rate” | The label “EXCITATION” if the electron has enough energy or “Elastic collision — not enough energy” if not. A panel shows which levels can be reached with that energy |
| Ionised Gas | “Tube voltage” from 1 to 8 eV, in steps of 0.2; it starts at 5.0 eV. “Gas density” from 4 to 20 atoms; it starts at 10 | A tube with a cathode and an anode. The electrons excite atoms, which glow and emit. Counters for free electrons, excited atoms and photons emitted, and the number of photons above each line |

Four elements support the explanation:

- **The energy level diagram.** It shows the levels with their energy and every possible transition. The transition that has just happened is highlighted, and a dot marks the electron's level.
- **The status label.** Above the atom it shows, for example, “ABSORBS 486 nm” or “EMITS 656 nm” with the starting and finishing levels, in the colour of the light.
- **The spectra.** Each photon emitted lights up its line on the 380–780 nm bar. UV and IR lines go to the bottom bar. In Photons, each photon absorbed darkens its line in the absorption spectrum, a rainbow just above, so the dark lines and the bright lines are aligned. The lines fade gradually, except when paused.
- **The reachable energy panel.** In Collision, “With 3.0 eV you can reach:” marks each level and the energy it needs with ✓ or ✗.

The “Pause” and “Clear” buttons are shared by the three modes; “Clear” wipes the spectrum and the counters. The “Atomic transitions” drop-down lists each transition with its wavelength, its region (visible, UV or IR) and its levels. “Key concepts” summarises E = h·f = h·c / λ and ΔE = E_upper − E_lower.

## Use in each year group

In ESO 4 the simulation gives substance to the Bohr model and to light as a carrier of energy. In Bachillerato 1 it is the central tool for relating spectra and electronic structure. In Bachillerato 2 Chemistry it supports Bohr's postulates and the hydrogen spectrum. There is no content in ESO 2 or ESO 3 where it fits. The curriculum content quoted is from the LOMLOE Physics and Chemistry curriculum of the Community of Madrid (Spain), in our own translation.

### ESO 4: energy levels and the colour of light

*Ages 15–16 · Year 11 in the UK · 10th grade in the US*

**Curriculum content.** Block A: “Using a range of scientific learning environments and resources, such as the laboratory or virtual environments”. Block B: “Atomic models: historical development of the main classical and quantum atomic models and description of the subatomic particles”. Block E: “Light and sound as waves that transfer energy”.

**Objectives.** Recognise that the electron only occupies specific energy levels. Associate absorbing with moving up a level and emitting with moving down. Relate the colour of the light to the energy of the jump. Understand the spectrum as the fingerprint of each element.

**Teaching sequence (15–20 min).**

1. Photons mode with hydrogen, “Monochromatic” at 550 nm and “Single photon” (the starting set-up except for the light). Fire by clicking the source. The photon passes straight by. Ask why the atom does not make use of it.
2. Raise the wavelength to 656 nm and fire. The label says “ABSORBS 656 nm (n=2 → n=3)” and the electron jumps to the next orbit. On the diagram, the jump is 1.89 eV.
3. Wait about 3–5 s: the atom emits a 656 nm photon in a random direction. The red line appears in the spectrum. Conclude that the atom gives the energy back as light of the same colour.
4. Repeat with 486 nm (2.55 eV) and 434 nm (2.86 eV). Point out that bluer or more violet light corresponds to bigger jumps. Sometimes the way down happens in two steps: a 1879 nm IR photon and then a 656 nm one.
5. Switch to Ionised Gas at 5.0 eV. The three visible lines of hydrogen appear. Change the element to sodium (the yellow 589 nm line of old street lamps) and to neon (the reds and oranges of neon signs). Each element gives a different spectrum.

### Bachillerato 1: spectra and electronic structure

*Ages 16–17 · Year 12 in the UK · 11th grade in the US*

**Curriculum content.** Block A: “Electronic structure of atoms from the analysis of their interaction with electromagnetic radiation” and “Atomic spectra and the electronic structure of atoms”.

**Objectives.** Calculate the energy of a photon with E = h·c / λ. Relate each line to an energy difference between levels. Distinguish excitation by photons (exact energy) from excitation by collision (minimum energy). Apply conservation of energy to cascades.

**Teaching sequence (15–20 min).**

1. Photons with hydrogen and “Monochromatic”. Open “Atomic transitions”. Calculate on the board the energy of a 656 nm photon: E = 6.63·10⁻³⁴ · 3.00·10⁸ / 656·10⁻⁹ = 3.03·10⁻¹⁹ J = 1.89 eV. Check that it matches the diagram.
2. Set 600 nm and fire: 2.07 eV does not correspond to any jump and the photon is not absorbed. Set 486 nm: it is absorbed and the electron moves up to the 2.55 eV level.
3. Watch the de-excitation from 2.55 eV. If it goes down in two steps, it emits 1879 nm (0.66 eV) and 656 nm (1.89 eV). Add them: 0.66 + 1.89 = 2.55 eV. Energy is conserved.
4. Collision mode with hydrogen and “Single shot”. With 1.5 eV you get “Elastic collision — not enough energy”. With 2.0 eV the atom is excited to 1.89 eV and emits 656 nm. With 3.0 eV it reaches the 2.86 eV level. Compare with the photon, which needs exactly the right energy.
5. Ionised Gas with sodium at 3.0 eV: only the 589 nm line (2.10 eV) appears. Raise it to 3.8 eV: the collisions reach the 3d level and 819 nm also appears in the IR region. Check that 2.10 + 1.52 = 3.62 eV. There is no direct 3d → 3s line: that jump is forbidden and the atom always goes down via 3p.
6. Finish with the absorption spectrum. Go back to Photons with hydrogen, “White light” and “Continuous stream”. The atom removes exactly the 434, 486 and 656 nm photons from the beam: dark lines appear at those positions in the “Absorption spectrum”, above the emission lines.

### Bachillerato 2 Chemistry: the Bohr model and the hydrogen spectrum

*Ages 17–18 · Year 13 in the UK · 12th grade in the US*

**Curriculum content.** Block A: “The emission spectrum of hydrogen”, “Relationship between the phenomenon of atomic spectra and the quantisation of energy”, “Bohr's atomic model. Postulates. Energy of the orbits of the hydrogen atom”, “Interpreting the emission and absorption spectra of the elements” and “Successes and limitations of Bohr's atomic model”.

**Objectives.** Interpret the visible spectrum of hydrogen as the Balmer series. Link Bohr's postulates with what can be seen. Show quantisation through energy thresholds. Recognise the limitations of the model for atoms with several electrons.

**Teaching sequence (15–20 min).**

1. Point out the hydrogen labels: the levels in the simulation are n = 2, 3, 4 and 5, with energies measured from n = 2. The ground state, n = 1, is outside the model.
2. Check it with E_n = −13.6 / n² eV: E₃ − E₂ = 1.89 eV, E₄ − E₂ = 2.55 eV and E₅ − E₂ = 2.86 eV. They match the diagram. The Balmer formula gives 656, 486 and 434 nm.
3. Ionised Gas with hydrogen at 2.0 eV: only the 656 nm line appears. Raise it to 2.6 eV: 486 nm also appears. At 3.0 eV, 434 nm appears. Each line has a threshold: energy is quantised.
4. Point out the 1879 and 1278 nm IR lines on the bottom bar. They correspond to jumps that end at n = 3, the Paschen series.
5. Go back to Photons with “White light” and “Continuous stream”. The dark lines of the absorption spectrum sit exactly above the emission lines: the wavelengths absorbed are the same as those emitted. Relate the two spectra of the same element.
6. Switch to sodium. The labels 3s and 3p refer to subshells that Bohr does not explain. Use this to present the limitations of the model and the need for quantum numbers.

### Bachillerato 2 Physics: occasional review

*Ages 17–18 · Year 13 in the UK · 12th grade in the US*

There is no specific content on spectra beyond a passing mention. The simulation can support the block D content “Other limitations of classical physics: black-body radiation, the photoelectric effect and atomic spectra”. With hydrogen, 550 nm and “Continuous stream” at “Maximum” flux, no photon is absorbed. The analogy with the photoelectric effect is direct: what matters is the energy of each photon, not how many arrive.

## Misconceptions it helps to address

The simulation mainly tackles the idea that the energy of light is continuous and depends only on its intensity. Each row gives a common prior idea and how to break it down with the simulation.

| Students' idea | Correct idea | How to show it |
| --- | --- | --- |
| “If enough light arrives, the atom will eventually absorb it” | Each photon is only absorbed if its energy matches a jump | Hydrogen, “Monochromatic” at 550 nm, “Continuous stream” and “Maximum” flux: no photon is absorbed. At 656 nm, they are |
| “The electron can have any energy” | The energy of the atom is quantised | Energy level diagram with hydrogen: only 0, 1.89, 2.55 and 2.86 eV. At 600 nm the photon passes straight by |
| “Red light has more energy than blue light” | Photon energy increases as λ decreases | Hydrogen: 656 nm corresponds to 1.89 eV and 434 nm to 2.86 eV. Look at the size of each jump on the diagram |
| “The atom sends the same photon back instantly, like a mirror” | It stays excited for a while and emits in a random direction, sometimes in several steps | Hydrogen at 486 nm: after a few seconds it may emit 1879 nm and then 656 nm, in different directions |
| “An electron needs exactly the right energy, just like a photon” | In a collision an energy equal to or greater than the jump is enough | Collision with hydrogen at 2.0 eV: it excites the 1.89 eV level. At 1.5 eV, “Elastic collision — not enough energy” |
| “The lamp glows because the gas heats up or burns” | Collisions with electrons excite the atoms, and these emit light as they de-excite | Ionised Gas with hydrogen at 1.0 eV: there are electrons but no photons. Raise it to 2.0 eV: the 656 nm light appears |
| “All gases give the same light” | Each element has its own spectrum, like a fingerprint | Ionised Gas at 5.0 eV: switch between hydrogen, helium, sodium and neon and compare the lines |
| “Only the light we can see exists” | There are ultraviolet and infrared emissions | Ionised Gas with sodium at 3.8 eV: 819 nm (IR) appears on the bottom bar. With hydrogen at 5.0 eV, 1879 and 1278 nm |

## Simplifications worth knowing

The simulation puts the idea “discrete levels, jumps with a specific energy” first, and to do so it simplifies the atoms and the timings. It is worth knowing about these liberties so as not to reinforce wrong ideas by accident.

1. **Hydrogen starts at n = 2.** The levels are n = 2 to n = 5 and are worth 0, 1.89, 2.55 and 2.86 eV, measured from n = 2: the lines are the Balmer lines. The ground state, n = 1, is left out, and the panel calls the n = 2 level “lowest in the model”. In ESO 4 it is enough to talk about the “lowest level”.
2. **Positive energies and few levels.** All energies are measured from the lowest level, which is 0, and there are no negative energies and no ionisation. Each atom has between 3 and 5 levels. In Bachillerato 2 it is worth reminding students that E_n = −13.6 / n² eV.
3. **The lowest level is not always the ground state.** In helium and neon, the E₁ level is already an excited state. From the real ground state it would take about 20 eV. In sodium the levels are 3s, 3p and 3d, with real energies; the 3s ↔ 3d jump is forbidden and does not appear. For Bachillerato, present them as level models, not as exact data.
4. **Absorption with an 18 nm margin.** Any photon within 18 nm of a line is absorbed: with hydrogen, 640 nm is absorbed as if it were 656 nm. Real lines are much narrower. Also, only visible photons are absorbed and only from the lowest level.
5. **Random cascade and slow timings.** The atom spends 1.3–2.7 s excited and then 2 s in each level before emitting. From each level it goes down to any lower level with an allowed transition, with equal probability (in sodium, from 3d only to 3p). In reality the lifetime is of the order of nanoseconds and some transitions are much more likely than others.
6. **Simplified collisions.** The electron always excites the highest level it can reach and then disappears; the energy it has left over is not shown. In Ionised Gas each valid collision excites with a probability of 40 %. The “Tube voltage” is given in eV: it is the energy of each electron, not the real voltage of a lamp.
7. **Orbits like planets.** The electron moves in circular orbits drawn with radii from 68 to 168 pixels for hydrogen, not to scale. In Bohr's model the radii grow with n². In Bachillerato 2 it is worth contrasting this with the idea of an orbital.
8. **Spectra that fade by themselves.** The absorption spectrum only appears in Photons and only collects visible lines. The lines in both spectra lose half their brightness in about 14 s; when paused they freeze.
9. **IR bar limited to 3000 nm.** The 4003 nm line of hydrogen and the 3444 and 6889 nm lines of neon are emitted but not drawn. They only appear in “Atomic transitions”.
