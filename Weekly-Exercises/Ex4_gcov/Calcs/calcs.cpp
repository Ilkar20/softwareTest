#include "calcs.hh"
#include <QtDebug>

Calcs::Calcs()
{

}

Calcs::~Calcs()
{

}

Calcs::divResult Calcs::divisionOfIntegers(int dividend, int divisor)
{

    int m = 1;

    if (divisor != 0 && dividend >0 && divisor > 0)
    {
        m = 1;
    }
    else if (divisor != 0 && dividend<0 && divisor>0)
    {
        dividend = dividend*-1;
        m = -1;
    }
    else if (divisor != 0 && dividend>0 && divisor <0)
    {
        divisor = divisor*-1;
        m = -1;
    }
    else if (divisor != 0 && dividend<0 && divisor<0)
    {
        dividend = dividend*-1;
        divisor = divisor*-1;
        m = 1;
    }
    else
    {
        throw RangeError();
    }

    int quotient = 0;
    int reminder = dividend;
    while (reminder >= divisor)
    {
        quotient = quotient+1;
        reminder = reminder-divisor;
    }
    divResult result;
    result.quotient=m*quotient;
    result.reminder=reminder;
    return result;
}
