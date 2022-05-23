import { ApiProperty } from "@nestjs/swagger";




interface IErrorInformation{

}

interface IWarningInformation{
}

interface ResourceInformation{

}

export class Monitor{

    id:number;

    data:Date;

    ip:string;

    region:string;

    @ApiProperty({
        description:"错误信息日志"
    })
    ErrorInfor:IErrorInformation;

    @ApiProperty({
        description:"警告信息日志"
    })
    WarningInfor:IWarningInformation;

    @ApiProperty({
        description:"资源加载耗时"
    })
    resourcesLoading:ResourceInformation;
}