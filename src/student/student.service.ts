import { Student } from '@libs/db/modules/student.module';
import { Injectable } from '@nestjs/common';

@Injectable()
export class StudentService {
    getStudentByName(name:string){
        return name;
    }
    getStudents():Student[]{
        let list:Student[] = [
        ];
        for(let i =0;i<100;i++){
            list.push(
            {
                "academy":"",
                "age":20,
                "classID":"3342",
                "gender":0,
                "grade":"",
                "id":1,
                "IDCard":"",
                "name":"张三",
                "phone":"11368725954",
                "schoolID":20223638,
            }
            )
        }
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
