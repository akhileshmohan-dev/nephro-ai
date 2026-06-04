from flask import Flask, request, jsonify

from pipeline.predict_ckd import predict_ckd

app = Flask(__name__)

@app.route("/predict", methods=["POST"])
def predict():

    patient_data = request.json

    result = predict_ckd(patient_data)

    return jsonify(result)

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)