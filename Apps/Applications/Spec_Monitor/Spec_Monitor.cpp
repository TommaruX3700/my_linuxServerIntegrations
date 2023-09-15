// Author: tmx37
// Date: 15/09/2023
// 
// Spec_Monitor.cpp: applicazione per raccogliere dati sul sistema.

#ifdef _WIN32
#include <Windows.h>

#endif // WINDOWS

#ifdef __unix__

#endif

#include <iostream>
#include "Spec_Monitor.h"

using namespace std;

int main()
{
	DWORD temperature;
	if (GetCurrentHwProfile(temperature))
	{
		cout << "CPU Temperature: " << temperature << "C" << endl;
	}

	FILETIME idleTime, kernelTime, userTime;
	if (GetSystemTimes(&idleTime, &kernelTime, &userTime))
	{
		ULONGLONG idleTicks = (reinterpret_cast<ULONGLONG&>(idleTime) - reinterpret_cast<ULONGLONG&>(idleTime)) / 10000;
		ULONGLONG totalTicks = idleTicks + ((reinterpret_cast<ULONGLONG&>(kernelTime) - reinterpret_cast<ULONGLONG&>(userTime)) / 10000) + ((reinterpret_cast<ULONGLONG&>(userTime) - reinterpret_cast<ULONGLONG&>(userTime)) / 10000);
		double cpuUsage = 100.0 - (static_cast<double>(idleTicks) / static_cast<double>(totalTicks)) * 100.0;
		cout << "CPU Usage: " << cpuUsage << "%" << endl;
	}

	return 0;
}
