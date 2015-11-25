var json_motor_option = {
"id": "motor_option",
"message0": "Оберіть мотор %1 Оберіть напрямок руху %2 Та задайте потужність %3 %4",
"args0": [
{
"type": "field_dropdown",
"name": "motor",
"options": [
[
  "Лівий",
  "left"
],
[
  "Правий",
  "right"
]
]
},
{
"type": "field_dropdown",
"name": "direction",
"options": [
[
  "Вперед",
  "move_front"
],
[
  "Назад",
  "move_back"
]
]
},
{
"type": "field_input",
"name": "FORCE",
"text": "Потужність"
},
{
"type": "input_statement",
"name": "motor_option"
}
],
"inputsInline": false,
"previousStatement": null,
"nextStatement": null,
"colour": 20,
"tooltip": "",
"helpUrl": "http://www.example.com/"
};
