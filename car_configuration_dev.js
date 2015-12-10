var CAR_PIN_CONTANTS = "#include <Servo.h> 
Servo myservo;
int L298Ninput1 = 5;
int L298Ninput2 = 7;
int L298Ninput3 = 8;
int L298Ninput4 = 6;
int L298NAenable = 9;
int L298NBenable = 10;
bool runOnce = true;
int echoPin = 2; 
int trigPin = 12;
int penPin = 3;";

var CAR_PINS_SETUP="pinMode(L298Ninput1, OUTPUT);
pinMode(L298Ninput4, OUTPUT);
pinMode(L298Ninput2, OUTPUT);
pinMode(L298Ninput3, OUTPUT);
pinMode(L298NAenable, OUTPUT);
pinMode(L298NBenable, OUTPUT);
pinMode(trigPin, OUTPUT); 
pinMode(echoPin, INPUT);
myservo.attach(penPin);";

var FLUSH_ALL_PINS_FUNCTION = "void flushAllPins(){digitalWrite(L298Ninput1,LOW);
        digitalWrite(L298Ninput2,LOW);
        digitalWrite(L298Ninput3, LOW);
        digitalWrite(L298Ninput4, LOW);
        digitalWrite(L298NAenable, LOW);        
        digitalWrite(L298NBenable, LOW);}";

var RUN_MOTOR_FOR_POWER_AND_TIME_FUNCTION = "void runMotorPowerTime(bool isLeft, bool isForward, int powerPerPercent, int time){
if(isForward && isLeft){
        digitalWrite(L298Ninput1,LOW);
        digitalWrite(L298Ninput2, HIGH);
        analogWrite(L298NAenable, powerPerPercent * 2.5);
        delay(time);
    }
else if (!isForward && isLeft){
        digitalWrite(L298Ninput1,HIGH);
        digitalWrite(L298Ninput2, LOW);
        analogWrite(L298NAenable, powerPerPercent * 2.5);
        delay(time);
}
else if (isForward && !isLeft){
        digitalWrite(L298Ninput3,LOW);
        digitalWrite(L298Ninput4, HIGH);
        analogWrite(L298NBenable, powerPerPercent * 2.5);
        delay(time);
}
else if (!isForward && !isLeft){
        digitalWrite(L298Ninput3,HIGH);
        digitalWrite(L298Ninput4, LOW);
        analogWrite(L298NBenable, powerPerPercent * 2.5);
        delay(time);
}
flushAllPins();
}";

var RUN_MOTOR_FOR_DISTANCE_AND_POWER_FUNCTION = "void runMotorDistancePower(bool isLeft, bool isForward, int powerPerPercent, int distance){}";

var RUN_BOTH_MOTORS_FOR_POWER_AND_TIME_FUNCTION = "void runBothMotorsPowerTime(bool isForward, int powerPerPercent, int time){
if(isForward){
        digitalWrite(L298Ninput1,LOW);
        digitalWrite(L298Ninput2, HIGH);
        analogWrite(L298NAenable, powerPerPercent * 2.5);
        digitalWrite(L298Ninput3,LOW);
        digitalWrite(L298Ninput4, HIGH);
        analogWrite(L298NBenable, powerPerPercent * 2.5);
        delay(time);
    }
else if (!isForward){
        digitalWrite(L298Ninput1,HIGH);
        digitalWrite(L298Ninput2, LOW);
        analogWrite(L298NAenable, powerPerPercent * 2.5);
        digitalWrite(L298Ninput3,HIGH);
        digitalWrite(L298Ninput4, LOW);
        analogWrite(L298NBenable, powerPerPercent * 2.5);
        delay(time);
}
flushAllPins();
}";

var RUN_BOTH_MOTORS_FOR_DISTANCE_AND_POWER_FUNCTION = "void runBothMotorsDistancePower(bool isForward, int powerPerPercent, int distance){
if(isForward){
        digitalWrite(L298Ninput1,LOW);
        digitalWrite(L298Ninput2, HIGH);
        analogWrite(L298NAenable, powerPerPercent * 2.5);
        digitalWrite(L298Ninput3,LOW);
        digitalWrite(L298Ninput4, HIGH);
        analogWrite(L298NBenable, powerPerPercent * 2.5);
        delay(time);
    }
else if (!isForward){
        digitalWrite(L298Ninput1,HIGH);
        digitalWrite(L298Ninput2, LOW);
        analogWrite(L298NAenable, powerPerPercent * 2.5);
        digitalWrite(L298Ninput3,HIGH);
        digitalWrite(L298Ninput4, LOW);
        analogWrite(L298NBenable, powerPerPercent * 2.5);
        delay(time);
}
flushAllPins();
}";

var TURN_N_GRAD_FUNCTION = "void turn(int grad){
    if(grad > 0){
        digitalWrite(L298Ninput1,HIGH);
        analogWrite(L298NAenable, 100);
        digitalWrite(L298Ninput2,LOW);
        delay((grad / 90) * 475);
    }
    else{
        digitalWrite(L298Ninput3,HIGH);
        analogWrite(L298NBenable, 100);
        digitalWrite(L298Ninput4,LOW);
        delay((abs(grad) / 90) * 475);
    }
    flushAllPins();
    }";

var STOP_ALL_MOTORS_FUNCTION = "void stopAllMotors(){flushAllPins();}";

var STOP_SELECTED_MOTOR_FUNCTION = "void stopSelectedMotor(bool isLeft){}";

var CHECK_IF_BARRIER_IS_CLOSE_THAN_N_SM_THEN_TURN_K_GRAD_FUNCTION = "void checkIfBarrierIsCloseThanNSmThenTurnKGrad(int distance, int grad){
 int duration, cm; 
  digitalWrite(trigPin, LOW); 
  delayMicroseconds(2); 
  digitalWrite(trigPin, HIGH); 
  delayMicroseconds(10); 
  digitalWrite(trigPin, LOW); 
  duration = pulseIn(echoPin, HIGH); 
  cm = duration / 58;
  if (cm < distance && grad > 0){
        digitalWrite(L298Ninput1,HIGH);
        analogWrite(L298NAenable, 150);
        digitalWrite(L298Ninput2,LOW);
        delay(20);
        delay((grad / 90) * 475);}
  if (cm < distance && grad < 0){
        digitalWrite(L298Ninput3,HIGH);
        analogWrite(L298NBenable, 100);
        digitalWrite(L298Ninput4,LOW);
        delay(20);
        delay((abs(grad) / 90) * 475);
        }flushAllPins();}";

var PEN_UP = "void penUp(){myservo.write(75);delay(2000);}";
var PEN_DOWN = "void penDown(){myservo.write(0);delay(2000);}";