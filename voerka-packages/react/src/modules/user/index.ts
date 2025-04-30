import { module,ModuleBase} from '@voerka/core';

/**
 * 
 *  
 * 保存当前用户的认证信息
 * 
 */

export interface UserSettings{
    username       : string                     // 用户名
    accessToken    : string                  // 访问令牌
    refreshToken   : string                 // 刷新令牌
    refreshInterval: number              // 刷新间隔
    loginTime      : number                    // 登录时间
}


@module()
export class UserModule extends ModuleBase{
    state =  {
    }  
}  