# Teacher guide: free fall and projectile motion simulation

## Quick reference

The free fall and projectile motion simulation launches an object near the ground and leaves a trail of dots at equal time intervals, with the velocity and acceleration vectors at every instant. It shows that free fall, vertical throws, horizontal launches and angled launches are the same motion, with the acceleration due to gravity always pointing down, and that only the starting height and velocity change. A switch turns the air on and off to show why a feather and a steel ball fall differently in the classroom but together on the Moon. Its main use is in ESO 4 and Bachillerato 1 (Years 11 and 12 in the UK, 10th and 11th grade in the US).

| Item | Details |
| --- | --- |
| Link | [jrgrijota.github.io/simulacion-caida-libre](https://jrgrijota.github.io/simulacion-caida-libre/?lang=en) |
| Year groups | ESO 4 and Bachillerato 1 |
| Subject | Physics and Chemistry |
| Suggested time | 15–20 minutes of explanation with the simulation projected; the “Challenge” mode is enough for another problem-solving lesson |
| Equipment | Projector or interactive whiteboard; runs in the browser, also on phones and tablets, with nothing to install. On narrow screens the canvas goes at the top and the controls below; a large screen is better for explaining |
| Prior knowledge | For ESO 4, uniform motion and the idea of acceleration. For Bachillerato 1, uniformly accelerated motion, resolving a vector into components and trigonometric ratios |
| Accessibility | Four visual themes (SimulaCiencia, dark, light and high contrast) under the gear button. Speed ×1, ×0.5 and ×0.25, and an instant slider with − and + buttons to step through the launch. Launches, landings and the maximum height are announced to screen readers. Keys: space to launch or pause and R to restart |

## How the simulation works

The simulation has three modes, “Vertical”, “Projectile” and “Challenge”, chosen at the top of the left-hand panel. The canvas shows the ground, the launch point (a person on a platform, or a rooftop if there is a height), axes with the scale in metres and, at the top, a band with the name of the motion, the place and the value of g. The scale of the drawing adjusts itself so that the whole trajectory fits.

| Mode | What you see |
| --- | --- |
| Vertical | Free fall and vertical throws. “Initial height (h₀)” from 0 to 100 m and “Initial velocity (v₀)” from 30 m/s downwards to 30 m/s upwards; in the middle, 0 m/s (“drop”). Examples: “Free fall” (45 m, 0 m/s), “Throw upwards” (0 m, 20 m/s ↑) and “Throw downwards” (30 m, 10 m/s ↓). While the object goes up, the trail dots are hollow, and on the way down they are filled, so that the way up and the way down do not get mixed up on the same vertical line |
| Projectile | Horizontal and angled launches. “Initial height” from 0 to 50 m, “Initial speed” from 0 to 30 m/s and “Launch angle” from −30° (downwards) to 90° (vertical). Examples: “Horizontal launch” (20 m, 10 m/s, 0°), “From the ground” (0 m, 20 m/s, 45°) and “From a rooftop” (20 m, 15 m/s, 30°) |
| Challenge | Four problems with random data: “Up to the balcony” and “How long does it take?” (ESO 4) and “Hit the target” and “Two angles” (Bachillerato). Always on Earth and without air. Students write the answer they have worked out in their exercise book, press “Check” and the simulation launches with that value |

“What is launched and where” group (Vertical and Projectile modes):

- **Object.** Steel ball, basketball, tennis ball, table tennis ball, paper ball or feather, with its mass. Without air, the object makes no difference; with air, each one is slowed down differently.
- **Place.** Earth (g = 9.8 m/s²), Moon (1.6 m/s²), Mars (3.7 m/s²) or Jupiter (24.8 m/s²).
- **“With air”.** Earth only. When ticked, the band warns that the motion is no longer free fall or that the path is no longer a parabola, and in Projectile mode the same launch without air is drawn in grey.
- **“Compare with another object”** (Vertical mode). Drops another object at the same time, on the right, from the same height.
- **“Drop another ball at the same time”** (Projectile mode). A ball falls from the launch point at the same instant: it lands at the same time as the launched one.
- **“Keep previous trajectories”** (Projectile mode). Keeps up to five trajectories in grey with their angle, to compare ranges.

“What is shown” group:

- **“Velocity and acceleration vectors”.** Velocity in blue, tangent to the path, with its components vₓ and vᵧ in Projectile mode, and acceleration in orange, always downwards. The two arrows are drawn to different scales, and the legend says so.
- **“Projections on the axes”.** Two “shadows” of the object, one on the ground and one on the vertical axis, each with its own trail: the one on the ground moves with equally spaced dots (uniform motion) and the one on the axis with dots that get further apart on the way down (uniformly accelerated motion).
- **“Trail: one dot every”** 0.1 s, 0.2 s or 0.5 s.
- **“Pause at maximum height”.** The animation stops at the highest point so that the vectors can be discussed.
- **“Hide results”.** Hides the time of flight, maximum height, range and velocity on landing, so that they can be worked out before launching. The graphs only show what has already happened.

The bar at the bottom has “Launch” (which becomes “Pause”, “Resume” and “Launch again”), “Restart”, the speed ×0.25, ×0.5 or ×1 and the “Graphs” button, which adds position–time and velocity–time graphs of both components below the canvas. Underneath, the “Instant” row lets you go to any moment of the launch with the slider or with the − and + buttons, which move one trail interval at a time.

The “Motion data” drop-down gives, at the current instant, the time, position x, height y, vₓ, vᵧ (with an arrow showing whether it is going up or down) and the speed |v|, and under “Launch results”, the time of flight, maximum height, range and velocity on landing. “Equations of motion” writes the equations with the values substituted, for example “y = 20 + 7.5 · t − 4.9 · t²”, and below them the results calculated from them. “Key ideas” sums up five ideas: without air everything falls the same way, the acceleration is always g downwards, at the highest point the vertical velocity is zero, the two motions are independent and air breaks the parabola.

Without air, the simulation uses the exact equations, so its numbers match those of a problem solved in an exercise book with g = 9.8 m/s².

## Use in each year group

In ESO 4 the simulation covers free fall and vertical throws as uniformly accelerated motion, predicting motion from its equations and the idea that all bodies fall the same way when there is no air. In Bachillerato 1 it covers the composition of motions: horizontal and angled launches as the sum of independent uniform and uniformly accelerated motions. The curriculum content quoted is from the LOMLOE curriculum of the Community of Madrid (Spain), in our own translation.

### ESO 4: free fall and vertical throws

*Ages 15–16 · Year 11 in the UK · 10th grade in the US*

**Curriculum content.** Block D: “Predicting simple motions from the concepts of kinematics, formulating testable hypotheses about future values of these quantities and validating them through numerical calculation, interpreting graphs or experimental work” and “Law of universal gravitation: attraction between the bodies that make up the universe. The concept of weight”. Block A: “Using suitable mathematical tools in different scientific and learning scenarios” and “the laboratory or virtual environments”.

**Assessment criteria.** 1.1 (understand and explain everyday physical and chemical phenomena rigorously using suitable scientific principles, theories and laws), 1.2 (solve problems using suitable laws, expressing the results correctly), 2.2 (predict answers that can be tested experimentally or deductively) and 3.2 (use units and mathematical tools correctly).

**Objectives.** Recognise free fall and vertical throws as uniformly accelerated motions with a = g downwards. Explain that, without air, all bodies fall with the same acceleration whatever their mass. Calculate the time of fall, the maximum height and the velocity on reaching the ground. Interpret the position–time and velocity–time graphs of a vertical throw.

**Teaching sequence (15–20 min).**

1. “Vertical” mode, “Free fall” example (45 m, 0 m/s), trail every 0.2 s. Ask first: does it always fall at the same speed? Launch. The trail dots get further and further apart: in each 0.2 s it covers more distance than in the previous one. It lands after 3.03 s at 29.7 m/s.
2. Tick “Compare with another object”, with the feather and the steel ball, and tick “With air”. The ball lands after 3.05 s; the feather, at 0.8 m/s, takes almost a minute. Ask: why? Remove the air: they land together after 3.03 s. What separated them was the air, not the mass. Change the place to the Moon, which has no air: they fall together in 7.5 s, like the hammer and the feather on Apollo 15.
3. Go back to Earth without air and open “Equations of motion”. Check on the board that 45 = 4.9 · t² gives t = 3.03 s and that v = 9.8 · 3.03 = 29.7 m/s.
4. “Throw upwards” example (0 m, 20 m/s ↑), with “Pause at maximum height”. Before launching, ask what the velocity and acceleration are at the very top. At the pause, the velocity arrow has disappeared (vᵧ = 0) and the acceleration arrow is still the same, pointing down. It reaches 20.4 m after 2.04 s.
5. Resume. The way down mirrors the way up: the filled dots fall on top of the hollow ones, it takes another 2.04 s and lands at 20 m/s, the same speed it left with. While it goes up, the velocity points up and the acceleration down: that is why it slows down.
6. Press “Graphs”. Position–time is a parabola with its maximum at 2.04 s; velocity–time is a straight line with a slope of −9.8 m/s², crossing the axis at the same instant. The slope is the same going up and coming down: the acceleration does not change.
7. “Challenge” mode, “Up to the balcony” and “How long does it take?”. Students work it out in their exercise books, type the result and check. An answer rounded to two significant figures is accepted.

### Bachillerato 1: composition of motions

*Ages 16–17 · Year 12 in the UK · 11th grade in the US*

**Curriculum content.** Block D: “Kinematic variables as a function of time in the different motions an object can have, with or without external forces: solving real situations related to physics and everyday surroundings”, “Relationship between the path of a compound motion and the quantities that describe it” and “Composition of motions: horizontal and angled launches”.

**Assessment criteria.** 1.2 (solve problems experimentally and analytically using principles, laws and theories of physics), 2.1 (analyse and understand how natural systems evolve using models, laws and theories), 3.2 (use units rigorously and draw and interpret graphs relating physical variables) and 5.2 (reproduce physical processes in real or virtual laboratories, changing the variables that affect them).

**Objectives.** Resolve the initial velocity into its components. Describe horizontal and angled launches as the composition of uniform motion horizontally and uniformly accelerated motion vertically, independent of each other. Write the equations x(t) and y(t) and use them to find the time of flight, maximum height and range. Justify why two complementary angles give the same range from the ground and why air reduces the range and the best angle.

**Teaching sequence (15–20 min).**

1. “Projectile” mode, “Horizontal launch” example (20 m, 10 m/s, 0°), with “Projections on the axes”. The shadow on the ground leaves equally spaced dots (uniform motion, 10 m/s); the one on the vertical axis, dots that get further apart (uniform acceleration), just like free fall.
2. Tick “Drop another ball at the same time”. Ask first which one will land first. They land together, after 2.02 s, because the time of fall depends only on the height. The launched ball lands 20.2 m from the foot of the building.
3. With the vectors: vₓ stays the same throughout the flight; vᵧ grows downwards by 9.8 m/s every second. On landing, vₓ = 10.0 m/s and vᵧ = 19.8 m/s downwards, and the speed is √(10² + 19.8²) = 22.2 m/s.
4. “From the ground” example (0 m, 20 m/s, 45°), with “Pause at maximum height”. At the top the velocity is not zero: vₓ = 14.1 m/s remains, horizontal. Only in a vertical throw does the object stop completely. Maximum height 10.2 m, range 40.8 m, time of flight 2.89 s.
5. Tick “Keep previous trajectories” and launch at 30°, 45° and 60° at 20 m/s. 30° and 60° land at the same point, 35.3 m: they are complementary angles and sin(2α) is the same for both. 45° goes further. Check it with x = v₀² · sin(2α) / g.
6. Tick “With air” with the tennis ball. The range at 45° drops from 40.8 m to 25.7 m, the path becomes lopsided (it comes down more steeply than it went up) and the grey line recalls the parabola without air. With air, the angle that goes furthest drops to about 40°.
7. “From a rooftop” example (20 m, 15 m/s, 30°) with “Hide results”. Set the problem: time of flight, maximum height and range. Solve it, untick the box and check: 2.93 s, 22.9 m and 38.0 m. To finish, the “Hit the target” and “Two angles” challenges.

## Misconceptions it helps to address

The simulation mainly tackles the idea that heavy bodies fall first and the confusion between velocity and acceleration at the highest point. Each row gives the common prior idea and how to challenge it with the simulation.

| Student idea | Correct idea | How to show it |
| --- | --- | --- |
| “Heavy objects fall faster” | Without air, everything falls with the same acceleration g; what separates them is air resistance | Compare the feather and the steel ball from 45 m: with air, 56 s against 3 s; without air, together in 3.03 s. On the Moon, together in 7.5 s |
| “At the highest point the acceleration is zero, because the object has stopped” | The acceleration is g downwards throughout the flight, at the top too; what becomes zero is the vertical velocity | “Pause at maximum height” with the vectors: the acceleration arrow does not change, and on the velocity–time graph the line has the same slope before and after |
| “While it goes up, the force of the throw pushes it upwards” | Once released, the only force (without air) is its weight; it goes up because it has velocity, and slows down because the acceleration points the other way | Vectors in “Throw upwards”: an upward velocity that gets shorter and shorter and an acceleration that always points down |
| “In projectile motion, the velocity at the highest point is zero” | Only vᵧ becomes zero; vₓ stays the same | “From the ground” with a pause at the top: the horizontal arrow remains and the panel shows vₓ = 14.1 m/s |
| “A bullet fired horizontally takes longer to fall than one that is dropped” | The two motions are independent: the time of fall depends only on the height | “Drop another ball at the same time”: both land together, and their vertical projections match at every instant |
| “The object goes straight and then suddenly drops” | The path is a parabola from the very first instant, because g acts from the start | Trail every 0.1 s in the horizontal launch, with projections: the vertical shadow starts falling as soon as it is launched |
| “45° always gives the longest range” | Only from the ground and without air; with an initial height or with air, the best angle is smaller | “Keep previous trajectories”: with air, 40° goes slightly further than 45°; from the rooftop, 30° beats 45° |

## Simplifications worth knowing

The simulation puts first that its numbers match those of a classroom problem and that the composition of motions is clearly visible. It is worth knowing these liberties so as not to reinforce wrong ideas by accident.

1. **Constant g and a flat Earth.** g = 9.8 m/s² throughout the path and the ground is flat. For heights of a few hundred metres the difference from reality cannot be noticed.
2. **The object is a point.** It neither spins nor bounces: it stops when it touches the ground. There is no Magnus effect (the one that makes a ball with spin curve).
3. **A simple air model.** With air, the drag is proportional to the square of the speed and each object is defined by its terminal velocity: steel 105 m/s, basketball 20 m/s, tennis 22 m/s, table tennis 9 m/s, paper 5 m/s and feather 0.8 m/s. They are rough values; a real feather also glides and sways. With air, the simulation integrates step by step and the equations in the panel are those of the same launch without air.
4. **There is only air on Earth.** The Moon has no atmosphere, but Mars has a very thin one that the simulation ignores. Jupiter has no solid surface: it is there to compare the value of g.
5. **Arrows at different scales.** Velocity and acceleration are not measured in the same units, so their relative length means nothing. What matters is the direction of each one and how it changes.
6. **The projections are a construction.** The “shadows” on the axes do not exist in reality; they are used to separate the two motions that make up the launch.
7. **Tolerance in the challenges.** An answer rounded to two significant figures is accepted, and in the launches, landing less than 0.5 m from the centre of the target.

## Student activity worksheet

The [activity worksheet](https://simulaciencia.es/en/worksheets/caida-libre/) follows a predict, observe and explain structure. Each activity links to the simulation already set up, so it works in the computer room, with tablets or as homework. It downloads in Word and LibreOffice formats so it can be adapted.

| Year group | Activities | Suggested time |
| --- | --- | --- |
| ESO 4 (Year 11) | Activities 1 to 4, Apply what you have learnt (1 to 3) and the “Up to the balcony” and “How long does it take?” challenges | One 50–55 minute lesson, or two if the problems are done in class |
| Bachillerato 1 (Year 12) | Activity 1 as revision, activities 5 to 7, Apply what you have learnt (4 and 5) and Going further | One or two lessons |

The “Before you start” table collects five prior ideas about falling bodies. It is best not to correct it at the beginning: students come back to it in “Review your ideas”. With air, the feather takes almost a minute to fall from 45 m: you can switch to ×1 or press “Restart” once it is clear that the ball lands much earlier.

### Answers

| Section | Answer |
| --- | --- |
| Before you start | a) False: without air they land together (activity 1). b) False: the acceleration is g downwards at the highest point too (activity 3). c) True: it goes up and comes down with the same speed at the same level (activity 3). d) False: they land at the same time (activity 5). e) False: at the top only the vertical velocity becomes zero (activity 6) |
| Activity 1 | With air: the steel ball takes about 3.05 s and the feather about 56 s. Without air: both 3.03 s. On the Moon: both 7.5 s. What makes the feather fall differently is the air, not its mass: without air, all objects fall with the same acceleration |
| Activity 2 | The dots get further and further apart: in each interval it covers more distance, so its velocity increases. Velocities: 0, 9.8, 19.6 and 29.4 m/s at 0, 1, 2 and 3 s. t = 3.03 s and v = 29.7 m/s. 45 = ½ · 9.8 · t², t = √(90 / 9.8) = 3.03 s; v = 9.8 · 3.03 = 29.7 m/s. The velocity increases by 9.8 m/s every second: that is g |
| Activity 3 | Maximum height 20.4 m after 2.04 s; back on the ground after 4.08 s at 20 m/s. At the highest point v = 0 and the acceleration is still 9.8 m/s² downwards. While it goes up, the velocity points up and the acceleration down, which is why it slows down. h = v₀² / (2g) = 400 / 19.6 = 20.4 m; t = v₀ / g = 2.04 s |
| Activity 4 | Position–time is a parabola (a curve) with its maximum at 2.04 s. Velocity–time is a falling straight line: it goes from +20 to −20 m/s and crosses the axis at 2.04 s. The slope is −9.8 m/s², the acceleration, and it is the same going up and coming down |
| Activity 5 | They land at the same time, after 2.02 s. The shadow on the ground moves with equally spaced dots (uniform motion) and the one on the axis with dots that get further apart (uniform acceleration). The launched ball lands at 20.2 m. The horizontal motion does not affect the vertical one: the time of fall depends only on the height |
| Activity 6 | At the top, vᵧ = 0 and vₓ = 14.1 m/s: the velocity is not zero, it is horizontal. vₓ is the same throughout the flight. The acceleration is still g downwards. Maximum height 10.2 m, time of flight 2.89 s and range 40.8 m |
| Activity 7 | Without air: 15°, 30° and 45° give 20.4 m, 35.3 m and 40.8 m; 60° and 75°, 35.3 m and 20.4 m. Complementary angles give the same range because sin(2α) = sin(180° − 2α). The maximum is at 45°. With air and the tennis ball, the ranges drop (about 25.7 m at 45°) and the best angle is smaller, about 40° |
| Apply what you have learnt | 1) t = √(2 · 80 / 9.8) = 4.04 s; v = 9.8 · 4.04 = 39.6 m/s. 2) h = 15² / 19.6 = 11.5 m; time going up = 15 / 9.8 = 1.53 s; flight 3.06 s. 3) On the Moon, t = √(2 · 45 / 1.6) = 7.5 s, against 3.03 s on Earth: g is about six times smaller. 4) t = √(2 · 1.25 / 9.8) = 0.505 s; v₀ = 6 / 0.505 = 11.9 m/s. 5) vₓ = 25 · 0.80 = 20 m/s; vᵧ = 25 · 0.60 = 15 m/s; h = 15² / 19.6 = 11.5 m; t = 2 · 15 / 9.8 = 3.06 s; x = 20 · 3.06 = 61.2 m |
| Going further | 1) x = 15 · cos 30° · t = 13.0 · t; y = 20 + 7.5 · t − 4.9 · t². 2) y = 0 → 4.9 t² − 7.5 t − 20 = 0, t = 2.93 s; x = 38.0 m; maximum height 20 + 7.5² / 19.6 = 22.9 m. 3) On landing, vₓ = 13.0 m/s and vᵧ = 7.5 − 9.8 · 2.93 = −21.2 m/s; speed 24.8 m/s, the same as given by conservation of energy: √(15² + 2 · 9.8 · 20) = 24.8 m/s. 4) From 20 m, at 45° the range is 35.8 m, less than at 30°: with an initial height the best angle is smaller than 45° |
