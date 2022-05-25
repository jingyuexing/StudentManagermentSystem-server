import { Student } from '@libs/db/modules/student.module';
import { Body, Controller, Delete, Get, Logger, Param, Post, Query } from '@nestjs/common';
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
        Logger.log(`name:${name},id:${id}`,"get student")
        let res = new ResponseConfig<Student[]>();
        res.data = [];
        res.message = "OK";
        res.statusCode = 12;
        return res;
    }

    @ApiOperation({
        description:"获取学生列表"
    })
    @ApiQuery({
        name:"limit",
        example:20,
        description:"限定数据条数"
    })
    @ApiQuery({
        name:"page",
        example:1,
        description:"列表数据页数"
    })
    @Get("list")
    getStudentList(@Query("limit") limit: number,@Query("page") page:number){
        Logger.log(`limit:${limit},page:${page}`,"student list");
        let res = new ResponseConfig<Student>();
        res.message = "succeed";
        res.statusCode = 200
        res.data = this.studentService.getStudents();
        return res;
    }

    @ApiOperation({
        description:"以学号查询"
    })
    @ApiParam({
        name:"id",
        example:202066012,
        description:"学号"
    })
    @Get(":id")
    getStudentById(@Param('id') schoolId:number){
        Logger.log(`schoolID:${schoolId}`,"search student:id")
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
        Logger.log(student,"create student")
        console.log(student);
    }

    @ApiOperation({
        description:"删除学生信息"
    })
    @ApiQuery({
        name:"id",
        description:"学生id号"
    })
    @ApiQuery({
        name:"name",
        required:false,
        description:"学生姓名"
    })
    @Delete("")
    removeStudent(@Query('id') studentID:number ,@Query("name") name:string){
        Logger.log(`sutdent:${studentID},name:${name}`,"remove student")
        return this.studentService.removeStudent(studentID);
    }
}
