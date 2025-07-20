QT += testlib
QT -= gui

TARGET = tst_tmp
CONFIG += qt console warn_on depend_includepath testcase
CONFIG -= app_bundle

TEMPLATE = app

LIBS += -lgcov
QMAKE_CXXFLAGS += -fprofile-arcs -ftest-coverage

SOURCES +=  tst_calcs.cpp \
    ../Calcs/calcs.cpp
DEFINES += SRCDIR=\\\"$$PWD/\\\"

HEADERS += \
    ../Calcs/calcs.hh

INCLUDEPATH += ../Calcs
DEPENDPATH += ../Calcs
