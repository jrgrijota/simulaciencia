# Teacher guide: electric circuits simulation

## Quick reference

The electric circuits simulation builds direct current circuits with a battery, a switch and bulbs or resistors, and shows the voltage, current and power for each component, with the electrons moving through the wires. It has three modes: Ohm's law with one component and measuring instruments, components in series and components in parallel. Its main use is in ESO 2 and ESO 3 (Years 9 and 10 in the UK, 8th and 9th grade in the US), with occasional use in ESO 4.

| Item | Details |
| --- | --- |
| Link | [jrgrijota.github.io/simulacion-circuitos](https://jrgrijota.github.io/simulacion-circuitos/) |
| Year groups | ESO 2 and ESO 3 (main use); occasional use in ESO 4 |
| Subject | Physics and Chemistry |
| Suggested time | 15–20 minutes of explanation with the simulation projected |
| Equipment | Projector or interactive whiteboard; runs in the browser, also on phones and tablets, with nothing to install. On narrow screens the controls move to the top and the canvas below; a large screen is better for explaining |
| Prior knowledge | Matter is made of atoms with electrons. For ESO 3, rearranging a formula with three quantities and reading a graph |
| Accessibility | Dark, light and high-contrast themes (gear button). “Electrons” button to hide the animation. Everything that can be tapped in the circuit can also be done from the panel |

## How the simulation works

The simulation has three modes, “Ohm's law”, “Series” and “Parallel”, chosen at the top of the left-hand panel. All three show the circuit at the top and, below it, a graph or some bar charts. Changes appear instantly: there is no button to press to make the circuit “work”.

| Mode | What the teacher controls | What it shows |
| --- | --- | --- |
| Ohm's law | “Resistance (R)” from 5 to 100 Ω, in steps of 5 (it starts at 20 Ω). The “＋ Record reading” and “Clear readings” buttons | A battery, a switch, an ammeter in series and a component with a voltmeter in parallel. Each instrument has a display with its reading. Below, the “CURRENT – VOLTAGE GRAPH” and the “OHM'S LAW” box with the calculation, for example “I = 6.00 V / 20 Ω = 0.300 A” |
| Series | “Number of components” (2 or 3), “Resistance R₁”, “R₂” and “R₃” from 5 to 100 Ω (they start at 10, 20 and 30 Ω) and the “Connected components” buttons R₁, R₂ and R₃ | The components one after another along the top wire. Next to each one, its R, V, I and P. Below, the “VOLTAGES (V)” and “CURRENTS (A)” charts |
| Parallel | The same controls as in series | Each component on its own branch, between the top wire and the bottom wire, with its values alongside and the same bar charts |
| In all three modes | “Battery voltage” from 0 to 12 V, in steps of 0.5 (it starts at 6.0 V). The switch. “Type of component”: “Bulbs” or “Resistors” | The bulbs glow brighter the more power they have; the resistors glow red hot. With the circuit open, the message “Open circuit: no current flows (I = 0).” appears |

The switch is opened and closed from the panel or by tapping it in the circuit. In series and in parallel, a component is removed and put back with the “Connected components” buttons or by tapping it in the circuit; in its place the two empty terminals remain, with the label “bulb removed” or “resistor removed”.

Four elements support the explanation:

- **The electrons.** Blue dots with a “−” sign travel along the wires from − to +, faster where the current is greater. They are always in every wire: when the circuit is opened they stop, but they do not disappear. An orange arrow with “I = …” marks the conventional direction of the current, from + to − outside the battery. The “Electrons” button, at the top right of the canvas, hides them.
- **The labels in the circuit.** The battery shows its voltage and its terminals. Each component shows “R₁ = 10 Ω” and below it (or to its right) “V₁”, “I₁” and “P₁”. With the switch open and a single gap in the circuit, the voltage across its ends can be read, for example “V = 6.00 V”.
- **The I–V graph.** In “Ohm's law” mode each recorded reading is a point. Each resistance has its own colour and its own straight line I = V / R; the current component's line is dashed and a circle marks the point where it is operating. The current scale adjusts itself.
- **The bar charts.** In series and in parallel there is one bar per component and one more for the battery (voltages) or the total (currents). When the last bar is the sum of the others, it is drawn stacked with the pieces V₁, V₂, V₃ or I₁, I₂, I₃. At the top right it shows the rule that holds, for example “V = V₁ + V₂ + V₃”.

The “Circuit readings” drop-down is open at the start. It gives the voltage, the total current and the resistance (the “Equivalent R” in series and in parallel), a “Components” table with R, V, I and P for each one and for the total, and a sentence summarising what is happening. In “Ohm's law” mode it adds the “Table of readings”, with up to 12 rows and the V / I column. The “Key formulas” drop-down collects I = q / t, V = I · R and its rearrangements, P = V · I, the rules for series and parallel, and the units. In the header, “Description and quick rules” summarises the three key rules.

## Use in each year group

In ESO 2 the simulation is used to present the electric circuit, its elements and the fundamental electrical quantities with their units and measuring instruments. In ESO 3 it works on Ohm's law, basic circuits and combining resistors in series and in parallel. In ESO 4 its use is occasional, for power and energy consumed. The curriculum content and assessment criteria quoted are from the LOMLOE Physics and Chemistry curriculum of the Community of Madrid (Spain), in our own translation.

### ESO 2: the circuit and electrical quantities

*Ages 13–14 · Year 9 in the UK · 8th grade in the US*

**Curriculum content.** Block E: “Considering the electrical nature of matter and how electrical energy is obtained from different energy sources. Fundamental electrical quantities. Units of measurement. Direct current”. Block A: “the laboratory and virtual environments”, “Measuring instruments” and “units of the International System and their symbols. Measuring quantities”.

**Assessment criteria.** 1.1 (identifying everyday physical and chemical phenomena using appropriate scientific terminology), 3.1 (using data in different formats to interpret and communicate information) and 3.2 (identifying basic laboratory materials and instruments).

**Objectives.** Recognise the elements of a circuit and their symbols. Distinguish voltage, current and resistance, with their units. Know how the ammeter and the voltmeter are connected. Explain direct current as electrons moving in one direction only.

**Teaching sequence (15–20 min).**

1. “Ohm's law” mode with the starting values. Point out the battery, the switch, the wires and the bulb, and draw their symbols on the board. The long plate of the battery is the + terminal.
2. Open the switch. The bulb goes out and the electrons stop, but they are still in the wires: they do not come out of the battery, they were already there. The ammeter reads 0.000 A. Close it again.
3. Read the instruments. The ammeter, in series, measures the current: 0.300 A. Explain that current is the charge that passes each second (I = q / t): 0.3 C every second, 18 C in a minute. The voltmeter, in parallel with the bulb, measures the voltage: 6.00 V. Write down the units: volt (V), ampere (A) and ohm (Ω).
4. Raise the “Battery voltage” to 12 V. The current doubles (0.600 A), the electrons go twice as fast and the bulb glows brighter. Lower it to 0 V: the battery does not push the electrons and there is no current.
5. Explain direct current: the electrons always move in the same direction, from − to +. By convention, the direction of the current is the opposite, from + to −, as the orange arrow shows.
6. Switch to “Series” and then to “Parallel” and remove bulb R₂ in each. In series all of them go out; in parallel the others stay on. Ask how the lights at home are connected.

### ESO 3: Ohm's law and combining resistors

*Ages 14–15 · Year 10 in the UK · 9th grade in the US*

**Curriculum content.** Block E: “The electrical nature of matter: charging objects and electric circuits”, “Electricity as the movement of electric charges. Ohm's law. Basic electric circuits. Combining resistors. Applications of electricity in everyday life”. Block A: “Recording data and results using tables, graphs and mathematical expressions” and “Applying the scientific method to simple experiments”.

**Assessment criteria.** 1.2 (solving problems with the appropriate laws, reasoning through the procedures and expressing the results), 2.1 (using the methods of science, including logical-mathematical reasoning), 3.1 (using data in different formats) and 3.2 (using units of measurement and mathematical tools correctly).

**Objectives.** Verify Ohm's law experimentally and represent it on a graph. Solve problems with V = I · R. Calculate the equivalent resistance of two or three resistors in series and in parallel. Explain how the voltage and the current are shared out in each arrangement.

**Teaching sequence (15–20 min).**

1. “Ohm's law” mode with R = 20 Ω. Ask the question: how does the current change when the voltage changes? Take the voltage to 2, 4, 6, 8, 10 and 12 V and press “＋ Record reading” at each one. The table gives 0.100, 0.200, 0.300, 0.400, 0.500 and 0.600 A, and the V / I column is always 20 Ω.
2. Look at the graph: the points form a straight line through the origin. Voltage and current are proportional and the constant is the resistance: V = I · R.
3. Change to R = 40 Ω and record 4, 8 and 12 V: 0.100, 0.200 and 0.300 A. The new line has half the gradient (0.025 A/V against 0.050 A/V): with more resistance, less current flows for the same voltage.
4. Set a problem: what resistance lets 0.240 A flow with a 12 V battery? R = 12 / 0.24 = 50 Ω. Check it with the slider.
5. “Series” mode with the starting values (6.0 V; 10, 20 and 30 Ω). The current is the same in all three, 0.100 A, and the voltages, 1, 2 and 3 V, add up to the battery's 6 V: the “battery” bar is stacked. Equivalent R = 10 + 20 + 30 = 60 Ω and I = 6 / 60 = 0.100 A. Remove R₂: the only path is broken and no current flows through any of them; there are 6.00 V across the empty terminals.
6. “Parallel” mode with the same values. They all have 6 V and the currents, 0.600, 0.300 and 0.200 A, add up to 1.100 A. 1 / equivalent R = 1/10 + 1/20 + 1/30, so equivalent R = 5.45 Ω, less than the smallest one. Remove R₂: the other branches do not change and the total current drops to 0.800 A (equivalent R = 7.5 Ω).

### ESO 4: occasional use

*Ages 15–16 · Year 11 in the UK · 10th grade in the US*

Block E includes “Work and mechanical energy. Power” and “Energy in our world: estimating the energy consumed in everyday life by searching for reliable information, experimenting and scientific reasoning”. The simulation gives the power of each component (P = V · I) and can be used to estimate the energy consumed with E = P · t. For example, the bulb in “Ohm's law” mode with 6 V and 20 Ω uses 1.80 W; in one hour that is 1.80 × 3600 = 6480 J. With three identical 20 Ω bulbs at 6 V, in parallel each one uses 1.80 W and in series only 0.20 W: nine times less, which is why they glow much more dimly in series. It does not deal with energy in kWh or the cost on the bill.

## Misconceptions it helps to address

The simulation mainly tackles the idea that current “gets used up” as it passes through the components and the idea that the battery always gives the same current. Each row gives a common prior idea and how to break it down with the simulation.

| Students' idea | Correct idea | How to show it |
| --- | --- | --- |
| “Current gets used up in the bulbs: less reaches the last one” | In series the current is the same at every point in the circuit; what is transformed is energy | “Series” mode: I₁ = I₂ = I₃ = 0.100 A and the electrons move just as fast before and after each bulb |
| “Electrons come out of the battery and take time to reach the bulb” | The electrons are already in every wire; the battery sets all of them moving at once | Open and close the switch: the electrons stop and start all round the circuit at the same time |
| “The battery always gives the same current” | The battery maintains the voltage; the current depends on the resistance of the circuit | With 6 V: 0.300 A with one 20 Ω component, 0.100 A with three in series and 1.100 A with three in parallel |
| “More bulbs means more resistance” | In series the equivalent resistance increases; in parallel it decreases | Parallel with 2 components: 6.67 Ω and 0.900 A; with 3: 5.45 Ω and 1.100 A |
| “If one bulb blows, they all go out” | Only in series; in parallel each branch is independent | Remove R₂ in “Series” and in “Parallel” |
| “Voltage and current are the same thing” | There can be a voltage without a current | “Ohm's law” mode with the switch open: the ammeter reads 0.000 A and “V = 6.00 V” can be read below the switch |
| “The bulb with more resistance always glows more dimly” | In series the one with the highest resistance glows brightest (P = I² · R); in parallel, the one with the lowest | Starting values: in series R₃ glows brightest (0.30 W); in parallel, R₁ (3.60 W) |
| “Electrons go from + to −, like the current” | The conventional direction is from + to −; electrons go from − to + | The orange arrow and the blue electrons go in opposite directions |

## Simplifications worth knowing

The simulation makes sure the rules for series and parallel can be seen, and to do so it treats every element as ideal. It is worth knowing about these liberties so as not to reinforce wrong ideas by accident.

1. **Ideal battery.** It has no internal resistance: it always gives its voltage, whatever current flows. With three 5 Ω components in parallel at 12 V, 7.2 A flows, which a real battery could not sustain. Short circuits and fuses are not simulated.
2. **Ohmic components.** The bulbs have a constant resistance. In a real filament bulb the resistance increases a lot as it heats up, so its I–V graph is not a straight line. Ohm's law holds well for resistors at constant temperature.
3. **Ideal wires, switch and instruments.** The wires and the switch have no resistance; nor does the ammeter, and the voltmeter lets no current through.
4. **Electron speed not to scale.** The electrons in a real wire drift on average fractions of a millimetre per second. In the animation the speed is proportional to the current (70 px/s per ampere) with a cap from about 4.6 A upwards so that they can be followed by eye. The spacing between electrons is always the same.
5. **Approximate brightness.** The brightness increases with power but saturates (P / (P + 0.5 W)), so that both 0.1 W and 3 W can be told apart. It is not a measurement of the light emitted.
6. **Voltage across gaps.** With a single gap in series (a component removed or the switch open), the whole battery voltage is across its ends. With two gaps at once that voltage is not defined in an ideal circuit and “—” is shown.
7. **Direct current only.** There is no alternating current, no 230 V mains and no consumption in kWh. The resistances go in steps of 5 Ω and the voltage in steps of 0.5 V.
