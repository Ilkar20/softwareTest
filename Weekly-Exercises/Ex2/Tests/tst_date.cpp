#include <QString>
#include <QtTest>

#include "date.hh"

// Tarvitaan, jotta Qt:n testien makrot toimivat oman Viikonpäivä-enumin kanssa (ei kovin yleinen
// eikä oleellinen asia)
// Not relevant to the topic. Required for QT test macros to work with Viikonpaiva (day of the week) -enum
Q_DECLARE_METATYPE(Date::Weekday);

class DateTest : public QObject
{
    Q_OBJECT

public:
    DateTest();

private Q_SLOTS:
    void creatingDate();

    void settingLegalDay();
    void settingIllegalDay();

    void weekday();
    void weekday_data();

    void legalSetDay();
    void illegalSetDay();
    void legalSetMonth();
    void illegalSetMonth();
    void legalSetYear();
    void illegalSetYear();
};

DateTest::DateTest()
{
}

void DateTest::legalSetDay()
{
    Date p(4, 10, 2022);
    try
    {
        p.setDay(15);
        QCOMPARE(p.getDay(), 15u);
    }
    catch (...)
    {
        QFAIL("Exception in legal operation");
    }
}

void DateTest::illegalSetDay()
{
    Date p(4, 10, 2022);
    try
    {
        p.setDay(32);
        QFAIL("Illegal date was accepted");
    }
    catch (BadDate e)
    {
        // This exception is excepted, so we do nothing
        // Tämä poikkeus pitäisikin tulla, joten ei tehdä mitään.
    }
}

void DateTest::legalSetMonth()
{
    Date p(4, 10, 2022);
    try
    {
        p.setMonth(12);
        QCOMPARE(p.getMonth(), 12u);
    }
    catch (...)
    {
        QFAIL("Exception in legal operation");
    }
}

void DateTest::illegalSetMonth()
{
    Date p(4, 10, 2022);
    try
    {
        p.setMonth(13);
        QFAIL("Illegal date was accepted");
    }
    catch (BadDate e)
    {
        // This exception is excepted, so we do nothing
        // Tämä poikkeus pitäisikin tulla, joten ei tehdä mitään.
    }
}

void DateTest::legalSetYear()
{
    Date p(4, 10, 2022);
    try
    {
        p.setYear(2000);
        QCOMPARE(p.getYear(), 2000u);
    }
    catch (...)
    {
        QFAIL("Exception in legal operation");
    }
}

void DateTest::illegalSetYear()
{
    Date p(4, 10, 2022);
    try
    {
        p.setYear(1753);
        QFAIL("Illegal date was accepted");
    }
    catch (BadDate e)
    {
        // This exception is excepted, so we do nothing
        // Tämä poikkeus pitäisikin tulla, joten ei tehdä mitään.
    }
}



void DateTest::creatingDate()
{
    // Yksinkertainen testi, jossa testataan yhden päiväyksen luomista
    // Simple test for creating one date with costructor
    Date p(1, 2, 2014);
    QCOMPARE(p.getDay(), 1u); // 1u is needed as annnaPaiva returns unsigned int. 1u tarvitaan, koska annaPaiva:n paluuarvo on unsigned int
    QCOMPARE(p.getMonth(), 2u);
    QCOMPARE(p.getYear(), 2014u);
}

void DateTest::settingLegalDay()
{
    // Testataan silmukassa kaikki helmikuun päivät, varmistetaan että ok
    // Loop used to check all february days

    for (unsigned int day = 1; day <= 28; ++day)
    {
        Date p(1, 2, 2014);

        p.setDay(day);
        QCOMPARE(p.getDay(), day);

        // Koska Qt:n testikehyksessä koko testijoukon ajo keskeytyy odottamattomaan poikkeukseen,
        // voi manuaalinen poikkeuskäsittely testitapauksessa olla tarpeen.
        // As QT test framework stops the whole test set if there is unexpected exception,
        // manual exception handling can be necessary. See example below.
        /*
        try
        {
            p.setDay(day);
            QCOMPARE(p.getDay(), day);
        }
        catch (...)
        {
            QFAIL("Exception in legal operation");
        }
        */
    }
}

void DateTest::settingIllegalDay()
{
    // Checking in loop illegal "february dates" 29-31, checking that not ok
    // Testataan silmukassa "helmikuun päivät" 29-31, varmistetaan että ei ok
    for (unsigned int day = 29; day <= 31; ++day)
    {
        Date p(1, 2, 2015);
        QVERIFY_EXCEPTION_THROWN(p.setDay(day), BadDate);

        // Qt:n aiemmissa versioissa ja muissa testikehyksissä odotetut poikkeukset voi joutua
        // käsittelemään manuaalisesti.
        // In some earlier version of Qt (or other test frameworks) expected exceptions might need manual handling
        /*
        try
        {
            p.setDay(day);
            QFAIL("Illegal date was accepted");
        }
        catch (BadDate e)
        {
            // This exception is excepted, so we do nothing
            // Tämä poikkeus pitäisikin tulla, joten ei tehdä mitään.
        }
        */
    }
}

void DateTest::weekday()
{
    // This method tests one row from weekday_data -method. It will be automatically called for each row in the matrix.
    // Note the naming of this method (weekday) and the data method (weekday_data). It is necessary that they match.
    // Tämä metodi testaa yhden viikonpaiva_data-metodin tuottaman testimatriisin rivin. Sitä
    // kutsutaan automaattisesti jokaiselle matriisin riville.
    // Huomioi tämän ja datametodin nimeäminen. Niiden tulee vastata toisiaan.

    // Fetch data from matrix. Create variables automatically.
    // Haetaan data matriisista, luodaan automaattisesti muuttujat
    QFETCH(unsigned int, day);
    QFETCH(unsigned int, month);
    QFETCH(unsigned int, year);
    QFETCH(Date::Weekday, weekday);

    // Run tests
    // Suoritetaan testi
    Date p(day, month, year);
    QVERIFY2(p.getWeekday() == weekday, "Wrong weekday");
}

void DateTest::weekday_data()
{
    // This method defines the test matrix for the viikonpaiva and produces wanted test cases.
    // Tämä metodi määrittelee viikonpäivätestin testimatriisin ja tuottaa sinne halutut
    // testitapaukset.

    // Define columns for the matix (types and names)
    // Määritellään testimatriisin sarakkeet (tyypit ja nimet)
    QTest::addColumn<unsigned int>("day");
    QTest::addColumn<unsigned int>("month");
    QTest::addColumn<unsigned int>("year");
    QTest::addColumn<Date::Weekday>("weekday");

    // Produce the test cases for the matrix. 3u etc needed as the type is unsigned.
    // Tuotetaan testimatriisiin testitapaukset, 3u jne. tarvitaan taas, koska tyyppi on unsigned
    QTest::newRow("while ago")      << 6u  << 9u  << 2016u << Date::TUESDAY;
    QTest::newRow("some christmas") << 24u << 12u << 2015u << Date::THURSDAY;
}

QTEST_APPLESS_MAIN(DateTest)

#include "tst_date.moc"
