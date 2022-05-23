import { Account } from '@libs/db/modules/Account.module';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AccountService {
    /* constructor(){

    } */
    appendAccount(account:Account):Account[]{
        let _account = account;
        return [new Account()]
    }

    logout(){
        return {};
    }
    updateAccount(account:Account){
        return {};
    }
}
