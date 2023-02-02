namespace Subjects {
    export interface Teacher {
      firstName: string;
      lastName: string;
      experienceTeachingC?: number;
    }
    
    export class Subject {
      private _teacher: Teacher;
      
      set teacher(teacher: Teacher) {
        this._teacher = teacher;
      }
      
      get teacher(): Teacher {
        return this._teacher;
      }
    }
    
    export class Cpp extends Subject {
      getRequirements(): string {
        return "Here is the list of requirements for Cpp: " + 
               "Experience in C++ programming, Knowledge of Object-Oriented Programming concepts";
      }
      
      getAvailableTeacher(): string {
        if (!this.teacher) return "No available teacher";
        if (this.teacher.experienceTeachingC === undefined || 
            this.teacher.experienceTeachingC === null || 
            this.teacher.experienceTeachingC === 0) {
          return "No available teacher";
        }
        return "Available Teacher: " + this.teacher.firstName;
      }
    }
  }
  