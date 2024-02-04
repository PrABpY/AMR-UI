from flask import Flask,request,jsonify,after_this_request,render_template
import serial

app = Flask(__name__)
# arduino = serial.Serial(port='COM5', baudrate=115200, timeout=.1)

@app.route('/delivery', methods=['OPTIONS','GET'])
def delivery():
    jsonResp = {'unlock': 4098, 'lock': 4139}
    # arduino.write(b'nL')
    print(jsonResp)
    return jsonify(jsonResp)

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

if __name__ == '__main__':
    app.run(port=80,host="0.0.0.0")
