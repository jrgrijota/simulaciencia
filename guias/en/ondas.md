# Teacher guide: waves simulation

## Quick reference

The waves simulation shows how a source makes a string or a spring vibrate and how the disturbance travels through the medium. It tells transverse waves apart from longitudinal ones, measures the amplitude and the wavelength on the drawing itself, and links period, frequency and wave speed. A marked particle shows that the wave carries energy but not matter. Its main use is in ESO 4 (Year 11 in the UK, 10th grade in the US); with the “Sixth form (Bachillerato)” box it also covers wave motion in Bachillerato 2 Physics.

| Item | Details |
| --- | --- |
| Link | [jrgrijota.github.io/simulacion-ondas](https://jrgrijota.github.io/simulacion-ondas/?lang=en) |
| Year groups | ESO 4 and Bachillerato 2 (Physics) |
| Subject | Physics and Chemistry (ESO 4) and Physics (Bachillerato 2) |
| Suggested time | 15–20 minutes of explanation with the simulation projected |
| Equipment | Projector or interactive whiteboard; runs in the browser, also on phones and tablets, with nothing to install. On narrow screens the simulation stays at the top and the controls move below; a large screen is better for explaining |
| Prior knowledge | For ESO 4, speed as distance over time and kinetic energy. For Bachillerato 2, simple harmonic motion and the sine function |
| Accessibility | Dark, light and high-contrast themes (gear button). Simulation speed ×1, ×0.5 and ×0.25. Changes of mode and level are read aloud by screen readers |

## How the simulation works

The simulation has three modes, “Transverse”, “Longitudinal” and “Compare”, chosen at the top of the left-hand panel. The top of the canvas shows the medium and, below it, two boxes that change with the level. Changes to the sliders appear straight away.

| Mode | What you see |
| --- | --- |
| Transverse | A 4 m string with its particles. On the left, a vibrator (the “source”) moves the end up and down. The particles move up and down while the wave travels to the right |
| Longitudinal | A spring drawn as seven rows of particles. A piston pushes and pulls it. The particles move back and forth along the direction of travel and form regions where they are closer together (compressions, shaded blue) and further apart (rarefactions, shaded orange) |
| Compare | Both at once, with the same source and the same medium: the string at the top and the spring below |

Panel controls, the same in all three modes:

- **Source.** “Type of disturbance”: “Continuous wave” or “One pulse at a time” (with the “〰 Send a pulse” button). “Amplitude (A)” from 0.05 to 0.30 m (it starts at 0.20 m) and “Frequency (f)” from 0.25 to 2.00 Hz (it starts at 1.00 Hz). A change at the source does not change the wave already in the medium: it leaves the source and travels on, so for a few seconds the old wave and the new one coexist.
- **Medium.** “Wave speed (v)” from 0.5 to 3.0 m/s (it starts at 1.50 m/s). Changing it means changing the medium, for example tightening the string, and it affects the whole medium at once.
- **View.** “Simulation speed” ×1, ×0.5 or ×0.25, and the “Show λ, A, crests and troughs” box. Tapping a particle of the medium marks it as P.
- **Sixth form (Bachillerato).** The “Show the equation, the graphs and the phase” box changes the boxes below and adds a second point Q at a distance Δx from P, with its slider (0 to 3 m) and the “Δx = λ/4”, “Δx = λ/2” and “Δx = λ” buttons.

Above the canvas are “⏸ Pause” and “↺ Restart”. Restart leaves the medium at rest and sends the wave out from the source again, so you can watch the front (a dashed yellow line labelled “wavefront”) travel until it reaches the end of the stretch.

Canvas elements that support the explanation:

- **The dimension lines.** The wavelength is measured between two consecutive crests (or two compressions) and labelled with its value, for example “λ = 1.50 m”. A red arrow marks the amplitude from the equilibrium line up to a crest. On the string two crests and two troughs are labelled; on the spring, two compressions and two rarefactions.
- **Particle P.** It is red, with a dashed line marking its path (from −A to +A) and a “vibration” arrow. It always returns to its place.
- **ESO: “WAVE QUANTITIES”.** A, λ, T, f and v with their units, and below them the calculations T = 1 / f, λ = v / f and the check v = λ · f with the current values.
- **ESO: “ENERGY, YES; MATTER, NO”.** A bar with the energy carried by the wave (E ∝ A² · f²), shown as a multiple of the energy with the starting values (“× 1.00” with A = 0.20 m and f = 1.00 Hz), and next to it how far the wave has travelled compared with how far particle P has moved.
- **Bachillerato: the graphs.** “DISPLACEMENT – POSITION”, a snapshot of the wave at the current instant with P, Q and the λ dimension line, and “DISPLACEMENT – TIME FOR P AND Q”, the last 8 s of both points with the T dimension line.

The “Wave measurements” drop-down gives A, f, T, λ, v and the relative energy, with a sentence linking λ to v and f. At Bachillerato level it adds “Equation and phase”: the equation with numbers, for example “y(x, t) = 0.20 · sin(6.28 t − 4.19 x) (SI)”, the angular frequency, the wave number, the maximum vibration speed (A ω), the displacement and vibration speed of P at that instant, and the phase difference Δφ = k Δx, with a sentence saying whether P and Q are in phase, in antiphase or how far Q lags behind. “Key formulas” gathers the relationships for each level and examples of transverse and longitudinal waves.

## Use in each year group

In ESO 4 the simulation works on waves as carriers of energy, the two types of wave and the quantities that describe them. In Bachillerato 2 it works on oscillation graphs as a function of position and of time, the wave equation, the difference between wave speed and vibration speed, and the phase difference. The curriculum content and assessment criteria quoted are from the LOMLOE curriculum of the Community of Madrid (Spain), in our own translation.

### ESO 4: waves carry energy

*Ages 15–16 · Year 11 in the UK · 10th grade in the US*

**Curriculum content.** Block E: “Recognising the transport of energy by mechanical and electromagnetic waves. Light and sound as waves that transfer energy”. Block A: “Use of scientific language: appropriate handling of different systems of units and their symbols. Use of suitable mathematical tools in different scientific and learning settings”.

**Assessment criteria.** 1.1 (understand and explain everyday physical and chemical phenomena rigorously using the appropriate principles, theories and scientific laws), 1.2 (solve the problems set using the appropriate laws, expressing the results correctly), 2.2 (predict answers that can be tested experimentally or by deduction) and 3.2 (use units and mathematical tools appropriately).

**Objectives.** Explain that a wave is a disturbance that carries energy without carrying matter. Tell transverse and longitudinal waves apart and give examples. Identify the amplitude, the wavelength, the crests and the troughs on a drawing. Link period, frequency, wavelength and speed with T = 1 / f and v = λ · f.

**Teaching sequence (15–20 min).**

1. “Transverse” mode, type “One pulse at a time”. Press “〰 Send a pulse” and mark a particle in the middle of the string. Ask first: will the particle travel with the pulse? The pulse goes past and the particle moves up, down and back to its place. What travels is the disturbance, and the energy with it.
2. Switch to “Continuous wave” and press “↺ Restart”. The front travels at 1.50 m/s and takes about 2.7 s to cover the 4 m. The “Particle P has moved” row shows values between −0.20 and +0.20 m, but it never moves forward.
3. Read the dimension lines: amplitude 0.20 m and wavelength 1.50 m, between two crests. With “×0.25”, time how long P takes to make one complete oscillation: the period, 1.00 s. With f = 1.00 Hz, one oscillation per second.
4. Raise the frequency to 2.00 Hz. The change leaves the source: the new, tighter wave travels forward and pushes the old one along. The dimension line changes to λ = 0.75 m: double the frequency, half the wavelength. Check in the box: v = 0.75 m · 2.00 Hz = 1.50 m/s. The speed has not changed because the medium is the same.
5. Go back to 1.00 Hz and raise the speed to 3.0 m/s: λ = 3.00 m. Explain that the speed depends on the medium (a tighter string, sound in air or in water) and the frequency depends on the source.
6. Energy: with A = 0.10 m the bar shows “× 0.25”; with A = 0.20 m, “× 1.00”. Double the amplitude, four times the energy. Link it to an earthquake or to the volume of a loudspeaker.
7. “Longitudinal” mode and then “Compare”. The particles of the spring vibrate along the same direction in which the wave travels. The crests and troughs of the string correspond to compressions and rarefactions of the spring, and the wavelength is measured the same way, between two compressions. Open “Key formulas” and go over the examples: light is transverse; sound is longitudinal.

### Bachillerato 2 Physics: wave motion

*Ages 17–18 · Year 13 in the UK · 12th grade in the US*

**Curriculum content.** Block C, “Vibrations and waves”: “Wave motion: oscillation graphs as a function of position and of time, the wave equation that describes it and its relationship with simple harmonic motion. Wave speed and vibration speed. Phase difference. Different types of wave motion in nature”.

**Assessment criteria.** 1.2 (solve problems experimentally and analytically using the principles, laws and theories of physics), 2.1 (analyse and understand how natural systems evolve using models, laws and theories), 3.2 (use units rigorously and draw and interpret graphs that link physical variables) and 5.2 (reproduce physical processes in real or virtual laboratories by changing the variables that govern them).

**Objectives.** Write the equation of a harmonic wave from A, f and v. Interpret the y(x) graph as a snapshot of the wave and the y(t) graph as the simple harmonic motion of one point. Tell wave speed apart from vibration speed. Calculate the phase difference between two points and recognise when they vibrate in phase or in antiphase.

**Teaching sequence (15–20 min).**

1. Tick “Show the equation, the graphs and the phase” with the starting values (A = 0.20 m, f = 1.00 Hz, v = 1.50 m/s). Work out on the board ω = 2π f = 6.28 rad/s, λ = v / f = 1.50 m and k = 2π / λ = 4.19 rad/m, and check it in “Equation and phase”: y(x, t) = 0.20 · sin(6.28 t − 4.19 x).
2. Compare the two graphs. In “DISPLACEMENT – POSITION” the distance between two crests is λ; in “DISPLACEMENT – TIME” the distance between two maxima of P is T. Each point of the medium performs simple harmonic motion; the wave is that motion repeated with a delay.
3. Vibration speed: A ω = 1.26 m/s, different from v = 1.50 m/s. Pause and look at “P now”: when P passes through the equilibrium position its vibration speed is maximum; at a crest it is zero. Raise the amplitude to 0.30 m: v does not change, but the maximum vibration speed becomes 1.88 m/s.
4. Phase difference. With Δx = 0.75 m (λ/2), Δφ = 3.14 rad and the sentence says “in antiphase”: in both graphs P and Q always move in opposite directions. Press “Δx = λ”: Δφ goes back to 0 and the curves overlap. With “Δx = λ/4”, Q is a quarter of a period (0.25 s) behind P.
5. Problem: what is the minimum distance between two points in antiphase if f = 2.00 Hz and v = 3.0 m/s? λ = 1.50 m and Δx = 0.75 m. Enter those values and check it with the “Δx = λ/2” button.
6. “Longitudinal” mode: the graph is now called “DISPLACEMENT – POSITION” and shows ξ, the displacement along the direction of travel. The compressions are where ξ crosses zero going down. The same equation describes both types of wave; what changes is the direction of the vibration.

## Misconceptions it helps to address

The simulation mainly tackles the idea that matter travels with the wave and the confusion between the speed of the wave and the speed of the particles. Each row gives the common prior idea and how to challenge it with the simulation.

| Pupils' idea | Correct idea | How to show it |
| --- | --- | --- |
| “The particles travel with the wave” | Each particle oscillates about its position; the disturbance and the energy travel | Mark P and send a pulse: P moves up, down and back to its place. The “Particle P has moved” row never exceeds A |
| “If I move the source faster, the wave goes faster” | The speed depends on the medium; the frequency changes the wavelength | Go from 1 to 2 Hz: v stays at 1.50 m/s and λ drops from 1.50 to 0.75 m |
| “A taller wave goes faster or is longer” | The amplitude does not change v or λ; it changes the energy | Raise A from 0.10 to 0.30 m: λ and v stay the same, the energy goes from × 0.25 to × 2.25 |
| “The speed of the wave and the speed of the particles are the same” | They are different: v = λ f; the vibration has a maximum speed A ω | Bachillerato level: 1.50 m/s against 1.26 m/s, and the second changes with A while the first does not |
| “A longitudinal wave has no wavelength or amplitude” | It has the same quantities: λ between two compressions and A along the direction of travel | “Compare” mode: the same λ dimension line on the string and on the spring |
| “The y(x) graph is the path a particle follows” | y(x) is a snapshot of the whole medium; the motion of one point is y(t) | Compare the two Bachillerato graphs and watch how P moves on the canvas |
| “A change at the source changes the whole wave at once” | The change takes time to reach each point, because it travels at speed v | Change the frequency with the wave running: for a few seconds the old and new λ coexist |

## Simplifications worth knowing

The simulation puts a clear view of the wave quantities first. To do so it treats the medium as ideal and chooses scales that can be followed by eye. It is worth knowing these liberties so as not to reinforce wrong ideas by accident.

1. **No damping and no reflections.** The wave loses no energy as it travels and the right-hand end absorbs it completely: there are no reflected or standing waves. On a real string the wave fades and bounces back from the end.
2. **Slow laboratory scales.** The frequencies (0.25–2 Hz) and speeds (0.5–3 m/s) have been chosen so the wave can be followed by eye. They are reasonable for a long string or spring, but sound in air travels at about 340 m/s and audible frequencies range from 20 to 20,000 Hz.
3. **Reduced spring displacements.** In longitudinal mode, when A · k is large, the displacements are drawn at a reduced scale so the particles do not cross, and the canvas says so (“Displacements drawn at × 0.72 scale…”). The λ dimension lines are still exact.
4. **The energy is relative.** The bar uses E ∝ A² · f² and does not give joules, because the real energy also depends on the mass of the medium and on the speed. The bar is on a square-root scale so that both × 0.25 and × 9 (the maximum, with A = 0.30 m and f = 2.00 Hz) can be seen.
5. **A change of speed affects the whole medium at once.** It represents changing the medium. In reality, a wave that passes into another medium changes speed and wavelength only from the boundary onwards.
6. **The equation only describes the steady continuous wave.** While an old wave and a new one coexist, or with single pulses, the equation in the panel does not describe the whole medium; the simulation points this out.
7. **It does not deal with the nature of light.** Electromagnetic waves appear only as an example of a transverse wave. Photon energy (E = h f = h c / λ), wave–particle duality and the photoelectric effect belong to Bachillerato 2 and are covered with the atomic spectra simulation.
