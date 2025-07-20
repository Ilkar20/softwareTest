#include <QtTest>
#include <QString>

#include "calcs.hh"

// add necessary includes here

class calcs : public QObject
{
    Q_OBJECT

public:
    calcs();
    ~calcs();

private Q_SLOTS:
    void zero_divisor();
    void equal_positive_division();

};

calcs::calcs()
{

}

calcs::~calcs()
{

}

void calcs::zero_divisor()
{
    Calcs c;
    QVERIFY_EXCEPTION_THROWN(c.divisionOfIntegers(1,0), RangeError);

}

void calcs::equal_positive_division()
{
    try
    {
        Calcs c;
        Calcs::divResult r;
        r.quotient = 2;
        r.reminder = 0;
        Calcs::divResult t = c.divisionOfIntegers(4,2);
        QCOMPARE(t.quotient, r.quotient);
        QCOMPARE(t.reminder, r.reminder);
    }
    catch (...)
    {
        QFAIL("Unexpected exception?");
    }
}

QTEST_APPLESS_MAIN(calcs)

#include "tst_calcs.moc"
