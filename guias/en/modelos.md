# Teacher guide: atomic models simulation

## Quick reference

The simulation reproduces Geiger and Marsden's alpha-particle scattering experiment and compares the predictions of Thomson and Rutherford. Its main use is in ESO 2 (Year 9 in the UK, 8th grade in the US), with applications in ESO 3 and ESO 4 and in Bachillerato 2 Physics.

| Item | Details |
| --- | --- |
| Link | [jrgrijota.github.io/simulacion-modelos](https://jrgrijota.github.io/simulacion-modelos/) |
| Year groups | ESO 2 (main use), ESO 3, ESO 4, Bachillerato 2 Physics; occasional review in Bachillerato 2 Chemistry |
| Subject | Physics and Chemistry |
| Suggested time | 15–20 minutes of explanation with the simulation projected |
| Equipment | Projector or interactive whiteboard; runs in the browser, also on phones and tablets, with nothing to install |
| Prior knowledge | The atom is made of protons, neutrons and electrons; like charges repel; in Bachillerato, Coulomb's law and electric potential energy |
| Accessibility | Dark, light and high-contrast themes, and a “Tablet / Whiteboard” interface size for touchscreens (gear button) |

## How the simulation works

The left-hand panel has two cards of controls. In “The atom” you choose the “Model” (Thomson or Rutherford), the “View” (“Atom” or “Foil”) and the “Atomic number (Z)”. In “Firing” you choose how the alpha particles are fired and at what speed. On the canvas, the “α source” is on the left and an arc labelled “Detector” surrounds the target. The arc leaves the area around the source open. The starting set-up is Thomson, Atom view, Z = 14 (silicon), “One at a time (click)” and speed 10.

| Mode | What the teacher controls | What it shows |
| --- | --- | --- |
| “Atom” view, Thomson model | “Atomic number (Z)” from 1 to 118; it starts at 14. The label shows the number and the name, for example “79 – Gold” | A yellow sphere of positive charge with the electrons in rotating rings. The α particles are barely deflected |
| “Atom” view, Rutherford model | The same Z slider | A nucleus with Z protons (red) and Z neutrons (grey). The electrons are in shells of 2, 8, 18, 32… The α particles that pass close to the nucleus curve and some come back towards the source |
| “Foil” view, either model | Model and Z. The foil has 3 columns of small atoms spanning the height of the opening | Many particles at once on many atoms. With Thomson they all pass almost straight through; with Rutherford most pass straight through and a few bounce back |
| “Emission mode” | “One at a time (click)”: each click in the blue strip next to the source fires one α at that height. “Continuous stream”: the “Continuous emission” button fires α particles at random heights, with a “Rate” from 1 to 60 (it starts at 20) | “Energy (α speed)” goes from 4 to 16 in steps of 0.5 and works in both modes. Higher speed, less deflection |

Three elements support the explanation:

- **The paths that stay drawn.** In Atom view the last 6 paths are kept for about 5 seconds. You can see that the α curves before it reaches the nucleus, without touching it.
- **The marks on the detector.** Each α detected leaves a dot on the arc (the last 40 are kept). With Thomson they cluster opposite the source; with Rutherford they are spread around the whole arc. Those that bounce back towards the source leave through the opening without leaving a mark, but they are counted in the graph.
- **The “Angle graph”.** It is a collapsible card with 18 bars of 10° each from 0° to 180°. The first bar is green, those up to 90° are amber and those above 90° are red. At the top it shows “n=” with the number of particles fired. Hovering over a bar shows its count and its percentage.

The “Reset” button clears the particles and the graph; changing the model or the view also resets it. The “Quick guide” card summarises what you are looking at, the two models, the two views and how to read the graph.

## Use in each year group

In ESO 2 the simulation is used to present the Thomson and Rutherford models and the experiment that tells them apart. In ESO 3 it supports atomic structure and the electric force between charges. In ESO 4 it fits the historical development of the models and the analysis of data. In Bachillerato 2 Physics it is used to apply Coulomb's law, Gauss's law and conservation of energy. In Bachillerato 1 there is no content where it fits. The curriculum content quoted is from the LOMLOE Physics and Chemistry curriculum of the Community of Madrid (Spain), in our own translation.

### ESO 2: from Thomson to Rutherford

*Ages 13–14 · Year 9 in the UK · 8th grade in the US*

**Curriculum content.** Block B: “Atomic structure: presentation of the historical development of atomic models”, “The first atomic models: the Thomson model and the Rutherford model” and “Atomic numbers”. Block A: “formulating hypotheses and testing them experimentally” and “the laboratory and virtual environments”.

**Objectives.** Describe the Thomson and Rutherford models. Understand that an experiment can rule out a model. Recognise that the atom is almost empty and has a small, positively charged nucleus.

**Teaching sequence (15–20 min).**

1. Starting set-up: Thomson, Atom view, Z = 14. Describe the drawing: a sphere of positive charge with electrons embedded in it, the “plum pudding”. Explain that the source fires alpha particles, which are positively charged.
2. Ask what will happen to an α fired at this atom. Click several times at different heights: they all pass almost straight through, deflected by 1° at most.
3. Raise Z to 79 (“79 – Gold”), the metal of the original foil. Repeat the clicks: they still pass almost straight through, deflected by 1° or 2°.
4. Switch to Foil view and “Continuous stream”, turn on “Continuous emission” and open the “Angle graph”. With Thomson every particle falls in the first bar (0–10°).
5. Change the model to Rutherford without touching anything else. Almost 9 out of 10 are still in the first bar, but red bars appear: a few α particles bounce back towards the source.
6. Go back to Atom view and “One at a time (click)”, with Rutherford and Z = 79. Click level with the nucleus: the α comes back. Click far away: it goes straight through. Conclude that there is a tiny, positive nucleus and a lot of empty space.

### ESO 3: atomic structure and the electric force

*Ages 14–15 · Year 10 in the UK · 9th grade in the US*

**Curriculum content.** Block B: “Atomic structure of matter”. Block E: “The electrical nature of matter” and “The electric force: similarities and differences with the gravitational force”. Block A: “Recording data and results using tables, graphs and mathematical expressions”.

**Objectives.** Place protons and neutrons in the nucleus and electrons around it. Explain the deflection of the α particles as electric repulsion at a distance. Relate the strength of the repulsion to the charge of the nucleus and to the speed of the particle.

**Teaching sequence (15–20 min).**

1. Rutherford, Atom view, Z = 14. Point out the protons (red), neutrons (grey) and electrons. Remind students that the α has two protons and two neutrons, as its drawing shows.
2. Fire an α a little above the nucleus. Point out that the path curves before it gets there: the electric force acts at a distance, without contact. Compare it with gravity, which only attracts.
3. Lower Z to 1 (“1 – Hydrogen”) and aim at the nucleus: the deflection is no more than about 6°. Raise it to 79: the α bounces back. More protons, more charge, more repulsion.
4. With Z = 79, fire at the same height, just above the nucleus, with speeds 4, 10 and 16. The deflection drops from about 115° to about 38° and then to about 16°.
5. Switch to Foil with “Continuous stream” and open the graph. Compare Z = 1, Z = 14 and Z = 79, pressing “Reset” in between. Write the percentage in the first bar and in the red bars on the board.

### ESO 4: the development of atomic models

*Ages 15–16 · Year 11 in the UK · 10th grade in the US*

**Curriculum content.** Block B: “Atomic models: historical development of the main classical and quantum atomic models and description of the subatomic particles” and “Development of atomic models up to the Bohr–Sommerfeld model”. Block A: “Scientific research. Measurement and its error. Analysis of experimental data” and “Appreciating scientific culture and the role of scientists in the main historical and current milestones of physics and chemistry”. Block E: “Kinetic energy and potential energy”.

**Objectives.** Explain the Geiger–Marsden experiment as a test of a hypothesis. Interpret a distribution of angles. Justify why the nuclear model replaces Thomson's model and which problems it leaves open for Bohr.

**Teaching sequence (15–20 min).**

1. Thomson, Z = 79, Foil view, “Continuous stream”, “Rate” at its maximum (60) and “Continuous emission”. State the hypothesis: if Thomson is right, all the α particles will pass almost straight through.
2. Open the “Angle graph” and wait for about 500 particles (n=500). They all fall in the 0–10° bar. That is the model's prediction.
3. Switch to Rutherford. Hover over the bars: the first one is around 88 % and the red ones add up to about 4 %. Explain that Geiger and Marsden saw rebounds that Thomson could not explain, though far fewer: 1 in 8000.
4. Go back to Atom view with Rutherford. Explain that the deflection depends on how close the α passes to the nucleus. That is how it was deduced that the nucleus is tiny.
5. Move “Energy (α speed)” from 4 to 16 while aiming close to the nucleus. Kinetic energy increases with v²: it becomes 16 times greater and the α is deflected much less.
6. Point out that the simulation already draws the electrons in shells of 2, 8, 18… That was not part of Rutherford's model: it is the later contribution of Bohr and Sommerfeld.

### Bachillerato 2 Physics: electric field and potential

*Ages 17–18 · Year 13 in the UK · 12th grade in the US*

**Curriculum content.** Block B: “Electric field strength for discrete and continuous charge distributions. Coulomb's law”, “Gauss's theorem. Applications to a charged sphere and sheet” and “Electric potential created by one or more charges”. Block D: “The atomic nucleus: nuclear forces and binding energy” and “Types of radiation and radioactive decay”.

**Objectives.** Apply Gauss's theorem to the Thomson sphere and Coulomb's law to the nucleus. Calculate the distance of closest approach using conservation of energy. Relate the deflection angle to the impact parameter.

**Teaching sequence (15–20 min).**

1. Thomson, Atom view, Z = 79. Apply Gauss's law to the charged sphere: inside, the field grows with r; outside, it falls off as 1/r². The maximum field is at the surface and it is weak. The α particles are barely deflected.
2. Switch to Rutherford with the same Z. All the charge is within a much smaller radius, and close to the nucleus the field is enormous. Click level with the nucleus: the α bounces back.
3. Head-on collision: speed 8 and then 16, clicking at exactly the height of the nucleus. With ½ m v² = k q Q / r_min, quadrupling the energy reduces r_min to a quarter. In the simulation it goes from about 19 px to about 5 px.
4. With speed 10, fire α particles closer and closer to the nucleus. At about 20 px from the centre it leaves at about 38°; at 10 px, about 71°; at 5 px, about 111°. The cotangent of θ/2 halves each time, as Rutherford predicts.
5. Mention that the α source is a radioactive emitter and that the α is a helium nucleus. If the α actually reached the nucleus, the nuclear force would act, which the simulation does not include.

### Bachillerato 2 Chemistry: occasional review

*Ages 17–18 · Year 13 in the UK · 12th grade in the US*

There is no specific content on Thomson and Rutherford. The simulation can open block A when dealing with “Atomic spectra as the reason the atomic model needed revising. Relevance of this phenomenon in the context of the historical development of the atomic model”. The Foil view with Rutherford is enough to recall the nuclear model. Then ask what it does not explain: the stability of the atom and spectra.

## Misconceptions it helps to address

The simulation mainly tackles the idea of a solid atom and the idea that particles are only deflected when they collide. Each row gives a common prior idea and how to break it down with the simulation.

| Students' idea | Correct idea | How to show it |
| --- | --- | --- |
| “The atom is a little solid ball, full of matter” | The atom is almost entirely empty space, with a very small nucleus | Rutherford, Foil, Z = 79, continuous stream: almost 9 out of 10 α particles pass through the foil deflected by less than 10° |
| “The alpha particle bounces back because it hits the nucleus, like a billiard ball” | Electric repulsion acts at a distance and curves the path before it gets there | Rutherford, Atom, Z = 79: fire a little above the nucleus and see that the path curves well away from it |
| “The α particles are deflected when they hit the electrons” | Electrons have very little mass and hardly deflect the α | Thomson, Atom, Z = 118: the α goes through all the rings of electrons and carries on almost straight |
| “If a model is replaced, it is because the old one was nonsense” | A model is replaced when an experiment contradicts its prediction | Thomson, Foil: everything in the first bar. The same experiment with Rutherford: red bars appear that Thomson cannot explain |
| “The nucleus takes up a good part of the atom” | The nucleus is tiny: that is why rebounds are rare | Rutherford, Atom, Z = 79: only α particles fired almost level with the nucleus bounce back; more than 50 px away they pass almost straight through |
| “All α particles are deflected the same, whatever the atom or their speed” | The deflection increases with the charge of the nucleus and decreases with the energy of the α | Rutherford, Atom: aim at the nucleus with Z = 1 (no more than 6°) and with Z = 79 (it bounces back). Then repeat with speeds 4 and 16 |
| “The alpha particle is like an electron” | The α is a helium nucleus, with two protons and two neutrons and a positive charge | Point to an α in flight: it is drawn with two red dots (protons) and two grey ones (neutrons). Compare it with the atom's blue electrons |

## Simplifications worth knowing

The simulation puts the qualitative contrast between the two models first, and to do so it exaggerates sizes and frequencies. It is worth knowing about these liberties so as not to reinforce wrong ideas by accident.

1. **The nucleus is greatly enlarged.** In Atom view the nucleus has a radius of between 3 and 15 px. The atom measures between 80 and 195 px. The ratio is 1 to 12 for gold, compared with 1 to 100 000 in reality. It is worth saying so whenever sizes come up.
2. **The rebounds are exaggerated.** In Rutherford's Foil with Z = 79 and speed 10, about 4 in every 100 α particles are deflected by more than 90°. Geiger and Marsden counted one in 8000; at that rate no rebound would be seen in class. The “Quick guide” mentions this.
3. **The foil is only 3 atoms thick.** Each α only interacts with the nearest atom, if it is within two radii. A real gold foil has thousands of layers of atoms.
4. **Each model uses a different force constant.** Rutherford uses a constant 5 times larger than Thomson (40 000 against 8000). Thomson also has a cap on the total force, which depends on the speed of the α and ensures deflections of less than 5°. In Bachillerato it is worth saying that the comparison is qualitative.
5. **Thomson's cap is artificial.** The deflections are “always < 5°” for any Z and speed (at most 4.3°, with Z = 118 and speed 4) because the force is deliberately limited. In the real Thomson model the deflections per atom were even smaller, a fraction of a degree.
6. **The detector has an opening.** The arc leaves the area around the source open, about 54° above and below. α particles deflected by more than about 125° leave that way without leaving a mark, although they are counted in the graph. In the real experiment they did not measure in every direction at once: they moved the detector.
7. **The nucleus is “soft” and there is no nuclear force.** The force is smoothed near the centre and drops to zero beyond 1.2 atomic radii. With Z = 1 at speed 10, or with Z = 14 at speed 16, an α fired head-on passes through the nucleus without being deflected.
8. **Made-up neutrons and shells.** The nucleus draws as many neutrons as protons; real gold has 118 neutrons. The electrons are arranged in shells of 2, 8, 18, 32, 32 and 8, which is an idea of Bohr's, not Rutherford's. From ESO 4 onwards it is worth pointing out the anachronism.
9. **The electrons almost never collide.** The mass of the α is 7350 times that of the electron, close to the real value of about 7300. But its collision radius is 0.005 px and collisions practically never happen. In the Rutherford model the electrons exert no force on the α.
