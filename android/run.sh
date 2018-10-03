#!/bin/bash

./gradlew ${1:-installDevMinSdkDevKernelDebug} --stacktrace && adb shell am start -n android.fapp.com/host.exp.exponent.MainActivity
