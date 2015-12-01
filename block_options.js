var run_motor_for_power_and_time_function = {
  "id": "run_motor_for_power_and_time_function",
  "message0": "Select motor %1 %2 and select direction %3 %4 with power %5 for  %6 sec",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "MOTOR",
      "options": [
        [
          "left",
          "LEFT"
        ],
        [
          "right",
          "RIGHT"
        ]
      ]
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "field_dropdown",
      "name": "DIRECTION",
      "options": [
        [
          "front",
          "FRONT"
        ],
        [
          "back",
          "BACK"
        ]
      ]
    },
    {
      "type": "input_dummy",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "POWER",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "TIME",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 90,
  "tooltip": "",
  "helpUrl": "http://www.example.com/"
}


Blockly.JavaScript['run_motor_for_power_and_time_function'] = function(block) {
  var dropdown_motor = block.getFieldValue('MOTOR');
  var dropdown_direction = block.getFieldValue('DIRECTION');
  var value_power = Blockly.JavaScript.valueToCode(block, 'POWER', Blockly.JavaScript.ORDER_ATOMIC);
  var value_time = Blockly.JavaScript.valueToCode(block, 'TIME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = "runMotor(" + (dropdown_motor == "LEFT") + "," + (dropdown_direction == "FRONT") + "," + value_power + "," + value_time + ");";

  return code;
};


Blockly.Blocks['run_motor_for_power_and_time_function'] = {
  init: function() {
    this.jsonInit(run_motor_for_power_and_time_function);
  }
};


//---------------------------------------------------------------------------------------------------------------


var run_motor_for_distance_and_power_function = {
  "id": "run_motor_for_distance_and_power_function",
  "message0": "Select motor %1 %2 and select direction %3 %4 with power %5 for  %6 sm",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "MOTOR",
      "options": [
        [
          "left",
          "LEFT"
        ],
        [
          "right",
          "RIGHT"
        ]
      ]
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "field_dropdown",
      "name": "DIRECTION",
      "options": [
        [
          "front",
          "FRONT"
        ],
        [
          "back",
          "BACK"
        ]
      ]
    },
    {
      "type": "input_dummy",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "POWER",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "DISTANCE",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 90,
  "tooltip": "",
  "helpUrl": "http://www.example.com/"
}


Blockly.JavaScript['run_motor_for_distance_and_power_function'] = function(block) {
  var dropdown_motor = block.getFieldValue('MOTOR');
  var dropdown_direction = block.getFieldValue('DIRECTION');
  var value_power = Blockly.JavaScript.valueToCode(block, 'POWER', Blockly.JavaScript.ORDER_ATOMIC);
  var value_distance = Blockly.JavaScript.valueToCode(block, 'DISTANCE', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  return code;
};


Blockly.Blocks['run_motor_for_distance_and_power_function'] = {
  init: function() {
    this.jsonInit(run_motor_for_distance_and_power_function);
  }
};


//---------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------


var turn_n_grad_function = {
  "id": "turn_n_grad_function",
  "message0": "turn car  %1 grad",
  "args0": [
    {
      "type": "input_value",
      "name": "GRAD",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 15,
  "tooltip": "",
  "helpUrl": "http://www.example.com/"
};


Blockly.JavaScript['turn_n_grad_function'] = function(block) {
  var value_grad = Blockly.JavaScript.valueToCode(block, 'GRAD', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  return code;
};


Blockly.Blocks['turn_n_grad_function'] = {
  init: function() {
    this.jsonInit(turn_n_grad_function);
  }
};


//---------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------


var stop_all_motors_function = {
  "id": "stop_all_motors_function",
  "message0": "stop all motors",
  "args0": [],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 300,
  "tooltip": "",
  "helpUrl": "http://www.example.com/"
}


Blockly.JavaScript['stop_all_motors_function'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  return code;
};


Blockly.Blocks['stop_all_motors_function'] = {
  init: function() {
    this.jsonInit(stop_all_motors_function);
  }
};


//---------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------


var stop_selected_motor_function = {
  "id": "stop_selected_motor_function",
  "message0": "stop %1 motor",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "MOTOR",
      "options": [
        [
          "left",
          "LEFT"
        ],
        [
          "right",
          "RIGHT"
        ]
      ]
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 300,
  "tooltip": "",
  "helpUrl": "http://www.example.com/"
};


Blockly.JavaScript['stop_selected_motor_function'] = function(block) {
  var dropdown_motor = block.getFieldValue('MOTOR');
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  return code;
};


Blockly.Blocks['stop_selected_motor_function'] = {
  init: function() {
    this.jsonInit(stop_selected_motor_function);
  }
};


//---------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------


var check_if_barrier_is_close_than_n_sm_then_turn_k_grad_function = {
  "id": "check_if_barrier_is_close_than_n_sm_then_turn_k_grad_function",
  "message0": "Check if barrier is close than  %1 then turn n grad %2",
  "args0": [
    {
      "type": "input_value",
      "name": "DISTANCE_SENSOR",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "TURN",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 255,
  "tooltip": "",
  "helpUrl": "http://www.example.com/"
};


Blockly.JavaScript['check_if_barrier_is_close_than_n_sm_then_turn_k_grad_function'] = function(block) {
  var value_distance_sensor = Blockly.JavaScript.valueToCode(block, 'DISTANCE_SENSOR', Blockly.JavaScript.ORDER_ATOMIC);
  var value_turn = Blockly.JavaScript.valueToCode(block, 'TURN', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  return code;
};


Blockly.Blocks['check_if_barrier_is_close_than_n_sm_then_turn_k_grad_function'] = {
  init: function() {
    this.jsonInit(check_if_barrier_is_close_than_n_sm_then_turn_k_grad_function);
  }
};

//---------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------
