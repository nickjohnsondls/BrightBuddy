# **🌟 Bright Buddy 🌟**

## **Project Overview**
This repository contains a **full-stack web application** designed to provide **real-time emotion tracking and AI interaction** through speech and text. The system integrates a backend powered by **Flask** and an **SQLite** database for managing button states, and a frontend built in **React** to interact with various backend components. The project also includes functionality for **Speech-to-Text (STT)**, **Text-to-Speech (TTS)**, and **AI text generation** based on specific areas of a given book.

## **✨ Features**
- **Emotion Button States**: React frontend allows toggling and tracking of buttons like **happy**, **sad**, and **ok**.
- **Real-Time Speech-to-Text (STT)**: Capture live audio input and transcribe it in real-time using a local or cloud-based STT model.
- **Text-to-Speech (TTS)**: Convert text-based responses back into lifelike speech using TTS models.
- **Dynamic Button Configuration**: Store and update button states in an SQLite database for tracking different UI components.
- **AI Text Generation**: Generate dynamic responses using a large language model (LLaMA) based on predefined contexts.
- 
## **🛠️ Tech Stack**

### **Backend:**
- **Flask**: For the backend server and RESTful API endpoints.
- **SQLite**: Lightweight database for managing button states and configurations.
- **Whisper / LLaMA Model**: Integrated models for STT and AI text generation (planned).

### **Frontend:**
- **React**: For building interactive user interfaces.
- **Axios**: For making HTTP requests to the Flask backend.

### **AI Models:**
- **Speech-to-Text (STT)**: Whisper or similar models for real-time transcription.
- **Text-to-Speech (TTS)**: LLaMA or Cartesia’s TTS models for speech synthesis.

## **⚙️ Setup Instructions**

1. **Clone the Repository:**
    ```bash
    git clone https://github.com/your-username/emotion-ai-interaction.git
    cd emotion-ai-interaction
    ```

2. **Backend Setup (Flask + SQLite):**

    - **Navigate to the Backend Directory:**
        ```bash
        cd backend
        ```

    - **Create a Virtual Environment and Install Dependencies:**
        ```bash
        python3 -m venv env
        source env/bin/activate   # For Windows, use `env\Scripts\activate`
        pip install -r requirements.txt
        ```

    - **Create the Initial SQLite Database:**
        ```bash
        python create_buttons_db.py
        ```

    - **Start the Flask Server:**
        ```bash
        python app.py
        ```
        The server will start running at `http://127.0.0.1:5000`.

3. **Frontend Setup (React + Axios):**

    - **Navigate to the Frontend Directory:**
        ```bash
        cd ../frontend
        ```

    - **Install React Dependencies:**
        ```bash
        npm install
        ```

    - **Start the React Development Server:**
        ```bash
        npm start
        ```
        The React app will start running at `http://localhost:3000`.

4. **Testing the Button States:**
   - Open the React frontend (`http://localhost:3000`).
   - Toggle the `happy`, `sad`, and `ok` buttons.
   - Observe the changes reflected in the Flask backend (`/get-button-state` endpoint).

## **🌟 API Endpoints Overview**

| **Endpoint**                         | **Method** | **Description**                                                        |
|--------------------------------------|------------|------------------------------------------------------------------------|
| `/get-button-state/<button>`         | `GET`      | Retrieve the current state of a specific button.                       |
| `/update-button-state`               | `POST`     | Update the state of a button with a new value.                         |
| `/transcribe`                        | `POST`     | (Planned) Transcribe live audio using STT.                             |
| `/generate-response`                 | `POST`     | (Planned) Generate AI responses using LLaMA model.                     |

## **🚀 Future Development:**
- **Integrate STT and TTS Models:**
  - Set up real-time STT for capturing user inputs.
  - Implement TTS to convert AI-generated text into speech.

- **Contextual AI Text Generation:**
  - Use LLaMA or another LLM model to generate text-based on specific book segments.

- **Improved Frontend Design:**
  - Add visual indicators and enhancements for different button states.


## **📜 Contributors:**
Nick Johnson, MHacks17

