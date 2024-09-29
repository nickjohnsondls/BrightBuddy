from flask import Flask, jsonify, request
import sqlite3

app = Flask(__name__)

# Function to get the state of a specific button
def get_button_state(button_name):
    conn = sqlite3.connect('buttons.db')
    c = conn.cursor()
    c.execute('SELECT state FROM buttons WHERE button_name = ?', (button_name,))
    state = c.fetchone()
    conn.close()
    return state[0] if state else None

# Function to update the state of a specific button
def update_button_state(button_name, new_state):
    conn = sqlite3.connect('buttons.db')
    c = conn.cursor()
    c.execute('''
    UPDATE buttons SET state = ?, timestamp = CURRENT_TIMESTAMP
    WHERE button_name = ?
    ''', (new_state, button_name))
    conn.commit()
    conn.close()
    return new_state

# Endpoint to get the state of a button (e.g., happy, sad, ok)
@app.route('/get-button-state/<button_name>', methods=['GET'])
def get_button(button_name):
    state = get_button_state(button_name)
    if state:
        return jsonify({"button_name": button_name, "state": state})
    else:
        return jsonify({"error": "Button not found"}), 404

# Endpoint to update the state of a button (e.g., POST with JSON { "button_name": "happy", "state": "active" })
@app.route('/update-button-state', methods=['POST'])
def update_button():
    data = request.get_json()
    button_name = data['button_name']
    new_state = data['state']
    updated_state = update_button_state(button_name, new_state)
    return jsonify({"button_name": button_name, "new_state": updated_state})

# Run the Flask app
if __name__ == '__main__':
    app.run(debug=True)
