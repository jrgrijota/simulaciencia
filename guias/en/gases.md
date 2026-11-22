# Teacher guide: gases simulation

## Quick reference

The gases simulation shows a rubber balloon and a cylinder with a piston and, next to them, a model with the molecules hitting the wall. Those collisions are the pressure. Its main use is in ESO 3 (Year 10 in the UK, 9th grade in the US), with applications in ESO 2 and ESO 4 and a qualitative review in Bachillerato 1.

| Item | Details |
| --- | --- |
| Link | [jrgrijota.github.io/simulacion-gases](https://jrgrijota.github.io/simulacion-gases/) |
| Year groups | ESO 3 (main use), ESO 2, ESO 4; qualitative review in Bachillerato 1 |
| Subject | Physics and Chemistry |
| Suggested time | 15–20 minutes of explanation with the simulation projected |
| Equipment | Projector or interactive whiteboard; runs in the browser, also on phones and tablets, with nothing to install |
| Prior knowledge | The idea of a molecule, temperature in K and °C, volume in litres; in ESO 4, pressure as force per unit area |
| Accessibility | Four themes in “⚙” (SimulaCiencia, Dark, Light and High contrast), full screen, keyboard (space bar to pause, R to restart) and messages read out by screen readers |

## How the simulation works

The screen is a scene in three parts: on the left, the container with its instruments and the controls; in the middle, the molecule model; on the right, the panel that explains what is happening and what the instruments measure. Below there is a strip of paper with the graph. In the header, the “Container” selector chooses between “Balloon”, the starting option, and “Rigid container”.

| Container | What the teacher controls | What it shows |
| --- | --- | --- |
| Balloon | “Temperature”, from 0 to 500 K (starting at 273 K), or from −273 to 227 °C with the K · °C selector. “Molecules”, from 0 to 500 (starting at 50). Both values can be typed in | A rubber balloon tied to a nozzle, with a thermometer (probe in the gas), a pressure gauge and a thermostat. The balloon grows or shrinks until inside and outside push equally: the pressure stays at 1 atm and what changes is the volume |
| Rigid container | The same controls plus “Volume”, from 0.09 to 4.60 L. It starts with the volume the balloon had (1.20 L) | A glass cylinder with the piston held in place, marked in litres. The volume only changes with the control: what changes is the pressure |
| ⚙ Settings | “Colour by speed” and “Show velocity (trails)”, on; “Average balloon size”, off; “Molecule size” (1–15, starting at 2); full screen and theme | Molecules from turquoise (slow) to pink (fast), with a trail showing where they are heading, and a dashed circle with the average size of the balloon |

Four elements support the explanation:

- **The molecule model.** It is an enlarged cross-section of the whole gas. Around the balloon you can also see the air outside, in grey: these are real molecules at 273 K that hit the rubber and push it inwards. Each collision with the wall leaves a short mark.
- **The panel on the right.** A label says what is happening (“BALANCE”, “INFLATING”, “DEFLATING”, “THE RUBBER PULLS”, “AT THE LIMIT”, “VACUUM”, “ABSOLUTE ZERO”, “VERY COLD”, “PRESSURE RISING”…) and below it explains it in one or two sentences. “What the instruments measure” gives pressure, volume, temperature and molecules; next to each value “· 2”, “/ 2” or “same” appears when it is compared with the previous situation. At the bottom, the collisions with the wall per second and V / T (balloon) or P · V and P / T (rigid).
- **The graph.** A selector chooses P–V, V–T or P–T. The pen marks a point when the gas has settled: it waits 5 s (rigid) or 7 s (balloon) after each change and records the average over the next 3 s. It keeps the last 35 points.
- **The key moment.** If, keeping everything else the same, a control is taken to double or half and the gas obeys the law, a stamp appears (“BOYLE’S LAW”, “CHARLES’S LAW”, “GAY-LUSSAC’S LAW”, “AVOGADRO’S LAW”) and the panel explains the law with the model. At 0 K “ABSOLUTE ZERO” appears.

There is also a help panel (“?”) with the key ideas and the four laws, and some optional challenges (“★ Challenges”) with an album of five stamps. Progress is saved only in that browser.

### The balloon, from start to finish

The balloon is the richest container for teaching. With 50 molecules at 273 K it takes up about 1.2 L. The rubber wobbles a little because there are few molecules and the collisions do not always arrive evenly; the panel explains this, and a real balloon, with billions of billions of molecules, does not wobble.

| Situation (273 K) | What happens | Pressure |
| --- | --- | --- |
| 0 molecules | “VACUUM”: the air outside squashes the balloon, which is left crumpled at the nozzle | 0 atm |
| 10 to 200 molecules | “BALANCE”: the volume is proportional to the number of molecules (about 0.3 L with 10 and about 4.6 L with 200) | about 1.0 atm |
| About 260 or more | “THE RUBBER PULLS”: the rubber, stretched tight, pulls inwards (arrows) and the balloon hardly grows. There is more pressure inside than outside | 1.3 atm with 300; 2.1 atm with 500 |
| Above 2.8 atm | “AT THE LIMIT”: the rubber is about to tear | 2.8–3 atm |
| More than 3 atm for 4 s | “IT HAS BURST!”: the rubber tears and the molecules escape into the air. “↺ New balloon” starts again | — |

At 273 K the balloon does not burst even with 500 molecules. It bursts if it is also heated: with 500 molecules it holds at 400 K (about 2.9 atm, “AT THE LIMIT”) and bursts above about 450 K; at 500 K it bursts with about 450 molecules.

### Reference values

Averages over 30 s with 50 molecules of size 2. They vary by a few hundredths from one run to another (in the balloon, by a tenth or so).

| Container | Situation | Volume | Pressure | Collisions/s |
| --- | --- | --- | --- | --- |
| Balloon | 100 K | 0.49 L | 1.07 atm | 43 |
| Balloon | 200 K | 0.90 L | 1.05 atm | 41 |
| Balloon | 273 K | 1.27 L | 1.08 atm | 40 |
| Balloon | 400 K | 1.75 L | 1.04 atm | 38 |
| Balloon | 500 K | 2.52 L | 1.00 atm | 37 |
| Balloon | 25 / 100 / 200 molecules | 0.61 / 2.45 / 4.58 L | 1.04 atm | 28 / 56 / 79 |
| Rigid | 136 / 200 / 273 / 400 / 500 K | 1.20 L | 0.49 / 0.75 / 1.03 / 1.61 / 1.85 atm | 38 / 46 / 55 / 67 / 72 |
| Rigid | 0.30 / 0.60 / 2.40 / 4.60 L | — | 4.42 / 2.28 / 0.50 / 0.24 atm | 199 / 102 / 32 / 22 |
| Rigid | 25 / 100 / 200 molecules | 1.20 L | 0.52 / 1.96 / 4.19 atm | 27 / 105 / 225 |

In the balloon, V / T is around 0.0047 L/K. In the 1.20 L rigid container, P / T is around 0.0037 atm/K, and P · V stays between 1.1 and 1.4 atm·L from 4.6 to 0.3 L.

## Use in each year group

In ESO 2 the simulation is used to present the kinetic model and the temperature scales; in ESO 3, for the gas laws; in ESO 4, for the concept of pressure and the combined gas law. The curriculum content quoted is from the LOMLOE Physics and Chemistry curriculum of the Community of Madrid (Spain), in our own translation.

### ESO 2: kinetic theory and temperature

*Ages 13–14 · Year 9 in the UK · 8th grade in the US*

**Curriculum content.** Block A: “the laboratory and virtual environments”. Block B: “Applying the kinetic-molecular theory to observations of matter, explaining its properties” and “Introduction to the kinetic-molecular theory. States of matter”. Block E: “Temperature. Temperature scales” and “Effects of heat on matter: changes of state and expansion”.

**Objectives.** Describe a gas as moving molecules with empty space between them. Relate temperature to the speed of the molecules. Convert between K and °C. Explain why a gas expands when heated.

**Teaching sequence (15–20 min).**

1. Starting set-up: balloon, 50 molecules, 273 K. Ask what there is between the molecules. Press “⏸ Pause”: the panel reminds you that there is nothing between them, not even air. Resume.
2. Switch the selector to °C: 273 K is 0 °C. Write T (K) = t (°C) + 273 on the board. The ends of the control change to −273 °C and 227 °C.
3. Go up to 500 K. The molecules move faster and change from turquoise to pink; the panel says “INFLATING” and the balloon grows to about 2.5 L. The molecules stay the same size: the key idea in the help panel.
4. Go down to 100 K: “DEFLATING”, about 0.5 L. Link it to the expansion of gases.
5. Go down to 0 K: the molecules stop, the pressure reads 0 atm and the air outside squashes the balloon against them. Present absolute zero as the lower limit of the Kelvin scale.

### ESO 3: the gas laws

*Ages 14–15 · Year 10 in the UK · 9th grade in the US*

**Curriculum content.** Block A: “Using a range of scientific learning environments and resources, such as the laboratory or virtual environments” and “Recording data and results using tables, graphs and mathematical expressions”. Block B: “Further study of the kinetic-molecular model of matter and its relationship with changes of state. The gas laws. Kinetic-molecular model of matter”.

**Objectives.** Interpret pressure as the effect of the molecules hitting the walls. Predict how pressure and volume change when temperature, volume and number of molecules are varied. Explain each gas law with the kinetic model.

**Teaching sequence (15–20 min).**

1. Balloon at 273 K: explain the balance with the panel. Inside, the molecules push the rubber; outside, the air pushes just as hard (1 atm).
2. Charles’s law: go from 200 K to 400 K and wait. The balloon goes from about 0.9 L to about 1.8 L and the “CHARLES’S LAW” stamp appears. Choose the V–T graph: the points lie on a straight line pointing at the origin.
3. Avogadro’s law: go back to 273 K and go from 50 to 100 molecules. The volume doubles (from 1.2 to 2.4 L) and the pressure returns to 1 atm.
4. Switch to “Rigid container”. Gay-Lussac’s law: from 200 K to 400 K the pressure goes from about 0.75 to about 1.6 atm, with P / T almost constant. Boyle’s law: from 1.20 to 0.60 L the pressure goes from 1 to about 2.3 atm; the panel shows “· 2” and draws where the piston was.
5. Finish with a table on the board: which variable is fixed, which is changed and what happens, and with the common idea: more collisions, or harder collisions, means more pressure.

### ESO 4: pressure and the combined gas law

*Ages 15–16 · Year 11 in the UK · 10th grade in the US*

**Curriculum content.** Block B: “Material systems: solving problems and a variety of learning situations involving solutions and gases” and “Gases. The combined gas law”. Block D: “Forces and pressure in fluids: effects of forces and pressure on liquids and gases” and “The concept of pressure”.

**Objectives.** Explain the pressure of a gas as the result of many collisions spread over the whole wall. Relate pressure, volume, temperature and amount of gas at the same time. Tell the pressure of the gas apart from the force exerted by an elastic wall.

**Teaching sequence (15–20 min).**

1. Balloon with 50 molecules: the balloon is round because the collisions push equally in all directions. Turn on “Average balloon size” to see that the wobble is around a fixed size.
2. Rigid container with the P–V graph: 0.6, 1.2, 2.4 and 4.6 L. The points trace a hyperbola and P · V stays around 1.2–1.4 atm·L (Boyle’s law).
3. At 2.40 L, raise the temperature to 500 K and then the molecules to 100. Write P · V / T = constant and reason through each change with the model: harder collisions, more collisions.
4. Go back to the balloon and raise it to 500 molecules. From about 260, “THE RUBBER PULLS”: the stretched rubber exerts an inward force, and that is why the pressure inside rises above 1 atm (about 2.1 atm with 500).
5. Heat that balloon: at 400 K “AT THE LIMIT” and at about 450 K it bursts. Link it to why closed containers must not be heated.

### Bachillerato 1: qualitative review

*Ages 16–17 · Year 12 in the UK · 11th grade in the US*

The simulation can be used for review when dealing with “Ideal gas laws. Molar volume. Normal or standard conditions for a gas” (block B) and “Internal energy of a system” (block F). It helps to link temperature with the mean kinetic energy of the molecules and pressure with collisions, and to discuss fluctuations: with N molecules, the volume of the balloon fluctuates by around 1/√N (about 15 % with 50). But it is not suitable for P · V = n · R · T with numbers: its units are scaled.

## Misconceptions it helps to address

The simulation mainly tackles the idea of a gas as continuous and static, the confusion between properties of the gas and properties of its molecules, and the idea that a balloon inflates because the rubber pushes. Each row gives a common prior idea and how to break it down with the simulation.

| Students’ idea | Correct idea | How to show it |
| --- | --- | --- |
| “There is air between the molecules of the gas” | There is empty space between the molecules | 10 molecules and “⏸ Pause”: almost all the balloon is empty, and the panel says so |
| “When a gas is heated, its molecules get bigger” | The molecules do not change; they move faster and collide more | Balloon from 100 to 500 K: the balloon grows and the molecules stay the same size |
| “When a gas is compressed, the molecules shrink” | The space between them is reduced, not their size | Rigid container from 2.40 to 0.30 L: same molecule size, more crowded and more collisions |
| “A gas only pushes downwards, because of its weight” | Pressure comes from collisions in all directions | The balloon is round and the collision marks appear all around its edge |
| “A balloon inflates because the rubber pushes outwards” | The rubber pulls inwards; what pushes outwards is the gas | Balloon with 500 molecules: the “THE RUBBER PULLS” arrows point towards the centre |
| “Inside an inflated balloon the pressure is the same as outside” or “it is always higher” | While the rubber is slack, the pressure inside equals the pressure outside (1 atm); only when the rubber pulls is it higher | Balloon from 50 to 200 molecules: 1 atm; with 500, about 2.1 atm |
| “An empty balloon is just full of nothing and stays the same” | With no gas inside, the air outside squashes it | Go down to 0 molecules: “VACUUM” |
| “All the molecules of a gas move at the same speed” | At a given temperature there are slow and fast molecules | “Colour by speed”: turquoise and pink molecules side by side |
| “Heating a gas makes more gas” | The number of molecules does not change when it is heated | Rigid container from 273 to 500 K: there are still 50 and the pressure rises |

## Simplifications worth knowing

The simulation gives priority to the relationship between collisions and pressure, and to do this it simplifies the geometry, the units and the calculation. It is worth knowing these liberties so as not to reinforce wrong ideas by accident.

1. **The gas is two-dimensional.** The molecules move in a plane and the “volume” is the area of the drawing, converted to litres in direct proportion. The “pressure” is force per unit length of wall. Even so, P · V, V / T and P / T behave as in a real gas.
2. **Pressure is an average.** The collisions with the wall over the last 3 s are added up. After a change you need to wait a few seconds for it to settle; the graph does this by itself.
3. **Few molecules, lots of wobble.** With 50 molecules the balloon fluctuates by about ±15 %. That is why “INFLATING” and “DEFLATING” only appear after a control has been moved, and why the law stamps are checked with a longer average.
4. **The air outside is real, but has few molecules.** Around it, the edge of the viewer acts as the rest of the atmosphere: molecules come in or go out so that outside there is always 1 atm and 273 K. The air does not warm up when the gas in the balloon is heated.
5. **The rubber only pulls at the end.** Up to about 5.5 L the rubber exerts no force and the pressure inside is 1 atm; a real balloon already pulls a little from the start. From then on it pulls harder and harder, and it bursts at 3 atm sustained for 4 s.
6. **The units are scaled.** The pressure factor and the conversion to litres are chosen to give reasonable figures: 1 atm, 1.2 L and 273 K would correspond to about 0.05 mol, not 50 molecules. The numbers are for comparing, not for applying P · V = n · R · T.
7. **The thermostat keeps the temperature.** When it changes, the speed of every molecule is multiplied by √(new T / previous T). There is no cooling on expansion: all processes are isothermal unless the temperature is moved. The conversion uses 273, not 273.15.
8. **Absolute zero is classical.** At 0 K the molecules stop completely and the pressure is 0 atm. Below 80 K the panel warns that a real gas would already be liquid: this model is an ideal gas.
9. **The molecules have a size.** With the starting size (2) it hardly matters; with very small volumes or large molecules the pressure rises a little more than Boyle’s law says (P · V goes from 1.2 to 1.4 atm·L between 1.2 and 0.3 L). For measuring laws it is best not to increase the size.

## Student activity worksheet

The [activity worksheet](https://simulaciencia.es/en/worksheets/gases/) follows a predict, observe and explain structure. Each activity links to the simulation already set up, so it works in the computer room, with tablets or as homework. It downloads in Word and LibreOffice formats so it can be adapted.

| Year group | Activities | Suggested time |
| --- | --- | --- |
| ESO 3 (Year 10) | Before you start, activities 1 to 6, Apply what you have learnt, Review your ideas and Self-assessment | One 50–55 minute lesson, or two if the problems are done in class |
| ESO 4 (Year 11) | Activities 2, 5, 7 and 8, Apply what you have learnt and Going further | One lesson |
| Bachillerato 1 (Year 12) | Activities 5, 7 and 8 and Going further, as qualitative revision | 20–25 minutes |

The “Before you start” table collects six prior ideas about gases. It is best not to correct it at the beginning: students come back to it in “Review your ideas”. The values in the simulation vary by a few hundredths (in the balloon, by a tenth or so) from one run to another; the answers give approximate values.

### Answers

| Section | Answer |
| --- | --- |
| Before you start | All false. a) Between the molecules there is empty space (activity 1). b) The molecules do not change size; they move faster (activity 3). c) The space between them is reduced (activity 5). d) The gas pushes equally in all directions: the balloon is round (activity 1). e) The molecules never stop moving (activity 1). f) The rubber pulls inwards; it is the gas that pushes (activity 7) |
| Activity 1 | The molecules take up a very small part; almost everything is empty space. They move in straight lines, in all directions, until they collide. When they hit the wall they push it and bounce back. The balloon does not go down because the collisions push the rubber from inside just as the air pushes it from outside |
| Activity 2 | 50 molecules: about 55 collisions/s and 1.0 atm. 100: about 105 collisions/s and 2.0 atm. 200: about 225 collisions/s and 4.2 atm. The pressure is proportional to the number of collisions per second |
| Activity 3 | The volume grows with temperature: about 0.5 L at 100 K, 0.9 L at 200 K, 1.8 L at 400 K. V / T ≈ 0.0045–0.005 L/K: Charles’s law. The molecules change from turquoise to pink: they move faster and push the rubber harder, and it gives way. They do not change size |
| Activity 4 | The volume does not change (1.20 L). P ≈ 0.75 atm at 200 K, ≈ 1.0 atm at 273 K and ≈ 1.6 atm at 400 K; P / T ≈ 0.0037–0.004 atm/K (Gay-Lussac’s law). The gas left in the can increases its pressure when heated and can burst it |
| Activity 5 | P ≈ 2.3 atm at 0.6 L, ≈ 1.0 atm at 1.2 L, ≈ 0.5 atm at 2.4 L and ≈ 0.24 atm at 4.6 L. P · V stays at about 1.1–1.4 atm·L: Boyle’s law. The molecules do not shrink: there is less space between them and they hit the wall more often |
| Activity 6 | With 50 molecules, about 1.2 L; with 100, about 2.4 L; with 25, about 0.6 L. The pressure stays at 1 atm: the balloon grows until there are as many collisions per unit of wall as before (Avogadro’s law). With 0 molecules, the air outside squashes the balloon: “VACUUM” |
| Activity 7 | Up to about 250 molecules, 1 atm. With 300, about 1.3 atm; with 500, about 2.1 atm. The arrows point inwards: the stretched rubber pulls towards the centre and, together with the air outside, holds a higher pressure inside |
| Activity 8 | At 400 K, “AT THE LIMIT” (about 2.9 atm). Above about 450 K the balloon bursts. When heated, the molecules hit harder; the rubber can no longer stretch enough and the pressure rises until it tears (Gay-Lussac’s law in an almost rigid balloon) |
| Apply what you have learnt | 1) Boyle: P₂ = 1 atm · 4 L / 1 L = 4 atm. 2) Gay-Lussac: P₂ = 1 atm · 450 K / 300 K = 1.5 atm. 3) Charles: V₂ = 2 L · 360 K / 300 K = 2.4 L. 4) Friction warms the air in the tyres; its molecules move faster and hit the walls more often and harder, and the walls hardly change in volume |
| Going further | 1) A hyperbola: P falls as V increases. 2) P · V / T comes out approximately the same, with differences of a few hundredths |
