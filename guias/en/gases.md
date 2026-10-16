# Teacher guide: gases simulation

## Quick reference

The gases simulation shows particles colliding with the walls of an elastic balloon or a rigid container, and turns those collisions into pressure and volume. Its main use is in ESO 3 (Year 10 in the UK, 9th grade in the US), with applications in ESO 2 and ESO 4 and a qualitative review in Bachillerato 1.

| Item | Details |
| --- | --- |
| Link | [jrgrijota.github.io/simulacion-gases](https://jrgrijota.github.io/simulacion-gases/) |
| Year groups | ESO 3 (main use), ESO 2, ESO 4; qualitative review in Bachillerato 1 |
| Subject | Physics and Chemistry |
| Suggested time | 15–20 minutes of explanation with the simulation projected |
| Equipment | Projector or interactive whiteboard; runs in the browser, also on phones and tablets, with nothing to install |
| Prior knowledge | The idea of a particle, temperature in K and °C, volume in litres; in ESO 4, pressure as force per unit area |
| Accessibility | Dark theme only. Configurable particle and membrane colours and a “Full screen” option in “⚙ Display Settings” |

## How the simulation works

The screen has a left-hand control panel and a central canvas with the gas. The “Container behaviour” drop-down chooses between “Flexible Membrane (Balloon)”, the starting option, and “Rigid Wall (Fixed)”. Above the canvas are the “⏸ Pause” and “⚙ Display Settings” buttons; the latter opens a side drawer.

| Mode | What the teacher controls | What it shows |
| --- | --- | --- |
| Flexible Membrane (Balloon) | “Number of particles”, from 1 to 500 (starting at 50, ±5 buttons). “Temperature”, from 0 to 500 K (starting at 273 K, ±10 buttons), or from −273 to 227 °C with the K/°C switch | A red balloon that deforms with every collision and a dashed green line showing its average radius. Pressure and volume change together |
| Rigid Wall (Fixed) | The same controls plus the “Wall Radius (R)” buttons (in steps of 5 px, between 30 and 210 px). The container starts at the average size the balloon had | A light blue circle that only changes size with those buttons: at a fixed radius the volume is constant and only the pressure changes |
| Display Settings | “Particle size” (1–15 px, starting at 3 px), colours, “Colour by speed” (on), “Show P-V graph” (off), “Full screen” | Particles from blue (slow) to red (fast) and a P-V graph in the bottom left corner, with P in atm and V in L starting from 0 |

Three elements support the explanation:

- **The “Physical Data” cards.** They show “Pressure (P)” in atm and “Volume (V)” in L, to two decimal places. At the start they are around 1.6 atm and 0.8 L; they vary a little from one load to the next because the initial speeds are random. The pressure fluctuates because it is recalculated every second.
- **“System monitoring”.** This drop-down shows the “Collision frequency” in collisions/s and the “Total collisions”. The pressure adds up the impulse of each collision with the wall (2 · perpendicular velocity) over one second and divides it by the perimeter: it counts how many collisions there are and how hard they are. With 50 particles at 273 K there are about 50 collisions/s.
- **Colour by speed.** At the same temperature, blue and red particles coexist. Collisions between particles share out the energy and widen the range of speeds.

The simulation has no help panel or key concepts panel: the explanation is up to the teacher.

## Use in each year group

In ESO 2 the simulation is used to present the kinetic model and the temperature scales; in ESO 3, for the gas laws; in ESO 4, for the concept of pressure and the combined gas law. The curriculum content quoted is from the LOMLOE Physics and Chemistry curriculum of the Community of Madrid (Spain), in our own translation.

### ESO 2: kinetic theory and temperature

*Ages 13–14 · Year 9 in the UK · 8th grade in the US*

**Curriculum content.** Block A: “the laboratory and virtual environments”. Block B: “Applying the kinetic-molecular theory to observations of matter, explaining its properties” and “Introduction to the kinetic-molecular theory. States of matter”. Block E: “Temperature. Temperature scales” and “Effects of heat on matter: changes of state and expansion”.

**Objectives.** Describe a gas as moving particles with empty space between them. Relate temperature to the speed of the particles. Convert between K and °C. Explain why a gas expands when heated.

**Teaching sequence (15–20 min).**

1. Starting set-up: balloon, 50 particles, 273 K. Ask what there is between the particles. Press “⏸ Pause” and point out the empty space. Carry on with “▶ Resume”.
2. Turn on the K/°C switch: 273 K becomes 0 °C. Write T (K) = t (°C) + 273 on the board. The ends of the slider change to −273 °C and 227 °C.
3. Lower the temperature to 0 K (−273 °C). The particles stop and the pressure reads 0.00 atm. Present absolute zero as the lower limit of the Kelvin scale.
4. Raise it to 500 K. The particles move faster and more of them are red. The balloon grows and the volume goes from about 0.70 L at 0 K to about 0.90 L.
5. Go back to 100 K: the balloon shrinks to about 0.75 L. Relate this to expansion: when heated, the particles do not get bigger; they move more and push harder on the wall.

### ESO 3: the gas laws

*Ages 14–15 · Year 10 in the UK · 9th grade in the US*

**Curriculum content.** Block A: “Using a range of scientific learning environments and resources, such as the laboratory or virtual environments” and “Recording data and results using tables, graphs and mathematical expressions”. Block B: “Further study of the kinetic-molecular model of matter and its relationship with changes of state. The gas laws. Kinetic-molecular model of matter”.

**Objectives.** Interpret pressure as the effect of the particles colliding with the walls. Predict how pressure and volume change when the temperature and the number of particles vary. Explain each gas law with the kinetic model.

**Teaching sequence (15–20 min).**

1. In “⚙ Display Settings”, lower “Particle size” to 2 px: the gas gets closer to an ideal gas. Open “System monitoring” and relate the pressure to the collision frequency.
2. With the balloon, go down to 100 K and then up to 500 K. The volume goes from about 0.74 L to about 0.86 L. Charles's law, qualitatively: the higher the temperature, the larger the volume (see simplification 4).
3. Go back to 273 K, wait a few seconds and choose “Rigid Wall (Fixed)”. The volume stays fixed at around 0.8 L and the pressure is around 1.5 atm. Raise it to 500 K: the pressure rises to about 2.7 atm. Lower it to 125 K: about 0.7 atm. Gay-Lussac's law: P / T stays the same, about 0.0055 atm/K in all three cases.
4. Go back to 273 K and change from 50 to 100 particles. The pressure doubles, from about 1.6 to about 3.4 atm. Ask why: twice as many particles give twice as many collisions per second.
5. Finish with a table on the board: which variable is fixed, which one is changed and what happens. With 2 px the proportions also hold, with a few tenths of noise.

### ESO 4: pressure and the combined gas law

*Ages 15–16 · Year 11 in the UK · 10th grade in the US*

**Curriculum content.** Block B: “Material systems: solving problems and a variety of learning situations involving solutions and gases” and “Gases. The combined gas law”. Block D: “Forces and pressure in fluids: effects of forces and pressure on liquids and gases” and “The concept of pressure”.

**Objectives.** Explain the pressure of a gas as the result of many collisions spread over the whole wall. Relate pressure, volume, temperature and amount of gas at the same time. Recognise Boyle's law in a larger container.

**Teaching sequence (15–20 min).**

1. Starting set-up with “Particle size” at 2 px. Show that the balloon is pushed out equally in all directions: pressure acts on the whole wall, not just downwards.
2. Choose “Rigid Wall (Fixed)”. The “Wall Radius (R)” control appears, about 90 px, with V ≈ 0.8 L and P ≈ 1.6 atm. Calculate P · V ≈ 1.3 atm·L.
3. Use the “+” button to take the radius to 150 px: V ≈ 2.3 L and the pressure drops to about 0.56 atm. P · V again comes out at about 1.3 atm·L.
4. Use “−” to go down to 60 px: V ≈ 0.37 L and P ≈ 3.8 atm, with P · V ≈ 1.4 atm·L. Boyle's law: at constant temperature P · V stays the same; the differences of a few tenths are measurement noise.
5. Go back to 150 px and raise it to 500 K: the pressure goes up to ~1.0 atm. Then increase to 100 particles: it goes up again. Write P · V / T = constant and reason through each change with the model.

### Bachillerato 1: qualitative review

*Ages 16–17 · Year 12 in the UK · 11th grade in the US*

The simulation can be used for review when dealing with “Ideal gas laws. Molar volume. Normal or standard conditions for a gas” (block B) and “Internal energy of a system” (block F). It helps to link temperature with the mean kinetic energy of the particles and pressure with collisions. With a rigid wall and 2 px, P · V stays the same and P is proportional to T, with a few tenths of noise. But it cannot be used for P · V = n · R · T with numbers: its units are scaled.

## Misconceptions it helps to address

The simulation mainly tackles the idea of a gas as continuous and static, and the confusion between properties of the gas and properties of its particles. Each row gives a common prior idea and how to break it down with the simulation.

| Students' idea | Correct idea | How to show it |
| --- | --- | --- |
| “There is air between the particles of a gas” | There is empty space between the particles | 10 particles at 273 K and “⏸ Pause”: almost all of the balloon is empty |
| “When a gas is heated, its particles get bigger” | The particles do not change; they move faster and collide more | Balloon from 100 to 500 K: the balloon grows and the particles stay the same size |
| “When a gas is compressed, the particles shrink” | The space between them is reduced, not their size | Rigid container at 150 px and then at 60 px (ESO 4 sequence): same particle size, more crowded together |
| “A gas only pushes downwards, because of its weight” | Pressure is due to collisions in all directions | Balloon with 200 particles: the membrane bulges out equally all the way round |
| “All the particles of a gas move at the same speed” | At a given temperature there is a distribution of speeds | 100 particles at 273 K with “Colour by speed”: blue and red ones coexist |
| “Each particle has its own temperature” or “the particles get hot” | Temperature measures the mean kinetic energy of the whole collection | Pause at 273 K and point out particles of different colours in the same gas |
| “When you heat a gas there is more gas” | The number of particles does not change when heated | Rigid container from 273 to 500 K: the counter stays at 50 and the pressure rises |

## Simplifications worth knowing

The simulation puts the relationship between collisions and pressure first, and to do so it simplifies the geometry, the units and the calculation. It is worth knowing about these liberties so as not to reinforce wrong ideas by accident.

1. **The gas is two-dimensional.** The particles move in a plane and the “volume” is the area of the circle, converted to litres in direct proportion (5 L for a radius of 220 px). The “pressure” is force per unit length of the boundary. Even so, P · V and P / T behave as they do in a real gas.
2. **Pressure is measured every second.** The impulse of the collisions with the wall is added up over one second, so it fluctuates by a few tenths. With few particles it is best to read several values and take the mean.
3. **The units are scaled.** The pressure factor and the conversion to litres are chosen to give reasonable figures. With 1.6 atm, 0.8 L and 273 K you would get about 0.06 mol, not 50 particles. The numbers are for comparison, not for applying P · V = n · R · T.
4. **The balloon is a spring with no outside atmosphere.** The membrane is 60 nodes joined by springs, with a rest radius of 90 px. At 0 K the balloon does not empty: it stays at about 0.70 L. From 100 to 500 K the volume only grows from about 0.75 to 0.90 L, while the pressure inside almost quadruples: the membrane is very stiff. Charles's law can be seen in its direction, not in its proportion.
5. **Temperature rescales the speeds.** Each particle starts with a random speed between 1.5 and 3.5 px per frame, multiplied by √(T/300). When T changes, every speed is multiplied by √(new T / previous T). That way the mean kinetic energy is proportional to T, as in the real model. The conversion uses 273, not 273.15.
6. **Absolute zero is classical.** At 0 K the particles stop completely and the pressure is forced to 0.00 atm. That is enough for ESO. In Bachillerato you can add that it is an unreachable limit.
7. **Collisions with the wall neither cool nor heat.** The particles bounce back without losing speed even when the membrane moves. There is no cooling on expansion: the temperature only changes with the control. Every process is isothermal unless the teacher moves the temperature.
8. **The particles have a size.** The starting radius is 3 px and they collide with each other. That volume of their own makes the pressure grow a little more than the number of particles: with 3 px and many particles the factor is more than 2. With 1 or 2 px, going from 50 to 100 particles doubles it. For the gas laws it is best to use 2 px.
9. **The P-V graph keeps little.** It adds a point every 3 s with the mean values and keeps the last 35. V goes from 0 to 5 L and P from 0 to the recent maximum, which readjusts itself. It is cleared when the mode changes.
