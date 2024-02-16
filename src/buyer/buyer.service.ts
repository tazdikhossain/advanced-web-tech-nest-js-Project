import {Injectable} from "@nestjs/common";


@Injectable()
export class BuyerService{

register(userData:any)
{
    return {message: 'buyer account register successfully'};
}

 login(credentials:any)
{
    return credentials;
}

 browseAccount()
{
    return {account: []};
}

 searchAccount(keywords:string)
{
    return {results: []};
}

viewAccount(accountId:string)
{
    return{accountId,}
}

 placeOrder(accountId:string)
{
    return {massage: "Order is Placed"};
}

 placeorderDelete(accountId:string)
{
    return {massage: "Order is Deleted"};
}

}