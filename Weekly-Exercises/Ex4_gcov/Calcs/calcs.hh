#ifndef CALCS_HH
#define CALCS_HH

class RangeError
{
    // Emptyimplementation for exception class
};

class Calcs
{
public:

    struct divResult
    {
        int quotient;
        int reminder;
    };
    Calcs();
    ~Calcs();
    divResult divisionOfIntegers(int dividend, int divisor);
};

#endif // CALCS_HH
