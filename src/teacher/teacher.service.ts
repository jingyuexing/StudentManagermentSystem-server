import { Teacher } from '@libs/db/modules/teacher.module';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TeacherService {
    getTeacher(name: string):Teacher[]{
        let res = new Teacher();
        return [res];
    }

    getTeachers(limit: number):Teacher[]{
        let data = new Teacher();
        return [data];
    }

    searchTeacher(name: string):Teacher[]{
        let data = new Teacher();
        return [data];

    }

    addTeacher(teacher:Teacher){
        let data = new Teacher();
        return [data];

    }

    updateTeacher(teacher:Teacher){
        let data = new Teacher();
        return [data];

    }

    removeTeacher(name: string , id: number = -1){
        let data = new Teacher();
        return [data];
    }
}
