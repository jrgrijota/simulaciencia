# Teacher guide: mechanical energy simulation

## Quick reference

The mechanical energy simulation releases a car on a roller coaster or a pendulum and shows the kinetic, potential and mechanical energy and the heat dissipated at every instant, with optional friction. Its main use is in ESO 4 and Bachillerato 1 (Years 11 and 12 in the UK, 10th and 11th grade in the US), with an application in ESO 3 and occasional use in Bachillerato 2 Physics.

| Item | Details |
| --- | --- |
| Link | [jrgrijota.github.io/simulacion-energia-mecanica](https://jrgrijota.github.io/simulacion-energia-mecanica/) |
| Year groups | ESO 4 and Bachillerato 1 (main use), ESO 3; occasional use in Bachillerato 2 Physics |
| Subject | Physics and Chemistry; Physics in Bachillerato 2 |
| Suggested time | 15–20 minutes of explanation with the simulation projected |
| Equipment | Projector or interactive whiteboard; runs in the browser, also on phones and tablets, with nothing to install. On narrow screens the controls move to the top and the canvas below; a large screen is better for explaining |
| Prior knowledge | Speed, mass and weight (P = m · g). For friction, the friction force and the work done by a force |
| Accessibility | Dark, light and high-contrast themes (gear button). Pause button and playback speed ×¼, ×½, ×1 and ×2 |

## How the simulation works

The simulation has two modes, “Roller coaster” and “Pendulum”, chosen at the top of the left-hand panel. Both show the scene on the left, the energy bars on the right and, below them, the “ENERGY AGAINST TIME” graph with the last 20 s. The “⏸ Pause” and “↺ Reset” buttons and the “Playback speed” row control the motion. Any change to a slider in the mode, to gravity or to the track profile releases the object again from the starting point; friction, on the other hand, can be switched on and adjusted while it is moving. The simulation writes kinetic energy as Ek.

| Mode | What the teacher controls | What it shows |
| --- | --- | --- |
| Roller coaster | “Track profile”: “Classic (several hills)”, “Taller hill (27 m)” and “U-shaped valley”. “Starting height” (5–30 m, in steps of 0.5), “Initial speed” (0–15 m/s) and “Mass of the car” (100–1000 kg). Starting values: classic, 25.0 m, 0.0 m/s and 500 kg. The car can also be dragged to any point on the track | A track 60 m wide with a height axis from 0 to 30 m. The classic track drops from 32 m to a valley at 0 m and has hills of 18 m and 12 m and valleys of 4 m and 1 m. The hill track rises to 27 m between two valleys at 0 m; the U-shaped valley is a parabola. Both ends of the track rise to 32 m and have buffers |
| Pendulum | “String length” (0.5–5.0 m), “Initial angle” (5–90°) and “Mass of the bob” (0.1–5.0 kg). Starting values: 2.0 m, 45° and 1.0 kg. The bob can also be dragged to release it from another angle, on either side | The support, the string, the bob and the arc of its path, with the angle θ, the length L and the level “h = 0 (lowest point)”. The period T ≈ 2π√(L/g) is shown at the top |
| “Surroundings” (in both modes) | “Gravity”: Earth (9.8), Moon (1.62), Mars (3.71) and Jupiter (24.79 m/s²). “Friction” switch with “Coefficient of friction (μ)” from 0.01 to 0.20 on the roller coaster (it starts at 0.05) and “Air resistance (b)” from 0.01 to 0.50 kg/s on the pendulum (it starts at 0.10) | With friction the Q bar and the orange curve on the graph appear, and the mechanical energy decreases. If the car stops, a message explains that friction has turned the missing mechanical energy into heat |

Four elements support the explanation:

- **The “ENERGIES” bars.** Ek (green), Ep (blue), Em (yellow) and Q (striped orange) are drawn to the scale of the initial energy, marked with a dashed line. Below each bar you can read its value and its percentage. At the top it reminds you that “Ek + Ep = Em” and “Em + Q = E initial”.
- **The maximum reachable height line.** A dashed yellow line marks the height “Em/(m·g)”, which the object would reach if all its mechanical energy were potential. Without friction it matches the starting height and does not move; with friction it gradually drops and separates from a faint line marking the initial height.
- **The energy–time graph.** The four curves use the same colours. Without friction Ek and Ep cross and rise and fall as mirror images, and Em is a horizontal straight line. With friction Em goes down and Q goes up by the same amount.
- **The velocity vector.** The “Velocity vector” button, at the top right of the canvas, draws a violet arrow tangent to the path with the value of v. Its scale adjusts so that the longest possible arrow is always the same length.

The “Real-time readings” drop-down is open at the start. It gives the speed, the height, the time and the three energies, and the “Energy balance” block with E initial, a bar that shares out 100 % between Ek, Ep and Q, and a sentence summarising the balance. The “Key formulas” drop-down collects Ek = ½ · m · v², Ep = m · g · h, Em = Ek + Ep, Em,A = Em,B without friction, Em,A = Em,B + |Wfr| with friction, the friction force (μ · N or b · v), the height of the pendulum h = L · (1 − cos θ) and v = √(2 · g · Δh). In the header, “Description and quick rules” summarises the three key ideas.

## Use in each year group

In ESO 4 the simulation is used to present kinetic energy, potential energy and conservation of mechanical energy, and to introduce the work done by friction. In Bachillerato 1 it works on conservative and non-conservative systems, the work–energy theorem and the degradation of energy. In ESO 3 it is used to describe energy transformations qualitatively. In Bachillerato 2 Physics its use is occasional, for the energy of the pendulum as an oscillator. The curriculum content quoted is from the LOMLOE curriculum of the Community of Madrid (Spain), in our own translation.

### ESO 4: kinetic energy, potential energy and their conservation

*Ages 15–16 · Year 11 in the UK · 10th grade in the US*

**Curriculum content.** Block E: “Energy: formulating and testing hypotheses about the different forms and applications of energy, based on its properties and the principle of conservation, as a basis for experimentation and for solving problems about mechanical energy in everyday situations”, “Kinetic energy and potential energy”, “Mechanical energy. Conservation of mechanical energy” and “Work and mechanical energy. Power”. Block D: “Main forces in everyday surroundings: recognising weight, the normal force, friction, tension and upthrust”. Block A: “the laboratory or virtual environments”.

**Objectives.** Calculate kinetic energy and gravitational potential energy. Explain that, without friction, mechanical energy is conserved even though Ek and Ep change. Calculate speeds from differences in height. Recognise that friction transforms mechanical energy into heat.

**Teaching sequence (15–20 min).**

1. Roller coaster with the starting values: press “↺ Reset” and “⏸ Pause”. The 500 kg car is at 25.0 m. Calculate on the board Ep = m · g · h = 500 × 9.8 × 25 = 122 500 J and check “E initial = 122.5 kJ”. As it starts from rest, Ek = 0 and all the energy is potential.
2. Ask for a prediction of the speed in the first valley (h = 0) and press “▶ Resume”. With everything converted into kinetic energy, ½ · m · v² = 122 500 J and v = √(2 · 9.8 · 25) = 22.1 m/s. At ×¼ it is easy to pause in the valley and read it under “Speed”.
3. Pause at the top of the 18 m hill. Ep = 500 × 9.8 × 18 = 88 200 J, so Ek = 122 500 − 88 200 = 34 300 J and v = 11.7 m/s. The Ek and Ep bars change, but Em is still full: 122.5 kJ.
4. Let the simulation run. The car reaches the right-hand end and comes back up to exactly 25.0 m, the yellow “max. reachable height” line. On the graph, Em is a straight line and Ek and Ep cross.
5. Increase the mass to 1000 kg. The initial energy doubles (245.0 kJ), but the car moves in the same way and the speed in the valley is still 22.1 m/s: the mass cancels in ½ · m · v² = m · g · h.
6. Go back to 500 kg and switch on “Friction” with μ = 0.05. On each run the car ends up lower (22.4 m, 20.0 m, 17.5 m…), the yellow line drops and the Q bar grows. Finish with the balance: Em,initial = Em,final + |Wfr|. The energy does not disappear: it is transformed into heat.

### Bachillerato 1: conservative and non-conservative systems

*Ages 16–17 · Year 12 in the UK · 11th grade in the US*

**Curriculum content.** Block F: “Potential energy and kinetic energy of a simple system: application to the conservation of mechanical energy in conservative and non-conservative systems and to the study of the causes of the motion of objects in the real world”, “Kinetic energy. The work–energy theorem”, “Conservative forces. Potential energy: gravitational and elastic”, “Friction: a non-conservative force”, “Principle of conservation of mechanical energy in conservative and non-conservative systems” and “Conservation and degradation of energy. Second law of thermodynamics”. Block D: “Studying and drawing graphs of motion from experimental observations and/or interactive simulations”.

**Objectives.** Apply the principle of conservation of mechanical energy with and without non-conservative forces. Calculate the work done by friction. Predict whether an object will get over an obstacle from its energy. Interpret the degradation of energy on an energy–time graph.

**Teaching sequence (15–20 min).**

1. “Taller hill (27 m)” profile with the start at 25.0 m and no friction. Ask whether the car will get over the hill. No: the yellow line is below the top and the car turns back at 25.0 m, before it gets there.
2. Calculate the minimum initial speed to get over: ½ · v₀² ≥ g · (27 − 25), so v₀ ≥ 6.26 m/s. Check it: at 6.0 m/s the car turns back at 26.8 m; at 6.5 m/s it gets over and reaches 27.2 m on the other side. The mass plays no part.
3. Go back to “Classic (several hills)”, start at 25.0 m, and switch on friction with μ = 0.05. Pause on reaching the first valley: Q ≈ 2.37 kJ. With N = m · g · cos θ, the work done by friction is μ · m · g · cos θ · Δs = μ · m · g · Δx, where Δx is the horizontal distance travelled. From the start (x ≈ 4.3 m) to the valley (x = 14 m): 0.05 × 500 × 9.8 × 9.7 ≈ 2370 J.
4. Use the graph: Em falls faster where the car is going faster, because it covers more track each second, and Q grows by exactly as much as Em falls. Read in “Energy balance” what percentage is left at each moment. Relate it to the work–energy theorem: Wfr = ΔEm.
5. Let the car come to a stop (a little over 2 min at ×1, half that at ×2). It ends up in the 1 m valley with Ep = 4.9 kJ: only 4 % of the energy is still mechanical and 96 % has been turned into heat. Although the total energy is conserved, the heat cannot be turned fully back into mechanical energy: this is the degradation of energy.
6. Switch to the pendulum with friction, b = 0.10 kg/s. The amplitude and Em decrease less and less with each oscillation: after 5 s 62 % is left and after 10 s 37 %. Increase the mass to 2.0 kg: now 79 % and 61 % are left. With air resistance the relative loss depends on b/m; with friction on the track, on the other hand, it does not depend on the mass.

### ESO 3: energy transformations

*Ages 14–15 · Year 10 in the UK · 9th grade in the US*

**Curriculum content.** Block E: “Designing and experimentally testing hypotheses related to the domestic and industrial use of energy in its different forms and the transformations between them” and “Awareness of the need to save energy and protect the environment. Rational use of energy”. Block A: “Recording data and results using tables, graphs and mathematical expressions”.

**Objectives.** Recognise the energy of motion and the energy due to height. Describe how one is transformed into the other. Understand that energy is not lost but transformed into other, less useful forms.

**Teaching sequence (15–20 min).**

1. Pendulum with the starting values. Without talking about formulas, point out the bars: at the top all the energy is blue (potential) and at the bottom it is green (kinetic). The yellow one, the sum, does not change.
2. Pause at the lowest point and at one end. Read in the “Energy balance” block how 100 % is shared between Ek and Ep.
3. Roller coaster with the starting values. Ask where the car goes fastest: in the valleys, where the height is lowest. Check it with “Velocity vector”.
4. Switch on friction. The car does not get back to its starting height and the orange Q bar appears: part of the energy has been turned into heat in the wheels and the track. Energy is transformed, not destroyed.
5. Choose “Moon (1.62 m/s²)” with a 25.0 m start. The initial energy drops to 20.3 kJ and the car moves much more slowly (9.0 m/s in the valley). Relate this to weight.
6. Ask students to copy a table with height, speed, Ek and Ep at four points on the track (pausing at each one) and to check that Ek + Ep always gives the same result.

### Bachillerato 2 Physics: occasional use

*Ages 17–18 · Year 13 in the UK · 12th grade in the US*

Block C includes “Oscillatory motion: kinematic variables of an oscillating body. Kinetic and potential energy in simple harmonic motion and conservation of energy in these systems. Graphical representation as a function of time.”. The pendulum at small angles (5–10°) is an almost harmonic oscillator. On the graph, Ek and Ep oscillate with half the period of the pendulum and always add up to the same value. With air resistance you see a damped oscillator: the energy decays exponentially, Em ∝ e^(−b·t/m). The simulation uses g · h and not −GMm/r, so it cannot be used for energy in the gravitational field on a large scale; the orbits simulation is better for that.

## Misconceptions it helps to address

The simulation mainly tackles the idea that energy “gets used up” or disappears and the idea that heavier objects go down a slope faster. Each row gives a common prior idea and how to break it down with the simulation.

| Students' idea | Correct idea | How to show it |
| --- | --- | --- |
| “Energy gets used up and disappears” | Energy is transformed: with friction, mechanical energy becomes heat, and Ek + Ep + Q is always the initial energy | Roller coaster with friction: the Q bar grows by as much as Em falls, and the “Energy balance” block always adds up to 100 % |
| “A heavier car goes down faster” | Without friction, the speed only depends on the drop in height: v = √(2 · g · Δh) | Mass of 100 kg and of 1000 kg with a start at 25.0 m: 22.1 m/s in the valley in both cases |
| “With more speed in the valley, it can go higher than where it started” | Without friction or initial speed, it never goes above its starting height | “Taller hill (27 m)” profile with a start at 25.0 m: it turns back at 25.0 m |
| “At the highest point there is no energy” | At the top the energy is potential; only the kinetic energy is zero | Pendulum paused at one end: Ek = 0 and Ep = Em = 5.74 J |
| “Potential energy is an absolute property of the object” | It depends on the reference level chosen; what matters are the differences | Point to “h = 0 (lowest point)”: with the zero level on the classroom floor, every Ep would change by the same amount and v would not |
| “Even without friction, the pendulum will eventually stop” | With no non-conservative forces it oscillates forever with the same amplitude | Pendulum with no friction at ×2 for a minute: the yellow line and the amplitude do not change |
| “Friction only acts when the object is moving slowly” | The work done by friction depends on the distance travelled; it acts throughout the motion | Roller coaster with μ = 0.05: the Q curve on the graph rises along the whole ride |

## Simplifications worth knowing

The simulation makes sure the energy balance can be seen, and to do so it simplifies the track, friction and the pendulum. It is worth knowing about these liberties so as not to reinforce wrong ideas by accident.

1. **The car is a point on the rail.** It has no size and no turning wheels, and it is held on the track, as in real roller coasters: it never leaves it, even when going very fast over a hilltop. There are no loops.
2. **Normal force with no centripetal part.** Friction uses N = m · g · cos θ, as in classroom problems. On real curves the normal force is larger in the valleys and smaller on the hilltops; that is ignored here. That is why the work done by friction is exactly μ · m · g times the horizontal distance.
3. **A single coefficient μ.** The same coefficient is used for static and kinetic friction. The car stops when its speed reaches zero at a point where the slope satisfies tan θ ≤ μ, even if it is not at the bottom of a valley.
4. **Different friction in each mode.** On the roller coaster the force is constant, μ · N. On the pendulum it is air resistance proportional to the speed, b · v, with no friction at the pivot. That is why on the pendulum the relative loss depends on b/m and on the roller coaster it does not depend on the mass.
5. **The heat does not heat anything.** The Q bar only counts the energy dissipated. It does not calculate what temperature the track, the wheels or the air reach, and no energy is lost as sound or vibration.
6. **Ideal pendulum.** The string is inextensible and massless, and the bob is a point. The initial angle goes from 5 to 90°: a string cannot hold larger angles. The period “T ≈ 2π√(L/g)” is the one for small oscillations; at 45° the real period is about 2.95 s instead of 2.84 s.
7. **The pendulum's scale changes with L.** The string drawn gets longer with the length, but less than in proportion so that it fits on the screen. The heights of the same pendulum are to scale; those of two different lengths cannot be compared on screen.
8. **Fixed reference level.** Potential energy is always measured from the lowest point of the track or path. The zero level cannot be changed.
9. **Energy calculated from the balance.** The program calculates the speed from Ek = E initial − Ep − Q, so the bars always add up to exactly 100 %. The ends of the track have buffers that send the car back without losses; they can only be reached with an initial speed.
