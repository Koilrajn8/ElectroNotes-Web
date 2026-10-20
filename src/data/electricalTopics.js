
const electricalTopics = [
  {
    id: "fundamentals",
    title: "Electrical Fundamentals",
    topics: [
      {
        id: "ohms-law",
        title: "Ohm's Law",
        path: "/learn/ohms-law",
        description:
          "Understand the relationship between voltage, current and resistance.",
        sections: [
          {
            id: "working-principle",
            heading: "Working Principle",
            body: "Ohm's Law states that current through an ohmic conductor is proportional to the voltage across it, provided physical conditions such as temperature remain constant.",
            formula: "V = I × R",
          },
          {
            id: "example",
            heading: "Practical Example",
            body: "If a resistor has a resistance of 5 ohms and a current of 2 amperes flows through it, the voltage across it is 10 volts.",
            formula: "V = 2 × 5 = 10 V",
          },
          {
            id: "applications",
            heading: "Applications",
            body: "Ohm's Law is used to calculate voltage, current, or resistance in suitable electrical circuits.",
          },
        ],
      },

      {
        id: "power",
        title: "Electrical Power",
        path: "/learn/electrical-power",
        description: "Understand electrical power and energy.",
        content:
          "Electrical power is the rate at which electrical energy is transferred.",
        formula: "P = V × I",
      },
    ],
  },
  {
    id: "transformers",
    title: "Transformers",
    topics: [
      {
        id: "transformer-working",
        title: "Working Principle",
        path: "/learn/transformer-working",
        description: "Learn how transformers transfer electrical energy.",
        content: "A transformer operates through electromagnetic induction.",
        formula: "V1 / V2 = N1 / N2",
      },
      {
        id: "transformer-construction",
        title: "Construction",
        path: "/learn/transformer-construction",
        description: "Learn about transformer cores and windings.",
        content:
          "A transformer typically consists of a magnetic core and windings.",
        formula: "Turns ratio = N1 / N2",
      },
    ],
  },
  {
    id: "motors",
    title: "Motors",
    topics: [
      {
        id: "induction-motor",
        title: "Induction Motor",
        path: "/learn/induction-motor",
        description: "Understand induction motor operation.",
        content:
          "An induction motor develops torque through electromagnetic induction.",
        formula: "Ns = 120f / P",
      },
    ],
  },
];

export default electricalTopics;
