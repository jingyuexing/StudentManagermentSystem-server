
import { ApiProperty } from "@nestjs/swagger"
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity({
    name:"account"
})
export class Account{
    @PrimaryGeneratedColumn({
        type:"integer"
    })
    id:number;
    @ApiProperty({
        description:"用户名",
    })
    @Column({
        type:"char",
        length:100
    })
    username: string;


    @ApiProperty({
        description:"密码hash字符串 -> hash(passowrd+suffix)"
    })
    @Column({
        type:"char",
        length:256
    })
    password:string;
    @ApiProperty({
        description:"手机号"
    })
    @Column({
        type:"char",
        length:20
    })
    phone:string;
    @ApiProperty({
        description:"邮箱"
    })
    email:string;
    @ApiProperty({
        description:"加密后缀"
    })
    @Column({
        type:"char",
        length:40
    })
    suffix:string;

    @ApiProperty({
        description:"账号类型",
    })
    @Column({
        type:"enum",
        enum:["admin","normal"]
    })
    accountType:"admin"|"normal";
}