export class Task {
  id: number;
  name: string;
  priority: string;
  deadline: string;
  description: string;

  constructor(
    id: number,
    name: string,
    priority: string,
    deadline: string,
    description: string
  ) {
    this.id = id;
    this.name = name;
    this.priority = priority;
    this.deadline = deadline;
    this.description = description;
  }
}