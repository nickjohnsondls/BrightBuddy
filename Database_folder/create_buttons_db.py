import sqlite3

# Connect to a new SQLite database or create one if it doesn't exist
conn = sqlite3.connect('buttons.db')
c = conn.cursor()

# Create a table for storing button states and configurations
c.execute('''
CREATE TABLE IF NOT EXISTS buttons (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    button_name TEXT NOT NULL,
    action TEXT NOT NULL,
    state TEXT DEFAULT 'inactive',
    timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
)
''')

# Insert initial button configurations (use happy, sad, and ok)
button_configurations = [
    ('happy', 'Indicate happy emotion', 'inactive'),
    ('sad', 'Indicate sad emotion', 'inactive'),
    ('ok', 'Indicate neutral emotion', 'inactive')
]

# Insert the buttons into the table
c.executemany('''
INSERT INTO buttons (button_name, action, state)
VALUES (?, ?, ?)
''', button_configurations)

conn.commit()
conn.close()
print("Database and button configurations created successfully!")
