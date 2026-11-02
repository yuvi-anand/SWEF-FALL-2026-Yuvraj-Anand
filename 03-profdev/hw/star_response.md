# STAR response

**Question:** Tell me about a time you faced a challenge while working on a project or with a team. What did you do, and what was the result?

## Situation

When creating autonomous routines for our FRC robot in 2025, we were really struggling to figure out how to optimize our robot's scoring with the physical design constraints we were given.

## Task

The task was to find away to combine 3 unique movements from 3 different subsystems across 2.5 degrees of freedom into one smooth movement that would cut our scoring time down from 7 seconds 
to about 2 seconds

## Action

We implemented a rigid state machine system for our drivetrain, elevator, pivot, and wrist subsystems that allowed us to combine movements together in a StateMachineHandler that we created. This
allowed us to not only interlace movements with one another, but also helped us ensure we stayed within physical constraints and had no collisions (the wrist rotating too early and colliding with
the robot's superstrucutre, the elevator not retracting early and getting us hung on the field element, etc.)

## Result


We were able to achieve our target goal of scoring a piece in 7 seconds to scoring a piece in 2 seconds. This allowed us to go from scoring 1 game piece in the autonomous period to scoring 3 pieces,
and also reformed how we scored pieces during teleoperated gameplay as well, allowing us to be a top 500 team in the world amongst 3000 robotics teams internationally.
