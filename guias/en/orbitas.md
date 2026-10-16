# Teacher guide: orbits and gravitation simulation

## Quick reference

The simulation brings together four orbital mechanics scenarios: Newton's cannonball, the Solar System, Kepler's laws and binary stars. Its main use is in Bachillerato 2 Physics (Year 13 in the UK, 12th grade in the US), with applications in Bachillerato 1 and in ESO 3 and ESO 4.

| Item | Details |
| --- | --- |
| Link | [jrgrijota.github.io/simulacion-orbitas](https://jrgrijota.github.io/simulacion-orbitas/) |
| Year groups | Bachillerato 2 Physics (main use), Bachillerato 1, ESO 4, ESO 3 |
| Subject | Physics and Chemistry; Physics in Bachillerato 2 |
| Suggested time | 15–20 minutes of explanation with the simulation projected |
| Equipment | Projector or interactive whiteboard; runs in the browser, also on phones and tablets, with nothing to install. On narrow screens the canvas moves to the top and the controls below; a large screen is better for explaining |
| Prior knowledge | Velocity and force; weight as the Earth's attraction. In Bachillerato, vectors and mechanical energy |
| Accessibility | Dark theme only. In Newton mode there are keyboard shortcuts: Enter fires, Space pauses and R resets |

## How the simulation works

The drop-down at the top of the left-hand panel chooses the mode: “Newton's Cannonball”, “Solar System”, “Kepler's Laws” or “Binary Stars”. All of them have “⏸ Pause” and “↺ Reset” buttons and a “Speed” row that speeds up time.

| Mode | What the teacher controls | What it shows |
| --- | --- | --- |
| Newton's Cannonball | “Launch Speed” slider from 0.58 to 12.65 km/s (it starts at 6.90 km/s). “Vc ≈ 6.89 km/s” and “Ve ≈ 9.75 km/s” buttons, “▶ Fire” and speed 1×, 2×, 4× | The cannonball leaves horizontally from a mountain 2017 km high. It leaves a trail and the “Orbital Status” panel calculates the trajectory |
| Solar System | Click a planet in the “Planets” list, speed 1×, 3×, 8×, 20× and zoom (−, 1:1, +) | Eight planets in circular orbits. When one is chosen, the list gives T²/a³ and the canvas shows a (in AU) and T (in years) |
| Kepler's Laws | “1st Law”, “2nd Law”, “3rd Law” buttons. “Semi-major axis (a)” slider from 0.40 to 1.30 and “Eccentricity (e)” from 0.00 to 0.90 (they start at 1.00 and 0.50) | A body in an elliptical orbit with the Sun at one focus. Depending on the law: radius vector, foci, perihelion and aphelion, or the ratio T²/a³ |
| Binary Stars | “Star 1 (orange)” and “Star 2 (blue)” from 0.5 to 5.0 M☉ (they start at 2.0 and 1.0) and “Separation” from 0.8 to 3.0 (it starts at 1.6) | Two stars in circular orbits around the centre of mass (green cross “CM”). Below, the system's Ek, Ep and E |

Four elements support the explanation:

- **The “Orbital Status” panel.** While the cannonball is in flight it gives Speed, Altitude, Trajectory, Energy ε, Perigee, Apogee, Period and the number of orbits. The trajectory is classified as “Suborbital”, “Circular orbit”, “Elliptical orbit” or “Escape velocity”.
- **The Vc and Ve marks.** The slider marks the circular velocity and the escape velocity. The two buttons set them with a click: they give 6.90 km/s and 9.78 km/s, because of the slider's rounding.
- **The markers on the drawing.** On the cannonball's orbit, a yellow dot marks the perigee and a blue one the apogee. A dashed green circle is the reference circular orbit.
- **The figures on the canvas.** In Kepler mode r, a and T²/a³ appear. In binary stars, the bottom line gives Ek, Ep and E, which is conserved.

Each mode has a drop-down card, closed on entry: “Newton's thought experiment”, “Kepler's Third Law (T² ∝ a³)”, “Kepler's 3 Laws” and “Centre of Mass and Binary Systems”. They summarise the theory for each scenario.

## Use in each year group

In ESO 3 the simulation introduces universal gravitation. In ESO 4 it works on weight, circular motion and mechanical energy. In Bachillerato 1 it is used for centripetal force and gravitational potential energy. In Bachillerato 2 Physics it covers the gravitational field and Kepler's laws. The curriculum content quoted is from the LOMLOE curriculum of the Community of Madrid (Spain), in our own translation.

### ESO 3: introduction to gravitation

*Ages 14–15 · Year 10 in the UK · 9th grade in the US*

**Curriculum content.** Block D: “Introduction to the Law of Universal Gravitation” and “Gravitational, electric and magnetic phenomena: simple experiments that show their relationship with the forces of nature”.

**Objectives.** Understand that the gravity that makes objects fall is the same gravity that keeps the Moon and the planets in orbit. Relate the launch speed to the trajectory. Recognise that gravitational attraction is mutual.

**Teaching sequence (15–20 min).**

1. Cannonball mode. Set the slider to 3.45 km/s and press “▶ Fire”. The cannonball lands a short distance away and the panel says “Hit the Earth”. Ask why it falls.
2. Raise it to 5.75 km/s and fire. The cannonball lands much further away. Ask what would happen if it went even faster.
3. Press “Vc ≈ 6.89 km/s” and fire. The cannonball goes round and round without touching the ground: “Circular orbit”. Explain that it is still falling, but the Earth curves away at the same rate.
4. Open the “Newton's thought experiment” card and read it. Conclude that the force that makes an apple fall is the one that keeps a satellite in orbit.
5. Solar System mode at 1×. Point out that the Earth goes round in just over 1 s and Neptune takes more than 3 min. The further from the Sun, the slower the orbit.
6. Finish with Binary Stars: both stars move. Gravitational attraction is mutual, not just “the big one pulling the small one”.

### ESO 4: weight, circular motion and mechanical energy

*Ages 15–16 · Year 11 in the UK · 10th grade in the US*

**Curriculum content.** Block D: “Uniform circular motion” and “The law of universal gravitation: attraction between the bodies that make up the universe. The concept of weight”. Block E: “Kinetic energy and potential energy. Mechanical energy. Conservation of mechanical energy”.

**Objectives.** Identify weight as the force that curves the path of a satellite. Describe a circular orbit as uniform circular motion. Use mechanical energy to explain why the satellite speeds up as it gets closer to the Earth.

**Teaching sequence (15–20 min).**

1. Cannonball mode with the starting value, 6.90 km/s. Fire. The panel shows “Circular orbit” with constant speed and a “Period” of 127.9 min. It is uniform circular motion.
2. Ask what force acts on the cannonball. Only its weight. At a height of 2017 km, g = 9.8 × (6371 / 8388)² ≈ 5.7 m/s². There is no “weightlessness” due to a lack of gravity.
3. Reset with 8.05 km/s and fire: “Elliptical orbit”. The speed drops to about 3.75 km/s at the apogee (altitude 11 642 km) and then rises again.
4. Point out that “Energy ε” stays fixed at −15.1 km²/s² throughout the orbit. On the way up, kinetic energy is converted into potential energy, and on the way down the opposite happens.
5. Try 10.35 km/s. The energy comes out positive (+6.1 km²/s²) and the panel ends with “Escaped Earth's gravity”. The cannonball does not come back.

### Bachillerato 1: centripetal force and gravitational potential energy

*Ages 16–17 · Year 12 in the UK · 11th grade in the US*

**Curriculum content.** Block D: “Combining motions: horizontal and oblique projectiles”. Block E: “Centripetal force. Dynamics of circular motion” and “Newton's laws of dynamics”. Block F: “Conservative forces. Potential energy: gravitational and elastic”.

**Objectives.** Derive the orbital speed by equating weight with centripetal force. See horizontal projection as a limiting case of an orbit. Use Ep = −GMm/r when mgh no longer works. Introduce escape velocity.

**Teaching sequence (15–20 min).**

1. Cannonball mode with 0.58 km/s, the slider's minimum. The cannonball leaves horizontally and follows an arc to the ground, like a horizontal projectile. Explain that the parabola is the approximation with uniform g.
2. Write the condition for a circular orbit: GMm/r² = mv²/r, so v = √(GM/r). With GM = 3.986·10⁵ km³/s² and r = 8388 km you get 6.89 km/s, the value on the “Vc” button.
3. Press “Vc”, fire and read the period. With T = 2πr/v you get 7646 s ≈ 127.4 min. The panel gives 127.9 min because the slider sets 6.90 km/s.
4. Reset with 8.05 km/s. The energy ε stays at −15.1 km²/s² while the altitude changes by 9600 km. Explain that with such changes in height mgh does not work and −GMm/r has to be used.
5. Press “Ve ≈ 9.75 km/s” and fire. Show that Ve = √2 · Vc and that with positive energy ε the cannonball escapes.

### Bachillerato 2 Physics: the gravitational field and Kepler's laws

*Ages 17–18 · Year 13 in the UK · 12th grade in the US*

**Curriculum content.** Block A: “Orbital motion of satellites, planets and galaxies”, “Mechanical energy of an object in a gravitational field: deducing the type of motion it has, calculating the work done or the energy balances for movements between different positions, velocities and types of trajectory”, “Applying conservation of angular momentum to the study of the motion of a body in a gravitational field” and “Kepler's laws”.

**Objectives.** Classify trajectories by the sign of the mechanical energy. Relate Kepler's second law to conservation of angular momentum. Check the third law and its dependence on the central mass. Describe a two-body system orbiting its centre of mass.

**Teaching sequence (15–20 min).**

1. Cannonball with “Vc” (6.90 km/s). The panel gives ε = −23.7 km²/s², almost −GM/2r = −23.8 km²/s². Reset with 8.05 km/s: ε = −15.1 km²/s² and a = −GM/2ε ≈ 13 200 km. That is the mean of the distances to the centre at perigee and apogee.
2. Find the escape threshold. With 9.66 km/s, ε = −0.8 km²/s²: the panel shows “Elliptical orbit” with an apogee of about 464 000 km. With 9.78 km/s, ε = +0.3 km²/s² and the cannonball escapes.
3. Kepler's Laws mode, “1st Law”. Move the eccentricity from 0.00 to 0.90. The Sun is at one focus; the other focus is empty. Perihelion a(1 − e) and aphelion a(1 + e).
4. “2nd Law” with e = 0.90 at 1×. The body passes perihelion 19 times faster than aphelion, because r·v is conserved: (1 + e)/(1 − e) = 19. The yellow sector is the area swept out in the last moment: narrow and long at aphelion, wide and short at perihelion, with the same area.
5. “3rd Law” and move a from 0.40 to 1.30. T goes from 1.590 to 9.313, but T²/a³ stays at 39.48 = 4π²/GM, with GM = 1. Change e: the period does not vary.
6. Binary Stars with the starting values. The stars orbit at radii of 0.53 and 1.07, in inverse proportion to their masses. Below you can read Ek = 0.625, Ep = −1.250 and E = −0.625. In a circular orbit Ek = −E = −Ep/2.

## Misconceptions it helps to address

The simulation mainly tackles the idea that there is no gravity in orbit and the picture of very elongated orbits at constant speed. Each row gives a common prior idea and how to break it down with the simulation.

| Students' idea | Correct idea | How to show it |
| --- | --- | --- |
| “There is no gravity in orbit” | The satellite is in continuous free fall; at a height of 2017 km g is still about 5.7 m/s² | Cannonball with “Vc”: the cannonball is always falling towards the Earth, but it never reaches the ground |
| “To stay in orbit you need a forward force” | Only gravity acts, directed towards the centre; the tangential velocity is kept by inertia | Cannonball with “Vc”: the velocity arrow is tangential and there is no engine. The cannonball keeps going round |
| “If you fire it faster, it lands further away but it always ends up falling” | Above a threshold the cannonball orbits, and with positive energy it escapes | Cannonball at 5.75 km/s (impact), 6.90 km/s (orbit) and 10.35 km/s (escape) |
| “The planets' orbits are very elongated ellipses” | Almost all of them are nearly circular; the Earth's has e ≈ 0.017 | Kepler's Laws, “1st Law”, with e = 0.02: the radius vector r only varies between 0.98 and 1.02 |
| “The Sun is at the centre of the orbit” | The Sun is at one of the foci; the centre of the ellipse is empty | “1st Law” with e = 0.50: the Sun is at one focus and the other focus is visibly empty |
| “A planet always moves at the same speed” | It moves faster near the Sun and slower far away | “2nd Law” with e = 0.90 at 1×: the body passes perihelion 19 times faster than aphelion |
| “In a pair of stars the big one stays still and the small one goes round it” | Both orbit the centre of mass | Binaries with 2.0 and 1.0 M☉: radii 0.53 and 1.07. With 5.0 and 0.5 M☉ the big one hardly moves, like the Sun |

## Simplifications worth knowing

The simulation makes sure the key ideas can be seen, and to do so it compresses scales and uses normalised units. It is worth knowing about these liberties so as not to reinforce wrong ideas by accident.

1. **A 2017 km mountain.** The Earth measures 120 px at 53.1 km/px and the mountain 38 px. That way the cannonball leaves from 8388 km from the centre. There is no atmosphere, no air resistance and no rotation of the Earth. It is worth saying so: a real cannon at ground level would need about 7.9 km/s.
2. **“Circular orbit” with a margin.** Before firing, the slider label says “Suborbital” below the minimum speed that avoids a crash (about 6.40 km/s), “Escape velocity” from the exact escape velocity upwards and “Circular orbit” between 0.97·Vc and 1.03·Vc, although those orbits are slightly elliptical. The “Orbital Status” panel gives the exact classification during the flight.
3. **Speeded-up time.** At 1× each real second is 1500 s of flight. The 127.9 min circular orbit takes about 5 s on screen.
4. **A Solar System with distances compressed in the drawing.** The orbits are circular and uniform. Mercury, Venus, Earth and Mars are drawn at their real distance; Jupiter, Saturn, Uranus and Neptune at 3.20, 4.40, 5.50 and 6.50 AU instead of 5.20, 9.54, 19.19 and 30.07, so that they fit. The Kepler card mentions this.
5. **The data are real, though.** The list and the planet label use the real semi-major axis and period, so T²/a³ gives between 0.999 and 1.001 for all eight planets. The third law can be checked with all of them, but not by measuring distances on the screen.
6. **Jumps at high speeds.** In the Solar System, at 20× each frame advances 0.27 years. Mercury goes round more than once per frame and seems to move slowly or backwards. In Kepler mode with e = 0.90 it is best to use 1×, because the body jumps at perihelion.
7. **Kepler in normalised units.** GM is 1, so T²/a³ comes out as 39.48 (4π²), not 1 as with years and AU. The Sun is fixed, as if it had infinite mass. The shading for the “2nd Law” is the area swept out in the last 40 frames, the same all round the orbit; it cannot be compared with a sector from another orbit because only the last one is shown.
8. **Binaries are circular only and have no real units.** Every change to a slider restarts a circular orbit; there are no eccentric binaries. The masses are labelled M☉, but G is 1 and the separation and energies have no units. The size of the stars grows with their mass, not to scale.
9. **The lighter star can go off screen.** With separation 3.0 and masses 5.0 and 0.5 M☉, the lighter one orbits 2.73 units from the centre of mass. The screen only shows about 2.27 units on each side. For projecting, reduce the separation or bring the two masses closer together.
