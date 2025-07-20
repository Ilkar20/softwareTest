#include "date.hh"
#include <QtDebug>

Date::Date(unsigned int d, unsigned int m, unsigned int y)
    : day_(d), month_(m), year_(y)
{
    if (y < 1754 || m < 1 || m > 12 || d < 1 || d > monthLength(m, y))
    {
        throw BadDate();
    }
}

Date::~Date()
{
}

// setDate
void Date::setDay(unsigned int day)
{
    if (day > monthLength(month_, year_))
    {
        throw BadDate();
    }

    day_ = day;
}

// setMonth
void Date::setMonth(unsigned int month)
{
    if (month > 12 || day_ > monthLength(month, year_))
    {
        throw BadDate();
    }

    month_ = month;
}

//setYear
void Date::setYear(unsigned int year)
{
    if (year <= 1754)
    {
        throw BadDate();
    }

    year_ = year;
}

//getDay
unsigned int Date::getDay() const
{
    return day_;
}

//getMonth
unsigned int Date::getMonth() const
{
    return month_;
}

//getYear
unsigned int Date::getYear() const
{
    return year_;
}

//giveDayOfTheWeek
Date::Weekday Date::getWeekday() const
{
    Date reference(1, 1, 1754); // Referenssipäivä, jonka tiedetään olleen tiistai Reference day that is known to be tuesday
    unsigned int days = reference.howMuchAhead(*this);
    Weekday vp = static_cast<Weekday>( days % 7 + 1);
    return vp;
}

//advance
void Date::advance(unsigned int n)
{
    // Jonkin verran tehoton toteutus, mutta säästää aivoja. :-)
    // Not very efficient solution but easier for the brain. :-)
    if (n > 0)
    {
        while (n >= yearLength(year_))
        {
            n -= yearLength(year_);
            ++year_;
        }
        while (n >= monthLength(month_, year_))
        {
            n -= monthLength(month_, year_);
            ++month_;
            if (month_ > 12)
            {
                month_ = 1;
                ++year_;
            }
        }
        day_ += n;
        if (day_ > monthLength(month_, year_))
        {
            day_ -= monthLength(month_, year_);
            ++month_;
            if (month_ > 12)
            {
                month_ = 1;
                ++year_;
            }
        }
    }
}

//How much forward
int Date::howMuchAhead(Date const &p) const
{
    Date tmp(*this); // Kopio tästä päiväyksestä. Copy of this date.
    int subtr = 0;
    // Tämä vaillinainen tyhmä toteutus odottaa, että p on edellä tätä päiväystä
    // Excepts that the p is ahead of this day.
    while (p.year_ > tmp.year_)
    {
        subtr += yearLength(tmp.year_);
        ++tmp.year_;
    }
    while (p.month_ > tmp.month_)
    {
        subtr += monthLength(tmp.month_, tmp.year_);
        ++tmp.month_;
        if (tmp.month_ > 12)
        {
            tmp.month_ = 1;
            ++tmp.year_;
        }
    }
    subtr += (p.day_ - tmp.day_);

    return subtr;
}

// isLeapYear
bool Date::isLeapYear(unsigned int vuosi)
{
    if (vuosi < 1754) {
        throw BadDate();
    }

    return (vuosi % 4 == 0) && (!(vuosi % 100 == 0) || (vuosi % 400 == 0));
}

//monthLengths
unsigned int Date::monthLength(unsigned int kuukausi, unsigned int vuosi)
{
    if (kuukausi < 1 || kuukausi > 12 || vuosi < 1754)
    {
        throw BadDate();
    }
    else if (kuukausi == 2 && isLeapYear(vuosi))
    {
        return 29;
    }
    else
    {
        return MONTHS[kuukausi-1];
    }
}

//lengthOfYear
unsigned int Date::yearLength(unsigned int vuosi)
{
    if (isLeapYear(vuosi))
    {
        return 366;
    }
    else
    {
        return 365;
    }
}

//MONTHS
unsigned int const Date::MONTHS[12] = {31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31};
