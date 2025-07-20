QT       += testlib

QT       -= gui

TARGET = tst_tmp
CONFIG   += console
CONFIG   -= app_bundle

TEMPLATE = app


SOURCES += tst_date.cpp\
    ../Date/date.cpp
DEFINES += SRCDIR=\\\"$$PWD/\\\"

HEADERS += \
    ../Date/date.hh

INCLUDEPATH += ../Date
DEPENDPATH  += ../Date
