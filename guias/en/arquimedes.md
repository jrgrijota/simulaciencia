# Teacher guide: Archimedes' principle simulation

## Quick reference

The Archimedes' principle simulation drops a block into a tank and calculates its weight, the upthrust and the net force at every instant. Its main use is in ESO 4 (Year 11 in the UK, 10th grade in the US), with an application in ESO 3 to the study of forces and resultants.

| Item | Details |
| --- | --- |
| Link | [jrgrijota.github.io/simulacion-arquimedes](https://jrgrijota.github.io/simulacion-arquimedes/) |
| Year groups | ESO 4 (main use), ESO 3; occasional use in ESO 2 and Bachillerato 1 |
| Subject | Physics and Chemistry |
| Suggested time | 15–20 minutes of explanation with the simulation projected |
| Equipment | Projector or interactive whiteboard; runs in the browser, also on phones and tablets, with nothing to install |
| Prior knowledge | Density (ρ = m / V), weight (P = m · g), force as a quantity with a direction |
| Accessibility | Dark, light and high-contrast themes (gear button) |

## How the simulation works

The simulation has two modes, “Free values” and “Real materials”, chosen in the left-hand panel. Both show the tank with the block and, to its left, the percentage submerged. A vertical density scale marks the density of the liquid and of the block. Below the tank, the formulas for weight and upthrust appear with the current numbers. The simulation writes weight as P and upthrust as E.

| Mode | What the teacher controls | What it shows |
| --- | --- | --- |
| Free values | Mass (10–200 kg), Volume (50–150 L) and Liquid density (0.50–13.60 kg/L, in steps of 0.01). Starting values: 50 kg, 100 L and 1.000 kg/L | The resulting block density (from 0.07 to 4.00 kg/L), the weight, the upthrust, the net force, the submerged volume and the system state |
| Real materials | “Block material”: cork (0.24), wood (0.60), ice (0.917), plastic (0.95), aluminium (2.70), iron (7.87), lead (11.34) and gold (19.30 kg/L). “Liquid in the tank”: petrol (0.740), ethanol (0.789), oil (0.920), fresh water (1.000), seawater (1.025), glycerol (1.261) and mercury (13.534 kg/L) | The same, with textures for the material and the liquid. The volume is fixed at 100 L and the mass comes from m = ρ · V. It starts with wood in fresh water |
| “Free-body diagram” button (in both modes) | Show or hide the right-hand panel | Arrows for weight (red), upthrust (blue) and net force, with lengths proportional to their values; with the block resting on the bottom, the normal force too (violet). A label “P > E”, “P < E”, “P ≈ E” or “P = E + N” and the “STEP BY STEP” calculation |

Three elements support the explanation:

- **The formulas with numbers.** Below the tank you can read, for example, P = m·g = 50.0 × 9.8 = 490 N and E = Vsub·ρliq·g = 50.0 × 1.00 × 9.8 = 490 N. They let you check the calculation out loud.
- **The submerged volume.** The “Submerged vol.” card and the percentage next to the tank show which part of the block displaces liquid. When it floats, the submerged fraction equals ρblock / ρliquid. The liquid level rises as the block goes under: that is the displaced volume.
- **The free-body diagram.** The P and E arrows start from the centre of the block. The net force appears above in yellow if it points downwards and in green if it points upwards.

The “Real-time readings” drop-down is open at the start. It contains six cards and the “System state” block, which compares both densities with two bars and reads “Floating”, “Sinking”, “On the bottom” or “Neutral equilibrium”; the last one only when the two densities are equal. The “Key formulas” drop-down summarises density, upthrust, weight and the equilibrium condition Vsub/V = ρblock/ρliquid. In the header, “Description and quick rules” gives the three rules for comparing densities.

## Use in each year group

In ESO 4 the simulation is used to present Archimedes' principle and calculate upthrust; in ESO 3, to treat upthrust as one more force and to work with the resultant of opposing forces. In ESO 2 and Bachillerato 1 its use is occasional. It does not fit Bachillerato 2. The curriculum content quoted is from the LOMLOE Physics and Chemistry curriculum of the Community of Madrid (Spain), in our own translation.

### ESO 4: Archimedes' principle and flotation

*Ages 15–16 · Year 11 in the UK · 10th grade in the US*

**Curriculum content.** Block D: “Forces and pressure in fluids: effects of forces and pressure on liquids and gases, studying the fundamental principles that describe them”, “Archimedes' principle and Pascal's principle” and “Main forces in everyday surroundings: recognising weight, the normal force, friction, tension and upthrust, and using them to explain physical phenomena in different settings”. Block A: “the laboratory or virtual environments”.

**Objectives.** State Archimedes' principle. Calculate upthrust with E = ρliquid · g · Vsubmerged. Predict whether an object floats by comparing its density with that of the liquid. Explain what fraction is submerged when it floats.

**Teaching sequence (15–20 min).**

1. Free values with the starting values: 50 kg, 100 L and 1.000 kg/L. Ask why the block stops halfway down. Read “Submerged vol.”: 50.0 L. Those 50 L of water have a mass of 50 kg and weigh 490 N, the same as the upthrust. State the principle.
2. Turn on “Free-body diagram”. Point out P = 490.0 N and E = 490.0 N, with equal arrows and the label “P ≈ E”. Floating is a balance of forces, not an absence of weight.
3. Ask for a prediction and increase the mass to 80 kg. The block goes down until 80.0 L are submerged and E = P = 784 N. Open “Key formulas” and read Vsub/V = ρblock/ρliquid: 0.80 / 1.00 = 80 %.
4. Increase the mass to 150 kg (ρ = 1.50 kg/L). The block sinks. With all its volume under the liquid, the upthrust reaches its maximum: 100 × 1.00 × 9.8 = 980 N, less than P = 1470 N. When it reaches the bottom, the diagram adds the normal force: N = 1470 − 980 = 490 N, and the label changes to “P = E + N”.
5. Without touching the mass, take “Liquid density” to 2.00 kg/L. The block rises and floats with 75.0 L submerged: 75 × 2.00 × 9.8 = 1470 N. The upthrust depends on the liquid, not on the block.
6. Switch to “Real materials”. Iron sinks in fresh water and floats in mercury with about 58.1 L submerged (7.87 / 13.534). Finish with ice: 91.7 L submerged in fresh water and 89.5 L in seawater. Relate this to icebergs and to the waterline of ships.

### ESO 3: upthrust as a force and the resultant

*Ages 14–15 · Year 10 in the UK · 9th grade in the US*

**Curriculum content.** Block D: “Types of scalar and vector quantities”, “Force and motion”, “Calculating the resultant of several forces” and “Applying Newton's laws: observing everyday or laboratory situations that help understand how material systems behave under the action of forces”. Block A: “Derived quantities. International System of Units. Unit conversion. Conversion factors”.

**Objectives.** Recognise upthrust as a force exerted by the liquid. Add two forces in the same line and in opposite directions. Relate a zero resultant to rest and a non-zero resultant to a change in velocity. Express density in kg/L and in kg/m³.

**Teaching sequence (15–20 min).**

1. Free values with the starting values and “Free-body diagram” turned on. Present the two forces: weight downwards and upthrust upwards. With the block at rest, P = E = 490.0 N and the resultant is zero.
2. Calculate the weight on the board: P = m · g = 50 × 9.8 = 490 N. Check it in the “STEP BY STEP” box.
3. Increase the mass to 150 kg. While it goes down, the diagram shows “P > E” and a yellow arrow pointing down. Once the block is fully covered, Fn = 1470 − 980 = 490 N. There is a resultant, and that is why the velocity changes.
4. With the block at rest on the bottom, point out the third force: the bottom pushes up with N = 490 N and the resultant is 0 again (P = E + N). Then lower the mass to 30 kg. While it rises, the diagram shows “P < E” and a green arrow pointing up: 294 − 980 = −686 N. The negative sign means the resultant points upwards.
5. The block ends up floating with 30.0 L submerged and E = P = 294 N. Zero resultant again: Newton's first law.
6. Unit conversion with the “Block dens.” card: 30 kg / 100 L = 0.30 kg/L = 300 kg/m³. Remind students that 1 kg/L = 1 g/cm³ = 1000 kg/m³.

### ESO 2: occasional use

*Ages 13–14 · Year 9 in the UK · 8th grade in the US*

There is no specific content on flotation. The simulation serves as qualitative support for “Simple composition of forces” (block D) and for density as an “Indirect measurement” (block A). “Real materials” mode with fresh water is enough: materials less dense than 1.000 kg/L float and denser ones sink. To introduce density, the density simulation is better.

### Bachillerato 1: occasional review

*Ages 16–17 · Year 12 in the UK · 11th grade in the US*

Block E includes “Vector composition of a system of forces. Resultant force.” and “Newton's laws of dynamics. Conditions for translational equilibrium.”. The simulation is useful for reviewing the translational equilibrium of a floating object. It also lets you work on “Weight and the normal force.”. With 150 kg and 100 L the block rests on the bottom and the diagram draws the normal force: N = P − E = 1470 − 980 = 490 N. Students can be asked to calculate it before the diagram is turned on.

## Misconceptions it helps to address

The simulation mainly tackles the idea that floating depends on the weight or size of the object. Each row gives a common prior idea and how to break it down with the simulation.

| Students' idea | Correct idea | How to show it |
| --- | --- | --- |
| “Heavy things sink and light things float” | Floating depends on the density of the object compared with that of the liquid | Free values with 140 kg and 150 L: P = 1372 N, ρ = 0.93 kg/L and it floats. Then 60 kg and 50 L: P = 588 N, ρ = 1.20 kg/L and it sinks |
| “Big objects float and small ones sink” | Objects of the same size can float or sink | Real materials in fresh water: all the blocks are 100 L. Wood floats and aluminium sinks |
| “If an object sinks, the water doesn't push it” | Every submerged object experiences upthrust, whether it floats or not | Real materials, iron in fresh water: the block sinks with E = 980 N against P = 7713 N |
| “The deeper it is, the greater the upthrust” | Upthrust depends on the submerged volume, not on the depth | Free values with 150 kg and 100 L: while the fully submerged block goes down, “Upthrust (E)” stays at 980 N |
| “A heavier object gets more upthrust” | With the same submerged volume and the same liquid, the upthrust is the same | Real materials in fresh water: aluminium, lead and gold all get E = 980 N |
| “If it floats, the upthrust is greater than the weight” | For an object floating at rest, E = P | Starting values with “Free-body diagram”: P = E = 490.0 N and the label “P ≈ E” |
| “An object floats or sinks by itself, whatever the liquid” | It depends on the density of the liquid | Real materials: plastic floats in fresh water (0.95 < 1.000) and sinks in oil (0.95 > 0.920). Iron floats in mercury |

## Simplifications worth knowing

The simulation puts the comparison between weight and upthrust first, and to do so it simplifies the motion, the tank and some of the forces. It is worth knowing about these liberties so as not to reinforce wrong ideas by accident.

1. **The normal force only appears on the bottom.** The bottom is the only supporting surface: there are no side walls or lid that push. With the block on the bottom, N = P − E and the net force is 0.
2. **“Neutral equilibrium” requires equal densities.** The label only appears if ρblock and ρliquid are equal (with a 0.1 % tolerance for rounding). It is a limiting case: any noticeable difference makes the block rise or fall, even if very slowly.
3. **The level rises in a flat tank.** The liquid level rises according to the submerged area of the block spread over the width of the tank, as if everything were a 2D cross-section. That is why it rises more with the diagram open, when the tank is drawn narrower.
4. **Pressure is not shown.** The upthrust comes straight from E = ρliquid · g · Vsub. It is not calculated from the pressure difference between the faces. The 17 % to 83 % marks on the side only indicate relative depth. In ESO 4 the origin of upthrust has to be explained on the board.
5. **Practical units, not SI.** Densities are in kg/L and volumes in L; that way L × kg/L × 9.8 gives newtons directly. It uses g = 9.8 m/s². From ESO 3 onwards it is worth moving to kg/m³ and m³.
6. **Limited ranges in Free values.** With the sliders, the block density only goes from 0.07 to 4.00 kg/L. For higher densities use Real materials, where the volume is always 100 L and the mass reaches 1930 kg with gold.
7. **Qualitative motion only.** The velocity is multiplied by 0.90 in every frame inside the liquid, it has a cap and there is no air resistance. The block oscillates and slows down in an approximate way. It cannot be used to measure times or accelerations.
8. **Ideal block.** The block is always a square that does not rotate or tip over, and its size on screen grows linearly with the volume. Ship stability and hull shape are not dealt with.
9. **Fixed densities.** Each material and each liquid has a single value, with no effect of temperature. The bubbles that rise when the block is denser than the liquid are purely decorative.
