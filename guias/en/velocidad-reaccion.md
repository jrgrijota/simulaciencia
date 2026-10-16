# Teacher guide: rate of reaction simulation

## Quick reference

The simulation shows the reaction A + B → C as collisions between molecules that have an orientation, and lets you vary the temperature, the number of molecules and the catalyst. Its main use is in ESO 4 (Year 11 in the UK, 10th grade in the US), with applications in ESO 3 and Bachillerato 2 Chemistry.

| Item | Details |
| --- | --- |
| Link | [jrgrijota.github.io/simulacion-velocidad-reaccion](https://jrgrijota.github.io/simulacion-velocidad-reaccion/) |
| Year groups | ESO 4 (main use), ESO 3, Bachillerato 2 Chemistry; occasional use in ESO 2 and Bachillerato 1 |
| Subject | Physics and Chemistry; Chemistry in Bachillerato 2 |
| Suggested time | 15–20 minutes of explanation with the simulation projected |
| Equipment | Projector or interactive whiteboard; runs in the browser, also on phones and tablets, with nothing to install |
| Prior knowledge | The particle model, reactants and products, temperature as a measure of how agitated the particles are |
| Accessibility | Dark, light and high-contrast themes (gear button, “Appearance”) |

## How the simulation works

The simulation has three modes, chosen in the “Mode” card: “Reaction mode”, “Comparison mode” and “Collision mode”. The first two show a chamber with molecules A (blue), B (orange), product C (green) and catalyst K (violet). Below it is the “RATE OF REACTION (reactions per simulated s)” graph.

| Mode | What the teacher controls | What it shows |
| --- | --- | --- |
| Reaction mode | “Temperature” from 1 to 10 (it starts at “Normal (4)”), “Molecules A (reactant)” and “Molecules B (reactant)” from 4 to 30 (they start at 16) and “Catalysts” from 0 to 6 (it starts at 0). “⏸ Pause” and “↺ Restart” buttons | A chamber with the counts of A, B, C and K, the thermal and catalysed reactions (“Therm.” and “Cat.”), the percentage “conversion”, the speed curve and the rate of reaction graph |
| Comparison mode | “Variable to compare”: “Presence of catalyst” (0 against 4, range 0–6), “Energy (temperature)” (2 against 8, range 1–10) or “Number of molecules” (8 against 24, range 4–30, equal numbers of A and B). The other two variables are set with the “Parameters” sliders | Two chambers, “◀ Left” and “▶ Right”, with the two curves overlaid on the graph. When one chamber uses up the limiting reactant, it pauses and shows the percentage conversion for each |
| Collision mode | The orientation of each molecule, by dragging with the mouse or a finger. “Collision energy” from 1 to 10 (it starts at 5). “▶ Launch” and “↺ Reset” buttons | Two large molecules colliding head-on. A panel says “✓ SUCCESSFUL COLLISION” or “✗ UNSUCCESSFUL COLLISION” and whether there was “Enough energy” and “Correct orientation” |

Four elements support the explanation:

- **The reactive site.** Each A and each B has a highlighted light end. The thermal reaction only happens if the two reactive sites touch in the collision.
- **The speed inset.** At the top right of each chamber is “Relative speed of collisions (T = 4)”. It draws how the relative speeds of pairs of molecules are distributed, a dashed red “Ea” line and, in green, the part above it: the collisions with enough energy.
- **The rate of reaction graph.** It counts the reactions in the last second of simulation (60 steps) and keeps the last 90 values. In comparison mode it overlays the two chambers in their colours, and the statistics in the panel are given per chamber: “left | right”.
- **The percentage conversion.** At the bottom right of each chamber it shows what part of the limiting reactant has reacted.

The “How does it work?” drop-down, closed at the start, summarises the thermal pathway, the catalysed pathway and comparison mode. The “Key” card identifies the colours, the reactive site and the reaction flash.

## Use in each year group

In ESO 3 the simulation is used to see the effect of temperature and concentration qualitatively. In ESO 4 it supports collision theory and the factors that affect the rate. In Bachillerato 2 Chemistry it links collision theory with activation energy, the Arrhenius equation and catalysts. The curriculum content quoted is from the LOMLOE curriculum of the Community of Madrid (Spain), in our own translation.

The reaction figures are approximate. The simulation is random and the number of reactions depends on the screen size. The values given correspond to a typical laptop screen.

### ESO 2: occasional use

*Ages 13–14 · Year 9 in the UK · 8th grade in the US*

There is no content on rate of reaction. “Collision mode” can illustrate “Physical and chemical changes in material systems” and “Introduction to chemical reactions” (block C). With the starting values, “▶ Launch” gives a successful collision and C appears, made of the atoms of A and B. That is enough to show that a reaction rearranges atoms and forms a new substance.

### ESO 3: temperature and concentration

*Ages 14–15 · Year 10 in the UK · 9th grade in the US*

**Curriculum content.** Block C: “Microscopic interpretation of chemical reactions”, “Analysis of the factors that affect chemical reactions: qualitative prediction of how reactions will proceed” and “Qualitative analysis of the influence of temperature and concentration on a chemical reaction”. Block B: “Kinetic-molecular model of matter”. Block A: “Using a range of scientific learning environments and resources, such as the laboratory or virtual environments”.

**Objectives.** Interpret a reaction as collisions between particles that rearrange their atoms. Predict qualitatively the effect of temperature and concentration. Relate temperature to the speed of the particles.

**Teaching sequence (15–20 min).**

1. Reaction mode with the starting values: “Normal (4)”, 16 A, 16 B and 0 catalysts. Open “Key” and point out A, B, C and the reactive site. Ask whether they react every time they collide.
2. Let it run for a minute. There are many collisions and few flashes: the “Reactions” counter usually ends up between 5 and 8. Conclude that not every collision produces a reaction.
3. Pause and point to a C molecule: it has two blue atoms from A and two orange ones from B. The atoms are rearranged; they do not appear or disappear.
4. Switch to Comparison mode and choose “Energy (temperature)”: it sets T = 2 against T = 8. Ask for a prediction. After a minute, the chamber at T = 8 usually has about 12 reactions against about 7.
5. Choose “Number of molecules”: it sets 8 A + 8 B against 24 A + 24 B in identical chambers. After a minute there are usually about 4 reactions against about 17. More particles in the same space collide more often.
6. Finish with two rules: the higher the temperature and the higher the concentration, the faster the reaction. An everyday example: the fridge keeps food fresh because it slows down its reactions.

### ESO 4: collision theory and factors

*Ages 15–16 · Year 11 in the UK · 10th grade in the US*

**Curriculum content.** Block C: “Factors that affect the rate of chemical reactions: understanding how atoms are rearranged by applying models such as collision theory, and making predictions about the most important everyday chemical processes”. Also “An approach to the concept of rate of chemical reaction”, “Mechanism of chemical reactions” and “Factors that affect the rate of a chemical reaction”.

**Objectives.** State the two conditions for a successful collision: enough energy and the right orientation. Explain the effect of temperature, concentration and a catalyst using those conditions. Interpret the rate of reaction as reactions per unit time.

**Teaching sequence (15–20 min).**

1. Collision mode with the starting values: the two reactive sites face each other. Press “▶ Launch”: “✓ SUCCESSFUL COLLISION” and C appears.
2. Press “↺ Reset” and drag A so that its reactive site points upwards (about 90°). Launch: “✗ UNSUCCESSFUL COLLISION”, with “Correct orientation: No ✗”. Define the orientation condition.
3. Press “↺ Reset”, leave the starting orientation and lower “Collision energy” to 3. Launch: “✗ UNSUCCESSFUL COLLISION”, with “Enough energy: No ✗”. Raise it to 4 and launch: successful. Define the energy condition: Ea corresponds to level 4.
4. Switch to Reaction mode and point to the “Relative speed of collisions (T = 4)” inset: what is green, to the right of “Ea”, are the collisions with enough energy. Move “Temperature” from 1 to 10: the curve widens to the right and the green area goes from about 12 % at T = 1 to about 81 % at T = 10.
5. Comparison mode with “Presence of catalyst” (the starting variable: 0 against 4). The chamber with 4 catalysts usually uses up the reactant in 15–25 s. The simulation pauses and the other chamber is usually below 50 %.
6. Point out that the count “K: 4” does not change: the catalyst is not used up. Read the graph: each peak is reactions per second, and the rate falls as the reactants run out.

### Bachillerato 1: occasional review

*Ages 16–17 · Year 12 in the UK · 11th grade in the US*

There is no content on kinetics. The simulation can support the content “Limiting reactant and reactant in excess” (block B). In Reaction mode with 16 A, 10 B and 4 catalysts, the reaction stops at 10 molecules of C. There are 6 A left unreacted and the “conversion” reads 100 %, because it is calculated with respect to the limiting reactant.

### Bachillerato 2 Chemistry: chemical kinetics

*Ages 17–18 · Year 13 in the UK · 12th grade in the US*

**Curriculum content.** Block B, 2. Chemical kinetics: “Concepts of rate of reaction”, “Collision theory as a microscopic-scale model of chemical reactions. Transition state theory. Activation energy”, “Influence of the reaction conditions on the rate of reaction. The Arrhenius equation” and “Use of catalysts in industrial processes”.

**Objectives.** Interpret the factors in the Arrhenius equation, k = A·e^(−Ea/RT), using collision theory. Relate the rate to the concentration of the reactants. Explain the action of a catalyst as an alternative mechanism.

**Teaching sequence (15–20 min).**

1. Reaction mode, “Temperature” at 4. In the inset, the green fraction of collisions with enough energy is e^(−2.1/T): 59 % at T = 4. Compare it with the Arrhenius factor e^(−Ea/RT).
2. Go through T = 1, 2, 4 and 10: the fraction is 12 %, 35 %, 59 % and 81 %. The typical speed only increases by a factor of 3.2 between T = 1 and T = 10. Conclude that temperature acts mainly through the fraction that exceeds Ea.
3. Collision mode: rotate A by about 90° and launch. The collision is unsuccessful even though there is “Enough energy: Yes ✓”. Introduce the steric factor included in the pre-exponential factor A.
4. Comparison mode, “Number of molecules” (8 against 24). With v = k[A][B], tripling both concentrations multiplies the initial rate by 9. Check on the graph that the right-hand curve is much higher.
5. Reaction mode with 30 A, 30 B and 4 catalysts. The graph starts at 2–4 reactions/s and falls towards 0 in about 20–30 s. The rate decreases as the concentrations fall, as the rate law predicts.
6. Comparison mode, “Presence of catalyst”. Explain that the catalyst offers another pathway and comes out unchanged. Add that here it removes the barrier, whereas a real catalyst lowers it. Mention the Haber–Bosch process.

## Misconceptions it helps to address

The simulation mainly tackles the idea that it is enough for particles to collide for them to react. Each row gives a common prior idea and how to break it down with the simulation.

| Students' idea | Correct idea | How to show it |
| --- | --- | --- |
| “Whenever two reactants collide, they react” | Only a small fraction of collisions produce a reaction | Reaction mode with the starting values: many collisions and, in a minute, only about 5–8 reactions on the “Therm.” counter |
| “If the collision is very hard, there is always a reaction” | The right orientation is also needed | Collision mode, “Collision energy” at 10 and A rotated by 180°: “✗ UNSUCCESSFUL COLLISION” with “Enough energy: Yes ✓” |
| “When heated, all the molecules move at the same speed, just faster” | There is a distribution of speeds; heating widens it | Reaction mode: move “Temperature” from 1 to 10 and watch the curve in the speed inset widen |
| “Temperature speeds up the reaction only because there are more collisions” | The main effect is that more molecules exceed the activation energy | Speed inset: the green area goes from 12 % (T = 1) to 81 % (T = 10), much more than the speed (×3.2) |
| “The catalyst is used up or becomes part of the product” | The catalyst is recovered unchanged and acts again | Reaction mode with 4 catalysts: the count “K: 4” does not change and C only has atoms from A and B |
| “With a catalyst you get more product” | The catalyst only speeds things up; the product is limited by the limiting reactant | Reaction mode with 16 A, 10 B and 4 catalysts: C stops at 10, in less than half a minute; without a catalyst it would take much longer, but the limit would be the same |
| “The rate of reaction is constant until it runs out” | The rate decreases as the reactants are used up | Reaction mode with 30 A, 30 B and 4 catalysts: the graph starts at 2–4 reactions/s and falls towards 0 in about 20–30 s |

## Simplifications worth knowing

The simulation puts the two conditions for a successful collision first, and to do so it simplifies the energy, the catalyst and the scale. It is worth knowing about these liberties so as not to reinforce wrong ideas by accident.

1. **The activation energy is a speed threshold.** An A and a B react if their relative speed exceeds 5.8 px per frame. Their reactive sites must also end up less than 11 px apart. Kinetic energy is not calculated and the component along the line of collision is not used. In Bachillerato 2 it is worth saying so.
2. **The inset counts pairs, not collisions.** It draws the relative speed of a random pair of molecules, which is what the reaction compares with Ea. But fast pairs collide more often, so among the collisions that actually happen the fraction with enough energy is somewhat larger than the green area.
3. **The distribution is two-dimensional.** The molecules move in a plane and the curve is f(v) ∝ v·e^(−v²/2σ²), with σ = 2·√(2T) for the relative speed (2·√T for each molecule). It is not the three-dimensional Maxwell–Boltzmann distribution. Its qualitative shape is correct, though.
4. **Temperature is a scale from 1 to 10.** They are not kelvin or degrees Celsius. The speed grows with √T, consistent with a mean kinetic energy proportional to T. It is best not to convert the levels into real temperatures.
5. **The catalyst removes the barrier.** It attracts A and B from 115 px away and holds them in its two cavities. After 28 frames they react, with no energy or orientation requirement. A real catalyst lowers the activation energy; it does not remove it. That is why the catalysed pathway hardly depends on temperature.
6. **The reaction is irreversible, with no energy exchange.** C never breaks down into A and B and no heat is released or absorbed. It cannot be used to explain chemical equilibrium or exothermic reactions.
7. **Concentration is the number of molecules in the chamber.** The size of the chamber depends on the screen. In comparison mode each chamber is half the size, so 16 molecules mean twice the concentration. The figures change between a laptop and a projector.
8. **Simulation seconds.** The rate is measured in reactions per 60 frames, a “simulation second”. On a slow computer the animation runs more slowly, but the figures are the same; the graph and the help say so. With so few molecules the values are small, very irregular whole numbers.
9. **In Collision mode the energy is a step.** Each molecule is launched at 1.5·√E, so the relative speed exceeds the 5.8 threshold from level 4 upwards (level 3: 5.2; level 4: 6.0). There is no distribution of speeds: it is a single collision with a fixed energy.
