import { Teacher } from '@libs/db/modules/teacher.module';
import { Body, Controller, Delete, Get, Post, Put, Query } from '@nestjs/common';
import { ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';
import { ResponseConfig } from 'src/utils/ResponseConfig';
import { TeacherService } from './teacher.service';

@ApiTags("教师接口")
@Controller('/api/interface/v1/teacher')
export class TeacherController {
    constructor(private readonly teacher: TeacherService) {}
    @ApiOperation({
        description: "获取老师信息"
    })
    @ApiQuery({
        name:"name",
        description:"教师姓名"
    })
    @Get("")
    getTeacher(@Query("name") name:string) {
        let res = new ResponseConfig<object>();
        res.data = [this.teacher.getTeacher(name)]
        res.statusCode = 200;
        res.message = "OK";
        return res;
    }

    @ApiOperation({
        description: "获取教师列表"
    })
    @Get("list")
    getTeacherList(limit:number) {
        let res = new ResponseConfig<Teacher>();
        res.data = this.teacher.getTeachers(limit);
        return res;
    }

    @ApiOperation({
        description: "提交教师信息"
    })
    @Post("")
    createTeacher(@Body() teacher:Teacher) {
        // this.teacher.addTeacher(teacher);
        let res = new ResponseConfig<object>();
        res.data = [this.teacher.addTeacher(teacher)]
        res.statusCode = 200;
        res.message = "OK";
        return res;
    }

    @ApiOperation({
        description: "更新教师信息"
    })
    @Put("")
    updateTeacher(@Body() teacher:Teacher) {
        // return this.teacher.updateTeacher(teacher);
        let res = new ResponseConfig<object>();
        res.data = [this.teacher.updateTeacher(teacher)]
        res.statusCode = 200;
        res.message = "OK";
        return res;
    }


    @ApiOperation({
        description: "查询教师信息"
    })
    @ApiQuery({
        name:"name",
        description:"教师姓名"
    })
    @Get("search")
    searchByName(@Query("name") name: string) {
        //
        let res = new ResponseConfig<object>();
        res.data = [this.teacher.searchTeacher(name)]
        res.statusCode = 200;
        res.message = "OK";
        return res;
    }

    @ApiOperation({
        description: "删除教师信息"
    })
    @ApiQuery({
        name:"name",
        description:"教师名称"
    })
    @Delete("")
    removeTeacher(@Query("name") name:string,id = -1) {
        let res = new ResponseConfig<object>();
        let data =  this.teacher.removeTeacher(name,id);
        res.data = [data];
        res.statusCode = 200;
        res.message = "OK";
        return res;
    }
}
