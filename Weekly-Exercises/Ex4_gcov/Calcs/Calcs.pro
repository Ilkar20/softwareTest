LIBS += -lgcov
QMAKE_CXXFLAGS += -fprofile-arcs -ftest-coverage

HEADERS += \
    calcs.hh

SOURCES += \
    main.cpp \
    calcs.cpp

DISTFILES +=
