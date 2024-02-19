from flask import Flask,request,jsonify,after_this_request,render_template
import serial

app = Flask(__name__)
# arduino = serial.Serial(port='COM5', baudrate=115200, timeout=.1)

def send_data(data):
    # print(data)
    return data

# <--------------------------## Select location ##------------------------------->

@app.route('/delivery', methods=['OPTIONS','GET'])
def delivery():
    jsonResp = {'unlock': 4098, 'lock': 4139}
    # arduino.write(b'nL')
    # print(jsonResp)
    return jsonify(jsonResp)

@app.route('/ROOM1-ROOM2', methods=['OPTIONS','GET'])
def ROOM1_ROOM2():
    jsonResp = {'Location1': 'ROOM1', 'Location2': 'ROOM2'}
    # print(jsonResp)
    send_data(jsonResp)
    return jsonify(jsonResp)

@app.route('/ROOM1-ROOM3', methods=['OPTIONS','GET'])
def ROOM1_ROOM3():
    jsonResp = {'Location1': 'ROOM1', 'Location2': 'ROOM3'}
    # print(jsonResp)
    send_data(jsonResp)
    return jsonify(jsonResp)

@app.route('/ROOM1-ROOM4', methods=['OPTIONS','GET'])
def ROOM1_ROOM4():
    jsonResp = {'Location1': 'ROOM1', 'Location2': 'ROOM4'}
    # print(jsonResp)
    send_data(jsonResp)
    return jsonify(jsonResp)

@app.route('/ROOM2-ROOM1', methods=['OPTIONS','GET'])
def ROOM2_ROOM1():
    jsonResp = {'Location1': 'ROOM2', 'Location2': 'ROOM1'}
    # print(jsonResp)
    send_data(jsonResp)
    return jsonify(jsonResp)

@app.route('/ROOM2-ROOM3', methods=['OPTIONS','GET'])
def ROOM2_ROOM3():
    jsonResp = {'Location1': 'ROOM2', 'Location2': 'ROOM3'}
    # print(jsonResp)
    send_data(jsonResp)
    return jsonify(jsonResp)

@app.route('/ROOM2-ROOM4', methods=['OPTIONS','GET'])
def ROOM2_ROOM4():
    jsonResp = {'Location1': 'ROOM2', 'Location2': 'ROOM4'}
    # print(jsonResp)
    send_data(jsonResp)
    return jsonify(jsonResp)

@app.route('/ROOM3-ROOM1', methods=['OPTIONS','GET'])
def ROOM3_ROOM1():
    jsonResp = {'Location1': 'ROOM3', 'Location2': 'ROOM1'}
    # print(jsonResp)
    send_data(jsonResp)
    return jsonify(jsonResp)

@app.route('/ROOM3-ROOM2', methods=['OPTIONS','GET'])
def ROOM3_ROOM2():
    jsonResp = {'Location1': 'ROOM3', 'Location2': 'ROOM2'}
    # print(jsonResp)
    send_data(jsonResp)
    return jsonify(jsonResp)

@app.route('/ROOM3-ROOM4', methods=['OPTIONS','GET'])
def ROOM3_ROOM4():
    jsonResp = {'Location1': 'ROOM3', 'Location2': 'ROOM4'}
    # print(jsonResp)
    send_data(jsonResp)
    return jsonify(jsonResp)

@app.route('/ROOM4-ROOM1', methods=['OPTIONS','GET'])
def ROOM4_ROOM1():
    jsonResp = {'Location1': 'ROOM4', 'Location2': 'ROOM1'}
    # print(jsonResp)
    send_data(jsonResp)
    return jsonify(jsonResp)

@app.route('/ROOM4-ROOM2', methods=['OPTIONS','GET'])
def ROOM4_ROOM2():
    jsonResp = {'Location1': 'ROOM4', 'Location2': 'ROOM2'}
    # print(jsonResp)
    send_data(jsonResp)
    return jsonify(jsonResp)

@app.route('/ROOM4-ROOM3', methods=['OPTIONS','GET'])
def ROOM4_ROOM3():
    jsonResp = {'Location1': 'ROOM4', 'Location2': 'ROOM3'}
    # print(jsonResp)
    send_data(jsonResp)
    return jsonify(jsonResp)

# <--------------------------## Control ##------------------------------->

@app.route('/forward', methods=['OPTIONS','GET'])
def forward():
    text = "forward"
    # print(text)
    send_data(text)
    return text

@app.route('/backward', methods=['OPTIONS','GET'])
def backward():
    text = "backward"
    # print(text)
    send_data(text)
    return text

@app.route('/turnleft', methods=['OPTIONS','GET'])
def turnleft():
    text = "turnleft"
    # print(text)
    send_data(text)
    return text

@app.route('/turnright', methods=['OPTIONS','GET'])
def turnright():
    text = "turnright"
    # print(text)
    send_data(text)
    return text

@app.route('/stop', methods=['OPTIONS','GET'])
def stop():
    text = "stop"
    # print(text)
    send_data(text)
    return text

# @app.route('/ROOM1-ROOM2', methods=['OPTIONS','GET'])
# def delivery():
#     @after_this_request
#     def add_header(response):
#         response.headers.add('Access-Control-Allow-Origin', '*')
#         return response

#     jsonResp = {'unlock': 4098, 'lock': 4139}
#     # arduino.write(b'nL')
#     print(jsonResp)
#     return jsonify(jsonResp)

# @app.route('/home', methods=['OPTIONS','GET'])
# def home():
#     @after_this_request
#     def add_header(response):
#         response.headers.add('Access-Control-Allow-Origin', '*')
#         return response

#     text = "PeePrab"
#     # arduino.write(b'H')
#     print(text)
#     return text

# @app.route('/test', methods=['OPTIONS','GET'])
# def test():
#     @after_this_request
#     def add_header(response):
#         response.headers.add('Access-Control-Allow-Origin', '*')
#         return response

#     text = "test"
#     # arduino.write(b'H')
#     print(text)
#     return text

# @app.route('/start', methods=['POST'])
# def start():
#     data = request.get_json()
#     print(data)
#     return data

# if __name__ == '__main__':
#     app.run(port=80,host="0.0.0.0")

app.run(port=80,host="0.0.0.0")