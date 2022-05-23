import { Student } from '@libs/db/modules/student.module';
import { Body, Controller, Delete, Get, Param, Post, Query } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiQuery, ApiTags } from '@nestjs/swagger';
import { ResponseConfig } from 'src/utils/ResponseConfig';
import { StudentService } from './student.service';


@ApiTags("学生")
@Controller('/api/interface/v1/student')
export class StudentController {
    constructor(private readonly studentService: StudentService){}

    @ApiOperation({
        description:"获取学生信息"
    })
    @Get("")
    @ApiQuery({
        name:"id",
        description:"学生id",
        required:false
    })
    @ApiQuery({
        name:"name",
        description:"学生姓名"
    })
    getStudent(@Query("name") name:string, @Query("id") id:number){
        let res = new ResponseConfig<Student[]>();
        res.data = [];
        res.message = "OK";
        res.statusCode = 12;
        return res;
    }

    @ApiOperation({
        description:"获取学生列表"
    })
    @Get("list")
    getStudentList(){
        let res = new ResponseConfig<Student>();
        res.data = this.studentService.getStudents();
        return res;
    }

    @ApiOperation({
        description:"以学号查询"
    })
    @ApiParam({
        name:"id",
        description:"学号"
    })
    @Get(":id")
    getStudentById(@Param('id') schoolId:number){
        let result = new ResponseConfig<Student>();
        if(!Boolean(Number(schoolId))){
            schoolId = -1;
        }else{
            schoolId = Number(schoolId)
        }
        result.data = this.studentService.getStudentById(schoolId);
        result.statusCode = 200;
        result.message = "succeed";
        return result;
    }

    @ApiOperation({
        description:"增加学生信息"
    })
    @Post("")
    createStudent(@Body() student:Student){

        console.log(student);
    }

    @ApiOperation({
        description:"删除学生信息"
    })
    @Delete("")
    removeStudent(){
        
    }
}
