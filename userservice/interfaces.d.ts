//data interface to describe general server response to client 
export interface _Response 
{
    OK:      boolean,
    data:    any, 
    error:   string,  
    status:  number,  
    message: string,   
}

//data interface to describe parameters to find in database
export interface _argsFind  
{
    findObject: any;
    populate?: any;
    select?: any;
}

//data interface to describe parameters to update a object in database
export interface _argsUpdate 
{
    findObject  :any;
    set         :any;
    populate    ?:any;
}

//data interface to describe a model user
export interface _userModel 
{
    name        :string;
    lastname    :string;
    email       :string;
    dir         :string;
    create_at   ?:string;
    update_at   ?:string;
}



