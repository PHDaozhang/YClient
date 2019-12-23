

export function toFixedNum( result,num1,num2 )
{
    if( num1 == 0 || !num1 )
    {
        return "10000.00";
    }

    return (num2 / num1).toFixed(2);
}