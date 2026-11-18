# Teacher's guide: Motion Graphs

## Quick reference

The Motion Graphs simulation puts a moving object (a car or a person) on a straight track and, as it moves, draws its position–time (x‑t), velocity–time (v‑t) and acceleration–time (a‑t) graphs. It is for learning to read and build graphs of constant-velocity motion and constant-acceleration motion: what the slope means, what the area means and what the sign tells you. It has three modes: explore with everyday examples, solve 10 challenges that ask students to recreate a graph, and move the object by hand to see the graph of their own motion. Its main use is in ESO 2 (constant velocity) and ESO 4 (constant velocity and constant acceleration); in ESO 3 it covers position, path, distance travelled, velocity and acceleration.

| Item | Details |
| --- | --- |
| Link | [jrgrijota.github.io/simulacion-cinematica](https://jrgrijota.github.io/simulacion-cinematica/?lang=en) |
| Year groups | ESO 2, 3 and 4 (Years 9 to 11 in the UK) |
| Subject | Physics and Chemistry |
| Suggested time | 15–20 minutes of explanation with the simulation projected; the challenges, a whole lesson |
| Equipment | Projector or interactive whiteboard; it runs in the browser, also on phones and tablets, with nothing to install. On narrow screens the track and graphs sit on top and the controls below. “Move it yourself” works best with a finger on a tablet or on the interactive whiteboard |
| Prior knowledge | Reading a point on Cartesian axes. For ESO 4, velocity as displacement divided by time |
| Accessibility | SimulaCiencia, dark, light and high-contrast themes (gear button). Speed ×½, ×1 and ×2. Keyboard control: space bar to start or pause, R to reset and arrow keys to move the time cursor or the object. Results and pauses are read aloud by screen readers |

## How the simulation works

At the top of the canvas is the track, a ruler from −20 to 100 m with the positive direction marked (“x +”). Below it, the three graphs share the time axis (0 to 20 s) and a dashed vertical cursor: the point on each graph and the position of the object on the track always belong to the same instant. The axes have fixed scales (x from −20 to 100 m, v from −10 to 10 m/s, a from −3 to 3 m/s²) so that different motions can be compared.

On the track, the object carries a green velocity arrow and an orange acceleration arrow; their length is proportional to the value and their direction is that of the vector. With “Marks every second” it leaves a dot on the track every second: at constant velocity the marks are evenly spaced; with constant acceleration they get further apart or closer together.

The simulation has three modes, chosen at the top of the left-hand panel.

| Mode | What you do |
| --- | --- |
| Explore | Choose “Constant velocity” or “Constant acceleration”, set “Initial position” (−20 to 100 m), “Velocity” or “Initial velocity” (−10 to 10 m/s, with the equivalent in km/h) and “Acceleration” (−3 to 3 m/s²), or pick one of the “Everyday examples”. With constant acceleration, the box “Stops when it reaches v = 0” makes it brake without reversing |
| Challenges | 10 graphs to recreate by building the motion in stages. Challenges 1 to 5 are constant velocity (ESO 2) and 6 to 10 constant acceleration (ESO 4). Each challenge has a short story, a “Hint” and, on pressing “▶ Check”, a message saying whether it matches or where and why the graphs move apart. After two failed attempts “Show solution” appears. The “Free” option is for preparing classroom examples |
| Move it yourself | Students drag the object with the mouse or a finger (or the arrow keys) for 20 s and see the x‑t and v‑t graphs of their own motion. Under “Graph to follow” they can pick one of three graphs and try to stay inside a band; at the end they get the percentage of time inside |

The everyday examples are: “Person walking (1.5 m/s)”, “Person running (4 m/s)”, “Car on a street (8.5 m/s ≈ 30 km/h)”, “Person walking back towards the origin”, “Car reversing (−2 m/s)” (constant velocity), and “Car pulling away slowly”, “Car braking at traffic lights” and “Slows down, stops and comes back” (constant acceleration).

In the challenges each stage has a duration and a value: the velocity in the constant-velocity challenges (it jumps from one stage to the next) and the acceleration in the constant-acceleration ones (velocity is continuous). The challenge shows the target graph as a dashed yellow line and the student's motion is drawn on top. In challenges 5, 6 and 10 the target graph is the v‑t graph, and the story says where the object starts, because a v‑t graph does not tell you.

Under “View” you choose the visible graphs, the object and these aids:

- **“Slope of x‑t (velocity)”.** Draws the tangent to the x‑t graph at the cursor and labels it “slope = v = … m/s”.
- **“Area under v‑t (displacement)”.** Shades the area between the v‑t graph and the axis (above it, positive; below it, negative) and labels it “area = Δx = … m”.
- **“Keep the previous one (in grey)”.** Keeps the previous run to compare it with the new one.
- **“Pause at key moments”.** Stops the simulation when the object stops or changes direction, with a label such as “Changes direction: v = 0, a = −1.0 m/s²”.

The top bar has “Start”, “Reset”, the speed (×½, ×1, ×2) and the “Time” slider, which moves the cursor to any moment of the run so far. The drop-down “Data at the cursor time” gives t, x, v (also in km/h), a, the distance travelled and the displacement. “Table of values” gives t, x, v and a every second and can be copied into a spreadsheet. “Equations of motion” writes the equations with the example's data (for example, x = 0 + 7 · t − 0.5 · t²) and evaluates them at the cursor. “Key ideas” sums up the five ideas of the simulation.

If the object reaches an end of the track, the run stops there and a message says so. On the v‑t graph, if the velocity goes beyond ±10 m/s the graph is cut off and “The graph goes off the scale” is shown.

## Use in each year group

In ESO 2 the simulation works on x‑t and v‑t graphs of constant-velocity motion, including being at rest and coming back. In ESO 3 it works on position, path, distance travelled, displacement, average and instantaneous velocity and acceleration. In ESO 4 it works on the quantities, equations and graphs of constant-velocity and constant-acceleration motion. The curriculum content and assessment criteria quoted are from the LOMLOE curriculum of the Community of Madrid (Spain), in our own translation.

### ESO 2: constant-velocity graphs

*Ages 13–14 · Year 9 in the UK · 8th grade in the US*

**Curriculum content.** Block D: “Predicting simple motions from the concepts of kinematics, formulating testable hypotheses about future values of these quantities through the interpretation of graphs or experimental work. Introduction to kinematics. Motion. Frames of reference. Distance–time and velocity–time graphs for uniform straight-line motion”.

**Assessment criteria.** 1.1 (identify the most relevant everyday physical and chemical phenomena using appropriate scientific terminology), 2.2 (choose the best way to test or refute the hypotheses put forward) and 3.1 (use data in different formats to interpret and communicate information about a specific physical or chemical process).

**Objectives.** Locate a position relative to an origin and a positive direction. Recognise that an x‑t graph is not the object's path. Read the velocity of a constant-velocity motion as the slope of the x‑t graph and as the value of a horizontal v‑t graph. Interpret horizontal stages (at rest) and downward stages (coming back, negative velocity). Calculate x = x₀ + v · t.

**Teaching sequence (15–20 min).**

1. “Explore” mode, example “Person walking (1.5 m/s)”, with “Marks every second”. Before pressing “Start”, ask what shape the x‑t graph will have (the simulation itself invites a prediction). The person leaves evenly spaced marks and the x‑t graph is a straight line: 1.5 m more each second. At 20 s the person is at x = 30 m.
2. Turn on “Keep the previous one (in grey)” and choose “Person running (4 m/s)”. Both lines start at the same point: the steeper one belongs to the faster person. At 20 s they are at x = 80 m. Turn on “Slope of x‑t” and move the cursor: the slope is always 4 m/s.
3. Look at the v‑t graphs of both motions: horizontal lines at 1.5 and 4 m/s. At constant velocity the velocity does not change; the a‑t graph is 0 the whole time.
4. “Person walking back towards the origin”: starts at x = 60 m with v = −2 m/s. The x‑t graph goes down and the v‑t graph is below the axis. Stress that the person is not “going down”: they are walking to the left; the minus sign gives the direction. At 20 s they are at x = 20 m.
5. “Challenges” mode, challenge 3 “Stop at the newsstand”. Read the graph stage by stage: from 0 to 30 m in 6 s (5 m/s), 6 s at rest, from 30 to 50 m in 8 s (2.5 m/s). Build the stages and press “▶ Check”. If the resting stage is left out, the message asks: “Did you count the stages where it is at rest?”.
6. Challenge 2 “There and back” or challenge 4 “Heading home” as an exercise for students: negative velocities and crossing the origin.

### ESO 3: position, displacement and velocity

*Ages 14–15 · Year 10 in the UK · 9th grade in the US*

**Curriculum content.** Block D: “Predicting simple motions from the concepts of kinematics, formulating testable hypotheses about future values of these quantities and validating them through numerical calculation, the interpretation of graphs or experimental work. Scalar and vector quantities. Position, path and distance travelled. Average velocity, instantaneous velocity and acceleration”.

**Assessment criteria.** 1.1 (understand and explain the most relevant everyday physical and chemical phenomena using the appropriate principles, theories and laws), 1.2 (solve the problems set, reasoning out the procedure and expressing the results properly), 3.1 (use data in different formats to interpret and communicate information) and 3.2 (use units of measurement and mathematical tools appropriately).

**Objectives.** Tell position, displacement and distance travelled apart. Recognise velocity as a vector quantity (size and direction). Calculate average velocity and compare it with instantaneous velocity. Introduce acceleration as the change in velocity each second.

**Teaching sequence (15–20 min).**

1. “Challenges” mode, challenge 2 “There and back” (4 m/s for 10 s and −4 m/s for 10 s), with the solution built in “Free” or after solving it. Open “Data at the cursor time”. At 20 s the position is 0, the displacement is 0 m and the distance travelled is 80 m. The path is a straight line; the x‑t graph is a “roof”, not the route.
2. Challenge 3 “Stop at the newsstand”: average velocity over the 20 s = 50 m / 20 s = 2.5 m/s. Move the cursor: the instantaneous velocity is 5, 0 and 2.5 m/s depending on the stage. The average is not the velocity “most of the time”.
3. Velocity as a vector: “Car reversing (−2 m/s)”. The green arrow points left and the value is negative. Compare with “Person running”: the speed of each is the value without the sign.
4. Acceleration: “Explore” mode, “Constant acceleration”, example “Car pulling away slowly” (a = 0.5 m/s²) with “Marks every second”. The v‑t graph rises 0.5 m/s every second; the marks get further and further apart. Use the table of values to check it.
5. Velocity in km/h: with “Car on a street (8.5 m/s ≈ 30 km/h)”, do the unit conversion and check it against the km/h value in the panel.

### ESO 4: constant velocity and constant acceleration

*Ages 15–16 · Year 11 in the UK · 10th grade in the US*

**Curriculum content.** Block D: “Predicting and testing, using experimentation and mathematical reasoning, the main quantities, equations and graphs that describe the motion of a body, relating it to everyday situations and to the improvement of quality of life. Uniform straight-line motion. Uniformly accelerated straight-line motion”.

**Assessment criteria.** 1.1 (understand and explain everyday physical and chemical phenomena rigorously), 1.2 (solve the problems set, expressing the results correctly and precisely), 2.2 (predict answers that can be tested experimentally or by deduction, applying logical and mathematical reasoning) and 3.2 (use units and mathematical tools appropriately).

**Objectives.** Write and interpret x = x₀ + v₀ · t + ½ · a · t² and v = v₀ + a · t. Link the three graphs of constant-acceleration motion: a parabola on x‑t, a sloping line on v‑t and a horizontal line on a‑t. Get the acceleration as the slope of the v‑t graph and the displacement as the area under it. Tell speeding up from slowing down by the signs of v and a, not by the sign of a alone.

**Teaching sequence (15–20 min).**

1. Quick review of constant velocity with “Person running (4 m/s)”: a straight line on x‑t, horizontal on v‑t. Turn on “Area under v‑t”: at 10 s the area is 4 · 10 = 40 m, the same as the distance moved.
2. “Car braking at traffic lights” (v₀ = 10 m/s, a = −2 m/s², “Stops when it reaches v = 0”). Predict when it stops: 10 / 2 = 5 s. The v‑t graph falls in a straight line to 0 and the x‑t graph curves until it is horizontal. Area of the triangle = ½ · 5 · 10 = 25 m; check that the car stops at x = 25 m. Open “Equations of motion”: from t = 5 s the constant-acceleration equations no longer apply.
3. Untick “Stops” with “Slows down, stops and comes back” (v₀ = 7 m/s, a = −1 m/s²) and turn on “Pause at key moments”. At t = 7 s it pauses: “Changes direction: v = 0, a = −1.0 m/s²”. The velocity is 0 for an instant, but the acceleration is not. The top of the parabola is at x = 24.5 m.
4. Signs: after the pause the car comes back with negative v and negative a: it speeds up to the left. It slows down when v and a have opposite signs. Check this with challenge 10 “Reversing”, which slows down with a positive acceleration.
5. Challenges 6 to 9 for students, in pairs. Challenge 6 “The car pulls away” gives the v‑t graph: the slope of the first stage is the acceleration (1 m/s²). Challenge 8 “The mountain” dismantles the idea that the graph is a hill.
6. “Move it yourself” mode to finish: one student moves the object on the interactive whiteboard trying to follow graph 2 “There and back” while the class says what they should do in each stage.

## Misconceptions it helps to address

The simulation mainly tackles the confusion between a graph and the object's path, the idea that negative velocity means slowing down and the idea that v = 0 implies a = 0. Each row gives a common prior idea and how to dismantle it with the simulation.

| Student idea | Correct idea | How to show it |
| --- | --- | --- |
| “The graph is the path the object follows” | A graph shows how a quantity changes over time; the object always moves in a straight line | Challenge 8 “The mountain”: the x‑t graph goes up and down, but the car moves forward, stops and comes back along the same track |
| “If the x‑t graph goes down, the object is going downhill or slowing down” | If the x‑t graph goes down, the object is moving in the negative direction | “Person walking back towards the origin”: downward x‑t graph and a person walking to the left |
| “Negative velocity means it is slowing down” | The sign of v gives the direction; it slows down when v and a have opposite signs | Challenge 10 “Reversing”: v is negative all the time and, in the third stage, it slows down with positive a |
| “Negative acceleration means slowing down” | With negative v, a negative a makes it go faster and faster | “Slows down, stops and comes back” after t = 7 s: v and a negative, the marks get further apart |
| “If the velocity is 0, the acceleration is 0 too” | At the instant it changes direction v = 0, but a keeps the same value | “Pause at key moments” in “Slows down, stops and comes back”: “v = 0, a = −1.0 m/s²” |
| “A horizontal stage on x‑t is constant velocity, as on v‑t” | Horizontal on x‑t is being at rest; horizontal on v‑t is constant velocity | Challenge 3: the resting stage is horizontal on x‑t and sits at v = 0 on v‑t |
| “Distance travelled and displacement are the same” | They only match if the object does not change direction | Challenge 2 “There and back”: 80 m travelled and zero displacement |
| “Both graphs of the same motion should have the same shape” | The v‑t graph is the slope of the x‑t graph: a straight x‑t line is horizontal on v‑t; a parabola is a sloping line | Look at the three graphs together in any constant-acceleration example |

## Simplifications worth knowing

The simulation puts clear, comparable graphs first. To achieve that it makes these simplifications; it is worth knowing them so as not to reinforce wrong ideas by accident.

1. **Motion in one dimension and a point object.** The position is that of one point of the object (the centre of the car or the person's feet). There are no bends and no paths in a plane.
2. **Instant velocity changes in constant-velocity stages.** In the constant-velocity challenges the velocity jumps from one value to another with no transition, which is impossible in reality (it would need an infinite acceleration). That is why those challenges do not draw the a‑t graph, and the simulation explains why instead.
3. **Constant acceleration in stages.** With constant acceleration, the acceleration changes suddenly between stages. A real car speeds up and brakes more smoothly.
4. **No causes of motion.** There are no forces, friction or mass: the simulation is kinematics only. Other simulations on the site cover forces.
5. **Classroom scales and values.** Values (up to 10 m/s and 3 m/s²) were chosen so that the motion fits in 120 m and 20 s. A car in town travels at about 8 to 14 m/s and brakes at about 3 to 8 m/s².
6. **The track ends.** If the object reaches −20 m or 100 m, the run ends there. Outside the simulation the motion would carry on.
7. **“Move it yourself” does not give the acceleration.** The velocity is calculated as the average slope over the last quarter of a second, as motion sensors do. The acceleration of a hand-made motion changes so quickly that its graph would be unreadable, so it is not drawn.

## Student activity worksheet

The [activity worksheet](https://simulaciencia.es/en/worksheets/cinematica/) follows a predict, observe and explain structure. Each activity links to the simulation already set up, so it works in the computer room, with tablets or as homework. It downloads in Word and LibreOffice formats so it can be adapted.

| Year group | Activities | Suggested time |
| --- | --- | --- |
| ESO 2 (Year 9) | Activities 1 to 4, challenges 1 to 5 and problems 1 and 2 of Apply what you have learnt | One 50–55 minute lesson |
| ESO 3 (Year 10) | Activities 1 to 5 and problems 1 to 3 | One lesson, or two if the challenges are done |
| ESO 4 (Year 11) | The whole worksheet, with challenges 6 to 10 and Going further | Two lessons |

The “Before you start” table collects five prior ideas about motion graphs. It is best not to correct it at the beginning: students come back to it in “Review your ideas”. The challenges save in the browser which ones have been completed (they appear with ✓ in the list), so the teacher can check each student's progress on their computer.

### Answers

| Section | Answer |
| --- | --- |
| Before you start | All false. a) The graph is not the path: the object moves in a straight line (activity 1 and challenge 8). b) If the x‑t graph goes down, the object is moving in the negative direction (activity 3). c) Horizontal on x‑t means at rest (activity 2). d) Negative velocity is the negative direction; it slows down if v and a have opposite signs (activity 6). e) When it changes direction, v = 0 but a is not (activity 7) |
| Activity 1 | The x‑t graph is a rising straight line; the person moves in a straight line and leaves evenly spaced marks. In 20 s they reach x = 30 m: 1.5 m each second. The runner's line is steeper and reaches 80 m. The steeper the x‑t graph, the faster. The graph is not the path |
| Activity 2 | Stages: 0–6 s from 0 to 30 m (v = 5 m/s); 6–12 s at 30 m (v = 0, at rest); 12–20 s from 30 to 50 m (v = 2.5 m/s). On v‑t: three steps at 5, 0 and 2.5 m/s. A horizontal stage on x‑t means v = 0 |
| Activity 3 | The x‑t graph falls from 60 to 20 m in 20 s; the v‑t graph is at −2 m/s, below the axis; the green arrow points left. Negative velocity means moving in the negative direction of the axis, towards the origin. x = 60 − 2 · t |
| Activity 4 | There and back: final position 0 m, displacement 0 m, distance travelled 80 m. Average velocity (displacement / time) = 0 m/s; average speed (distance / time) = 4 m/s. They only match if the object does not change direction |
| Activity 5 | Car pulling away: a = 0.5 m/s². Table: t = 0, 2, 4, 6 s → v = 0; 1; 2; 3 m/s. v increases by 0.5 m/s each second; the marks get further apart. The v‑t graph is a sloping straight line and the x‑t graph a curve (parabola). The a‑t graph is horizontal at 0.5 m/s² |
| Activity 6 | Traffic lights: it stops at t = 10 / 2 = 5 s. Area of the triangle = ½ · 5 · 10 = 25 m, and the car stops at x = 25 m. v and a have opposite signs: it is slowing down. After stopping, the x‑t graph is horizontal and v = 0 |
| Activity 7 | Slows down, stops and comes back: it stops for an instant at t = 7 s, at x = 24.5 m, with v = 0 and a = −1 m/s². Then it comes back with negative v, faster and faster, because v and a have the same sign. It returns to x = 0 at t = 14 s. The x‑t graph looks like a mountain but the motion is in a straight line |
| Challenges (stages) | 1: 20 s at 2 m/s. 2: 10 s at 4 m/s and 10 s at −4 m/s. 3: 6 s at 5 m/s, 6 s at 0, 8 s at 2.5 m/s. 4 (x₀ = 80 m): 6 s at −10 m/s, 4 s at 0, 10 s at −3 m/s. 5 (x₀ = 10 m): 5 s at 6 m/s, 5 s at 0, 10 s at −3 m/s. 6 (v₀ = 0): 8 s at 1 m/s², 8 s at 0. 7 (v₀ = 10 m/s): 5 s at −2 m/s², 15 s at 0. 8 (v₀ = 8 m/s): 16 s at −1 m/s². 9 (v₀ = 0): 4 s at 2 m/s², 6 s at 0, 4 s at −2 m/s², 6 s at 0. 10 (x₀ = 60 m, v₀ = 0): 4 s at −2 m/s², 4 s at 0, 4 s at 2 m/s², 8 s at 0 |
| Apply what you have learnt | 1) v = (35 − 5) / 10 = 3 m/s; x = 5 + 3 · t; at t = 20 s, x = 65 m. 2) 72 km/h = 20 m/s; t = 500 / 20 = 25 s. 3) Stage A: v = 2 m/s; B: at rest; C: v = −4 m/s, back towards the origin. 4) a = (0 − 20) / 4 = −5 m/s²; Δx = ½ · 4 · 20 = 40 m. 5) v = 0 + 3 · 6 = 18 m/s; x = ½ · 3 · 36 = 54 m |
| Going further | 1) On the x‑t graph of challenge 8, the slope at t = 0 is 8 m/s; at t = 8 s it is 0; at t = 12 s it is −4 m/s. 2) Area under the v‑t graph of challenge 9: 16 + 48 + 16 = 80 m, the final position. 3) Challenge 10: between 8 and 12 s, v < 0 and a > 0: it slows down even though the acceleration is positive |
