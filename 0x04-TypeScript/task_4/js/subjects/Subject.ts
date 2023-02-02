namespace Subjects {
    export interface Teacher {
      firstName: string;
      lastName: string;
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
  }
  