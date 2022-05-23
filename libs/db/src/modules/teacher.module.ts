import { ApiProperty } from "@nestjs/swagger";
import { Column, PrimaryGeneratedColumn } from "typeorm";

export class Teacher {
    @PrimaryGeneratedColumn({
        type:"integer"
    })
    id: number;

    @ApiProperty({
        description:"头像",
        example:"static.images.school.edu/2008/03/xxxx.jpg"
    })
    face:string;

    @ApiProperty({
        description:"姓名"
    })
    name: string;
    @ApiProperty({
        description:"年龄"
    })
    age: number;

    @ApiProperty({
        description:"性别"
    })
    @Column({
        type:"enum",
        enum:["男","女"]
    })
    gender:0|1;

    @ApiProperty({
        description:"手机号"
    })
    phone:string;

    @ApiProperty({
        description:"学院"
    })
    academy:string;

    @ApiProperty({
        description:"部门",
    })
    department:string;
}
