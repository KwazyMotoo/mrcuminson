// Define the skill tree data
const skillTreeData = [
  {
    id: 'skill1',
    name: 'Skill 1',
    description: 'This is the description for Skill 1',
    prerequisites: [],
    unlocked: true,
    unlockedByDefault: true
  },
  {
    id: 'skill2',
    name: 'Skill 2',
    description: 'This is the description for Skill 2',
    prerequisites: ['skill1'],
    unlocked: false,
    unlockedByDefault: false
  },
  {
    id: 'skill3',
    name: 'Skill 3',
    description: 'This is the description for Skill 3',
    prerequisites: ['skill1'],
    unlocked: false,
    unlockedByDefault: false
  },
  {
    id: 'skill4',
    name: 'Skill 4',
    description: 'This is the description for Skill 4',
    prerequisites: ['skill2'],
    unlocked: false,
    unlockedByDefault: false
  },
  {
    id: 'skill5',
    name: 'Skill 5',
    description: 'This is the description for Skill 5',
    prerequisites: ['skill2', 'skill3'],
    unlocked: false,
    unlockedByDefault: false
  }
];

// Get the skill tree container element
const skillTreeContainer = document.getElementById('skillTreeContainer');

// Function to render the skill tree
function renderSkillTree() {
  skillTreeContainer.innerHTML = '';

  // Loop through the skill tree data and render each skill
  skillTreeData.forEach(skill => {
    const skillElement = document.createElement('div');
    skillElement.id = skill.id;
    skillElement.classList.add('skill');
    skillElement.innerText = skill.name;

    // Add click event listener to the skill element
    skillElement.addEventListener('click', () => {
      if (skill.unlocked) {
        // Skill is already unlocked, do something
        console.log('Skill is already unlocked');
      } else if (canUnlockSkill(skill)) {
        // Unlock the skill
        skill.unlocked = true;
        skillElement.classList.add('active');

        // Do something after unlocking the skill
        console.log('Skill unlocked:', skill.name);
      } else {
        // Skill prerequisites are not met, do something
        console.log('Cannot unlock skill:', skill.name);
      }
    });

    // Check if the skill is unlocked by default
    if (skill.unlockedByDefault) {
      skillElement.classList.add('active');
    }

    // Check if the skill prerequisites are met
    if (!canUnlockSkill(skill)) {
      skillElement.classList.add('disabled');
    }

    // Append the skill element to the skill tree container
    skillTreeContainer.appendChild(skillElement);
  });
}

// Function to check if the skill prerequisites are met
function canUnlockSkill(skill) {
  if (skill.prerequisites.length === 0) {
    return true;
  }

  // Check if all prerequisites are unlocked
  return skill.prerequisites.every(prerequisite => {
    const prerequisiteSkill = skillTreeData.find(skill => skill.id === prerequisite);
    return prerequisiteSkill.unlocked;
  });
}

// Render the initial skill tree
renderSkillTree();
