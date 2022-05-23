import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString, Max, Min } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({
    name:"student"
})
export class Student{
    
    @IsNumber({
        allowNaN:false,
        allowInfinity:false
    })
    @PrimaryGeneratedColumn({
        type:"integer"
    })
    id:number;

    @ApiProperty({
        description:"姓名",
        example:"张三"
    })
    @Column({
        type:"char",
        length:"10"
    })
    @IsString({
        message:"此项必填"
    })
    name:string;
    
    @ApiProperty({
        description:"年龄",
        example:20
    })
    @IsNumber({
        allowNaN:false,
        allowInfinity:false
    })
    @Min(0,{
      message:"年龄太小了,不可能有这种年龄"  
    })
    @Max(120,{
        message:"你是当代彭祖吗"
    })
    @Column({
        type:"integer",
        default:0
    })
    age:number;

    @Column({
        type:"enum",
        enum:["男","女"],
    })
    gender:0|1;

    @ApiProperty({
        description:"学号"
    })
    schoolID:number;

    @ApiProperty({
        description:"手机号",
        example:"13466339734"
    })
    phone:string;

    @ApiProperty({
        description:"身份证号"
    })
    IDCard:string;

    @ApiProperty({
        description:"班级",
        example:"65031"
    })
    classID:string;

    @ApiProperty({
        description:"年级",
        example:"大一",
    })
    grade:string;

    @ApiProperty({
        description:"学院",
        example:"生物学院"
    })
    academy:string;
}