# Git for Professionals Tutorial

Notes taken from the video [Git for Professionals Tutorial - Tools & Concepts for Mastering Version Control with Git](https://www.youtube.com/watch?v=Uszj_k0DGsg)

## The Perfect Commit

1. Add the ***right*** changes!
2. Compose a ***good*** commit message!

### Add the ***right*** changes

- Includes changes of a single topic
- Be selective
- Use the staging area
- git add <name-file>
- git diff <name-file>
- git add -p <name-file>
  - It goes through the different chunks of modified code
  - Asks us if we want to add them or not to the staging area
-

### The Perfect Commit *Message*

1. Subject: concise summmary of what happened
2. Body: more detailed explanation
  - What iw nos different than before?
  - What's the reason of the change?
  - Is there anything to watch out for / anything particularly remarkable?

## Branching Strategies

### A Written Convention

1. Git allows to create branches but doesn't tell you how to use them
2. You need a written best practice to avoid mistakes and collisions
3. It depends on your team and its size
4. It helps onboard new team members

The convention affects how you develop. For example, in a convention where you only have the main branch, it pushes you to make fewer branches, smaller commits and higher quality testing and QA standards.

### Long-Running and Short-Lived Branches

- Long-Running
  - Exist through the complete lifetime of the project
  - They often mirror stages in you dev life cycle
  - No direct commits
  - Examples: main, develop
- Short-Lived
  - For new features, bug fixes, refactoring, etc.
  - Will be deleted after integration

### Example - GitHub Flow

Only one long-running branch plus feature branches

### Example - GitFlow

It is more structured, you have both main and develop as long-running branches and have short-lived ones for features, releases, hotfixes, etc.

## Best Branching Model?

- Consider project, release cycle, and team
- Take inspiration from existing models and create your own model
