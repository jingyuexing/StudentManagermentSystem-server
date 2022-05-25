import { Student } from '@libs/db/modules/student.module';
import { Injectable } from '@nestjs/common';

@Injectable()
export class StudentService {
    getStudentByName(name:string){
        return name;
    }
    getStudents():Student[]{
        let list:Student[] = [];
        return list;
    }
    getStudentById(schooldId:number):Student[]{
        let student = new Student();
        student.age = 20;
        student.id = schooldId;
        student.name = "张三"
        let result = [];
        result.push(student);
        return result;
    }
    removeStudent(studentId:number):Student[]{
        return [new Student()];
    }
}
