import { Monitor } from '@libs/db/modules/monitor.module';
import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';

@ApiTags("前端监控日志提交接口")
@Controller('api/interface/v1/monitor')
export class MonitorController {
    
    @ApiQuery({
        name:"data",
        description:"以base64编码的日志信息"
    })
    @ApiOperation({
        description:"以GET提交日志"
    })
    @Get("")
    updateLogger(@Query("data") loggerData:string){
    }

    @ApiOperation({
        description:"以POST提交日志"
    })
    @Post('')
    submitLogger(@Body() logger:Monitor){
    }
}
