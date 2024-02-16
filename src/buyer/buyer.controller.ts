import{Controller, Get,Post,Put, Patch, Delete, Param, Query, Body, } from "@nestjs/common";
import { BuyerService } from "./buyer.service";


@Controller('buyer')  // root Route
export class BuyerController{

    constructor(private readonly buyerservice: BuyerService){}
    
    @Post('register')
    async register(@Body() userData:any)
    {
        return this.buyerservice.register(userData)
    }


    @Post('login')
     login(@Body() credentials: any)
    {
        return this.buyerservice.login(credentials);
    }

    @Patch('logout')
     logout()
    {
        return {massage: "Logged out"};
    }

    @Get('browse-account')
     browseAccount()
    {
        return this.buyerservice.browseAccount;
    }

    @Get('search-account')
     searchAccount(@Query() query:any)
    {
        return this.buyerservice.searchAccount(query.keywords);
    }

    @Put('view-account/:account_id')
     viewAccount(@Param('account_id')accountId:string)
    {
        return this.buyerservice.viewAccount(accountId);
    }

    @Get('place-order/:account_id')
     placeOrder(@Param('account_id') accountId:string)
    {
        return this.buyerservice.placeOrder(accountId);
    }

    @Delete('place-orderdelete/:account_id')
     placeorderDelete(@Param('account_id') accountId:string)
    {
        return this.buyerservice.placeOrder(accountId);
    }

}