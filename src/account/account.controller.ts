import { Account } from '@libs/db/modules/Account.module';
import { Body, Controller, Delete, Logger, Post, Put, Query } from '@nestjs/common';
import { ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';
import { ResponseConfig } from 'src/utils/ResponseConfig';
import { AccountService } from './account.service';

type Pick<T,P> = {
    [P in keyof T]:T[P]
}


@ApiTags("账号接口")
@Controller('/api/interface/v1/account')
export class AccountController {
    constructor(private readonly accountService: AccountService){}

    @ApiOperation({
     description:"创建账号"
    })
    @Post("new")
    createAccount(@Body() account:Account) {
        Logger.log(account,"create account")
        let res = new ResponseConfig<Account>();
        res.data = this.accountService.appendAccount(account);
        return res
    }

    @ApiOperation({
        description:"删除账号"
    })
    @ApiQuery({
        description:"账号名",
        name:"name"
    })
    @Delete("delete")
    removeAccount(@Query("name") name:string){
        Logger.log(`name:${name}`,"remove student")
        let res = new ResponseConfig<Account>();
        return res;
    }

    @ApiOperation({
        description:"更新账号信息"
    })
    @Put(["update","put"])
    updateAccount(@Body() account:Account){
        Logger.log(account,"update student")
        let res = new ResponseConfig<Pick<Account,"username">>();
        // res.data = this.accountService.updateAccount(account);
        return res;
    }
}
