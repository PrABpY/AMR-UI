#include <Wire.h>
#include <LiquidCrystal_I2C.h>
LiquidCrystal_I2C lcd(0x27, 16, 2);
int a = 0;
int Buzzer = 2;
int incomingByte;
void setup()
{
  lcd.begin();
  lcd.backlight();
  // lcd.setCursor(3, 0); 
  // lcd.print("Prabda Rjd"); 
  // lcd.setCursor(5, 1); 
  // lcd.print("PrABpY"); 
  // delay(2000);
  Serial.begin(115200); 
  pinMode(Buzzer,OUTPUT);
  digitalWrite(Buzzer,HIGH);
  delay(500);
  digitalWrite(Buzzer,LOW);
  delay(500);
  digitalWrite(Buzzer,HIGH);
  delay(500);
  digitalWrite(Buzzer,LOW);
}
void loop() {
  if (Serial.available()) {
    if (a == 0){
      lcd.clear();
      lcd.setCursor(0, 0); 
      lcd.print("IP=>"); 
      incomingByte = Serial.read();
      lcd.setCursor(4, 0); 
      lcd.print(incomingByte); 
      if (incomingByte == 88){
        lcd.setCursor(0, 1); 
        lcd.print("READY"); 
        digitalWrite(Buzzer,HIGH);
        delay(1000);
        digitalWrite(Buzzer,LOW);
      }
    }
    else {

    }
  }
}