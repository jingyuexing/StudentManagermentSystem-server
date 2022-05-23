import { Account } from '@libs/db/modules/Account.module';
import { Body, Controller, Delete, Post, Put, Query } from '@nestjs/common';
import { ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';

@ApiTags("账号接口")
@Controller('/api/interface/v1/account')
export class AccountController {
    @ApiOperation({
     description:"创建账号"   
    })
    @Post("new")
    createAccount(@Body() account:Account) {
        return {}
    }

    @ApiOperation({
        description:"删除账号"
    })
    @ApiQuery({
        description:"账号名",
        name:"name"
    })
    @Delete("delete")
    removeAccount(@Query("name") name:string): void{

    }

    @ApiOperation({
        description:"更新账号信息"
    })
    @Put("update")
    updateAccount(@Body('account') account:Account){

    }
}
