var CAR_PIN_CONTANTS="int L298Ninput1 = 5;\nint L298Ninput2 = 7;\nint L298Ninput3 = 8;\nint L298Ninput4 = 6;\nint L298NAenable = 9;\nint L298NBenable = 10;",CAR_PINS_SETUP="pinMode(L298Ninput1, OUTPUT);\npinMode(L298Ninput4, OUTPUT);\npinMode(L298Ninput2, OUTPUT);\npinMode(L298Ninput3, OUTPUT);\npinMode(L298NAenable, OUTPUT);\npinMode(L298NBenable, OUTPUT);",RUN_MOTOR_FOR_POWER_AND_TIME_FUNCTION="void runMotor(bool isLeft, bool isForward, int powerPerPercent, int time){\nif(isForward && isLeft){\n		digitalWrite(L298Ninput1,HIGH);\n		digitalWrite(L298Ninput3, LOW);\n		analogWrite(L298NAenable, powerPerPercent * 2.5);\n		delay(time);\n	}\nelse if (!isForward && isLeft){\n		digitalWrite(L298Ninput1,LOW);\n		digitalWrite(L298Ninput3, HIGH);\n		analogWrite(L298NAenable, powerPerPercent * 2.5);\n		delay(time);\n}\nelse if (isForward && !isLeft){\n		digitalWrite(L298Ninput2,LOW);\n		digitalWrite(L298Ninput4, HIGH);\n		analogWrite(L298NAenable, powerPerPercent * 2.5);\n		delay(time);\n}\nelse if (!isForward && !isLeft){\n		digitalWrite(L298Ninput2,HIGH);\n		digitalWrite(L298Ninput4, LOW);\n		analogWrite(L298NAenable, powerPerPercent * 2.5);\n		delay(time);\n}\n}",RUN_MOTOR_FOR_DISTANCE_AND_POWER_FUNCTION="void runMotor(bool isLeft, bool isForward, int powerPerPercent, int distance){}",TURN_N_GRAD_FUNNCTION="void turn(int grad){}",STOP_ALL_MOTORS_FUNCTION="void stopAllMotors(){}",STOP_SELECTED_MOTOR_FUNCTION="void stopSelectedMotor(bool isLeft){}",CHECK_IF_BARRIER_IS_CLOSE_THAN_N_SM_THEN_TURN_K_GRAD_FUNCTION="void checkIfBarrierIsCloseThanNSmThenTurnKGrad(int distance, int grad){}";