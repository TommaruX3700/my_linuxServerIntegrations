# CMakeList.txt: progetto CMake per Spec_Monitor. Includere l'origine e definire
# qui la logica specifica del progetto.
#
cmake_minimum_required (VERSION 3.8)

# Enable Hot Reload for MSVC compilers if supported.
if (POLICY CMP0141)
  cmake_policy(SET CMP0141 NEW)
  set(CMAKE_MSVC_DEBUG_INFORMATION_FORMAT "$<IF:$<AND:$<C_COMPILER_ID:MSVC>,$<CXX_COMPILER_ID:MSVC>>,$<$<CONFIG:Debug,RelWithDebInfo>:EditAndContinue>,$<$<CONFIG:Debug,RelWithDebInfo>:ProgramDatabase>>")
endif()

project ("Spec_Monitor")

# Aggiungere l'origine all'eseguibile di questo progetto.
add_executable (Spec_Monitor "Spec_Monitor.cpp" "Spec_Monitor.h")

if (CMAKE_VERSION VERSION_GREATER 3.12)
  set_property(TARGET Spec_Monitor PROPERTY CXX_STANDARD 20)
endif()

# TODO: Aggiungere i test e, se necessario, installare le destinazioni.
