import { Teacher } from '@libs/db/modules/teacher.module';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TeacherService {
    getTeacher(name: string){
        // only one thing
        // return data
        //
        return {};
    }

    getTeachers(limit: number){
        return {};
    }

    searchTeacher(name: string){
        return {};

    }

    addTeacher(teacher:Teacher){
        return {};

    }

    updateTeacher(){
        return {};

    }

    removeTeacher(name: string , id: number = -1){
        return {};
    }
}
