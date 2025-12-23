function solve(input) {
    const n = Number(input[0]);
    let astronauts = {};

    // FORM THE CREW
    for (let i = 1; i <= n; i++) {
        const data = input[i].split(" ");

        const aName = data[0];
        const aSection = data[1];
        const aSkills = data[2].split(",");

        astronauts[aName] = { aSection, aSkills };
    }

    // PERFORM COMMANDS
    let index = n + 1;

    while (input[index] !== "End") {
        const comm = input[index].split(" / ");

        const action = comm[0];
        const currName = comm[1];
        const currA = astronauts[currName];

        if (action === "Perform") {
            const section = comm[2];
            const skill = comm[3];

            if ((currA.aSection === section) & currA.aSkills.includes(skill)) {
                console.log(
                    `${currName} has successfully performed the skill: ${skill}!`
                );
            } else {
                console.log(`${currName} cannot perform the skill: ${skill}.`);
            }
        } else if (action === "Transfer") {
            const newSection = comm[2];
            currA.aSection = newSection;
            console.log(`${currName} has been transferred to: ${newSection}`);
        } else if (action === "Learn Skill") {
            const newSkill = comm[2];
            if (currA.aSkills.includes(newSkill)) {
                console.log(
                    `${currName} already knows the skill: ${newSkill}.`
                );
            } else {
                currA.aSkills.push(newSkill);
                console.log(
                    `${currName} has learned a new skill: ${newSkill}.`
                );
            }
        }

        index++;
    }

    // LOG ALL ASTRONAUTS
    Object.entries(astronauts).forEach(([name, { aSection, aSkills }]) =>
        console.log(
            `Astronaut: ${name}, Section: ${aSection}, Skills: ${aSkills
                .slice()
                .sort()
                .join(", ")}`
        )
    );
}

solve([
    "2",
    "Alice command_module piloting,communications",
    "Bob engineering_bay repair,maintenance",
    "Perform / Alice / command_module / piloting",
    "Perform / Bob / command_module / repair",
    "Learn Skill / Alice / navigation",
    "Perform / Alice / command_module / navigation",
    "Transfer / Bob / command_module",
    "Perform / Bob / command_module / maintenance",
    "End",
]);

/*
solve([
  "3",
  "Tom engineering_bay construction,maintenance",
  "Sara research_lab analysis,sampling",
  "Chris command_module piloting,communications",
  "Perform / Tom / engineering_bay / construction",
  "Learn Skill / Sara / robotics",
  "Perform / Sara / research_lab / robotics",
  "Transfer / Chris / research_lab",
  "Perform / Chris / research_lab / piloting",
  "Learn Skill / Tom / diagnostics",
  "Perform / Tom / engineering_bay / diagnostics",
  "End"]
);

*/
