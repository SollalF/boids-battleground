import { Frame } from "lucide-react";
import { Project } from "../index";

export const projectDetails: Project = {
  title: "Boids",
  description: "A simulation of flocking behavior",
  longDescription: `
    Boids Battleground is an interactive simulation that demonstrates emergent behavior
    through the implementation of Craig Reynolds' Boids algorithm.
  `,
  imageUrl: "/projects/boids-battleground.png", // Add your image to the public/projects folder
  tags: ["TypeScript", "Canvas API", "Algorithm", "Simulation"],
  githubUrl: "https://github.com/SollalF/boids-battleground",
  liveUrl: "/projects/boids-battleground", // Link to the local page for this project
  icon: Frame,
};
